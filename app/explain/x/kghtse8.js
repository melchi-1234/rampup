/* Acidity: put the four compounds on a pKa axis, then show each wrong ranking is
   one mis-signed substituent effect. Beat 1 is the ungated base frame. */
RU_EX.reg("kghtse8", {
  dur: 40,
  css: `
svg[data-x="kghtse8"]{font-family:inherit}
svg[data-x="kghtse8"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kghtse8"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kghtse8"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kghtse8"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Ranking four acids on a pKa axis by conjugate-base stability">
  <text class="tag" x="24" y="24">ACIDITY = STABILITY OF THE ANION LEFT BEHIND</text>

  <!-- base frame: the bare pKa axis and the four proposed rankings -->
  <text class="tag" x="50"  y="66">&#8592; STRONGER ACID</text>
  <text class="tag" x="600" y="66" text-anchor="end">WEAKER ACID &#8594;</text>
  <line x1="50" y1="112" x2="600" y2="112" stroke="var(--border-strong)" stroke-width="2"/>

  <rect class="chip" x="24" y="176" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="218" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="260" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="302" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="194" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="236" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="278" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="320" text-anchor="middle">D</text>
  <text class="lbl" x="62" y="194">p-NO&#8322; &gt; PhOH &gt; p-CH&#8323; &gt; EtOH</text>
  <text class="lbl" x="62" y="236">p-NO&#8322; &gt; p-CH&#8323; &gt; PhOH &gt; EtOH</text>
  <text class="lbl" x="62" y="278">EtOH &gt; p-NO&#8322; &gt; PhOH &gt; p-CH&#8323;</text>
  <text class="lbl" x="62" y="320">PhOH &gt; p-NO&#8322; &gt; p-CH&#8323; &gt; EtOH</text>

  <!-- beat 2: phenoxide delocalizes, ethoxide does not -->
  <g data-from="1">
    <rect x="268" y="82" width="312" height="26" rx="5" fill="var(--accent)" fill-opacity=".16"/>
    <text class="sm" x="424" y="100" text-anchor="middle" fill="var(--accent)">PhO&#8315; delocalizes, EtO&#8315; cannot</text>
    <line x1="268" y1="112" x2="268" y2="124" stroke="var(--text)" stroke-width="2"/>
    <line x1="580" y1="112" x2="580" y2="124" stroke="var(--text)" stroke-width="2"/>
    <line x1="268" y1="124" x2="250" y2="132" stroke="var(--border-strong)" stroke-width="1.5"/>
    <line x1="580" y1="124" x2="580" y2="132" stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="sm" x="250" y="144" text-anchor="middle">phenol</text>
    <text class="sm" x="580" y="144" text-anchor="middle">ethanol</text>
    <text class="sm" x="250" y="160" text-anchor="middle">pKa &#8776; 10</text>
    <text class="sm" x="580" y="160" text-anchor="middle">pKa &#8776; 16</text>
  </g>

  <!-- beat 3: para nitro parks the charge on its own oxygens -->
  <g data-from="2">
    <rect x="112" y="82" width="156" height="26" rx="5" fill="var(--correct)" fill-opacity=".2"/>
    <text class="sm" x="190" y="100" text-anchor="middle" fill="var(--correct)">NO&#8322; takes the charge</text>
    <line x1="112" y1="112" x2="112" y2="132" stroke="var(--text)" stroke-width="2"/>
    <text class="sm" x="112" y="144" text-anchor="middle">p-NO&#8322;-phenol</text>
    <text class="sm" x="112" y="160" text-anchor="middle">pKa &#8776; 7</text>
  </g>

  <!-- beat 4: para methyl donates, so it sits just below phenol -->
  <g data-from="3">
    <line x1="284" y1="112" x2="284" y2="124" stroke="var(--text)" stroke-width="2"/>
    <line x1="284" y1="124" x2="330" y2="132" stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="sm" x="330" y="144" text-anchor="middle">p-CH&#8323;-phenol</text>
    <text class="sm" x="330" y="160" text-anchor="middle">pKa &#8776; 10.3</text>

    <rect x="410" y="176" width="206" height="54" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="tag" x="426" y="198" fill="var(--correct)">FINAL ORDER</text>
    <text class="sm"  x="426" y="220" fill="var(--correct)">NO&#8322; &gt; H &gt; CH&#8323; &#8811; EtOH</text>

    <rect x="24" y="176" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="194" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="lbl" x="62" y="194" fill="var(--correct)">p-NO&#8322; &gt; PhOH &gt; p-CH&#8323; &gt; EtOH</text>
    <text class="sm"  x="62" y="212" fill="var(--correct)">NO&#8322; withdraws by resonance</text>
  </g>

  <!-- beat 5: each losing ranking flips one sign -->
  <g data-from="4">
    <line x1="58" y1="231" x2="286" y2="231" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="273" x2="286" y2="273" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="315" x2="286" y2="315" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="62" y="254" fill="var(--incorrect)">methyl DONATES &#8212; it sits below phenol</text>
    <text class="sm" x="62" y="296" fill="var(--incorrect)">bond strength is the wrong test; EtO&#8315; is bare</text>
    <text class="sm" x="62" y="338" fill="var(--incorrect)">that N&#8314; PULLS charge in, never repels</text>
  </g>

  <!-- beat 6: the move that decides every one of these -->
  <g data-from="5">
    <rect x="410" y="244" width="206" height="94" rx="10" fill="var(--surface-2)"/>
    <text class="tag" x="426" y="268">THE MOVE</text>
    <text class="sm"  x="426" y="292">Draw the anion.</text>
    <text class="sm"  x="426" y="312">Then ask where the</text>
    <text class="sm"  x="426" y="330">charge can spread.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Rank acids by conjugate-base stability"},
    {t: 5.07,  cap: "PhO⁻ delocalizes; EtO⁻ cannot (~10 vs ~16)"},
    {t: 14.38, cap: "p-NO₂ pulls charge onto its own oxygens"},
    {t: 21.61, cap: "Order: p-NO₂ > H > p-CH₃ >> ethanol"},
    {t: 28.28, cap: "CH₃ donates; O–H strength ≠ acidity; N⁺ pulls in"},
    {t: 35.59, cap: "Draw the anion, follow the charge"}
  ]
});
