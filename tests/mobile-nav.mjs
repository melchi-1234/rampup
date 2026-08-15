#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const SITE_PORT = 8943;
const CDP_PORT = 9543;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "rampup-mobile-nav-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const server = spawn("python3", ["-m", "http.server", String(SITE_PORT)], {
  cwd: new URL("..", import.meta.url).pathname,
  stdio: "ignore"
});
const chrome = spawn(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  [
    "--headless=new",
    `--remote-debugging-port=${CDP_PORT}`,
    "--disable-gpu",
    "--no-first-run",
    `--user-data-dir=${profile}`
  ],
  { stdio: "ignore" }
);

const clean = () => {
  try { server.kill(); } catch {}
  try { chrome.kill(); } catch {}
  try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
};
process.on("exit", clean);

async function waitForJson(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(200);
  }
  throw new Error(`Timed out waiting for ${url}: ${lastError?.message || "unknown error"}`);
}

try {
  await waitForJson(`http://127.0.0.1:${CDP_PORT}/json/version`);
  const target = await (await fetch(
    `http://127.0.0.1:${CDP_PORT}/json/new?about:blank`,
    { method: "PUT" }
  )).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(resolve => { ws.onopen = resolve; });
  let commandId = 0;
  const waiting = new Map();
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id && waiting.has(message.id)) {
      waiting.get(message.id)(message.result);
      waiting.delete(message.id);
    }
  };
  const send = (method, params = {}) => new Promise(resolve => {
    const id = ++commandId;
    waiting.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const response = await send("Runtime.evaluate", { expression, returnByValue: true });
    if (response?.exceptionDetails) {
      throw new Error(response.exceptionDetails.exception?.description || response.exceptionDetails.text);
    }
    return response?.result?.value;
  };
  const waitForPage = async (expression, timeoutMs = 15000) => {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
      if (await evaluate(expression)) return;
      await sleep(200);
    }
    const location = await evaluate(`({href: location.href, title: document.title, state: document.readyState, html: document.documentElement.outerHTML.length})`);
    throw new Error(`Timed out waiting for page condition: ${expression}; page=${JSON.stringify(location)}`);
  };
  await send("Page.enable");
  await send("Runtime.enable");

  const failures = [];
  for (const width of [320, 390]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true,
      screenWidth: width,
      screenHeight: 844
    });
    await send("Page.navigate", { url: `http://127.0.0.1:${SITE_PORT}/?home=1` });
    await sleep(1200);
    const result = await evaluate(`(function(){
      const login = document.querySelector('[data-cta="login"]');
      const start = document.querySelector('[data-cta="nav"]');
      const logo = document.querySelector('.logo');
      const lr = login.getBoundingClientRect();
      const sr = start.getBoundingClientRect();
      const rr = logo.getBoundingClientRect();
      return {
        loginVisible: lr.width > 0 && lr.height >= 44,
        startVisible: sr.width > 0 && sr.height >= 44,
        noOverlap: rr.right <= lr.left && lr.right <= sr.left,
        noOverflow: document.documentElement.scrollWidth <= innerWidth
      };
    })()`);
    for (const [name, ok] of Object.entries(result)) {
      if (!ok) failures.push(`${width}px: ${name}`);
    }
  }
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: 390,
    screenHeight: 844
  });
  await send("Page.navigate", { url: `http://127.0.0.1:${SITE_PORT}/app/?nogate=1` });
  await waitForPage(`!!document.getElementById("onboardingLogin")`);
  const accountEntry = await evaluate(`(function(){
    document.getElementById("onboardingLogin").click();
    const back = document.getElementById("authGateBack");
    const result = {
      backVisible: !!back && back.getBoundingClientRect().height >= 44,
      returnedToOnboarding: false
    };
    if (back) {
      back.click();
      result.returnedToOnboarding = !document.getElementById("onboarding").hidden
        && document.getElementById("authGate").hidden;
    }
    return result;
  })()`);
  for (const [name, ok] of Object.entries(accountEntry)) {
    if (!ok) failures.push(`account entry: ${name}`);
  }
  await evaluate(`openPaywall(null); true`);
  await sleep(800);
  const paywallClose = await evaluate(`(function(){
    const close = document.querySelector(".sheet-x");
    const rect = close && close.getBoundingClientRect();
    return {
      visible: !!rect && rect.width > 0 && rect.height > 0,
      usableTarget: !!rect && rect.width >= 44 && rect.height >= 44
    };
  })()`);
  for (const [name, ok] of Object.entries(paywallClose)) {
    if (!ok) failures.push(`paywall close: ${name}`);
  }
  ws.close();
  if (failures.length) {
    console.error(`FAIL mobile navigation: ${failures.join(", ")}`);
    process.exitCode = 1;
  } else {
    console.log("PASS mobile entry exposes Login, Start, usable account navigation, and accessible paywall controls");
  }
} finally {
  clean();
}
