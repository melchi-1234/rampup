/* Uncoupler: proton flow and phosphorylation are two separate readouts, and the
   answer is the only row that gets both right. Beat 1 is the ungated base frame. */
RU_EX.reg("k1l9qll", {
  dur: 41,
  css: `
svg[data-x="k1l9qll"]{font-family:inherit}
svg[data-x="k1l9qll"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1l9qll"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1l9qll"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1l9qll"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Oligomycin then DNP on isolated mitochondria, oxygen use versus ATP synthesis">
  <text class="tag" x="24" y="24">OLIGOMYCIN, THEN DNP &#183; TWO SEPARATE READOUTS</text>

  <!-- beat 1 (base frame): the plug is on the synthase, not on the chain -->
  <rect x="36" y="80" width="568" height="16" fill="var(--surface-2)"/>
  <rect class="chip" x="90" y="72" width="96" height="32" rx="8"/>
  <text class="sm" x="138" y="93" text-anchor="middle">ETC</text>
  <line x1="138" y1="70" x2="138" y2="54" stroke="var(--text)" stroke-width="2"/>
  <polygon points="138,46 133,56 143,56" fill="var(--text)"/>
  <text class="sm" x="150" y="58">H&#8314; out</text>
  <rect class="chip" x="470" y="72" width="118" height="32" rx="8"/>
  <line x1="519" y1="78" x2="539" y2="98" stroke="var(--incorrect)" stroke-width="2.5"/>
  <line x1="539" y1="78" x2="519" y2="98" stroke="var(--incorrect)" stroke-width="2.5"/>
  <text class="sm" x="529" y="62" text-anchor="middle" fill="var(--incorrect)">oligomycin plugs F&#8338;</text>
  <text class="sm" x="529" y="120" text-anchor="middle">ATP synthase</text>
  <text class="sm" x="138" y="120" text-anchor="middle">the chain is untouched</text>

  <!-- the two readouts, filled in as the story moves -->
  <rect x="24"  y="136" width="286" height="34" rx="10" fill="var(--surface-2)"/>
  <rect x="322" y="136" width="294" height="34" rx="10" fill="var(--surface-2)"/>
  <text class="sm"  x="38"  y="157">O&#8322; consumption</text>
  <text class="sm"  x="336" y="157">ATP synthesis</text>
  <text class="lbl" x="436" y="157">0</text>

  <!-- the four claims, as predicted pairs of readouts -->
  <text class="tag" x="64"  y="192">CLAIM</text>
  <text class="tag" x="310" y="192">O&#8322;</text>
  <text class="tag" x="356" y="192">ATP</text>
  <text class="tag" x="400" y="192">VERDICT</text>
  <rect class="chip" x="24" y="200" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="232" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="264" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="296" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="218" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="250" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="282" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="314" text-anchor="middle">D</text>
  <text class="sm" x="64" y="218">oligomycin poisoned the chain</text>
  <text class="sm" x="64" y="250">&#916;p gone, synthase still plugged</text>
  <text class="sm" x="64" y="282">DNP opens another ATP route</text>
  <text class="sm" x="64" y="314">DNP restores coupling</text>
  <text class="lbl" x="310" y="218">&#8776;0</text>
  <text class="lbl" x="310" y="250">&#8593;&#8593;</text>
  <text class="lbl" x="310" y="282">low</text>
  <text class="lbl" x="310" y="314">&#8593;</text>
  <text class="lbl" x="356" y="218">0</text>
  <text class="lbl" x="356" y="250">0</text>
  <text class="lbl" x="356" y="282">&#8593;</text>
  <text class="lbl" x="356" y="314">&#8593;</text>

  <!-- beat 2: protons pile up, the brake is back-pressure -->
  <g data-from="1">
    <rect x="200" y="44" width="180" height="22" rx="6" fill="var(--warn)" fill-opacity=".16"/>
    <text class="sm" x="290" y="60" text-anchor="middle" fill="var(--warn)">H&#8314; H&#8314; H&#8314; &#183; &#916;p high</text>
    <line x1="196" y1="46" x2="196" y2="62" stroke="var(--warn)" stroke-width="2"/>
    <polygon points="196,70 191,60 201,60" fill="var(--warn)"/>
    <text class="lbl" x="152" y="157" fill="var(--warn)">low</text>
    <line x1="64" y1="213" x2="380" y2="213" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="400" y="218" fill="var(--incorrect)">the low O&#8322; was back-pressure</text>
  </g>

  <!-- beat 3: DNP carries the protons back in -->
  <g data-from="2">
    <rect x="330" y="72" width="64" height="32" rx="8" fill="var(--accent)" fill-opacity=".16"
          stroke="var(--accent)" stroke-width="1.5"/>
    <text class="sm" x="362" y="93" text-anchor="middle" fill="var(--accent)">DNP</text>
    <line x1="410" y1="58" x2="410" y2="96" stroke="var(--accent)" stroke-width="2"/>
    <polygon points="410,106 405,96 415,96" fill="var(--accent)"/>
    <text class="sm" x="362" y="120" text-anchor="middle" fill="var(--accent)">H&#8314; leaks back, &#916;p collapses</text>
  </g>

  <!-- beat 4: brake off, the chain runs flat out -->
  <g data-from="3">
    <text class="lbl" x="190" y="157" fill="var(--correct)">&#8594; &#8593;&#8593; heat</text>
    <text class="lbl" x="310" y="250" fill="var(--correct)">&#8593;&#8593;</text>
  </g>

  <!-- beat 5: the plug never moved, so ATP stays at zero -->
  <g data-from="4">
    <text class="lbl" x="456" y="157" fill="var(--correct)">&#8594; still 0</text>
    <rect x="24" y="232" width="592" height="26" rx="8" fill="var(--correct)" fill-opacity=".12"/>
    <rect x="24" y="232" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="250" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="lbl" x="356" y="250" fill="var(--correct)">0</text>
    <text class="sm"  x="400" y="250" fill="var(--correct)">&#10003; matches both readouts</text>
    <line x1="64" y1="277" x2="380" y2="277" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="309" x2="380" y2="309" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="400" y="282" fill="var(--incorrect)">no protonophore makes ATP</text>
    <text class="sm" x="400" y="314" fill="var(--incorrect)">uncoupler = the opposite word</text>
  </g>

  <!-- beat 6: the habit worth keeping -->
  <g data-from="5">
    <rect x="24" y="326" width="592" height="24" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="343" text-anchor="middle">Ask twice: do protons flow? does phosphorylation happen?</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Oligomycin blocks Fo, not the electron transport chain"},
    {t: 6.03,  cap: "Respiratory control: back-pressure slows the ETC"},
    {t: 12.94, cap: "DNP shuttles H⁺ across → gradient collapses"},
    {t: 18.25, cap: "O₂ consumption spikes; energy dissipates as heat"},
    {t: 23.8,  cap: "ATP = 0: synthase plugged; uncouplers never make ATP"},
    {t: 35.83, cap: "Separate proton flow from phosphorylation"}
  ]
});
