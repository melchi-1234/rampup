/* Bulky base on a tertiary halide: E2, and Hofmann rather than Zaitsev. */
RU_EX.reg("k14jrf8f", {
  dur: 46,
  css: `
svg[data-x="k14jrf8f"]{font-family:inherit}
svg[data-x="k14jrf8f"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k14jrf8f"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k14jrf8f"] .card{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="k14jrf8f"] .bond{stroke:var(--text);stroke-width:2.2}

svg[data-x="k14jrf8f"] .opt{opacity:.25;transition:opacity .45s ease}
svg[data-x="k14jrf8f"] .killSn2,svg[data-x="k14jrf8f"] .killIon,
svg[data-x="k14jrf8f"] .pickE2,svg[data-x="k14jrf8f"] .zai,svg[data-x="k14jrf8f"] .hof,
svg[data-x="k14jrf8f"] .bulky,svg[data-x="k14jrf8f"] .fin{opacity:0;transition:opacity .45s ease}

svg[data-x="k14jrf8f"][data-step="0"] .killSn2,svg[data-x="k14jrf8f"][data-step="1"] .killSn2,
svg[data-x="k14jrf8f"][data-step="2"] .killSn2,svg[data-x="k14jrf8f"][data-step="3"] .killSn2,
svg[data-x="k14jrf8f"][data-step="4"] .killSn2,svg[data-x="k14jrf8f"][data-step="5"] .killSn2,
svg[data-x="k14jrf8f"][data-step="6"] .killSn2{opacity:1}
svg[data-x="k14jrf8f"][data-step="2"] .killIon,svg[data-x="k14jrf8f"][data-step="3"] .killIon,
svg[data-x="k14jrf8f"][data-step="4"] .killIon,svg[data-x="k14jrf8f"][data-step="5"] .killIon,
svg[data-x="k14jrf8f"][data-step="6"] .killIon{opacity:1}
svg[data-x="k14jrf8f"][data-step="3"] .pickE2,svg[data-x="k14jrf8f"][data-step="4"] .pickE2,
svg[data-x="k14jrf8f"][data-step="5"] .pickE2,svg[data-x="k14jrf8f"][data-step="6"] .pickE2{opacity:1}
svg[data-x="k14jrf8f"][data-step="3"] .e2,svg[data-x="k14jrf8f"][data-step="4"] .e2,
svg[data-x="k14jrf8f"][data-step="5"] .e2,svg[data-x="k14jrf8f"][data-step="6"] .e2{opacity:1}
svg[data-x="k14jrf8f"][data-step="4"] .zai,svg[data-x="k14jrf8f"][data-step="5"] .zai,
svg[data-x="k14jrf8f"][data-step="6"] .zai{opacity:1}
svg[data-x="k14jrf8f"][data-step="5"] .bulky,svg[data-x="k14jrf8f"][data-step="6"] .bulky{opacity:1}
svg[data-x="k14jrf8f"][data-step="6"] .hof,svg[data-x="k14jrf8f"][data-step="6"] .fin{opacity:1}
/* once the bulky base wins, Zaitsev is struck out */
svg[data-x="k14jrf8f"][data-step="6"] .zai{opacity:.3}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="E2 with a bulky base giving the Hofmann alkene">
  <text class="lbl" x="24" y="30">2-bromo-2-methylbutane  +  potassium tert-butoxide</text>

  <!-- the four candidate pathways -->
  <g class="opt"><rect class="card" x="24" y="48" width="132" height="42" rx="12"/>
    <text class="lbl" x="90" y="74" text-anchor="middle">SN2</text></g>
  <g class="opt"><rect class="card" x="168" y="48" width="132" height="42" rx="12"/>
    <text class="lbl" x="234" y="74" text-anchor="middle">SN1</text></g>
  <g class="opt"><rect class="card" x="312" y="48" width="132" height="42" rx="12"/>
    <text class="lbl" x="378" y="74" text-anchor="middle">E1</text></g>
  <g class="opt e2"><rect class="card" x="456" y="48" width="132" height="42" rx="12"/>
    <text class="lbl" x="522" y="74" text-anchor="middle">E2</text></g>

  <g class="killSn2">
    <line x1="34" y1="88" x2="146" y2="50" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="90" y="108" text-anchor="middle" style="fill:var(--incorrect)">tertiary: blocked</text>
  </g>
  <g class="killIon">
    <line x1="178" y1="88" x2="290" y2="50" stroke="var(--incorrect)" stroke-width="3"/>
    <line x1="322" y1="88" x2="434" y2="50" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="306" y="108" text-anchor="middle" style="fill:var(--incorrect)">strong base, high conc: no waiting for a carbocation</text>
  </g>
  <g class="pickE2">
    <rect x="456" y="48" width="132" height="42" rx="12" fill="none" stroke="var(--correct)" stroke-width="3"/>
    <text class="sm" x="522" y="108" text-anchor="middle" style="fill:var(--correct)">concerted, one step</text>
  </g>

  <!-- which alkene -->
  <text class="lbl" x="24" y="152">Which alkene?</text>
  <g class="zai">
    <rect class="card" x="24" y="166" width="270" height="92" rx="14"/>
    <text class="sm"  x="42" y="188">the crowded interior proton</text>
    <text class="lbl" x="42" y="214">→ more substituted</text>
    <text class="lbl" x="42" y="238" style="fill:var(--muted)">Zaitsev  (the usual pick)</text>
  </g>
  <g class="bulky">
    <text class="sm" x="616" y="152" text-anchor="end" style="fill:var(--warn)">but a bulky base cannot reach it</text>
  </g>
  <g class="hof">
    <rect class="card" x="346" y="166" width="270" height="92" rx="14"
          fill="var(--correct)" fill-opacity=".16" stroke="var(--correct)"/>
    <text class="sm"  x="364" y="188">the accessible proton on the end</text>
    <text class="lbl" x="364" y="214" style="fill:var(--correct)">→ less substituted</text>
    <text class="lbl" x="364" y="238" style="fill:var(--correct)">Hofmann  ✓</text>
  </g>

  <g class="fin">
    <rect x="110" y="292" width="420" height="30" rx="15" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="312" text-anchor="middle" style="fill:var(--accent)">bulky base is the whole signal</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Tertiary carbon is crowded: SN2 is blocked"},
    {t: 6, cap: "tert-butoxide: strong base, poor nucleophile"},
    {t: 11, cap: "Strong base, high concentration → not SN1 or E1"},
    {t: 18, cap: "E2: concerted, base pulls H as Br leaves"},
    {t: 24, cap: "Normally: the more substituted Zaitsev alkene"},
    {t: 30, cap: "But a bulky base can't reach the crowded proton"},
    {t: 37, cap: "→ the less substituted Hofmann alkene"}
  ]
});
