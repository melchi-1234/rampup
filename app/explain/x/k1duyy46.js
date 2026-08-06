/* SN2: the rate law tells you the mechanism, and the mechanism tells you the
   stereochemistry. Beat 1 is the ungated base frame. */
RU_EX.reg("k1duyy46", {
  dur: 34,
  css: `
svg[data-x="k1duyy46"]{font-family:inherit}
svg[data-x="k1duyy46"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1duyy46"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1duyy46"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1duyy46"] .bond{stroke:var(--text);stroke-width:1.8;fill:none}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why an SN2 reaction inverts configuration">
  <text class="tag" x="24" y="26">(R)-2-BROMOBUTANE + HYDROXIDE</text>

  <!-- beat 2: the rate law fixes the mechanism -->
  <g data-from="1">
    <rect x="24" y="42" width="592" height="32" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="63" text-anchor="middle" style="fill:var(--accent)">rate depends on BOTH &#8594; one concerted step &#8594; S&#8202;N&#8202;2</text>
  </g>

  <!-- the carbon, with the nucleophile coming in opposite the leaving group -->
  <circle cx="320" cy="180" r="17" fill="var(--surface-2)" stroke="var(--text)" stroke-width="1.8"/>
  <text class="lbl" x="320" y="186" text-anchor="middle">C</text>
  <line class="bond" x1="337" y1="180" x2="404" y2="180"/>
  <text class="lbl" x="424" y="186">Br</text>
  <g data-from="2">
    <line x1="180" y1="180" x2="292" y2="180" stroke="var(--correct)" stroke-width="2.5"/>
    <polygon points="292,175 303,180 292,185" fill="var(--correct)"/>
    <text class="lbl" x="150" y="186" text-anchor="end" style="fill:var(--correct)">HO&#8315;</text>
    <text class="sm"  x="230" y="164" text-anchor="middle" style="fill:var(--correct)">attacks the opposite face</text>
  </g>

  <!-- beat 4: the umbrella flip -->
  <g data-from="3">
    <path d="M303 168 q-14 -22 -6 -40" fill="none" stroke="var(--warn)" stroke-width="2"/>
    <path d="M303 192 q-14 22 -6 40" fill="none" stroke="var(--warn)" stroke-width="2"/>
    <line class="bond" x1="320" y1="163" x2="320" y2="132"/>
    <line class="bond" x1="320" y1="197" x2="320" y2="228"/>
    <text class="sm" x="320" y="122" text-anchor="middle" style="fill:var(--warn)">the other three bonds sweep through</text>
    <text class="sm" x="320" y="248" text-anchor="middle" style="fill:var(--warn)">like an umbrella caught in the wind</text>
  </g>

  <!-- beat 5: one clean inversion -->
  <g data-from="4">
    <rect x="24" y="278" width="300" height="34" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="174" y="300" text-anchor="middle" style="fill:var(--correct)">(R) &#8594; (S)-butan-2-ol, inverted</text>
  </g>

  <!-- beat 6: why racemic is wrong here -->
  <g data-from="5">
    <text class="sm" x="344" y="292" style="fill:var(--incorrect)">a racemic mix would need a FLAT carbocation,</text>
    <text class="sm" x="344" y="310" style="fill:var(--incorrect)">attacked from both faces &#8212; that is S&#8202;N&#8202;1</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "(R)-2-bromobutane + OH⁻ · rate depends on BOTH"},
    {t: 5.95,  cap: "Second order → one concerted step → SN2"},
    {t: 12.38, cap: "Backside attack: OH⁻ comes in opposite the Br"},
    {t: 17.21, cap: "The other three bonds invert — an umbrella flip"},
    {t: 21.48, cap: "(R) → (S)-butan-2-ol · inversion, every time"},
    {t: 25.11, cap: "Racemic needs a planar carbocation — that is SN1"}
  ]
});
