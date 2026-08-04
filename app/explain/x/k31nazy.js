/* Anfinsen: what was destroyed, what survived, and what that proves. */
RU_EX.reg("k31nazy", {
  dur: 39,
  css: `
svg[data-x="k31nazy"]{font-family:inherit}
svg[data-x="k31nazy"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k31nazy"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k31nazy"] .chain{fill:none;stroke:var(--accent);stroke-width:5;stroke-linecap:round}
svg[data-x="k31nazy"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Anfinsen refolding experiment">
  <!-- folded -->
  <text class="sm" x="90" y="46" text-anchor="middle">folded &amp; working</text>
  <path class="chain" d="M46 130 q26 -44 52 0 q26 44 52 0 q22 -34 -6 -52"/>
  <circle cx="90" cy="150" r="26" fill="var(--correct)" opacity=".22"/>
  <text class="sm" x="90" y="196" text-anchor="middle" fill="var(--correct)">active</text>

  <!-- denatured -->
  <g data-from="1">
    <path d="M170 120 H206" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#k31A)"/>
    <defs><marker id="k31A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
    <text class="sm" x="188" y="104" text-anchor="middle">urea +</text>
    <text class="sm" x="188" y="140" text-anchor="middle">reducing agent</text>
    <path class="chain" stroke="var(--muted)" d="M226 150 L266 116 L306 156 L346 120 L386 152"/>
    <text class="sm" x="306" y="188" text-anchor="middle" fill="var(--incorrect)">unfolded, inactive</text>
  </g>

  <!-- what survived -->
  <g data-from="2">
    <rect class="box" x="222" y="206" width="196" height="66" rx="14"/>
    <text class="sm"  x="320" y="228" text-anchor="middle" fill="var(--incorrect)">broken: H-bonds, disulfides</text>
    <text class="lbl" x="320" y="252" text-anchor="middle" fill="var(--correct)">intact: the peptide bonds</text>
    <text class="sm"  x="320" y="266" text-anchor="middle" fill="var(--correct)">the sequence survives</text>
  </g>

  <!-- refolded, unaided -->
  <g data-from="3">
    <path d="M406 120 H442" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#k31A)"/>
    <text class="sm" x="424" y="104" text-anchor="middle">remove both</text>
    <text class="sm" x="424" y="140" text-anchor="middle" fill="var(--warn)">add nothing</text>
  </g>
  <g data-from="4">
    <path class="chain" d="M470 130 q26 -44 52 0 q26 44 52 0 q22 -34 -6 -52"/>
    <circle cx="514" cy="150" r="26" fill="var(--correct)" opacity=".22"/>
    <text class="sm" x="514" y="196" text-anchor="middle" fill="var(--correct)">active again</text>
    <text class="sm" x="514" y="46" text-anchor="middle">same shape, by itself</text>
  </g>

  <g data-from="5">
    <text class="lbl" x="320" y="302" text-anchor="middle" fill="var(--warn)">no template, no machinery, nothing to copy from</text>
  </g>
  <g data-from="6">
    <rect x="90" y="316" width="460" height="34" rx="17" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="320" y="339" text-anchor="middle" fill="var(--accent)">so the sequence alone specifies the fold</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Start: folded and working"},
    {t: 4, cap: "Urea unfolds it · the reducing agent breaks disulfides"},
    {t: 11, cap: "But the peptide bonds are UNTOUCHED"},
    {t: 17, cap: "Remove both agents. Add nothing else."},
    {t: 23, cap: "It refolds by itself and works again"},
    {t: 28, cap: "Nothing told it how — only the sequence was present"},
    {t: 34, cap: "Sequence alone specifies the 3-D structure"}
  ]
});
