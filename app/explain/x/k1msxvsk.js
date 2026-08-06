/* Galvanic cell — which electrode is the anode, and what is E°cell.
   Vector scene: no video file. Colors come from the app's CSS variables,
   so it themes with the rest of the UI. */
RU_EX.reg("k1msxvsk", {
  dur: 36,
  css: `
svg[data-x="k1msxvsk"]{font-family:inherit}
svg[data-x="k1msxvsk"] .lbl{fill:var(--text);font-size:15px;font-weight:700}
svg[data-x="k1msxvsk"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1msxvsk"] .glass{fill:var(--card);stroke:var(--border-strong);stroke-width:2}
svg[data-x="k1msxvsk"] .soln{fill:var(--accent);opacity:.14}
svg[data-x="k1msxvsk"] .metal{fill:var(--muted);stroke:var(--text);stroke-width:1.5}
svg[data-x="k1msxvsk"] .wire{fill:none;stroke:var(--text);stroke-width:2.5;stroke-linecap:round}
svg[data-x="k1msxvsk"] .bridge{fill:none;stroke:var(--border-strong);stroke-width:9;stroke-linecap:round}

svg[data-x="k1msxvsk"] .pot{opacity:0;transition:opacity .45s ease}
svg[data-x="k1msxvsk"][data-step="1"] .pot,
svg[data-x="k1msxvsk"][data-step="2"] .pot,
svg[data-x="k1msxvsk"][data-step="3"] .pot,
svg[data-x="k1msxvsk"][data-step="4"] .pot,
svg[data-x="k1msxvsk"][data-step="5"] .pot,
svg[data-x="k1msxvsk"][data-step="6"] .pot{opacity:1}

svg[data-x="k1msxvsk"] .ring{opacity:0;transform-origin:center;transition:opacity .4s ease}
svg[data-x="k1msxvsk"][data-step="2"] .ring{opacity:1;animation:k1mPulse 1.5s ease-in-out infinite}
@keyframes k1mPulse{0%,100%{stroke-opacity:.35}50%{stroke-opacity:1}}

svg[data-x="k1msxvsk"] .role{opacity:0;transition:opacity .45s ease}
svg[data-x="k1msxvsk"][data-step="3"] .role,
svg[data-x="k1msxvsk"][data-step="4"] .role,
svg[data-x="k1msxvsk"][data-step="5"] .role,
svg[data-x="k1msxvsk"][data-step="6"] .role{opacity:1}

svg[data-x="k1msxvsk"] .halfrx{opacity:0;transition:opacity .45s ease}
svg[data-x="k1msxvsk"][data-step="3"] .halfrx,
svg[data-x="k1msxvsk"][data-step="4"] .halfrx{opacity:1}

svg[data-x="k1msxvsk"] .el{opacity:0}
svg[data-x="k1msxvsk"][data-step="4"] .el,
svg[data-x="k1msxvsk"][data-step="5"] .el,
svg[data-x="k1msxvsk"][data-step="6"] .el{opacity:1;animation:k1mFlow 2.4s linear infinite}
svg[data-x="k1msxvsk"] .el:nth-of-type(2){animation-delay:-.8s}
svg[data-x="k1msxvsk"] .el:nth-of-type(3){animation-delay:-1.6s}
@keyframes k1mFlow{from{transform:translateX(0)}to{transform:translateX(384px)}}

svg[data-x="k1msxvsk"] .eq{opacity:0;transition:opacity .45s ease}
svg[data-x="k1msxvsk"][data-step="5"] .eq,
svg[data-x="k1msxvsk"][data-step="6"] .eq{opacity:1}
svg[data-x="k1msxvsk"] .ans{opacity:0;transition:opacity .5s ease}
svg[data-x="k1msxvsk"][data-step="6"] .ans{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Galvanic cell diagram">
  <!-- wire + meter -->
  <path class="wire" d="M128 118 L128 62 L512 62 L512 118"/>
  <circle cx="320" cy="62" r="21" fill="var(--card)" stroke="var(--text)" stroke-width="2.5"/>
  <text class="lbl" x="320" y="68" text-anchor="middle">V</text>
  <!-- electrons riding the top wire -->
  <g>
    <circle class="el" cx="140" cy="62" r="5.5" fill="var(--accent)"/>
    <circle class="el" cx="140" cy="62" r="5.5" fill="var(--accent)"/>
    <circle class="el" cx="140" cy="62" r="5.5" fill="var(--accent)"/>
  </g>
  <!-- salt bridge -->
  <path class="bridge" d="M150 150 Q320 96 490 150"/>
  <text class="sm" x="320" y="128" text-anchor="middle">salt bridge</text>
  <!-- beakers -->
  <rect class="glass" x="52" y="150" width="176" height="150" rx="8"/>
  <rect class="soln" x="56" y="176" width="168" height="120" rx="6"/>
  <rect class="glass" x="412" y="150" width="176" height="150" rx="8"/>
  <rect class="soln" x="416" y="176" width="168" height="120" rx="6"/>
  <!-- electrodes -->
  <rect class="metal" x="116" y="118" width="24" height="150" rx="3"/>
  <rect class="metal" x="500" y="118" width="24" height="150" rx="3"/>
  <circle class="ring" cx="128" cy="193" r="46" fill="none" stroke="var(--incorrect)" stroke-width="3"/>
  <!-- names -->
  <text class="lbl" x="128" y="322" text-anchor="middle">Zn | Zn²⁺</text>
  <text class="lbl" x="512" y="322" text-anchor="middle">Cu | Cu²⁺</text>
  <text class="pot sm" x="128" y="342" text-anchor="middle" style="fill:var(--incorrect)">E° = −0.76 V</text>
  <text class="pot sm" x="512" y="342" text-anchor="middle" style="fill:var(--correct)">E° = +0.34 V</text>
  <!-- roles -->
  <g class="role">
    <rect x="58" y="86" width="96" height="26" rx="13" fill="var(--incorrect)" opacity=".16"/>
    <text class="sm" x="106" y="104" text-anchor="middle" style="fill:var(--incorrect)">ANODE</text>
    <rect x="470" y="86" width="118" height="26" rx="13" fill="var(--correct)" opacity=".16"/>
    <text class="sm" x="529" y="104" text-anchor="middle" style="fill:var(--correct)">CATHODE</text>
  </g>
  <g class="halfrx">
    <text class="sm" x="128" y="230" text-anchor="middle">Zn → Zn²⁺ + 2e⁻</text>
    <text class="sm" x="512" y="230" text-anchor="middle">Cu²⁺ + 2e⁻ → Cu</text>
  </g>
  <text class="sm" x="320" y="176" text-anchor="middle" class="el-lbl" style="fill:var(--accent)">e⁻ flow →</text>
  <!-- result -->
  <text class="eq lbl" x="320" y="258" text-anchor="middle">E°cell = E°cathode − E°anode</text>
  <text class="eq sm" x="320" y="280" text-anchor="middle">= 0.34 − (−0.76)</text>
  <g class="ans">
    <rect x="238" y="292" width="164" height="34" rx="17" fill="var(--correct)" opacity=".16"/>
    <text class="lbl" x="320" y="315" text-anchor="middle" style="fill:var(--correct)">= +1.10 V</text>
  </g>
</svg>`,
  steps: [
    {t: 0,  cap: "Two half-cells joined by a wire and a salt bridge"},
    {t: 4.5, cap: "Compare the two standard reduction potentials"},
    {t: 9.5, cap: "The more negative one loses the tug-of-war and gets oxidized"},
    {t: 15,  cap: "Oxidation happens at the anode, so zinc is the anode"},
    {t: 21,  cap: "Electrons leave the anode and travel to the cathode"},
    {t: 26.5, cap: "E°cell = E°cathode − E°anode = 0.34 − (−0.76)"},
    {t: 31.5, cap: "+1.10 V, with zinc as the anode"}
  ],
  transcript:
    "A galvanic cell is two half-cells joined by a wire and a salt bridge. To find which " +
    "electrode is the anode, compare the standard reduction potentials: copper is +0.34 V " +
    "and zinc is −0.76 V. The more negative value means zinc holds its electrons least " +
    "tightly, so zinc is the one that gets oxidized, and oxidation always happens at the " +
    "anode. Electrons then flow through the wire from the zinc anode to the copper cathode. " +
    "The cell potential is E°cathode minus E°anode, which is 0.34 minus negative 0.76, " +
    "or +1.10 V. Subtracting the negative is what makes the answer 1.10 rather than 0.42."
});
