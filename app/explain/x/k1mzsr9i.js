/* Eukaryote versus prokaryote, and ribosomes are the trap. Two identical
   cells side by side; the only drawn difference is the wall the left one
   gets around its DNA at beat 3. The verdict table underneath fills in by
   step: three candidates land "in both cell types" and dim, the trap row
   turns warn while the rule pill lands below it, and the answer row lights
   last, where the geometry already pointed.

   Mute test: same dots, same squiggle, same labelled outline in both
   cells; a nucleus wall only on the left; three dimmed rows, one warned
   row, one lit row on a tinted pill. The absence in the right cell IS the
   answer.

   Text arithmetic (measured rates: tag 7.39 px/char, sm lowercase 5.63,
   sm mixed 5.98). The three widest strings:
     "No inner membranes, not no machinery. Bacteria need ribosomes."
        62 x 5.98 = 370.76, centred x=320, spans 134.62 .. 505.38, inside
        the band C pill 40..600 with 94.62px of air on each side.
     "A membrane-bound nucleus"
        24 x 5.98 = 143.52, from x=52, ends 195.52 in the 52..300 column.
     "loose in the cytoplasm"
        22 x 5.63 = 123.86, centred x=476, spans 414.07 .. 537.93; the
        rightmost glyph in the file, 86.07px inside the 624 gutter.
   Lowest ink: band C pill bottom 318 + 32 = 350, under the 352 floor;
   deepest descender is the band C text at 339 + 3 = 342. */
