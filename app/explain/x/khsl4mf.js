/* Inter- vs intra-: a four-way term sort, drawn as four class ladders.

   THE PICTURE CARRIES THE ARGUMENT WITH THE SOUND OFF, and it does it with one
   thing a student can COUNT: how many ladders a row uses. Every ladder in the
   scene is the same object, 76 wide and 24 tall, railed on both sides so it is
   a closed shape rather than three loose lines. Row 1 puts two of them side by
   side. Rows 2, 3 and 4 put ONE in the left slot and leave the right slot
   empty, and that empty slot is the argument: there is no second generation in
   any of them.

   Marker grammar, taught once and never broken:
     solid disc   a person's position now
     hollow ring  the SAME person, earlier: the rung they have left
     arrow        that person moving from the ring to the disc
   Two other arrows are on screen and neither can be mistaken for that third
   one, because neither touches a marker: the thin muted class axis, which
   floats 19px clear of the ladder and only ever says which way is up, and row
   4's lift, which starts on the right RAIL and carries the frame. A person's
   arrow always runs from a ring to a disc, and nothing else ever does.

   Read the four rows with the voice off:
     row 1  TWO ladders, one solid disc in each, both on the middle rung, welded
            by a dashed level line across the gap. Two ladders, so two people,
            so two generations; same rung, so nobody moved.
     row 2  ONE ladder. Ring on the bottom rung, disc on the top rung, one arrow
            climbing between them. One person over one life, and the second
            slot, the one row 1 gives to a second person, stays empty.
     row 3  ONE ladder, same ring and same disc, but both on the MIDDLE rung and
            the arrow dead flat. Rows 2 and 3 differ in exactly one thing, the
            slope of that arrow, which is exactly what the two words differ in.
     row 4  ONE ladder, nine discs filling every rung, and a bracket that grips
            the right rail and lifts the whole ladder. Nobody on it moves; the
            thing they are standing on does.

   Round 2 gave row 2 two ladders as well, on the grounds that "born" and
   "adult" are two frames. That drew a false claim: two frames is precisely what
   intragenerational mobility does NOT have, and the row's own verdict said so
   one column to the right.

   Two findings from actually rendering this scene rather than reasoning about
   it, both worth keeping:
     - rails are load bearing. Without them the gap between row 1's two ladders
       read as one broken rung, and the two-versus-one count, the only
       distinction this scene exists to draw, was invisible.
     - a ladder has to be ladder shaped. The first railed pass used 140 by 20
       boxes and they read as table rows, which flattens the vertical axis the
       whole class metaphor depends on. 76 by 24 reads as a ladder.

   NO A/B/C/D CHIPS ANYWHERE, ON PURPOSE. The source item's answer index says
   choices[1] but its own breakdown prose ends "the answer is A". Those two
   disagree. Naming every term instead of lettering it means the source's
   labeling bug cannot ride into this explainer. Do not add letter chips. The
   bad breakdown string still needs its own fix at the data layer.

   MEASURED, NOT ESTIMATED. Every extent quoted below was read out of headless
   Chrome with getComputedTextLength and getBBox against this app's own embedded
   Nunito faces, at each of the six gate states, and every one of them was read
   a second time on 2026-08-07 before this revision shipped. That matters: the
   per-character constants earlier revisions carried were wrong in both
   directions (.tag was written as 6.3 px per char when it measures 7.3891 on
   CHILD and 8.6367 on BORN, and .lbl as 7.1 when the two long terms measure
   6.6360 and 6.6471), and the strike lengths derived from them overhung their
   own words by 3 to 7px. The three struck terms really end at x=153.0000,
   108.1953 and 105.3984, so the kill lines run 37 to 156, 37 to 111 and 37 to
   108.5. Against a term that starts at x=40 that is a 3.00px lead on all three
   and a tail of 3.00, 2.80 and 3.10: the two ends of a strike agree to within
   0.20px, which is the point, and no strike overhangs its word.
   Re-run the harness after any text edit; do not scale a character count.

   THE RUNGS ARE WHOLE. Not one of the fifteen rungs in the table is drawn in
   pieces; every ladder is a single path whose three rungs each run the full 76
   from rail to rail. A revision in progress did carve row 3's middle rung into
   two stubs so the flat arrow could sit in the hole, and rendered, that ladder
   simply read as broken, which is a claim the scene does not want to make about
   the Horizontal row. The arrow does not need the hole: .flow is 2px in text
   over a 1.5px muted rung, so it reads on top. Verified by scanning the
   rendered pixels rather than the source, at 9x. The fifteen rung segments sit
   on twelve distinct baselines (row 1's two slots share theirs), so six steps
   is 72 scans. Fifty seven of them return the plain shape, one unbroken run per
   slot: 200.00 to 276.00 on the four top rungs, 199.222 to 276.778 on the other
   eight, where the rails' strokes overhang the rung by 0.778 a side, and row
   1's second slot the same at 299.222 to 376.778. The remaining fifteen scans
   are the marks that are MEANT to meet a rung, and not one of them cuts it:
     row 1 middle, steps 2 to 5   the dashed connector crosses the 276 to 300
                                  gap: 199.222 to 280.00, dashes at 283 to 287
                                  and 290 to 294, then 297.00 to 376.778. Both
                                  rungs stay whole underneath it.
     row 2 bottom, steps 3 to 5   ring knockout, 210.444 to 217.556, 7.112px
     row 3 middle, steps 4 and 5  ring knockout, 210.444 to 217.556, 7.112px
     row 4 top and bottom, 4-5    the lift stubs extend both to 283.00
     row 4 middle, steps 4 and 5  199.222 to 276.778 plus 281.00 to 283.00,
                                  the lift's vertical bar passing the rung. The
                                  one detached mark in the scene, and it is
                                  outside the ladder, not inside it.
   No rung is ever in two pieces. If a future pass is tempted to carve one: do
   not.

   COLOUR. The stage behind this scene is the app's surface 2 (player.css,
   .ex-stage). Measured against it, border strong is 1.19:1 on light and 1.27:1
   on dark, so a line drawn in it would read as missing; muted is 4.55:1 and
   6.42:1, text is 15.36:1 and 13.53:1, correct is 4.66:1 and 8.22:1, incorrect
   is 5.34:1 and 5.87:1, accent is 4.84:1 and 5.81:1. Every load bearing line
   here is muted, text, correct or incorrect.
   Two consequences that look like mistakes otherwise:
     - the header band is filled with card, not surface 2. Surface 2 IS the
       stage colour, so the previous revision's header pill was a 1.00:1 fill,
       i.e. invisible. Card is only 1.18:1 and 1.15:1, so the fill alone still
       would not carry it; the muted stroke is what makes it a pill, and that
       is why the band carries one and the fill is a tint rather than the edge.
     - the hollow ring is DELIBERATELY filled with surface 2, so it knocks the
       rung out from behind itself and reads as a vacated rung rather than as a
       circle drawn over a wire. Measured in the render, that knockout is
       7.112px of a 76px rung, at 210.444 to 217.556: enough to read as a hole
       in a 9px ring, far too small to read as a break. That is the one place
       the stage colour is depended on, and it is the same trick the
       concentration-cell scene uses with card behind its meter face.

   STEP TIMES ARE A MODEL, AND HERE IS THE MODEL. There is no
   explain/a/khsl4mf.m4a yet, so the player falls back to these `t` values.
   They are not a guess, and the fit was re-derived from scratch rather than
   quoted: the 117 modules that already have rendered audio carry per-beat
   `durs` in the built manifest, 758 beats in all, and a least squares fit over
   those 758 samples returns dur = 0.06170 per character + 0.6357 per sentence,
   rms 0.7945s. The six values below are the running sum of that fit over this
   module's six `say` strings, which live in held_beats.json until the module
   ships into vector_beats.json (516 characters, 13 sentences, 40.10s; longest
   beat 104, under the batch's 110 ceiling; 12.87 characters per second, which
   sits between the corpus p25 of 12.44 and its median of 13.48, so a slow read
   still lands inside the 45s ceiling). When the m4a is rendered, patch.py
   stamps measured `durs` into EXPLAINERS and the player uses those instead;
   re-derive `dur` from the file then and delete this paragraph.

   THE VOICE AND THE SCREEN DELIBERATELY USE DIFFERENT NOUNS FOR THE SAME
   THING. The voice counts LADDERS, because that is the shape on screen and it
   gives the drawing an audio antecedent; the captions count PEOPLE, because a
   reader already has the picture. And the two words the whole item turns on are
   never left to two mid-word letters twenty seconds apart: beat 3 opens
   "Between generations" and beat 4 opens "Within one life", so the prefix
   arrives after its meaning has already been said, and a listener who mishears
   inter for intra has still heard which comparison is which. */
