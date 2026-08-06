/* Four signals, all pointing the same way, at the committed step. */
RU_EX.reg("kjumqxm", {
  dur: 44,
  css: `
svg[data-x="kjumqxm"]{font-family:inherit}
svg[data-x="kjumqxm"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kjumqxm"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kjumqxm"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Signals converging to activate PFK-1">
  <text class="lbl" x="320" y="30" text-anchor="middle">rest → intense contraction</text>

  <!-- what changed -->
  <g data-from="1">
    <text class="lbl" x="70"  y="66" text-anchor="middle" style="fill:var(--correct)">ATP ↓</text>
    <text class="lbl" x="216" y="66" text-anchor="middle" style="fill:var(--correct)">citrate ↓</text>
    <text class="lbl" x="400" y="66" text-anchor="middle" style="fill:var(--warn)">AMP ↑</text>
    <text class="lbl" x="556" y="66" text-anchor="middle" style="fill:var(--warn)">ADP ↑</text>
  </g>

  <!-- what each means to PFK-1 -->
  <g data-from="2">
    <rect class="box" x="24" y="86" width="180" height="76" rx="14"/>
    <text class="sm"  x="114" y="110" text-anchor="middle">high ATP INHIBITS it</text>
    <text class="lbl" x="114" y="134" text-anchor="middle" style="fill:var(--correct)">so ATP falling</text>
    <text class="lbl" x="114" y="152" text-anchor="middle" style="fill:var(--correct)">lifts a brake</text>
  </g>
  <g data-from="3">
    <rect class="box" x="216" y="86" width="180" height="76" rx="14"/>
    <text class="sm"  x="306" y="110" text-anchor="middle">citrate INHIBITS it</text>
    <text class="sm"  x="306" y="128" text-anchor="middle">downstream already full</text>
    <text class="lbl" x="306" y="152" text-anchor="middle" style="fill:var(--correct)">a second brake lifted</text>
  </g>
  <g data-from="4">
    <rect class="box" x="408" y="86" width="180" height="76" rx="14"
          fill="var(--warn)" fill-opacity=".18" stroke="var(--warn)"/>
    <text class="sm"  x="498" y="110" text-anchor="middle">AMP ACTIVATES it</text>
    <text class="lbl" x="498" y="140" text-anchor="middle" style="fill:var(--warn)">accelerator down</text>
  </g>

  <!-- convergence -->
  <g data-from="5">
    <path d="M114 170 L300 206" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    <path d="M306 170 L316 206" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    <path d="M498 170 L332 206" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
    <rect x="216" y="210" width="208" height="46" rx="16" fill="var(--accent)" opacity=".2"/>
    <text class="lbl" x="320" y="239" text-anchor="middle" style="fill:var(--accent)">PFK-1 flux surges</text>
    <text class="sm"  x="320" y="272" text-anchor="middle">two brakes off and the accelerator on — every signal agrees</text>
  </g>

  <!-- why this step is the committed one -->
  <g data-from="6">
    <rect x="24" y="290" width="592" height="60" rx="16" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.6"/>
    <text class="sm"  x="320" y="312" text-anchor="middle">glucose-6-phosphate can still leave for glycogen or the pentose pathway</text>
    <text class="lbl" x="320" y="336" text-anchor="middle" style="fill:var(--accent)">past PFK-1 it cannot — which is what &ldquo;committed&rdquo; means</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Rest → hard contraction: four things change"},
    {t: 6, cap: "ATP ↓ · citrate ↓ · ADP and AMP ↑"},
    {t: 11, cap: "High ATP inhibits it — so falling ATP lifts the brake"},
    {t: 18, cap: "Citrate also inhibits — a second brake lifted"},
    {t: 25, cap: "AMP activates it — the accelerator is pressed"},
    {t: 31, cap: "Two brakes off, accelerator on"},
    {t: 37, cap: "Committed: past PFK-1 there is no other fate"}
  ]
});
