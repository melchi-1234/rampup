/* Why even-chain fat can't become net glucose: the irreversible decarboxylation. */
RU_EX.reg("k1wz6t44", {
  dur: 43,
  css: `
svg[data-x="k1wz6t44"]{font-family:inherit}
svg[data-x="k1wz6t44"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1wz6t44"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1wz6t44"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which carbon sources can become glucose">
  <text class="lbl" x="320" y="30" text-anchor="middle">day 4 of a fast &mdash; which carbon can become glucose?</text>

  <!-- the gate -->
  <g data-from="1">
    <rect x="180" y="46" width="280" height="38" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="71" text-anchor="middle" fill="var(--accent)">must enter at or above pyruvate</text>
  </g>

  <!-- fatty acid route -->
  <g data-from="2">
    <rect class="box" x="24" y="106" width="180" height="40" rx="12"/>
    <text class="lbl" x="114" y="132" text-anchor="middle">palmitate (fat)</text>
    <path d="M114 150 V182" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#kwA)"/>
    <defs><marker id="kwA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
    <rect class="box" x="24" y="188" width="180" height="40" rx="12"/>
    <text class="lbl" x="114" y="214" text-anchor="middle">acetyl-CoA</text>
    <text class="sm" x="130" y="172" fill="var(--incorrect)">loses CO₂</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="114" y="256" text-anchor="middle" fill="var(--incorrect)">irreversible</text>
    <text class="sm"  x="114" y="274" text-anchor="middle" fill="var(--incorrect)">no way back to pyruvate</text>
    <line x1="34" y1="238" x2="194" y2="196" stroke="var(--incorrect)" stroke-width="3"/>
  </g>

  <!-- leucine -->
  <g data-from="5">
    <rect class="box" x="230" y="188" width="180" height="40" rx="12"/>
    <text class="lbl" x="320" y="214" text-anchor="middle">leucine</text>
    <text class="sm"  x="320" y="248" text-anchor="middle" fill="var(--incorrect)">purely ketogenic</text>
    <text class="sm"  x="320" y="266" text-anchor="middle" fill="var(--incorrect)">also only acetyl-CoA</text>
    <line x1="240" y1="238" x2="400" y2="196" stroke="var(--incorrect)" stroke-width="3"/>
  </g>

  <!-- glycerol -->
  <g data-from="6">
    <rect x="436" y="106" width="180" height="40" rx="12"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="526" y="132" text-anchor="middle" fill="var(--correct)">glycerol</text>
    <path d="M526 150 V182" stroke="var(--correct)" stroke-width="2.5" marker-end="url(#kwB)"/>
    <defs><marker id="kwB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--correct)"/></marker></defs>
    <rect x="436" y="188" width="180" height="40" rx="12"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="526" y="214" text-anchor="middle" fill="var(--correct)">DHAP → glucose</text>
    <text class="sm"  x="526" y="252" text-anchor="middle" fill="var(--correct)">nothing lost on the way</text>
    <text class="sm"  x="526" y="270" text-anchor="middle">the triglyceride backbone</text>
  </g>

  <g data-from="4">
    <rect x="60" y="298" width="520" height="46" rx="16" fill="var(--incorrect)" opacity=".14"/>
    <text class="lbl" x="320" y="318" text-anchor="middle" fill="var(--incorrect)">even-chain fat cannot become NET glucose</text>
    <text class="sm"  x="320" y="336" text-anchor="middle" fill="var(--incorrect)">the carbon is already gone as CO₂ before pyruvate</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Day 4 of a fast: the liver makes glucose"},
    {t: 5, cap: "A source must enter at or above pyruvate"},
    {t: 11, cap: "Fatty acids → acetyl-CoA, losing carbon as CO₂"},
    {t: 18, cap: "That decarboxylation is IRREVERSIBLE"},
    {t: 24, cap: "So even-chain fat → no net glucose"},
    {t: 30, cap: "Leucine is purely ketogenic — also out"},
    {t: 36, cap: "Glycerol works — the fat's backbone, nothing lost"}
  ]
});
