/* Inhibitor ID: read which kinetic constant moved. Km frozen kills the
   active-site story; unrescued Vmax names noncompetitive. Beat 1 is base. */
RU_EX.reg("k1bvfcmr", {
  dur: 45,
  css: `
svg[data-x="k1bvfcmr"]{font-family:inherit}
svg[data-x="k1bvfcmr"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1bvfcmr"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1bvfcmr"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1bvfcmr"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Naming an inhibitor from which kinetic constant changed">
  <text class="tag" x="24" y="26">INHIBITOR X &#183; WHAT THE TWO CONSTANTS SAY</text>

  <!-- base frame: the measurement -->
  <rect x="24" y="38" width="272" height="52" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="160" y="60" text-anchor="middle" fill="var(--incorrect)">Vmax &#8595; FELL</text>
  <text class="sm"  x="160" y="79" text-anchor="middle">the ceiling rate dropped</text>

  <rect x="320" y="38" width="272" height="52" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="456" y="60" text-anchor="middle">Km &#8212; UNCHANGED</text>
  <text class="sm"  x="456" y="79" text-anchor="middle">same [S] for half-maximal rate</text>

  <!-- base frame: all four candidates -->
  <rect class="chip" x="24" y="126" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="168" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="210" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="252" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="144" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="186" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="228" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="270" text-anchor="middle">D</text>
  <text class="sm" x="64" y="144">reversible, at the ACTIVE SITE</text>
  <text class="sm" x="64" y="186">denatures by breaking peptide bonds</text>
  <text class="sm" x="64" y="228">binds AWAY from the active site</text>
  <text class="sm" x="64" y="270">raises the enzyme&#8217;s affinity for S</text>

  <!-- beat 2: an unmoved Km means the active site was never touched -->
  <g data-from="1">
    <rect x="320" y="38" width="272" height="52" rx="10" fill="var(--accent)" fill-opacity=".14"
          stroke="var(--accent)" stroke-width="2"/>
    <text class="lbl" x="456" y="60" text-anchor="middle" fill="var(--accent)">Km &#8212; UNCHANGED</text>
    <text class="sm"  x="456" y="79" text-anchor="middle">same [S] for half-maximal rate</text>
    <text class="sm"  x="320" y="110" text-anchor="middle" fill="var(--accent)">&#8658; substrate binding was never touched</text>
  </g>

  <!-- beat 3: the active-site competitor would have moved Km -->
  <g data-from="2">
    <line x1="64" y1="139" x2="328" y2="139" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="144" fill="var(--incorrect)">competitive: Km &#8593; and [S] rescues</text>
  </g>

  <!-- beat 4: nothing rescues Vmax, so the site is elsewhere -->
  <g data-from="3">
    <rect x="24" y="210" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="228" text-anchor="middle" fill="var(--correct)">C</text>
    <text class="sm" x="336" y="228" fill="var(--correct)">allosteric &#183; [S] cannot rescue</text>
  </g>

  <!-- beat 5: the activation bait and the destruction bait -->
  <g data-from="4">
    <line x1="64" y1="265" x2="328" y2="265" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="270" fill="var(--incorrect)">&#8593; affinity &#8658; Km &#8595; &#183; activation</text>
    <line x1="64" y1="181" x2="328" y2="181" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="186" fill="var(--incorrect)">peptide cleavage = proteolysis</text>
  </g>

  <!-- beat 6: the rule that read the whole question -->
  <g data-from="5">
    <rect x="24" y="300" width="568" height="34" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="48"  y="322">Km moves &#8594; competitive</text>
    <text class="sm" x="340" y="322">only Vmax moves &#8594; noncompetitive</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Vmax ↓ but Km unchanged: only one knob moved"},
    {t: 6.59,  cap: "Km unchanged ⇒ substrate binding untouched"},
    {t: 13.1,  cap: "Competitive: Km ↑, and excess [S] restores Vmax"},
    {t: 19.77, cap: "Noncompetitive: allosteric site, [S] cannot rescue"},
    {t: 26.6,  cap: "↑ affinity ⇒ Km ↓; peptide cleavage = proteolysis"},
    {t: 39.35, cap: "Ask which constant moved"}
  ]
});
