/* A reducing agent has exactly one target in a protein: the cysteine S-S.
   Sort the four claims by which bond they name and what level it lives at. */
RU_EX.reg("kj4tz8m", {
  dur: 43,
  css: `
svg[data-x="kj4tz8m"]{font-family:inherit}
svg[data-x="kj4tz8m"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kj4tz8m"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kj4tz8m"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kj4tz8m"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a reducing agent inactivates an enzyme by cleaving cysteine disulfide bonds">
  <text class="tag" x="24" y="26">DTT ADDED &#183; NO HEAT &#183; NO SIDE-CHAIN EDITS &#183; ENZYME DIES</text>

  <!-- the four claims, all visible from the start -->
  <rect class="chip" x="24" y="156" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="198" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="240" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="282" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="173" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="215" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="257" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="299" text-anchor="middle">D</text>
  <text class="sm" x="66" y="173">ionic Lys / Glu bonds &#8212; called primary structure</text>
  <text class="sm" x="66" y="215">alpha-helix H-bonds &#8212; held by serine side chains</text>
  <text class="sm" x="66" y="257">covalent Cys&#8211;Cys disulfides &#8212; tertiary structure</text>
  <text class="sm" x="66" y="299">hydrolyzed peptide bonds &#8212; primary structure cut</text>

  <!-- beat 2: reduction has exactly one target -->
  <g data-from="1">
    <rect x="24" y="40" width="592" height="52" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="66" text-anchor="middle" style="fill:var(--accent)">a reducing agent breaks exactly one bond: S&#8722;S</text>
    <text class="sm"  x="320" y="86" text-anchor="middle">it cannot touch ionic bonds, H-bonds, or peptide bonds</text>
  </g>

  <!-- beat 3: cut the bridges, the fold opens, and C is the claim that says so -->
  <g data-from="2">
    <text class="tag" x="24"  y="132">ONLY CYSTEINE HAS SULFUR</text>
    <text class="lbl" x="280" y="128" text-anchor="middle">Cys&#8211;S&#8212;S&#8211;Cys</text>
    <line x1="280" y1="110" x2="280" y2="140" stroke="var(--incorrect)" stroke-width="2.5"/>
    <text class="sm"  x="280" y="102" text-anchor="middle" style="fill:var(--incorrect)">DTT cuts</text>
    <text class="sm"  x="352" y="128" style="fill:var(--correct)">3 bridges cut &#8594; tertiary fold unravels</text>
    <rect x="20" y="236" width="598" height="44" rx="10" fill="none" stroke="var(--correct)" stroke-width="2"/>
    <rect x="24" y="240" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="257" text-anchor="middle" style="fill:var(--correct)">C</text>
    <text class="sm"  x="66" y="257" style="fill:var(--correct)">covalent Cys&#8211;Cys disulfides &#8212; tertiary structure</text>
    <text class="sm"  x="66" y="275" style="fill:var(--correct)">the one bond a reductant can break</text>
  </g>

  <!-- beat 4: A mislabels a tertiary salt bridge as primary -->
  <g data-from="3">
    <line x1="64" y1="168" x2="378" y2="168" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="66" y="191" style="fill:var(--incorrect)">salt bridges are tertiary, and DTT ignores charge</text>
  </g>

  <!-- beat 5: B has the wrong donor and the wrong level; D is hydrolysis -->
  <g data-from="4">
    <line x1="64" y1="210" x2="378" y2="210" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="294" x2="378" y2="294" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="66" y="233" style="fill:var(--incorrect)">helix H-bonds run backbone C=O to N&#8211;H, and are 2&#176;</text>
    <text class="sm" x="66" y="317" style="fill:var(--incorrect)">that is a protease &#8212; the opposite of reduction</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="24" y="324" width="592" height="26" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="342" text-anchor="middle">Primary structure is peptide bonds only. Side chains never build it.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "DTT reduces. Which bond can it break?"},
    {t: 6.91,  cap: "Axis: reduction hits S–S and nothing else"},
    {t: 12.3,  cap: "Cys–Cys bridges cut → tertiary fold unravels"},
    {t: 20.17, cap: "A: salt bridges are tertiary, not primary"},
    {t: 29.32, cap: "B: backbone H-bonds (2°) · D: that's hydrolysis"},
    {t: 36.55, cap: "Side chains never make primary structure"}
  ]
});
