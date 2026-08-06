/* Crossing over happens between NON-sister chromatids, which is what makes
   the two sisters of one chromosome stop being identical. */
RU_EX.reg("k1wl78zt", {
  dur: 44,
  css: `
svg[data-x="k1wl78zt"]{font-family:inherit}
svg[data-x="k1wl78zt"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1wl78zt"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1wl78zt"] .chr{stroke-width:13;stroke-linecap:round;fill:none}
svg[data-x="k1wl78zt"] .cen{fill:var(--text)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Crossing over between non-sister chromatids">
  <!-- homologue 1: two sisters, purple. homologue 2: two sisters, amber -->
  <text class="sm" x="86" y="46" text-anchor="middle">homologue A</text>
  <line class="chr" x1="60"  y1="66" x2="60"  y2="250" stroke="var(--accent)"/>
  <line class="chr" x1="112" y1="66" x2="112" y2="250" stroke="var(--accent)"/>
  <circle class="cen" cx="60"  cy="158" r="9"/>
  <circle class="cen" cx="112" cy="158" r="9"/>

  <text class="sm" x="254" y="46" text-anchor="middle">homologue B</text>
  <line class="chr" x1="228" y1="66" x2="228" y2="250" stroke="var(--warn)"/>
  <line class="chr" x1="280" y1="66" x2="280" y2="250" stroke="var(--warn)"/>
  <circle class="cen" cx="228" cy="158" r="9"/>
  <circle class="cen" cx="280" cy="158" r="9"/>

  <!-- true only before the crossover; leaving it up would contradict the
       rest of the scene, which is the whole point being made -->
  <text class="sm" x="170" y="278" text-anchor="middle" data-from="0" data-to="0">after replication, each pair of sisters is identical</text>
  <text class="sm" x="170" y="278" text-anchor="middle" data-from="4" style="fill:var(--incorrect)">these two are no longer identical</text>

  <!-- the crossover: between the INNER two, which are non-sisters -->
  <g data-from="1">
    <path d="M112 104 Q170 92 228 104" stroke="var(--incorrect)" stroke-width="3" fill="none"/>
    <text class="sm" x="170" y="84" text-anchor="middle" style="fill:var(--incorrect)">crossover</text>
    <text class="sm" x="326" y="108" style="fill:var(--incorrect)">between NON-sister chromatids</text>
  </g>

  <!-- the swapped segment, above the centromere -->
  <g data-from="2">
    <line class="chr" x1="112" y1="66" x2="112" y2="104" stroke="var(--warn)"/>
    <line class="chr" x1="228" y1="66" x2="228" y2="104" stroke="var(--accent)"/>
    <text class="sm" x="326" y="132">each swapped a segment above the centromere</text>
  </g>

  <g data-from="3">
    <rect x="326" y="150" width="290" height="70" rx="14" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.6"/>
    <text class="sm"  x="342" y="172">the gene sits above the centromere</text>
    <text class="lbl" x="342" y="196" style="fill:var(--incorrect)">so one sister now carries a</text>
    <text class="lbl" x="342" y="212" style="fill:var(--incorrect)">different allele from its partner</text>
  </g>

  <g data-from="4">
    <text class="lbl" x="326" y="248" style="fill:var(--accent)">the sisters are no longer identical</text>
    <text class="sm"  x="326" y="266">and this happened in meiosis I</text>
  </g>
  <g data-from="5">
    <text class="sm" x="326" y="290" style="fill:var(--muted)">they don't separate until anaphase II &mdash; long after</text>
  </g>
  <g data-from="6">
    <rect x="24" y="312" width="592" height="34" rx="17" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="335" text-anchor="middle" style="fill:var(--accent)">a crossover between a gene and its centromere is exactly what makes sisters differ</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "After replication, sisters ARE identical"},
    {t: 5, cap: "Crossing over swaps between NON-sister chromatids"},
    {t: 13, cap: "One sister trades a segment. Its partner does not."},
    {t: 20, cap: "If the swap covers a heterozygous gene..."},
    {t: 27, cap: "The sisters are no longer identical"},
    {t: 34, cap: "They don't separate until anaphase II"},
    {t: 39, cap: "A crossover gene-to-centromere makes sisters differ"}
  ]
});
