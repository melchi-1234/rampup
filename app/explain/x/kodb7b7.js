/* Arrhenius: T sits inside an exponent as 1/T, so equal temperature steps
   repeat a FACTOR, not an amount. Beat 1 is the ungated base frame.
   Round 2 flagged beat 4 as a dumping ground — the reveals are spread one
   idea per beat here, and every revealed run is spoken for. */
RU_EX.reg("kodb7b7", {
  dur: 40,
  css: `
svg[data-x="kodb7b7"]{font-family:inherit}
svg[data-x="kodb7b7"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kodb7b7"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kodb7b7"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kodb7b7"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a second ten kelvin step doubles the rate constant again">
  <text class="tag" x="24" y="26">300 &#8594; 310 K DOUBLED k. WHAT DOES 310 &#8594; 320 K DO?</text>

  <!-- the four claims, letter column and claim column, fixed -->
  <rect class="chip" x="24" y="210" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="244" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="278" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="312" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="228" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="262" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="296" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="330" text-anchor="middle">D</text>
  <text class="sm" x="64" y="228">roughly doubles again &#183; same factor per 10 K</text>
  <text class="sm" x="64" y="262">rises by the same ABSOLUTE amount (linear)</text>
  <text class="sm" x="64" y="296">less effect &#183; activation energy rises with T</text>
  <text class="sm" x="64" y="330">more effect &#183; activation energy falls with T</text>

  <!-- beat 2: T lives inside the exponent, as 1/T -->
  <g data-from="1">
    <text class="lbl" x="24" y="60">k = A &#183; e<tspan font-size="10" dy="-5">(&#8722;Ea/RT)</tspan></text>
    <text class="sm" x="24" y="82" style="fill:var(--accent)">T is inside the exponent, and it enters as one over T</text>
  </g>

  <!-- beat 3: the ratio of two k's, Ea fixed -->
  <g data-from="2">
    <text class="lbl" x="24" y="112">k&#8322;/k&#8321; = e<tspan font-size="10" dy="-5">[(Ea/R)(1/T&#8321; &#8722; 1/T&#8322;)]</tspan></text>
    <text class="sm" x="24" y="134">with Ea fixed, the ratio depends only on the two temperatures</text>
  </g>

  <!-- beat 4: the two steps move 1/T by nearly the same amount -->
  <g data-from="3">
    <text class="sm" x="24"  y="166" style="fill:var(--warn)">1/300 &#8722; 1/310 = 1.075&#215;10&#8315;&#8308;</text>
    <text class="sm" x="300" y="166" style="fill:var(--warn)">1/310 &#8722; 1/320 = 1.008&#215;10&#8315;&#8308;</text>
    <text class="sm" x="24"  y="186" style="fill:var(--warn)">about six percent apart &#8212; near enough to repeat the factor</text>
  </g>

  <!-- beat 5: linear vs exponential, and A wins -->
  <g data-from="4">
    <line x1="64" y1="257" x2="330" y2="257" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="262" style="fill:var(--incorrect)">linear would give 3k&#8320;, not 3.8k&#8320;</text>
    <rect x="24" y="210" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="228" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm" x="352" y="228" style="fill:var(--correct)">&#215;1.9 then &#215;1.9 &#8594; about 3.8k&#8320;</text>
  </g>

  <!-- beat 6: Ea is a property of the path, not of T -->
  <g data-from="5">
    <line x1="64" y1="291" x2="330" y2="291" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="325" x2="330" y2="325" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="296" style="fill:var(--incorrect)">Ea is set by the reaction path</text>
    <text class="sm" x="352" y="330" style="fill:var(--incorrect)">only a catalyst moves it</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "300→310 K doubled k. Which claim fits 310→320 K?"},
    {t: 5.47,  cap: "k = A·e^(−Ea/RT) — T enters as 1/T, inside the exponent"},
    {t: 10.14, cap: "k₂/k₁ = e^[(Ea/R)(1/T₁ − 1/T₂)] — Ea fixed, so only T moves"},
    {t: 17.21, cap: "1/300−1/310 ≈ 1.075×10⁻⁴ vs 1.008×10⁻⁴ — 6.25% smaller"},
    {t: 26.04, cap: "Linear predicts 3k₀; the exponential lands near 3.8k₀"},
    {t: 32.95, cap: "Ea is fixed. In an exponent, compare ratios, not differences."}
  ]
});
