/* Concentration cell — the dilute electrode is the anode.
   Drawn scene: one WORKING cell on top (Cu2+ ion dots, electron flow on the
   wire, anion return through the bridge, the concentration arrows, then the
   two electrode events and the role tags), and a four-row verdict table
   below it. Nothing here is animated; the argument is what accumulates.

   Muted test — with the voice off, the top half alone says: few Cu2+ dots on
   the left and many on the right (same metal, different concentration);
   electrons leaving the left electrode rightwards along the wire and anions
   coming back left through the bridge (a real current); the left ion count
   arrow pointing up and the right one pointing down (the concentrations are
   closing); an ion leaving the left electrode and an ion landing on the right
   one (what each side does); and finally the words ANODE and CATHODE landing
   on those two electrodes. The verdict column only names what the picture has
   already shown.

   The ion dots are a deliberate schematic — "few versus many", not a 1:100
   count, which no beaker could hold. The actual numbers are printed directly
   beneath each beaker (0.010 M and 1.0 M) and those labels, not the dots, are
   the quantitative claim.

   Text arithmetic used throughout: 12.5px (.sm) is 6.5px per RENDERED glyph,
   14px (.lbl) is 7.3, 11px (.tag) is 6.3 plus .05em of tracking (0.55px per
   glyph). The counts below are glyphs, not source characters — "&#178;" is
   five bytes and one glyph.

   The three widest strings, measured:
     "In a concentration cell, the DILUTE side is the anode"
        53 x 6.5 = 344.5, centred on x=320 -> 147.75 .. 492.25, inside the
        accent bar at 134..506 with 13.75px of padding either side.
     "the 1.0 M side plates Cu, so CATHODE"
        36 x 6.5 = 234, from x=344 -> ends 578. This is the rightmost glyph in
        the file, 38px inside the module's own 616 gutter.
     "Neither: E&#176;cell = 0, no current flows"
        37 x 6.5 = 240.5, from x=60 -> ends 300.5, against the choice column's
        330 wall. This is the string that sets the whole left column's width. */
