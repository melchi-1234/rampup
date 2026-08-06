/* Signal detection: plot hits against false alarms, and the direction of the move
   names the dial. Beat 1 is the ungated base frame. */
RU_EX.reg("km7r9gf", {
  dur: 39,
  css: `
svg[data-x="km7r9gf"]{font-family:inherit}
svg[data-x="km7r9gf"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="km7r9gf"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="km7r9gf"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="km7r9gf"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Hit rate plotted against false alarm rate before and after the lawsuit">
  <text class="tag" x="24" y="24">SIGNAL DETECTION &#183; WHICH DIAL MOVED?</text>

  <!-- beat 1 (base frame): both readouts rose together -->
  <line x1="70" y1="46" x2="70" y2="182" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="70" y1="182" x2="290" y2="182" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="tag" x="76"  y="42">HITS &#8593;</text>
  <text class="tag" x="290" y="198" text-anchor="end">FALSE ALARMS &#8594;</text>
  <circle cx="120" cy="144" r="5" fill="var(--muted)"/>
  <text class="sm" x="128" y="168" text-anchor="middle">before</text>
  <line x1="126" y1="139" x2="192" y2="92" stroke="var(--warn)" stroke-width="2"/>
  <polygon points="197,87 186.3,89.1 191.5,96.5" fill="var(--warn)"/>
  <circle cx="200" cy="86" r="6" fill="var(--warn)"/>
  <text class="sm" x="208" y="100" style="fill:var(--warn)">after: both &#8593;</text>

  <!-- the four candidate descriptions -->
  <rect class="chip" x="24" y="208" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="238" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="268" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="298" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="225" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="255" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="285" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="315" text-anchor="middle">D</text>
  <text class="sm" x="64" y="225">sensitivity d&#8242; increased</text>
  <text class="sm" x="64" y="255">sensory adaptation of receptors</text>
  <text class="sm" x="64" y="285">more lenient criterion, d&#8242; same</text>
  <text class="sm" x="64" y="315">absolute threshold rose</text>

  <!-- beat 2: the two dials, each with its signature -->
  <g data-from="1">
    <rect x="320" y="48" width="296" height="62" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="336" y="74" >SENSITIVITY  d&#8242;</text>
    <text class="sm"  x="336" y="96" >hits &#8593; while FA flat or &#8595;</text>
    <rect x="320" y="120" width="296" height="62" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="336" y="146">RESPONSE CRITERION</text>
    <text class="sm"  x="336" y="168">hits and FA move TOGETHER</text>
  </g>

  <!-- beat 3: what a real d-prime gain would look like, and A fails it -->
  <g data-from="2">
    <line x1="120" y1="140" x2="120" y2="78" stroke="var(--incorrect)" stroke-width="2" stroke-dasharray="5 4"/>
    <polygon points="120,70 115,80 125,80" fill="var(--incorrect)"/>
    <text class="sm" x="112" y="66" text-anchor="end" style="fill:var(--incorrect)">true d&#8242; &#8593;</text>
    <rect x="320" y="48" width="296" height="62" rx="10" fill="var(--incorrect)" fill-opacity=".10"
          stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="lbl" x="598" y="74" text-anchor="end" style="fill:var(--incorrect)">&#10007;</text>
    <line x1="64" y1="220" x2="322" y2="220" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="225" style="fill:var(--incorrect)">but false alarms rose too</text>
  </g>

  <!-- beat 4: the move rides one line of constant d-prime -->
  <g data-from="3">
    <line x1="104" y1="156" x2="232" y2="63" stroke="var(--correct)" stroke-width="2" stroke-dasharray="6 4"/>
    <text class="sm" x="236" y="68" style="fill:var(--correct)">same d&#8242;</text>
    <rect x="320" y="120" width="296" height="62" rx="10" fill="var(--correct)" fill-opacity=".12"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="598" y="146" text-anchor="end" style="fill:var(--correct)">&#10003;</text>
    <rect x="24" y="268" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="285" text-anchor="middle" style="fill:var(--correct)">C</text>
    <text class="sm"  x="64"  y="285" style="fill:var(--correct)">more lenient criterion, d&#8242; same</text>
    <text class="sm"  x="330" y="285" style="fill:var(--correct)">&#10003; both moved the same way</text>
  </g>

  <!-- beat 5: the two answers that change the sense organ, not the rule -->
  <g data-from="4">
    <line x1="64" y1="250" x2="322" y2="250" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="310" x2="322" y2="310" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="255" style="fill:var(--incorrect)">receptors, not a decision rule</text>
    <text class="sm" x="330" y="315" style="fill:var(--incorrect)">threshold &#8593; means fewer, not more</text>
  </g>

  <!-- beat 6: the habit worth keeping -->
  <g data-from="5">
    <rect x="24" y="326" width="592" height="24" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="343" text-anchor="middle">Same direction &#8594; criterion. Opposite directions &#8594; sensitivity.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Hits ↑ AND false alarms ↑ — after the lawsuit"},
    {t: 6.19,  cap: "Two dials: sensitivity (d′) vs. response criterion"},
    {t: 12.7,  cap: "d′ ↑ = hits ↑ with FA flat or ↓ — not this case (A)"},
    {t: 19.69, cap: "Both ↑ together ⇒ criterion shift, d′ unchanged ✓"},
    {t: 26.76, cap: "B = receptor-level; D = ↑ threshold ⇒ fewer, not more"},
    {t: 33.83, cap: "Same direction = criterion. Opposite = sensitivity."}
  ]
});
