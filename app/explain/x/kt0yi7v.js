/* Two numbers, then raise afterload and recompute both. Beat 1 is the base frame. */
RU_EX.reg("kt0yi7v", {
  dur: 41,
  css: `
svg[data-x="kt0yi7v"]{font-family:inherit}
svg[data-x="kt0yi7v"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kt0yi7v"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kt0yi7v"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kt0yi7v"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="What raising afterload does to stroke volume and ejection fraction">
  <text class="tag" x="24" y="26">ONE BEAT, THEN AFTERLOAD IS RAISED</text>
  <text class="tag" x="24"  y="66">BEFORE</text>
  <text class="tag" x="330" y="66">AFTER</text>
  <line x1="316" y1="52" x2="316" y2="300" stroke="var(--border-strong)" stroke-width="1"/>
  <text class="sm" x="24" y="96">fills to (EDV)</text>
  <text class="lbl" x="230" y="96">150 mL</text>
  <g data-from="1">
    <text class="sm"  x="24"  y="128">empties to (ESV)</text>
    <text class="lbl" x="230" y="128">50 mL</text>
    <text class="sm"  x="24"  y="160">stroke volume</text>
    <text class="lbl" x="230" y="160" fill="var(--accent)">100 mL</text>
  </g>
  <g data-from="2">
    <text class="sm"  x="24"  y="192">ejection fraction</text>
    <text class="lbl" x="230" y="192" fill="var(--accent)">&#8776; 67%</text>
    <text class="sm"  x="24"  y="212">100 / 150</text>
  </g>
  <g data-from="3">
    <text class="sm"  x="330" y="96">fills the same</text>
    <text class="lbl" x="536" y="96">150 mL</text>
    <text class="sm"  x="330" y="128">cannot empty as far</text>
    <text class="lbl" x="536" y="128" fill="var(--warn)">75 mL</text>
  </g>
  <g data-from="4">
    <text class="sm"  x="330" y="160">stroke volume</text>
    <text class="lbl" x="536" y="160" fill="var(--incorrect)">75 mL</text>
    <text class="sm"  x="330" y="180">150 &#8722; 75</text>
  </g>
  <g data-from="5">
    <text class="sm"  x="330" y="212">ejection fraction</text>
    <text class="lbl" x="536" y="212" fill="var(--incorrect)">50%</text>
    <text class="sm"  x="330" y="232">75 / 150</text>
    <rect x="24" y="256" width="592" height="34" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="320" y="278" text-anchor="middle" fill="var(--correct)">BOTH fall &#8212; filling never changed, so the fraction had to move too</text>
    <text class="sm" x="24" y="318" fill="var(--incorrect)">the trap says the fraction holds at 67% because it "reflects only contractility"</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "EDV 150 mL · ESV 50 mL"},
    {t: 7.55, cap: "SV = 150 − 50 = 100 mL"},
    {t: 12.62, cap: "EF = SV / EDV = 100/150 ≈ 67%"},
    {t: 19.61, cap: "Raise afterload → it empties less → ESV 75 mL"},
    {t: 26.68, cap: "EDV unchanged → SV = 150 − 75 = 75 mL"},
    {t: 34.23, cap: "EF = 75/150 = 50% · BOTH fall"}
  ]
});
