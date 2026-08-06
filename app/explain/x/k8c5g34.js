/* Two moves: symmetry gives the signal count, n+1 gives the splitting.
   The wrong answers each break one of those two moves. */
RU_EX.reg("k8c5g34", {
  dur: 44,
  css: `
svg[data-x="k8c5g34"]{font-family:inherit}
svg[data-x="k8c5g34"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k8c5g34"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k8c5g34"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k8c5g34"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Predicting the proton NMR of 2-chloropropane from symmetry and the n plus one rule">
  <text class="tag" x="24" y="26">&#185;H NMR &#183; (CH&#8323;)&#8322;CHCl &#183; 2-CHLOROPROPANE</text>

  <!-- structure -->
  <line x1="94" y1="90" x2="140" y2="90" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="170" y1="90" x2="218" y2="90" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="155" y1="102" x2="155" y2="126" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="lbl" x="75"  y="95" text-anchor="middle">CH&#8323;</text>
  <text class="lbl" x="155" y="95" text-anchor="middle">CH</text>
  <text class="lbl" x="237" y="95" text-anchor="middle">CH&#8323;</text>
  <text class="lbl" x="155" y="140" text-anchor="middle">Cl</text>

  <!-- the four candidate spectra -->
  <rect class="chip" x="24" y="240" width="272" height="24" rx="12"/>
  <rect class="chip" x="24" y="268" width="272" height="24" rx="12"/>
  <rect class="chip" x="24" y="296" width="272" height="24" rx="12"/>
  <rect class="chip" x="24" y="324" width="272" height="24" rx="12"/>
  <text class="lbl" x="36" y="257">A &#183; 6H singlet + 1H singlet</text>
  <text class="lbl" x="36" y="285">B &#183; 3 signals, one per carbon</text>
  <text class="lbl" x="36" y="313">C &#183; 6H triplet + 1H quartet</text>
  <text class="lbl" x="36" y="341">D &#183; 6H doublet + 1H septet</text>

  <!-- beat 2: the mirror plane fuses the two methyls -->
  <g data-from="1">
    <line x1="155" y1="52" x2="155" y2="150" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <rect x="56"  y="78" width="38" height="24" rx="6" fill="var(--accent)" fill-opacity=".16"/>
    <rect x="218" y="78" width="38" height="24" rx="6" fill="var(--accent)" fill-opacity=".16"/>
    <text class="lbl" x="75"  y="95" text-anchor="middle" style="fill:var(--accent)">CH&#8323;</text>
    <text class="lbl" x="237" y="95" text-anchor="middle" style="fill:var(--accent)">CH&#8323;</text>
    <text class="sm"  x="155" y="166" text-anchor="middle">mirror plane &#8594; 6 H in one environment</text>
  </g>

  <!-- beat 3: two signals, and the splitting rule -->
  <g data-from="2">
    <rect x="320" y="44" width="296" height="58" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="468" y="70"  text-anchor="middle">lines = n + 1</text>
    <text class="sm"  x="468" y="90"  text-anchor="middle">n counts H on the NEIGHBOR carbon</text>
    <text class="sm"  x="468" y="120" text-anchor="middle">so: 2 signals, integration 6 : 1</text>
  </g>

  <!-- beat 4: the two multiplets, drawn -->
  <g data-from="3">
    <line x1="344" y1="176" x2="600" y2="176" stroke="var(--border-strong)" stroke-width="1.5"/>
    <line x1="372" y1="142" x2="372" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="388" y1="142" x2="388" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="478" y1="168" x2="478" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="492" y1="160" x2="492" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="506" y1="150" x2="506" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="520" y1="142" x2="520" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="534" y1="150" x2="534" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="548" y1="160" x2="548" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <line x1="562" y1="168" x2="562" y2="176" stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm" x="380" y="194" text-anchor="middle" style="fill:var(--correct)">6H doublet &#183; n = 1</text>
    <text class="sm" x="520" y="194" text-anchor="middle" style="fill:var(--correct)">1H septet &#183; n = 6</text>
    <rect x="24" y="324" width="272" height="24" rx="12" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="36"  y="341" style="fill:var(--correct)">D &#183; 6H doublet + 1H septet</text>
    <text class="sm"  x="316" y="341" style="fill:var(--correct)">n = 1 &#8594; 2 lines &#183; n = 6 &#8594; 7 lines</text>
  </g>

  <!-- beat 5: where the other three come from -->
  <g data-from="4">
    <line x1="32" y1="252" x2="270" y2="252" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="32" y1="280" x2="270" y2="280" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="32" y1="308" x2="270" y2="308" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="316" y="257" style="fill:var(--incorrect)">a singlet needs zero neighbors</text>
    <text class="sm" x="316" y="285" style="fill:var(--incorrect)">&#185;&#179;C counting &#8212; and &#185;&#179;C gives 2 here</text>
    <text class="sm" x="316" y="313" style="fill:var(--incorrect)">the CH&#8323;CH&#8322;X reflex: n = 2 and 3</text>
  </g>

  <!-- beat 6: the rule that survives -->
  <g data-from="5">
    <rect x="24" y="180" width="280" height="46" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="38" y="202">Split by the NEIGHBORS &#8212;</text>
    <text class="sm" x="38" y="220">never by the H inside the peak.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "(CH₃)₂CHCl — how many signals, what splitting?"},
    {t: 9.07,  cap: "Symmetry: 2 CH₃ equivalent → one 6H environment"},
    {t: 16.14, cap: "2 signals, 6:1 · rule = n+1"},
    {t: 22.33, cap: "CH₃: n=1 → doublet | CH: n=6 → septet"},
    {t: 29.56, cap: "Singlet: n=0 · 3 signals = ¹³C logic · t/q = ethyl"},
    {t: 38.63, cap: "n = neighbors, not the H's in the peak"}
  ]
});
