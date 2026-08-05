/* Meso: 2^n is a CEILING, not a count. List all four labels, show that the
   mixed pair is one compound, and 4 becomes 3. Beat 1 is the base frame.
   Round 2 caught the earlier draft boxing "identical arms" with rects that
   excluded both methyls — this scene labels the arms in text instead of
   drawing a box that has to enclose glyphs whose extents were never measured. */
RU_EX.reg("k1ty74vy", {
  dur: 39,
  css: `
svg[data-x="k1ty74vy"]{font-family:inherit}
svg[data-x="k1ty74vy"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1ty74vy"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1ty74vy"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1ty74vy"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why 2,4-dibromopentane has three stereoisomers, not four">
  <text class="tag" x="24" y="26">2,4-DIBROMOPENTANE &#183; TWO STEREOCENTERS</text>
  <text class="lbl" x="24" y="54">CH&#8323;&#8212;CHBr&#8212;CH&#8322;&#8212;CHBr&#8212;CH&#8323;</text>
  <text class="sm"  x="24" y="76">2&#178; = 4 is the most you can have &#8212; and the trap</text>

  <!-- the four labels, one fixed column, verdict in its own column -->
  <rect class="chip" x="24" y="104" width="96" height="28" rx="8"/>
  <rect class="chip" x="24" y="142" width="96" height="28" rx="8"/>
  <rect class="chip" x="24" y="180" width="96" height="28" rx="8"/>
  <rect class="chip" x="24" y="218" width="96" height="28" rx="8"/>
  <text class="lbl" x="72" y="123" text-anchor="middle">(2R,4R)</text>
  <text class="lbl" x="72" y="161" text-anchor="middle">(2S,4S)</text>
  <text class="lbl" x="72" y="199" text-anchor="middle">(2R,4S)</text>
  <text class="lbl" x="72" y="237" text-anchor="middle">(2S,4R)</text>

  <!-- beat 3: the first two are a genuine enantiomer pair -->
  <g data-from="2">
    <path d="M128 118 L142 118 L142 156 L128 156" fill="none" stroke="var(--correct)" stroke-width="2"/>
    <text class="sm" x="152" y="135" fill="var(--correct)">non-superimposable mirror images</text>
    <text class="sm" x="152" y="153" fill="var(--correct)">a real pair &#8212; that is two compounds</text>
  </g>

  <!-- beat 4: C3 sits between two identical arms -->
  <g data-from="3">
    <text class="sm" x="24" y="272">carbon three has CH&#8323;&#8212;CHBr&#8212; on its left and CH&#8323;&#8212;CHBr&#8212; on its right</text>
    <text class="sm" x="24" y="292" fill="var(--accent)">the two arms are identical, so the molecule can mirror onto itself</text>
  </g>

  <!-- beat 5: the mixed pair collapses to ONE compound -->
  <g data-from="4">
    <path d="M128 194 L142 194 L142 232 L128 232" fill="none" stroke="var(--warn)" stroke-width="2"/>
    <text class="lbl" x="152" y="207" fill="var(--warn)">these two are the SAME molecule</text>
    <text class="sm"  x="152" y="226" fill="var(--warn)">flip it over and it lands on itself</text>
    <text class="sm"  x="152" y="244" fill="var(--warn)">one compound, not two</text>
  </g>

  <!-- beat 6: meso, and the arithmetic -->
  <g data-from="5">
    <rect x="24" y="308" width="288" height="34" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="168" y="330" text-anchor="middle" fill="var(--correct)">4 &#8722; 1 = 3 stereoisomers</text>
    <text class="sm" x="328" y="322">meso: achiral, but still a real compound</text>
    <text class="sm" x="328" y="340">2&#8319; is only ever a maximum</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "CH₃–CHBr–CH₂–CHBr–CH₃ · 2² = 4 is the ceiling, and the trap"},
    {t: 4.67,  cap: "(2R,4R) · (2S,4S) · (2R,4S) · (2S,4R)"},
    {t: 11.50, cap: "(2R,4R) and (2S,4S): true enantiomers → 2 compounds"},
    {t: 19.53, cap: "C3 sits between two identical arms: CH₃–CHBr–"},
    {t: 26.12, cap: "(2R,4S) IS (2S,4R): one meso compound, not two"},
    {t: 31.99, cap: "meso: achiral but real · 4 − 1 = 3 · 2ⁿ is only a maximum"}
  ]
});
