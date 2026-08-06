/* Dopamine hypothesis: two independent arrows pointing the same way. */
RU_EX.reg("k1bdyyfl", {
  dur: 43,
  css: `
svg[data-x="k1bdyyfl"]{font-family:inherit}
svg[data-x="k1bdyyfl"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="k1bdyyfl"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1bdyyfl"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two findings converging on dopamine">
  <!-- finding one -->
  <text class="sm" x="24" y="42" data-from="1">FINDING 1</text>
  <rect class="box" x="24" y="54" width="270" height="76" rx="14" data-from="1"/>
  <text class="lbl" x="40" y="80" data-from="1">drugs that BLOCK dopamine</text>
  <text class="lbl" x="40" y="104" data-from="1" style="fill:var(--correct)">→ hallucinations fall</text>
  <text class="sm"  x="40" y="122" data-from="2">and the harder they block, the better they work</text>

  <!-- finding two -->
  <text class="sm" x="346" y="42" data-from="3">FINDING 2</text>
  <rect class="box" x="346" y="54" width="270" height="76" rx="14" data-from="3"/>
  <text class="lbl" x="362" y="80" data-from="3">drugs that BOOST dopamine</text>
  <text class="lbl" x="362" y="104" data-from="3" style="fill:var(--incorrect)">→ can cause them</text>
  <text class="sm"  x="362" y="122" data-from="3">in people who never had them</text>

  <!-- the two arrows converge -->
  <g data-from="4">
    <path d="M159 140 L300 196" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k1bA)"/>
    <path d="M481 140 L340 196" stroke="var(--accent)" stroke-width="3" fill="none" marker-end="url(#k1bA)"/>
    <defs><marker id="k1bA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>
  </g>
  <text class="sm" x="150" y="180" data-from="4" style="fill:var(--accent)">turn it down &rarr; less</text>
  <text class="sm" x="490" y="180" data-from="4" text-anchor="end" style="fill:var(--accent)">turn it up &rarr; more</text>

  <g data-from="5">
    <rect x="182" y="206" width="276" height="46" rx="16" fill="var(--accent)" opacity=".18"/>
    <text class="lbl" x="320" y="234" text-anchor="middle" style="fill:var(--accent)">two independent arrows, same direction</text>
  </g>

  <g data-from="6">
    <rect x="140" y="268" width="360" height="34" rx="17" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="320" y="291" text-anchor="middle" style="fill:var(--correct)">excess dopamine drives the positive symptoms</text>
    <text class="sm" x="320" y="326" text-anchor="middle">not GABA, not serotonin, not acetylcholine &mdash; none of those match the drugs</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Two findings. What do they both point at?"},
    {t: 4, cap: "Drugs that BLOCK dopamine relieve the symptoms"},
    {t: 11, cap: "Stronger blocking → stronger effect"},
    {t: 17, cap: "Drugs that BOOST dopamine can cause them"},
    {t: 24, cap: "Block it: symptoms fall. Boost it: they appear."},
    {t: 30, cap: "Two independent arrows, same direction"},
    {t: 35, cap: "Excess dopamine drives the positive symptoms"}
  ]
});
