/* Normal-phase TLC - which compound rides higher on the plate. Drawn scene:
   one developed silica plate on the left (dashed solvent front, origin line,
   a half-strength climb arrow), the tug-of-war pair in the middle column,
   and a four-chip choice rail on the right.

   The chips are BASE FRAME. Their step-3 dim and C's incorrect stroke are
   enumerated svg[data-x][data-step="N"] CSS style flips on .chipB/.chipC/
   .chipD (the .pot/.role idiom from k1msxvsk), NOT data-from gates: B and D
   dim at steps 3-5, C dims at step 3 only, then returns to full opacity at
   step 4 wearing the incorrect stroke while its cross reveals. data-from
   carries only the genuine reveals: tug pair (1), butanol spot (2), hexane
   spot + check (3), C cross + held-down (4), rule banner (5).

   Mute test: the butanol spot rests just above the origin with dashed
   H-bond ticks into the plate, the hexane spot sits up near the front, the
   check lands on A where the high spot already pointed, C is crossed and
   re-stroked red with "held down" under the tug pair, and the banner states
   the rule.

   Text arithmetic, measured rates (WRITING-BEATS.md): .sm 12.5px is 5.63 px
   per lowercase glyph, 5.98 mixed case; .lbl 14px is 6.70. The scene plan's
   budgets used the coarser 6.5 and every gist clears its wall at both rates.
   The three widest strings, measured:
     "match the plate → sit low" / "match the solvent → climb"
        25 x 5.98 = 149.5 each, from x=300 -> both end 449.5, inside the
        banner budget wall at 620 with 170.5 px spare.
     "butanol, H-bonds lift it" (gist C, mixed case)
        24 x 5.98 = 143.52, from x=432 -> ends 575.52 (588.0 at the 6.5
        budget rate), clear of the cross glyph that starts at x=600.
     "hexane, rides the solvent" (gist A, lowercase)
        25 x 5.63 = 140.75, from x=432 -> ends 572.75 (594.5 at the 6.5
        budget rate), which is why the check polyline starts at x=598.
   The plan drew the choice rail to a right edge of 632 and the banner to
   632.75 with its stroke; every shipped module keeps ink inside x=[16,624]
   (k135hrhe tops out at 617), so the whole rail sits 10 px left of the plan
   and the banner is 10 px narrower: worst right-edge ink is chip C's step-4
   stroke halo at 623.25.
   Left gutter: "solvent front" is 13 x 5.63 = 73.19 right-anchored, and at
   the plan's x=88 its left edge lands 14.81, past the x=16 wall - anchored
   at 90 instead, left edge 16.81, still 6 px clear of the plate at 96.
   Deepest ink: banner rect bottom 302+40 = 342, 342.75 with its 1.5 stroke,
   9.25 px above the 352 floor. */