RU_EX.reg("k1mzsr9i", {
  dur: 39,
  css: `
svg[data-x="k1mzsr9i"]{font-family:inherit}
svg[data-x="k1mzsr9i"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1mzsr9i"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1mzsr9i"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1mzsr9i"] .cell{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:2}
svg[data-x="k1mzsr9i"] .dot{fill:var(--muted)}
svg[data-x="k1mzsr9i"] .dna{fill:none;stroke:var(--text);stroke-width:2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two cells drawn with the same membrane, ribosomes and DNA, but only the eukaryote seals its DNA inside a nucleus, and the verdict table marks a membrane-bound nucleus as the eukaryote-only feature">

  <!-- BASE FRAME, ungated: two named cells above a headed four-name table.
       Beat 1 speaks exactly these: two cells, four features. -->
  <text class="tag" x="164" y="24" text-anchor="middle" style="fill:var(--text)">EUKARYOTE</text>
  <text class="tag" x="476" y="24" text-anchor="middle" style="fill:var(--text)">PROKARYOTE</text>
  <rect class="cell" x="32"  y="32" width="264" height="154" rx="44"/>
  <rect class="cell" x="344" y="32" width="264" height="154" rx="44"/>

  <!-- BEAT 2, identical contents. Nine dots per cell; the right list is the
       left list shifted 312 in x. -->
  <g class="dot" data-from="1">
    <circle cx="58" cy="58" r="3.5"/><circle cx="48" cy="96" r="3.5"/><circle cx="66" cy="132" r="3.5"/>
    <circle cx="54" cy="164" r="3.5"/><circle cx="164" cy="44" r="3.5"/><circle cx="262" cy="58" r="3.5"/>
    <circle cx="272" cy="96" r="3.5"/><circle cx="250" cy="132" r="3.5"/><circle cx="266" cy="164" r="3.5"/>
    <circle cx="370" cy="58" r="3.5"/><circle cx="360" cy="96" r="3.5"/><circle cx="378" cy="132" r="3.5"/>
    <circle cx="366" cy="164" r="3.5"/><circle cx="476" cy="44" r="3.5"/><circle cx="574" cy="58" r="3.5"/>
    <circle cx="584" cy="96" r="3.5"/><circle cx="562" cy="132" r="3.5"/><circle cx="578" cy="164" r="3.5"/>
  </g>

  <!-- BEAT 3, the nucleus wall, LEFT CELL ONLY. Drawn before the squiggle so
       its tinted fill sits behind the DNA ink. The right cell gets no circle;
       that absence is the answer. -->
  <circle cx="164" cy="92" r="36" fill="var(--accent)" fill-opacity=".12"
          stroke="var(--correct)" stroke-width="2.5" data-from="2"/>

  <!-- BEAT 2, the same squiggle in both cells, then the in-cell labels. The
       rect outline IS the cell membrane, so its label hugs the inside of the
       top edge. -->
  <g data-from="1">
    <path class="dna" d="M142 88 Q147.5 72 153 88 Q158.5 104 164 88 Q169.5 72 175 88 Q180.5 104 186 88"/>
    <path class="dna" d="M454 88 Q459.5 72 465 88 Q470.5 104 476 88 Q481.5 72 487 88 Q492.5 104 498 88"/>
    <text class="sm" x="80"  y="50" style="fill:var(--muted)">cell membrane</text>
    <text class="sm" x="392" y="50" style="fill:var(--muted)">cell membrane</text>
    <text class="sm" x="164" y="114" text-anchor="middle">DNA</text>
    <text class="sm" x="476" y="114" text-anchor="middle">DNA</text>
    <text class="sm" x="164" y="170" text-anchor="middle">ribosomes</text>
    <text class="sm" x="476" y="170" text-anchor="middle">ribosomes</text>
  </g>

  <!-- BEAT 3, where the genetic material sits. -->
  <g data-from="2">
    <text class="sm" x="164" y="146" text-anchor="middle" style="fill:var(--correct)">sealed in a nucleus</text>
    <text class="sm" x="476" y="146" text-anchor="middle" style="fill:var(--muted)">loose in the cytoplasm</text>
  </g>

  <!-- The divider lives in dead space: cell bottoms end at 186, header glyph
       tops start at 204. It crosses nothing. -->
  <line x1="40" y1="198" x2="600" y2="198" stroke="var(--border-strong)" stroke-width="1"/>

  <!-- Both pills before every table run, so each renders behind the text that
       arrives at its own step. -->
  <rect x="40" y="263" width="560" height="24" rx="12" fill="var(--correct)" fill-opacity=".16" data-from="5"/>
  <rect x="40" y="318" width="560" height="32" rx="16" fill="var(--warn)" fill-opacity=".14" data-from="4"/>

  <!-- VERDICT TABLE. Two fixed left-aligned columns; all four names sit in
       the base frame and only the verdicts arrive by step. Recolors use the
       swap idiom: a base run gates off (data-to) at the exact step its
       restated colour gates on, so exactly one copy is ever on the canvas. -->
  <text class="tag" x="52"  y="212">FEATURE</text>
  <text class="tag" x="316" y="212">IN WHICH CELLS</text>
  <text class="sm" x="52" y="232" data-from="0" data-to="2">Ribosomes</text>
  <text class="sm" x="52" y="232" data-from="3" data-to="3" style="fill:var(--muted)">Ribosomes</text>
  <text class="sm" x="52" y="232" data-from="4" style="fill:var(--warn)">Ribosomes</text>
  <text class="sm" x="52" y="256" data-from="0" data-to="2">A cell membrane</text>
  <text class="sm" x="52" y="256" data-from="3" style="fill:var(--muted)">A cell membrane</text>
  <text class="sm" x="52" y="280" data-from="0" data-to="4">A membrane-bound nucleus</text>
  <text class="sm" x="52" y="280" data-from="5" style="fill:var(--correct)">A membrane-bound nucleus</text>
  <text class="sm" x="52" y="304" data-from="0" data-to="2">DNA</text>
  <text class="sm" x="52" y="304" data-from="3" style="fill:var(--muted)">DNA</text>

  <!-- BEAT 4: three of the four sit in both cell types, and those rows dim. -->
  <text class="sm" x="316" y="232" data-from="3" data-to="3" style="fill:var(--muted)">in both cell types</text>
  <text class="sm" x="316" y="256" data-from="3" style="fill:var(--muted)">in both cell types</text>
  <text class="sm" x="316" y="304" data-from="3" style="fill:var(--muted)">in both cell types</text>

  <!-- BEAT 5: the trap row goes warn while the rule lands in the pill below. -->
  <text class="sm" x="316" y="232" data-from="4" style="fill:var(--warn)">in both cell types</text>

  <!-- BEAT 6: the answer row lights where the geometry already pointed. -->
  <text class="sm" x="316" y="280" data-from="5" style="fill:var(--correct)">eukaryotes only</text>

  <text class="sm" x="320" y="339" text-anchor="middle" data-from="4">No inner membranes, not no machinery. Bacteria need ribosomes.</text>
</svg>`,
  steps: [
    {t: 0,     cap: "Two cells, and four candidate features"},
    {t: 7.71,   cap: "Both have a membrane, ribosomes, and DNA"},
    {t: 14.3,  cap: "Only the eukaryote seals its DNA in a nucleus"},
    {t: 20.89, cap: "Three of the four are in BOTH cell types"},
    {t: 24.12, cap: "No inner membranes, not no machinery · bacteria need ribosomes"},
    {t: 33.35, cap: "A membrane-bound nucleus is eukaryote-only"}
  ]
});
