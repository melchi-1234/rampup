/* Classical conditioning — naming each part, then extinction. */
RU_EX.reg("k1j9ubkl", {
  dur: 42,
  css: `
svg[data-x="k1j9ubkl"]{font-family:inherit}
svg[data-x="k1j9ubkl"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1j9ubkl"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1j9ubkl"] .tag{font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1j9ubkl"] .arw{stroke:var(--text);stroke-width:2.4;fill:none;marker-end:url(#k1jArrow)}
svg[data-x="k1j9ubkl"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}

svg[data-x="k1j9ubkl"] .r1,svg[data-x="k1j9ubkl"] .r2,svg[data-x="k1j9ubkl"] .r3,
svg[data-x="k1j9ubkl"] .r4,svg[data-x="k1j9ubkl"] .tagU,svg[data-x="k1j9ubkl"] .tagC,
svg[data-x="k1j9ubkl"] .verdict{opacity:0;transition:opacity .45s ease}

svg[data-x="k1j9ubkl"][data-step="0"] .r1,svg[data-x="k1j9ubkl"][data-step="1"] .r1,
svg[data-x="k1j9ubkl"][data-step="2"] .r1,svg[data-x="k1j9ubkl"][data-step="3"] .r1,
svg[data-x="k1j9ubkl"][data-step="4"] .r1,svg[data-x="k1j9ubkl"][data-step="5"] .r1,
svg[data-x="k1j9ubkl"][data-step="6"] .r1{opacity:1}
svg[data-x="k1j9ubkl"][data-step="1"] .tagU,svg[data-x="k1j9ubkl"][data-step="2"] .tagU,
svg[data-x="k1j9ubkl"][data-step="3"] .tagU,svg[data-x="k1j9ubkl"][data-step="4"] .tagU,
svg[data-x="k1j9ubkl"][data-step="5"] .tagU,svg[data-x="k1j9ubkl"][data-step="6"] .tagU{opacity:1}
svg[data-x="k1j9ubkl"][data-step="2"] .r2,svg[data-x="k1j9ubkl"][data-step="3"] .r2,
svg[data-x="k1j9ubkl"][data-step="4"] .r2,svg[data-x="k1j9ubkl"][data-step="5"] .r2,
svg[data-x="k1j9ubkl"][data-step="6"] .r2{opacity:1}
svg[data-x="k1j9ubkl"][data-step="3"] .r3,svg[data-x="k1j9ubkl"][data-step="4"] .r3,
svg[data-x="k1j9ubkl"][data-step="5"] .r3,svg[data-x="k1j9ubkl"][data-step="6"] .r3{opacity:1}
svg[data-x="k1j9ubkl"][data-step="3"] .tagC,svg[data-x="k1j9ubkl"][data-step="4"] .tagC,
svg[data-x="k1j9ubkl"][data-step="5"] .tagC,svg[data-x="k1j9ubkl"][data-step="6"] .tagC{opacity:1}
svg[data-x="k1j9ubkl"][data-step="4"] .r4,svg[data-x="k1j9ubkl"][data-step="5"] .r4,
svg[data-x="k1j9ubkl"][data-step="6"] .r4{opacity:1}
svg[data-x="k1j9ubkl"][data-step="6"] .verdict{opacity:1}

/* the extinction curve draws itself as the response fades */
svg[data-x="k1j9ubkl"] .fade{stroke-dasharray:260;stroke-dashoffset:260;transition:stroke-dashoffset 1.2s ease}
svg[data-x="k1j9ubkl"][data-step="5"] .fade,svg[data-x="k1j9ubkl"][data-step="6"] .fade{stroke-dashoffset:0}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Classical conditioning stages">
  <defs><marker id="k1jArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"
    markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--text)"/></marker></defs>

  <!-- row 1: meat -> salivation, untrained -->
  <g class="r1">
    <rect class="box" x="40" y="42" width="150" height="40" rx="12"/>
    <text class="lbl" x="115" y="67" text-anchor="middle">meat powder</text>
    <path class="arw" d="M196 62 H286"/>
    <rect class="box" x="292" y="42" width="150" height="40" rx="12"/>
    <text class="lbl" x="367" y="67" text-anchor="middle">salivation</text>
    <text class="sm" x="470" y="67">no training needed</text>
  </g>
  <g class="tagU">
    <text class="tag" x="115" y="34" text-anchor="middle" style="fill:var(--correct)">UNCONDITIONED STIMULUS</text>
    <text class="tag" x="367" y="34" text-anchor="middle" style="fill:var(--correct)">UNCONDITIONED RESPONSE</text>
  </g>

  <!-- row 2: tone alone, neutral -->
  <g class="r2">
    <rect class="box" x="40" y="112" width="150" height="40" rx="12"/>
    <text class="lbl" x="115" y="137" text-anchor="middle">tone</text>
    <path class="arw" d="M196 132 H286" stroke-dasharray="5 5"/>
    <text class="sm" x="300" y="137">nothing. it is neutral</text>
  </g>

  <!-- row 3: after pairing, tone alone works -->
  <g class="r3">
    <rect class="box" x="40" y="182" width="150" height="40" rx="12"/>
    <text class="lbl" x="115" y="207" text-anchor="middle">tone (after pairing)</text>
    <path class="arw" d="M196 202 H286"/>
    <rect class="box" x="292" y="182" width="150" height="40" rx="12"/>
    <text class="lbl" x="367" y="207" text-anchor="middle">salivation</text>
  </g>
  <g class="tagC">
    <text class="tag" x="115" y="238" text-anchor="middle" style="fill:var(--accent)">CONDITIONED STIMULUS</text>
    <text class="tag" x="367" y="238" text-anchor="middle" style="fill:var(--accent)">CONDITIONED RESPONSE</text>
  </g>

  <!-- row 4: tone with no meat, response decays -->
  <g class="r4">
    <text class="sm" x="40" y="286">tone, repeated, with no meat</text>
    <line x1="40" y1="330" x2="330" y2="330" stroke="var(--border-strong)" stroke-width="1.6"/>
    <path class="fade" d="M44 292 C 120 296, 180 322, 326 328" fill="none"
          stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="18" y="300" transform="rotate(-90 18 300)" text-anchor="middle">response</text>
  </g>

  <g class="verdict">
    <rect x="356" y="272" width="252" height="62" rx="16" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="482" y="296" text-anchor="middle" style="fill:var(--accent)">meat = unconditioned stimulus</text>
    <text class="lbl" x="482" y="318" text-anchor="middle" style="fill:var(--accent)">the fading = extinction</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Meat powder makes the dog salivate, untrained"},
    {t: 4, cap: "No training needed → unconditioned stimulus"},
    {t: 12, cap: "The tone starts out neutral"},
    {t: 15, cap: "After pairing: tone = conditioned stimulus"},
    {t: 24, cap: "Now the tone comes with no meat"},
    {t: 28, cap: "The response fades and stops: extinction"},
    {t: 33, cap: "Unconditioned stimulus, and extinction"}
  ],
  transcript:
    "Meat powder makes a dog salivate with no training at all. Anything that works without " +
    "training is the unconditioned stimulus, so the meat powder is the unconditioned " +
    "stimulus and the drooling it causes is the unconditioned response. The tone means " +
    "nothing at first: it is neutral. Pair the tone with the meat enough times and the tone " +
    "alone starts causing salivation, which makes the tone the conditioned stimulus and " +
    "that salivation the conditioned response. Then the researchers ring the tone over and " +
    "over with no meat, and the salivation fades and stops. That fading is extinction. So " +
    "the meat powder is the unconditioned stimulus and the fading is extinction. The trap " +
    "is calling the meat a response, when it is the thing being presented."
});
