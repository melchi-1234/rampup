/* Bounce: the velocity axis makes |Dv| = 40 visible, and every wrong answer is
   a specific slip off that number. Beat 1 is the ungated base frame. */
RU_EX.reg("k1bhf0cr", {
  dur: 37,
  css: `
svg[data-x="k1bhf0cr"]{font-family:inherit}
svg[data-x="k1bhf0cr"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1bhf0cr"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1bhf0cr"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1bhf0cr"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a rebounding ball changes momentum by 40 meters per second, not 20">
  <text class="tag" x="24" y="24">0.15 kg BALL &#183; +20 IN &#183; &#8722;20 OUT &#183; 0.010 s CONTACT</text>
  <text class="tag" x="616" y="24" text-anchor="end">AVERAGE FORCE?</text>

  <!-- base frame: the velocity axis, same speed, opposite sign -->
  <text class="sm" x="168" y="48" text-anchor="middle">same speed both ways &#8212; the sign flipped</text>
  <line x1="40" y1="88" x2="300" y2="88" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="170" y1="81" x2="170" y2="95" stroke="var(--border-strong)" stroke-width="2"/>
  <circle cx="70" cy="88" r="5" fill="var(--accent)"/>
  <circle cx="270" cy="88" r="5" fill="var(--accent)"/>
  <text class="sm" x="70"  y="110" text-anchor="middle">&#8722;20 out</text>
  <text class="sm" x="170" y="110" text-anchor="middle">0</text>
  <text class="sm" x="270" y="110" text-anchor="middle">+20 in</text>

  <!-- the four candidates, one block each -->
  <rect class="chip" x="336" y="44"  width="280" height="62" rx="10"/>
  <rect class="chip" x="336" y="116" width="280" height="62" rx="10"/>
  <rect class="chip" x="336" y="188" width="280" height="62" rx="10"/>
  <rect class="chip" x="336" y="260" width="280" height="62" rx="10"/>
  <text class="lbl" x="352" y="70">A &#183; 600 N</text>
  <text class="lbl" x="352" y="142">B &#183; 0 N</text>
  <text class="lbl" x="352" y="214">C &#183; 300 N</text>
  <text class="lbl" x="352" y="286">D &#183; 6.0 N</text>

  <!-- beat 2: the span across the axis is 40, not 20 -->
  <g data-from="1">
    <line x1="70" y1="134" x2="270" y2="134" stroke="var(--accent)" stroke-width="2"/>
    <path d="M78 129 L70 134 L78 139" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <path d="M262 129 L270 134 L262 139" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <text class="lbl" x="170" y="158" text-anchor="middle" style="fill:var(--accent)">|&#916;v| = 40 m/s</text>
  </g>

  <!-- beat 3: mass times that span -->
  <g data-from="2">
    <rect x="24" y="176" width="284" height="38" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="166" y="200" text-anchor="middle">&#916;p = 0.15 &#215; 40 = 6.0 kg&#183;m/s</text>
  </g>

  <!-- beat 4: divide by the contact time -->
  <g data-from="3">
    <rect x="24" y="224" width="284" height="38" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="166" y="248" text-anchor="middle" style="fill:var(--correct)">F = 6.0 / 0.010 = 600 N</text>
    <rect x="336" y="44" width="280" height="62" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="352" y="70" style="fill:var(--correct)">A &#183; 600 N</text>
    <text class="sm"  x="352" y="92" style="fill:var(--correct)">&#916;p divided by the contact time</text>
  </g>

  <!-- beat 5: each wrong number, beside the slip that makes it -->
  <g data-from="4">
    <line x1="348" y1="137" x2="448" y2="137" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="348" y1="209" x2="448" y2="209" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="348" y1="281" x2="448" y2="281" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="164" style="fill:var(--incorrect)">treats momentum as a scalar</text>
    <text class="sm" x="352" y="236" style="fill:var(--incorrect)">used |&#916;v| = 20: 3.0 / 0.010</text>
    <text class="sm" x="352" y="308" style="fill:var(--incorrect)">reports &#916;p as if it were a force</text>
  </g>

  <!-- beat 6: a rebound is twice the momentum change of stopping -->
  <g data-from="5">
    <text class="tag" x="24" y="290">STOPPING DEAD VS BOUNCING BACK</text>
    <text class="sm"  x="24" y="312">stop dead: |&#916;v| = 20 &#8594; 300 N</text>
    <text class="sm"  x="24" y="334" style="fill:var(--correct)">bounce back: |&#916;v| = 40 &#8594; 600 N</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Speed is unchanged, but velocity reversed"},
    {t: 4.83,  cap: "Δv = |−20 − (+20)| = 40 m/s"},
    {t: 10.62, cap: "Δp = 0.15 × 40 = 6.0 kg·m/s"},
    {t: 16.97, cap: "F = Δp/Δt = 6.0 / 0.010 = 600 N"},
    {t: 23.56, cap: "300 N: used Δv=20. 0 N: speed only. 6.0 N: Δp itself"},
    {t: 31.59, cap: "Bounce-back = twice the Δp of stopping dead"}
  ]
});
