/* Function question: the famine severs the premise the market claim rests on,
   so it marks a LIMIT. Beat 1 is the ungated base frame. */
RU_EX.reg("k1ohzbsx", {
  dur: 34,
  css: `
svg[data-x="k1ohzbsx"]{font-family:inherit}
svg[data-x="k1ohzbsx"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1ohzbsx"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1ohzbsx"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1ohzbsx"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Argument diagram: the famine example breaks the premise that ability to pay tracks need">
  <text class="tag" x="24" y="26">IN ORDER TO &#183; A FUNCTION QUESTION</text>
  <rect x="380" y="12" width="110" height="22" rx="11" fill="var(--surface-2)"/>
  <text class="sm" x="435" y="27" text-anchor="middle">what it SAYS</text>
  <rect x="500" y="12" width="116" height="22" rx="11" fill="var(--accent)" fill-opacity=".18"/>
  <text class="sm" x="558" y="27" text-anchor="middle" fill="var(--accent)">what it DOES</text>

  <!-- the four candidate roles -->
  <rect class="chip" x="24" y="166" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="198" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="230" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="262" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="183" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="215" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="247" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="279" text-anchor="middle">D</text>
  <text class="sm" x="64" y="183">prices never rise when harvests fail</text>
  <text class="sm" x="64" y="215">shows a limit in what price signals say</text>
  <text class="sm" x="64" y="247">proves planners gather info better</text>
  <text class="sm" x="64" y="279">markets coordinate strangers</text>

  <!-- beat 2: the view on trial -->
  <g data-from="1">
    <rect x="24" y="40" width="592" height="42" rx="10" fill="var(--accent)" fill-opacity=".12"
          stroke="var(--accent)" stroke-width="1.5"/>
    <text class="tag" x="40" y="58">THE VIEW ON TRIAL</text>
    <text class="lbl" x="40" y="76">a price carries all a planner needs to know</text>
  </g>

  <!-- beat 3: the premise it rests on -->
  <g data-from="2">
    <line x1="320" y1="82" x2="320" y2="88" stroke="var(--muted)" stroke-width="2"/>
    <path d="M320,93 L315,86 L325,86 Z" fill="var(--muted)"/>
    <rect x="64" y="94" width="512" height="42" rx="10" fill="var(--surface-2)"/>
    <text class="tag" x="80" y="112">LOAD-BEARING PREMISE</text>
    <text class="sm" x="80" y="130" fill="var(--text)">what people CAN pay tracks what they need</text>
  </g>

  <!-- beat 4: the famine severs exactly that premise -->
  <g data-from="3">
    <rect x="64" y="94" width="512" height="42" rx="10" fill="none"
          stroke="var(--incorrect)" stroke-width="2"/>
    <circle cx="548" cy="115" r="14" fill="var(--incorrect)" fill-opacity=".18"
            stroke="var(--incorrect)" stroke-width="2"/>
    <path d="M542,109 L554,121 M554,109 L542,121" stroke="var(--incorrect)" stroke-width="2.5"/>
    <text class="sm" x="64" y="154" fill="var(--incorrect)">famine: the starving cannot bid &#8594; signal reads low demand</text>
    <rect x="24" y="198" width="592" height="24" rx="8" fill="var(--correct)" fill-opacity=".14"/>
    <rect x="24" y="198" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="215" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="sm" x="64" y="215" fill="var(--correct)">shows a limit in what price signals say</text>
    <text class="sm" x="380" y="215" fill="var(--correct)">the role it actually plays</text>
  </g>

  <!-- beat 5: where the other three come from -->
  <g data-from="4">
    <line x1="64" y1="178" x2="342" y2="178" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="242" x2="319" y2="242" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="274" x2="281" y2="274" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="380" y="183" fill="var(--incorrect)">the author CONCEDED this</text>
    <text class="sm" x="380" y="247" fill="var(--incorrect)">attack is not a defense</text>
    <text class="sm" x="380" y="279" fill="var(--incorrect)">lifted from the claim above</text>
  </g>

  <!-- beat 6: the general rule -->
  <g data-from="5">
    <rect x="24" y="292" width="592" height="44" rx="12" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="lbl" x="320" y="312" text-anchor="middle">denting one side &#8800; proving the other</text>
    <text class="sm" x="320" y="330" text-anchor="middle">a counterexample marks a LIMIT</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: '"In order to" = role, not content'},
    {t: 5.39,  cap: "Market claim: price = a complete signal"},
    {t: 9.34,  cap: "Load-bearing premise: ability to pay ≈ need"},
    {t: 14.81, cap: "Greatest hunger, lowest bids → the premise fails"},
    {t: 21.08, cap: "never rise ✗ conceded · planners ✗ absent · coordinate = target"},
    {t: 28.87, cap: "Denting one side ≠ proving the other"}
  ]
});
