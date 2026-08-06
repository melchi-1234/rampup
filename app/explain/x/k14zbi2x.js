/* Nernst: Q sets the DIRECTION first, then the size. Every distractor is one
   slip inside the same formula. Beat 1 is the ungated base frame. */
RU_EX.reg("k14zbi2x", {
  dur: 39,
  css: `
svg[data-x="k14zbi2x"]{font-family:inherit}
svg[data-x="k14zbi2x"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k14zbi2x"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k14zbi2x"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k14zbi2x"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Nernst equation applied to a zinc-copper cell with dilute copper ion">
  <text class="tag" x="24" y="26">E = E&#176; &#8722; (0.0592/n) &#183; log Q &#183; n = 2</text>

  <!-- beat 1 (base frame): the standard potential -->
  <rect class="chip" x="24" y="44" width="186" height="100" rx="10"/>
  <text class="tag" x="117" y="66"  text-anchor="middle">STEP 1 &#183; E&#176;cell</text>
  <text class="sm"  x="117" y="90"  text-anchor="middle">cathode Cu &#183; +0.34 V</text>
  <text class="sm"  x="117" y="110" text-anchor="middle">anode Zn &#183; &#8722;0.76 V</text>
  <text class="lbl" x="117" y="134" text-anchor="middle">= 1.10 V</text>

  <!-- beat 2: the quotient, and the direction it forces -->
  <g data-from="1">
    <rect class="chip" x="226" y="44" width="186" height="100" rx="10"/>
    <text class="tag" x="319" y="66"  text-anchor="middle">STEP 2 &#183; Q</text>
    <text class="sm"  x="319" y="90"  text-anchor="middle">[Zn&#178;&#8314;] / [Cu&#178;&#8314;]</text>
    <text class="sm"  x="319" y="110" text-anchor="middle">1.0 / 0.010 = 100</text>
    <text class="lbl" x="319" y="134" text-anchor="middle" fill="var(--warn)">Q &#62; 1 &#8594; E falls</text>
  </g>

  <!-- beat 3: the size of the correction -->
  <g data-from="2">
    <rect class="chip" x="428" y="44" width="188" height="100" rx="10"/>
    <text class="tag" x="522" y="66"  text-anchor="middle">STEP 3 &#183; CORRECTION</text>
    <text class="sm"  x="522" y="90"  text-anchor="middle">(0.0592 / 2) &#215; log 100</text>
    <text class="sm"  x="522" y="110" text-anchor="middle">= 0.0296 &#215; 2</text>
    <text class="lbl" x="522" y="134" text-anchor="middle">= 0.0592 V</text>
  </g>

  <!-- the four candidate values -->
  <rect class="chip" x="24" y="194" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="226" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="258" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="290" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="212" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="244" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="276" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="308" text-anchor="middle">D</text>
  <text class="lbl" x="64" y="212">1.04 V</text>
  <text class="lbl" x="64" y="244">0.98 V</text>
  <text class="lbl" x="64" y="276">1.10 V</text>
  <text class="lbl" x="64" y="308">1.16 V</text>

  <!-- beat 4: subtract, and A is the survivor -->
  <g data-from="3">
    <rect x="24" y="152" width="592" height="32" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="320" y="174" text-anchor="middle" fill="var(--correct)">E = 1.10 &#8722; 0.0592 = 1.0408 &#8776; 1.04 V</text>
    <rect x="24" y="194" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="212" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="lbl" x="64" y="212" fill="var(--correct)">1.04 V</text>
    <text class="sm"  x="140" y="212" fill="var(--correct)">1.10 &#8722; 0.0592, the whole correction</text>
  </g>

  <!-- beat 5: each wrong value is one named slip -->
  <g data-from="4">
    <line x1="58" y1="239" x2="132" y2="239" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="271" x2="132" y2="271" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="303" x2="132" y2="303" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="140" y="244" fill="var(--incorrect)">1.10 &#8722; 0.0592&#215;2 &#8212; never divided by n</text>
    <text class="sm" x="140" y="276" fill="var(--incorrect)">no Nernst term &#8212; treats 0.010 M as standard</text>
    <text class="sm" x="140" y="308" fill="var(--incorrect)">1.10 + 0.0592 &#8212; sign flipped, or Q inverted</text>
  </g>

  <!-- beat 6: the habit worth keeping -->
  <g data-from="5">
    <rect x="24" y="324" width="592" height="26" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="342" text-anchor="middle">Dilute a reactant &#8594; E &#60; E&#176;. Fix the direction before the arithmetic.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "E°cell = 0.34 − (−0.76) = 1.10 V"},
    {t: 7.71,  cap: "Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.010 = 100 > 1 → E falls"},
    {t: 13.58, cap: "(0.0592/2)·log(100) = 0.0296 × 2 = 0.0592 V"},
    {t: 20.09, cap: "E = 1.10 − 0.0592 = 1.0408 ≈ 1.04 V"},
    {t: 26.92, cap: "0.98 V: forgot ÷n. 1.16 V: sign flip. 1.10 V: ignored Q."},
    {t: 33.91, cap: "Dilute a reactant → E < E°. Direction first, math second."}
  ]
});
