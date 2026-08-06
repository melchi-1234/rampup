/* Concession-then-turn: each wrong choice is a different stopping point in the
   same paragraph. Beat 1 is the ungated base frame, three empty positions. */
RU_EX.reg("kkd5owb", {
  dur: 37,
  css: `
svg[data-x="kkd5owb"]{font-family:inherit}
svg[data-x="kkd5owb"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kkd5owb"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kkd5owb"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kkd5owb"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Three positions in the clock passage and where each wrong answer stops reading">
  <text class="tag" x="24" y="26">DIAGRAM THE ARGUMENT, NOT THE PARAGRAPH</text>

  <!-- three empty slots: the argument has three positions in it -->
  <rect x="24"  y="42" width="186" height="54" rx="10" fill="none"
        stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <rect x="226" y="42" width="186" height="54" rx="10" fill="none"
        stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <rect x="428" y="42" width="188" height="54" rx="10" fill="none"
        stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text class="tag" x="117" y="74" text-anchor="middle">POSITION 1</text>
  <text class="tag" x="319" y="74" text-anchor="middle">POSITION 2</text>
  <text class="tag" x="522" y="74" text-anchor="middle">POSITION 3</text>

  <!-- the four readings of the paragraph -->
  <rect class="chip" x="24" y="180" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="214" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="248" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="282" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="197" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="231" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="265" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="299" text-anchor="middle">D</text>
  <text class="sm" x="64" y="197">the clock alone, no prior demand</text>
  <text class="sm" x="64" y="231">desire made it &#8594; then it shaped us</text>
  <text class="sm" x="64" y="265">desire explains it; clock never a cause</text>
  <text class="sm" x="64" y="299">historians right, straightforwardly</text>

  <!-- beat 2: the historians' claim, and the skeptic's reversal -->
  <g data-from="1">
    <rect x="24" y="42" width="186" height="54" rx="10" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="2"/>
    <text class="tag" x="38" y="64">HISTORIANS SAY</text>
    <text class="lbl" x="38" y="86">clock &#8594; punctuality</text>
    <rect x="226" y="42" width="186" height="54" rx="10" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="2"/>
    <text class="tag" x="240" y="64">SKEPTIC &#183; CONCEDED</text>
    <text class="lbl" x="240" y="86">wish &#8594; clock</text>
    <text class="tag" x="218" y="74" text-anchor="middle">vs</text>
  </g>

  <!-- beat 3: the turn, where the author's own view lives -->
  <g data-from="2">
    <line x1="414" y1="69" x2="420" y2="69" stroke="var(--text)" stroke-width="2"/>
    <path d="M427,69 L419,64 L419,74 Z" fill="var(--text)"/>
    <rect x="428" y="42" width="188" height="54" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="tag" x="442" y="64">AUTHOR'S TURN</text>
    <text class="lbl" x="442" y="86" fill="var(--correct)">clock &#8594; behavior</text>
  </g>

  <!-- beat 4: origin and effect are two different questions -->
  <g data-from="3">
    <rect x="24" y="126" width="592" height="42" rx="10" fill="var(--surface-2)"/>
    <text class="tag" x="320" y="144" text-anchor="middle">TWO SEPARATE QUESTIONS</text>
    <text class="sm" x="170" y="162" text-anchor="middle" fill="var(--text)">where it came from</text>
    <text class="lbl" x="320" y="162" text-anchor="middle">&#8800;</text>
    <text class="sm" x="470" y="162" text-anchor="middle" fill="var(--text)">what it later does</text>
  </g>

  <!-- beat 5: each wrong choice is a stopping point -->
  <g data-from="4">
    <line x1="210" y1="96" x2="210" y2="108" stroke="var(--incorrect)" stroke-width="2"/>
    <line x1="412" y1="96" x2="412" y2="108" stroke="var(--incorrect)" stroke-width="2"/>
    <text class="sm" x="210" y="120" text-anchor="end" fill="var(--incorrect)">A &#183; D stop here</text>
    <text class="sm" x="412" y="120" text-anchor="end" fill="var(--incorrect)">C stops here</text>
    <line x1="64" y1="192" x2="294" y2="192" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="260" x2="345" y2="260" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="294" x2="316" y2="294" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="400" y="197" fill="var(--incorrect)">stops at sentence one</text>
    <text class="sm" x="400" y="265" fill="var(--incorrect)">stops at the concession</text>
    <text class="sm" x="400" y="299" fill="var(--incorrect)">same side as A, softer</text>
  </g>

  <!-- beat 6: the turn word is the marker -->
  <g data-from="5">
    <text class="sm" x="428" y="120" fill="var(--correct)">&#8220;though&#8221; &#183; &#8220;after all&#8221;</text>
    <rect x="24" y="214" width="592" height="24" rx="8" fill="var(--correct)" fill-opacity=".14"/>
    <rect x="24" y="214" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".22"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="231" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="sm" x="64" y="231" fill="var(--correct)">desire made it &#8594; then it shaped us</text>
    <text class="sm" x="400" y="231" fill="var(--correct)">keeps BOTH arrows</text>
    <rect x="24" y="314" width="592" height="34" rx="12" fill="var(--surface-2)"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="320" y="336" text-anchor="middle">the considered view lives past the turn word</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "CARS move: diagram the argument, not the text"},
    {t: 6.35,  cap: "Claim: clock → punctuality | Skeptic: wish → clock"},
    {t: 12.62, cap: 'Concedes the origin, then: "a cause after all"'},
    {t: 19.85, cap: "Assumption: origin ≠ effect, two separate questions"},
    {t: 25.24, cap: "A & D stop at claim 1; C stops at the concession"},
    {t: 30.95, cap: "The turn word marks where the real thesis lives"}
  ]
});
