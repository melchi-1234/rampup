/* Read-through: why an early stop codon still leaves ~5% of the enzyme. */
RU_EX.reg("kw92ria", {
  dur: 38,
  css: `
svg[data-x="kw92ria"]{font-family:inherit}
svg[data-x="kw92ria"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kw92ria"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kw92ria"] .mrna{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="kw92ria"] .stop{fill:var(--incorrect)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Ribosomal read-through of a premature stop codon">
  <!-- the message with an early stop -->
  <rect class="mrna" x="40" y="70" width="560" height="34" rx="8"/>
  <rect class="stop" x="188" y="70" width="44" height="34" rx="6"/>
  <text class="sm" x="210" y="92" text-anchor="middle" fill="var(--card)">STOP</text>
  <text class="sm" x="40" y="60">mRNA</text>
  <text class="sm" x="210" y="124" text-anchor="middle" fill="var(--incorrect)">premature, early in the sequence</text>

  <!-- the expected outcome -->
  <g data-from="1">
    <circle cx="150" cy="87" r="18" fill="var(--warn)" opacity=".85"/>
    <text class="sm" x="150" y="150" text-anchor="middle">ribosome halts here</text>
    <text class="sm" x="380" y="150" fill="var(--incorrect)">…and the message is destroyed by nonsense-mediated decay</text>
  </g>
  <g data-from="2">
    <rect x="40" y="172" width="250" height="42" rx="14" fill="var(--incorrect)" opacity=".14"/>
    <text class="lbl" x="165" y="198" text-anchor="middle" fill="var(--incorrect)">so expect ~0% enzyme</text>
    <rect x="330" y="172" width="270" height="42" rx="14" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="465" y="198" text-anchor="middle" fill="var(--correct)">but the child has about 5%</text>
  </g>

  <!-- the resolution -->
  <text class="lbl" x="320" y="248" text-anchor="middle" data-from="3">translation is not perfectly faithful</text>

  <g data-from="4">
    <path d="M210 268 V292" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#kw9A)"/>
    <defs><marker id="kw9A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>
    <text class="sm" x="230" y="286" fill="var(--accent)">occasionally a tRNA slips in instead of the release factor</text>
  </g>
  <g data-from="5">
    <rect class="mrna" x="40" y="298" width="560" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"/>
    <circle cx="470" cy="311" r="14" fill="var(--warn)" opacity=".85"/>
    <text class="sm" x="120" y="316" fill="var(--correct)">reads straight through &mdash; full-length protein</text>
  </g>
  <text class="sm" x="320" y="346" text-anchor="middle" data-from="6" fill="var(--accent)">rare, so only a few percent &mdash; but a few percent is often enough to soften the disease</text>
</svg>`,
  steps: [
    {t: 0, cap: "A nonsense mutation = a premature STOP"},
    {t: 4, cap: "Ribosome stops early · the mRNA gets destroyed"},
    {t: 10, cap: "So expect ~0% — but the child has 5%"},
    {t: 16, cap: "Translation is not perfectly faithful"},
    {t: 20, cap: "Occasionally a tRNA slips in instead of stopping"},
    {t: 26, cap: "The ribosome reads through and finishes"},
    {t: 31, cap: "Rare → a few percent, often enough to soften it"}
  ]
});
