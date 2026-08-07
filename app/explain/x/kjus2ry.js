/* Parallel branches: currents add, resistances don't.

   The argument accumulates rather than moves, so this is a drawn scene: the
   circuit, the per-branch arithmetic and the four candidate answers all have to
   stay on screen at the same time while the reasoning walks across them.

   Layout is two fixed columns split by a rule at x=316 - picture on the left,
   arithmetic on the right - plus a full-width choice row along the bottom. The
   divider itself is gated to step 2, the step at which the right column first
   has anything in it; an ungated rule spent the first third of the clip
   separating a populated column from an empty one, which reads as a broken
   render rather than a layout.

   WHAT THE PICTURE DOES WITHOUT THE VOICE. The subject is current, so current
   is drawn, not described. Every current in this circuit is an accent arrow
   running parallel to the wire that carries it, and every arrow's STROKE WIDTH
   is 3 px per amp: branch A is 3, branch B is 6, the trunk out of the battery
   is 9. Nine is three plus six on screen, at the node where the split happens,
   so Kirchhoff's current law is a shape rather than a sentence. The same claim
   is drawn a second time in the arithmetic column as two bars laid end to end
   against one bar of equal length, at 40 px per amp: 40 + 80 = 120 exactly.
   Beat 2's topological claim is drawn too - an accent halo under each rail,
   plus a junction dot where each branch meets each rail, which is what "both
   sit across the same two terminals" looks like.

   Nothing opaque is drawn across a wire. The rail halos are earlier in document
   order than the wires, so the dark wire paints over the middle of the halo and
   leaves an accent fringe on each side; the wire itself is never touched, never
   recoloured and never gated. The current arrows are all offset 14 px to the
   side of the lead they describe. The only marks that sit ON a wire are the
   four junction dots, which are standard circuit notation and add geometry
   rather than erasing it. An earlier draft put an opaque backing rect behind a
   centred caption and that rect sat straight across branch A's lead, erasing
   the connection to the top rail at the exact moment the voice said both
   branches sit across the same two terminals. There is no backing rect here.

   The resistors are stroked in the accent, not in the border colour. That is
   not decoration: each branch lead deliberately stops at y=110 and resumes at
   y=162 to make room for the body, so a body drawn at 1.2:1 against the card
   leaves a 52 px hole in a near-black wire and the circuit reads as OPEN,
   contradicting beat 2 outright. Both other resistor scenes in the corpus
   stroke .res in the accent for the same reason. */
