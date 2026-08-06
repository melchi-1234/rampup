/* Friction supplies the whole centripetal demand, so mu = v^2/(rg) = 0.45.
   Each wrong answer is one dropped operation: the square, the g, or a stray 1/2. */
RU_EX.reg("kwgkdn0", {
  dur: 40,
  css: `
svg[data-x="kwgkdn0"]{font-family:inherit}
svg[data-x="kwgkdn0"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kwgkdn0"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kwgkdn0"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kwgkdn0"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Minimum coefficient of static friction for a car on a flat curve">
  <text class="tag" x="24" y="24">v = 15 m/s &#183; r = 50 m &#183; g = 10 m/s&#178; &#183; m = 1000 kg (cancels)</text>

  <!-- beat 1: the force balance -->
  <rect x="24" y="38" width="592" height="54" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="320" y="64" text-anchor="middle">&#956;mg  =  mv&#178;/r</text>
  <text class="sm"  x="320" y="84" text-anchor="middle">friction is the only horizontal force &#183; the mass cancels</text>

  <!-- the four candidate coefficients -->
  <rect class="chip" x="24" y="166" width="84" height="30" rx="15"/>
  <rect class="chip" x="24" y="206" width="84" height="30" rx="15"/>
  <rect class="chip" x="24" y="246" width="84" height="30" rx="15"/>
  <rect class="chip" x="24" y="286" width="84" height="30" rx="15"/>
  <text class="lbl" x="66" y="186" text-anchor="middle">0.030</text>
  <text class="lbl" x="66" y="226" text-anchor="middle">0.45</text>
  <text class="lbl" x="66" y="266" text-anchor="middle">0.23</text>
  <text class="lbl" x="66" y="306" text-anchor="middle">4.5</text>

  <!-- beat 2: solve it -->
  <g data-from="1">
    <rect x="24" y="100" width="592" height="58" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="320" y="126" text-anchor="middle" fill="var(--correct)">&#956; = v&#178;/(rg) = 15&#178; / (50 &#215; 10)</text>
    <text class="lbl" x="320" y="150" text-anchor="middle" fill="var(--correct)">= 225 / 500 = 0.45</text>
    <rect x="24" y="206" width="84" height="30" rx="15" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="66"  y="226" text-anchor="middle" fill="var(--correct)">0.45</text>
    <text class="sm"  x="124" y="226" fill="var(--correct)">225 / 500 &#183; v squared, over r times g</text>
  </g>

  <!-- beat 3: speed never squared -->
  <g data-from="2">
    <line x1="32" y1="181" x2="100" y2="181" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="124" y="186" fill="var(--incorrect)">15 / 500 &#183; the speed never squared</text>
  </g>

  <!-- beat 4: gravity dropped, so it is an acceleration -->
  <g data-from="3">
    <line x1="32" y1="301" x2="100" y2="301" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="124" y="306" fill="var(--incorrect)">225 / 50 = v&#178;/r &#183; that is an acceleration, not &#956;</text>
  </g>

  <!-- beat 5: a stray factor of one half -->
  <g data-from="4">
    <line x1="32" y1="261" x2="100" y2="261" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="124" y="266" fill="var(--incorrect)">225 / 1000 = 0.225 &#183; a stray &#189; smuggled in</text>
  </g>

  <!-- beat 6: the sanity check -->
  <g data-from="5">
    <rect x="24" y="324" width="592" height="26" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="342" text-anchor="middle">&#956; is dimensionless &#183; &#956; &#62; 1 on asphalt means go back and recheck</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "f_s = μmg  must equal  m v²/r"},
    {t: 5.47,  cap: "μ = v²/(rg) = 225/500 = 0.45"},
    {t: 15.82, cap: "0.030 = 15/500 — v never squared"},
    {t: 21.69, cap: "4.5 = 225/50 = v²/r — that's a_c, not μ"},
    {t: 27.56, cap: "225/1000 = 0.225 ≈ 0.23 — a ½ smuggled in"},
    {t: 34.31, cap: "μ is dimensionless; μ > 1 on asphalt = recheck"}
  ]
});