RU_EX.reg("kdld82d", {
  dur: 42,
  css: `
svg[data-x="kdld82d"]{font-family:inherit}
svg[data-x="kdld82d"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdld82d"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kdld82d"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kdld82d"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="kdld82d"] .arw{fill:none;stroke:var(--accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
svg[data-x="kdld82d"] .arwm{fill:none;stroke:var(--muted);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}

svg[data-x="kdld82d"] .chipB,
svg[data-x="kdld82d"] .chipC,
svg[data-x="kdld82d"] .chipD{transition:opacity .45s ease}
svg[data-x="kdld82d"][data-step="3"] .chipB,
svg[data-x="kdld82d"][data-step="4"] .chipB,
svg[data-x="kdld82d"][data-step="5"] .chipB,
svg[data-x="kdld82d"][data-step="3"] .chipD,
svg[data-x="kdld82d"][data-step="4"] .chipD,
svg[data-x="kdld82d"][data-step="5"] .chipD,
svg[data-x="kdld82d"][data-step="3"] .chipC{opacity:.38}
svg[data-x="kdld82d"][data-step="4"] .chipC rect,
svg[data-x="kdld82d"][data-step="5"] .chipC rect{stroke:var(--incorrect);stroke-width:2.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="A developed thin layer chromatography plate with the butanol spot held low near the origin, the hexane spot riding high near the solvent front, and four answer chips where A earns a check and C is crossed out">
  <!-- base frame, ungated. Beat 1 speaks it: plate, front, origin, climb, choices. -->
  <rect x="96" y="44" width="148" height="266" rx="8" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="1.5"/>
  <line x1="102" y1="74" x2="238" y2="74" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 5"/>
  <line x1="102" y1="282" x2="238" y2="282" stroke="var(--muted)" stroke-width="2"/>
  <!-- solvent climb at half strength, drawn before the spots so they stay the loudest ink -->
  <path class="arw" stroke-opacity=".5" d="M110 270 L110 91"/>
  <path class="arw" stroke-opacity=".5" d="M103.5 97.5 L110 90 L116.5 97.5"/>
  <text class="sm" x="90" y="78" text-anchor="end">solvent front</text>
  <text class="sm" x="90" y="286" text-anchor="end">origin</text>
  <text class="sm" x="170" y="330" text-anchor="middle">polar silica plate</text>

  <!-- choice rail. A never changes style; B, C, D are grouped for the per-step CSS flips. -->
  <rect class="chip" x="398" y="52" width="224" height="30" rx="15"/>
  <text class="lbl" x="410" y="72">A</text>
  <text class="sm" x="432" y="72">hexane, rides the solvent</text>
  <g class="chipB">
    <rect class="chip" x="398" y="90" width="224" height="30" rx="15"/>
    <text class="lbl" x="410" y="110">B</text>
    <text class="sm" x="432" y="110">butanol, more volatile</text>
  </g>
  <g class="chipC">
    <rect class="chip" x="398" y="128" width="224" height="30" rx="15"/>
    <text class="lbl" x="410" y="148">C</text>
    <text class="sm" x="432" y="148">butanol, H-bonds lift it</text>
  </g>
  <g class="chipD">
    <rect class="chip" x="398" y="166" width="224" height="30" rx="15"/>
    <text class="lbl" x="410" y="186">D</text>
    <text class="sm" x="432" y="186">hexane, size always wins</text>
  </g>

  <!-- beat 2: the tug of war, middle column -->
  <g data-from="1">
    <path class="arw" d="M285 172 L285 145"/>
    <path class="arw" d="M278.5 151.5 L285 144 L291.5 151.5"/>
    <text class="sm" x="296" y="162">solvent carries</text>
    <path class="arwm" d="M285 180 L285 207"/>
    <path class="arwm" d="M278.5 200.5 L285 208 L291.5 200.5"/>
    <text class="sm" x="296" y="200">plate grabs</text>
  </g>

  <!-- beat 3: butanol H-bonds to the silica and sits low -->
  <g data-from="2">
    <circle cx="156" cy="252" r="11" fill="var(--warn)"/>
    <line x1="146" y1="261" x2="136" y2="273" stroke="var(--warn)" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="156" y1="264" x2="156" y2="276" stroke="var(--warn)" stroke-width="2" stroke-dasharray="3 3"/>
    <line x1="166" y1="261" x2="176" y2="273" stroke="var(--warn)" stroke-width="2" stroke-dasharray="3 3"/>
    <text class="sm" x="176" y="256">1-butanol</text>
  </g>

  <!-- beat 4: hexane rides high, the check lands on A -->
  <g data-from="3">
    <circle cx="156" cy="102" r="11" fill="var(--correct)"/>
    <text class="sm" x="176" y="106">hexane</text>
    <text class="sm" x="176" y="124" style="fill:var(--correct)">higher Rf</text>
    <polyline points="598 67 604 73 614 59" fill="none" stroke="var(--correct)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- beat 5: C crossed, and the H-bond holds butanol DOWN, not up -->
  <g data-from="4">
    <line x1="600" y1="137" x2="612" y2="149" stroke="var(--incorrect)" stroke-width="3" stroke-linecap="round"/>
    <line x1="612" y1="137" x2="600" y2="149" stroke="var(--incorrect)" stroke-width="3" stroke-linecap="round"/>
    <path d="M252 238 L252 261" fill="none" stroke="var(--incorrect)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M246 254.5 L252 262 L258.5 254.5" fill="none" stroke="var(--incorrect)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text class="sm" x="260" y="254" style="fill:var(--incorrect)">held down</text>
  </g>

  <!-- beat 6: the transferable rule -->
  <g data-from="5">
    <rect x="260" y="302" width="362" height="40" rx="10" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="sm" x="300" y="318">match the plate → sit low</text>
    <text class="sm" x="300" y="336">match the solvent → climb</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Normal-phase TLC: polar silica plate, nonpolar solvent"},
    {t: 7.95,  cap: "Tug of war: the plate grabs, the solvent carries"},
    {t: 12.3, cap: "1-Butanol's -OH hydrogen-bonds to silica → stuck low"},
    {t: 19.85, cap: "Hexane barely sticks → rides high → choice A (higher Rf)"},
    {t: 27.72, cap: "C is backwards: the H-bond partner is the plate → held DOWN"},
    {t: 36.79, cap: "Match the plate → sit low. Match the solvent → climb"}
  ]
});
