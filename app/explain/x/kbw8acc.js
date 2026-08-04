/* Tripeptide Asp-His-Lys at pH 7.4 — a pKa ladder against the pH line.
   Drawn, not filmed: nothing here moves, it accumulates. */
RU_EX.reg("kbw8acc", {
  dur: 44,
  css: `
svg[data-x="kbw8acc"]{font-family:inherit}
svg[data-x="kbw8acc"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kbw8acc"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kbw8acc"] .axis{stroke:var(--border-strong);stroke-width:2}
svg[data-x="kbw8acc"] .phline{stroke:var(--accent);stroke-width:2.5;stroke-dasharray:7 5}

svg[data-x="kbw8acc"] .grp{opacity:.18;transition:opacity .5s ease}
svg[data-x="kbw8acc"] .rule{opacity:0;transition:opacity .45s ease}
svg[data-x="kbw8acc"][data-step="1"] .rule,svg[data-x="kbw8acc"][data-step="2"] .rule,
svg[data-x="kbw8acc"][data-step="3"] .rule,svg[data-x="kbw8acc"][data-step="4"] .rule,
svg[data-x="kbw8acc"][data-step="5"] .rule,svg[data-x="kbw8acc"][data-step="6"] .rule{opacity:1}

/* each group lights up on its own beat and stays lit */
svg[data-x="kbw8acc"][data-step="2"] .g-cooh,svg[data-x="kbw8acc"][data-step="3"] .g-cooh,
svg[data-x="kbw8acc"][data-step="4"] .g-cooh,svg[data-x="kbw8acc"][data-step="5"] .g-cooh,
svg[data-x="kbw8acc"][data-step="6"] .g-cooh,
svg[data-x="kbw8acc"][data-step="2"] .g-asp,svg[data-x="kbw8acc"][data-step="3"] .g-asp,
svg[data-x="kbw8acc"][data-step="4"] .g-asp,svg[data-x="kbw8acc"][data-step="5"] .g-asp,
svg[data-x="kbw8acc"][data-step="6"] .g-asp,
svg[data-x="kbw8acc"][data-step="3"] .g-his,svg[data-x="kbw8acc"][data-step="4"] .g-his,
svg[data-x="kbw8acc"][data-step="5"] .g-his,svg[data-x="kbw8acc"][data-step="6"] .g-his,
svg[data-x="kbw8acc"][data-step="4"] .g-nh3,svg[data-x="kbw8acc"][data-step="5"] .g-nh3,
svg[data-x="kbw8acc"][data-step="6"] .g-nh3,
svg[data-x="kbw8acc"][data-step="5"] .g-lys,svg[data-x="kbw8acc"][data-step="6"] .g-lys{opacity:1}

svg[data-x="kbw8acc"] .tally{opacity:0;transition:opacity .5s ease}
svg[data-x="kbw8acc"][data-step="6"] .tally{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="pKa ladder against pH 7.4">
  <text class="lbl" x="320" y="24" text-anchor="middle">Asp &ndash; His &ndash; Lys  at  pH 7.4</text>

  <!-- fixed columns: name | pKa | where it sits vs the pH | verdict.
       A table rather than a scatter, so nothing can collide as rows light up. -->
  <text class="sm" x="230" y="60">0</text>
  <text class="sm" x="340" y="60" text-anchor="middle">6</text>
  <text class="sm" x="460" y="60" text-anchor="end">12</text>
  <line class="phline" x1="372" y1="66" x2="372" y2="288"/>
  <rect x="330" y="30" width="84" height="22" rx="11" fill="var(--accent)" opacity=".16"/>
  <text class="sm" x="372" y="46" text-anchor="middle" fill="var(--accent)">pH 7.4</text>

  <g class="rule">
    <text class="sm" x="230" y="308" fill="var(--muted)">&larr; proton gone</text>
    <text class="sm" x="460" y="308" text-anchor="end" fill="var(--muted)">keeps it &rarr;</text>
  </g>

  <g class="grp g-cooh">
    <text class="lbl" x="24" y="101">α-COOH</text>
    <text class="sm"  x="150" y="101">pKa 3.1</text>
    <line class="axis" x1="230" y1="96" x2="460" y2="96" stroke-width="1"/>
    <circle cx="289" cy="96" r="7" fill="var(--incorrect)"/>
    <text class="lbl" x="616" y="101" text-anchor="end" fill="var(--incorrect)">&minus;1</text>
    <text class="sm"  x="596" y="101" text-anchor="end" fill="var(--incorrect)">deprotonated</text>
  </g>
  <g class="grp g-asp">
    <text class="lbl" x="24" y="139">Asp side chain</text>
    <text class="sm"  x="150" y="139">pKa 3.9</text>
    <line class="axis" x1="230" y1="134" x2="460" y2="134" stroke-width="1"/>
    <circle cx="305" cy="134" r="7" fill="var(--incorrect)"/>
    <text class="lbl" x="616" y="139" text-anchor="end" fill="var(--incorrect)">&minus;1</text>
    <text class="sm"  x="596" y="139" text-anchor="end" fill="var(--incorrect)">deprotonated</text>
  </g>
  <g class="grp g-his">
    <text class="lbl" x="24" y="177">His side chain</text>
    <text class="sm"  x="150" y="177">pKa 6.0</text>
    <line class="axis" x1="230" y1="172" x2="460" y2="172" stroke-width="1"/>
    <circle cx="345" cy="172" r="7" fill="var(--muted)"/>
    <text class="lbl" x="616" y="177" text-anchor="end" fill="var(--muted)">&asymp; 0</text>
    <text class="sm"  x="590" y="177" text-anchor="end" fill="var(--muted)">~96% deprot.</text>
  </g>
  <g class="grp g-nh3">
    <text class="lbl" x="24" y="215">α-NH₃⁺</text>
    <text class="sm"  x="150" y="215">pKa 8.0</text>
    <line class="axis" x1="230" y1="210" x2="460" y2="210" stroke-width="1"/>
    <circle cx="383" cy="210" r="7" fill="var(--correct)"/>
    <text class="lbl" x="616" y="215" text-anchor="end" fill="var(--correct)">+1</text>
    <text class="sm"  x="596" y="215" text-anchor="end" fill="var(--correct)">protonated</text>
  </g>
  <g class="grp g-lys">
    <text class="lbl" x="24" y="253">Lys side chain</text>
    <text class="sm"  x="150" y="253">pKa 10.5</text>
    <line class="axis" x1="230" y1="248" x2="460" y2="248" stroke-width="1"/>
    <circle cx="431" cy="248" r="7" fill="var(--correct)"/>
    <text class="lbl" x="616" y="253" text-anchor="end" fill="var(--correct)">+1</text>
    <text class="sm"  x="596" y="253" text-anchor="end" fill="var(--correct)">protonated</text>
  </g>

  <g class="tally">
    <rect x="170" y="326" width="300" height="28" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="345" text-anchor="middle" fill="var(--accent)">two &minus; · two + · His neutral</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Go group by group, one rule"},
    {t: 5, cap: "pH above pKa → deprotonated · below → protonated"},
    {t: 11, cap: "α-COOH (3.1) and Asp (3.9): both deprotonated, −1 each"},
    {t: 19, cap: "His (6.0) is ~96% deprotonated: essentially neutral"},
    {t: 26, cap: "α-NH₃⁺ (8.0) is above pH: stays protonated, +1"},
    {t: 32, cap: "Lys (10.5): stays protonated, +1"},
    {t: 38, cap: "Two −, two +, His neutral"}
  ],
  transcript:
    "Do not try to feel this out, go group by group with one rule. If the pH is above a " +
    "group's pKa, that group has lost its proton; if the pH is below, it keeps it. The " +
    "alpha carboxyl at 3.1 and the aspartate side chain at 3.9 are both far below 7.4, so " +
    "both are deprotonated and carry negative one. Histidine sits at 6.0, about one and a " +
    "half units below the pH, so it is roughly 96 percent deprotonated and essentially " +
    "neutral. The alpha amino group at 8.0 is above the pH, so it keeps its proton and " +
    "carries positive one. Lysine at 10.5 is far above the pH, so it stays protonated too. " +
    "Two negatives, two positives, and a neutral histidine. The trap is assuming histidine " +
    "must be charged simply because it is a base."
});
