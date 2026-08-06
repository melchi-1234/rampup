/* Vmax down, Km fixed, and substrate cannot rescue it: noncompetitive. */
RU_EX.reg("kjmvt80", {
  dur: 44,
  css: `
svg[data-x="kjmvt80"]{font-family:inherit}
svg[data-x="kjmvt80"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kjmvt80"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kjmvt80"] .ax{stroke:var(--muted);stroke-width:2}
svg[data-x="kjmvt80"] .cur{fill:none;stroke-width:3.5}
svg[data-x="kjmvt80"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Noncompetitive inhibition of GlyK by drug D">
  <line class="ax" x1="60" y1="250" x2="330" y2="250"/>
  <line class="ax" x1="60" y1="250" x2="60" y2="60"/>
  <text class="sm" x="195" y="274" text-anchor="middle">[glycerol]</text>
  <text class="sm" x="40" y="156" text-anchor="middle" transform="rotate(-90 40 156)">velocity</text>

  <path class="cur" stroke="var(--accent)" d="M62 248 Q120 100 328 84"/>
  <line x1="60" y1="84" x2="328" y2="84" stroke="var(--border-strong)" stroke-dasharray="5 4"/>
  <text class="sm" x="334" y="88" style="fill:var(--accent)">100</text>

  <path class="cur" stroke="var(--incorrect)" d="M62 248 Q126 172 328 162" data-from="1"/>
  <line x1="60" y1="162" x2="328" y2="162" stroke="var(--incorrect)" stroke-dasharray="5 4" data-from="1"/>
  <text class="sm" x="334" y="166" data-from="1" style="fill:var(--incorrect)">40</text>

  <g data-from="2">
    <line x1="112" y1="250" x2="112" y2="72" stroke="var(--correct)" stroke-width="2" stroke-dasharray="4 4"/>
    <text class="sm" x="112" y="292" text-anchor="middle" style="fill:var(--correct)">Km = 0.5 mM, both</text>
  </g>

  <!-- the reasoning -->
  <text class="lbl" x="372" y="70" data-from="1" style="fill:var(--incorrect)">Vmax: 100 → 40</text>
  <text class="sm"  x="372" y="88" data-from="1">the ceiling fell</text>
  <text class="lbl" x="372" y="122" data-from="2" style="fill:var(--correct)">Km: 0.5, unchanged</text>
  <text class="sm"  x="372" y="140" data-from="2">binding is untouched</text>

  <g data-from="3">
    <rect class="box" x="360" y="162" width="256" height="52" rx="14"/>
    <text class="sm" x="376" y="184">a competitor sits in the active site,</text>
    <text class="lbl" x="376" y="204" style="fill:var(--incorrect)">so it would RAISE Km. It didn't.</text>
  </g>

  <g data-from="4">
    <rect class="box" x="360" y="226" width="256" height="70" rx="14"/>
    <text class="sm"  x="376" y="248">and there's a direct test:</text>
    <text class="lbl" x="376" y="268">flood it with substrate…</text>
    <text class="lbl" x="376" y="288" style="fill:var(--incorrect)">…Vmax still doesn't recover</text>
  </g>
  <text class="sm" x="60" y="318" data-from="5">if they competed for one site, enough substrate would always win</text>

  <g data-from="6">
    <rect x="60" y="326" width="520" height="28" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="346" text-anchor="middle" style="fill:var(--accent)">noncompetitive — drug D binds somewhere else entirely</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Two numbers identify the inhibitor"},
    {t: 4, cap: "Vmax: 100 → 40. The ceiling fell."},
    {t: 10, cap: "Km: 0.5, unchanged. Binding is untouched."},
    {t: 16, cap: "A competitor would RAISE Km. It didn't."},
    {t: 23, cap: "And piling on substrate does not restore Vmax"},
    {t: 30, cap: "If they competed for one site, substrate would win"},
    {t: 37, cap: "Noncompetitive — substrate can't outrun it"}
  ]
});