RU_EX.reg("khsl4mf", {
  dur: 40.1,
  css: `
svg[data-x="khsl4mf"]{font-family:inherit}
svg[data-x="khsl4mf"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="khsl4mf"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="khsl4mf"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="khsl4mf"] .band{fill:var(--card);stroke:var(--muted);stroke-width:1.5;stroke-opacity:.7}
svg[data-x="khsl4mf"] .chip{fill:none;stroke:var(--muted);stroke-width:1.5;stroke-opacity:.7}
svg[data-x="khsl4mf"] .rung{fill:none;stroke:var(--muted);stroke-width:1.5}
svg[data-x="khsl4mf"] .axis{fill:none;stroke:var(--muted);stroke-width:1.25;stroke-opacity:.75;stroke-linejoin:round;stroke-linecap:round}
svg[data-x="khsl4mf"] .who{fill:var(--text)}
svg[data-x="khsl4mf"] .ghost{fill:var(--surface-2);stroke:var(--text);stroke-width:1.75}
svg[data-x="khsl4mf"] .flow{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round}
svg[data-x="khsl4mf"] .kill{fill:none;stroke:var(--incorrect);stroke-width:1.5}
svg[data-x="khsl4mf"] .brace{fill:none;stroke:var(--incorrect);stroke-width:2;stroke-linejoin:round;stroke-linecap:round}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Four class ladders, one per mobility term. Intergenerational uses two ladders, with a parent standing on the middle rung of one and a child on the middle rung of the other. Intragenerational uses a single ladder in which one person climbs from the bottom rung to the top, and the second ladder's place is empty. Horizontal uses a single ladder in which that same person moves along one rung without changing level. Structural uses a single ladder crowded with people on every rung, with a bracket gripping the rail and lifting the whole ladder.">

  <!-- LAYOUT. One coordinate set, every number in it verified in a headless
       render against the app's own Nunito.

       Columns, every run left anchored or centred inside its own block, so no
       baseline ever carries a left aligned label against a right aligned value:
         col1  x=40   term name, .lbl, the longest measures 40.00 to 153.00
         axis  x=178  one small class arrow per row, widest point x=181
         diag  slot A x=200 to 276, slot B x=300 to 376
         col3  x=410  verdict, .sm, the longest measures 410.00 to 598.52
       Rows are 48px apart, tops at 60, 108, 156, 204. Inside a row with top T:
       tag baseline T+7, rungs T+17 / T+29 / T+41, term baseline T+29, strike at
       term baseline minus 5. -->

  <!-- BEAT 1 (step 0), ungated: the header, the four names, and the four EMPTY
       ladders. An empty apparatus is the drawn form of the question, and the
       ladder count already differs by row before anything has been claimed. -->
  <text class="tag" x="24" y="20">FOUR MOBILITY WORDS</text>
  <rect class="band" x="24" y="26" width="592" height="26" rx="13"/>
  <!-- measures 205.61 to 434.39 in a band that runs 24 to 616. -->
  <text class="tag" x="320" y="43" text-anchor="middle">WHO IS BEING COMPARED TO WHOM?</text>

  <!-- The beat 3 tint is declared HERE, first in paint order, so the ladders
       and markers it sits behind are never washed by it. Gating is by
       attribute, not by position. fill-opacity and stroke-opacity, never
       opacity: applyGates writes style.opacity on anything carrying data-from,
       and an inline style beats a presentation attribute. -->
  <rect x="24" y="55" width="592" height="48" rx="10" data-from="2"
        fill="var(--correct)" fill-opacity=".14"
        stroke="var(--correct)" stroke-width="1.5" stroke-opacity=".5"/>

  <!-- Term names. The first is switched, not overpainted: the plain copy gates
       off at step 2 as the correct-coloured copy gates on, because an
       antialiased glyph left underneath a recoloured twin reads as a halo. -->
  <text class="lbl" x="40" y="89"  data-from="0" data-to="1">Intergenerational</text>
  <text class="lbl" x="40" y="137">Intragenerational</text>
  <text class="lbl" x="40" y="185">Horizontal</text>
  <text class="lbl" x="40" y="233">Structural</text>

  <!-- Class axes: up is a higher rung. One per row, so each ladder reads as its
       own apparatus rather than as four sections of one tall chart. The shaft
       is at x=178 and the arrowhead is its widest point at x=181, so the axis
       stands 19.00px clear of the left rail at x=200 (17.63px of true white
       once the 1.25 and 1.5 strokes are counted) and reads beside the ladder
       rather than as part of it. -->
  <path class="axis" d="M178 103 L178 73 M175 78 L178 73 L181 78"/>
  <path class="axis" d="M178 151 L178 121 M175 126 L178 121 L181 126"/>
  <path class="axis" d="M178 199 L178 169 M175 174 L178 169 L181 174"/>
  <path class="axis" d="M178 247 L178 217 M175 222 L178 217 L181 222"/>

  <!-- THE LADDERS. Identical shape everywhere, 76 by 24, railed. Row 1 fills
       both slots; rows 2, 3 and 4 fill only slot A and leave slot B empty,
       which is the whole item drawn as a hole. -->
  <path class="rung" d="M200 77 H276 M200 89 H276 M200 101 H276 M200 77 V101 M276 77 V101"/>
  <path class="rung" d="M300 77 H376 M300 89 H376 M300 101 H376 M300 77 V101 M376 77 V101"/>
  <!-- Nothing is carved out of these rungs. The markers knock their own holes
       (the ring carries a fill), and the flow arrows are 2px text over a 1.5px
       muted rung, so the row 3 arrow reads on top of the rung it shares a
       baseline with. -->
  <path class="rung" d="M200 125 H276 M200 137 H276 M200 149 H276 M200 125 V149 M276 125 V149"/>
  <path class="rung" d="M200 173 H276 M200 185 H276 M200 197 H276 M200 173 V197 M276 173 V197"/>
  <path class="rung" d="M200 221 H276 M200 233 H276 M200 245 H276 M200 221 V245 M276 221 V245"/>

  <!-- BEAT 2 (data-from 1) - the stem holds two different class holders. The
       same apparatus as the table, used as a legend: one ladder, one marker,
       one owner per card. Cards span 24 to 292 and 348 to 616, y 252 to 310,
       7px below the last rung of the table. -->
  <g data-from="1">
    <rect class="chip" x="24"  y="252" width="268" height="58" rx="12"/>
    <rect class="chip" x="348" y="252" width="268" height="58" rx="12"/>

    <path class="rung" d="M44 262 H104 M44 274 H104 M44 286 H104 M44 262 V286 M104 262 V286"/>
    <circle cx="74" cy="274" r="4.5" fill="var(--accent)"/>
    <!-- measures 46.51 to 101.49, inside the mini ladder's own 44 to 104 and
         clear of the card's text column, which starts at 118. -->
    <text class="tag" x="74" y="300" text-anchor="middle" style="fill:var(--accent)">PARENTS</text>
    <text class="sm" x="118" y="270">class you're born into</text>
    <text class="sm" x="118" y="289" style="fill:var(--accent)">= your parents' class</text>

    <path class="rung" d="M368 262 H428 M368 274 H428 M368 286 H428 M368 262 V286 M428 262 V286"/>
    <circle cx="398" cy="274" r="4.5" fill="var(--accent)"/>
    <text class="tag" x="398" y="300" text-anchor="middle" style="fill:var(--accent)">YOU</text>
    <text class="sm" x="442" y="270">class you end up in</text>
    <text class="sm" x="442" y="289" style="fill:var(--accent)">= your own class</text>

    <!-- "vs" measures 313.72 to 326.28, so it lives entirely inside the 292 to
         348 gutter and never touches either card's stroke. -->
    <text class="sm" x="320" y="284" text-anchor="middle" style="fill:var(--muted)">vs</text>
  </g>

  <!-- BEAT 3 (data-from 2) - the winner, drawn. One solid disc in each
       generation's ladder, both on the MIDDLE rung, and a dashed connector
       across the 276 to 300 gap that welds the two middle rungs into one
       continuous level. Dashed and headless on purpose: this is a comparison
       between two different people, not one person's movement. Two ladders is
       the count; a flat bridge is the verdict. -->
  <g data-from="2">
    <text class="lbl" x="40" y="89" style="fill:var(--correct)">Intergenerational</text>
    <!-- PARENT measures 214.19 to 261.81, inside slot A's 200 to 276; CHILD
         measures 319.53 to 356.47, inside slot B's 300 to 376. -->
    <text class="tag" x="238" y="67" text-anchor="middle" style="fill:var(--correct)">PARENT</text>
    <text class="tag" x="338" y="67" text-anchor="middle" style="fill:var(--correct)">CHILD</text>
    <circle cx="238" cy="89" r="4.5" fill="var(--correct)"/>
    <circle cx="338" cy="89" r="4.5" fill="var(--correct)"/>
    <line x1="276" y1="89" x2="300" y2="89" stroke="var(--correct)" stroke-width="1.75" stroke-dasharray="4 3"/>
    <!-- Two lines, because the row settles two different kinds of claim: line
         one is what the WORD means, line two is what THIS stem does. Measured
         409.91 to 597.55 and 410.00 to 579.47, glyph boxes y 67.5 to 84.5 and
         85.5 to 102.5, inside the tint at 55 to 103. -->
    <text class="sm" x="410" y="80" style="fill:var(--correct)">two ladders, so two generations</text>
    <text class="sm" x="410" y="98" style="fill:var(--correct)">same rung, so mobility is low</text>
  </g>

  <!-- BEAT 4 (data-from 3) - the trap, drawn. ONE ladder, and on it one ring
       and one disc joined by a climbing arrow: the earlier and the later state
       of a single object, which is why this row cannot be read as two people.
       BORN and ADULT are column headers over the two ends of the climb, at the
       ring's x and the disc's x; ADULT's ink stops 5.5px above the disc. -->
  <g data-from="3">
    <!-- BORN measures 196.73 to 231.27, ADULT 242.24 to 281.76: 10.96px apart
         on the shared baseline. -->
    <text class="tag" x="214" y="115" text-anchor="middle">BORN</text>
    <text class="tag" x="262" y="115" text-anchor="middle">ADULT</text>
    <circle class="ghost" cx="214" cy="149" r="4.5"/>
    <circle class="who" cx="262" cy="125" r="4.5"/>
    <path class="flow" d="M220.60 145.70 L256.19 127.91 M251.72 134.62 L256.19 127.91 L248.14 127.46"/>
    <line class="kill" x1="37" y1="132" x2="156" y2="132"/>
    <text class="sm" x="410" y="137" style="fill:var(--incorrect)">one ladder, no parent in it</text>
  </g>

  <!-- BEAT 5 (data-from 4) - both remaining losers, drawn, under ONE shared
       verdict. Row 3 reuses beat 4's geometry exactly, same ring at x=214, same
       disc at x=262, same arrow length, and changes one thing: both markers sit
       on the middle rung and the arrow is flat. Row 4 fills every rung and
       hands the arrow to the FRAME: a narrow bracket grips the right rail at
       276 and carries a bar taller than the ladder itself, so the mark reads as
       the whole thing rising and not as one more cell of the ladder, which is
       how a wider 12px bracket did read when it was rendered. It touches nobody
       standing on it. Strikes run to 111 and 108.5 against glyphs measured to
       108.20 and 105.40, i.e. tails of 2.80 and 3.10 against a 3.00 lead. The
       shared brace sits at 384 to 402, clear of the row 4 lift, which stops at
       286.5, and of col3, which starts at 410. Row 3's middle rung underneath
       all of this is whole: the flat arrow rides ON the rung, it is not set
       into a gap cut for it. -->
  <g data-from="4">
    <circle class="ghost" cx="214" cy="185" r="4.5"/>
    <circle class="who" cx="262" cy="185" r="4.5"/>
    <path class="flow" d="M221.4 185 L255.5 185 M248.5 181 L255.5 185 L248.5 189"/>
    <line class="kill" x1="37" y1="180" x2="111" y2="180"/>

    <circle class="who" cx="214" cy="221" r="3"/>
    <circle class="who" cx="238" cy="221" r="3"/>
    <circle class="who" cx="262" cy="221" r="3"/>
    <circle class="who" cx="214" cy="233" r="3"/>
    <circle class="who" cx="238" cy="233" r="3"/>
    <circle class="who" cx="262" cy="233" r="3"/>
    <circle class="who" cx="214" cy="245" r="3"/>
    <circle class="who" cx="238" cy="245" r="3"/>
    <circle class="who" cx="262" cy="245" r="3"/>
    <path class="flow" d="M276 245 L282 245 L282 209 M276 221 L282 221 M277.5 214.5 L282 209 L286.5 214.5"/>
    <line class="kill" x1="37" y1="228" x2="108.5" y2="228"/>

    <path class="brace" d="M384 169 L390 169 L390 249 L384 249 M390 209 L402 209"/>
    <!-- measures 410.00 to 598.52. True of both rows without hedging: a
         sideways move at one level and a shift of the whole distribution are
         each defined without reference to anyone's parent. -->
    <text class="sm" x="410" y="213" style="fill:var(--incorrect)">neither compares parent to child</text>
  </g>

  <!-- BEAT 6 (data-from 5) - the habit, with the thing being counted drawn
       beside the words. Two miniature ladders, one person in each, is "two
       generations" as a picture rather than as a claim, and it is the same
       two-ladder shape row 1 won on. The bar spans the same 24 to 616 the
       header band does, so the scene closes on the frame it opened with instead
       of on a floating centred badge; its content measures 185.00 to 455.54,
       centred on 320.27 inside it. Bar bottom edge 348; the 2px stroke is
       centred on it, so the lowest ink in the scene is 349, three under the
       352 floor. -->
  <g data-from="5">
    <rect x="24" y="320" width="592" height="28" rx="14" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <path d="M185 327 H203 M185 334 H203 M185 341 H203 M185 327 V341 M203 327 V341
             M211 327 H229 M211 334 H229 M211 341 H229 M211 327 V341 M229 327 V341"
          fill="none" stroke="var(--correct)" stroke-width="1.25"/>
    <circle cx="194" cy="334" r="3" fill="var(--correct)"/>
    <circle cx="220" cy="334" r="3" fill="var(--correct)"/>
    <text class="sm" x="241" y="338" style="fill:var(--correct)">two generations &#8594; intergenerational</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Four mobility words, sorted by one question"},
    {t: 5.28,  cap: "Born into = your parents' class; end up in = your own"},
    {t: 11.43, cap: "Two people on one rung: intergenerational, and low"},
    {t: 18.81, cap: "Intra- = one person's own life, no parent in it"},
    {t: 25.26, cap: "Horizontal = sideways; structural = the whole ladder moves"},
    {t: 33.59, cap: "Name the two compared: two generations, so intergenerational"}
  ]
});
