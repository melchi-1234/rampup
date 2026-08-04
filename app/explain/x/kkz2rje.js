/* CARS: the question says "primarily because" — land on his actual reason. */
RU_EX.reg("kkz2rje", {
  dur: 42,
  css: `
svg[data-x="kkz2rje"]{font-family:inherit}
svg[data-x="kkz2rje"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kkz2rje"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kkz2rje"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kkz2rje"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why the author calls restoration a loss">
  <text class="sm" x="320" y="30" text-anchor="middle" data-from="0">“primarily because” — one reason, and it is in the text</text>

  <!-- what he values -->
  <text class="tag" x="24" y="60" data-from="1">WHAT HE VALUES IN A RUIN</text>
  <g data-from="1">
    <rect x="24" y="70" width="592" height="38" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="94" text-anchor="middle" fill="var(--accent)">not the decay — the GAP the decay leaves</text>
  </g>

  <!-- his two lines -->
  <g data-from="2">
    <rect class="box" x="24" y="122" width="286" height="46" rx="14"/>
    <text class="sm" x="40" y="146">“the broken one invites us</text>
    <text class="sm" x="40" y="162">to supply what it was”</text>
  </g>
  <g data-from="3">
    <rect class="box" x="330" y="122" width="286" height="46" rx="14"/>
    <text class="sm" x="346" y="146">“the beholder becomes,</text>
    <text class="sm" x="346" y="162">briefly, a maker”</text>
    <text class="lbl" x="320" y="190" text-anchor="middle" fill="var(--accent)">the viewer gets to PARTICIPATE</text>
  </g>

  <!-- what restoration does to it -->
  <g data-from="4">
    <rect x="24" y="204" width="592" height="46" rx="14" fill="var(--incorrect)" opacity=".16"/>
    <text class="sm"  x="320" y="226" text-anchor="middle" fill="var(--incorrect)">restoration fills the gap in, and he says it</text>
    <text class="lbl" x="320" y="244" text-anchor="middle" fill="var(--incorrect)">“dismisses the beholder from the work”</text>
  </g>

  <g data-from="5">
    <rect x="130" y="262" width="380" height="34" rx="17" fill="var(--correct)" opacity=".2"/>
    <text class="lbl" x="320" y="285" text-anchor="middle" fill="var(--correct)">the loss is the participation → C</text>
  </g>

  <!-- the trap -->
  <g data-from="6">
    <rect class="box" x="24" y="306" width="592" height="46" rx="14"/>
    <text class="sm" x="40" y="326" fill="var(--warn)">A is the trap: “substitutes the makers' intention for time's revisions” is TRUE…</text>
    <text class="sm" x="40" y="344" fill="var(--warn)">…but it describes what restoration DOES, not why he calls it a loss</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "“Primarily because” — one reason, find it"},
    {t: 5, cap: "What does he value in a ruin? The GAP."},
    {t: 11, cap: "“the broken one invites us to supply what it was”"},
    {t: 17, cap: "“the beholder becomes, briefly, a maker”"},
    {t: 23, cap: "Restoration fills the gap: “dismisses the beholder”"},
    {t: 30, cap: "The loss is the participation → C"},
    {t: 35, cap: "A is the trap: true, but not his REASON"}
  ]
});
