/* Social determinants: split the four choices by where they put the cause,
   upstream (around the person) or downstream (inside them). Beat 1 is base. */
RU_EX.reg("k14l3q1s", {
  dur: 43,
  css: `
svg[data-x="k14l3q1s"]{font-family:inherit}
svg[data-x="k14l3q1s"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k14l3q1s"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k14l3q1s"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k14l3q1s"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sorting four explanations of a neighborhood hypertension gap into upstream and downstream causes">
  <text class="tag" x="24" y="24">SAME CITY &#183; 8 MILES APART &#183; ONE BIG BP GAP</text>

  <!-- beat 1 base frame: the two neighborhoods -->
  <rect x="24" y="36" width="250" height="52" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="149" y="58" text-anchor="middle">NORTH SIDE</text>
  <text class="sm"  x="149" y="78" text-anchor="middle">uncontrolled BP: low</text>
  <text class="sm"  x="320" y="66" text-anchor="middle">&#8592; 8 mi &#8594;</text>
  <rect x="366" y="36" width="250" height="52" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="491" y="58" text-anchor="middle">SOUTH SIDE</text>
  <text class="sm"  x="491" y="78" text-anchor="middle">uncontrolled BP: high</text>

  <!-- beat 2: one axis, and the four choices split across it -->
  <g data-from="1">
    <line x1="316" y1="104" x2="316" y2="344" stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 5"/>
    <text class="tag" x="24"  y="116">UPSTREAM &#183; AROUND THE PERSON</text>
    <text class="tag" x="332" y="116">DOWNSTREAM &#183; INSIDE THE PERSON</text>

    <rect class="chip" x="24" y="126" width="276" height="112" rx="10"/>
    <rect class="chip" x="36" y="138" width="28" height="24" rx="8"/>
    <text class="lbl" x="50" y="156" text-anchor="middle">A</text>
    <text class="sm"  x="72" y="156">structure shapes behavior</text>

    <rect class="chip" x="332" y="126" width="284" height="62" rx="10"/>
    <rect class="chip" x="344" y="138" width="28" height="24" rx="8"/>
    <text class="lbl" x="358" y="156" text-anchor="middle">B</text>
    <text class="sm"  x="380" y="156">residents not educated</text>

    <rect class="chip" x="332" y="196" width="284" height="62" rx="10"/>
    <rect class="chip" x="344" y="208" width="28" height="24" rx="8"/>
    <text class="lbl" x="358" y="226" text-anchor="middle">C</text>
    <text class="sm"  x="380" y="226">inherited predisposition</text>

    <rect class="chip" x="332" y="266" width="284" height="62" rx="10"/>
    <rect class="chip" x="344" y="278" width="28" height="24" rx="8"/>
    <text class="lbl" x="358" y="296" text-anchor="middle">D</text>
    <text class="sm"  x="380" y="296">freely chosen diets</text>
  </g>

  <!-- beat 3: the upstream evidence fills card A -->
  <g data-from="2">
    <rect x="24" y="126" width="276" height="112" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="2"/>
    <rect x="36" y="138" width="28" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="50" y="156" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm"  x="72" y="156" style="fill:var(--correct)">structure shapes behavior</text>
    <text class="sm"  x="44" y="184">1 supermarket / 40,000 people</text>
    <text class="sm"  x="44" y="204">few clinics nearby</text>
    <text class="sm"  x="44" y="224">limited transit to reach food</text>
  </g>

  <!-- beat 4: the passage pre-refutes the education answer -->
  <g data-from="3">
    <line x1="380" y1="151" x2="530" y2="151" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="344" y="176" style="fill:var(--incorrect)">they already know the advice</text>
  </g>

  <!-- beat 5: genes and free choice both fail on the same facts -->
  <g data-from="4">
    <line x1="380" y1="221" x2="545" y2="221" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="344" y="246" style="fill:var(--incorrect)">a zip code is not a gene pool</text>
    <line x1="380" y1="291" x2="510" y2="291" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="344" y="316" style="fill:var(--incorrect)">one store is not a free choice</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <text class="lbl" x="24" y="278" style="fill:var(--accent)">knowledge present,</text>
    <text class="lbl" x="24" y="298" style="fill:var(--accent)">behavior blocked</text>
    <text class="sm"  x="24" y="322">&#8594; the cause is upstream</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "8 miles apart, big gap in uncontrolled hypertension"},
    {t: 8.03,  cap: "Axis: upstream structure ⟷ downstream individual"},
    {t: 14.38, cap: "1 store / 40,000 people, few clinics, low transit ✓"},
    {t: 22.57, cap: "Passage: they KNOW the advice — kills the deficit answer"},
    {t: 29.8,  cap: "C: neighborhood ≠ gene pool. D: \"choice\" with 1 store?"},
    {t: 36.87, cap: "Knowledge present, behavior blocked → look upstream"}
  ]
});
