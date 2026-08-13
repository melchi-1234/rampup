/* Signal detection: payoffs move the criterion, not d′.
   Two findings, one framework, two knobs — the reward moves the bar, not the
   ears. Beat 1 speaks over the ungated base frame; data-from = beat − 1. */
RU_EX.reg("khkbje5", {
  dur: 44,
  css: `
svg[data-x="khkbje5"]{font-family:inherit}
svg[data-x="khkbje5"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="khkbje5"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="khkbje5"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="khkbje5"] .card{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="khkbje5"] .rowB,svg[data-x="khkbje5"] .rowD{transition:opacity .4s ease}
svg[data-x="khkbje5"][data-step="1"] .rowB,svg[data-x="khkbje5"][data-step="2"] .rowB,
svg[data-x="khkbje5"][data-step="3"] .rowB,svg[data-x="khkbje5"][data-step="4"] .rowB,
svg[data-x="khkbje5"][data-step="5"] .rowB,
svg[data-x="khkbje5"][data-step="1"] .rowD,svg[data-x="khkbje5"][data-step="2"] .rowD,
svg[data-x="khkbje5"][data-step="3"] .rowD,svg[data-x="khkbje5"][data-step="4"] .rowD,
svg[data-x="khkbje5"][data-step="5"] .rowD{opacity:.35}
svg[data-x="khkbje5"] .rowC{transition:opacity .4s ease}
svg[data-x="khkbje5"][data-step="4"] .rowC,svg[data-x="khkbje5"][data-step="5"] .rowC{opacity:.45}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Signal detection theory: sensitivity versus criterion">
  <!-- base frame: two findings + the choice list -->
  <rect class="card" x="20" y="14" width="280" height="50" rx="8"/>
  <text class="sm" x="32" y="34">Finding 1: noise added</text>
  <text class="sm" x="32" y="52">&#8594; needs a louder tone</text>
  <rect class="card" x="340" y="14" width="280" height="50" rx="8"/>
  <text class="sm" x="352" y="34">Finding 2: cash reward</text>
  <text class="sm" x="352" y="52">&#8594; says yes more often</text>

  <rect class="card" x="20" y="78" width="280" height="196" rx="8"/>
  <text class="tag" x="32" y="100">WHICH FRAMEWORK?</text>
  <!-- beat 6 answer pill: drawn BEFORE row A text so glyphs paint over it -->
  <g data-from="5">
    <rect x="24" y="111" width="252" height="24" rx="12" fill="var(--correct)" opacity=".16"/>
  </g>
  <text class="sm" x="32" y="128">A &#183; SDT &#8212; reward shifts criterion</text>
  <g class="rowB"><text class="sm" x="32" y="156">B &#183; Weber's law &#8212; changes the JND</text></g>
  <g class="rowC"><text class="sm" x="32" y="184">C &#183; SDT &#8212; reward raises d&#8242;</text></g>
  <g class="rowD"><text class="sm" x="32" y="212">D &#183; Absolute threshold &#8212; lowered</text></g>

  <!-- beat 2: framework named, B and D eliminated (dims via css) -->
  <g data-from="1">
    <text class="tag" x="340" y="100">SIGNAL DETECTION: TWO KNOBS</text>
  </g>

  <!-- beat 3: knob one, sensitivity -->
  <g data-from="2">
    <rect class="card" x="340" y="112" width="280" height="92" rx="8"/>
    <text class="sm" x="352" y="132">SENSITIVITY (d&#8242;)</text>
    <line x1="352" y1="156" x2="600" y2="156" stroke="var(--border-strong)" stroke-width="2"/>
    <circle cx="476" cy="156" r="6" fill="var(--accent)"/>
    <line x1="560" y1="156" x2="490" y2="156" stroke="var(--incorrect)" stroke-width="2.5"/>
    <path d="M497 151 L490 156 L497 161 Z" fill="var(--incorrect)"/>
    <text class="sm" x="556" y="147" text-anchor="end" style="fill:var(--incorrect)">noise</text>
    <text class="sm" x="352" y="190" style="fill:var(--muted)">stimulus + senses only</text>
  </g>

  <!-- beat 4: knob two, the criterion -->
  <g data-from="3">
    <rect class="card" x="340" y="212" width="280" height="92" rx="8"/>
    <text class="sm" x="352" y="232">CRITERION &#8212; the bar for yes</text>
    <line x1="352" y1="256" x2="600" y2="256" stroke="var(--border-strong)" stroke-width="2"/>
    <circle cx="420" cy="256" r="6" fill="var(--accent)"/>
    <line x1="500" y1="256" x2="430" y2="256" stroke="var(--warn)" stroke-width="2.5"/>
    <path d="M437 251 L430 256 L437 261 Z" fill="var(--warn)"/>
    <text class="sm" x="496" y="247" text-anchor="end" style="fill:var(--warn)">reward</text>
    <text class="sm" x="352" y="290" style="fill:var(--muted)">payoffs move this knob</text>
  </g>

  <!-- beat 5: the trap on row C -->
  <g data-from="4">
    <rect x="24" y="167" width="252" height="24" fill="none" stroke="var(--incorrect)" stroke-width="1.5" rx="4"/>
    <line x1="28" y1="191" x2="28" y2="229" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="32" y="238" style="fill:var(--incorrect)">moves the bar, not the ears</text>
  </g>

  <!-- beat 6: verdict -->
  <g data-from="5">
    <rect x="340" y="314" width="280" height="32" rx="16" fill="var(--correct)" opacity=".16"/>
    <text class="sm" x="480" y="334" text-anchor="middle" style="fill:var(--correct)">stimulus &#8594; d&#8242; &#183; payoffs &#8594; criterion</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Noise raises the needed intensity. Reward shifts the yes-saying."},
    {t: 7.55,  cap: "Weber = two stimuli. Fixed threshold can't shift. B and D out"},
    {t: 14.7,  cap: "Sensitivity (d′): stimulus + senses. Noise lowers it"},
    {t: 22.25, cap: "Criterion: the bar for saying yes. Reward lowers it"},
    {t: 29.72, cap: "Trap (C): money moves the bar, not the ears. d′ unchanged"},
    {t: 36.79, cap: "Stimulus → d′ · payoffs → criterion. Answer: A"}
  ],
  transcript:
    "Noise makes the tone harder to detect. A reward makes people say yes more. One framework " +
    "covers both. Weber's law needs two stimuli. A fixed threshold cannot shift. Signal detection " +
    "has two knobs. Knob one, sensitivity. Only the stimulus or the senses move it. Noise drags " +
    "it down. Knob two, the criterion, the bar for saying yes. Payoffs move it. The reward lowers " +
    "the bar. The trap is choice C. A reward feels like sharper perception, but money moves the " +
    "bar, not the ears. Physical changes move sensitivity. Payoffs move the criterion. Choice A."
});
