/* Structure elucidation as three clues narrowing to one answer. */
RU_EX.reg("ke9xvns", {
  dur: 45,
  css: `
svg[data-x="ke9xvns"]{font-family:inherit}
svg[data-x="ke9xvns"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="ke9xvns"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="ke9xvns"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="ke9xvns"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="ke9xvns"] .bond{stroke:var(--text);stroke-width:2.2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Identifying C3H6O from IR and NMR">
  <text class="big" x="24" y="42">C₃H₆O</text>
  <text class="lbl" x="120" y="42" data-from="0" fill="var(--accent)">→ 1 degree of unsaturation</text>
  <text class="sm"  x="120" y="62" data-from="1">so: one ring, or one double bond. exactly one.</text>

  <!-- clue 1: IR carbonyl -->
  <g data-from="2">
    <rect class="box" x="24" y="82" width="286" height="56" rx="14"/>
    <text class="lbl" x="44" y="106">IR: strong band at 1715 cm⁻¹</text>
    <text class="sm"  x="44" y="126" fill="var(--accent)">a carbonyl, C=O</text>
  </g>
  <text class="sm" x="330" y="112" data-from="3" fill="var(--accent)">and that C=O uses up the ONE degree</text>
  <text class="sm" x="330" y="130" data-from="3">so nothing else can be unsaturated</text>

  <!-- clue 2: no OH -->
  <g data-from="4">
    <rect class="box" x="24" y="150" width="286" height="56" rx="14"/>
    <text class="lbl" x="44" y="174">no band at 3200–3550</text>
    <text class="sm"  x="44" y="194" fill="var(--incorrect)">no O–H → not an alcohol</text>
    <line x1="330" y1="196" x2="470" y2="172" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="336" y="190" fill="var(--incorrect)">allyl alcohol is out</text>
  </g>

  <!-- clue 3: one NMR peak -->
  <g data-from="5">
    <rect class="box" x="24" y="218" width="286" height="56" rx="14"/>
    <text class="lbl" x="44" y="242">¹H NMR: ONE peak</text>
    <text class="sm"  x="44" y="262">integrating for all six hydrogens</text>
    <text class="sm" x="330" y="248" fill="var(--incorrect)">propanal has 3 environments — out</text>
  </g>

  <!-- the answer -->
  <g data-from="6">
    <line class="bond" x1="424" y1="60" x2="466" y2="60"/>
    <line class="bond" x1="466" y1="60" x2="508" y2="60"/>
    <line class="bond" x1="466" y1="60" x2="466" y2="30"/>
    <line class="bond" x1="472" y1="60" x2="472" y2="30"/>
    <text class="sm" x="466" y="24" text-anchor="middle">O</text>
    <text class="sm" x="410" y="65" text-anchor="end">H₃C</text>
    <text class="sm" x="516" y="65">CH₃</text>
    <text class="sm" x="466" y="84" text-anchor="middle">two identical methyls, no neighbors</text>
    <rect x="24" y="292" width="592" height="46" rx="16" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="320" y="314" text-anchor="middle" fill="var(--correct)">acetone</text>
    <text class="sm"  x="320" y="332" text-anchor="middle" fill="var(--correct)">six equivalent H's with nothing adjacent to split them</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "C₃H₆O → exactly one degree of unsaturation"},
    {t: 6, cap: "So: one ring, or one double bond"},
    {t: 11, cap: "IR 1715 cm⁻¹ → a carbonyl"},
    {t: 17, cap: "That uses up the one degree — nothing else left"},
    {t: 24, cap: "No O–H band → not an alcohol"},
    {t: 31, cap: "NMR: ONE peak, all six hydrogens"},
    {t: 37, cap: "Six identical H's, no neighbors → acetone"}
  ]
});
