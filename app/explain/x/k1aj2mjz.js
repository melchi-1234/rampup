/* Labeling theory — what the study held constant is the argument. */
RU_EX.reg("k1aj2mjz", {
  dur: 40,
  css: `
svg[data-x="k1aj2mjz"]{font-family:inherit}
svg[data-x="k1aj2mjz"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1aj2mjz"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1aj2mjz"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="k1aj2mjz"] .bar{transition:height .8s ease, y .8s ease}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Labeled versus unlabeled youths">
  <text class="lbl" x="320" y="32" text-anchor="middle">same minor first offence, both groups</text>

  <rect class="box" x="40" y="52" width="240" height="56" rx="14" data-from="1"/>
  <text class="lbl" x="160" y="76" text-anchor="middle" data-from="1">formally processed</text>
  <text class="sm"  x="160" y="96" text-anchor="middle" data-from="1" fill="var(--incorrect)">officially labeled delinquent</text>

  <rect class="box" x="360" y="52" width="240" height="56" rx="14" data-from="1"/>
  <text class="lbl" x="480" y="76" text-anchor="middle" data-from="1">handled informally</text>
  <text class="sm"  x="480" y="96" text-anchor="middle" data-from="1" fill="var(--correct)">no label</text>

  <!-- outcome bars -->
  <g data-from="2">
    <line x1="40" y1="240" x2="600" y2="240" stroke="var(--border-strong)" stroke-width="1.6"/>
    <rect x="120" y="140" width="80" height="100" rx="6" fill="var(--incorrect)" opacity=".8"/>
    <rect x="440" y="196" width="80" height="44" rx="6" fill="var(--muted)" opacity=".7"/>
    <text class="sm" x="160" y="260" text-anchor="middle">reoffending, 3 yrs</text>
    <text class="sm" x="480" y="260" text-anchor="middle">reoffending, 3 yrs</text>
    <text class="lbl" x="160" y="132" text-anchor="middle" fill="var(--incorrect)">much higher</text>
  </g>

  <!-- what was held constant is the whole argument -->
  <g data-from="3">
    <text class="sm" x="320" y="288" text-anchor="middle">held constant: offence seriousness &middot; peer group</text>
  </g>
  <g data-from="4">
    <text class="sm" x="320" y="308" text-anchor="middle" fill="var(--muted)">so not &ldquo;they were worse already&rdquo;, and not &ldquo;they fell in with worse friends&rdquo;</text>
  </g>
  <g data-from="5">
    <rect x="150" y="318" width="340" height="34" rx="17" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="341" text-anchor="middle" fill="var(--accent)">the only difference was the label itself</text>
  </g>
  <g data-from="6">
    <rect x="40" y="140" width="240" height="0.1" fill="none"/>
    <text class="lbl" x="600" y="132" text-anchor="end" fill="var(--accent)">labelling theory</text>
    <text class="sm"  x="600" y="152" text-anchor="end" fill="var(--accent)">round two = secondary deviance</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Same minor first offence in both groups"},
    {t: 4, cap: "One group gets labeled. The other doesn't."},
    {t: 11, cap: "3 years later: the labeled group reoffends more"},
    {t: 16, cap: "Offence and peers were held constant"},
    {t: 22, cap: "So: not worse to begin with, not worse friends"},
    {t: 29, cap: "The only difference was the label itself"},
    {t: 34, cap: "Labelling theory · secondary deviance"}
  ]
});
