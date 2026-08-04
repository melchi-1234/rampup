/* Dielectric into a DISCONNECTED capacitor: Q is fixed, so use U = Q²/2C. */
RU_EX.reg("kxov3es", {
  dur: 42,
  css: `
svg[data-x="kxov3es"]{font-family:inherit}
svg[data-x="kxov3es"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="kxov3es"] .big{fill:var(--text);font-size:18px;font-weight:800}
svg[data-x="kxov3es"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kxov3es"] .plate{fill:var(--muted)}
svg[data-x="kxov3es"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Energy in an isolated capacitor with a dielectric">
  <!-- the capacitor, cut off from the supply -->
  <rect class="plate" x="52" y="76" width="150" height="12" rx="3"/>
  <rect class="plate" x="52" y="180" width="150" height="12" rx="3"/>
  <text class="sm" x="127" y="66" text-anchor="middle">+Q</text>
  <text class="sm" x="127" y="212" text-anchor="middle">−Q</text>
  <path d="M127 76 V44 H236" stroke="var(--muted)" stroke-width="2.5" fill="none"/>
  <path d="M127 192 V224 H236" stroke="var(--muted)" stroke-width="2.5" fill="none"/>
  <line x1="228" y1="34" x2="252" y2="54" stroke="var(--incorrect)" stroke-width="3"/>
  <line x1="228" y1="214" x2="252" y2="234" stroke="var(--incorrect)" stroke-width="3"/>
  <text class="lbl" x="264" y="48" fill="var(--incorrect)">disconnected</text>
  <text class="sm"  x="264" y="66" fill="var(--incorrect)">the charge has nowhere to go</text>

  <text class="lbl" x="127" y="252" text-anchor="middle">32 μF · 1000 V · 16 J</text>
  <text class="lbl" x="127" y="278" text-anchor="middle" data-from="1" fill="var(--accent)">Q is FIXED</text>

  <!-- which formula -->
  <text class="lbl" x="300" y="110" data-from="2">three forms of the same equation:</text>
  <g data-from="3">
    <rect class="box" x="300" y="124" width="150" height="40" rx="12"/>
    <text class="big" x="375" y="151" text-anchor="middle" fill="var(--muted)">½CV²</text>
    <line x1="308" y1="160" x2="442" y2="128" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="462" y="150" fill="var(--incorrect)">only if V is held fixed</text>
  </g>
  <g data-from="4">
    <rect class="box" x="300" y="176" width="150" height="40" rx="12"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)"/>
    <text class="big" x="375" y="203" text-anchor="middle" fill="var(--correct)">Q²/2C</text>
    <text class="sm" x="462" y="202" fill="var(--correct)">Q is what's fixed here</text>
  </g>

  <!-- the dielectric -->
  <g data-from="5">
    <rect x="52" y="94" width="150" height="80" rx="4" fill="var(--accent)" opacity=".3"/>
    <text class="sm" x="127" y="140" text-anchor="middle" fill="var(--accent)">κ = 4</text>
    <text class="lbl" x="300" y="252">C × 4, and C is in the DENOMINATOR</text>
    <text class="sm"  x="300" y="272">so the energy divides by 4</text>
  </g>

  <g data-from="6">
    <rect x="300" y="288" width="300" height="46" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="big" x="450" y="317" text-anchor="middle" fill="var(--accent)">16 J → 4 J</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "DISCONNECTED → the charge Q is trapped"},
    {t: 6, cap: "Q fixed → that decides the formula"},
    {t: 10, cap: "Three forms of the same equation"},
    {t: 16, cap: "½CV² is for FIXED VOLTAGE — not this"},
    {t: 23, cap: "Use U = Q²/2C, since Q is what's fixed"},
    {t: 29, cap: "Dielectric ×4 on C, and C is in the denominator"},
    {t: 36, cap: "16 J → 4 J"}
  ]
});
