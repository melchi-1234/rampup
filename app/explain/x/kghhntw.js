/* Same osmolarity, opposite outcomes: sucrose is trapped, urea is not. */
RU_EX.reg("kghhntw", {
  dur: 42,
  css: `
svg[data-x="kghhntw"]{font-family:inherit}
svg[data-x="kghhntw"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kghhntw"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kghhntw"] .dish{fill:var(--card);stroke:var(--border-strong);stroke-width:2}
svg[data-x="kghhntw"] .cell{fill:var(--incorrect);opacity:.5;stroke:var(--incorrect);stroke-width:2.5}
svg[data-x="kghhntw"] #cellB{transition:r .9s ease, opacity .4s ease}
svg[data-x="kghhntw"][data-step="6"] #cellB{r:64px;opacity:0}
/* the urea particles migrate inside */
svg[data-x="kghhntw"] .u{transition:transform 1.1s ease}
svg[data-x="kghhntw"][data-step="4"] .ua,svg[data-x="kghhntw"][data-step="5"] .ua,
svg[data-x="kghhntw"][data-step="6"] .ua{transform:translate(30px,32px)}
svg[data-x="kghhntw"][data-step="4"] .ub,svg[data-x="kghhntw"][data-step="5"] .ub,
svg[data-x="kghhntw"][data-step="6"] .ub{transform:translate(-34px,26px)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sucrose versus urea at equal osmolarity">
  <text class="lbl" x="320" y="30" text-anchor="middle">both 300 mOsm &mdash; identical on paper</text>

  <!-- Solution A: sucrose -->
  <rect class="dish" x="30" y="56" width="256" height="196" rx="12"/>
  <text class="lbl" x="158" y="80" text-anchor="middle">A &middot; sucrose</text>
  <circle class="cell" cx="158" cy="170" r="42"/>
  <circle cx="70"  cy="106" r="7" fill="var(--accent)"/>
  <circle cx="250" cy="120" r="7" fill="var(--accent)"/>
  <circle cx="90"  cy="228" r="7" fill="var(--accent)"/>
  <text class="sm" x="158" y="272" text-anchor="middle" data-from="2" style="fill:var(--accent)">cannot cross &mdash; all 300 counts</text>
  <text class="lbl" x="158" y="294" text-anchor="middle" data-from="3" style="fill:var(--correct)">balanced → cell is fine</text>

  <!-- Solution B: urea -->
  <rect class="dish" x="354" y="56" width="256" height="196" rx="12"/>
  <text class="lbl" x="482" y="80" text-anchor="middle">B &middot; urea</text>
  <circle class="cell" id="cellB" cx="482" cy="170" r="42"/>
  <circle class="u ua" cx="404" cy="112" r="7" fill="var(--warn)"/>
  <circle class="u ub" cx="566" cy="124" r="7" fill="var(--warn)"/>
  <text class="sm" x="482" y="272" text-anchor="middle" data-from="4" style="fill:var(--warn)">crosses freely &mdash; equalises inside and out</text>
  <text class="lbl" x="482" y="294" text-anchor="middle" data-from="5" style="fill:var(--warn)">equal both sides → counts as ZERO</text>

  <g data-from="6">
    <circle cx="482" cy="170" r="56" fill="none" stroke="var(--incorrect)" stroke-width="4" stroke-dasharray="12 10"/>
    <text class="lbl" x="482" y="176" text-anchor="middle" style="fill:var(--incorrect)">lyses</text>
  </g>

  <text class="sm" x="320" y="326" text-anchor="middle" data-from="1">osmolarity counts every particle &middot; tonicity counts only the ones that CANNOT cross</text>
  <g data-from="6">
    <rect x="120" y="336" width="400" height="0.1" fill="none"/>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Both solutions are 300 mOsm. Identical on paper."},
    {t: 5, cap: "Osmolarity counts all particles. Tonicity counts only trapped ones."},
    {t: 12, cap: "Sucrose can't cross: all 300 counts"},
    {t: 18, cap: "Balanced → nothing moves → the cell is fine"},
    {t: 23, cap: "Urea crosses freely and equalises"},
    {t: 28, cap: "Equal on both sides → it counts as ZERO"},
    {t: 34, cap: "Cell solutes unopposed → water in → it lyses"}
  ]
});
