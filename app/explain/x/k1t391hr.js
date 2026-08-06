/* Mobility: absolute and relative are two different questions, so a rising
   floor never licenses a claim about rank. Beat 1 is the ungated base frame. */
RU_EX.reg("k1t391hr", {
  dur: 44,
  css: `
svg[data-x="k1t391hr"]{font-family:inherit}
svg[data-x="k1t391hr"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1t391hr"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1t391hr"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1t391hr"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Absolute mobility rising while relative mobility stays stuck, shown against a twenty percent benchmark">
  <text class="tag" x="24" y="22">TWO FINDINGS THAT LOOK LIKE THEY FIGHT</text>

  <!-- beat 1 base frame -->
  <rect x="24" y="34" width="246" height="48" rx="10" fill="var(--surface-2)"/>
  <text class="tag" x="36" y="54">FINDING 1</text>
  <text class="sm"  x="36" y="72">more professionals than parents</text>
  <rect x="370" y="34" width="246" height="48" rx="10" fill="var(--surface-2)"/>
  <text class="tag" x="382" y="54">FINDING 2</text>
  <text class="sm"  x="382" y="72">origin still predicts the top</text>

  <!-- the four readings, letter column then claim column then verdict column -->
  <text class="lbl" x="24" y="272">A</text>
  <text class="lbl" x="24" y="294">B</text>
  <text class="lbl" x="24" y="316">C</text>
  <text class="lbl" x="24" y="338">D</text>
  <text class="sm" x="44" y="272">absolute up, relative stuck</text>
  <text class="sm" x="44" y="294">so the gap must be shrinking</text>
  <text class="sm" x="44" y="316">exchange mobility, pure merit</text>
  <text class="sm" x="44" y="338">8% &#8800; 0, so opportunity is equal</text>

  <!-- beat 2: split the vocabulary, one term per finding -->
  <g data-from="1">
    <text class="lbl" x="24"  y="104" style="fill:var(--accent)">ABSOLUTE &#183; did the floor rise?</text>
    <text class="lbl" x="370" y="104" style="fill:var(--accent)">RELATIVE &#183; rank given your start</text>
  </g>

  <!-- beat 3: the two chances, and the ratio between them -->
  <g data-from="2">
    <text class="tag" x="24" y="128">CHANCE OF ENDING IN THE TOP QUINTILE</text>
    <text class="sm"  x="24" y="166">top-quintile origin</text>
    <rect x="24" y="172" width="320" height="26" rx="4" fill="var(--accent)" fill-opacity=".35"/>
    <text class="lbl" x="356" y="191" style="fill:var(--accent)">40%</text>
    <text class="sm"  x="24" y="218">bottom-quintile origin</text>
    <rect x="24" y="224" width="64" height="26" rx="4" fill="var(--accent)" fill-opacity=".35"/>
    <text class="lbl" x="100" y="243" style="fill:var(--accent)">8%</text>
    <text class="lbl" x="390" y="217" style="fill:var(--accent)">&#8776; 5 : 1 origin gap</text>

    <rect x="18" y="256" width="226" height="24" rx="8" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="24" y="272" style="fill:var(--correct)">A</text>
    <text class="sm"  x="44" y="272" style="fill:var(--correct)">absolute up, relative stuck</text>
    <text class="sm"  x="330" y="272" style="fill:var(--correct)">the only reading that keeps both</text>
  </g>

  <!-- beat 4: the origin-blind benchmark, drawn across both bars -->
  <g data-from="3">
    <text class="sm" x="192" y="146" style="fill:var(--warn)">20% = origin-blind benchmark</text>
    <line x1="184" y1="152" x2="184" y2="248" stroke="var(--warn)" stroke-width="2" stroke-dasharray="5 4"/>
    <text class="sm" x="390" y="191" style="fill:var(--warn)">double the benchmark</text>
    <text class="sm" x="390" y="243" style="fill:var(--warn)">two fifths of it</text>
  </g>

  <!-- beat 5: where the other three readings break -->
  <g data-from="4">
    <line x1="44" y1="289" x2="235" y2="289" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="294" style="fill:var(--incorrect)">reads relative off absolute</text>
    <line x1="44" y1="311" x2="241" y2="311" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="316" style="fill:var(--incorrect)">5 : 1 is the opposite of open</text>
    <line x1="44" y1="333" x2="255" y2="333" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="338" style="fill:var(--incorrect)">8% is far under the 20% bar</text>
  </g>

  <!-- beat 6: finding 1 never implies finding 2 loosened -->
  <g data-from="5">
    <line x1="278" y1="58" x2="362" y2="58" stroke="var(--incorrect)" stroke-width="2"/>
    <line x1="312" y1="50" x2="328" y2="66" stroke="var(--incorrect)" stroke-width="2.5"/>
    <line x1="328" y1="50" x2="312" y2="66" stroke="var(--incorrect)" stroke-width="2.5"/>
    <text class="sm" x="320" y="84" text-anchor="middle" style="fill:var(--incorrect)">not implied</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "More pros than parents, yet origin still predicts top"},
    {t: 8.99,  cap: "Absolute = floor rises; relative = rank given origin"},
    {t: 18.7,  cap: "40% vs 8% → ~5:1 origin advantage"},
    {t: 24.81, cap: "Perfect mobility = 20% per quintile; 40 and 8 are far off"},
    {t: 33.0,  cap: "Distractors collapse absolute into relative or misread 8%"},
    {t: 38.95, cap: "A rising escalator doesn't reorder who stands where"}
  ]
});
