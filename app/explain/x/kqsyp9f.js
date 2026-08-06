/* n+1 fails here: the two terminal vinyl protons are inequivalent, so two
   different J values split the inner proton into four lines.
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("kqsyp9f", {
  dur: 36,
  css: `
svg[data-x="kqsyp9f"]{font-family:inherit}
svg[data-x="kqsyp9f"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kqsyp9f"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kqsyp9f"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kqsyp9f"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why the inner vinyl proton of methyl acrylate is a doublet of doublets">
  <text class="tag" x="24" y="24">METHYL ACRYLATE &#183; SPLITTING OF THE INNER VINYL H</text>

  <!-- beat 1 base: the structure, with the proton in question marked -->
  <line x1="150" y1="96" x2="210" y2="96" stroke="var(--text)" stroke-width="2"/>
  <line x1="150" y1="104" x2="210" y2="104" stroke="var(--text)" stroke-width="2"/>
  <line x1="150" y1="96" x2="118" y2="74" stroke="var(--text)" stroke-width="2"/>
  <line x1="150" y1="104" x2="118" y2="126" stroke="var(--text)" stroke-width="2"/>
  <line x1="210" y1="96" x2="242" y2="74" stroke="var(--text)" stroke-width="2"/>
  <line x1="210" y1="104" x2="242" y2="126" stroke="var(--text)" stroke-width="2"/>
  <rect x="242" y="62" width="38" height="22" rx="6" fill="var(--accent)" fill-opacity=".2"/>
  <text class="lbl" x="248" y="78" fill="var(--accent)">H*</text>
  <text class="sm" x="112" y="78" text-anchor="end">H cis</text>
  <text class="sm" x="112" y="130" text-anchor="end">H trans</text>
  <text class="sm" x="248" y="130">CO&#8322;CH&#8323;</text>
  <text class="sm" x="24" y="160">neighbors of H*: the two =CH&#8322; protons</text>

  <!-- the four candidate multiplicities -->
  <rect class="chip" x="24" y="190" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="222" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="254" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="286" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="208" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="240" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="272" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="304" text-anchor="middle">D</text>
  <text class="sm" x="64" y="208">doublet of doublets</text>
  <text class="sm" x="64" y="240">triplet (n + 1, n = 2)</text>
  <text class="sm" x="64" y="272">singlet</text>
  <text class="sm" x="64" y="304">doublet</text>

  <!-- beat 2: the two neighbors are not the same proton twice -->
  <g data-from="1">
    <rect x="74" y="62" width="42" height="22" rx="6" fill="var(--warn)" fill-opacity=".18"/>
    <text class="sm" x="112" y="78" text-anchor="end" fill="var(--warn)">H cis</text>
    <rect x="58" y="114" width="58" height="22" rx="6" fill="var(--warn)" fill-opacity=".18"/>
    <text class="sm" x="112" y="130" text-anchor="end" fill="var(--warn)">H trans</text>
    <text class="sm" x="24" y="178" fill="var(--warn)">not equivalent: one cis, one trans</text>
  </g>

  <!-- beat 3: different geometry, different coupling constant -->
  <g data-from="2">
    <text class="tag" x="336" y="44">TWO DIFFERENT COUPLINGS</text>
    <text class="sm" x="336" y="62">J(trans) &#8776; 15&#8211;18 Hz &#8212; large</text>
    <text class="sm" x="336" y="78">J(cis) &#8776; 8&#8211;12 Hz &#8212; small</text>
  </g>

  <!-- beat 4: split twice, four equal lines -->
  <g data-from="3">
    <line x1="400" y1="168" x2="552" y2="168" stroke="var(--border-strong)" stroke-width="2"/>
    <path d="M449 116 L449 106 L503 106 L503 116" fill="none" stroke="var(--text)" stroke-width="1.5"/>
    <text class="sm" x="476" y="100" text-anchor="middle">17 Hz</text>
    <path d="M433 128 L433 122 L465 122 L465 128" fill="none" stroke="var(--text)" stroke-width="1.5"/>
    <path d="M487 128 L487 122 L519 122 L519 128" fill="none" stroke="var(--text)" stroke-width="1.5"/>
    <text class="sm" x="418" y="126" text-anchor="end">10 Hz</text>
    <line x1="433" y1="128" x2="433" y2="168" stroke="var(--accent)" stroke-width="3"/>
    <line x1="465" y1="128" x2="465" y2="168" stroke="var(--accent)" stroke-width="3"/>
    <line x1="487" y1="128" x2="487" y2="168" stroke="var(--accent)" stroke-width="3"/>
    <line x1="519" y1="128" x2="519" y2="168" stroke="var(--accent)" stroke-width="3"/>
    <text class="sm" x="556" y="150" fill="var(--accent)">4 lines</text>
    <rect x="24" y="190" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="208" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm" x="232" y="208" fill="var(--correct)">&#10003; two unequal J &#8594; four equal lines</text>
  </g>

  <!-- beat 5: what n+1 quietly assumes, and what a double bond does not block -->
  <g data-from="4">
    <line x1="60" y1="235" x2="224" y2="235" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="267" x2="224" y2="267" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="232" y="240" fill="var(--incorrect)">n+1 assumes the two share one J</text>
    <text class="sm" x="232" y="272" fill="var(--incorrect)">three-bond vinyl coupling is large</text>
  </g>

  <!-- beat 6: count couplings, not neighbors -->
  <g data-from="5">
    <line x1="60" y1="299" x2="224" y2="299" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="232" y="304" fill="var(--incorrect)">both terminal H&#8217;s are three bonds away</text>
    <rect x="24" y="320" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="340" text-anchor="middle">count distinct coupling constants, not neighbors</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Inner vinyl H; neighbors = the two =CH₂ protons"},
    {t: 6.67,  cap: "Terminal H's inequivalent: one cis, one trans to ester"},
    {t: 12.46, cap: "J(trans) ≈ 15–18 Hz; J(cis) ≈ 8–12 Hz"},
    {t: 18.97, cap: "Two unequal J → 4 equal lines = doublet of doublets"},
    {t: 26.76, cap: "n+1 needs one shared J; vinyl ³J is real and large"},
    {t: 30.87, cap: "Multiplicity = product of distinct J splittings"}
  ]
});
