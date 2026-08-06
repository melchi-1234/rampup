/* CARS: unpack the metaphor literally, then follow where it points. */
RU_EX.reg("knx6ju1", {
  dur: 43,
  css: `
svg[data-x="knx6ju1"]{font-family:inherit}
svg[data-x="knx6ju1"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="knx6ju1"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="knx6ju1"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="knx6ju1"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Unpacking the rehearsal metaphor">
  <text class="tag" x="24" y="32">THE PHRASE</text>
  <rect x="24" y="42" width="592" height="40" rx="14" fill="var(--accent)" opacity=".16"/>
  <text class="lbl" x="320" y="68" text-anchor="middle" style="fill:var(--accent)">nostalgia is “a rehearsal in attention”</text>

  <!-- take it literally -->
  <g data-from="1">
    <rect class="box" x="24" y="98" width="286" height="60" rx="14"/>
    <text class="sm"  x="40" y="120">what IS a rehearsal?</text>
    <text class="lbl" x="40" y="142">practice — and practice points forward</text>
  </g>
  <g data-from="2">
    <path d="M320 128 H358" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#knxA)"/>
    <defs><marker id="knxA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>
    <text class="lbl" x="370" y="122" style="fill:var(--accent)">so it is not about the past</text>
    <text class="sm"  x="370" y="142">it trains you for what is ahead</text>
  </g>

  <!-- the passage supplies the object -->
  <g data-from="3">
    <rect class="box" x="24" y="172" width="592" height="46" rx="14"/>
    <text class="sm"  x="40" y="192">practice at what? the passage says it outright:</text>
    <text class="lbl" x="40" y="210">“learning to notice the worth of an ordinary day before it too becomes irretrievable”</text>
  </g>
  <g data-from="4">
    <rect x="150" y="230" width="340" height="38" rx="16" fill="var(--correct)" opacity=".2"/>
    <text class="lbl" x="320" y="254" text-anchor="middle" style="fill:var(--correct)">→ comes to value ordinary PRESENT moments</text>
  </g>

  <!-- the two traps -->
  <g data-from="5">
    <text class="sm" x="24" y="292" style="fill:var(--incorrect)">B · “more reliable than memory” — the phrase says nothing about reliability</text>
  </g>
  <g data-from="6">
    <text class="sm" x="24" y="314" style="fill:var(--incorrect)">D · “ordinary days are objectively more valuable” — he says we FAIL TO NOTICE their worth,</text>
    <text class="sm" x="24" y="332" style="fill:var(--incorrect)">which is a claim about us, not a ranking of days</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "“Implies” = what follows from the phrase itself"},
    {t: 6, cap: "A rehearsal is practice — it points FORWARD"},
    {t: 11, cap: "So it's not about the past — it trains you for ahead"},
    {t: 17, cap: "For what? “noticing an ordinary day before it's gone”"},
    {t: 24, cap: "Follow it forward → valuing the ordinary present"},
    {t: 30, cap: "B: reliability — the phrase never touches it"},
    {t: 36, cap: "D confuses “we fail to notice” with “worth more”"}
  ]
});
