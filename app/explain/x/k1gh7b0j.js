/* Frameshift: one inserted base recuts every codon downstream.
   Uses data-from step gating, so this module carries no visibility CSS. */
RU_EX.reg("k1gh7b0j", {
  dur: 38,
  css: `
svg[data-x="k1gh7b0j"]{font-family:inherit}
svg[data-x="k1gh7b0j"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1gh7b0j"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1gh7b0j"] .base{font-family:ui-monospace,Menlo,monospace;font-size:17px;font-weight:700;fill:var(--text)}
svg[data-x="k1gh7b0j"] .codon{fill:var(--accent);opacity:.16;stroke:var(--accent);stroke-width:1.4}
svg[data-x="k1gh7b0j"] .codon2{fill:var(--incorrect);opacity:.16;stroke:var(--incorrect);stroke-width:1.4}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="A single insertion shifting the reading frame">
  <text class="sm" x="24" y="44">normal mRNA &mdash; read in threes from the start</text>
  <g>
    <rect class="codon" x="24"  y="56" width="84" height="40" rx="7"/>
    <rect class="codon" x="114" y="56" width="84" height="40" rx="7"/>
    <rect class="codon" x="204" y="56" width="84" height="40" rx="7"/>
    <rect class="codon" x="294" y="56" width="84" height="40" rx="7"/>
    <rect class="codon" x="384" y="56" width="84" height="40" rx="7"/>
    <text class="base" x="66"  y="83" text-anchor="middle">AUG</text>
    <text class="base" x="156" y="83" text-anchor="middle">CCA</text>
    <text class="base" x="246" y="83" text-anchor="middle">GGU</text>
    <text class="base" x="336" y="83" text-anchor="middle">ACU</text>
    <text class="base" x="426" y="83" text-anchor="middle">UUC</text>
    <text class="sm" x="486" y="83">→ a working protein</text>
  </g>

  <!-- one extra base goes in -->
  <g data-from="1">
    <text class="lbl" x="24" y="136" fill="var(--incorrect)">insert a single G here &darr;</text>
    <circle cx="128" cy="176" r="13" fill="var(--incorrect)"/>
    <text class="base" x="128" y="182" text-anchor="middle" fill="var(--card)">G</text>
  </g>

  <text class="sm" x="24" y="216" data-from="2">every codon after it is now cut in a different place</text>
  <g data-from="2">
    <rect class="codon"  x="24"  y="228" width="84" height="40" rx="7"/>
    <rect class="codon2" x="114" y="228" width="84" height="40" rx="7"/>
    <rect class="codon2" x="204" y="228" width="84" height="40" rx="7"/>
    <rect class="codon2" x="294" y="228" width="84" height="40" rx="7"/>
    <text class="base" x="66"  y="255" text-anchor="middle">AUG</text>
    <text class="base" x="156" y="255" text-anchor="middle" fill="var(--incorrect)">GCC</text>
    <text class="base" x="246" y="255" text-anchor="middle" fill="var(--incorrect)">AGG</text>
    <text class="base" x="336" y="255" text-anchor="middle" fill="var(--incorrect)">UAC</text>
  </g>

  <text class="sm" x="486" y="244" data-from="3" fill="var(--incorrect)">different amino acids,</text>
  <text class="sm" x="486" y="262" data-from="3" fill="var(--incorrect)">not just one wrong</text>

  <g data-from="4">
    <rect x="384" y="228" width="84" height="40" rx="7" fill="var(--incorrect)" opacity=".85"/>
    <text class="base" x="426" y="255" text-anchor="middle" fill="var(--card)">UGA</text>
    <text class="sm" x="426" y="290" text-anchor="middle" fill="var(--incorrect)">a stop, by chance</text>
  </g>

  <g data-from="5">
    <text class="lbl" x="24" y="306" fill="var(--incorrect)">translation halts here → short, nonfunctional</text>
  </g>
  <g data-from="6">
    <rect x="150" y="322" width="340" height="28" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="341" text-anchor="middle" fill="var(--accent)">a frameshift changes ALL downstream codons</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "The ribosome reads in fixed groups of three"},
    {t: 4, cap: "Insert ONE nucleotide near the start"},
    {t: 9, cap: "Every downstream codon is now cut differently"},
    {t: 15, cap: "Downstream amino acids are entirely different"},
    {t: 21, cap: "A stop codon usually turns up early by chance"},
    {t: 27, cap: "Translation halts: short, nonfunctional protein"},
    {t: 32, cap: "Frameshift — not silent, not missense"}
  ]
});
