/* Le Chatelier with a temperature change — the one change that moves K itself. */
RU_EX.reg("kkyp6p2", {
  dur: 43,
  css: `
svg[data-x="kkyp6p2"]{font-family:inherit}
svg[data-x="kkyp6p2"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="kkyp6p2"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="kkyp6p2"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kkyp6p2"] .tube{fill:none;stroke:var(--border-strong);stroke-width:2.5}
/* the gas fades from brown toward colorless as it cools */
svg[data-x="kkyp6p2"] #gas{transition:fill-opacity 1.2s ease}
svg[data-x="kkyp6p2"][data-step="4"] #gas,svg[data-x="kkyp6p2"][data-step="5"] #gas,
svg[data-x="kkyp6p2"][data-step="6"] #gas{fill-opacity:.14}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Cooling an endothermic gas equilibrium">
  <!-- the sealed tube -->
  <rect class="tube" x="58" y="60" width="92" height="230" rx="16"/>
  <rect id="gas" x="62" y="64" width="84" height="222" rx="14" fill="#8a5a2b" fill-opacity=".55"/>
  <text class="sm" x="104" y="312" text-anchor="middle">sealed tube</text>
  <text class="sm" x="104" y="46" text-anchor="middle" data-from="0" data-to="2">pale brown at 25 °C</text>
  <text class="sm" x="104" y="46" text-anchor="middle" data-from="4" style="fill:var(--accent)">paler</text>

  <!-- the equilibrium, with heat written in -->
  <text class="big" x="200" y="84">N₂O₄  ⇌  2 NO₂</text>
  <text class="sm"  x="200" y="106">colorless &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; brown</text>
  <text class="lbl" x="200" y="140" data-from="1" style="fill:var(--warn)">endothermic → write heat as a reactant:</text>
  <text class="big" x="200" y="170" data-from="1" style="fill:var(--warn)">N₂O₄ + heat ⇌ 2 NO₂</text>

  <g data-from="2">
    <text class="lbl" x="200" y="212" style="fill:var(--accent)">cool it → you REMOVE heat</text>
    <text class="sm"  x="200" y="232">and heat is on the left, so you removed a reactant</text>
  </g>
  <g data-from="3">
    <path d="M420 250 H286" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#kkA)"/>
    <defs><marker id="kkA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>
    <text class="lbl" x="200" y="268" style="fill:var(--accent)">shifts back toward N₂O₄</text>
  </g>
  <text class="lbl" x="200" y="292" data-from="4">less NO₂ → less brown</text>

  <!-- the part people miss -->
  <g data-from="5">
    <rect x="196" y="306" width="420" height="46" rx="16" fill="var(--incorrect)" opacity=".14"/>
    <text class="lbl" x="406" y="326" text-anchor="middle" style="fill:var(--incorrect)">temperature is the ONE change that moves K itself</text>
    <text class="sm"  x="406" y="344" text-anchor="middle" style="fill:var(--incorrect)">concentration and pressure only shift you within a fixed K</text>
  </g>
  <g data-from="6">
    <rect x="452" y="120" width="164" height="72" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="534" y="148" text-anchor="middle" style="fill:var(--accent)">paler</text>
    <text class="lbl" x="534" y="174" text-anchor="middle" style="fill:var(--accent)">AND Kc decreases</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "N₂O₄ (colorless) ⇌ 2 NO₂ (brown), endothermic"},
    {t: 6, cap: "Endothermic → heat acts like a REACTANT"},
    {t: 12, cap: "Cooling = removing that reactant"},
    {t: 18, cap: "So it shifts back toward N₂O₄"},
    {t: 25, cap: "Less NO₂ → the gas goes paler"},
    {t: 30, cap: "Temperature is the ONE thing that changes K"},
    {t: 36, cap: "Paler AND Kc decreases"}
  ]
});
