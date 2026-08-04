/* A futile cycle: one signal is supposed to move two enzymes opposite ways. */
RU_EX.reg("k1kw175w", {
  dur: 45,
  css: `
svg[data-x="k1kw175w"]{font-family:inherit}
svg[data-x="k1kw175w"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1kw175w"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1kw175w"] .node{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.8}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Futile cycle between PFK-1 and FBPase-1">
  <defs>
    <marker id="k1kA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker>
    <marker id="k1kB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--warn)"/></marker>
  </defs>

  <rect class="node" x="40" y="130" width="170" height="56" rx="14"/>
  <text class="lbl" x="125" y="163" text-anchor="middle">F-1,6-BP</text>
  <rect class="node" x="416" y="130" width="170" height="56" rx="14"/>
  <text class="lbl" x="501" y="163" text-anchor="middle">F-6-P</text>

  <!-- forward: PFK-1 -->
  <path d="M216 146 Q313 104 410 146" fill="none" stroke="var(--accent)" stroke-width="3.5" marker-start="url(#k1kA)"/>
  <text class="lbl" x="313" y="98" text-anchor="middle" fill="var(--accent)">PFK-1</text>
  <text class="sm"  x="313" y="80" text-anchor="middle">glycolysis, forward · costs ATP</text>

  <!-- back: FBPase-1 -->
  <path d="M410 172 Q313 214 216 172" fill="none" stroke="var(--warn)" stroke-width="3.5" marker-start="url(#k1kB)"/>
  <text class="lbl" x="313" y="234" text-anchor="middle" fill="var(--warn)">FBPase-1</text>
  <text class="sm"  x="313" y="252" text-anchor="middle">gluconeogenesis, back</text>
  <text class="sm"  x="313" y="272" text-anchor="middle" data-from="1">same two molecules, opposite directions</text>

  <!-- the AMP signal -->
  <g data-from="2">
    <rect x="200" y="16" width="226" height="34" rx="16" fill="var(--incorrect)" opacity=".16"/>
    <text class="lbl" x="313" y="39" text-anchor="middle" fill="var(--incorrect)">high AMP = low energy</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="150" y="112" text-anchor="end" fill="var(--correct)">turns PFK-1 ON</text>
    <text class="lbl" x="476" y="208" fill="var(--correct)">turns FBPase-1 OFF</text>
    <text class="sm"  x="313" y="292" text-anchor="middle" fill="var(--correct)">one signal, two opposite responses — only one direction runs</text>
  </g>

  <!-- the mutation -->
  <g data-from="4">
    <rect x="416" y="192" width="170" height="30" rx="12" fill="var(--incorrect)" opacity=".18"/>
    <text class="sm" x="501" y="212" text-anchor="middle" fill="var(--incorrect)">mutant: ignores AMP, stays ON</text>
    <line x1="476" y1="216" x2="586" y2="196" stroke="var(--incorrect)" stroke-width="3"/>
  </g>

  <g data-from="5">
    <circle cx="313" cy="159" r="42" fill="none" stroke="var(--incorrect)" stroke-width="3" stroke-dasharray="9 7"/>
    <text class="lbl" x="313" y="164" text-anchor="middle" fill="var(--incorrect)">both ON</text>
  </g>
  <g data-from="6">
    <rect x="90" y="308" width="460" height="42" rx="16" fill="var(--incorrect)" opacity=".16"/>
    <text class="lbl" x="320" y="335" text-anchor="middle" fill="var(--incorrect)">a futile cycle: ATP burned, no net progress either way</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "PFK-1 goes forward · FBPase-1 goes back"},
    {t: 7, cap: "Same two molecules, opposite directions"},
    {t: 12, cap: "High AMP = low energy: PFK-1 on, FBPase-1 off"},
    {t: 19, cap: "One signal, two opposite responses"},
    {t: 26, cap: "The mutant FBPase-1 ignores AMP: it stays ON"},
    {t: 32, cap: "Now both run at once"},
    {t: 38, cap: "Net result: wasted ATP and heat — a futile cycle"}
  ]
});
