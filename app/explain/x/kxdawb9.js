/* Uncoupler: protons bypass ATP synthase, so O2 use rises while ATP falls. */
RU_EX.reg("kxdawb9", {
  dur: 44,
  css: `
svg[data-x="kxdawb9"]{font-family:inherit}
svg[data-x="kxdawb9"] .lbl{fill:var(--text);font-size:13.5px;font-weight:700}
svg[data-x="kxdawb9"] .sm{fill:var(--muted);font-size:11.5px;font-weight:600}
svg[data-x="kxdawb9"] .mem{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="kxdawb9"] .cx{fill:var(--accent);opacity:.75}

svg[data-x="kxdawb9"] .pump{opacity:0}
svg[data-x="kxdawb9"][data-step="0"] .pump,svg[data-x="kxdawb9"][data-step="1"] .pump,
svg[data-x="kxdawb9"][data-step="2"] .pump{opacity:1;animation:kxUp 2s linear infinite}
@keyframes kxUp{0%{transform:translateY(0);opacity:0}25%{opacity:1}100%{transform:translateY(-58px);opacity:0}}

svg[data-x="kxdawb9"] .synth{opacity:0;transition:opacity .45s ease}
svg[data-x="kxdawb9"][data-step="1"] .synth,svg[data-x="kxdawb9"][data-step="2"] .synth,
svg[data-x="kxdawb9"][data-step="3"] .synth,svg[data-x="kxdawb9"][data-step="4"] .synth,
svg[data-x="kxdawb9"][data-step="5"] .synth,svg[data-x="kxdawb9"][data-step="6"] .synth{opacity:1}
svg[data-x="kxdawb9"] .thruSynth{opacity:0}
svg[data-x="kxdawb9"][data-step="1"] .thruSynth,svg[data-x="kxdawb9"][data-step="2"] .thruSynth{opacity:1;animation:kxDn 1.8s linear infinite}
@keyframes kxDn{0%{transform:translateY(-52px);opacity:0}25%{opacity:1}100%{transform:translateY(0);opacity:0}}

svg[data-x="kxdawb9"] .unc{opacity:0;transition:opacity .45s ease}
svg[data-x="kxdawb9"][data-step="2"] .unc,svg[data-x="kxdawb9"][data-step="3"] .unc,
svg[data-x="kxdawb9"][data-step="4"] .unc,svg[data-x="kxdawb9"][data-step="5"] .unc,
svg[data-x="kxdawb9"][data-step="6"] .unc{opacity:1}
svg[data-x="kxdawb9"] .leak{opacity:0}
svg[data-x="kxdawb9"][data-step="3"] .leak,svg[data-x="kxdawb9"][data-step="4"] .leak,
svg[data-x="kxdawb9"][data-step="5"] .leak,svg[data-x="kxdawb9"][data-step="6"] .leak{opacity:1;animation:kxDn 1.1s linear infinite}

/* once the gradient collapses the synthase goes quiet */
svg[data-x="kxdawb9"][data-step="4"] .synth,svg[data-x="kxdawb9"][data-step="5"] .synth,
svg[data-x="kxdawb9"][data-step="6"] .synth{opacity:.3}

svg[data-x="kxdawb9"] .bar{transition:height .8s ease, y .8s ease}
svg[data-x="kxdawb9"] .verdict{opacity:0;transition:opacity .5s ease}
svg[data-x="kxdawb9"][data-step="6"] .verdict{opacity:1}
svg[data-x="kxdawb9"] .atpDown,svg[data-x="kxdawb9"] .o2Up{opacity:0;transition:opacity .45s ease}
svg[data-x="kxdawb9"][data-step="4"] .atpDown,svg[data-x="kxdawb9"][data-step="5"] .atpDown,
svg[data-x="kxdawb9"][data-step="6"] .atpDown{opacity:1}
svg[data-x="kxdawb9"][data-step="5"] .o2Up,svg[data-x="kxdawb9"][data-step="6"] .o2Up{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Uncoupler collapsing the proton gradient">
  <text class="sm" x="26" y="42">intermembrane space &mdash; protons pile up here</text>
  <rect class="mem" x="20" y="118" width="420" height="34" rx="4"/>
  <text class="sm" x="26" y="186">matrix</text>

  <!-- electron transport complex -->
  <rect class="cx" x="70" y="106" width="46" height="58" rx="7"/>
  <text class="sm" x="93" y="180" text-anchor="middle" style="fill:var(--accent)">ETC</text>
  <g class="pump"><circle cx="93" cy="112" r="6" fill="var(--warn)"/></g>
  <g class="pump" style="animation-delay:-1s"><circle cx="93" cy="112" r="6" fill="var(--warn)"/></g>

  <!-- ATP synthase -->
  <g class="synth">
    <rect class="cx" x="250" y="106" width="46" height="58" rx="7" fill="var(--correct)"/>
    <circle cx="273" cy="176" r="15" fill="var(--correct)" opacity=".75"/>
    <text class="sm" x="273" y="200" text-anchor="middle" style="fill:var(--correct)">ATP synthase</text>
  </g>
  <g class="thruSynth"><circle cx="273" cy="164" r="6" fill="var(--warn)"/></g>

  <!-- the uncoupler: a hole straight through -->
  <g class="unc">
    <rect x="360" y="106" width="30" height="58" rx="6" fill="var(--incorrect)" opacity=".28"/>
    <text class="sm" x="375" y="180" text-anchor="middle" style="fill:var(--incorrect)">uncoupler</text>
    <text class="sm" x="375" y="96" text-anchor="middle" style="fill:var(--incorrect)">a shortcut</text>
  </g>
  <g class="leak"><circle cx="375" cy="164" r="6" fill="var(--warn)"/></g>

  <!-- outcome bars -->
  <line x1="486" y1="300" x2="614" y2="300" stroke="var(--border-strong)" stroke-width="1.6"/>
  <rect class="bar" x="500" y="180" width="40" height="120" rx="5" fill="var(--accent)" opacity=".8"/>
  <text class="sm" x="520" y="318" text-anchor="middle">O₂ use</text>
  <rect class="bar" x="562" y="180" width="40" height="120" rx="5" fill="var(--correct)" opacity=".8"/>
  <text class="sm" x="582" y="318" text-anchor="middle">ATP</text>
  <g class="o2Up"><rect x="500" y="120" width="40" height="60" rx="5" fill="var(--accent)"/>
    <text class="lbl" x="520" y="112" text-anchor="middle" style="fill:var(--accent)">&uarr;</text></g>
  <g class="atpDown"><rect x="562" y="180" width="40" height="96" rx="5" fill="var(--card)"/>
    <rect x="562" y="276" width="40" height="24" rx="5" fill="var(--incorrect)" opacity=".8"/>
    <text class="lbl" x="582" y="170" text-anchor="middle" style="fill:var(--incorrect)">&darr;</text></g>

  <g class="verdict">
    <rect x="20" y="222" width="404" height="30" rx="15" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="222" y="242" text-anchor="middle" style="fill:var(--accent)">the gradient was the brake — energy now leaves as heat</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Electron transport pumps protons out"},
    {t: 5, cap: "Protons return through ATP synthase → ATP"},
    {t: 11, cap: "An uncoupler ferries protons straight back"},
    {t: 17, cap: "The gradient collapses, bypassing ATP synthase"},
    {t: 23, cap: "ATP synthesis falls"},
    {t: 28, cap: "Oxygen consumption RISES: the brake is gone"},
    {t: 36, cap: "O₂ up · ATP down · energy leaves as heat"}
  ],
  transcript:
    "Electron transport pumps protons out of the matrix, building a gradient. Normally those " +
    "protons can only get back in through ATP synthase, and that is what makes ATP. Now add " +
    "a lipid soluble weak acid: it ferries protons straight back across the membrane. The " +
    "gradient collapses, and it collapses without going through ATP synthase. So ATP " +
    "synthesis falls, because there is no longer a gradient to drive it. But oxygen " +
    "consumption rises, because the gradient was what held electron transport back, and " +
    "that brake is now gone, so the chain runs flat out. Oxygen up, ATP down, and the " +
    "energy leaves as heat, which is exactly what brown fat does on purpose."
});