RU_EX.reg("kjus2ry", {
  dur: 40,
  css: `
svg[data-x="kjus2ry"]{font-family:inherit}
svg[data-x="kjus2ry"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kjus2ry"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kjus2ry"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kjus2ry"] .wire{fill:none;stroke:var(--text);stroke-width:2.5;stroke-linecap:round}
svg[data-x="kjus2ry"] .res{fill:var(--surface-2);stroke:var(--accent);stroke-width:2}
svg[data-x="kjus2ry"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="kjus2ry"] .rail{fill:none;stroke:var(--accent);stroke-width:8;stroke-opacity:.34;stroke-linecap:round}
svg[data-x="kjus2ry"] .node{fill:var(--accent)}
svg[data-x="kjus2ry"] .flow{fill:none;stroke:var(--accent);stroke-linecap:butt}
svg[data-x="kjus2ry"] .tip{fill:var(--accent)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two resistors in parallel across a battery, with current arrows whose widths add at the branch node, and the four candidate total currents">

  <!-- Sized from getBBox in the real renderer, not from a per-char model: 38
       tracked caps at 11px measure 283.07, so this runs x 24..307.07 and clears
       the divider at 316 by 8.93. Every per-char model tried on this string
       under-predicts it by 9 to 35 px, so do not re-derive it arithmetically.
       Baseline 24 rather than 26 to keep the box off the 3.0 A arrow label. -->
  <text class="tag" x="24" y="24">TOTAL CURRENT SUPPLIED BY THE BATTERY?</text>

  <!-- ===== beat 2 halos, drawn BEFORE the wires so the wires paint over them.
       Each rail becomes one visible node: 8 px accent under a 2.5 px wire
       leaves a 2.75 px fringe on each side. Gated, so the base frame is a
       plain circuit. Uses stroke-opacity, never an opacity attribute, because
       applyGates writes an inline opacity that would clobber it. ===== -->
  <line class="rail" x1="76" y1="70"  x2="252" y2="70"  data-from="1"/>
  <line class="rail" x1="76" y1="200" x2="252" y2="200" data-from="1"/>

  <!-- ===== circuit ===== -->
  <path class="wire" d="M76 70 H252"/>
  <path class="wire" d="M76 200 H252"/>
  <path class="wire" d="M76 70 V120"/>
  <path class="wire" d="M76 134 V200"/>
  <!-- Battery plates carry their own stroke rather than .wire: the round cap on
       .wire would push the long plate out to x=56.75 and eat into the clearance
       in front of the "6.0 V" label, which ends at exactly x=50. The long plate
       is the positive terminal and it feeds the TOP rail, which is why every
       current arrow below points out of the top rail and down the branches. -->
  <line x1="58" y1="120" x2="94" y2="120" stroke="var(--text)" stroke-width="2.5"/>
  <line x1="66" y1="134" x2="86" y2="134" stroke="var(--text)" stroke-width="2.5"/>
  <path class="wire" d="M160 70 V110"/>
  <path class="wire" d="M160 162 V200"/>
  <path class="wire" d="M252 70 V110"/>
  <path class="wire" d="M252 162 V200"/>
  <!-- Bodies are 50 wide so the resistance can live INSIDE the component it
       belongs to, centred on its own branch. The previous pair were 24 wide
       with the value floating in the channel between them, 5 px from one box
       and 29.5 px from the other. -->
  <rect class="res" x="135" y="110" width="50" height="52" rx="5"/>
  <rect class="res" x="227" y="110" width="50" height="52" rx="5"/>

  <!-- Junction dots: the two ends of each branch, i.e. the four places where a
       branch touches a terminal. Drawn after the wires so they read. -->
  <circle class="node" cx="160" cy="70"  r="4" data-from="1"/>
  <circle class="node" cx="252" cy="70"  r="4" data-from="1"/>
  <circle class="node" cx="160" cy="200" r="4" data-from="1"/>
  <circle class="node" cx="252" cy="200" r="4" data-from="1"/>

  <!-- Anchored end at x=50 so the string grows leftwards into empty space:
       measures 32.43, so it runs 17.57..50, clearing the x=16 wall by 1.57 and
       the battery plate at x=58 by 8. This is the only end-anchored run in the
       scene, and nothing start-anchored shares its baseline. -->
  <text class="sm" x="50" y="133" text-anchor="end">6.0 V</text>
  <!-- Centred inside its own body: 33.34 inside a 50 px box, 8.33 of margin
       each side, and no other resistor is adjacent to either. -->
  <text class="sm" x="160" y="141" text-anchor="middle">6.0 &#937;</text>
  <text class="sm" x="252" y="141" text-anchor="middle">3.0 &#937;</text>

  <!-- Gated with the right column it divides. -->
  <line x1="316" y1="44" x2="316" y2="258" stroke="var(--border-strong)" stroke-width="1.5" data-from="2"/>

  <!-- ===== choice row: four fixed columns, w 136, gap 16, margin 24 =====
       Ungated on purpose. Beat 1 ends on "which of the four?", so all four
       candidates have to already be there for that sentence to point at
       anything. The widest label is chip A's, measured at 65.80, so it spans
       59.10..124.90 inside its 24..160 chip with 35.1 of margin either side.
       Beat 5's strike at x 40..144 therefore crosses that label and nothing
       else; the same holds for B and D. -->
  <rect class="chip" x="24"  y="280" width="136" height="34" rx="17"/>
  <rect class="chip" x="176" y="280" width="136" height="34" rx="17"/>
  <rect class="chip" x="328" y="280" width="136" height="34" rx="17"/>
  <rect class="chip" x="480" y="280" width="136" height="34" rx="17"/>
  <text class="lbl" x="92"  y="302" text-anchor="middle">A &#183; 0.67 A</text>
  <text class="lbl" x="244" y="302" text-anchor="middle">B &#183; 1.0 A</text>
  <!-- Handed off, not over-painted: this copy switches OFF at the step the
       accent copy switches on, so the two glyph sets never composite. -->
  <text class="lbl" x="396" y="302" text-anchor="middle" data-from="0" data-to="2">C &#183; 3.0 A</text>
  <text class="lbl" x="548" y="302" text-anchor="middle">D &#183; 2.0 A</text>

  <!-- ===== beat 2 (data-from="1"): same voltage on BOTH branches =====
       Two ticks, not one centred caption. The sentence makes a claim about each
       branch, so the claim is written under each branch where its evidence is.
       Glyph tops land near 212.6, and the bottom rail halo stops at 204. -->
  <g data-from="1">
    <text class="sm" x="160" y="222" text-anchor="middle" style="fill:var(--accent)">sees 6.0 V</text>
    <text class="sm" x="252" y="222" text-anchor="middle" style="fill:var(--accent)">sees 6.0 V</text>
  </g>

  <!-- ===== beat 3 (data-from="2"): Ohm's law, one branch at a time =====
       The two branch currents are DRAWN, in the 40 px band between the top rail
       and the resistor bodies, each arrow 14 px to the left of the lead it
       describes and 3 px of stroke per amp. Branch B's arrow is visibly twice
       branch A's before either number is read. -->
  <g data-from="2">
    <line class="flow" x1="146" y1="78" x2="146" y2="96" stroke-width="3"/>
    <path class="tip" d="M141 96 L151 96 L146 104 Z"/>
    <text class="sm" x="116" y="95" text-anchor="middle" style="fill:var(--accent)">1.0 A</text>
    <line class="flow" x1="238" y1="78" x2="238" y2="96" stroke-width="6"/>
    <path class="tip" d="M232 96 L244 96 L238 104 Z"/>
    <text class="sm" x="206" y="95" text-anchor="middle" style="fill:var(--accent)">2.0 A</text>
    <text class="sm" x="332" y="76">6.0 V &#247; 6.0 &#937; = 1.0 A</text>
    <text class="sm" x="332" y="100">6.0 V &#247; 3.0 &#937; = 2.0 A</text>
  </g>

  <!-- ===== beat 4 (data-from="3"): the branches add, and C is the answer =====
       The trunk arrow above the rail segment that runs from the battery to the
       first node carries 9 px of stroke, which is branch A's 3 plus branch B's
       6. The bars restate it by length at 40 px per amp: a 40 and an 80 laid
       end to end against a single 120, with guide ticks proving the two rows
       end on the same x. The chip is re-drawn rather than restyled, and beat 4
       also names choice C out loud so the tint never carries the answer alone. -->
  <g data-from="3">
    <line class="flow" x1="84" y1="56" x2="142" y2="56" stroke-width="9"/>
    <path class="tip" d="M142 49 L142 63 L152 56 Z"/>
    <text class="sm" x="112" y="42" text-anchor="middle" style="fill:var(--accent)">3.0 A</text>

    <rect x="332" y="120" width="40" height="22" fill="var(--accent)" fill-opacity=".22"
          stroke="var(--accent)" stroke-width="1.5"/>
    <rect x="372" y="120" width="80" height="22" fill="var(--accent)" fill-opacity=".22"
          stroke="var(--accent)" stroke-width="1.5"/>
    <text class="sm" x="352" y="135" text-anchor="middle">1.0 A</text>
    <text class="sm" x="412" y="135" text-anchor="middle">2.0 A</text>
    <line x1="332" y1="142" x2="332" y2="152" stroke="var(--muted)" stroke-width="1.5"/>
    <line x1="452" y1="142" x2="452" y2="152" stroke="var(--muted)" stroke-width="1.5"/>
    <rect x="332" y="152" width="120" height="22" fill="var(--correct)" fill-opacity=".22"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="sm" x="392" y="167" text-anchor="middle" style="fill:var(--correct)">3.0 A</text>
    <text class="sm" x="332" y="196" style="fill:var(--correct)">1.0 A + 2.0 A = 3.0 A</text>

    <rect x="328" y="280" width="136" height="34" rx="17" fill="var(--correct)"
          fill-opacity=".2" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="396" y="302" text-anchor="middle" style="fill:var(--correct)">C &#183; 3.0 A</text>
  </g>

  <!-- ===== beat 5 (data-from="4"): where the three losers come from =====
       "series math:" prefixes the 9.0 ohm line so it reads as the mistake being
       named, not as a claim about this circuit. The approximation sign is only
       ever on screen; the narration hedges out loud with "roughly".
       Strikes come last in document order so they paint over the chip labels,
       and each one is inset far enough to cross only its own label: A covers
       40..144 against a label at 55.5..128.5, and the chip border at x=24/160
       is left alone. -->
  <g data-from="4">
    <text class="sm" x="332" y="226" style="fill:var(--incorrect)">series math: 6.0 + 3.0 = 9.0 &#937;</text>
    <text class="sm" x="332" y="250" style="fill:var(--incorrect)">6.0 V &#247; 9.0 &#937; &#8776; 0.67 A</text>
    <line x1="40"  y1="297" x2="144" y2="297" stroke="var(--incorrect)" stroke-width="2"/>
    <line x1="192" y1="297" x2="296" y2="297" stroke="var(--incorrect)" stroke-width="2"/>
    <line x1="496" y1="297" x2="600" y2="297" stroke="var(--incorrect)" stroke-width="2"/>
  </g>

  <!-- ===== beat 6 (data-from="5"): the rule to carry away =====
       A rule and a left-aligned line, NOT a pill. Rounded, tinted, centre-set
       and 592 px wide, it was drawn in the same visual language as the four
       choice chips 8 px above it and scanned as a fifth answer. The line
       measures 301.69, so it runs 24..325.69; box bottom 346.65, which is 5.35
       clear of the 352 floor and the lowest mark in the scene. -->
  <g data-from="5">
    <line x1="24" y1="326" x2="616" y2="326" stroke="var(--accent)" stroke-width="1.5" stroke-opacity=".5"/>
    <text class="lbl" x="24" y="344" style="fill:var(--accent)">in parallel, voltages match and currents add</text>
  </g>
</svg>`,
  /* The only data-to in the scene is the choice-C label handoff; nothing else
     drawn here stops being true later. The struck choices stay struck, the
     branch arithmetic stays correct, the arrow widths stay in proportion, and
     the trap line is labelled as the trap from the moment it appears. The
     reduced-motion path lands on the last step, so this final frame has to read
     on its own - it does: circuit, both branch currents drawn and named, the
     trunk that is their sum, the bars, the three strikes, the rule.

     These t values are the silent fallback; when the narration is built the
     player takes its boundaries from the measured beat lengths instead. They
     are apportioned by speech length across 530 spoken characters. */
  steps: [
    {t: 0,     cap: "6.0 V, a 6.0 Ω and a 3.0 Ω resistor side by side"},
    {t: 7.02,  cap: "Parallel: each branch sees the full 6.0 V"},
    {t: 13.58, cap: "Ohm's law per branch: 6/6 = 1.0 A, 6/3 = 2.0 A"},
    {t: 20.45, cap: "Branch currents add: 1.0 + 2.0 = 3.0 A — choice C"},
    {t: 26.87, cap: "1.0 and 2.0 are single branches; 0.67 adds resistors"},
    {t: 34.34, cap: "In parallel, voltages match and currents add"}
  ]
});
