/* Anaerobic glucose: the blocked ETC is the only fact, and every wrong choice
   either keeps the chain running or hands lactate the wrong substrate.
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("k1fron8s", {
  dur: 40,
  css: `
svg[data-x="k1fron8s"]{font-family:inherit}
svg[data-x="k1fron8s"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1fron8s"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1fron8s"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1fron8s"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why anaerobic glucose nets only two ATP per glucose">
  <text class="tag" x="24" y="26">STRICTLY ANAEROBIC &#183; FATE OF PYRUVATE AND NET ATP</text>

  <!-- beat 1 base: the chain, with no terminal acceptor -->
  <rect x="24" y="40" width="120" height="34" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="84" y="62" text-anchor="middle">NADH</text>
  <text class="lbl" x="160" y="63" text-anchor="middle">&#8594;</text>
  <rect x="176" y="40" width="120" height="34" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="236" y="62" text-anchor="middle">ETC</text>
  <text class="lbl" x="312" y="63" text-anchor="middle">&#8594;</text>
  <rect x="328" y="40" width="120" height="34" rx="10" fill="none"
        stroke="var(--incorrect)" stroke-width="1.5"/>
  <text class="lbl" x="388" y="62" text-anchor="middle" fill="var(--incorrect)">O&#8322;</text>
  <line x1="344" y1="57" x2="432" y2="57" stroke="var(--incorrect)" stroke-width="2"/>
  <text class="sm" x="462" y="62" fill="var(--incorrect)">no terminal acceptor</text>

  <!-- beat 2: the backup that stalls -->
  <g data-from="1">
    <rect x="24" y="88" width="592" height="32" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="36" y="108">NADH piles up &#183; NAD&#8314; never regenerated &#8594; glycolysis would stall</text>
  </g>

  <!-- beat 3: the cytoplasmic rescue -->
  <g data-from="2">
    <rect x="24" y="130" width="340" height="48" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="tag" x="36" y="150">IN THE CYTOPLASM &#183; LACTATE DEHYDROGENASE</text>
    <text class="lbl" x="36" y="170">pyruvate + NADH &#8594; lactate + NAD&#8314;</text>
  </g>

  <!-- beat 4: the ledger -->
  <g data-from="3">
    <rect x="376" y="130" width="240" height="48" rx="10" fill="var(--correct)" fill-opacity=".14"/>
    <text class="tag" x="388" y="150">GLYCOLYSIS ONLY</text>
    <text class="lbl" x="388" y="170">4 &#8722; 2 = net 2 ATP</text>
  </g>

  <!-- the four candidate pairings -->
  <rect class="chip" x="24" y="188" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="220" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="252" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="284" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="206" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="238" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="270" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="302" text-anchor="middle">D</text>
  <text class="sm" x="64" y="206">fully oxidized to CO&#8322; &#183; ~30 ATP</text>
  <text class="sm" x="64" y="238">pyruvate &#8594; lactate, cytoplasm &#183; net 2</text>
  <text class="sm" x="64" y="270">straight into the TCA cycle &#183; &gt;30 ATP</text>
  <text class="sm" x="64" y="302">acetyl-CoA &#8594; lactate &#183; ~30 ATP</text>

  <!-- beat 4 also lands on B -->
  <g data-from="3">
    <rect x="24" y="220" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="238" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="sm" x="380" y="238" fill="var(--correct)">&#10003; only glycolysis pays</text>
  </g>

  <!-- beat 5: the two that keep an oxygen-sized yield -->
  <g data-from="4">
    <line x1="60" y1="201" x2="372" y2="201" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="297" x2="372" y2="297" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="380" y="206" fill="var(--incorrect)">the ETC is switched off</text>
    <text class="sm" x="380" y="302" fill="var(--incorrect)">LDH takes pyruvate, not acetyl-CoA</text>
  </g>

  <!-- beat 6: nothing outruns the aerobic ceiling -->
  <g data-from="5">
    <line x1="60" y1="265" x2="372" y2="265" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="380" y="270" fill="var(--incorrect)">nothing beats the aerobic yield</text>
    <rect x="24" y="318" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="338" text-anchor="middle">the terminal acceptor sets the ATP ceiling</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "No O₂ → the ETC has no terminal electron acceptor"},
    {t: 5.07,  cap: "NADH piles up; no NAD⁺ recycled → glycolysis would halt"},
    {t: 12.14, cap: "Pyruvate + NADH → lactate + NAD⁺, in the cytoplasm"},
    {t: 17.69, cap: "Glycolysis only: 4 made − 2 spent = net 2 ATP per glucose"},
    {t: 25.72, cap: "~30 ATP needs the ETC; LDH acts on pyruvate, not acetyl-CoA"},
    {t: 33.43, cap: "Terminal electron acceptor sets the ATP ceiling"}
  ]
});
