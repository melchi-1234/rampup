/* Mobility terms answer one of two different questions: WHO is being compared,
   or WHICH DIRECTION the move went. Sort the four choices onto that split and
   the answer falls out. Beat 1 is the ungated base frame. */
RU_EX.reg("k17mae81", {
  dur: 43,
  css: `
svg[data-x="k17mae81"]{font-family:inherit}
svg[data-x="k17mae81"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k17mae81"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k17mae81"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k17mae81"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which mobility term describes Maria compared with her parents">
  <text class="tag" x="24" y="26">THREE GENERATIONS</text>

  <!-- the ladder, oldest at the bottom -->
  <rect x="24" y="106" width="260" height="30" rx="8" fill="var(--surface-2)"/>
  <rect x="24" y="70"  width="260" height="30" rx="8" fill="var(--surface-2)"/>
  <rect x="24" y="34"  width="260" height="30" rx="8" fill="var(--surface-2)"/>
  <text class="sm"  x="40" y="126">grandparents &#183; farm laborers</text>
  <text class="sm"  x="40" y="90">parents &#183; a small grocery store</text>
  <text class="lbl" x="40" y="54">Maria &#183; physician</text>

  <!-- beat 2: which comparison the question actually asks for -->
  <g data-from="1">
    <path d="M296 88 L296 52" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
    <polygon points="292,56 296,46 300,56" fill="var(--accent)"/>
    <text class="sm" x="312" y="60" style="fill:var(--accent)">the question compares Maria with her PARENTS</text>
    <text class="sm" x="312" y="78">not her grandparents, and not her own earlier jobs</text>
  </g>

  <!-- beat 3: the two questions every mobility term answers -->
  <g data-from="2">
    <rect x="24"  y="156" width="284" height="30" rx="8" fill="var(--accent)" fill-opacity=".14"/>
    <rect x="332" y="156" width="284" height="30" rx="8" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="166" y="176" text-anchor="middle" style="fill:var(--accent)">WHO is compared?</text>
    <text class="lbl" x="474" y="176" text-anchor="middle" style="fill:var(--accent)">WHICH DIRECTION?</text>
  </g>

  <!-- the four terms, sorted under the question each one answers -->
  <rect class="chip" x="24"  y="200" width="284" height="30" rx="8"/>
  <rect class="chip" x="24"  y="240" width="284" height="30" rx="8"/>
  <rect class="chip" x="332" y="200" width="284" height="30" rx="8"/>
  <rect class="chip" x="332" y="240" width="284" height="30" rx="8"/>
  <text class="sm" x="40"  y="220">A &#183; intergenerational &#8212; parent to child</text>
  <text class="sm" x="40"  y="260">C &#183; intragenerational &#8212; one person&#8217;s career</text>
  <text class="sm" x="348" y="220">B &#183; downward</text>
  <text class="sm" x="348" y="260">D &#183; horizontal</text>

  <!-- beat 4: intra is the wrong comparison -->
  <g data-from="3">
    <line x1="40" y1="255" x2="290" y2="255" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="24" y="290" style="fill:var(--incorrect)">C compares one person&#8217;s early job with their later job &#8212; not this</text>
  </g>

  <!-- beat 5: direction words answer the other question entirely -->
  <g data-from="4">
    <line x1="348" y1="215" x2="600" y2="215" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="348" y1="255" x2="600" y2="255" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="332" y="290" style="fill:var(--incorrect)">and she rose and changed levels, so neither one even fits</text>
  </g>

  <!-- beat 6 -->
  <g data-from="5">
    <rect x="24" y="308" width="332" height="34" rx="10" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="190" y="330" text-anchor="middle" style="fill:var(--correct)">parent to child &#8594; intergenerational mobility</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Farm laborers, then a grocery store, then a physician"},
    {t: 7.71,  cap: "The comparison asked for: Maria vs. her parents"},
    {t: 14.46, cap: "Two questions: WHO is compared, WHICH direction"},
    {t: 21.77, cap: "Intra = one person's own career. Not this."},
    {t: 28.12, cap: "Downward and horizontal name direction, not who"},
    {t: 35.91, cap: "Parent to child → intergenerational mobility"}
  ]
});
