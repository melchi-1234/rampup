/* Sally-Anne false-belief task — the shift that marks theory of mind. */
RU_EX.reg("k1j0ormc", {
  dur: 36,
  css: `
svg[data-x="k1j0ormc"]{font-family:inherit}
svg[data-x="k1j0ormc"] .lbl{fill:var(--text);font-size:15px;font-weight:700}
svg[data-x="k1j0ormc"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1j0ormc"] .body{fill:var(--accent);opacity:.85}
svg[data-x="k1j0ormc"] .body2{fill:var(--warn);opacity:.85}
svg[data-x="k1j0ormc"] .head{fill:var(--text);opacity:.9}
svg[data-x="k1j0ormc"] .basket{fill:var(--warn);opacity:.30;stroke:var(--warn);stroke-width:2.5}
svg[data-x="k1j0ormc"] .box{fill:var(--accent);opacity:.30;stroke:var(--accent);stroke-width:2.5}

/* the marble's journey */
svg[data-x="k1j0ormc"] #marble{transition:transform .9s ease}
svg[data-x="k1j0ormc"][data-step="2"] #marble,svg[data-x="k1j0ormc"][data-step="3"] #marble,
svg[data-x="k1j0ormc"][data-step="4"] #marble,svg[data-x="k1j0ormc"][data-step="5"] #marble,
svg[data-x="k1j0ormc"][data-step="6"] #marble{transform:translate(196px,0)}

/* Sally leaves and comes back */
svg[data-x="k1j0ormc"] #sally{transition:transform .9s ease, opacity .6s ease}
svg[data-x="k1j0ormc"][data-step="1"] #sally,svg[data-x="k1j0ormc"][data-step="2"] #sally{transform:translate(-150px,0);opacity:.18}

svg[data-x="k1j0ormc"] .gone{opacity:0;transition:opacity .4s ease}
svg[data-x="k1j0ormc"][data-step="1"] .gone,svg[data-x="k1j0ormc"][data-step="2"] .gone{opacity:1}

svg[data-x="k1j0ormc"] .ask{opacity:0;transition:opacity .45s ease}
svg[data-x="k1j0ormc"][data-step="3"] .ask{opacity:1}

svg[data-x="k1j0ormc"] .young{opacity:0;transition:opacity .45s ease}
svg[data-x="k1j0ormc"][data-step="4"] .young,svg[data-x="k1j0ormc"][data-step="5"] .young,
svg[data-x="k1j0ormc"][data-step="6"] .young{opacity:1}
svg[data-x="k1j0ormc"] .older{opacity:0;transition:opacity .45s ease}
svg[data-x="k1j0ormc"][data-step="5"] .older,svg[data-x="k1j0ormc"][data-step="6"] .older{opacity:1}
svg[data-x="k1j0ormc"] .verdict{opacity:0;transition:opacity .5s ease}
svg[data-x="k1j0ormc"][data-step="6"] .verdict{opacity:1}

/* thought bubble showing what Sally believes */
svg[data-x="k1j0ormc"] .think{opacity:0;transition:opacity .5s ease}
svg[data-x="k1j0ormc"][data-step="3"] .think,svg[data-x="k1j0ormc"][data-step="5"] .think,
svg[data-x="k1j0ormc"][data-step="6"] .think{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sally-Anne false belief task">
  <!-- Sally: head sits directly on the torso, or it reads as two loose shapes -->
  <g id="sally">
    <circle class="head" cx="72" cy="172" r="15"/>
    <rect class="body" x="55" y="189" width="34" height="46" rx="16"/>
    <text class="sm" x="72" y="252" text-anchor="middle">Sally</text>
  </g>
  <text class="gone sm" x="72" y="140" text-anchor="middle" style="fill:var(--muted)">(out of the room)</text>

  <!-- Anne -->
  <g>
    <circle class="head" cx="556" cy="172" r="15"/>
    <rect class="body2" x="539" y="189" width="34" height="46" rx="16"/>
    <text class="sm" x="556" y="252" text-anchor="middle">Anne</text>
  </g>

  <!-- basket and box -->
  <path class="basket" d="M186 196 h72 l-9 44 h-54 z"/>
  <text class="sm" x="222" y="258" text-anchor="middle">basket</text>
  <rect class="box" x="382" y="196" width="72" height="44" rx="5"/>
  <text class="sm" x="418" y="258" text-anchor="middle">box</text>

  <!-- the marble -->
  <circle id="marble" cx="222" cy="214" r="9" fill="var(--incorrect)"/>

  <!-- the question -->
  <g class="ask">
    <rect x="196" y="36" width="248" height="34" rx="17" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="59" text-anchor="middle" style="fill:var(--accent)">
      Where will Sally look?
    </text>
  </g>

  <!-- Sally's belief, drawn as a thought bubble over her head -->
  <g class="think">
    <circle cx="100" cy="140" r="5" fill="var(--card)" stroke="var(--border-strong)" stroke-width="1.5"/>
    <circle cx="112" cy="124" r="7" fill="var(--card)" stroke="var(--border-strong)" stroke-width="1.5"/>
    <rect x="118" y="74" width="146" height="42" rx="16" fill="var(--card)"
          stroke="var(--border-strong)" stroke-width="1.8"/>
    <text class="sm" x="152" y="101" text-anchor="middle">she thinks</text>
    <path class="basket" d="M204 84 h30 l-4 20 h-22 z"/>
    <circle cx="219" cy="93" r="5" fill="var(--incorrect)"/>
  </g>

  <!-- the two answers -->
  <g class="young">
    <rect x="52" y="284" width="252" height="30" rx="15" fill="var(--incorrect)" opacity=".14"/>
    <text class="sm" x="178" y="304" text-anchor="middle" style="fill:var(--incorrect)">
      3-year-olds: “the box”, where it really is
    </text>
  </g>
  <g class="older">
    <rect x="330" y="284" width="258" height="30" rx="15" fill="var(--correct)" opacity=".14"/>
    <text class="sm" x="459" y="304" text-anchor="middle" style="fill:var(--correct)">
      5-year-olds: “the basket”, Sally's belief
    </text>
  </g>
  <g class="verdict">
    <text class="lbl" x="320" y="342" text-anchor="middle" style="fill:var(--accent)">
      holding a belief that differs from reality = theory of mind
    </text>
  </g>
</svg>`,
  steps: [
    {t: 0,   cap: "Sally puts her marble in the basket"},
    {t: 4.5, cap: "Sally leaves the room"},
    {t: 8.5, cap: "While she is gone, Anne moves the marble to the box"},
    {t: 13.5, cap: "Sally comes back. Where will she look for it?"},
    {t: 19,  cap: "Most 3-year-olds say the box, where the marble really is"},
    {t: 24.5, cap: "Most 5-year-olds say the basket, where Sally still believes it is"},
    {t: 30,  cap: "Representing a false belief is theory of mind"}
  ],
  transcript:
    "Sally puts her marble in the basket, then leaves the room. While she is gone, Anne " +
    "moves the marble into the box. Sally comes back, and the child is asked where Sally " +
    "will look. Most 3-year-olds say the box, because they report where the marble actually is, " +
    "because they cannot yet separate their own knowledge from Sally's. Most 5-year-olds " +
    "say the basket, because they can represent that Sally holds a FALSE belief: she thinks " +
    "it is still where she left it. Understanding that another person's mental state can " +
    "differ from reality, and from what you yourself know, is theory of mind, and it " +
    "typically emerges around ages four to five, exactly the shift this task captures. " +
    "It is not conservation, formal operations, or object permanence."
});
