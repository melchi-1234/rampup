/* A destroyed 3' splice site: the intron is retained and read. */
RU_EX.reg("kp6y084", {
  dur: 40,
  css: `
svg[data-x="kp6y084"]{font-family:inherit}
svg[data-x="kp6y084"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kp6y084"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kp6y084"] .exon{fill:var(--accent);opacity:.85}
svg[data-x="kp6y084"] .intron{fill:var(--muted);opacity:.35}

svg[data-x="kp6y084"] .bounds,svg[data-x="kp6y084"] .mut,svg[data-x="kp6y084"] .kept,
svg[data-x="kp6y084"] .ribo,svg[data-x="kp6y084"] .free,svg[data-x="kp6y084"] .fin,
svg[data-x="kp6y084"] .normal{opacity:0;transition:opacity .45s ease}
svg[data-x="kp6y084"][data-step="0"] .normal{opacity:1}
svg[data-x="kp6y084"][data-step="1"] .bounds,svg[data-x="kp6y084"][data-step="2"] .bounds,
svg[data-x="kp6y084"][data-step="3"] .bounds{opacity:1}
svg[data-x="kp6y084"][data-step="2"] .mut,svg[data-x="kp6y084"][data-step="3"] .mut,
svg[data-x="kp6y084"][data-step="4"] .mut,svg[data-x="kp6y084"][data-step="5"] .mut,
svg[data-x="kp6y084"][data-step="6"] .mut{opacity:1}
svg[data-x="kp6y084"][data-step="3"] .kept,svg[data-x="kp6y084"][data-step="4"] .kept,
svg[data-x="kp6y084"][data-step="5"] .kept,svg[data-x="kp6y084"][data-step="6"] .kept{opacity:1}
svg[data-x="kp6y084"][data-step="4"] .ribo,svg[data-x="kp6y084"][data-step="5"] .ribo,
svg[data-x="kp6y084"][data-step="6"] .ribo{opacity:1}
svg[data-x="kp6y084"][data-step="5"] .free,svg[data-x="kp6y084"][data-step="6"] .free{opacity:1}
svg[data-x="kp6y084"][data-step="6"] .fin{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Intron retention from a broken splice site">
  <text class="sm" x="24" y="46">pre-mRNA</text>
  <rect class="exon"   x="24"  y="58" width="150" height="34" rx="6"/>
  <text class="lbl" x="99" y="81" text-anchor="middle" fill="var(--card)">exon 1</text>
  <rect class="intron" x="174" y="58" width="180" height="34"/>
  <text class="sm"  x="264" y="81" text-anchor="middle">intron</text>
  <rect class="exon"   x="354" y="58" width="150" height="34" rx="6"/>
  <text class="lbl" x="429" y="81" text-anchor="middle" fill="var(--card)">exon 2</text>

  <g class="bounds">
    <text class="sm" x="178" y="112" fill="var(--correct)">GU</text>
    <text class="sm" x="332" y="112" fill="var(--correct)">AG</text>
    <text class="sm" x="264" y="130" text-anchor="middle">the spliceosome finds the intron by these</text>
  </g>
  <g class="mut">
    <circle cx="342" cy="75" r="15" fill="none" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="380" y="112" fill="var(--incorrect)">3′ AG destroyed &mdash; boundary invisible</text>
  </g>

  <!-- what the mature message becomes -->
  <text class="sm" x="24" y="176">mature mRNA</text>
  <g class="normal">
    <rect class="exon" x="24" y="188" width="150" height="34" rx="6"/>
    <rect class="exon" x="174" y="188" width="150" height="34" rx="6"/>
    <text class="sm" x="340" y="211">normally: exons joined, intron gone</text>
  </g>
  <g class="kept">
    <rect x="24" y="188" width="480" height="34" rx="6" fill="var(--card)"/>
    <rect class="exon"   x="24"  y="188" width="150" height="34" rx="6"/>
    <rect class="intron" x="174" y="188" width="180" height="34" fill="var(--incorrect)" opacity=".4"/>
    <text class="sm" x="264" y="211" text-anchor="middle" fill="var(--incorrect)">intron RETAINED</text>
    <rect class="exon"   x="354" y="188" width="150" height="34" rx="6"/>
  </g>

  <g class="ribo">
    <circle cx="60" cy="262" r="17" fill="var(--warn)" opacity=".8"/>
    <text class="sm" x="60" y="292" text-anchor="middle">ribosome</text>
    <text class="sm" x="96" y="266">reads straight through &mdash; it cannot remove introns</text>
  </g>
  <g class="free">
    <text class="sm" x="96" y="288">and introns never had to keep the reading frame,</text>
    <text class="sm" x="96" y="306">or avoid stop codons</text>
  </g>
  <g class="fin">
    <rect x="300" y="320" width="316" height="30" rx="15" fill="var(--incorrect)" opacity=".16"/>
    <text class="lbl" x="458" y="340" text-anchor="middle" fill="var(--incorrect)">premature stop or frameshift &rarr; broken protein</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "The spliceosome removes introns in the nucleus"},
    {t: 6, cap: "It finds introns by their conserved boundaries"},
    {t: 11, cap: "Mutate the 3′ AG and the boundary vanishes"},
    {t: 16, cap: "That intron is retained in the mature mRNA"},
    {t: 21, cap: "The ribosome reads it, and cannot remove introns"},
    {t: 27, cap: "Introns need not preserve frame or avoid stops"},
    {t: 33, cap: "→ premature stop or frameshift: broken protein"}
  ]
});
