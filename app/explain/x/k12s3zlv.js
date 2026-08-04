/* The rescue point is always just after the break. */
RU_EX.reg("k12s3zlv", {
  dur: 43,
  css: `
svg[data-x="k12s3zlv"]{font-family:inherit}
svg[data-x="k12s3zlv"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k12s3zlv"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k12s3zlv"] .node{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.8}
svg[data-x="k12s3zlv"] .arr{stroke:var(--text);stroke-width:2.5;fill:none}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Locating a blocked step in a linear pathway">
  <defs><marker id="k12sA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
    orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--text)"/></marker></defs>

  <!-- the pathway -->
  <rect class="node" x="24"  y="86" width="112" height="46" rx="12"/>
  <text class="lbl" x="80"  y="114" text-anchor="middle">precursor</text>
  <path class="arr" d="M140 109 H186" marker-end="url(#k12sA)"/>
  <text class="sm"  x="163" y="98" text-anchor="middle">enz 1</text>

  <rect class="node" x="190" y="86" width="90" height="46" rx="12"/>
  <text class="lbl" x="235" y="114" text-anchor="middle">X</text>
  <path class="arr" d="M284 109 H330" marker-end="url(#k12sA)"/>
  <text class="sm"  x="307" y="98" text-anchor="middle">enz 2</text>

  <rect class="node" x="334" y="86" width="90" height="46" rx="12"/>
  <text class="lbl" x="379" y="114" text-anchor="middle">Y</text>
  <path class="arr" d="M428 109 H474" marker-end="url(#k12sA)"/>
  <text class="sm"  x="451" y="98" text-anchor="middle">enz 3</text>

  <rect class="node" x="478" y="86" width="130" height="46" rx="12"/>
  <text class="lbl" x="543" y="114" text-anchor="middle">threonine</text>

  <!-- clue 1: X accumulates -->
  <g data-from="2">
    <rect x="190" y="86" width="90" height="46" rx="12" fill="var(--warn)" opacity=".3"/>
    <text class="lbl" x="235" y="70" text-anchor="middle" fill="var(--warn)">piles up</text>
  </g>
  <text class="sm" x="24" y="176" data-from="3" fill="var(--warn)">something still MAKES X, so enzyme 1 is fine…</text>
  <text class="sm" x="24" y="196" data-from="3" fill="var(--warn)">…and nothing is consuming it</text>

  <!-- clue 2: rescue pattern -->
  <g data-from="4">
    <text class="lbl" x="24" y="234">feeding the mutant:</text>
    <text class="lbl" x="200" y="234" fill="var(--incorrect)">X ✗ no rescue</text>
    <text class="lbl" x="340" y="234" fill="var(--correct)">Y ✓</text>
    <text class="lbl" x="400" y="234" fill="var(--correct)">threonine ✓</text>
  </g>
  <text class="sm" x="24" y="258" data-from="5">X fails because the cell already HAS X and still can't use it</text>

  <!-- the block -->
  <g data-from="6">
    <line x1="290" y1="76" x2="324" y2="142" stroke="var(--incorrect)" stroke-width="4"/>
    <rect x="140" y="284" width="360" height="48" rx="16" fill="var(--incorrect)" opacity=".16"/>
    <text class="lbl" x="320" y="306" text-anchor="middle" fill="var(--incorrect)">the block is X → Y: enzyme 2</text>
    <text class="sm"  x="320" y="324" text-anchor="middle" fill="var(--incorrect)">the rescue point is always just AFTER the break</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "A linear pathway, one enzyme per step"},
    {t: 6, cap: "Break one enzyme, everything downstream stops"},
    {t: 11, cap: "Clue 1: compound X piles up"},
    {t: 15, cap: "So the steps before X work — nothing consumes X"},
    {t: 22, cap: "Clue 2: Y rescues it. X does not."},
    {t: 30, cap: "X fails because the cell already has X"},
    {t: 36, cap: "Block is X → Y: enzyme 2"}
  ]
});
