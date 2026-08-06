/* Boiling point elevation: the whole question is i × m, and one choice hides
   a low molality behind a high i. Beat 1 is the ungated base frame. */
RU_EX.reg("kc33uvm", {
  dur: 41,
  css: `
svg[data-x="kc33uvm"]{font-family:inherit}
svg[data-x="kc33uvm"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kc33uvm"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kc33uvm"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kc33uvm"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which of four solutions boils at the highest temperature">
  <text class="tag" x="24" y="26">WHICH BOILS HIGHEST? &#183; COMPLETE DISSOCIATION ASSUMED</text>

  <!-- the rule -->
  <g data-from="1">
    <rect x="24" y="42" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="62" text-anchor="middle" fill="var(--accent)">elevation counts PARTICLES &#8212; compare i &#215; m, never m on its own</text>
  </g>

  <!-- fixed columns: solution | m | i | product -->
  <text class="tag" x="24"  y="106">SOLUTION</text>
  <text class="tag" x="280" y="106">m</text>
  <text class="tag" x="360" y="106">i</text>
  <text class="tag" x="440" y="106">i &#215; m</text>

  <g data-from="2">
    <text class="sm" x="24"  y="140">0.10 m glucose (nonelectrolyte)</text>
    <text class="sm" x="280" y="140">0.10</text>
    <text class="sm" x="360" y="140">1</text>
    <text class="lbl" x="440" y="140">0.10</text>
  </g>
  <g data-from="3">
    <text class="sm" x="24"  y="180">0.10 m NaCl</text>
    <text class="sm" x="280" y="180">0.10</text>
    <text class="sm" x="360" y="180">2</text>
    <text class="lbl" x="440" y="180">0.20</text>
  </g>
  <g data-from="4">
    <text class="sm" x="24"  y="220">0.05 m Na&#8322;SO&#8324;</text>
    <text class="sm" x="280" y="220">0.05</text>
    <text class="sm" x="360" y="220" fill="var(--warn)">3</text>
    <text class="lbl" x="440" y="220" fill="var(--warn)">0.15</text>
    <text class="sm" x="510" y="220" fill="var(--warn)">high i, low m</text>
  </g>
  <g data-from="5">
    <rect x="18" y="240" width="598" height="34" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="sm"  x="24"  y="262" fill="var(--correct)">0.10 m CaCl&#8322;</text>
    <text class="sm"  x="280" y="262" fill="var(--correct)">0.10</text>
    <text class="sm"  x="360" y="262" fill="var(--correct)">3</text>
    <text class="lbl" x="440" y="262" fill="var(--correct)">0.30</text>
    <text class="sm"  x="510" y="262" fill="var(--correct)">highest</text>
    <text class="sm"  x="24" y="300">three particles AND the full molality &#8212; that is what wins it</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Which boils highest? · assume complete dissociation"},
    {t: 6.99,  cap: "Compare i × m, not m"},
    {t: 13.18, cap: "glucose: i = 1 → 0.10"},
    {t: 19.61, cap: "NaCl: i = 2 → 0.20"},
    {t: 25.40, cap: "Na₂SO₄: i = 3 but m = 0.05 → 0.15"},
    {t: 33.19, cap: "CaCl₂: i = 3 at 0.10 → 0.30 · highest"}
  ]
});
