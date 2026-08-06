/* Doppler: every wrong option is one arithmetic slip off the real formula,
   so each distractor is drawn next to the expression that produces it. */
RU_EX.reg("kgq3mw4", {
  dur: 44,
  css: `
svg[data-x="kgq3mw4"]{font-family:inherit}
svg[data-x="kgq3mw4"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kgq3mw4"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kgq3mw4"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kgq3mw4"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Doppler shift for a moving source and the arithmetic behind each wrong answer">
  <text class="tag" x="24" y="24">SOURCE MOVES TOWARD A STANDING LISTENER</text>

  <!-- base frame: the givens, three fixed columns -->
  <rect x="24" y="34" width="568" height="40" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="48"  y="59">emitted f = 500 Hz</text>
  <text class="sm" x="240" y="59">source v = 34 m/s</text>
  <text class="sm" x="432" y="59">sound v = 340 m/s</text>

  <!-- base frame: all four candidates -->
  <rect class="chip" x="24" y="172" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="210" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="248" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="286" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="190" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="228" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="266" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="304" text-anchor="middle">D</text>
  <text class="sm" x="64" y="190">500 Hz &#183; only the listener</text>
  <text class="sm" x="64" y="228">556 Hz &#183; wavelengths squeezed</text>
  <text class="sm" x="64" y="266">556 Hz &#183; speeds add</text>
  <text class="sm" x="64" y="304">450 Hz &#183; wavelengths stretched</text>

  <!-- beat 2: the formula, and where the source speed goes -->
  <g data-from="1">
    <rect x="24" y="84" width="568" height="46" rx="10" fill="var(--accent)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="105" text-anchor="middle" fill="var(--accent)">f&#8242; = f &#215; v / (v &#8722; vs)</text>
    <text class="sm"  x="320" y="122" text-anchor="middle">the source speed sits in the DENOMINATOR</text>
  </g>

  <!-- beat 3: run the numbers -->
  <g data-from="2">
    <rect x="24" y="136" width="568" height="30" rx="10" fill="var(--correct)" fill-opacity=".18"/>
    <text class="lbl" x="320" y="157" text-anchor="middle" fill="var(--correct)">500 &#215; 340/306 = 555.6 &#8776; 556 Hz</text>
    <rect x="24" y="210" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="228" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="sm" x="316" y="228" fill="var(--correct)">squeezed wavelengths, right formula</text>
  </g>

  <!-- beat 4: 450 is the fraction upside down -->
  <g data-from="3">
    <line x1="64" y1="299" x2="308" y2="299" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="316" y="304" fill="var(--incorrect)">= 500 &#215; 306/340 &#183; the flip</text>
  </g>

  <!-- beat 5: 500 ignores the source; "speeds add" gives 550, not 556 -->
  <g data-from="4">
    <line x1="64" y1="185" x2="308" y2="185" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="316" y="190" fill="var(--incorrect)">source motion shifts pitch too</text>
    <line x1="64" y1="261" x2="308" y2="261" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="316" y="266" fill="var(--incorrect)">that rule gives 500&#215;374/340 = 550</text>
  </g>

  <!-- beat 6: the direction check that kills 450 before any algebra -->
  <g data-from="5">
    <rect x="24" y="322" width="568" height="30" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="342" text-anchor="middle">approaching raises pitch, so anything under 500 Hz is out</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "f = 500 Hz, vs = 34 m/s, v = 340 m/s"},
    {t: 6.59,  cap: "f′ = f·v/(v − vs), source speed on the bottom"},
    {t: 12.22, cap: "500 × 340/306 = 555.6 ≈ 556 Hz"},
    {t: 20.49, cap: "450 = 500 × 306/340 (fraction inverted)"},
    {t: 27.32, cap: '"Speeds add" → 500 × 374/340 = 550, not 556'},
    {t: 36.47, cap: "Approaching → higher pitch. Always."}
  ]
});
