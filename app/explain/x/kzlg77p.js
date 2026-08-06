/* SN1: the planar carbocation is what destroys the stereocenter. */
RU_EX.reg("kzlg77p", {
  dur: 44,
  css: `
svg[data-x="kzlg77p"]{font-family:inherit}
svg[data-x="kzlg77p"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kzlg77p"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kzlg77p"] .bond{stroke:var(--text);stroke-width:2.2}
svg[data-x="kzlg77p"] .wedge{fill:var(--text)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="SN1 racemisation through a planar cation">
  <!-- starting material: one defined stereocenter -->
  <text class="sm" x="94" y="44" text-anchor="middle">(R) starting material</text>
  <circle cx="94" cy="128" r="7" fill="var(--text)"/>
  <line class="bond" x1="94" y1="128" x2="94" y2="76"/>
  <line class="bond" x1="94" y1="128" x2="46" y2="158"/>
  <polygon class="wedge" points="94,128 138,150 134,162"/>
  <text class="sm" x="94" y="68" text-anchor="middle">R¹</text>
  <text class="sm" x="34" y="168">R²</text>
  <text class="lbl" x="150" y="160" style="fill:var(--incorrect)">Cl</text>
  <text class="sm" x="94" y="196" text-anchor="middle">one fixed arrangement</text>

  <!-- step 1: ionization -->
  <g data-from="1">
    <path d="M180 128 H250" stroke="var(--muted)" stroke-width="2.5" fill="none" marker-end="url(#kzA)"/>
    <defs><marker id="kzA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
    <text class="sm" x="215" y="118" text-anchor="middle">slow</text>
    <text class="sm" x="215" y="150" text-anchor="middle" style="fill:var(--incorrect)">&minus;Cl⁻</text>
  </g>

  <!-- the flat cation -->
  <g data-from="2">
    <ellipse cx="360" cy="128" rx="76" ry="15" fill="var(--accent)" opacity=".18"/>
    <circle cx="360" cy="128" r="8" fill="var(--accent)"/>
    <line class="bond" x1="360" y1="128" x2="296" y2="128"/>
    <line class="bond" x1="360" y1="128" x2="424" y2="128"/>
    <line class="bond" x1="360" y1="128" x2="360" y2="86"/>
    <text class="lbl" x="360" y="76" text-anchor="middle" style="fill:var(--accent)">+</text>
    <text class="sm" x="360" y="168" text-anchor="middle">planar carbocation</text>
  </g>
  <text class="lbl" x="360" y="196" text-anchor="middle" data-from="3" style="fill:var(--incorrect)">the stereocenter is gone</text>
  <text class="sm"  x="360" y="214" text-anchor="middle" data-from="3">there is no longer a left or a right</text>

  <!-- water attacks both faces -->
  <g data-from="4">
    <path d="M360 60 V104" stroke="var(--correct)" stroke-width="2.5" marker-end="url(#kzB)"/>
    <path d="M360 196 V152" stroke="var(--correct)" stroke-width="2.5" marker-end="url(#kzB)"/>
    <defs><marker id="kzB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--correct)"/></marker></defs>
    <text class="sm" x="404" y="66" style="fill:var(--correct)">H₂O from above</text>
    <text class="sm" x="404" y="192" style="fill:var(--correct)">or below &mdash; equally</text>
  </g>

  <!-- the two products, equal -->
  <g data-from="5">
    <rect x="470" y="86" width="146" height="52" rx="14" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.6"/>
    <text class="lbl" x="543" y="118" text-anchor="middle">(R) product</text>
    <rect x="470" y="150" width="146" height="52" rx="14" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.6"/>
    <text class="lbl" x="543" y="182" text-anchor="middle">(S) product</text>
    <text class="lbl" x="543" y="228" text-anchor="middle" style="fill:var(--accent)">about 1 : 1</text>
  </g>

  <g data-from="6">
    <rect x="60" y="292" width="520" height="46" rx="16" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="312" text-anchor="middle" style="fill:var(--accent)">racemic, and optically inactive</text>
    <text class="sm"  x="320" y="330" text-anchor="middle" style="fill:var(--accent)">inversion would mean SN2, which a tertiary carbon blocks</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Tertiary + weak nucleophile + polar protic → SN1"},
    {t: 7, cap: "Step 1: the chloride leaves on its own"},
    {t: 12, cap: "That leaves a FLAT carbocation"},
    {t: 19, cap: "Flat means the stereocenter is destroyed"},
    {t: 25, cap: "Water attacks from above or below, equally"},
    {t: 30, cap: "So you get both enantiomers, about 1:1"},
    {t: 35, cap: "Racemic, optically inactive"}
  ]
});
