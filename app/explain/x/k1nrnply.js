/* Parallel resistors: reciprocals, then P = V²/R. */
RU_EX.reg("k1nrnply", {
  dur: 43,
  css: `
svg[data-x="k1nrnply"]{font-family:inherit}
svg[data-x="k1nrnply"] .lbl{fill:var(--text);font-size:15px;font-weight:700}
svg[data-x="k1nrnply"] .big{fill:var(--text);font-size:19px;font-weight:800}
svg[data-x="k1nrnply"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1nrnply"] .wire{stroke:var(--text);stroke-width:2.5;fill:none}
svg[data-x="k1nrnply"] .res{fill:var(--surface-2);stroke:var(--accent);stroke-width:2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two resistors in parallel across a battery">
  <!-- battery -->
  <line class="wire" x1="60" y1="96" x2="60" y2="240"/>
  <line class="wire" x1="46" y1="150" x2="74" y2="150" stroke-width="5"/>
  <line class="wire" x1="52" y1="168" x2="68" y2="168" stroke-width="2.5"/>
  <text class="lbl" x="24" y="205">12 V</text>

  <!-- the two branches -->
  <path class="wire" d="M60 96 H300"/>
  <path class="wire" d="M60 240 H300"/>
  <path class="wire" d="M180 96 V128"/>
  <path class="wire" d="M180 208 V240"/>
  <rect class="res" x="146" y="128" width="68" height="80" rx="8"/>
  <text class="lbl" x="180" y="174" text-anchor="middle">6 Ω</text>
  <path class="wire" d="M300 96 V128"/>
  <path class="wire" d="M300 208 V240"/>
  <rect class="res" x="266" y="128" width="68" height="80" rx="8"/>
  <text class="lbl" x="300" y="174" text-anchor="middle">3 Ω</text>
  <text class="sm" x="180" y="270" text-anchor="middle" data-from="4">sees 12 V</text>
  <text class="sm" x="300" y="270" text-anchor="middle" data-from="4">sees 12 V</text>

  <!-- the arithmetic -->
  <text class="lbl" x="382" y="70"  data-from="1">Parallel: add the RECIPROCALS</text>
  <text class="big" x="382" y="108" data-from="2">1/6 + 1/3 = 1/2</text>
  <text class="big" x="382" y="146" data-from="3" fill="var(--accent)">R = 2 Ω</text>
  <text class="sm"  x="382" y="168" data-from="3">smaller than either resistor &mdash; always true in parallel</text>

  <text class="big" x="382" y="216" data-from="4">P = V² / R</text>
  <text class="lbl" x="382" y="248" data-from="5">= 144 / 2</text>

  <g data-from="6">
    <rect x="376" y="266" width="180" height="42" rx="16" fill="var(--correct)" opacity=".18"/>
    <text class="big" x="466" y="294" text-anchor="middle" fill="var(--correct)">72 W</text>
  </g>
  <g data-from="6">
    <text class="sm" x="24" y="330" fill="var(--incorrect)">trap: adding 6 + 3 = 9 Ω gives 16 W. Parallel resistance is always LOWER than the smallest branch.</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "6 Ω and 3 Ω in parallel across 12 V"},
    {t: 5, cap: "Parallel: add reciprocals, not resistances"},
    {t: 10, cap: "1/6 + 1/3 = 1/2"},
    {t: 14, cap: "R = 2 Ω — smaller than EITHER resistor"},
    {t: 22, cap: "P = V²/R  (both see the full 12 V)"},
    {t: 29, cap: "12² = 144, divided by 2"},
    {t: 34, cap: "72 W — not 16 W from adding to 9 Ω"}
  ]
});
