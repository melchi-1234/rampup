/* Memory sorts on one axis: can you put it into words? Three choices sit on the
   statable side or on the wrong timescale. Beat 1 is the ungated base frame. */
RU_EX.reg("k1mlajjk", {
  dur: 34,
  css: `
svg[data-x="k1mlajjk"]{font-family:inherit}
svg[data-x="k1mlajjk"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1mlajjk"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1mlajjk"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1mlajjk"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sorting memory systems by whether the memory can be stated in words">
  <text class="tag" x="24" y="24">PLAYS THE PIECE FLAWLESSLY &#183; CANNOT STATE THE MOVES</text>

  <!-- base frame: the gap, and the four candidate systems -->
  <text class="lbl" x="24" y="52">The gap: perfect performance, zero verbal access.</text>

  <text class="tag" x="62"  y="158">SYSTEM</text>
  <text class="tag" x="190" y="158">FAMILY</text>
  <text class="tag" x="330" y="158">WHY IT FITS OR FAILS</text>

  <rect class="chip" x="24" y="172" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="208" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="244" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="280" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="190" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="226" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="262" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="298" text-anchor="middle">D</text>
  <text class="lbl" x="62" y="190">semantic</text>
  <text class="lbl" x="62" y="226">episodic</text>
  <text class="lbl" x="62" y="262">working memory</text>
  <text class="lbl" x="62" y="298">procedural</text>

  <!-- beat 2: the one axis the question turns on -->
  <g data-from="1">
    <rect x="24"  y="76" width="288" height="54" rx="10" fill="var(--surface-2)"/>
    <rect x="328" y="76" width="288" height="54" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="168" y="100" text-anchor="middle">DECLARATIVE</text>
    <text class="sm"  x="168" y="120" text-anchor="middle">you can put it into words</text>
    <text class="lbl" x="472" y="100" text-anchor="middle">NONDECLARATIVE</text>
    <text class="sm"  x="472" y="120" text-anchor="middle">it only shows up in doing</text>
  </g>

  <!-- beat 3: semantic and episodic both sit on the statable side -->
  <g data-from="2">
    <rect x="24" y="76" width="288" height="54" rx="10" fill="var(--incorrect)" fill-opacity=".12"
          stroke="var(--incorrect)" stroke-width="2"/>
    <text class="lbl" x="168" y="100" text-anchor="middle" style="fill:var(--incorrect)">DECLARATIVE</text>
    <text class="sm"  x="168" y="120" text-anchor="middle" style="fill:var(--incorrect)">she could state it &#8212; she cannot</text>
    <line x1="58" y1="185" x2="180" y2="185" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="221" x2="180" y2="221" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="190" y="190" style="fill:var(--incorrect)">declarative</text>
    <text class="sm" x="190" y="226" style="fill:var(--incorrect)">declarative</text>
  </g>

  <!-- beat 4: what each would actually have looked like -->
  <g data-from="3">
    <text class="sm" x="330" y="190" style="fill:var(--incorrect)">she would recite the sequence</text>
    <text class="sm" x="330" y="226" style="fill:var(--incorrect)">the summer she learned it, not the skill</text>
  </g>

  <!-- beat 5: working memory fails on timescale; procedural is the fit -->
  <g data-from="4">
    <line x1="58" y1="257" x2="180" y2="257" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="190" y="262" style="fill:var(--incorrect)">seconds-long buffer</text>
    <text class="sm" x="330" y="262" style="fill:var(--incorrect)">memorized years ago, not seconds</text>

    <rect x="328" y="76" width="288" height="54" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="472" y="100" text-anchor="middle" style="fill:var(--correct)">NONDECLARATIVE</text>
    <text class="sm"  x="472" y="120" text-anchor="middle" style="fill:var(--correct)">procedural &#183; skills and actions</text>

    <rect x="24" y="280" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="298" text-anchor="middle" style="fill:var(--correct)">D</text>
    <text class="lbl" x="62"  y="298" style="fill:var(--correct)">procedural</text>
    <text class="sm"  x="190" y="298" style="fill:var(--correct)">nondeclarative</text>
    <text class="sm"  x="330" y="298" style="fill:var(--correct)">the skill lives in the hands</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="24" y="316" width="592" height="32" rx="10" fill="var(--correct)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="338" text-anchor="middle" style="fill:var(--correct)">Shows up in doing but not in telling &#8594; nondeclarative.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Performs flawlessly, cannot verbalize"},
    {t: 5.15,  cap: "Axis: declarative (statable) vs nondeclarative"},
    {t: 8.86,  cap: "Semantic + episodic = declarative → she could say it"},
    {t: 15.45, cap: "Episodic = the learning event, not the skill"},
    {t: 21.72, cap: "Working mem ≈ seconds → procedural, nondeclarative"},
    {t: 28.55, cap: "Shown by doing, not by telling"}
  ]
});
