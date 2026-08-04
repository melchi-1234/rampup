/* Noncompetitive inhibition: Vmax down, Km fixed, lines crossing on the x-axis. */
RU_EX.reg("kwupo64", {
  dur: 43,
  css: `
svg[data-x="kwupo64"]{font-family:inherit}
svg[data-x="kwupo64"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kwupo64"] .sm{fill:var(--muted);font-size:11.5px;font-weight:600}
svg[data-x="kwupo64"] .ax{stroke:var(--muted);stroke-width:2}
svg[data-x="kwupo64"] .cur{fill:none;stroke-width:3.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Noncompetitive inhibition on both plots">
  <!-- Michaelis-Menten -->
  <text class="sm" x="34" y="40">v vs [S]</text>
  <line class="ax" x1="46" y1="200" x2="270" y2="200"/>
  <line class="ax" x1="46" y1="200" x2="46" y2="52"/>
  <path class="cur" stroke="var(--accent)" d="M46 200 Q108 82 268 70"/>
  <line x1="46" y1="70" x2="268" y2="70" stroke="var(--border-strong)" stroke-dasharray="5 4"/>
  <text class="sm" x="274" y="74">Vmax</text>

  <path class="cur" stroke="var(--incorrect)" d="M46 200 Q112 128 268 118" data-from="1"/>
  <line x1="46" y1="118" x2="268" y2="118" stroke="var(--incorrect)" stroke-dasharray="5 4" data-from="1"/>
  <text class="sm" x="274" y="122" data-from="1" fill="var(--incorrect)">Vmax falls</text>

  <!-- Km marker: same on both curves -->
  <g data-from="2">
    <line x1="112" y1="200" x2="112" y2="60" stroke="var(--correct)" stroke-width="2" stroke-dasharray="4 4"/>
    <text class="sm" x="112" y="218" text-anchor="middle" fill="var(--correct)">Km unchanged</text>
  </g>
  <text class="sm" x="34" y="248" data-from="3" fill="var(--correct)">substrate still binds just as well</text>
  <text class="sm" x="34" y="266" data-from="3">so it is NOT competing for the active site</text>

  <!-- Lineweaver-Burk -->
  <text class="sm" x="356" y="40">1/v vs 1/[S]</text>
  <line class="ax" x1="420" y1="200" x2="616" y2="200"/>
  <line class="ax" x1="420" y1="200" x2="420" y2="52"/>
  <line class="cur" stroke="var(--accent)" x1="366" y1="200" x2="600" y2="88" data-from="4"/>
  <line class="cur" stroke="var(--incorrect)" x1="366" y1="200" x2="600" y2="60" data-from="4"/>
  <circle cx="366" cy="200" r="8" fill="none" stroke="var(--correct)" stroke-width="3" data-from="5"/>
  <text class="sm" x="366" y="228" text-anchor="middle" data-from="4" fill="var(--correct)">−1/Km</text>
  <text class="sm" x="356" y="250" data-from="5" fill="var(--correct)">same Km → same x-intercept</text>
  <text class="sm" x="356" y="268" data-from="5" fill="var(--correct)">→ the lines cross ON the x-axis</text>

  <g data-from="6">
    <rect x="24" y="298" width="592" height="46" rx="16" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="318" text-anchor="middle" fill="var(--accent)">noncompetitive: it binds a different site altogether</text>
    <text class="sm"  x="320" y="336" text-anchor="middle" fill="var(--accent)">with equal affinity for free enzyme and the enzyme-substrate complex</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Vmax = top speed · Km = substrate for half-max"},
    {t: 5, cap: "Vmax falls · Km unchanged"},
    {t: 9, cap: "Km unchanged → substrate affinity untouched"},
    {t: 15, cap: "Not competing for the active site"},
    {t: 21, cap: "x-intercept = −1/Km, so it doesn't move"},
    {t: 28, cap: "So both lines cross ON the x-axis"},
    {t: 35, cap: "Noncompetitive: binds E and ES equally"}
  ]
});
