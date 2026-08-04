/* CARS pilot — a different genre: map the ARGUMENT, not the content.
   Nothing in the passage is depicted. What's drawn is the structure of the
   claim and where each answer choice lands relative to it. */
RU_EX.reg("k1edpgjv", {
  dur: 45,
  css: `
svg[data-x="k1edpgjv"]{font-family:inherit}
svg[data-x="k1edpgjv"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1edpgjv"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1edpgjv"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1edpgjv"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="The argument's structure and where each choice lands">
  <!-- the surface claim -->
  <text class="tag" x="24" y="34" data-from="1">WHAT HE SAYS</text>
  <rect class="box" x="24" y="44" width="592" height="42" rx="14" data-from="1"/>
  <text class="lbl" x="320" y="70" text-anchor="middle" data-from="1">“a map is an argument about what deserves to be seen”</text>

  <!-- what it rests on -->
  <path d="M320 90 V112" stroke="var(--muted)" stroke-width="2.5" data-from="2"
        marker-end="url(#k1eA)"/>
  <defs><marker id="k1eA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
    orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <text class="sm" x="334" y="106" data-from="2">rests on…</text>

  <g data-from="2">
    <rect x="24" y="116" width="592" height="52" rx="14"
          fill="var(--accent)" fill-opacity=".18" stroke="var(--accent)" stroke-width="2.5"/>
    <text class="tag" x="40" y="136" fill="var(--accent)">LOAD-BEARING</text>
    <text class="lbl" x="320" y="156" text-anchor="middle" fill="var(--accent)">choosing is unavoidable — no map can stop choosing</text>
  </g>
  <text class="sm" x="320" y="186" text-anchor="middle" data-from="3" fill="var(--incorrect)">knock this out and everything above it falls</text>

  <!-- the four choices, placed relative to the claim -->
  <g data-from="4">
    <rect class="box" x="24" y="200" width="288" height="44" rx="12"/>
    <text class="sm" x="40" y="220">B · two mapmakers emphasise different things</text>
    <text class="sm" x="40" y="236" fill="var(--incorrect)">that IS selection happening → supports him</text>
    <rect class="box" x="328" y="200" width="288" height="44" rx="12"/>
    <text class="sm" x="344" y="220">D · governments commissioned maps</text>
    <text class="sm" x="344" y="236" fill="var(--incorrect)">interested selection → supports him</text>
  </g>
  <g data-from="5">
    <rect class="box" x="24" y="252" width="288" height="44" rx="12"/>
    <text class="sm" x="40" y="272">C · readers trust detailed maps</text>
    <text class="sm" x="40" y="288" fill="var(--incorrect)">his own point, restated back at him</text>
  </g>

  <g data-from="6">
    <rect x="328" y="252" width="288" height="44" rx="12"
          fill="var(--correct)" fill-opacity=".2" stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm"  x="344" y="272" fill="var(--correct)">A · satellites record with no human choosing</text>
    <text class="lbl" x="344" y="289" fill="var(--correct)">a map that never chose → the claim breaks</text>
    <path d="M472 250 V172" stroke="var(--correct)" stroke-width="3" stroke-dasharray="6 4"/>
  </g>

  <text class="sm" x="320" y="322" text-anchor="middle" data-from="3">three choices describe selection · only one denies it is necessary</text>
  <g data-from="6">
    <rect x="120" y="330" width="400" height="26" rx="13" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="349" text-anchor="middle" fill="var(--accent)">find the load-bearing claim, then aim at it</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "First: what exactly is the author claiming?"},
    {t: 6, cap: "“A map is an argument about what deserves to be seen”"},
    {t: 13, cap: "Load-bearing: choosing is UNAVOIDABLE"},
    {t: 21, cap: "Knock that out and the argument falls"},
    {t: 26, cap: "B and D show selection happening — they SUPPORT him"},
    {t: 34, cap: "C is the author's own point, restated"},
    {t: 39, cap: "Only A attacks the load-bearing claim → A"}
  ]
});
