/* A 2x2 on the only two things that matter: direction of the behavior, and added vs removed. */
RU_EX.reg("ksfij6m", {
  dur: 34,
  css: `
svg[data-x="ksfij6m"]{font-family:inherit}
svg[data-x="ksfij6m"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="ksfij6m"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="ksfij6m"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="ksfij6m"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sorting operant conditioning with a two by two">
  <text class="tag" x="24" y="26">BUZZER SOUNDS UNTIL SHE BUCKLES &#183; NOW SHE BUCKLES AT ONCE</text>
  <g data-from="1">
    <text class="lbl" x="24" y="56" style="fill:var(--accent)">two questions settle all four choices</text>
    <text class="sm"  x="24" y="76">did the behavior go UP or DOWN &#183; was something ADDED or REMOVED</text>
  </g>
  <text class="tag" x="210" y="112">ADDED (+)</text>
  <text class="tag" x="410" y="112">REMOVED (&#8722;)</text>
  <text class="tag" x="24"  y="152">BEHAVIOR UP</text>
  <text class="tag" x="24"  y="232">BEHAVIOR DOWN</text>
  <rect class="chip" x="190" y="128" width="176" height="52" rx="10"/>
  <rect class="chip" x="390" y="128" width="176" height="52" rx="10"/>
  <rect class="chip" x="190" y="208" width="176" height="52" rx="10"/>
  <rect class="chip" x="390" y="208" width="176" height="52" rx="10"/>
  <text class="sm" x="278" y="158" text-anchor="middle">positive reinforcement</text>
  <text class="sm" x="478" y="158" text-anchor="middle">negative reinforcement</text>
  <text class="sm" x="278" y="238" text-anchor="middle">positive punishment</text>
  <text class="sm" x="478" y="238" text-anchor="middle">negative punishment</text>
  <g data-from="2">
    <rect x="184" y="200" width="388" height="68" rx="10" fill="var(--incorrect)" fill-opacity=".12"/>
    <text class="sm" x="378" y="286" text-anchor="middle" style="fill:var(--incorrect)">her buckling went UP, so the whole bottom row is out</text>
  </g>
  <g data-from="3">
    <line x1="196" y1="154" x2="360" y2="154" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="24" y="310" style="fill:var(--warn)">and nothing was added &#8212; the buzzer STOPPED</text>
  </g>
  <g data-from="4">
    <rect x="390" y="128" width="176" height="52" rx="10" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm" x="478" y="158" text-anchor="middle" style="fill:var(--correct)">negative reinforcement</text>
  </g>
  <g data-from="5">
    <text class="lbl" x="24" y="342" style="fill:var(--accent)">&#8220;negative&#8221; means SUBTRACTED, not unpleasant</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Buzzer sounds until she buckles · now she buckles fast"},
    {t: 5.15, cap: "Two questions: up or down? added or removed?"},
    {t: 12.3, cap: "Behavior INCREASED → reinforcement, not punishment"},
    {t: 17.77, cap: "Something was REMOVED — the buzzer stopped"},
    {t: 22.36, cap: "Removed + behavior up = negative reinforcement"},
    {t: 27.03, cap: "'Negative' means subtracted, not bad"}
  ]
});
