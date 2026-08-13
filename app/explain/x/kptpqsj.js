/* Absolute refractory period: inactivated is not closed.
   Three channel panels (resting → open → inactivated) against the four choice
   cards; the ball-and-chain plug is the whole story. data-from = beat − 1. */
RU_EX.reg("kptpqsj", {
  dur: 43,
  css: `
svg[data-x="kptpqsj"]{font-family:inherit}
svg[data-x="kptpqsj"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kptpqsj"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kptpqsj"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kptpqsj"] .card{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="kptpqsj"] .memb{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="kptpqsj"] .wall{fill:var(--muted);stroke:var(--text);stroke-width:1.5}
svg[data-x="kptpqsj"] .aHl{opacity:0;transition:opacity .45s ease}
svg[data-x="kptpqsj"][data-step="2"] .aHl,svg[data-x="kptpqsj"][data-step="3"] .aHl,
svg[data-x="kptpqsj"][data-step="4"] .aHl,svg[data-x="kptpqsj"][data-step="5"] .aHl{opacity:1}
svg[data-x="kptpqsj"] .cardB{transition:opacity .4s ease}
svg[data-x="kptpqsj"][data-step="3"] .cardB,svg[data-x="kptpqsj"][data-step="4"] .cardB,
svg[data-x="kptpqsj"][data-step="5"] .cardB{opacity:.45}
svg[data-x="kptpqsj"] .cardC,svg[data-x="kptpqsj"] .cardD{transition:opacity .4s ease}
svg[data-x="kptpqsj"][data-step="4"] .cardC,svg[data-x="kptpqsj"][data-step="5"] .cardC,
svg[data-x="kptpqsj"][data-step="4"] .cardD,svg[data-x="kptpqsj"][data-step="5"] .cardD{opacity:.45}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sodium channel states across the absolute refractory period">
  <text class="tag" x="24" y="30">ABSOLUTE REFRACTORY PERIOD</text>

  <!-- panel 1: resting (activation gate closed, ball hanging) -->
  <rect class="memb" x="28" y="100" width="96" height="44"/>
  <rect class="wall" x="58" y="78" width="12" height="88"/>
  <rect class="wall" x="82" y="78" width="12" height="88"/>
  <rect x="70" y="118" width="12" height="8" fill="var(--accent)"/>
  <path d="M88 166 Q94 170 100 175" fill="none" stroke="var(--warn)" stroke-width="2"/>
  <circle cx="100" cy="175" r="8" fill="var(--warn)"/>
  <text class="sm" x="76" y="60" text-anchor="middle">resting</text>

  <!-- gate legend: two left-aligned lines, color-coded -->
  <text class="sm" x="24" y="224" style="fill:var(--accent)">activation gate (fast)</text>
  <text class="sm" x="24" y="244" style="fill:var(--warn)">inactivation gate (slow)</text>

  <!-- the four cards; the A-highlight rect sits UNDER the card text, CSS-gated -->
  <rect class="card" x="380" y="70" width="236" height="56" rx="10"/>
  <rect class="card cardB" x="380" y="138" width="236" height="56" rx="10"/>
  <rect class="card cardC" x="380" y="206" width="236" height="56" rx="10"/>
  <rect class="card cardD" x="380" y="274" width="236" height="56" rx="10"/>
  <rect class="aHl" x="380" y="70" width="236" height="56" rx="10" fill="var(--correct)" fill-opacity=".12" stroke="var(--correct)" stroke-width="2"/>
  <text class="sm" x="392" y="92">A &#183; Na&#8314; channels inactivated</text>
  <g class="cardB"><text class="sm" x="392" y="160">B &#183; membrane hyperpolarized</text></g>
  <g class="cardC"><text class="sm" x="392" y="228">C &#183; pump must restore gradients</text></g>
  <g class="cardD"><text class="sm" x="392" y="296">D &#183; K&#8314; channels stay closed</text></g>

  <!-- beat 2: open, then plugged -->
  <g data-from="1">
    <rect class="memb" x="140" y="100" width="96" height="44"/>
    <rect class="wall" x="170" y="78" width="12" height="88"/>
    <rect class="wall" x="194" y="78" width="12" height="88"/>
    <rect x="160" y="118" width="8" height="12" fill="var(--accent)"/>
    <line x1="188" y1="70" x2="188" y2="160" stroke="var(--accent)" stroke-width="2.5"/>
    <path d="M183 153 L188 160 L193 153 Z" fill="var(--accent)"/>
    <text class="sm" x="202" y="92" style="fill:var(--accent)">Na&#8314;</text>
    <text class="sm" x="188" y="60" text-anchor="middle">open</text>

    <rect class="memb" x="252" y="100" width="96" height="44"/>
    <rect class="wall" x="282" y="78" width="12" height="88"/>
    <rect class="wall" x="306" y="78" width="12" height="88"/>
    <rect x="272" y="118" width="8" height="12" fill="var(--accent)"/>
    <path d="M294 164 Q296 157 300 150" fill="none" stroke="var(--warn)" stroke-width="2"/>
    <circle cx="300" cy="150" r="8" fill="var(--warn)"/>
    <text class="sm" x="300" y="60" text-anchor="middle">inactivated</text>
  </g>

  <!-- beat 3: deaf to any stimulus; A is the answer -->
  <g data-from="2">
    <line x1="294" y1="84" x2="306" y2="96" stroke="var(--incorrect)" stroke-width="3"/>
    <line x1="306" y1="84" x2="294" y2="96" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="300" y="224" text-anchor="middle" style="fill:var(--incorrect)">deaf to any stimulus</text>
    <text class="sm" x="392" y="112" style="fill:var(--correct)">locked until repolarization</text>
  </g>

  <!-- beat 4: B is the relative period -->
  <g data-from="3">
    <text class="sm" x="392" y="180" style="fill:var(--incorrect)">relative period, later window</text>
  </g>

  <!-- beat 5: C too slow, D backwards -->
  <g data-from="4">
    <text class="sm" x="392" y="248" style="fill:var(--incorrect)">far too slow to gate a spike</text>
    <text class="sm" x="392" y="316" style="fill:var(--incorrect)">K&#8314; channels OPEN to repolarize</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="24" y="312" width="332" height="34" rx="17" fill="var(--correct)" opacity=".14"/>
    <text class="sm" x="190" y="334" text-anchor="middle" style="fill:var(--correct)">Absolute = channel STATE, not stimulus size</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Na⁺ channel: fast activation gate, slow inactivation gate"},
    {t: 7.07,  cap: "Both open on the upstroke; at the peak the ball plugs the pore"},
    {t: 15.82, cap: "A ✓ inactivated channels are deaf until repolarization"},
    {t: 24.33, cap: "B = the RELATIVE period: a bigger stimulus CAN fire"},
    {t: 31.72, cap: "C: pump far too slow · D: K⁺ channels are OPEN, not closed"},
    {t: 38.07, cap: "Absolute = channel STATE, not stimulus size"}
  ],
  transcript:
    "The sodium channel has two gates, a fast activation gate and a slow inactivation gate. Both " +
    "gates open on the upstroke and sodium floods in. At the peak the ball plugs the pore. " +
    "Inactivated. An inactivated channel is deaf. No stimulus can reopen it until the membrane " +
    "repolarizes. Choice A. Choice B is the trap. If a bigger stimulus can still fire, that is " +
    "the relative period, a later window. The pump is far too slow, and potassium channels are " +
    "open during repolarization, not closed. Absolute means channel state, not stimulus size."
});
