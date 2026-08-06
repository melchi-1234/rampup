/* NMR: count hydrogen-bearing carbons for the number of signals, then apply
   n+1 with n = adjacent hydrogens. Beat 1 is the ungated base frame. */
RU_EX.reg("klbwnb4", {
  dur: 39,
  css: `
svg[data-x="klbwnb4"]{font-family:inherit}
svg[data-x="klbwnb4"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="klbwnb4"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="klbwnb4"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="klbwnb4"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Ethyl acetate carbon skeleton with hydrogen counts and the resulting three NMR signals">
  <text class="tag" x="24" y="22">ETHYL ACETATE &#183; HOW MANY SIGNALS, AND HOW SPLIT?</text>

  <!-- beat 1 base frame: four carbons, with the hydrogens on each -->
  <rect class="chip" x="56"  y="48" width="96" height="34" rx="10"/>
  <rect class="chip" x="200" y="48" width="96" height="34" rx="10"/>
  <rect class="chip" x="344" y="48" width="96" height="34" rx="10"/>
  <rect class="chip" x="488" y="48" width="96" height="34" rx="10"/>
  <line x1="152" y1="65" x2="200" y2="65" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="296" y1="65" x2="312" y2="65" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="328" y1="65" x2="344" y2="65" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="440" y1="65" x2="488" y2="65" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="lbl" x="104" y="70" text-anchor="middle">CH&#8323;</text>
  <text class="lbl" x="248" y="70" text-anchor="middle">C=O</text>
  <text class="lbl" x="320" y="70" text-anchor="middle">O</text>
  <text class="lbl" x="392" y="70" text-anchor="middle">CH&#8322;</text>
  <text class="lbl" x="536" y="70" text-anchor="middle">CH&#8323;</text>
  <text class="tag" x="24"  y="102">H COUNT</text>
  <text class="sm"  x="104" y="102" text-anchor="middle">3 H</text>
  <text class="sm"  x="248" y="102" text-anchor="middle">0 H</text>
  <text class="sm"  x="392" y="102" text-anchor="middle">2 H</text>
  <text class="sm"  x="536" y="102" text-anchor="middle">3 H</text>

  <!-- the four candidate spectra, letter column then claim column -->
  <rect class="chip" x="24" y="216" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="246" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="276" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="306" width="26" height="22" rx="8"/>
  <text class="lbl" x="37" y="232" text-anchor="middle">A</text>
  <text class="lbl" x="37" y="262" text-anchor="middle">B</text>
  <text class="lbl" x="37" y="292" text-anchor="middle">C</text>
  <text class="lbl" x="37" y="322" text-anchor="middle">D</text>
  <text class="sm" x="60" y="232">3 signals: singlet, quartet, triplet</text>
  <text class="sm" x="60" y="262">2 signals: quartet + triplet only</text>
  <text class="sm" x="60" y="292">3 signals: singlet, doublet, triplet</text>
  <text class="sm" x="60" y="322">4 signals: two singlets, quartet, triplet</text>

  <!-- beat 2: the carbonyl carbon carries no hydrogen, so D loses a peak -->
  <g data-from="1">
    <rect x="200" y="48" width="96" height="34" rx="10" fill="var(--incorrect)" fill-opacity=".16"
          stroke="var(--incorrect)" stroke-width="2"/>
    <text class="lbl" x="248" y="70" text-anchor="middle" style="fill:var(--incorrect)">C=O</text>
    <text class="sm"  x="248" y="102" text-anchor="middle" style="fill:var(--incorrect)">0 H</text>
    <line x1="60" y1="317" x2="337" y2="317" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="350" y="322" style="fill:var(--incorrect)">the carbonyl carries no H</text>
  </g>

  <!-- beat 3: state the rule precisely -->
  <g data-from="2">
    <rect x="24" y="118" width="592" height="30" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="320" y="138" text-anchor="middle">n + 1 &#183; n = hydrogens on the ADJACENT carbon</text>
  </g>

  <!-- beat 4: apply it to each of the three environments -->
  <g data-from="3">
    <rect class="chip" x="24"  y="158" width="190" height="48" rx="10"/>
    <text class="lbl" x="119" y="180" text-anchor="middle">acetyl CH&#8323;</text>
    <text class="sm"  x="119" y="198" text-anchor="middle">n = 0 &#8594; singlet</text>
    <rect class="chip" x="225" y="158" width="190" height="48" rx="10"/>
    <text class="lbl" x="320" y="180" text-anchor="middle">O&#8212;CH&#8322;</text>
    <text class="sm"  x="320" y="198" text-anchor="middle">n = 3 &#8594; quartet</text>
    <rect class="chip" x="426" y="158" width="190" height="48" rx="10"/>
    <text class="lbl" x="521" y="180" text-anchor="middle">terminal CH&#8323;</text>
    <text class="sm"  x="521" y="198" text-anchor="middle">n = 2 &#8594; triplet</text>

    <rect x="20" y="214" width="290" height="26" rx="8" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="37" y="232" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm"  x="60" y="232" style="fill:var(--correct)">3 signals: singlet, quartet, triplet</text>
    <text class="sm"  x="350" y="232" style="fill:var(--correct)">matches n = 0, 3, 2</text>
  </g>

  <!-- beat 5: the two remaining slips -->
  <g data-from="4">
    <line x1="60" y1="257" x2="284" y2="257" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="350" y="262" style="fill:var(--incorrect)">the two CH&#8323; are not equivalent</text>
    <line x1="60" y1="287" x2="304" y2="287" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="350" y="292" style="fill:var(--incorrect)">counts groups, not hydrogens</text>
  </g>

  <!-- beat 6: coupling stops at the ester oxygen -->
  <g data-from="5">
    <line x1="297" y1="57" x2="311" y2="73" stroke="var(--incorrect)" stroke-width="2.5"/>
    <line x1="311" y1="57" x2="297" y2="73" stroke="var(--incorrect)" stroke-width="2.5"/>
    <text class="lbl" x="24" y="346" style="fill:var(--accent)">coupling needs adjacent carbons &#183; it never crosses the O</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "4 carbons, only 3 bear H → 3 signals"},
    {t: 4.19,  cap: "D: carbonyl C has no H, so no 4th peak"},
    {t: 11.42, cap: "n+1: n = neighboring H on adjacent C"},
    {t: 16.49, cap: "0 → singlet · 3 → quartet · 2 → triplet"},
    {t: 25.16, cap: "C: counted groups · B: merged inequivalent CH₃"},
    {t: 32.71, cap: "Coupling doesn't cross O or C=O"}
  ]
});
