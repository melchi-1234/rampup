/* Social causation vs drift — the study design is what settles it. */
RU_EX.reg("k11d0zv5", {
  dur: 45,
  css: `
svg[data-x="k11d0zv5"]{font-family:inherit}
svg[data-x="k11d0zv5"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="k11d0zv5"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k11d0zv5"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="k11d0zv5"] .bar{transition:height .8s ease, y .8s ease}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Social causation versus social drift">
  <text class="lbl" x="24" y="36">Poverty and poor health travel together. Which causes which?</text>

  <!-- the two competing stories -->
  <g data-from="1">
    <rect class="box" x="24" y="54" width="270" height="70" rx="14"/>
    <text class="sm"  x="40" y="76">DRIFT</text>
    <text class="lbl" x="40" y="100">illness &rarr; poverty</text>
    <text class="sm"  x="40" y="116">being sick costs you work and income</text>
  </g>
  <g data-from="2">
    <rect class="box" x="346" y="54" width="270" height="70" rx="14"/>
    <text class="sm"  x="362" y="76">CAUSATION</text>
    <text class="lbl" x="362" y="100">poverty &rarr; illness</text>
    <text class="sm"  x="362" y="116">the conditions poverty brings</text>
  </g>
  <text class="sm" x="320" y="146" text-anchor="middle" data-from="3">a correlation fits both. you need to know who was sick FIRST.</text>

  <!-- the longitudinal design -->
  <text class="sm" x="24" y="182" data-from="4">BASELINE</text>
  <g data-from="4">
    <line x1="24" y1="286" x2="290" y2="286" stroke="var(--border-strong)" stroke-width="1.6"/>
    <rect x="56"  y="230" width="52" height="56" rx="5" fill="var(--muted)" opacity=".7"/>
    <rect x="150" y="230" width="52" height="56" rx="5" fill="var(--muted)" opacity=".7"/>
    <text class="sm" x="82"  y="304" text-anchor="middle">low income</text>
    <text class="sm" x="176" y="304" text-anchor="middle">high income</text>
    <text class="lbl" x="128" y="214" text-anchor="middle" fill="var(--correct)">equally healthy</text>
  </g>

  <text class="sm" x="346" y="182" data-from="5">TEN YEARS LATER</text>
  <g data-from="5">
    <line x1="346" y1="286" x2="616" y2="286" stroke="var(--border-strong)" stroke-width="1.6"/>
    <rect x="380" y="198" width="52" height="88" rx="5" fill="var(--incorrect)" opacity=".8"/>
    <rect x="474" y="230" width="52" height="56" rx="5" fill="var(--muted)" opacity=".7"/>
    <text class="sm" x="406" y="304" text-anchor="middle">low income</text>
    <text class="sm" x="500" y="304" text-anchor="middle">high income</text>
    <text class="lbl" x="406" y="188" text-anchor="middle" fill="var(--incorrect)">40% sicker</text>
  </g>

  <g data-from="6">
    <rect x="24" y="318" width="592" height="34" rx="17" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="341" text-anchor="middle" fill="var(--accent)">health didn't come first, income did &mdash; drift is ruled out, causation supported</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Poverty and poor health travel together"},
    {t: 5, cap: "Drift: being ill pushes you into poverty"},
    {t: 12, cap: "Causation: being poor makes you ill"},
    {t: 18, cap: "Correlation alone can't tell them apart"},
    {t: 24, cap: "At baseline both groups were equally healthy"},
    {t: 31, cap: "10 years later: the low-income group is 40% sicker"},
    {t: 38, cap: "Rules out drift → social causation"}
  ]
});
