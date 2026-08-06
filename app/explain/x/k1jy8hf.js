/* Grievance held equal, resources differ — that design IS the argument. */
RU_EX.reg("k1jy8hf", {
  dur: 40,
  css: `
svg[data-x="k1jy8hf"]{font-family:inherit}
svg[data-x="k1jy8hf"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1jy8hf"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1jy8hf"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Two movements with equal grievance and unequal resources">
  <text class="lbl" x="320" y="32" text-anchor="middle">same city · same highway · two groups</text>

  <!-- grievance: identical bars -->
  <text class="sm" x="320" y="62" text-anchor="middle" data-from="1">GRIEVANCE  (measured by survey)</text>
  <g data-from="1">
    <rect x="150" y="72" width="150" height="26" rx="8" fill="var(--warn)" opacity=".8"/>
    <rect x="340" y="72" width="150" height="26" rx="8" fill="var(--warn)" opacity=".8"/>
    <text class="lbl" x="320" y="120" text-anchor="middle" style="fill:var(--warn)">identical &mdash; and that is the whole design</text>
    <text class="sm"  x="320" y="138" text-anchor="middle">it removes anger as an explanation</text>
  </g>

  <!-- resources: very different -->
  <text class="sm" x="320" y="172" text-anchor="middle" data-from="2">RESOURCES</text>
  <g data-from="2">
    <rect class="box" x="24" y="184" width="286" height="98" rx="14"/>
    <text class="lbl" x="167" y="208" text-anchor="middle">Group A</text>
    <text class="sm"  x="167" y="230" text-anchor="middle">experienced organisers · donors</text>
    <text class="sm"  x="167" y="248" text-anchor="middle">office space · civic connections</text>
    <rect x="60" y="258" width="214" height="16" rx="8" fill="var(--accent)" opacity=".85"/>
  </g>
  <g data-from="3">
    <rect class="box" x="330" y="184" width="286" height="98" rx="14"/>
    <text class="lbl" x="473" y="208" text-anchor="middle">Group B</text>
    <text class="sm"  x="473" y="230" text-anchor="middle">committed volunteers</text>
    <text class="sm"  x="473" y="248" text-anchor="middle">and not much else</text>
    <rect x="440" y="258" width="52" height="16" rx="8" fill="var(--accent)" opacity=".85"/>
  </g>

  <text class="lbl" x="167" y="302" text-anchor="middle" data-from="4" style="fill:var(--correct)">succeeds</text>
  <text class="lbl" x="473" y="302" text-anchor="middle" data-from="4" style="fill:var(--incorrect)">does not</text>
  <text class="sm"  x="320" y="302" text-anchor="middle" data-from="5" style="fill:var(--muted)">relative deprivation would</text>
  <text class="sm"  x="320" y="316" text-anchor="middle" data-from="5" style="fill:var(--muted)">predict from grievance &mdash; but</text>
  <text class="sm"  x="320" y="330" text-anchor="middle" data-from="5" style="fill:var(--muted)">grievance was held equal</text>

  <g data-from="6">
    <rect x="130" y="318" width="380" height="34" rx="17" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="341" text-anchor="middle" style="fill:var(--accent)">resource mobilisation theory</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Two groups, same grievance, measured equal"},
    {t: 5, cap: "That equality is the design — it removes anger"},
    {t: 11, cap: "One has organizers, donors, offices, connections"},
    {t: 17, cap: "The other has commitment and little else"},
    {t: 22, cap: "The resourced group wins — so it isn't feeling"},
    {t: 28, cap: "Relative deprivation would predict from grievance"},
    {t: 34, cap: "Money, leadership, networks → resource mobilisation"}
  ]
});
