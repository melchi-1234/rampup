/* Heat written as a product, then treated like one. Beat 1 is the base frame. */
RU_EX.reg("k1pdz0rk", {
  dur: 33,
  css: `
svg[data-x="k1pdz0rk"]{font-family:inherit}
svg[data-x="k1pdz0rk"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1pdz0rk"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1pdz0rk"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1pdz0rk"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Raising the temperature of an exothermic equilibrium">
  <text class="tag" x="24" y="26">N&#8322; + 3H&#8322; &#8652; 2NH&#8323; &#183; EXOTHERMIC &#183; RAISE THE TEMPERATURE</text>
  <g data-from="1">
    <rect x="24" y="46" width="592" height="34" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="68" text-anchor="middle" fill="var(--accent)">N&#8322; + 3H&#8322; &#8652; 2NH&#8323; + heat &#8212; write it as a product</text>
  </g>
  <g data-from="2">
    <line x1="300" y1="106" x2="180" y2="106" stroke="var(--warn)" stroke-width="2.5"/>
    <polygon points="184,101 172,106 184,111" fill="var(--warn)"/>
    <text class="sm" x="320" y="110" fill="var(--warn)">add heat = add a product &#8594; it pushes back LEFT</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="24" y="150" fill="var(--incorrect)">less NH&#8323; at the new equilibrium &#183; and K itself falls</text>
  </g>
  <rect class="chip" x="24" y="176" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="218" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="260" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="302" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="194" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="236" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="278" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="320" text-anchor="middle">D</text>
  <text class="sm" x="64" y="194">shifts toward reactants, less NH&#8323;</text>
  <text class="sm" x="64" y="236">K increases, more NH&#8323; forms</text>
  <text class="sm" x="64" y="278">unaffected &#8212; temperature does not change K</text>
  <text class="sm" x="64" y="320">shifts forward because the forward rate speeds up</text>
  <g data-from="3">
    <rect x="24" y="176" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="194" text-anchor="middle" fill="var(--correct)">A</text>
    <line x1="64" y1="231" x2="330" y2="231" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="236" fill="var(--incorrect)">wrong direction entirely</text>
  </g>
  <g data-from="4">
    <line x1="64" y1="273" x2="380" y2="273" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="24" y="348" fill="var(--incorrect)">temperature is the ONE variable that does change K</text>
  </g>
  <g data-from="5">
    <line x1="64" y1="315" x2="400" y2="315" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="420" y="320" fill="var(--incorrect)">both rates rise</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "N₂ + 3H₂ ⇌ 2NH₃ is exothermic · raise T"},
    {t: 6.51, cap: "Exothermic → write heat as a PRODUCT"},
    {t: 12.3, cap: "Add heat = add a product → shift LEFT"},
    {t: 17.13, cap: "Less NH₃ · and K itself decreases"},
    {t: 21.56, cap: "Temperature is the ONE variable that changes K"},
    {t: 26.95, cap: "Both rates rise — rate is not the same as position"}
  ]
});
