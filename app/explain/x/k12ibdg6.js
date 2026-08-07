/* CARS detail: the passage states the motive, so the answer is assembled from
   the passage's own words. Colour is the whole argument here.
     var(--accent)    a word the passage actually uses  (quoted above, again inside B)
     var(--correct)   the choice the passage supports
     var(--incorrect) a word the passage never uses, and the verdict that kills it
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("k12ibdg6", {
  dur: 40,
  css: `
svg[data-x="k12ibdg6"]{font-family:inherit}
svg[data-x="k12ibdg6"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k12ibdg6"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k12ibdg6"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k12ibdg6"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="k12ibdg6"] .quote{fill:var(--surface-2)}
svg[data-x="k12ibdg6"][data-step="3"] .kept,svg[data-x="k12ibdg6"][data-step="4"] .kept,
svg[data-x="k12ibdg6"][data-step="5"] .kept{fill:var(--accent)}
svg[data-x="k12ibdg6"][data-step="4"] .gone,svg[data-x="k12ibdg6"][data-step="5"] .gone{fill:var(--incorrect)}
svg[data-x="k12ibdg6"][data-step="5"] .goneD{fill:var(--incorrect)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which stated motive the passage actually gives for decorating blank map regions">
  <text class="tag" x="24" y="26">CARS &#183; WHY DECORATE THE BLANK REGIONS?</text>

  <!-- base frame: the four motives on offer, all standing, none judged yet -->
  <text class="tag" x="24" y="152">FOUR MOTIVES ON OFFER</text>
  <rect class="chip" x="24" y="164" width="30" height="28" rx="8"/>
  <rect class="chip" x="24" y="208" width="30" height="28" rx="8"/>
  <rect class="chip" x="24" y="252" width="30" height="28" rx="8"/>
  <rect class="chip" x="24" y="296" width="30" height="28" rx="8"/>
  <text class="lbl" x="39" y="183" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="227" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="271" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="315" text-anchor="middle">D</text>
  <text class="sm" x="64" y="183">no <tspan class="gone">skill</tspan> to leave a map blank</text>
  <text class="sm" x="64" y="227">look <tspan class="kept">complete</tspan>, and project <tspan class="kept">authority</tspan></text>
  <text class="sm" x="64" y="271">the <tspan class="gone">government</tspan> required it</text>
  <text class="sm" x="64" y="315">genuinely <tspan class="goneD">believed</tspan> monsters lived there</text>

  <!-- beat 2: the first half of the stated motive, in the passage's words -->
  <g data-from="1">
    <rect class="quote" x="24" y="42" width="256" height="86" rx="12"/>
    <text class="tag" x="38" y="66">THE PATRON&#8217;S DEMAND</text>
    <text class="sm"  x="38" y="92">&#8220;a map that looked <tspan style="fill:var(--accent)">complete</tspan></text>
    <text class="sm"  x="38" y="112">and confident&#8221;</text>
  </g>

  <!-- beat 3: the second half, from the closing sentence -->
  <g data-from="2">
    <rect class="quote" x="292" y="42" width="324" height="86" rx="12"/>
    <text class="tag" x="306" y="66">THE CLOSING LINE</text>
    <text class="sm"  x="306" y="92">&#8220;less a claim about the ocean than</text>
    <text class="sm"  x="306" y="112">a claim about the mapmaker&#8217;s <tspan style="fill:var(--accent)">authority</tspan>&#8221;</text>
  </g>

  <!-- beat 4: B is the only row holding both quoted words -->
  <g data-from="3">
    <rect x="24" y="208" width="30" height="28" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="227" text-anchor="middle" style="fill:var(--correct)">B</text>
    <text class="sm"  x="316" y="227" style="fill:var(--correct)">both halves, in the passage&#8217;s own words</text>
  </g>

  <!-- beat 5: A and C each turn on a word the passage never uses -->
  <g data-from="4">
    <text class="lbl" x="39"  y="183" text-anchor="middle" style="fill:var(--incorrect)">A</text>
    <text class="lbl" x="39"  y="271" text-anchor="middle" style="fill:var(--incorrect)">C</text>
    <text class="sm"  x="316" y="183" style="fill:var(--incorrect)">a chosen motive, not an inability</text>
    <text class="sm"  x="316" y="271" style="fill:var(--incorrect)">no government, just a patron</text>
  </g>

  <!-- beat 6: D borrows the vivid noun and takes the motive already demoted -->
  <g data-from="5">
    <text class="lbl" x="39"  y="315" text-anchor="middle" style="fill:var(--incorrect)">D</text>
    <text class="sm"  x="316" y="315" style="fill:var(--incorrect)">the motive the passage rules out</text>
  </g>
</svg>`,
  steps: [
    {t: 0,    cap: "Detail Q: the reason is stated, go find it"},
    {t: 7.6,  cap: "Who the map was for, and what he was buying"},
    {t: 12.4, cap: "The last sentence says what the monsters were for"},
    {t: 20,   cap: "Both quoted words land in one choice → B"},
    {t: 26,   cap: "A invents an inability · C invents a state"},
    {t: 34.3, cap: "D borrows the image, ignores the stated motive"}
  ]
});
