/* Concentration cell: E° is zero, yet a voltage still appears. */
RU_EX.reg("k1iradkh", {
  dur: 45,
  css: `
svg[data-x="k1iradkh"]{font-family:inherit}
svg[data-x="k1iradkh"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1iradkh"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="k1iradkh"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1iradkh"] .glass{fill:var(--card);stroke:var(--border-strong);stroke-width:2}
svg[data-x="k1iradkh"] .metal{fill:var(--muted);stroke:var(--text);stroke-width:1.5}
svg[data-x="k1iradkh"] .wire{fill:none;stroke:var(--text);stroke-width:2.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Silver concentration cell">
  <path class="wire" d="M110 116 V64 H330 V116"/>
  <circle cx="220" cy="64" r="20" fill="var(--card)" stroke="var(--text)" stroke-width="2.5"/>
  <text class="lbl" x="220" y="70" text-anchor="middle">V</text>
  <path d="M150 150 Q220 108 290 150" fill="none" stroke="var(--border-strong)" stroke-width="8"/>

  <!-- concentrated side -->
  <rect class="glass" x="42" y="150" width="140" height="120" rx="8"/>
  <rect x="46" y="176" width="132" height="90" fill="var(--accent)" opacity=".30"/>
  <rect class="metal" x="100" y="116" width="20" height="130" rx="3"/>
  <text class="lbl" x="112" y="292" text-anchor="middle">1.0 M Ag⁺</text>

  <!-- dilute side -->
  <rect class="glass" x="258" y="150" width="140" height="120" rx="8"/>
  <rect x="262" y="176" width="132" height="90" fill="var(--accent)" opacity=".10"/>
  <rect class="metal" x="320" y="116" width="20" height="130" rx="3"/>
  <text class="lbl" x="330" y="292" text-anchor="middle">0.010 M Ag⁺</text>

  <text class="sm" x="220" y="318" text-anchor="middle">same metal on both sides: silver</text>

  <!-- reasoning column -->
  <text class="lbl" x="424" y="70" data-from="1" fill="var(--incorrect)">E° = exactly 0 V</text>
  <text class="sm"  x="424" y="90" data-from="1">identical electrodes can't differ</text>
  <text class="lbl" x="424" y="126" data-from="2" fill="var(--accent)">…but the concentrations do</text>

  <g data-from="3">
    <text class="sm" x="424" y="164">it runs whichever way</text>
    <text class="sm" x="424" y="182">EVENS THE TWO SIDES OUT</text>
  </g>
  <g data-from="4">
    <text class="lbl" x="424" y="216" fill="var(--correct)">so the 1.0 M side must LOSE ions</text>
    <text class="sm"  x="424" y="234" fill="var(--correct)">Ag⁺ + e⁻ → Ag  ·  reduction there</text>
    <rect x="42" y="150" width="140" height="120" rx="8" fill="none"
          stroke="var(--correct)" stroke-width="3"/>
  </g>

  <text class="sm" x="424" y="268" data-from="5">Q = 0.010 / 1.0  →  log Q = −2</text>
  <g data-from="6">
    <rect x="416" y="282" width="204" height="52" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="sm"  x="518" y="302" text-anchor="middle" fill="var(--accent)">n = 1, so the full 0.0592</text>
    <text class="big" x="518" y="324" text-anchor="middle" fill="var(--accent)">E = +0.118 V</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Both electrodes are silver — same half-reaction"},
    {t: 5, cap: "So E° is exactly zero"},
    {t: 11, cap: "Yet a voltage appears: the concentrations differ"},
    {t: 17, cap: "It runs in whatever direction evens them out"},
    {t: 23, cap: "The concentrated side must LOSE ions → reduction there"},
    {t: 31, cap: "Q = 0.010/1.0 → log Q = −2"},
    {t: 38, cap: "n = 1, so 0.0592 × 2 = 0.118 V"}
  ]
});
