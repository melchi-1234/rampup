/* Nernst: thinning a reactant pushes Q above 1 and costs voltage. */
RU_EX.reg("k1jvw9rh", {
  dur: 39,
  css: `
svg[data-x="k1jvw9rh"]{font-family:inherit}
svg[data-x="k1jvw9rh"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="k1jvw9rh"] .big{fill:var(--text);font-size:18px;font-weight:800}
svg[data-x="k1jvw9rh"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1jvw9rh"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="k1jvw9rh"] .bar{transition:height .7s ease, y .7s ease}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Nernst equation shifting the cell voltage">
  <text class="lbl" x="24" y="40">Zn + Cu²⁺ → Zn²⁺ + Cu</text>
  <text class="sm"  x="24" y="62" data-from="1">Cu²⁺ is a REACTANT, and it has been thinned to 0.10 M</text>

  <g data-from="2">
    <rect class="box" x="24" y="80" width="300" height="62" rx="14"/>
    <text class="sm"  x="40" y="102">Q = products / reactants</text>
    <text class="lbl" x="40" y="128">= [Zn²⁺]/[Cu²⁺] = 1.0 / 0.10 = 10</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="344" y="108" style="fill:var(--warn)">Q &gt; 1</text>
    <text class="sm"  x="344" y="128" style="fill:var(--warn)">a reactant is scarce → voltage falls</text>
  </g>

  <g data-from="4">
    <rect class="box" x="24" y="160" width="380" height="54" rx="14"/>
    <text class="big" x="40" y="196">E = E° &minus; (0.0592/n) · log Q</text>
  </g>
  <g data-from="5">
    <text class="lbl" x="24" y="242">n = 2  →  0.0592/2 = 0.0296</text>
    <text class="lbl" x="24" y="266">log(10) = 1  →  correction = 0.0296 V</text>
  </g>

  <!-- the voltage, before and after -->
  <g data-from="4">
    <line x1="452" y1="300" x2="616" y2="300" stroke="var(--border-strong)" stroke-width="1.6"/>
    <rect x="466" y="160" width="52" height="140" rx="6" fill="var(--accent)" opacity=".8"/>
    <text class="sm" x="492" y="318" text-anchor="middle">E° 1.10 V</text>
  </g>
  <g data-from="6">
    <rect x="546" y="164" width="52" height="136" rx="6" fill="var(--correct)" opacity=".8"/>
    <text class="sm" x="572" y="318" text-anchor="middle">1.07 V</text>
    <text class="lbl" x="572" y="150" text-anchor="middle" style="fill:var(--incorrect)">&darr; 0.03</text>
  </g>

  <g data-from="6">
    <rect x="24" y="300" width="400" height="46" rx="16" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="224" y="320" text-anchor="middle" style="fill:var(--accent)">about 0.03 V lower, not 0.06</text>
    <text class="sm"  x="224" y="338" text-anchor="middle" style="fill:var(--accent)">n DIVIDES the factor, it does not double it</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "E° assumes all concentrations are 1 M"},
    {t: 4, cap: "Cu²⁺ is a REACTANT here"},
    {t: 8, cap: "Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.10 = 10"},
    {t: 14, cap: "Q > 1 means a reactant is scarce"},
    {t: 19, cap: "E = E° − (0.0592/n)·log Q"},
    {t: 26, cap: "n = 2 → 0.0296 · log(10) = 0.0296(1)"},
    {t: 32, cap: "≈ 0.03 V lower — n divides, it doesn't double"}
  ]
});
