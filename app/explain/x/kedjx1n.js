/* Tonicity: the direction water moved tells you where the solute is. The real
   trap is an option that names the right word and then contradicts it, so the
   scene puts both halves of every choice on screen. Beat 1 is the base frame. */
RU_EX.reg("kedjx1n", {
  dur: 32,
  css: `
svg[data-x="kedjx1n"]{font-family:inherit}
svg[data-x="kedjx1n"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kedjx1n"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kedjx1n"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kedjx1n"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Reading tonicity from the direction water moved">
  <text class="tag" x="24" y="26">WATER LEFT THE CELL &#183; THE CELL SHRANK</text>

  <!-- the cell, before and after -->
  <circle cx="110" cy="106" r="40" fill="var(--surface-2)" stroke="var(--text)" stroke-width="1.8"/>
  <text class="sm" x="110" y="164" text-anchor="middle">before</text>
  <circle cx="260" cy="106" r="26" fill="var(--surface-2)" stroke="var(--text)" stroke-width="1.8"/>
  <text class="sm" x="260" y="164" text-anchor="middle">after &#8212; shrunken</text>
  <line x1="158" y1="106" x2="220" y2="106" stroke="var(--accent)" stroke-width="2.5"/>
  <polygon points="220,101 231,106 220,111" fill="var(--accent)"/>
  <text class="sm" x="189" y="94" text-anchor="middle" style="fill:var(--accent)">water out</text>

  <!-- beat 2: water follows solute -->
  <g data-from="1">
    <rect x="24" y="186" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="206" text-anchor="middle" style="fill:var(--accent)">water moves TOWARD solute &#183; it left, so the solute is outside</text>
  </g>

  <!-- beat 3: name it -->
  <g data-from="2">
    <text class="lbl" x="320" y="240" text-anchor="middle" style="fill:var(--correct)">the solution is HYPERTONIC to the cytoplasm</text>
  </g>

  <!-- the four options, word column then the rest of the claim -->
  <text class="sm" x="24" y="272">hypotonic</text>
  <text class="sm" x="24" y="294">isotonic</text>
  <text class="sm" x="24" y="316">hypertonic</text>
  <text class="sm" x="24" y="338">hypertonic</text>
  <text class="sm" x="140" y="272">lower solute outside</text>
  <text class="sm" x="140" y="294">equal solute</text>
  <text class="sm" x="140" y="316">higher solute outside</text>
  <text class="sm" x="140" y="338">lower solute outside</text>

  <!-- beat 4: hypotonic would have swollen it -->
  <g data-from="3">
    <text class="sm" x="330" y="272" style="fill:var(--incorrect)">water would come IN and swell the cell</text>
  </g>
  <!-- beat 5: isotonic moves nothing -->
  <g data-from="4">
    <text class="sm" x="330" y="294" style="fill:var(--incorrect)">nothing would move on balance</text>
  </g>
  <!-- beat 6: the right word attached to the wrong half -->
  <g data-from="5">
    <rect x="18" y="302" width="598" height="24" rx="8" fill="var(--correct)" fill-opacity=".18"/>
    <text class="sm" x="330" y="316" style="fill:var(--correct)">both halves agree &#8212; this one</text>
    <rect x="18" y="326" width="598" height="24" rx="8" fill="var(--incorrect)" fill-opacity=".16"/>
    <text class="sm" x="330" y="338" style="fill:var(--incorrect)">right word, wrong second half &#8212; read BOTH</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Water moved OUT · the cell shrank"},
    {t: 5.39,  cap: "Water follows solute · it left → solute is outside"},
    {t: 11.58, cap: "The solution is HYPERTONIC to the cytoplasm"},
    {t: 15.13, cap: "Hypotonic → water in → the cell swells"},
    {t: 20.28, cap: "Isotonic → no net movement either way"},
    {t: 24.15, cap: "One option says hypertonic AND lower solute — read both"}
  ]
});
