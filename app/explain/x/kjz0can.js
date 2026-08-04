/* CARS: follow the premise chain until it contradicts itself. */
RU_EX.reg("kjz0can", {
  dur: 37,
  css: `
svg[data-x="kjz0can"]{font-family:inherit}
svg[data-x="kjz0can"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kjz0can"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kjz0can"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="The premise chain and where it breaks">
  <defs><marker id="kjzA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6"
    orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <text class="sm" x="320" y="30" text-anchor="middle">the theory's own chain — follow it and something breaks</text>

  <g data-from="1">
    <rect class="box" x="86" y="46" width="468" height="38" rx="12"/>
    <text class="lbl" x="320" y="70" text-anchor="middle">1 · if an act is genuinely good → it is what we ought to do</text>
  </g>
  <path d="M320 88 V104" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#kjzA)" data-from="2"/>
  <g data-from="2">
    <rect class="box" x="86" y="110" width="468" height="38" rx="12"/>
    <text class="lbl" x="320" y="134" text-anchor="middle">2 · what we ought to do → is our duty</text>
  </g>
  <path d="M320 152 V168" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#kjzA)" data-from="3"/>
  <g data-from="3">
    <rect x="86" y="174" width="468" height="38" rx="12" fill="var(--accent)" opacity=".18"/>
    <text class="lbl" x="320" y="198" text-anchor="middle" fill="var(--accent)">so the heroic act is a DUTY</text>
  </g>

  <!-- the collision -->
  <g data-from="4">
    <rect x="86" y="226" width="468" height="42" rx="12" fill="var(--warn)" opacity=".2"/>
    <text class="lbl" x="320" y="245" text-anchor="middle" fill="var(--warn)">but it was admirable BECAUSE no one could demand it</text>
    <text class="sm"  x="320" y="262" text-anchor="middle">“had he stepped aside, we could not have reproached him”</text>
  </g>
  <g data-from="5">
    <text class="lbl" x="320" y="292" text-anchor="middle" fill="var(--incorrect)">and duty is exactly what CAN be demanded</text>
  </g>

  <g data-from="6">
    <rect x="120" y="304" width="400" height="46" rx="16" fill="var(--correct)" opacity=".2"/>
    <text class="lbl" x="320" y="326" text-anchor="middle" fill="var(--correct)">the theory erases what made the act admirable</text>
    <text class="sm"  x="320" y="344" text-anchor="middle" fill="var(--correct)">that is the difficulty → C</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "A chain of three claims — follow it"},
    {t: 5, cap: "1. genuinely good → what we ought to do"},
    {t: 9, cap: "2. what we ought to do → duty"},
    {t: 14, cap: "So the heroic act becomes a DUTY"},
    {t: 19, cap: "3. but it was admirable because nobody could DEMAND it"},
    {t: 26, cap: "Duty is what CAN be demanded — the admirable part is erased"},
    {t: 32, cap: "That is the difficulty → C"}
  ]
});
