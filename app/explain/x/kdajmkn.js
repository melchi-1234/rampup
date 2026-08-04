/* Three clues, each eliminating a candidate transport mechanism. */
RU_EX.reg("kdajmkn", {
  dur: 41,
  css: `
svg[data-x="kdajmkn"]{font-family:inherit}
svg[data-x="kdajmkn"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdajmkn"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kdajmkn"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="kdajmkn"] .ax{stroke:var(--muted);stroke-width:2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Eliminating transport mechanisms from three clues">
  <!-- the saturation curve -->
  <line class="ax" x1="46" y1="180" x2="250" y2="180"/>
  <line class="ax" x1="46" y1="180" x2="46" y2="46"/>
  <path d="M46 178 Q110 82 246 68" fill="none" stroke="var(--accent)" stroke-width="3.5"/>
  <line x1="46" y1="66" x2="246" y2="66" stroke="var(--border-strong)" stroke-dasharray="5 4" data-from="1"/>
  <text class="sm" x="148" y="200" text-anchor="middle">external sugar</text>
  <text class="sm" x="30" y="116" text-anchor="middle" transform="rotate(-90 30 116)">uptake</text>
  <text class="sm" x="252" y="58" data-from="1" fill="var(--accent)">it flattens: saturates</text>

  <!-- the three clues -->
  <text class="lbl" x="24" y="232" data-from="1">1 &middot; saturates</text>
  <text class="sm"  x="24" y="250" data-from="2">a limited number of proteins, all busy</text>
  <text class="lbl" x="24" y="278" data-from="3">2 &middot; a similar sugar competes</text>
  <text class="sm"  x="24" y="296" data-from="3">so the binding site is specific</text>
  <text class="lbl" x="24" y="324" data-from="4">3 &middot; cyanide does nothing</text>
  <text class="sm"  x="24" y="342" data-from="4">block ATP and it carries on</text>

  <!-- candidates, struck out as clues land -->
  <g data-from="2">
    <rect class="box" x="330" y="46" width="286" height="42" rx="12"/>
    <text class="lbl" x="346" y="73">simple diffusion</text>
    <line x1="338" y1="82" x2="608" y2="52" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="608" y="80" text-anchor="end" fill="var(--incorrect)">never saturates</text>
  </g>
  <g data-from="5">
    <rect class="box" x="330" y="100" width="286" height="42" rx="12"/>
    <text class="lbl" x="346" y="127">primary active transport</text>
    <line x1="338" y1="136" x2="608" y2="106" stroke="var(--incorrect)" stroke-width="3"/>
    <rect class="box" x="330" y="154" width="286" height="42" rx="12"/>
    <text class="lbl" x="346" y="181">secondary active transport</text>
    <line x1="338" y1="190" x2="608" y2="160" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="608" y="214" text-anchor="end" fill="var(--incorrect)">both need energy</text>
  </g>
  <g data-from="6">
    <rect x="330" y="244" width="286" height="52" rx="14"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="473" y="268" text-anchor="middle" fill="var(--correct)">facilitated diffusion</text>
    <text class="sm"  x="473" y="286" text-anchor="middle" fill="var(--correct)">a carrier protein, down the gradient</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Three clues, each eliminates something"},
    {t: 4, cap: "Clue 1: uptake saturates"},
    {t: 9, cap: "Saturation → limited proteins. Rules out diffusion."},
    {t: 16, cap: "Clue 2: a similar sugar competes → specific site"},
    {t: 23, cap: "Clue 3: cyanide does nothing → no ATP needed"},
    {t: 29, cap: "So it isn't active transport, either kind"},
    {t: 34, cap: "Protein · saturable · no energy → facilitated diffusion"}
  ]
});
