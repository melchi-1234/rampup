/* PCC stops at the aldehyde; chromic acid does not. The reagent picks the stop. */
RU_EX.reg("k1cn0d58", {
  dur: 41,
  css: `
svg[data-x="k1cn0d58"]{font-family:inherit}
svg[data-x="k1cn0d58"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1cn0d58"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1cn0d58"] .node{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.8}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Oxidation of a primary alcohol stopped at the aldehyde">
  <defs><marker id="k1cA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
    orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--text)"/></marker></defs>

  <!-- the oxidation ladder -->
  <rect class="node" x="24" y="90" width="160" height="52" rx="14"/>
  <text class="lbl" x="104" y="114" text-anchor="middle">propan-1-ol</text>
  <text class="sm"  x="104" y="132" text-anchor="middle">C₃H₈O, primary</text>

  <path d="M190 116 H244" stroke="var(--text)" stroke-width="2.5" marker-end="url(#k1cA)"/>
  <rect class="node" x="248" y="90" width="160" height="52" rx="14"/>
  <text class="lbl" x="328" y="120" text-anchor="middle">propanal</text>

  <path d="M414 116 H468" stroke="var(--text)" stroke-width="2.5" marker-end="url(#k1cA)"/>
  <rect class="node" x="472" y="90" width="160" height="52" rx="14"/>
  <text class="lbl" x="552" y="120" text-anchor="middle">propanoic acid</text>
  <text class="sm" x="320" y="66" text-anchor="middle" data-from="1">two possible stopping points</text>

  <!-- PCC stops here -->
  <g data-from="2">
    <line x1="440" y1="86" x2="440" y2="150" stroke="var(--incorrect)" stroke-width="4"/>
    <rect x="248" y="90" width="160" height="52" rx="14" fill="none" stroke="var(--correct)" stroke-width="3"/>
    <text class="lbl" x="440" y="176" text-anchor="middle" fill="var(--correct)">PCC is mild — it stops here</text>
  </g>

  <!-- the evidence -->
  <g data-from="3">
    <rect x="24" y="206" width="286" height="46" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="167" y="234" text-anchor="middle" fill="var(--accent)">IR 1725 cm⁻¹ → a carbonyl</text>
  </g>
  <g data-from="4">
    <rect x="330" y="206" width="286" height="46" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="473" y="228" text-anchor="middle" fill="var(--accent)">¹H NMR 9.7 ppm, 1 H</text>
    <text class="sm"  x="473" y="245" text-anchor="middle" fill="var(--accent)">only an aldehyde proton appears there</text>
  </g>

  <g data-from="5">
    <rect x="150" y="266" width="340" height="34" rx="17" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="320" y="289" text-anchor="middle" fill="var(--correct)">compound Y is propanal</text>
  </g>
  <g data-from="6">
    <text class="sm" x="320" y="322" text-anchor="middle" fill="var(--incorrect)">chromic acid would have gone all the way to the acid (broad O–H)</text>
    <text class="sm" x="320" y="342" text-anchor="middle">the reagent chooses the stopping point, not the substrate</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "A primary alcohol: propan-1-ol"},
    {t: 5, cap: "Two stopping points: aldehyde, then acid"},
    {t: 12, cap: "PCC is mild — it stops at the aldehyde"},
    {t: 17, cap: "IR 1725 cm⁻¹ confirms a carbonyl"},
    {t: 22, cap: "9.7 ppm, one H — the aldehyde proton"},
    {t: 30, cap: "So Y is propanal"},
    {t: 34, cap: "Chromic acid would go all the way to the acid"}
  ]
});
