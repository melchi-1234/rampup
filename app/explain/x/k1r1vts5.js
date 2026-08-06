/* Acid-base extraction: bicarbonate takes the acid, leaves the phenol. */
RU_EX.reg("k1r1vts5", {
  dur: 45,
  css: `
svg[data-x="k1r1vts5"]{font-family:inherit}
svg[data-x="k1r1vts5"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1r1vts5"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1r1vts5"] .glass{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="k1r1vts5"] .ether{fill:var(--accent);opacity:.12}
svg[data-x="k1r1vts5"] .water{fill:var(--accent);opacity:.26}

svg[data-x="k1r1vts5"] .aq,svg[data-x="k1r1vts5"] .bench,svg[data-x="k1r1vts5"] .acidRow,
svg[data-x="k1r1vts5"] .pheRow,svg[data-x="k1r1vts5"] .fin{opacity:0;transition:opacity .45s ease}
svg[data-x="k1r1vts5"][data-step="1"] .aq,svg[data-x="k1r1vts5"][data-step="2"] .aq,
svg[data-x="k1r1vts5"][data-step="3"] .aq,svg[data-x="k1r1vts5"][data-step="4"] .aq,
svg[data-x="k1r1vts5"][data-step="5"] .aq,svg[data-x="k1r1vts5"][data-step="6"] .aq{opacity:1}
svg[data-x="k1r1vts5"][data-step="2"] .bench,svg[data-x="k1r1vts5"][data-step="3"] .bench,
svg[data-x="k1r1vts5"][data-step="4"] .bench,svg[data-x="k1r1vts5"][data-step="5"] .bench,
svg[data-x="k1r1vts5"][data-step="6"] .bench{opacity:1}
svg[data-x="k1r1vts5"][data-step="3"] .acidRow,svg[data-x="k1r1vts5"][data-step="4"] .acidRow,
svg[data-x="k1r1vts5"][data-step="5"] .acidRow,svg[data-x="k1r1vts5"][data-step="6"] .acidRow{opacity:1}
svg[data-x="k1r1vts5"][data-step="5"] .pheRow,svg[data-x="k1r1vts5"][data-step="6"] .pheRow{opacity:1}
svg[data-x="k1r1vts5"][data-step="6"] .fin{opacity:1}

/* the deprotonated acid drops into the aqueous layer */
svg[data-x="k1r1vts5"] #acidDot{transition:transform 1s ease, fill .5s ease}
svg[data-x="k1r1vts5"][data-step="4"] #acidDot,svg[data-x="k1r1vts5"][data-step="5"] #acidDot,
svg[data-x="k1r1vts5"][data-step="6"] #acidDot{transform:translate(0,86px);fill:var(--correct)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Acid-base extraction in a separatory funnel">
  <!-- funnel -->
  <path class="glass" d="M60 54 L60 214 L104 268 L104 316"/>
  <path class="glass" d="M200 54 L200 214 L156 268 L156 316"/>
  <line class="glass" x1="60" y1="54" x2="200" y2="54"/>
  <rect class="ether" x="62" y="60" width="136" height="92"/>
  <text class="sm" x="130" y="44" text-anchor="middle">ether layer</text>
  <g class="aq">
    <rect class="water" x="62" y="152" width="136" height="62"/>
    <path class="water" d="M62 214 L104 268 L156 268 L198 214 Z"/>
    <text class="sm" x="130" y="292" text-anchor="middle">aqueous NaHCO₃</text>
  </g>
  <line class="glass" x1="62" y1="152" x2="198" y2="152" stroke-dasharray="5 4"/>

  <!-- the two solutes -->
  <circle id="acidDot" cx="104" cy="104" r="10" fill="var(--warn)"/>
  <text class="sm" x="104" y="88" text-anchor="middle">acid</text>
  <circle cx="164" cy="118" r="10" fill="var(--muted)"/>
  <text class="sm" x="164" y="102" text-anchor="middle">phenol</text>

  <!-- the pKa ruler that decides everything -->
  <g class="bench">
    <text class="lbl" x="246" y="60">Can bicarbonate take the proton?</text>
    <line x1="246" y1="82" x2="612" y2="82" stroke="var(--border-strong)" stroke-width="2"/>
    <line x1="392" y1="70" x2="392" y2="120" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 4"/>
    <text class="sm" x="392" y="136" text-anchor="middle" style="fill:var(--accent)">carbonic acid</text>
    <text class="sm" x="392" y="152" text-anchor="middle" style="fill:var(--accent)">pKa 6.35</text>
    <text class="sm" x="252" y="102" style="fill:var(--muted)">lower pKa: yes &rarr;</text>
    <text class="sm" x="606" y="102" text-anchor="end" style="fill:var(--muted)">&larr; higher: no</text>
  </g>

  <!-- two lines per row, both left-aligned: a right-aligned verdict on the
       same line collides with the label the moment either string changes -->
  <g class="acidRow">
    <circle cx="256" cy="192" r="8" fill="var(--warn)"/>
    <text class="lbl" x="274" y="197">benzoic acid &mdash; pKa 4.4</text>
    <text class="sm"  x="274" y="216" style="fill:var(--correct)">below 6.35 &rarr; deprotonated &rarr; into the water</text>
  </g>
  <g class="pheRow">
    <circle cx="256" cy="240" r="8" fill="var(--muted)"/>
    <text class="lbl" x="274" y="245">phenol &mdash; pKa 10.2</text>
    <text class="sm"  x="274" y="264" style="fill:var(--muted)">above 6.35 &rarr; untouched &rarr; stays in the ether</text>
  </g>

  <g class="fin">
    <rect x="246" y="278" width="366" height="52" rx="16" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="429" y="300" text-anchor="middle" style="fill:var(--accent)">only the carboxylic acid moves into the water</text>
    <text class="sm"  x="429" y="320" text-anchor="middle" style="fill:var(--accent)">charged things leave the ether</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Both neutral, both dissolved in ether"},
    {t: 5, cap: "Shake with aqueous bicarbonate"},
    {t: 10, cap: "Benchmark: carbonic acid, pKa 6.35"},
    {t: 17, cap: "Benzoic acid 4.4 — below, so it reacts"},
    {t: 23, cap: "Charged → moves into the water layer"},
    {t: 29, cap: "Phenol 10.2 — above, bicarbonate can't touch it"},
    {t: 37, cap: "Only the carboxylic acid moves across"}
  ]
});
