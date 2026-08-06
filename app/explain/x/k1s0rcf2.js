/* Tonicity vs osmolarity — urea is a penetrating solute, so the cell lyses. */
RU_EX.reg("k1s0rcf2", {
  dur: 35,
  css: `
svg[data-x="k1s0rcf2"]{font-family:inherit}
svg[data-x="k1s0rcf2"] .lbl{fill:var(--text);font-size:15px;font-weight:700}
svg[data-x="k1s0rcf2"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1s0rcf2"] .dish{fill:var(--card);stroke:var(--border-strong);stroke-width:2}
svg[data-x="k1s0rcf2"] .cell{fill:var(--incorrect);opacity:.55;stroke:var(--incorrect);stroke-width:2.5}
svg[data-x="k1s0rcf2"] .urea{fill:var(--warn)}

/* right-hand cell swells, then bursts */
svg[data-x="k1s0rcf2"] #cellY{transition:r .9s ease, opacity .35s ease}
svg[data-x="k1s0rcf2"][data-step="5"] #cellY{r:62px}
svg[data-x="k1s0rcf2"][data-step="6"] #cellY{r:70px;opacity:0}

svg[data-x="k1s0rcf2"] .u-out{transition:transform 1.1s ease}
svg[data-x="k1s0rcf2"][data-step="2"] .u-out{transform:translate(0,0)}
svg[data-x="k1s0rcf2"][data-step="3"] .u1{transform:translate(26px,34px)}
svg[data-x="k1s0rcf2"][data-step="3"] .u2{transform:translate(-30px,26px)}
svg[data-x="k1s0rcf2"][data-step="3"] .u3{transform:translate(14px,-30px)}
svg[data-x="k1s0rcf2"][data-step="4"] .u1,svg[data-x="k1s0rcf2"][data-step="5"] .u1,svg[data-x="k1s0rcf2"][data-step="6"] .u1{transform:translate(26px,34px)}
svg[data-x="k1s0rcf2"][data-step="4"] .u2,svg[data-x="k1s0rcf2"][data-step="5"] .u2,svg[data-x="k1s0rcf2"][data-step="6"] .u2{transform:translate(-30px,26px)}
svg[data-x="k1s0rcf2"][data-step="4"] .u3,svg[data-x="k1s0rcf2"][data-step="5"] .u3,svg[data-x="k1s0rcf2"][data-step="6"] .u3{transform:translate(14px,-30px)}

svg[data-x="k1s0rcf2"] .cross{opacity:0;transition:opacity .4s ease}
svg[data-x="k1s0rcf2"][data-step="2"] .cross,svg[data-x="k1s0rcf2"][data-step="3"] .cross{opacity:1}

svg[data-x="k1s0rcf2"] .water{opacity:0}
svg[data-x="k1s0rcf2"][data-step="5"] .water{opacity:1;animation:k1sIn 1.3s ease-in-out infinite}
@keyframes k1sIn{0%{opacity:0;transform:scale(1)}40%{opacity:1}100%{opacity:0;transform:scale(.72)}}

svg[data-x="k1s0rcf2"] .burst{opacity:0}
svg[data-x="k1s0rcf2"][data-step="6"] .burst{opacity:1;animation:k1sPop .8s ease-out forwards}
@keyframes k1sPop{from{transform:scale(.4);opacity:1}to{transform:scale(1.5);opacity:0}}

svg[data-x="k1s0rcf2"] .rule{opacity:0;transition:opacity .45s ease}
svg[data-x="k1s0rcf2"][data-step="4"] .rule,svg[data-x="k1s0rcf2"][data-step="5"] .rule,svg[data-x="k1s0rcf2"][data-step="6"] .rule{opacity:1}
svg[data-x="k1s0rcf2"] .verdict{opacity:0;transition:opacity .5s ease}
svg[data-x="k1s0rcf2"][data-step="6"] .verdict{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Red blood cells in saline and in urea">
  <!-- LEFT: isotonic saline -->
  <rect class="dish" x="34" y="72" width="248" height="196" rx="12"/>
  <text class="lbl" x="158" y="52" text-anchor="middle">Solution X</text>
  <text class="sm" x="158" y="290" text-anchor="middle">0.9% NaCl, cannot cross</text>
  <text class="sm" x="158" y="308" text-anchor="middle">isotonic: nothing happens</text>
  <circle class="cell" cx="158" cy="170" r="42"/>

  <!-- RIGHT: 300 mM urea -->
  <rect class="dish" x="358" y="72" width="248" height="196" rx="12"/>
  <text class="lbl" x="482" y="52" text-anchor="middle">Solution Y</text>
  <text class="sm" x="482" y="290" text-anchor="middle">300 mM urea, crosses freely</text>
  <circle class="cell" id="cellY" cx="482" cy="170" r="42"/>

  <!-- water rushing in -->
  <g class="water" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round">
    <path d="M482 88 L482 116 M474 108 L482 118 L490 108"/>
    <path d="M400 170 L428 170 M420 162 L430 170 L420 178"/>
    <path d="M564 170 L536 170 M544 162 L534 170 L544 178"/>
    <path d="M482 252 L482 224 M474 232 L482 222 L490 232"/>
  </g>
  <g class="burst">
    <circle cx="482" cy="170" r="52" fill="none" stroke="var(--incorrect)" stroke-width="4"
            stroke-dasharray="12 10"/>
  </g>

  <!-- urea particles that migrate inside -->
  <g class="u-out"><circle class="urea u1" cx="418" cy="112" r="6"/></g>
  <g class="u-out"><circle class="urea u2" cx="548" cy="126" r="6"/></g>
  <g class="u-out"><circle class="urea u3" cx="452" cy="238" r="6"/></g>

  <!-- membrane is no barrier to urea -->
  <g class="cross">
    <text class="sm" x="482" y="336" text-anchor="middle" style="fill:var(--warn)">
      urea equilibrates across the membrane
    </text>
  </g>

  <g class="rule">
    <rect x="146" y="316" width="348" height="30" rx="15" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="336" text-anchor="middle" style="fill:var(--accent)">
      tonicity counts only solutes that CANNOT cross
    </text>
  </g>
  <g class="verdict">
    <rect x="392" y="132" width="180" height="34" rx="17" fill="var(--incorrect)" opacity=".18"/>
    <text class="lbl" x="482" y="155" text-anchor="middle" style="fill:var(--incorrect)">the cell lyses</text>
  </g>
</svg>`,
  steps: [
    {t: 0,   cap: "Solution X is isotonic saline, the cell keeps its shape"},
    {t: 4.5, cap: "Solution Y is 300 mM urea, so its osmolarity is high"},
    {t: 9.5, cap: "But urea crosses this membrane freely and rapidly"},
    {t: 14.5, cap: "So urea equilibrates, same concentration inside and out"},
    {t: 19.5, cap: "Tonicity counts only NON-penetrating solutes"},
    {t: 25,  cap: "The cell's trapped proteins and ions win, so water rushes in"},
    {t: 30,  cap: "The cell lyses. High osmolarity, but hypotonic."}
  ],
  transcript:
    "In isotonic saline the cell keeps its shape, because sodium and chloride cannot cross " +
    "the membrane over this timescale. Solution Y has 300 millimolar urea, which sounds like " +
    "a lot of solute, but urea crosses the red blood cell membrane freely and rapidly. That " +
    "means it equilibrates to the same concentration inside and out, and contributes nothing " +
    "to the effective osmotic gradient. Tonicity only counts solutes that cannot cross. The " +
    "cell's own trapped proteins and ions are therefore the only effective solutes left, " +
    "making the inside hyperosmotic, so water flows in and the cell bursts. The urea solution " +
    "has a substantial osmolarity and is still hypotonic, and those are two different things."
});
