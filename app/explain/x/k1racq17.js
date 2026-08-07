/* Fat vs glycogen, energy per gram. Three drawn arguments, each one countable
   with the sound off:
     1. two bars, 9 against 4 kcal per gram, whose LENGTHS are the "more than
        twice" of beat 1;
     2. an oxidation-state ruler along the bottom, where each fuel's carbon gets
        an arrow to CO2 and fat's arrow is visibly the longer trip (beat 2);
     3. two skeletons in one grammar at one 16px pitch, so sixteen carbons
        against six is a length you can read before any label says it, then the
        oxygens hung on each (beat 3) and every C-H hydrogen on the tail (beat 4).
   Beat 1 is the ungated base frame.

   MEASUREMENT NOTE for future editors: the old 6.5px/char budget for .sm is
   wrong in both directions. Nunito 700 at 12.5px measures ~5.58px/char for
   lowercase, ~5.72 with digits mixed in, and 9.38px for capitals; .tag at 11px
   is 7.46px/char INCLUDING its .05em letter-spacing, which the old 6.3 budget
   forgot. Widths in the comments below are measured, or flagged as worst-case. */
RU_EX.reg("k1racq17", {
  dur: 40,
  css: `
svg[data-x="k1racq17"]{font-family:inherit}
svg[data-x="k1racq17"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1racq17"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1racq17"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1racq17"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="k1racq17"] .h{fill:var(--accent);font-size:10px;font-weight:700}
svg[data-x="k1racq17"] .bar{fill:var(--text);fill-opacity:.16;stroke:var(--muted);stroke-width:1}
svg[data-x="k1racq17"] .ax{fill:none;stroke:var(--muted);stroke-width:1.5;stroke-linecap:round}
svg[data-x="k1racq17"] .trip{fill:none;stroke:var(--text);stroke-width:2.5;stroke-linecap:round}
svg[data-x="k1racq17"] .head{fill:var(--text)}
svg[data-x="k1racq17"] .ob{fill:none;stroke:var(--warn);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two bars, nine against four kilocalories per gram; a sixteen-carbon fatty tail carrying two oxygens and thirty-one hydrogens beside open-chain glucose carrying six oxygens on six carbons; and an oxidation-state ruler along the bottom where fat's carbon has the longer trip to carbon dioxide">
  <!-- Two fixed columns split by the rule at x340. Everything left of it is
       anchored at x24 or x236, everything right of it at x356/x368, so no
       baseline ever carries a left aligned and a right aligned string at once.
       The rule stops at y274; below that the oxidation ruler runs full width. -->
  <text class="tag" x="24" y="26">SAME MASS: 1 g FAT vs 1 g GLYCOGEN</text>
  <line x1="340" y1="16" x2="340" y2="274" stroke="var(--border-strong)" stroke-width="1"/>

  <!-- fatty tail: 15 skeletal vertices at x = 36 + 16k, alternating y94/y78.
       The 16th carbon is the labelled carboxyl that arrives at step 2, so the
       drawing never shows seventeen carbons under any reading. -->
  <text class="sm" x="24" y="46">fatty acid tail</text>
  <polyline points="36,94 52,78 68,94 84,78 100,94 116,78 132,94 148,78 164,94 180,78 196,94 212,78 228,94 244,78 260,94"
            fill="none" stroke="var(--text)" stroke-width="2.5" stroke-linejoin="round"/>

  <!-- open-chain aldehydo glucose, same grammar and same 16px pitch: 6 vertices,
       x36 to x116 against the tail's x36 to x276. The ring drawing would have
       shown five carbons in the ring while the voice says six. -->
  <text class="sm" x="24" y="150">glucose, the glycogen monomer</text>
  <polyline points="36,202 52,218 68,202 84,218 100,202 116,218"
            fill="none" stroke="var(--text)" stroke-width="2.5" stroke-linejoin="round"/>

  <!-- BEAT 1's quantity, drawn rather than asserted: 8px per kcal, so the fat bar
       is 72px against the glycogen bar's 32px and the ratio lives in the lengths.
       This block owns the column from x236 rightwards; the two strings that end
       nearest it are "glucose, the glycogen monomer" at x208.69 and the glucose
       count at x211.81, so the narrowest gutter is 24px. Widest thing in the
       block is the tag at x314.66, then the numeral 9 at x322.41, both clear of
       the rule at x340. Bars are neutral (text at .16) on purpose: the accent
       colour is reserved for reduced carbon and must not be spent on chrome. -->
  <text class="tag" x="236" y="166">KCAL / GRAM</text>
  <text class="sm"  x="236" y="186">fat</text>
  <rect class="bar" x="236" y="192" width="72" height="14" rx="3"/>
  <text class="lbl" x="314" y="204">9</text>
  <text class="sm"  x="236" y="228">glycogen</text>
  <rect class="bar" x="236" y="234" width="32" height="14" rx="3"/>
  <text class="lbl" x="274" y="246">4</text>
  <!-- measured 72.39px from x236, ends x308.39 -->
  <text class="sm"  x="236" y="268">9 / 4 = 2.25x</text>

  <!-- All four choices are on screen from frame one; beat 1 ends on "Four
       explanations", so nothing here is unspoken. Chip pitch is 64, not 58: the
       30px slot it opens under each chip lets an annotation sit 4px under the
       chip it belongs to and 9px above the next one, so proximity does the
       grouping and colour is not carrying it alone. -->
  <text class="tag" x="356" y="26">THE FOUR EXPLANATIONS</text>
  <rect class="chip" x="356" y="42"  width="250" height="34" rx="17"/>
  <rect class="chip" x="356" y="106" width="250" height="34" rx="17"/>
  <rect class="chip" x="356" y="170" width="250" height="34" rx="17"/>
  <rect class="chip" x="356" y="234" width="250" height="34" rx="17"/>
  <!-- widest chip label, measured: "C &#183; stored hydrated with water" is 177.39px
       from x368, ending x545.39, inside the chip's right edge at x606. -->
  <text class="sm" x="368" y="64"  data-from="0" data-to="2">A &#183; carbons highly reduced</text>
  <text class="sm" x="368" y="128">B &#183; carbons highly oxidized</text>
  <text class="sm" x="368" y="192">C &#183; stored hydrated with water</text>
  <text class="sm" x="368" y="256">D &#183; phosphoanhydride bonds</text>

  <!-- BEAT 2: what burning is, drawn as a distance. One ruler, one scale, three
       marks: fat's average carbon at &#8722;1.75, glucose's at 0, CO&#8322; at +4, laid out
       at 65.04px per unit (x = 324 + 65.04 &#215; state). Each fuel gets an arrow to
       the CO&#8322; post, so the arrows are 374px and 260px and the ratio of the
       lengths, 1.44, is the true ratio of the trips. Per CARBON, which is why the
       ruler says so and why it cannot be confused with the per gram bars above.
       Ruler and post are muted, arrows are text colour: nothing here borrows the
       accent, which does not acquire its meaning until step 3. -->
  <g data-from="1">
    <text class="tag" x="24" y="320">OXIDATION STATE</text>
    <text class="tag" x="24" y="336">OF ONE CARBON</text>
    <line class="ax" x1="196" y1="330" x2="584" y2="330"/>
    <line class="ax" x1="210" y1="322" x2="210" y2="332"/>
    <line class="ax" x1="324" y1="322" x2="324" y2="332"/>
    <!-- the CO&#8322; post is the end of the ruler, and it is named under its own tick
         rather than over it: the step 5 line "ester bonds, not phosphate bonds"
         reaches x565.56 at y285, and a label up there would read as part of it. -->
    <line class="ax" x1="584" y1="292" x2="584" y2="332" stroke-width="2"/>
    <!-- fat's trip: 5.75 units, x210 to the post -->
    <text class="sm" x="186" y="302">fat</text>
    <line class="trip" x1="210" y1="298" x2="574" y2="298"/>
    <path class="head" d="M572 292 L584 298 L572 304 Z"/>
    <!-- glucose's trip: 4 units, x324 to the post -->
    <text class="sm" x="268" y="318">glucose</text>
    <line class="trip" x1="324" y1="314" x2="574" y2="314"/>
    <path class="head" d="M572 308 L584 314 L572 320 Z"/>
    <text class="sm" x="210" y="344" text-anchor="middle">&#8722;1.75</text>
    <text class="sm" x="324" y="344" text-anchor="middle">0</text>
    <text class="sm" x="584" y="344" text-anchor="middle">CO&#8322; = +4</text>
  </g>

  <!-- BEAT 3: the oxygens. The warn colour marks an oxygen atom on a structure
       and is used for nothing else in this scene. -->
  <g data-from="2">
    <line x1="260" y1="94" x2="276" y2="78" stroke="var(--text)" stroke-width="2.5"/>
    <!-- The bond stops at x276 and the glyph starts at x280: ordinary skeletal
         notation, where the bond ends where the atom label begins. So this label
         IS carbon sixteen, and the tail's only two oxygens are inside it.
         Measured: four capitals, 37.50px, x280 to x317.5. -->
    <text class="sm" x="280" y="82" style="fill:var(--warn)">COOH</text>

    <!-- C1 carbonyl: two parallel lines either side of the vertex = a double bond -->
    <line class="ob" x1="33.5" y1="198" x2="33.5" y2="189"/>
    <line class="ob" x1="38.5" y1="198" x2="38.5" y2="189"/>
    <text class="sm" x="36" y="186" text-anchor="middle" style="fill:var(--warn)">O</text>
    <!-- hydroxyls above, on the two up vertices. Measured glyph runs: O spans
         x31.09 to x40.91, OH at x68 spans x58.25 to x77.75, OH at x100 spans
         x90.25 to x109.75, so the gaps are 17.3px and 12.5px. -->
    <line class="ob" x1="68" y1="198" x2="68" y2="190"/>
    <text class="sm" x="68" y="186" text-anchor="middle" style="fill:var(--warn)">OH</text>
    <line class="ob" x1="100" y1="198" x2="100" y2="190"/>
    <text class="sm" x="100" y="186" text-anchor="middle" style="fill:var(--warn)">OH</text>
    <!-- hydroxyls below, on the three down vertices; OH at x52 spans x42.26 to x61.74 -->
    <line class="ob" x1="52" y1="222" x2="52" y2="229"/>
    <text class="sm" x="52" y="240" text-anchor="middle" style="fill:var(--warn)">OH</text>
    <line class="ob" x1="84" y1="222" x2="84" y2="229"/>
    <text class="sm" x="84" y="240" text-anchor="middle" style="fill:var(--warn)">OH</text>
    <line class="ob" x1="116" y1="222" x2="116" y2="229"/>
    <text class="sm" x="116" y="240" text-anchor="middle" style="fill:var(--warn)">OH</text>

    <!-- measured 200.14px from x24, ending x224.14, well short of the rule at
         x340. The second line measures 187.81px, ending x211.81. -->
    <text class="sm" x="24" y="128" style="fill:var(--warn)">fatty tail: 2 oxygens on 16 carbons</text>
    <text class="sm" x="24" y="266" style="fill:var(--warn)">glucose: 6 oxygens on 6 carbons</text>
  </g>

  <!-- BEAT 4: reduced carbon, and the answer. The accent colour means reduced
       carbon and the hydrogens on it, and it appears for the first time here. -->
  <g data-from="3">
    <!-- Same 15 points as the base chain, repainted. It deliberately stops at
         (260,94) and never reaches the carboxyl bond, because the carboxyl
         carbon is the one carbon in the tail that is NOT reduced. -->
    <polyline points="36,94 52,78 68,94 84,78 100,94 116,78 132,94 148,78 164,94 180,78 196,94 212,78 228,94 244,78 260,94"
              fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round"/>
    <!-- EVERY carbon-bound hydrogen in palmitic acid is drawn: 31 glyphs. A pair
         at x&#177;7 above each of the seven up vertices (52 84 116 148 180 212 244)
         and a pair at x&#177;7 below each of the seven down vertices that are CH2
         (68 100 132 164 196 228 260), which is 14 CH2 carbons carrying two each,
         plus THREE on the terminal methyl at x36: two at x&#177;7 below it and one up
         and to its left. 3 + 28 = 31; the 32nd hydrogen is the acid's O-H, living
         inside the COOH label. No carbon is decorated at a rate different from
         its real one, so there is no alternating pattern to misread.
         Geometry: glyph half width 3.35, so pairs span x&#177;3.65 to x&#177;10.35 and
         a pair keeps 6.26px inside itself and 10.26px to the next pair, measured.
         Upper row ink y61.8 to y69 sits 9px over the chain top; lower row ink
         y102.8 to y110 sits 9px over the count line's ink at y119. -->
    <text class="h" x="45"  y="69" text-anchor="middle">H</text>
    <text class="h" x="59"  y="69" text-anchor="middle">H</text>
    <text class="h" x="77"  y="69" text-anchor="middle">H</text>
    <text class="h" x="91"  y="69" text-anchor="middle">H</text>
    <text class="h" x="109" y="69" text-anchor="middle">H</text>
    <text class="h" x="123" y="69" text-anchor="middle">H</text>
    <text class="h" x="141" y="69" text-anchor="middle">H</text>
    <text class="h" x="155" y="69" text-anchor="middle">H</text>
    <text class="h" x="173" y="69" text-anchor="middle">H</text>
    <text class="h" x="187" y="69" text-anchor="middle">H</text>
    <text class="h" x="205" y="69" text-anchor="middle">H</text>
    <text class="h" x="219" y="69" text-anchor="middle">H</text>
    <text class="h" x="237" y="69" text-anchor="middle">H</text>
    <text class="h" x="251" y="69" text-anchor="middle">H</text>
    <text class="h" x="28"  y="88" text-anchor="middle">H</text>
    <text class="h" x="29"  y="110" text-anchor="middle">H</text>
    <text class="h" x="43"  y="110" text-anchor="middle">H</text>
    <text class="h" x="61"  y="110" text-anchor="middle">H</text>
    <text class="h" x="75"  y="110" text-anchor="middle">H</text>
    <text class="h" x="93"  y="110" text-anchor="middle">H</text>
    <text class="h" x="107" y="110" text-anchor="middle">H</text>
    <text class="h" x="125" y="110" text-anchor="middle">H</text>
    <text class="h" x="139" y="110" text-anchor="middle">H</text>
    <text class="h" x="157" y="110" text-anchor="middle">H</text>
    <text class="h" x="171" y="110" text-anchor="middle">H</text>
    <text class="h" x="189" y="110" text-anchor="middle">H</text>
    <text class="h" x="203" y="110" text-anchor="middle">H</text>
    <text class="h" x="221" y="110" text-anchor="middle">H</text>
    <text class="h" x="235" y="110" text-anchor="middle">H</text>
    <text class="h" x="253" y="110" text-anchor="middle">H</text>
    <text class="h" x="267" y="110" text-anchor="middle">H</text>

    <rect x="356" y="42" width="250" height="34" rx="17" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="sm" x="368" y="64" style="fill:var(--correct)">A &#183; carbons highly reduced</text>
    <!-- measured 147.56px from x368, ending x515.56 -->
    <text class="sm" x="368" y="93" style="fill:var(--correct)">more electrons to give up</text>
  </g>

  <!-- beat 5: kill C and D. Strikes come after every chip label so they paint on top. -->
  <g data-from="4">
    <line x1="362" y1="187" x2="600" y2="187" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="362" y1="251" x2="600" y2="251" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="368" y="221" style="fill:var(--incorrect)">glycogen is the wet one, fat is dry</text>
    <text class="sm" x="368" y="285" style="fill:var(--incorrect)">ester bonds, not phosphate bonds</text>
  </g>

  <!-- beat 6: the trap -->
  <g data-from="5">
    <line x1="362" y1="123" x2="600" y2="123" stroke="var(--incorrect)" stroke-width="1.5"/>
    <!-- widest right column string, measured: 206.52px from x368, ending
         x574.52, which is 49px inside the x624 wall. -->
    <text class="sm" x="368" y="157" style="fill:var(--incorrect)">flips reduced to oxidized: spent fuel</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "1 g fat vs 1 g glycogen · more than twice · four choices"},
    {t: 6.9,   cap: "Oxidize carbon all the way to CO₂ · energy = how far it goes"},
    {t: 13.28, cap: "Glucose: 6 O for 6 C · the fatty tail: 2 O for 16 C"},
    {t: 19.89, cap: "Fat's carbons are H-rich = highly reduced → answer A"},
    {t: 26.72, cap: "C: glycogen is the hydrated one · D: fats use ester bonds"},
    {t: 33.61, cap: "B reverses it · oxidized carbon is already-spent fuel"}
  ]
});
