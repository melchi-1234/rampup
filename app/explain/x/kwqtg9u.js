/* Goal displacement: the means quietly becomes the end. */
RU_EX.reg("kwqtg9u", {
  dur: 41,
  css: `
svg[data-x="kwqtg9u"]{font-family:inherit}
svg[data-x="kwqtg9u"] .lbl{fill:var(--text);font-size:14.5px;font-weight:700}
svg[data-x="kwqtg9u"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kwqtg9u"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="kwqtg9u"] .goal{fill:var(--correct);fill-opacity:.18;stroke:var(--correct);stroke-width:2}
svg[data-x="kwqtg9u"] .swapped{fill:var(--incorrect);fill-opacity:.18;stroke:var(--incorrect);stroke-width:2}
svg[data-x="kwqtg9u"] .fade{transition:opacity .6s ease}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Goal displacement in an organisation">
  <!-- what it is for -->
  <text class="sm" x="24" y="44">THE GOAL</text>
  <rect class="goal" x="24" y="56" width="240" height="56" rx="14"/>
  <text class="lbl" x="144" y="90" text-anchor="middle" style="fill:var(--correct)">actually help clients</text>

  <text class="sm" x="24" y="152" data-from="1">THE MEANS</text>
  <rect class="box" x="24" y="164" width="240" height="56" rx="14" data-from="1"/>
  <text class="lbl" x="144" y="198" text-anchor="middle" data-from="1">forms &middot; checklists &middot; the manual</text>

  <path d="M144 118 L144 158" stroke="var(--muted)" stroke-width="2.5" data-from="1"
        marker-end="url(#kwA)"/>
  <defs><marker id="kwA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
    orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <text class="sm" x="156" y="144" data-from="1">exist to serve it</text>

  <!-- what gets measured -->
  <g data-from="2">
    <text class="sm" x="336" y="44">WHAT GETS MEASURED</text>
    <rect class="box" x="336" y="56" width="280" height="56" rx="14"/>
    <text class="lbl" x="476" y="90" text-anchor="middle">“was the form filled in exactly right?”</text>
  </g>
  <text class="sm" x="336" y="136" data-from="3" style="fill:var(--warn)">measurable, so it is what people optimise</text>
  <text class="sm" x="336" y="156" data-from="3" style="fill:var(--warn)">helping clients is not on the form</text>

  <!-- the swap -->
  <g data-from="4">
    <rect class="swapped" x="336" y="176" width="280" height="56" rx="14"/>
    <text class="lbl" x="476" y="200" text-anchor="middle" style="fill:var(--incorrect)">the paperwork IS the job now</text>
    <text class="sm"  x="476" y="220" text-anchor="middle" style="fill:var(--incorrect)">the goal it served has dropped out</text>
  </g>

  <g data-from="5">
    <rect x="24" y="256" width="592" height="34" rx="17" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="279" text-anchor="middle" style="fill:var(--accent)">the means has replaced the end &mdash; goal displacement</text>
  </g>

  <g data-from="6">
    <text class="sm" x="24" y="316">rationalization &amp; McDonaldization describe efficiency spreading through society</text>
    <text class="sm" x="24" y="336" style="fill:var(--accent)">only goal displacement names this specific swap</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "The agency exists to help clients"},
    {t: 4, cap: "Procedures are the MEANS to that goal"},
    {t: 10, cap: "Staff get judged on filling forms in correctly"},
    {t: 17, cap: "The measurable thing becomes the target"},
    {t: 23, cap: "The form replaces the help it was meant to enable"},
    {t: 29, cap: "The means has become the end: goal displacement"},
    {t: 34, cap: "Goal displacement names the swap specifically"}
  ]
});
