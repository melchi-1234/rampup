/* Doppler: the source speed goes UNDERNEATH. The trap answer adds it on,
   which is hertz plus metres per second — a unit crime you can hear.
   Step 0 is the base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("k7ox1ma", {
  dur: 44,
  css: `
svg[data-x="k7ox1ma"]{font-family:inherit}
svg[data-x="k7ox1ma"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k7ox1ma"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k7ox1ma"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k7ox1ma"] .fig{fill:none;stroke:var(--text);stroke-width:1.5}
svg[data-x="k7ox1ma"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why an approaching siren sounds higher, and why the shift is a ratio">

  <!-- ================= base frame (beat 1) ================= -->
  <text class="tag" x="24" y="32">THE SCENE</text>
  <text class="sm" x="24" y="56">siren emits 680 Hz · sound travels 340 m/s</text>

  <!-- road drawn FIRST so the wavefronts win every overlap -->
  <line x1="24" y1="166" x2="344" y2="166" stroke="var(--border-strong)" stroke-width="2"/>

  <!-- ambulance + listener, drawn after the arcs land -->
  <text class="sm" x="251" y="104" text-anchor="middle" fill="var(--accent)">34 m/s</text>
  <text class="sm" x="312" y="104" text-anchor="middle">at rest</text>

  <text class="tag" x="356" y="32">THE FOUR CHOICES</text>
  <rect class="chip" x="356" y="42"  width="88" height="28" rx="14"/>
  <rect class="chip" x="356" y="86"  width="88" height="28" rx="14"/>
  <rect class="chip" x="356" y="130" width="88" height="28" rx="14"/>
  <rect class="chip" x="356" y="174" width="88" height="28" rx="14"/>
  <text class="lbl" x="400" y="61"  text-anchor="middle">620 Hz</text>
  <text class="lbl" x="400" y="105" text-anchor="middle">680 Hz</text>
  <text class="lbl" x="400" y="149" text-anchor="middle">710 Hz</text>
  <text class="lbl" x="400" y="193" text-anchor="middle">760 Hz</text>

  <!-- ========== beat 2: the wavefronts bunch, two choices die ========== -->
  <g data-from="1">
    <g clip-path="url(#k7ox1ma-clip)">
      <circle cx="168" cy="150" r="144" fill="none" stroke="var(--accent)" stroke-width="2"/>
      <circle cx="186" cy="150" r="90"  fill="none" stroke="var(--accent)" stroke-width="2"/>
      <circle cx="204" cy="150" r="36"  fill="none" stroke="var(--accent)" stroke-width="2"/>
    </g>
    <text class="sm" x="24"  y="192">spread out · &#955; long</text>
    <text class="sm" x="190" y="192" fill="var(--accent)">bunched · &#955; short</text>
  </g>

  <!-- the vehicle and listener sit ON TOP of the arcs, so the newest ring
       reads as a ring around the source rather than a line through it -->
  <rect x="184" y="145" width="40" height="21" rx="4" fill="var(--surface-2)" stroke="var(--text)" stroke-width="1.5"/>
  <line class="fig" x1="232" y1="112" x2="266" y2="112" stroke="var(--accent)" stroke-width="2.5"/>
  <polygon points="266,107 274,112 266,117" fill="var(--accent)"/>
  <circle class="fig" cx="312" cy="136" r="6"/>
  <line class="fig" x1="312" y1="142" x2="312" y2="156"/>
  <line class="fig" x1="303" y1="150" x2="321" y2="150"/>
  <line class="fig" x1="312" y1="156" x2="306" y2="166"/>
  <line class="fig" x1="312" y1="156" x2="318" y2="166"/>

  <g data-from="1">
    <line x1="362" y1="56"  x2="438" y2="56"  stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="362" y1="100" x2="438" y2="100" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="456" y="61"  fill="var(--incorrect)">lower, impossible</text>
    <text class="sm" x="456" y="105" fill="var(--incorrect)">unshifted, impossible</text>
  </g>

  <!-- ========== beat 3: the formula, denominator boxed ========== -->
  <g data-from="2">
    <text class="lbl" x="24" y="224">f&#8242; = f &#183; v / (v &#8722; v&#8347;)</text>
    <!-- box measured with getStartPositionOfChar, not estimated: the denominator
         "(v − v&#8347;)" really runs x 84.0-130.4, where 6.5px/char predicted 105-171 -->
    <rect x="80" y="212" width="54" height="17" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <text class="sm" x="24" y="248" fill="var(--accent)">source speed &#8594; denominator</text>
  </g>

  <!-- ========== beat 4: the arithmetic shortcut ========== -->
  <g data-from="3">
    <text class="sm" x="24" y="274" fill="var(--warn)">340 &#8722; 34 = 306 = 0.9 &#215; 340</text>
    <line x1="140" y1="214" x2="140" y2="226" stroke="var(--warn)" stroke-width="2"/>
  </g>

  <!-- ========== beat 5: the answer ========== -->
  <g data-from="4">
    <rect x="24" y="292" width="180" height="32" rx="16" fill="var(--correct)" fill-opacity=".16"/>
    <text class="lbl" x="114" y="313" text-anchor="middle" fill="var(--correct)">680 / 0.9 &#8776; 755.6 Hz</text>
    <rect x="356" y="174" width="88" height="28" rx="14" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="400" y="193" text-anchor="middle" fill="var(--correct)">760 Hz</text>
    <text class="sm"  x="456" y="193" fill="var(--correct)">755.6 rounds here</text>
  </g>

  <!-- ========== beat 6: the trap named ========== -->
  <g data-from="5">
    <text class="sm" x="456" y="149" fill="var(--incorrect)">hertz plus m/s</text>
    <rect x="356" y="228" width="120" height="28" rx="6" fill="none" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="416" y="247" text-anchor="middle" fill="var(--incorrect)">710 &#8776; 680 + 34</text>
    <path d="M356 242 L348 242 L348 144 L356 144" fill="none" stroke="var(--incorrect)"
          stroke-width="1.5" stroke-dasharray="4 3"/>
  </g>

  <defs><clipPath id="k7ox1ma-clip"><rect x="24" y="118" width="320" height="48"/></clipPath></defs>
</svg>`,
  steps: [
    {t: 0,     cap: "680 Hz siren, 34 m/s toward a listener at rest · v = 340 m/s"},
    {t: 8.11,  cap: "wavefronts bunch → λ shorter → f higher · 620 and 680 are dead"},
    {t: 16.30, cap: "f′ = f · v / (v − v_s) · source speed always underneath"},
    {t: 21.45, cap: "34 = v/10, so 340 − 34 = 306 = 0.9 × 340"},
    {t: 28.12, cap: "680 / 0.9 ≈ 755.6 Hz · closest choice is 760 Hz"},
    {t: 35.43, cap: "710 ≈ 680 + 34 · a Doppler shift is a ratio, not a sum"}
  ]
});
