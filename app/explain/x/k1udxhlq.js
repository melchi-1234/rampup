/* Weaken: diagram her causal chain, name the assumption, then show only D adds
   an outside rival cause. Beat 1 is the ungated base frame. */
RU_EX.reg("k1udxhlq", {
  dur: 34,
  css: `
svg[data-x="k1udxhlq"]{font-family:inherit}
svg[data-x="k1udxhlq"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1udxhlq"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1udxhlq"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1udxhlq"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Weakening a causal explanation by supplying a rival cause">
  <text class="tag" x="24" y="24">THE FINDING ISN'T DISPUTED &#183; THE 'WHY' IS THE TARGET</text>

  <!-- base frame: what is safe, what is under attack, and the four findings -->
  <rect x="24" y="40" width="284" height="48" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="166" y="62" text-anchor="middle">THE FINDING &#8212; not the target</text>
  <text class="sm" x="166" y="80" text-anchor="middle">face-to-face interaction fell</text>
  <rect x="332" y="40" width="284" height="48" rx="10" fill="var(--accent)" fill-opacity=".14"
        stroke="var(--accent)" stroke-width="1.5"/>
  <text class="sm" x="474" y="62" text-anchor="middle" style="fill:var(--accent)">HER EXPLANATION &#8212; the target</text>
  <text class="sm" x="474" y="80" text-anchor="middle" style="fill:var(--accent)">&#8230; because privacy was lost</text>

  <rect class="chip" x="24" y="192" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="226" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="260" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="294" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="210" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="244" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="278" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="312" text-anchor="middle">D</text>
  <text class="sm" x="64" y="210">some employees wore headphones</text>
  <text class="sm" x="64" y="244">employees felt more visible</text>
  <text class="sm" x="64" y="278">email and messaging traffic rose</text>
  <text class="sm" x="64" y="312">a written-request policy landed too</text>

  <!-- beat 2: her causal chain, spelled out -->
  <g data-from="1">
    <rect x="24"  y="100" width="128" height="32" rx="8" fill="var(--surface-2)"/>
    <rect x="172" y="100" width="128" height="32" rx="8" fill="var(--surface-2)"/>
    <rect x="320" y="100" width="128" height="32" rx="8" fill="var(--surface-2)"/>
    <rect x="468" y="100" width="148" height="32" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="88"  y="120" text-anchor="middle">walls removed</text>
    <text class="sm" x="236" y="120" text-anchor="middle">feel watched</text>
    <text class="sm" x="384" y="120" text-anchor="middle">self-shield</text>
    <text class="sm" x="542" y="120" text-anchor="middle">less talk</text>
    <path d="M154 116 L170 116" stroke="var(--border-strong)" stroke-width="2"/>
    <path d="M302 116 L318 116" stroke="var(--border-strong)" stroke-width="2"/>
    <path d="M450 116 L466 116" stroke="var(--border-strong)" stroke-width="2"/>
  </g>

  <!-- beat 3: the load-bearing assumption -->
  <g data-from="2">
    <rect x="24" y="146" width="592" height="30" rx="8" fill="var(--warn)" fill-opacity=".16"/>
    <text class="sm" x="320" y="166" text-anchor="middle" style="fill:var(--warn)">ASSUMES: nothing else caused the drop</text>
  </g>

  <!-- beat 4: D supplies a rival cause, so the middle of the chain is optional -->
  <g data-from="3">
    <line x1="190" y1="116" x2="282" y2="116" stroke="var(--incorrect)" stroke-width="2"/>
    <line x1="340" y1="116" x2="428" y2="116" stroke="var(--incorrect)" stroke-width="2"/>
    <rect x="24" y="294" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="312" text-anchor="middle" style="fill:var(--correct)">D</text>
    <text class="sm"  x="64"  y="312" style="fill:var(--correct)">a written-request policy landed too</text>
    <text class="sm"  x="380" y="312" style="fill:var(--correct)">NEW info &#8212; a rival cause</text>
  </g>

  <!-- beat 5: A, B and C are the passage read back to her -->
  <g data-from="4">
    <line x1="60" y1="205" x2="300" y2="205" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="239" x2="300" y2="239" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="273" x2="300" y2="273" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="380" y="210" style="fill:var(--incorrect)">her own evidence, restated</text>
    <text class="sm" x="380" y="244" style="fill:var(--incorrect)">that IS her premise</text>
    <text class="sm" x="380" y="278" style="fill:var(--incorrect)">her account predicts this</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="24" y="326" width="592" height="24" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="343" text-anchor="middle">A fact from inside the passage can never weaken it.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Weaken the explanation, not the finding"},
    {t: 5.31,  cap: "Walls gone → exposed → self-shield → less talk"},
    {t: 11.26, cap: "Assumption: no other cause was in play"},
    {t: 14.89, cap: "D: rival cause → her mechanism isn't needed"},
    {t: 21.72, cap: "A, B, C restate the passage — they fit her"},
    {t: 29.91, cap: "Only new outside information can weaken"}
  ]
});
