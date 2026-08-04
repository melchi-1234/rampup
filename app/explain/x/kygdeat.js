/* Directional selection that reverses — which is what rules out drift. */
RU_EX.reg("kygdeat", {
  dur: 40,
  css: `
svg[data-x="kygdeat"]{font-family:inherit}
svg[data-x="kygdeat"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kygdeat"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kygdeat"] .ax{stroke:var(--muted);stroke-width:2}
svg[data-x="kygdeat"] #bark{transition:fill .9s ease}
svg[data-x="kygdeat"][data-step="1"] #bark,svg[data-x="kygdeat"][data-step="2"] #bark,
svg[data-x="kygdeat"][data-step="3"] #bark{fill:#3b2f26}
svg[data-x="kygdeat"] .curve{fill:none;stroke-width:3.5;stroke-linecap:round}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Directional selection reversing with the environment">
  <!-- the bark, which changes color -->
  <rect id="bark" x="26" y="52" width="150" height="180" rx="10" fill="#cbbfae"/>
  <text class="sm" x="101" y="248" text-anchor="middle">tree bark</text>
  <circle cx="66"  cy="100" r="12" fill="#f0e6d8" stroke="var(--text)" stroke-width="1.5"/>
  <circle cx="136" cy="150" r="12" fill="#2b2119" stroke="var(--text)" stroke-width="1.5"/>
  <text class="sm" x="66"  y="128" text-anchor="middle">light</text>
  <text class="sm" x="136" y="178" text-anchor="middle">dark</text>
  <text class="sm" x="101" y="40" text-anchor="middle" data-from="0" data-to="0">both alleles already present</text>
  <text class="sm" x="101" y="40" text-anchor="middle" data-from="1" data-to="3" fill="var(--warn)">soot: light beetles stand out</text>
  <text class="sm" x="101" y="40" text-anchor="middle" data-from="4" fill="var(--correct)">cleaned: advantage flips back</text>

  <!-- allele frequency over time -->
  <line class="ax" x1="222" y1="270" x2="612" y2="270"/>
  <line class="ax" x1="222" y1="270" x2="222" y2="70"/>
  <text class="sm" x="212" y="76" text-anchor="end">1.0</text>
  <text class="sm" x="417" y="292" text-anchor="middle">decades</text>
  <text class="sm" x="204" y="180" text-anchor="middle" transform="rotate(-90 204 180)">dark allele</text>

  <path class="curve" stroke="var(--text)" d="M222 250 Q300 236 380 120" data-from="3"/>
  <path class="curve" stroke="var(--correct)" d="M380 120 Q470 106 612 240" data-from="5"/>
  <circle cx="380" cy="120" r="6" fill="var(--warn)" data-from="5"/>
  <text class="sm" x="380" y="106" text-anchor="middle" data-from="5" fill="var(--warn)">laws clean the air</text>

  <!-- explains the first half only; gated off before the reversal marker
       lands in the same area -->
  <text class="lbl" x="240" y="112" data-from="2" data-to="4" fill="var(--warn)">birds eat what they can SEE</text>
  <text class="sm"  x="240" y="130" data-from="2" data-to="4">not random &mdash; that is the mechanism</text>

  <g data-from="6">
    <rect x="222" y="304" width="390" height="46" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="417" y="324" text-anchor="middle" fill="var(--accent)">directional selection, and it reversed</text>
    <text class="sm"  x="417" y="342" text-anchor="middle" fill="var(--accent)">drift is random · mutation doesn't arrive on demand</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Both alleles already exist in the population"},
    {t: 6, cap: "Soot darkens the bark"},
    {t: 11, cap: "Birds eat what they can see — not random"},
    {t: 17, cap: "Dark allele climbs: DIRECTIONAL selection"},
    {t: 24, cap: "Clean the bark and the advantage flips"},
    {t: 29, cap: "Light allele recovers as selection reverses"},
    {t: 34, cap: "Rules out drift (random) and mutation (not on demand)"}
  ]
});
