/* Function question: the concession fences off an overreach so the narrow
   thesis survives. Beat 1 is the ungated base frame; data-from="N" appears as
   beat N+1 is spoken. */
RU_EX.reg("k3llrbf", {
  dur: 37,
  css: `
svg[data-x="k3llrbf"]{font-family:inherit}
svg[data-x="k3llrbf"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k3llrbf"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k3llrbf"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k3llrbf"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="How a mid-argument concession narrows rather than reverses the claim">
  <text class="tag" x="24" y="24">CARS &#183; WHAT JOB DOES THIS SENTENCE DO?</text>

  <!-- beat 1 base: the sentence, and the four readings of it -->
  <rect x="24" y="34" width="592" height="34" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="36" y="56">&#8220;I do not claim the professional is always the better artist&#8221;</text>

  <rect class="chip" x="24" y="182" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="214" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="246" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="278" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="200" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="232" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="264" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="296" text-anchor="middle">D</text>
  <text class="sm" x="64" y="200">concedes one point, narrows the claim</text>
  <text class="sm" x="64" y="232">reverses &#8212; sides with the amateur</text>
  <text class="sm" x="64" y="264">introduces statistical evidence</text>
  <text class="sm" x="64" y="296">admits there is no real argument</text>

  <!-- beat 2: the thesis being defended, and it is narrow -->
  <g data-from="1">
    <rect x="24" y="80" width="360" height="46" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="tag" x="36" y="98">WHAT THE AUTHOR DOES CLAIM</text>
    <text class="sm" x="36" y="118">amateur freedom = freedom to dodge constraint</text>
  </g>

  <!-- beat 3: the bigger claim the sentence hands away -->
  <g data-from="2">
    <rect x="396" y="80" width="220" height="46" rx="10" fill="var(--incorrect)" fill-opacity=".10"
          stroke="var(--incorrect)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text class="tag" x="408" y="98" fill="var(--incorrect)">GIVEN AWAY</text>
    <text class="sm" x="408" y="118" fill="var(--incorrect)">pros are better artists</text>
  </g>

  <!-- beat 4: the next clause settles narrowing vs reversal -->
  <g data-from="3">
    <rect class="chip" x="24" y="136" width="592" height="32" rx="10"/>
    <text class="sm" x="36" y="156">next clause: &#8220;I claim only that...&#8221; &#8594; the thesis, restated</text>
    <rect x="24" y="182" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="200" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm" x="332" y="200" fill="var(--correct)">&#10003; narrowing, not reversal</text>
    <line x1="60" y1="227" x2="324" y2="227" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="332" y="232" fill="var(--incorrect)">the very next clause restates it</text>
  </g>

  <!-- beat 5: the metaphor is not data, the concession is not defeat -->
  <g data-from="4">
    <line x1="60" y1="259" x2="324" y2="259" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="291" x2="324" y2="291" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="332" y="264" fill="var(--incorrect)">a metaphor &#8212; no number anywhere</text>
    <text class="sm" x="332" y="296" fill="var(--incorrect)">one concession is not surrender</text>
  </g>

  <!-- beat 6: the habit to keep -->
  <g data-from="5">
    <rect x="24" y="314" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="334" text-anchor="middle">ask what the sentence protects the argument from</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Why concede mid-argument?"},
    {t: 6.19,  cap: "Thesis: amateur freedom = freedom to avoid constraint"},
    {t: 11.98, cap: "Blocks the overreach: pros are always better"},
    {t: 17.77, cap: "\"I claim only...\" = narrowing, not reversal"},
    {t: 23.8,  cap: "Metaphor ≠ data; one concession ≠ surrender"},
    {t: 31.35, cap: "Function Q: what does the sentence protect?"}
  ]
});
