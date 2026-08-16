#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";

const read = path => fs.readFileSync(new URL(path, import.meta.url), "utf8");
const home = read("../index.html");
const start = read("../start/index.html");
const privacy = read("../privacy.html");

for (const retiredClaim of [
  "There is no sign-up and no login.",
  "does not follow you between devices automatically",
  "The serious sit-down work lives here on the web",
  "RampUp is built by one person"
]) {
  assert.equal(home.includes(retiredClaim) || start.includes(retiredClaim), false,
    `public funnel must not publish retired trust claim: ${retiredClaim}`);
}

assert.match(home, /same RampUp account/i,
  "homepage must explain that one account connects web and iPhone");
assert.match(home, /progress and subscription/i,
  "homepage must explain that both progress and subscription follow the account");
assert.match(home, /\$49\.99 billed every 3 months/i);
assert.match(home, /\$19\.99 billed monthly/i);
assert.match(home, /2,500\+ practice and exam questions/i);
assert.match(home, /132 narrated walkthroughs/i);

assert.doesNotMatch(start, /built by one person/i);
assert.match(start, /real person reads every message/i);
assert.match(start, /rampupmcat@gmail\.com/i);

assert.match(privacy, /email account/i);
assert.match(privacy, /subscription and study progress work on the website and iPhone/i);

console.log("PASS public trust, account-linking, product-count, and pricing copy is internally consistent");
