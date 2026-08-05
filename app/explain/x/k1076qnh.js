/* Freezing point depression: the two things people drop are the kilogram
   conversion and the van't Hoff factor. Beat 1 is the ungated base frame;
   data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("k1076qnh", {
  dur: 39,
  css: `
svg[data-x="k1076qnh"]{font-family:inherit}
svg[data-x="k1076qnh"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1076qnh"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1076qnh"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1076qnh"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Freezing point depression of aluminium sulfate solution">
  <text class="tag" x="24" y="26">0.050 mol Al&#8322;(SO&#8324;)&#8323; IN 500. g WATER &#183; K&#8348; = 1.86</text>
  <line x1="350" y1="16" x2="350" y2="300" stroke="var(--border-strong)" stroke-width="1"/>

  <!-- candidates: chip column, then verdict column, both left-anchored -->
  <text class="tag" x="368" y="26">THE FOUR CHOICES</text>
  <rect class="chip" x="368" y="38"  width="86" height="28" rx="14"/>
  <rect class="chip" x="368" y="82"  width="86" height="28" rx="14"/>
  <rect class="chip" x="368" y="126" width="86" height="28" rx="14"/>
  <rect class="chip" x="368" y="170" width="86" height="28" rx="14"/>
  <text class="lbl" x="411" y="57"  text-anchor="middle">&#8722;0.93</text>
  <text class="lbl" x="411" y="101" text-anchor="middle">&#8722;0.19</text>
  <text class="lbl" x="411" y="145" text-anchor="middle">&#8722;0.37</text>
  <text class="lbl" x="411" y="189" text-anchor="middle">&#8722;0.47</text>

  <!-- beat 2: molality needs KILOGRAMS -->
  <g data-from="1">
    <text class="sm" x="24" y="62">molality = moles per kilogram</text>
    <text class="lbl" x="24" y="86" fill="var(--accent)">0.050 / 0.500 kg = 0.100 m</text>
    <text class="sm" x="24" y="106" fill="var(--accent)">500 g is half a kilogram, so it doubles</text>
  </g>

  <!-- beat 3: count the particles -->
  <g data-from="2">
    <text class="lbl" x="24" y="146">Al&#8322;(SO&#8324;)&#8323; &#8594; 2 Al&#179;&#8314; + 3 SO&#8324;&#178;&#8315;</text>
    <text class="sm" x="24" y="166" fill="var(--warn)">2 + 3 = 5 particles per formula unit</text>
    <line x1="374" y1="96"  x2="448" y2="96"  stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="374" y1="140" x2="448" y2="140" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="466" y="101" fill="var(--incorrect)">used i = 1</text>
    <text class="sm" x="466" y="145" fill="var(--incorrect)">used i = 2</text>
  </g>

  <!-- beat 4: the product -->
  <g data-from="3">
    <text class="lbl" x="24" y="206">&#916;T&#8348; = 5 &#215; 1.86 &#215; 0.100 = 0.93</text>
  </g>

  <!-- beat 5: freezing points only go DOWN -->
  <g data-from="4">
    <rect x="24" y="226" width="212" height="32" rx="16" fill="var(--correct)" fill-opacity=".16"/>
    <text class="lbl" x="130" y="247" text-anchor="middle" fill="var(--correct)">0.00 &#8722; 0.93 = &#8722;0.93 &#176;C</text>
    <rect x="368" y="38" width="86" height="28" rx="14" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="411" y="57" text-anchor="middle" fill="var(--correct)">&#8722;0.93</text>
    <text class="sm" x="466" y="57" fill="var(--correct)">0.93 below zero</text>
  </g>

  <!-- beat 6: the near miss that skips the kilogram step -->
  <g data-from="5">
    <line x1="374" y1="184" x2="448" y2="184" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="466" y="189" fill="var(--incorrect)">skipped the kg step</text>
    <rect x="24" y="272" width="228" height="28" rx="6" fill="none" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="138" y="291" text-anchor="middle" fill="var(--incorrect)">5 &#215; 1.86 &#215; 0.050 = 0.465</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "0.050 mol Al₂(SO₄)₃ in 500. g water · Kf = 1.86 °C/m"},
    {t: 6.27,  cap: "m = 0.050 mol / 0.500 kg = 0.100 m · 500 g is half a kg"},
    {t: 12.54, cap: "Al₂(SO₄)₃ → 2 Al³⁺ + 3 SO₄²⁻ · that is i = 5, not 1 or 2"},
    {t: 20.09, cap: "ΔTf = i · Kf · m = 5 × 1.86 × 0.100 = 0.93 °C"},
    {t: 26.84, cap: "Tf = 0.00 − 0.93 = −0.93 °C · depression goes down"},
    {t: 32.47, cap: "−0.47 uses 0.050 as m · 0.465 is half of 0.93"}
  ]
});
