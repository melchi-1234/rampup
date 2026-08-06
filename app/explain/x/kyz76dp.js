/* Crest: the tires lift the instant the road stops pushing. Beat 1 is the base frame. */
RU_EX.reg("kyz76dp", {
  dur: 43,
  css: `
svg[data-x="kyz76dp"]{font-family:inherit}
svg[data-x="kyz76dp"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kyz76dp"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kyz76dp"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kyz76dp"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Maximum speed over a circular crest">
  <text class="tag" x="24" y="26">CIRCULAR CREST &#183; r = 20 m &#183; g = 10 m/s&#178;</text>
  <path d="M40 170 A140 140 0 0 1 320 170" fill="none" stroke="var(--border-strong)" stroke-width="2.5"/>
  <rect x="162" y="16" width="36" height="16" rx="4" fill="var(--surface-2)" stroke="var(--text)" stroke-width="1.5"/>
  <text class="sm" x="180" y="52" text-anchor="middle">at the crest</text>
  <g data-from="1">
    <line x1="180" y1="60" x2="180" y2="104" stroke="var(--warn)" stroke-width="2.5"/>
    <polygon points="175,100 180,112 185,100" fill="var(--warn)"/>
    <text class="sm" x="192" y="86" fill="var(--warn)">gravity, mg</text>
    <line x1="140" y1="60" x2="140" y2="24" stroke="var(--accent)" stroke-width="2.5"/>
    <polygon points="135,28 140,16 145,28" fill="var(--accent)"/>
    <text class="sm" x="128" y="44" text-anchor="end" fill="var(--accent)">road pushes, N</text>
  </g>
  <g data-from="2">
    <text class="lbl" x="360" y="40" fill="var(--incorrect)">tires lift when N = 0</text>
    <text class="sm"  x="360" y="60">the road is no longer pushing at all</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="360" y="96">mg = mv&#178;/r</text>
    <text class="sm"  x="360" y="116">so gravity alone bends the path &#8594; g = v&#178;/r</text>
  </g>
  <g data-from="4">
    <text class="lbl" x="360" y="152" fill="var(--accent)">v&#178; = gr = 10 &#215; 20 = 200</text>
  </g>
  <g data-from="5">
    <rect x="360" y="176" width="230" height="34" rx="10" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="475" y="198" text-anchor="middle" fill="var(--correct)">v = &#8730;200 &#8776; 14 m/s</text>
    <text class="sm" x="360" y="238" fill="var(--incorrect)">20 m/s is just the radius written back down</text>
    <text class="sm" x="360" y="258" fill="var(--incorrect)">10 m/s is 200 divided by 20 &#8212; you stopped early</text>
    <text class="sm" x="360" y="278" fill="var(--incorrect)">7.1 m/s is half the answer</text>
  </g>
  <text class="sm" x="24" y="214">faster than this and gravity is not enough to hold it on the curve</text>
  <text class="sm" x="24" y="234">&#8212; the car leaves the road</text>
</svg>`,
  steps: [
    {t: 0, cap: "Circular crest, r = 20 m · when do the tires leave?"},
    {t: 6.83, cap: "At the crest: gravity down, normal force up"},
    {t: 13.74, cap: "Tires lift the instant the normal force hits zero"},
    {t: 20.81, cap: "So mg = mv²/r → g = v²/r"},
    {t: 28.76, cap: "v² = gr = 10 × 20 = 200"},
    {t: 35.19, cap: "v = √200 ≈ 14 m/s · 20 is r · 200/20 = 10"}
  ]
});
