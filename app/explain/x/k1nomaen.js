/* CARS: build the author's test, then run each option through it. */
RU_EX.reg("k1nomaen", {
  dur: 45,
  css: `
svg[data-x="k1nomaen"]{font-family:inherit}
svg[data-x="k1nomaen"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1nomaen"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1nomaen"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1nomaen"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Testing each option against the author's definition of abuse">
  <text class="sm" x="320" y="28" text-anchor="middle">he defines it — so hold each option against the definition</text>

  <g data-from="1">
    <rect class="box" x="24" y="40" width="286" height="52" rx="14"/>
    <text class="tag" x="40" y="60">NORMAL</text>
    <text class="sm"  x="40" y="80">the frame argues “this deserves attention”</text>
  </g>
  <g data-from="2">
    <rect x="330" y="40" width="286" height="52" rx="14" fill="var(--incorrect)" opacity=".16"/>
    <text class="tag" x="346" y="60" style="fill:var(--incorrect)">ABUSE</text>
    <text class="sm"  x="346" y="80" style="fill:var(--incorrect)">borrowed gravity for something unearned</text>
  </g>

  <!-- the two conditions -->
  <g data-from="3">
    <rect x="24" y="104" width="592" height="38" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="128" text-anchor="middle" style="fill:var(--accent)">so it needs BOTH: an undeserving work · and the setting doing the work</text>
  </g>

  <!-- run each option through -->
  <g data-from="4">
    <rect class="box" x="24" y="156" width="592" height="34" rx="12"/>
    <text class="sm" x="40" y="178">A · a masterwork loses force with no frame</text>
    <text class="sm" x="600" y="178" text-anchor="end" style="fill:var(--incorrect)">shows the POWER, not abuse</text>
  </g>
  <g data-from="5">
    <rect class="box" x="24" y="196" width="592" height="34" rx="12"/>
    <text class="sm" x="40" y="218">B · ordinary cloth commands attention in a gallery</text>
    <text class="sm" x="600" y="218" text-anchor="end" style="fill:var(--incorrect)">his own example of the power</text>
  </g>
  <g data-from="5">
    <rect class="box" x="24" y="236" width="592" height="34" rx="12"/>
    <text class="sm" x="40" y="258">D · a viewer studies a masterwork closely</text>
    <text class="sm" x="600" y="258" text-anchor="end" style="fill:var(--incorrect)">deserving work → not abuse</text>
  </g>
  <g data-from="6">
    <rect x="24" y="276" width="592" height="42" rx="12"
          fill="var(--correct)" fill-opacity=".2" stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm"  x="40" y="296" style="fill:var(--correct)">C · a shallow work draws reverent crowds because of an imposing setting</text>
    <text class="lbl" x="40" y="313" style="fill:var(--correct)">undeserving ✓ · the setting is doing it ✓</text>
  </g>
  <text class="sm" x="320" y="340" text-anchor="middle" data-from="6">both conditions met — only C</text>
</svg>`,
  steps: [
    {t: 0, cap: "He defines it — hold each option against that"},
    {t: 6, cap: "Normal job: the frame argues “this deserves attention”"},
    {t: 13, cap: "ABUSE = borrowed gravity for something unearned"},
    {t: 19, cap: "Two conditions: undeserving work, reverence FROM the setting"},
    {t: 26, cap: "A shows the power working, not abuse"},
    {t: 32, cap: "B is his own example of the power"},
    {t: 38, cap: "C: undeserving + setting does the work → C"}
  ]
});
