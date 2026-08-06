/* Medicalization through three lenses — match the lens to the CONCERN. */
RU_EX.reg("kqyblur", {
  dur: 41,
  css: `
svg[data-x="kqyblur"]{font-family:inherit}
svg[data-x="kqyblur"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kqyblur"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kqyblur"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Medicalization seen through three perspectives">
  <!-- the shared fact -->
  <rect class="box" x="70" y="30" width="500" height="58" rx="16"/>
  <text class="lbl" x="320" y="54" text-anchor="middle">moral failings → medical disorders</text>
  <text class="sm"  x="320" y="76" text-anchor="middle" data-from="1">heavy drinking &middot; restlessness in children &middot; shyness</text>

  <text class="sm" x="320" y="112" text-anchor="middle" data-from="2">every lens can describe this. the question is which matches the CONCERN.</text>

  <!-- three lenses -->
  <g data-from="3">
    <rect class="box" x="24" y="130" width="186" height="104" rx="14"/>
    <text class="lbl" x="117" y="156" text-anchor="middle">functionalism</text>
    <text class="sm"  x="117" y="180" text-anchor="middle">how the sick role</text>
    <text class="sm"  x="117" y="198" text-anchor="middle">keeps society stable</text>
    <text class="sm"  x="117" y="222" text-anchor="middle" style="fill:var(--muted)">a function, not a worry</text>
  </g>
  <g data-from="4">
    <rect class="box" x="226" y="130" width="188" height="104" rx="14"/>
    <text class="lbl" x="320" y="156" text-anchor="middle">interactionism</text>
    <text class="sm"  x="320" y="180" text-anchor="middle">how a diagnosis gets</text>
    <text class="sm"  x="320" y="198" text-anchor="middle">negotiated in the room</text>
    <text class="sm"  x="320" y="222" text-anchor="middle" style="fill:var(--muted)">meaning, not power</text>
  </g>
  <g data-from="6">
    <rect x="430" y="130" width="186" height="104" rx="14"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="523" y="156" text-anchor="middle" style="fill:var(--correct)">conflict theory</text>
    <text class="sm"  x="523" y="180" text-anchor="middle">who gains authority,</text>
    <text class="sm"  x="523" y="198" text-anchor="middle">who is controlled</text>
    <text class="lbl" x="523" y="222" text-anchor="middle" style="fill:var(--correct)">✓</text>
  </g>

  <!-- the stated concern is the discriminator -->
  <g data-from="5">
    <rect x="120" y="256" width="400" height="42" rx="16" fill="var(--warn)" opacity=".18"/>
    <text class="lbl" x="320" y="282" text-anchor="middle" style="fill:var(--warn)">the stated concern: expanding authority and social control</text>
  </g>
  <g data-from="6">
    <text class="sm" x="320" y="330" text-anchor="middle" style="fill:var(--accent)">match the lens to the CONCERN, not to the topic</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Behaviors get redefined as medical disorders"},
    {t: 5, cap: "Heavy drinking · restlessness · shyness"},
    {t: 10, cap: "Every lens can describe it. Which matches the CONCERN?"},
    {t: 16, cap: "Functionalism: how the sick role keeps order"},
    {t: 22, cap: "Interactionism: how meanings get negotiated"},
    {t: 28, cap: "The concern: expanding authority and control"},
    {t: 34, cap: "Power and control → conflict theory"}
  ]
});
