/* Stare at red, see green: negative afterimage. Left half is the demo: the
   red stimulus square, an arrow, the white wall panel where a green ghost
   square appears. Right half is ONE red-green channel: a capsule with a red
   disc and a green disc, and a marker that starts centred over the capsule,
   then slides onto green while the red disc dims (fatigue). Under both, a
   four-row theory table fills in its verdicts. Muted, the picture still
   argues: red in, green ghost out, one channel tipping onto green, one row
   banded correct, three names struck out.

   Approved hue-lock deviation, declared by the scene plan: three scene-local,
   theme-independent custom properties, because this is the one item whose
   ANSWER is a pair of literal hues plus the neutral field they are seen
   against. --afr-red is the stimulus, --afr-green the afterimage, --afr-wall
   the wall; var(--card) is near-black in dark theme and a negative afterimage
   only reads on a light neutral field, so the wall cannot theme. Hue-locked
   fills are for AREAS only (square, ghost, wall, two discs); every glyph
   stays on var(--text) / var(--muted) / the verdict tokens.

   Text arithmetic at the measured rates: .tag 7.39 px/char, .sm 5.63
   lowercase / 5.98 mixed. The three widest strings:
     "cones detect color, alone they do not explain the afterimage"
        60 x 5.63 = 337.8, from x=250 -> ends 587.8, inside the 366px reason
        column (250..616) with 28.2px to spare.
     "a green shape appears, and nothing green is there"
        49 x 5.63 = 275.9, from x=24 -> ends 299.9, 52.1px clear of the
        channel column that starts at x=352.
     "one channel, red at one end, green at the other"
        47 x 5.63 = 264.6, from x=250 -> ends 514.6, 101.4px short of the
        verdict band's inner edge at 616.
   Rightmost glyph is "green" under its disc: 5 x 5.63 = 28.15 centred on 580
   -> 565.9..594.1, 29.9px inside the 624 gutter. Lowest ink: row D baseline
   324 + 3.5px descender = 327.5, 24.5px above the 352 floor. */
RU_EX.reg("k1hjt1b3", {
  dur: 34,
  css: `
svg[data-x="k1hjt1b3"]{font-family:inherit;--afr-red:#dc2626;--afr-green:#16a34a;--afr-wall:#f8fafc}
svg[data-x="k1hjt1b3"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1hjt1b3"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1hjt1b3"] .redisc{transition:fill-opacity .6s ease}
svg[data-x="k1hjt1b3"] .mark{transition:transform .6s ease}
svg[data-x="k1hjt1b3"][data-step="3"] .redisc,svg[data-x="k1hjt1b3"][data-step="4"] .redisc,
svg[data-x="k1hjt1b3"][data-step="5"] .redisc{fill-opacity:.3}
svg[data-x="k1hjt1b3"][data-step="3"] .mark,svg[data-x="k1hjt1b3"][data-step="4"] .mark,
svg[data-x="k1hjt1b3"][data-step="5"] .mark{transform:translateX(96px)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="A red square and a white wall panel where a faint green ghost square appears, one red and green channel capsule whose marker slides onto the green end as the red disc dims, and a four-row theory table with opponent-process banded correct and the other three struck out">

  <!-- beat 3 verdict band, emitted first so its translucent fill lands under the row A name it encloses -->
  <rect data-from="2" x="18" y="210" width="598" height="26" rx="8" fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>

  <!-- BASE FRAME, ungated: stimulus, arrow, wall, both panel labels, table headers, four theory names -->
  <text class="tag" x="24" y="26">STARE AT RED, THEN AT A WHITE WALL</text>
  <rect x="24" y="44" width="116" height="88" rx="10" fill="var(--afr-red)"/>
  <path d="M148 88 L175 88 M170 83.5 L176 88 L170 92.5" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="184" y="44" width="116" height="88" rx="10" fill="var(--afr-wall)" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="sm" x="82" y="150" text-anchor="middle">you stared at red</text>
  <text class="sm" x="242" y="150" text-anchor="middle">a plain white wall</text>
  <text class="tag" x="24" y="200">THEORY</text>
  <text class="tag" x="250" y="200">WHY IT FITS OR DOES NOT</text>
  <text class="sm" x="24" y="228">Opponent-process theory</text>
  <text class="sm" x="24" y="260">Trichromatic theory</text>
  <text class="sm" x="24" y="292">Place theory</text>
  <text class="sm" x="24" y="324">Signal detection theory</text>

  <!-- beat 2: the ghost. fill-opacity .6 composites to 1.97:1 against the wall; the full-opacity 1.5px stroke holds the edge at 3.15:1 -->
  <g data-from="1">
    <rect x="206" y="60" width="72" height="56" rx="6" fill="var(--afr-green)" fill-opacity=".6" stroke="var(--afr-green)" stroke-width="1.5"/>
    <text class="sm" x="24" y="172">a green shape appears, and nothing green is there</text>
  </g>

  <!-- beat 3: one channel, two ends. Marker apex (484,46) sits 6px above the capsule top; the verdict lands in the band drawn earlier -->
  <g data-from="2">
    <text class="tag" x="352" y="26">RED AND GREEN SHARE ONE CHANNEL</text>
    <rect x="364" y="52" width="240" height="30" rx="15" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="2"/>
    <circle class="redisc" cx="388" cy="67" r="13" fill="var(--afr-red)"/>
    <circle cx="580" cy="67" r="13" fill="var(--afr-green)"/>
    <text class="sm" x="388" y="102" text-anchor="middle">red</text>
    <text class="sm" x="580" y="102" text-anchor="middle">green</text>
    <path class="mark" d="M476 34 L492 34 L484 46 Z" fill="var(--text)"/>
    <text class="sm" x="250" y="228" style="fill:var(--correct)">one channel, red at one end, green at the other</text>
  </g>

  <!-- beat 4: no new geometry. CSS on data-step 3 and above dims the red disc to fill-opacity .3 and slides the marker 96px, base 572..588 inside the green disc 567..593 -->
  <g data-from="3">
    <text class="sm" x="364" y="124">red side fatigued</text>
    <text class="sm" x="364" y="142">so green takes over</text>
  </g>

  <!-- beat 5: wrong modality, wrong job. Strikes start at 21 and overrun each name by about 3px -->
  <g data-from="4">
    <line x1="21" y1="288" x2="99" y2="288" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="21" y1="320" x2="165" y2="320" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="250" y="292" style="fill:var(--incorrect)">this one is about pitch in hearing</text>
    <text class="sm" x="250" y="324" style="fill:var(--incorrect)">this one is about decisions, not color</text>
  </g>

  <!-- beat 6: the trap row goes last so its strike draws over the name -->
  <g data-from="5">
    <line x1="21" y1="256" x2="141" y2="256" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="250" y="260" style="fill:var(--incorrect)">cones detect color, alone they do not explain the afterimage</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Four theories · stare at red, then look at a plain white wall"},
    {t: 6.51,  cap: "A green afterimage: the opposite of what you stared at"},
    {t: 11.74, cap: "Opponent-process: red and green share one channel"},
    {t: 15.77, cap: "The red side fatigues, so green takes over"},
    {t: 21.08, cap: "Place theory = hearing · signal detection = decisions"},
    {t: 26.31, cap: "Trichromatic is the trap: cones detect, that is not enough"}
  ]
});
