/* Deprivation: one axis, threshold vs reference group. The stem blocks the
   threshold twice, and the two protest words answer a different question. */
RU_EX.reg("k1mpr56g", {
  dur: 38,
  css: `
svg[data-x="k1mpr56g"]{font-family:inherit}
svg[data-x="k1mpr56g"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1mpr56g"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1mpr56g"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1mpr56g"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sorting deprivation concepts onto a threshold versus reference group axis">
  <text class="tag" x="24" y="26">WELL PAID, AND WALKING OUT</text>

  <!-- base frame: the facts, three fixed columns -->
  <rect x="24" y="34" width="568" height="42" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="48"  y="60">pay &#8593; vs last year</text>
  <text class="sm" x="244" y="60">pay &#8593; vs the region</text>
  <text class="sm" x="444" y="60" style="fill:var(--incorrect)">and still furious</text>

  <!-- base frame: all four candidates -->
  <rect class="chip" x="24" y="166" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="204" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="242" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="280" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="184" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="222" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="260" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="298" text-anchor="middle">D</text>
  <text class="sm" x="64" y="184">Absolute deprivation</text>
  <text class="sm" x="64" y="222">Collective effervescence</text>
  <text class="sm" x="64" y="260">Resource mobilization</text>
  <text class="sm" x="64" y="298">Relative deprivation</text>

  <!-- beat 2: the one axis the question turns on -->
  <g data-from="1">
    <text class="tag" x="24" y="96">MEASURED AGAINST WHAT?</text>
    <line x1="232" y1="127" x2="384" y2="127" stroke="var(--border-strong)" stroke-width="2"/>
    <rect x="24"  y="104" width="200" height="46" rx="10" fill="var(--surface-2)"/>
    <rect x="392" y="104" width="200" height="46" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="124" y="124" text-anchor="middle">a THRESHOLD</text>
    <text class="sm"  x="124" y="141" text-anchor="middle">an objective minimum</text>
    <text class="lbl" x="492" y="124" text-anchor="middle">a REFERENCE GROUP</text>
    <text class="sm"  x="492" y="141" text-anchor="middle">what other people get</text>
  </g>

  <!-- beat 3: the rival plant is the reference group -->
  <g data-from="2">
    <rect x="392" y="104" width="200" height="46" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="492" y="124" text-anchor="middle" style="fill:var(--correct)">a REFERENCE GROUP</text>
    <text class="sm"  x="492" y="141" text-anchor="middle">what other people get</text>
    <rect x="24" y="280" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="298" text-anchor="middle" style="fill:var(--correct)">D</text>
    <text class="sm" x="250" y="298" style="fill:var(--correct)">the felt gap vs the rival plant</text>
  </g>

  <!-- beat 4: the threshold end is blocked by both facts -->
  <g data-from="3">
    <rect x="24" y="104" width="200" height="46" rx="10" fill="var(--incorrect)" fill-opacity=".12"
          stroke="var(--incorrect)" stroke-width="2"/>
    <text class="lbl" x="124" y="124" text-anchor="middle" style="fill:var(--incorrect)">a THRESHOLD</text>
    <text class="sm"  x="124" y="141" text-anchor="middle">an objective minimum</text>
    <line x1="64" y1="179" x2="242" y2="179" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="250" y="184" style="fill:var(--incorrect)">no minimum is unmet &#8212; both facts block it</text>
  </g>

  <!-- beat 5: two words that describe the protest, not the grievance -->
  <g data-from="4">
    <line x1="64" y1="217" x2="242" y2="217" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="255" x2="242" y2="255" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="250" y="222" style="fill:var(--incorrect)">crowd energy at the rally, not a grievance</text>
    <text class="sm" x="250" y="260" style="fill:var(--incorrect)">HOW a movement organizes, not WHY</text>
  </g>

  <!-- beat 6: match the shape of the stem -->
  <g data-from="5">
    <rect x="24" y="316" width="568" height="32" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="336" text-anchor="middle">the stem gave a COMPARISON, so pick the comparison word</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Pay ↑ vs last year, ↑ vs region — still angry"},
    {t: 5.63,  cap: "Axis: objective threshold vs reference group"},
    {t: 10.54, cap: "Relative deprivation = gap vs comparison group"},
    {t: 17.29, cap: "Absolute deprivation = below a real threshold"},
    {t: 22.84, cap: "Those explain the protest, not its cause"},
    {t: 31.99, cap: "Comparison in the stem → comparison in the answer"}
  ]
});
