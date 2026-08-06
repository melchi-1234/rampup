/* Piaget conservation — same juice, taller glass, different judgement. */
RU_EX.reg("kdlefyu", {
  dur: 42,
  css: `
svg[data-x="kdlefyu"]{font-family:inherit}
svg[data-x="kdlefyu"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdlefyu"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kdlefyu"] .glass{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="kdlefyu"] .juice{fill:var(--warn);opacity:.75}

svg[data-x="kdlefyu"] .tall,svg[data-x="kdlefyu"] .pour,svg[data-x="kdlefyu"] .says,
svg[data-x="kdlefyu"] .verdict,svg[data-x="kdlefyu"] .ego,svg[data-x="kdlefyu"] .stage,
svg[data-x="kdlefyu"] .same{opacity:0;transition:opacity .45s ease}
svg[data-x="kdlefyu"][data-step="0"] .same{opacity:1}
svg[data-x="kdlefyu"][data-step="1"] .pour,svg[data-x="kdlefyu"][data-step="1"] .tall,
svg[data-x="kdlefyu"][data-step="2"] .tall,svg[data-x="kdlefyu"][data-step="3"] .tall,
svg[data-x="kdlefyu"][data-step="4"] .tall,svg[data-x="kdlefyu"][data-step="5"] .tall,
svg[data-x="kdlefyu"][data-step="6"] .tall{opacity:1}
svg[data-x="kdlefyu"][data-step="2"] .says,svg[data-x="kdlefyu"][data-step="3"] .says,
svg[data-x="kdlefyu"][data-step="4"] .says,svg[data-x="kdlefyu"][data-step="5"] .says,
svg[data-x="kdlefyu"][data-step="6"] .says{opacity:1}
svg[data-x="kdlefyu"][data-step="3"] .verdict,svg[data-x="kdlefyu"][data-step="4"] .verdict,
svg[data-x="kdlefyu"][data-step="5"] .verdict,svg[data-x="kdlefyu"][data-step="6"] .verdict{opacity:1}
svg[data-x="kdlefyu"][data-step="4"] .ego,svg[data-x="kdlefyu"][data-step="5"] .ego,
svg[data-x="kdlefyu"][data-step="6"] .ego{opacity:1}
svg[data-x="kdlefyu"][data-step="5"] .stage,svg[data-x="kdlefyu"][data-step="6"] .stage{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Piaget conservation task">
  <!-- two short wide glasses, equal -->
  <path class="glass" d="M40 130 L46 250 H108 L114 130"/>
  <rect class="juice" x="46" y="182" width="62" height="66"/>
  <path class="glass" d="M138 130 L144 250 H206 L212 130"/>
  <rect class="juice" x="144" y="182" width="62" height="66"/>
  <g class="same"><text class="sm" x="126" y="276" text-anchor="middle">identical · child agrees they match</text></g>

  <!-- pour arrow -->
  <g class="pour">
    <path d="M228 176 q40 -34 78 0" fill="none" stroke="var(--warn)" stroke-width="3"
          marker-end="url(#kdA)"/>
    <defs><marker id="kdA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--warn)"/></marker></defs>
    <text class="sm" x="267" y="150" text-anchor="middle">poured</text>
  </g>

  <!-- the tall narrow glass, SAME volume -->
  <g class="tall">
    <path class="glass" d="M336 84 L340 250 H388 L392 84"/>
    <rect class="juice" x="340" y="128" width="48" height="122"/>
    <text class="sm" x="364" y="276" text-anchor="middle">same juice, taller column</text>
  </g>

  <g class="says">
    <rect x="424" y="96" width="196" height="46" rx="16" fill="var(--incorrect)" opacity=".14"/>
    <text class="lbl" x="522" y="116" text-anchor="middle" style="fill:var(--incorrect)">“the tall one has more”</text>
    <text class="sm"  x="522" y="134" text-anchor="middle" style="fill:var(--incorrect)">because it is higher</text>
  </g>

  <g class="verdict">
    <text class="lbl" x="424" y="176">judging by ONE dimension</text>
    <text class="sm"  x="424" y="196">height, ignoring width</text>
    <text class="lbl" x="424" y="222" style="fill:var(--accent)">= lack of conservation</text>
  </g>
  <g class="ego">
    <text class="sm" x="424" y="252">also can't say how it looks</text>
    <text class="sm" x="424" y="270">from someone else's seat</text>
    <text class="lbl" x="424" y="292" style="fill:var(--accent)">= egocentrism</text>
  </g>
  <g class="stage">
    <rect x="24" y="304" width="380" height="30" rx="15" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="214" y="324" text-anchor="middle" style="fill:var(--accent)">both are preoperational, roughly ages 2 to 7</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Two identical glasses, child agrees they match"},
    {t: 5, cap: "Poured into a tall narrow glass, nothing added"},
    {t: 11, cap: "Child: “the tall one has more, it's higher”"},
    {t: 16, cap: "That is a failure of conservation"},
    {t: 22, cap: "Also can't take another's view: egocentrism"},
    {t: 29, cap: "Both mark the preoperational stage (~2 to 7)"},
    {t: 34, cap: "Preoperational · lack of conservation"}
  ]
});
