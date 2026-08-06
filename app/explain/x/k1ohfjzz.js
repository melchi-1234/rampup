/* pI with four pKa values: walk net charge down the pH axis, then average the
   pair that flanks the ZERO band. Every distractor is a different pair. */
RU_EX.reg("k1ohfjzz", {
  dur: 45,
  css: `
svg[data-x="k1ohfjzz"]{font-family:inherit}
svg[data-x="k1ohfjzz"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1ohfjzz"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1ohfjzz"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1ohfjzz"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Finding the isoelectric point of the dipeptide Asp-His from four pKa values">
  <text class="tag" x="24" y="26">DIPEPTIDE Asp&#8211;His &#183; FOUR pKa VALUES &#183; x(pH) ACROSS</text>

  <!-- axis drawn before anything that crosses it -->
  <line x1="60" y1="150" x2="610" y2="150" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="234" y1="143" x2="234" y2="157" stroke="var(--text)" stroke-width="2"/>
  <line x1="278" y1="143" x2="278" y2="157" stroke="var(--text)" stroke-width="2"/>
  <line x1="396" y1="143" x2="396" y2="157" stroke="var(--text)" stroke-width="2"/>
  <line x1="508" y1="143" x2="508" y2="157" stroke="var(--text)" stroke-width="2"/>
  <text class="sm" x="234" y="172" text-anchor="middle">3.1</text>
  <text class="sm" x="278" y="172" text-anchor="middle">3.9</text>
  <text class="sm" x="396" y="172" text-anchor="middle">6.0</text>
  <text class="sm" x="508" y="172" text-anchor="middle">8.0</text>

  <text class="sm" x="24" y="196">acids: 3.1 &#945;-COOH &#183; 3.9 Asp side chain</text>
  <text class="sm" x="24" y="214">bases: 6.0 imidazole &#183; 8.0 &#945;-NH&#8323;&#8314;</text>

  <!-- candidate pI values -->
  <rect class="chip" x="24" y="232" width="76" height="26" rx="13"/>
  <rect class="chip" x="24" y="262" width="76" height="26" rx="13"/>
  <rect class="chip" x="24" y="292" width="76" height="26" rx="13"/>
  <rect class="chip" x="24" y="322" width="76" height="26" rx="13"/>
  <text class="lbl" x="62" y="250" text-anchor="middle">3.5</text>
  <text class="lbl" x="62" y="280" text-anchor="middle">4.95</text>
  <text class="lbl" x="62" y="310" text-anchor="middle">4.55</text>
  <text class="lbl" x="62" y="340" text-anchor="middle">7.0</text>

  <!-- beat 2: fully protonated, net +2 -->
  <g data-from="1">
    <text class="sm" x="60" y="88">all four groups protonated</text>
    <rect x="60" y="100" width="174" height="28" rx="5" fill="var(--incorrect)" fill-opacity=".16"/>
    <text class="lbl" x="147" y="120" text-anchor="middle" style="fill:var(--incorrect)">+2</text>
  </g>

  <!-- beat 3: cross 3.1 then 3.9 -->
  <g data-from="2">
    <rect x="234" y="100" width="44" height="28" rx="5" fill="var(--warn)" fill-opacity=".2"/>
    <text class="lbl" x="256" y="120" text-anchor="middle" style="fill:var(--warn)">+1</text>
    <rect x="278" y="100" width="118" height="28" rx="5" fill="var(--correct)" fill-opacity=".22"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="337" y="120" text-anchor="middle" style="fill:var(--correct)">0</text>
  </g>

  <!-- beat 4: zero ends at 6.0, so average the flanking pair -->
  <g data-from="3">
    <rect x="396" y="100" width="112" height="28" rx="5" fill="var(--surface-2)"/>
    <rect x="508" y="100" width="102" height="28" rx="5" fill="var(--surface-2)"/>
    <text class="lbl" x="452" y="120" text-anchor="middle">&#8722;1</text>
    <text class="lbl" x="559" y="120" text-anchor="middle">&#8722;2</text>
    <path d="M278 92 L278 84 L396 84 L396 92" fill="none" stroke="var(--correct)" stroke-width="2"/>
    <line x1="337" y1="84" x2="337" y2="74" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="337" y="66" text-anchor="middle" style="fill:var(--correct)">(3.9 + 6.0)/2 = 4.95</text>
    <line x1="337" y1="132" x2="337" y2="160" stroke="var(--correct)" stroke-width="2" stroke-dasharray="4 3"/>
    <text class="sm" x="337" y="172" text-anchor="middle" style="fill:var(--correct)">pI 4.95</text>
    <rect x="24" y="262" width="76" height="26" rx="13" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="62" y="280" text-anchor="middle" style="fill:var(--correct)">4.95</text>
    <text class="sm"  x="114" y="280" style="fill:var(--correct)">the pair flanking net charge 0</text>
  </g>

  <!-- beat 5: each near-miss is a different pair of pKa values -->
  <g data-from="4">
    <line x1="30" y1="245" x2="94" y2="245" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="30" y1="305" x2="94" y2="305" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="30" y1="335" x2="94" y2="335" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="114" y="250" style="fill:var(--incorrect)">(3.1 + 3.9)/2 &#8212; that band is +1</text>
    <text class="sm" x="114" y="310" style="fill:var(--incorrect)">(3.1 + 6.0)/2 &#8212; skips the Asp side chain</text>
    <text class="sm" x="114" y="340" style="fill:var(--incorrect)">(6.0 + 8.0)/2 &#8212; flanks the &#8722;1 species</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="380" y="178" width="236" height="44" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="392" y="198">Flank the NEUTRAL species &#8212;</text>
    <text class="sm" x="392" y="216">not the two smallest pKa values.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "pKa: 3.1 & 3.9 (−COOH), 6.0 & 8.0 (+)"},
    {t: 6.11,  cap: "pH < 3.1 → net charge +2"},
    {t: 13.34, cap: "cross 3.1 → +1 ; cross 3.9 → 0"},
    {t: 20.57, cap: "Neutral spans 3.9–6.0 → pI = (3.9+6.0)/2 = 4.95"},
    {t: 27.88, cap: "3.5=(3.1+3.9)/2 · 4.55=(3.1+6.0)/2 · 7.0=(6.0+8.0)/2"},
    {t: 39.59, cap: "Average the two pKa's that flank net charge zero"}
  ]
});