RU_EX.reg("k1cp5l56", {
  dur: 42,
  css: `
svg[data-x="k1cp5l56"]{font-family:inherit}
svg[data-x="k1cp5l56"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1cp5l56"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1cp5l56"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1cp5l56"] .glass{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="k1cp5l56"] .soln{fill:var(--accent);opacity:.14}
svg[data-x="k1cp5l56"] .ion{fill:var(--accent)}
svg[data-x="k1cp5l56"] .metal{fill:var(--muted);stroke:var(--text);stroke-width:1.5}
svg[data-x="k1cp5l56"] .wire{fill:none;stroke:var(--text);stroke-width:2.5;stroke-linecap:round}
svg[data-x="k1cp5l56"] .bridge{fill:none;stroke:var(--border-strong);stroke-width:8;stroke-linecap:round}
svg[data-x="k1cp5l56"] .arw{fill:none;stroke:var(--accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
svg[data-x="k1cp5l56"] .arwm{fill:none;stroke:var(--muted);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
svg[data-x="k1cp5l56"] .lead{fill:none;stroke-width:1.5;stroke-linecap:round}
svg[data-x="k1cp5l56"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="k1cp5l56"] .kill{stroke:var(--incorrect);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="A copper concentration cell drawn twice over: few copper ions in the dilute beaker on the left and many in the concentrated beaker on the right, electrons flowing left to right through the wire, and the dilute electrode labelled as the anode">

  <!-- BASE FRAME, ungated. Beat 1 speaks every run of it: the two copper
       electrodes, the ion populations, the two concentrations, the options. -->

  <!-- Wire before meter, deliberately. The meter's card fill is the only
       thing hiding the length of wire behind it at y=26; swap the two and the
       dial gets a line drawn straight through its face. -->
  <path class="wire" d="M134 30 L134 26 L506 26 L506 30"/>

  <rect class="glass" x="48"  y="48" width="176" height="88" rx="8"/>
  <rect class="glass" x="416" y="48" width="176" height="88" rx="8"/>
  <rect class="soln"  x="52"  y="66" width="168" height="66" rx="6"/>
  <rect class="soln"  x="420" y="66" width="168" height="66" rx="6"/>

  <!-- Cu2+ populations. 3 dots against 19 is the picture of "0.010 M versus
       1.0 M"; it is a ratio you can see rather than a number you must hold.
       Every dot is r=3 and lives strictly inside its solution rect
       (52..220 and 420..588 across, 66..132 down), clear of the electrodes
       (123.25..144.75 and 495.25..516.75) and clear of the lanes reserved
       for the beat-3 concentration arrows and the beat-4 electrode events. -->
  <g class="ion">
    <circle cx="104" cy="78" r="3"/>
    <circle cx="108" cy="110" r="3"/>
    <circle cx="196" cy="78" r="3"/>
  </g>
  <g class="ion">
    <circle cx="428" cy="78" r="3"/>
    <circle cx="446" cy="78" r="3"/>
    <circle cx="464" cy="78" r="3"/>
    <circle cx="482" cy="78" r="3"/>
    <circle cx="436" cy="92" r="3"/>
    <circle cx="454" cy="92" r="3"/>
    <circle cx="472" cy="92" r="3"/>
    <circle cx="488" cy="92" r="3"/>
    <circle cx="428" cy="106" r="3"/>
    <circle cx="428" cy="120" r="3"/>
    <circle cx="446" cy="120" r="3"/>
    <circle cx="464" cy="120" r="3"/>
    <circle cx="482" cy="120" r="3"/>
    <circle cx="526" cy="78" r="3"/>
    <circle cx="544" cy="78" r="3"/>
    <circle cx="534" cy="94" r="3"/>
    <circle cx="526" cy="110" r="3"/>
    <circle cx="544" cy="110" r="3"/>
    <circle cx="536" cy="124" r="3"/>
  </g>

  <!-- Crown of the bridge sits at (320, 72); stroke 8 puts its underside at
       y=76 at the crown and about y=81 over x=374..383, which is where the
       beat-3 anion chevron sits, 9px lower. -->
  <path class="bridge" d="M224 86 Q320 58 416 86"/>

  <!-- Electrodes last of the apparatus so the metal paints over the solution
       it is dipped into. Bottom at y=116, still 16px above the liquid line. -->
  <rect class="metal" x="124" y="30" width="20" height="86" rx="3"/>
  <rect class="metal" x="496" y="30" width="20" height="86" rx="3"/>

  <!-- Meter dropped 4px (cy 20 -> 24) so its outer edge starts at y=7.75
       instead of 3.75, which matches the 16px kept at the sides and the 12px
       kept at the floor rather than being 4x tighter than either. -->
  <circle cx="320" cy="24" r="15" fill="var(--card)" stroke="var(--text)" stroke-width="2.5"/>
  <text class="lbl" x="320" y="29" text-anchor="middle">V</text>

  <!-- Same metal, same ion, two concentrations. Both labels are CENTRED in
       their own beaker column (80.75..191.25 and 455.25..552.75), so they
       share a baseline without ever being able to reach each other. -->
  <text class="sm"  x="136" y="154" text-anchor="middle">Cu | 0.010 M Cu&#178;&#8314;</text>
  <text class="sm"  x="504" y="154" text-anchor="middle">Cu | 1.0 M Cu&#178;&#8314;</text>
  <text class="tag" x="136" y="170" text-anchor="middle">DILUTE</text>
  <text class="tag" x="504" y="170" text-anchor="middle">CONCENTRATED</text>

  <!-- The rule lives in dead space: nearest glyph above bottoms out at y=190,
       nearest chip below starts at y=206. It crosses nothing. -->
  <line x1="24" y1="198" x2="616" y2="198" stroke="var(--border-strong)" stroke-width="1"/>

  <!-- FOUR-ROW TABLE. Three fixed columns and one row pitch, so no verdict can
       ever run into a choice: letter x=24..52, choice text from x=60 (widest
       ends 300.5), verdict from x=344. 43.5px of guaranteed air between them.

       Chips are 22px tall on a 28px pitch, not 24. At 24 the 6px gutter is
       only 4px, and the beat-5 ring around row C cannot fit its own 2px stroke
       between two neighbouring 1.5px chip strokes. Row centres are unchanged
       at 217 / 245 / 273 / 301, so every baseline and strike line stays put. -->
  <rect class="chip" x="24" y="206" width="28" height="22" rx="7"/>
  <rect class="chip" x="24" y="234" width="28" height="22" rx="7"/>
  <rect class="chip" x="24" y="262" width="28" height="22" rx="7"/>
  <rect class="chip" x="24" y="290" width="28" height="22" rx="7"/>
  <text class="lbl" x="38" y="222" text-anchor="middle">A</text>
  <text class="lbl" x="38" y="250" text-anchor="middle">B</text>
  <!-- Row C's letter is the one thing in the scene that stops being true as
       drawn: at beat 5 it is restated in the correct colour. It is gated off
       here rather than over-painted, so exactly one C is ever on the canvas. -->
  <text class="lbl" x="38" y="278" text-anchor="middle" data-from="0" data-to="3">C</text>
  <text class="lbl" x="38" y="306" text-anchor="middle">D</text>
  <text class="sm" x="60" y="222">Neither: E&#176;cell = 0, no current flows</text>
  <text class="sm" x="60" y="250">The electrode in 1.0 M Cu&#178;&#8314;</text>
  <text class="sm" x="60" y="278">The electrode in 0.010 M Cu&#178;&#8314;</text>
  <text class="sm" x="60" y="306">Both electrodes act as anodes</text>

  <!-- BEAT 2 - the two non-starters. Strikes stop short of the verdict column
       (305 and 253 against a 344 wall) and start at 56, clear of the chips. -->
  <g data-from="1">
    <line class="kill" x1="56" y1="217" x2="305" y2="217"/>
    <line class="kill" x1="56" y1="301" x2="253" y2="301"/>
    <text class="sm" x="344" y="222" style="fill:var(--incorrect)">E&#176; = 0 is the standard state only</text>
    <text class="sm" x="344" y="306" style="fill:var(--incorrect)">one anode, one cathode, always</text>
  </g>

  <!-- BEAT 3 - a real voltage, so a real current, and the current is closing
       the concentration gap. Four drawn claims, no prose:
         wire     two right-pointing chevrons on the wire at y=26, apexes at
                  x=244 and x=404, tagged e- at (240, 46). Electrons leave the
                  dilute electrode and travel to the concentrated one.
         bridge   one left-pointing chevron under the arc, apex (374, 98),
                  tagged "anions" centred at 378 (357.45..398.55). Anions move
                  toward the compartment that is making Cu2+.
         left     Cu2+ tag at (73, 80) over an arrow that points UP from y=126
                  to a head tip at y=88: the dilute count is rising.
         right    Cu2+ tag at (567, 80) over an arrow that points DOWN to a
                  head tip at y=124: the concentrated count is falling.
       Both arrows are drawn in the same accent as the ion dots they count, and
       both sit in the outer half of their own beaker, away from the electrode
       lanes that beat 4 uses. The reading under the dial is centred at x=320,
       294..346, glyph top y=47 against the meter's outer edge at 40.25. -->
  <g data-from="2">
    <text class="sm" x="320" y="56" text-anchor="middle" style="fill:var(--accent)">&#8776; 0.06 V</text>
    <path class="arw" d="M236 20 L244 26 L236 32"/>
    <path class="arw" d="M396 20 L404 26 L396 32"/>
    <text class="tag" x="240" y="46" text-anchor="middle" style="fill:var(--accent)">e&#8315;</text>
    <path class="arwm" d="M382 92 L374 98 L382 104"/>
    <text class="tag" x="378" y="120" text-anchor="middle">anions</text>
    <text class="tag" x="73" y="80" text-anchor="middle" style="fill:var(--accent)">Cu&#178;&#8314;</text>
    <path class="arw" d="M73 126 L73 89"/>
    <path class="arw" d="M66.5 95.5 L73 88 L79.5 95.5"/>
    <text class="tag" x="567" y="80" text-anchor="middle" style="fill:var(--accent)">Cu&#178;&#8314;</text>
    <path class="arw" d="M567 88 L567 123"/>
    <path class="arw" d="M560.5 116.5 L567 124 L573.5 116.5"/>
  </g>

  <!-- BEAT 4 - what each side has to DO, drawn at the two electrode faces and
       then written out underneath.
         left   arrow leaving the metal at x=150 (5.25px clear of the electrode
                face at 144.75), head tip x=175, and a new Cu2+ dot at
                (187, 106): copper leaves the bar as an ion.
         right  a Cu2+ dot at (452, 106) and an arrow from x=462 to a head tip
                at x=488, which with its 2.5 stroke reaches 489.25 and stops
                6px short of the electrode face at 495.25: an ion lands.
       Both half-reactions are centred in their own beaker column, and neither
       string carries a descender, so y=190 clears the rule at y=198. -->
  <g data-from="3">
    <path class="arw" d="M150 106 L174 106"/>
    <path class="arw" d="M169 101.5 L175 106 L169 110.5"/>
    <circle class="ion" cx="187" cy="106" r="3.5"/>
    <circle class="ion" cx="452" cy="106" r="3.5"/>
    <path class="arw" d="M462 106 L487 106"/>
    <path class="arw" d="M482 101.5 L488 106 L482 110.5"/>
    <text class="sm" x="136" y="190" text-anchor="middle">Cu &#8594; Cu&#178;&#8314; + 2e&#8315;</text>
    <text class="sm" x="504" y="190" text-anchor="middle">Cu&#178;&#8314; + 2e&#8315; &#8594; Cu</text>
  </g>

  <!-- BEAT 5 - name the roles ON THE APPARATUS, which settles C and kills B.
       ANODE and CATHODE go in the headspace of their own beaker with a short
       leader to the electrode, so the two words in the verdict column now
       point at something drawn instead of at the word "here".
         ANODE   11px tag, 5 glyphs = 34.25px, centred x=86 -> 68.875..103.125,
                 inside the 50..122 gap left of electrode L (123.25..144.75);
                 baseline 62 gives a glyph band of 54..62, which is 4.75 under
                 the beaker's inner top (49.25) and 4 above the solution (66).
                 Leader 105..121.5 at y=58.
         CATHODE 7 glyphs = 47.95px, centred x=456 -> 432.025..479.975, inside
                 the 418..494 gap left of electrode R. Leader 482..493 at y=58.
       Ring: path box 20..258 x 259..287, outer edge 19..259 x 258..288. It
       contains chip C (23.25..52.75 x 261.25..284.75) and the whole of choice
       text C (ends x=248.5), and clears chip B and chip D by 1.25px each.
       Left edge is 20 rather than 24 so the chip gets the same 4px of padding
       it has on top and bottom; fill is none so the base text is not veiled.
       Neither verdict says "here" any more: each one names its own molarity,
       so the string is true wherever on the line it happens to sit. -->
  <g data-from="4">
    <text class="tag" x="86" y="62" text-anchor="middle" style="fill:var(--correct)">ANODE</text>
    <path class="lead" d="M105 58 L121.5 58" stroke="var(--correct)"/>
    <text class="tag" x="456" y="62" text-anchor="middle" style="fill:var(--text)">CATHODE</text>
    <path class="lead" d="M482 58 L493 58" stroke="var(--text)"/>
    <rect x="20" y="259" width="238" height="28" rx="8" fill="none" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="38" y="278" text-anchor="middle" style="fill:var(--correct)">C</text>
    <text class="sm" x="344" y="278" style="fill:var(--correct)">the 0.010 M side oxidizes, so ANODE</text>
    <line class="kill" x1="56" y1="245" x2="240" y2="245"/>
    <text class="sm" x="344" y="250" style="fill:var(--incorrect)">the 1.0 M side plates Cu, so CATHODE</text>
  </g>

  <!-- BEAT 6 - the rule that transfers. fill-opacity, not opacity: the runtime
       writes style.opacity on this group to gate it, and an opacity attribute
       on the rect would be multiplied against that instead of holding at .14.
       Bar bottom is y=348, under the 352 floor. -->
  <g data-from="5">
    <rect x="134" y="318" width="372" height="30" rx="15" fill="var(--accent)" fill-opacity=".14"/>
    <text class="sm" x="320" y="338" text-anchor="middle" style="fill:var(--accent)">In a concentration cell, the DILUTE side is the anode</text>
  </g>
</svg>`,
  /* One data-to in the file, on the base row-C letter: it is the only mark that
     is superseded rather than added to. Every strike, arrow, tag and ring is a
     terminal verdict and stays true to the last frame. */
  steps: [
    {t: 0,    cap: "Same metal, same ion: only the concentration differs"},
    {t: 7.1,  cap: "No cell has two anodes; E°cell = 0 is standard state only"},
    {t: 14.8, cap: "Real cell voltage ≈ 0.06 V, driving toward equal [Cu²⁺]"},
    {t: 22.0, cap: "Dilute must make Cu²⁺; concentrated must plate it out"},
    {t: 28.1, cap: "Oxidation = anode: the 0.010 M electrode, answer C"},
    {t: 36.4, cap: "Concentration cell: the DILUTE electrode is the anode"}
  ]
});
