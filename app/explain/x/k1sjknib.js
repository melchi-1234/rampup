/* A gradient, not a threshold — the shape of the curve is the answer. */
RU_EX.reg("k1sjknib", {
  dur: 36,
  css: `
svg[data-x="k1sjknib"]{font-family:inherit}
svg[data-x="k1sjknib"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1sjknib"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1sjknib"] .ax{stroke:var(--muted);stroke-width:2}
svg[data-x="k1sjknib"] .cur{fill:none;stroke-width:4;stroke-linecap:round}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Social gradient versus a poverty threshold">
  <line class="ax" x1="80" y1="264" x2="600" y2="264"/>
  <line class="ax" x1="80" y1="264" x2="80" y2="60"/>
  <text class="sm" x="340" y="290" text-anchor="middle">income  →</text>
  <text class="sm" x="58" y="162" text-anchor="middle" transform="rotate(-90 58 162)">health</text>

  <!-- the threshold hypothesis -->
  <g data-from="1" data-to="2">
    <path class="cur" stroke="var(--muted)" d="M84 250 L200 250 L240 110 L596 106"/>
    <line x1="220" y1="264" x2="220" y2="90" stroke="var(--muted)" stroke-dasharray="5 4"/>
    <text class="sm" x="220" y="82" text-anchor="middle">poverty line</text>
    <text class="lbl" x="400" y="140" style="fill:var(--muted)">a threshold: flat above the line</text>
  </g>
  <text class="lbl" x="340" y="322" text-anchor="middle" data-from="2" data-to="2" style="fill:var(--incorrect)">that is not what they found</text>

  <!-- the actual finding: continuous -->
  <path class="cur" stroke="var(--accent)" d="M84 248 L188 216 L292 182 L396 150 L500 120 L596 94" data-from="3"/>
  <g data-from="3">
    <circle cx="188" cy="216" r="6" fill="var(--accent)"/>
    <circle cx="292" cy="182" r="6" fill="var(--accent)"/>
    <circle cx="396" cy="150" r="6" fill="var(--accent)"/>
    <circle cx="500" cy="120" r="6" fill="var(--accent)"/>
    <text class="lbl" x="180" y="120" data-from="3" style="fill:var(--accent)">every step up, a little healthier</text>
  </g>
  <g data-from="4">
    <circle cx="500" cy="120" r="14" fill="none" stroke="var(--correct)" stroke-width="3"/>
    <circle cx="596" cy="94" r="14" fill="none" stroke="var(--correct)" stroke-width="3"/>
    <text class="sm" x="596" y="70" text-anchor="end" style="fill:var(--correct)">even the top vs the merely comfortable</text>
  </g>
  <text class="sm" x="340" y="322" text-anchor="middle" data-from="5" data-to="5">no point where it stops mattering</text>

  <g data-from="6">
    <rect x="130" y="306" width="420" height="46" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="340" y="326" text-anchor="middle" style="fill:var(--accent)">a social gradient across the whole spectrum</text>
    <text class="sm"  x="340" y="344" text-anchor="middle" style="fill:var(--accent)">and it survived controlling for medical care</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Health tracks income. What SHAPE?"},
    {t: 4, cap: "A threshold: poverty hurts, then it flattens"},
    {t: 11, cap: "That is not what they found"},
    {t: 14, cap: "EVERY step up came with better health"},
    {t: 20, cap: "Including at the top of the distribution"},
    {t: 26, cap: "No line where it stops mattering"},
    {t: 31, cap: "A social gradient across the whole spectrum"}
  ]
});
