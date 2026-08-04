/* Acid pulls the base out; only base brings it back. */
RU_EX.reg("k1rmh5gq", {
  dur: 40,
  css: `
svg[data-x="k1rmh5gq"]{font-family:inherit}
svg[data-x="k1rmh5gq"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1rmh5gq"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1rmh5gq"] .glass{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="k1rmh5gq"] .ether{fill:var(--accent);opacity:.12}
svg[data-x="k1rmh5gq"] .aq{fill:var(--accent);opacity:.26}
svg[data-x="k1rmh5gq"] #ani{transition:transform 1s ease, fill .5s ease}
svg[data-x="k1rmh5gq"][data-step="3"] #ani,svg[data-x="k1rmh5gq"][data-step="4"] #ani,
svg[data-x="k1rmh5gq"][data-step="5"] #ani{transform:translate(0,92px);fill:var(--correct)}
svg[data-x="k1rmh5gq"][data-step="6"] #ani{transform:translate(0,0);fill:var(--warn)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Separating an amine with acid, then recovering it">
  <!-- funnel -->
  <path class="glass" d="M64 50 L64 214 L108 268 L108 320"/>
  <path class="glass" d="M204 50 L204 214 L160 268 L160 320"/>
  <line class="glass" x1="64" y1="50" x2="204" y2="50"/>
  <rect class="ether" x="66" y="56" width="136" height="96"/>
  <text class="sm" x="134" y="42" text-anchor="middle">ether</text>
  <rect class="aq" x="66" y="152" width="136" height="62"/>
  <path class="aq" d="M66 214 L108 268 L160 268 L202 214 Z"/>
  <text class="sm" x="134" y="296" text-anchor="middle">aqueous HCl</text>
  <line class="glass" x1="66" y1="152" x2="202" y2="152" stroke-dasharray="5 4"/>

  <circle id="ani" cx="106" cy="96" r="11" fill="var(--warn)"/>
  <text class="sm" x="106" y="80" text-anchor="middle">aniline</text>
  <circle cx="166" cy="120" r="11" fill="var(--muted)"/>
  <text class="sm" x="166" y="104" text-anchor="middle">naphth.</text>

  <!-- the reasoning -->
  <text class="lbl" x="248" y="66" data-from="0">aniline: a weak BASE</text>
  <text class="sm"  x="248" y="86" data-from="0">naphthalene: neutral, nothing to react with</text>

  <text class="lbl" x="248" y="122" data-from="1" fill="var(--warn)">shake with HCl — acid protonates a base</text>
  <text class="lbl" x="248" y="156" data-from="2">the nitrogen takes a proton</text>
  <text class="sm"  x="248" y="176" data-from="2" fill="var(--correct)">→ anilinium⁺, now CHARGED</text>
  <text class="lbl" x="248" y="210" data-from="3" fill="var(--correct)">charged → water-soluble → it drops into the water</text>
  <text class="sm"  x="248" y="238" data-from="4" fill="var(--muted)">naphthalene has nothing to protonate, so it stays put &mdash; separated</text>

  <g data-from="5">
    <rect x="240" y="256" width="380" height="38" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="430" y="280" text-anchor="middle" fill="var(--accent)">to recover it, reverse the step that moved it</text>
  </g>
  <g data-from="6">
    <rect x="240" y="302" width="380" height="46" rx="14" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="430" y="324" text-anchor="middle" fill="var(--correct)">add NaOH → neutral aniline again</text>
    <text class="sm"  x="430" y="342" text-anchor="middle" fill="var(--incorrect)">more acid would only keep it stuck as the salt</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Aniline is basic · naphthalene is neutral"},
    {t: 5, cap: "Shake with HCl — acid protonates a base"},
    {t: 10, cap: "Aniline's N takes a proton → anilinium⁺"},
    {t: 16, cap: "Charged → water-soluble → into the aqueous layer"},
    {t: 22, cap: "Naphthalene has nothing to protonate — it stays"},
    {t: 28, cap: "To get it back, reverse the step that moved it"},
    {t: 33, cap: "Add NaOH → neutral aniline again"}
  ]
});
