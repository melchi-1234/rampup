/* CARS: the argument is a reductio, so the weakener is whatever stops the
   runaway consequence. Beat 1 is the ungated base frame. */
RU_EX.reg("kepzkfe", {
  dur: 40,
  css: `
svg[data-x="kepzkfe"]{font-family:inherit}
svg[data-x="kepzkfe"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kepzkfe"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kepzkfe"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kepzkfe"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Diagram of a reductio argument against age-alone preservation and the choice that blocks its endpoint">
  <text class="tag" x="24" y="22">AUTHOR&#8217;S CONCLUSION &#183; NOW WEAKEN IT</text>

  <!-- beat 1 base frame: the conclusion, and the four candidate weakeners -->
  <rect x="24" y="32" width="592" height="34" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="320" y="54" text-anchor="middle">age alone cannot justify preserving a building</text>

  <rect class="chip" x="24" y="246" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="272" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="298" width="26" height="22" rx="8"/>
  <rect class="chip" x="24" y="324" width="26" height="22" rx="8"/>
  <text class="lbl" x="37" y="262" text-anchor="middle">A</text>
  <text class="lbl" x="37" y="288" text-anchor="middle">B</text>
  <text class="lbl" x="37" y="314" text-anchor="middle">C</text>
  <text class="lbl" x="37" y="340" text-anchor="middle">D</text>
  <text class="sm" x="60" y="262">preserved for beauty, not age</text>
  <text class="sm" x="60" y="288">little attachment to old ones</text>
  <text class="sm" x="60" y="314">beauty is hard to judge</text>
  <text class="sm" x="60" y="340">decay matches new arrivals</text>

  <!-- beat 2: the reductio, drawn as a chain -->
  <g data-from="1">
    <text class="tag" x="24" y="78">THE REDUCTIO</text>
    <rect class="chip" x="24" y="86" width="176" height="56" rx="10"/>
    <text class="lbl" x="112" y="108" text-anchor="middle">age-alone rule</text>
    <text class="sm"  x="112" y="128" text-anchor="middle">everything ages</text>
    <line x1="200" y1="114" x2="210" y2="114" stroke="var(--border-strong)" stroke-width="2"/>
    <path d="M210 109 L220 114 L210 119 Z" fill="var(--border-strong)"/>
    <rect class="chip" x="220" y="86" width="176" height="56" rx="10"/>
    <text class="lbl" x="308" y="108" text-anchor="middle">stock keeps growing</text>
    <text class="sm"  x="308" y="128" text-anchor="middle">more qualify each year</text>
    <line x1="396" y1="114" x2="406" y2="114" stroke="var(--border-strong)" stroke-width="2"/>
    <path d="M406 109 L416 114 L406 119 Z" fill="var(--border-strong)"/>
    <rect class="chip" x="416" y="86" width="200" height="56" rx="10"/>
    <text class="lbl" x="516" y="108" text-anchor="middle">no land left to build</text>
    <text class="sm"  x="516" y="128" text-anchor="middle">the absurd endpoint</text>
  </g>

  <!-- beat 3: the step it rests on -->
  <g data-from="2">
    <line x1="308" y1="142" x2="308" y2="158" stroke="var(--warn)" stroke-width="2"/>
    <rect x="110" y="158" width="400" height="30" rx="8" fill="var(--warn)" fill-opacity=".16"/>
    <text class="lbl" x="310" y="178" text-anchor="middle" fill="var(--warn)">buildings enter the set and never leave</text>
  </g>

  <!-- beat 4: D removes that step, so the endpoint never arrives -->
  <g data-from="3">
    <line x1="122" y1="173" x2="498" y2="173" stroke="var(--correct)" stroke-width="2"/>
    <line x1="404" y1="92" x2="404" y2="136" stroke="var(--correct)" stroke-width="3"/>
    <text class="lbl" x="320" y="206" text-anchor="middle" fill="var(--correct)">stock stays stable &#8594; the runaway never happens</text>
    <rect x="20" y="322" width="240" height="26" rx="8" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="37" y="340" text-anchor="middle" fill="var(--correct)">D</text>
    <text class="sm"  x="60" y="340" fill="var(--correct)">decay matches new arrivals</text>
    <text class="sm"  x="336" y="340" fill="var(--correct)">removes the one-way accumulation</text>
  </g>

  <!-- beat 5: the other three miss the accumulation step -->
  <g data-from="4">
    <line x1="60" y1="257" x2="257" y2="257" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="262" fill="var(--incorrect)">reports practice, not the rule</text>
    <line x1="60" y1="283" x2="257" y2="283" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="288" fill="var(--incorrect)">hits a premise he already grants</text>
    <line x1="60" y1="309" x2="218" y2="309" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="314" fill="var(--incorrect)">the pileup survives anyway</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <text class="lbl" x="24" y="230" fill="var(--accent)">to weaken a reductio, block its runaway endpoint</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Conclusion: age alone can't justify preservation"},
    {t: 4.43,  cap: "Reductio: age-alone rule → stock grows without limit"},
    {t: 11.26, cap: "Assumption: buildings enter the set and never leave"},
    {t: 17.05, cap: "Decay ≈ new arrivals → stock stable, no runaway"},
    {t: 23.88, cap: "Others hit the alternative, a granted premise, or practice"},
    {t: 35.19, cap: "Weaken a reductio by blocking its absurd endpoint"}
  ]
});
