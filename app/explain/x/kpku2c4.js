/* Serial position: draw the U, point at which end the question asks about,
   then run the four choices past it. Beat 1 is the ungated base frame. */
RU_EX.reg("kpku2c4", {
  dur: 37,
  css: `
svg[data-x="kpku2c4"]{font-family:inherit}
svg[data-x="kpku2c4"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kpku2c4"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kpku2c4"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kpku2c4"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="The serial position curve and which choice explains its start">
  <text class="tag" x="24" y="26">RECALL vs POSITION IN THE LIST</text>

  <!-- axes -->
  <line x1="60" y1="150" x2="330" y2="150" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="40"  x2="60"  y2="150" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="tag" x="60"  y="168">FIRST</text>
  <text class="tag" x="330" y="168" text-anchor="end">LAST</text>
  <text class="tag" x="24" y="40">RECALL</text>

  <!-- the U: high at both ends, sagging through the middle -->
  <path d="M70 56 C110 130 150 138 195 138 C240 138 280 122 320 70"
        fill="none" stroke="var(--accent)" stroke-width="2.5"/>

  <!-- beat 2: name the two ends -->
  <g data-from="1">
    <circle cx="70" cy="56" r="5" fill="var(--accent)"/>
    <circle cx="320" cy="70" r="5" fill="var(--accent)"/>
    <text class="sm" x="76"  y="48">primacy</text>
    <text class="sm" x="314" y="48" text-anchor="end">recency</text>
  </g>

  <!-- beat 3: the question asks about the START -->
  <g data-from="2">
    <path d="M70 84 L70 74" fill="none" stroke="var(--warn)" stroke-width="2.5"/>
    <polygon points="66,76 70,68 74,76" fill="var(--warn)"/>
    <text class="sm" x="70" y="100" fill="var(--warn)">the question asks here</text>
  </g>

  <!-- beat 4: why the early words win -->
  <g data-from="3">
    <text class="sm" x="24" y="196">list still short &#8594; each early word gets rehearsed again and again</text>
    <text class="sm" x="24" y="216" fill="var(--correct)">rehearsal moves them into the long-term store</text>
  </g>

  <!-- choices: one fixed column for the letter, one for the claim -->
  <rect class="chip" x="24"  y="236" width="30" height="26" rx="8"/>
  <rect class="chip" x="24"  y="270" width="30" height="26" rx="8"/>
  <rect class="chip" x="24"  y="304" width="30" height="26" rx="8"/>
  <rect class="chip" x="360" y="236" width="30" height="26" rx="8"/>
  <text class="lbl" x="39"  y="254" text-anchor="middle">A</text>
  <text class="lbl" x="39"  y="288" text-anchor="middle">C</text>
  <text class="lbl" x="39"  y="322" text-anchor="middle">D</text>
  <text class="lbl" x="375" y="254" text-anchor="middle">B</text>
  <text class="sm" x="64"  y="254">primacy &#183; extra rehearsal &#8594; long-term memory</text>
  <text class="sm" x="64"  y="288">proactive interference from earlier learning</text>
  <text class="sm" x="64"  y="322">state-dependent retrieval, cued by the room</text>
  <text class="sm" x="400" y="254">recency &#183; still in short-term memory</text>

  <!-- beat 3 also kills B: right curve, wrong end -->
  <g data-from="2">
    <line x1="366" y1="249" x2="384" y2="249" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="400" y1="249" x2="601" y2="249" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="400" y="274" fill="var(--incorrect)">that is the other end of the curve</text>
  </g>

  <!-- beat 4: A wins, and the voice is explaining exactly this -->
  <g data-from="3">
    <rect x="24" y="236" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="254" text-anchor="middle" fill="var(--correct)">A</text>
  </g>

  <!-- beats 5 and 6: kill the remaining two, one per beat -->
  <g data-from="4">
    <line x1="64" y1="283" x2="330" y2="283" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="64" y="302" fill="var(--incorrect)">interference pushes recall DOWN, never up</text>
  </g>
  <g data-from="5">
    <line x1="64" y1="317" x2="337" y2="317" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="64" y="341" fill="var(--incorrect)">a whole-list cue lifts every word alike</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Recall vs. list position: the serial position curve"},
    {t: 6.59,  cap: "Four choices; two name an end of the curve, two do not"},
    {t: 14.78, cap: "Recency: the right curve at the wrong end"},
    {t: 20.17, cap: "Extra rehearsal early → the long-term store"},
    {t: 25.32, cap: "Interference lowers recall; it cannot raise it"},
    {t: 30.55, cap: "A whole-list cue can't make a position effect"}
  ]
});
