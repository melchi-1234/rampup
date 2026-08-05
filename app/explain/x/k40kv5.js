/* Bernoulli in a narrowing pipe. Both traps are arithmetic slips, so both get
   drawn as their own boxed number. Beat 1 is the ungated base frame. */
RU_EX.reg("k40kv5", {
  dur: 45,
  css: `
svg[data-x="k40kv5"]{font-family:inherit}
svg[data-x="k40kv5"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k40kv5"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k40kv5"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k40kv5"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Pressure drop where a pipe narrows">
  <text class="tag" x="24" y="26">WATER THROUGH A NARROWING HORIZONTAL PIPE</text>

  <!-- the pipe: wide on the left, half the diameter on the right -->
  <path d="M24 70 L150 70 L200 96 L330 96" fill="none" stroke="var(--border-strong)" stroke-width="2"/>
  <path d="M24 150 L150 150 L200 124 L330 124" fill="none" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="sm" x="80"  y="115" text-anchor="middle">4.0 cm</text>
  <text class="sm" x="290" y="115" text-anchor="middle">2.0 cm</text>
  <text class="sm" x="80"  y="170" text-anchor="middle" fill="var(--accent)">1.5 m/s</text>

  <!-- candidates -->
  <line x1="350" y1="16" x2="350" y2="300" stroke="var(--border-strong)" stroke-width="1"/>
  <text class="tag" x="368" y="26">THE FOUR CHOICES</text>
  <rect class="chip" x="368" y="38"  width="106" height="28" rx="14"/>
  <rect class="chip" x="368" y="82"  width="106" height="28" rx="14"/>
  <rect class="chip" x="368" y="126" width="106" height="28" rx="14"/>
  <rect class="chip" x="368" y="170" width="106" height="28" rx="14"/>
  <text class="lbl" x="421" y="57"  text-anchor="middle">3.4&#215;10&#179;</text>
  <text class="lbl" x="421" y="101" text-anchor="middle">1.7&#215;10&#8308;</text>
  <text class="lbl" x="421" y="145" text-anchor="middle">1.8&#215;10&#8308;</text>
  <text class="lbl" x="421" y="189" text-anchor="middle">2.5&#215;10&#179;</text>

  <!-- beat 2: continuity, and the square that everyone drops -->
  <g data-from="1">
    <text class="sm"  x="24" y="200">continuity: area goes as radius squared</text>
    <text class="lbl" x="24" y="222" fill="var(--accent)">half the radius &#8594; a quarter the area &#8594; 4&#215; the speed</text>
    <text class="lbl" x="290" y="170" text-anchor="middle" fill="var(--accent)">6.0 m/s</text>
  </g>

  <!-- beat 3: the trap for forgetting to square -->
  <g data-from="2">
    <line x1="374" y1="52" x2="468" y2="52" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="486" y="57" fill="var(--incorrect)">used v&#8322; = 3.0</text>
    <text class="sm" x="486" y="75" fill="var(--incorrect)">r not squared</text>
  </g>

  <!-- beat 4: Bernoulli, height cancels -->
  <g data-from="3">
    <text class="lbl" x="24" y="252">&#916;P = &#189;&#961; (v&#8322;&#178; &#8722; v&#8321;&#178;)</text>
    <text class="sm"  x="24" y="272">horizontal, so the height terms cancel &#183; faster means lower pressure</text>
  </g>

  <!-- beat 5: the number -->
  <g data-from="4">
    <rect x="24" y="288" width="288" height="32" rx="16" fill="var(--correct)" fill-opacity=".16"/>
    <text class="lbl" x="168" y="309" text-anchor="middle" fill="var(--correct)">500 &#215; (36 &#8722; 2.25) = 16,875 Pa</text>
    <rect x="368" y="82" width="106" height="28" rx="14" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="421" y="101" text-anchor="middle" fill="var(--correct)">1.7&#215;10&#8308;</text>
    <text class="sm" x="486" y="101" fill="var(--correct)">16,875 rounds here</text>
  </g>

  <!-- beat 6: the trap for dropping the slower speed -->
  <g data-from="5">
    <line x1="374" y1="140" x2="468" y2="140" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="486" y="145" fill="var(--incorrect)">500 &#215; 36 = 18,000</text>
    <text class="sm" x="486" y="163" fill="var(--incorrect)">dropped the v&#8321;&#178; term</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "4.0 cm → 2.0 cm · v₁ = 1.5 m/s · find the pressure drop"},
    {t: 6.11,  cap: "A ∝ r² · halve r → quarter A · v₂ = 4 × 1.5 = 6.0 m/s"},
    {t: 15.66, cap: "Trap: v₂ = 3.0 (r not squared) → 3.4 × 10³ Pa"},
    {t: 21.45, cap: "Horizontal: ΔP = ½ρ(v₂² − v₁²) · faster = lower pressure"},
    {t: 28.20, cap: "500 × (36 − 2.25) = 16,875 Pa → 1.7 × 10⁴ Pa"},
    {t: 36.71, cap: "Trap: 500 × 36 = 18,000 · you dropped the v₁² term"}
  ]
});
