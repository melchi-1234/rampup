/* SN2 on a primary halide: the nucleophile is in the rate law. */
RU_EX.reg("k12091r3", {
  dur: 42,
  css: `
svg[data-x="k12091r3"]{font-family:inherit}
svg[data-x="k12091r3"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k12091r3"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="k12091r3"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k12091r3"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
svg[data-x="k12091r3"] .bond{stroke:var(--text);stroke-width:2.2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="SN2 on a primary halide and its rate law">
  <!-- the primary carbon, uncrowded -->
  <text class="sm" x="120" y="40" text-anchor="middle">1-bromobutane &mdash; primary</text>
  <circle cx="120" cy="106" r="9" fill="var(--text)"/>
  <line class="bond" x1="120" y1="106" x2="120" y2="66"/>
  <line class="bond" x1="120" y1="106" x2="86" y2="130"/>
  <line class="bond" x1="120" y1="106" x2="176" y2="106"/>
  <text class="sm" x="120" y="58" text-anchor="middle">H</text>
  <text class="sm" x="74" y="142">H</text>
  <text class="lbl" x="190" y="112" style="fill:var(--incorrect)">Br</text>
  <text class="sm" x="120" y="160" text-anchor="middle">only H's around it</text>

  <g data-from="1">
    <path d="M34 106 H98" stroke="var(--correct)" stroke-width="3" marker-end="url(#k12A)"/>
    <defs><marker id="k12A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
      orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--correct)"/></marker></defs>
    <text class="sm" x="34" y="94" style="fill:var(--correct)">EtO⁻ attacks the back</text>
    <text class="sm" x="120" y="182" text-anchor="middle" style="fill:var(--correct)">nothing in the way</text>
  </g>
  <text class="sm" x="120" y="204" text-anchor="middle" data-from="1" style="fill:var(--incorrect)">and a primary cation is far too unstable for SN1</text>

  <!-- the mechanism and its consequence -->
  <g data-from="2">
    <rect x="300" y="52" width="316" height="44" rx="14"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="458" y="80" text-anchor="middle" style="fill:var(--correct)">SN2</text>
  </g>
  <text class="lbl" x="300" y="126" data-from="3">bimolecular &mdash; ONE step</text>
  <text class="sm"  x="300" y="146" data-from="3">substrate and nucleophile both in it</text>

  <text class="big" x="300" y="188" data-from="4">rate = k [substrate][EtO⁻]</text>
  <g data-from="5">
    <rect x="300" y="204" width="300" height="38" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="450" y="229" text-anchor="middle" style="fill:var(--accent)">double the ethoxide → double the rate</text>
  </g>

  <!-- contrast with the tertiary one -->
  <g data-from="6">
    <rect class="box" x="24" y="264" width="592" height="76" rx="16"/>
    <text class="lbl" x="44" y="290">contrast: tert-butyl bromide goes SN1</text>
    <text class="sm"  x="44" y="312">its slow step is the halide leaving, on its own &mdash; the nucleophile is not in it</text>
    <text class="sm"  x="44" y="330" style="fill:var(--incorrect)">so for THAT one, changing the ethoxide concentration does nothing</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "1-bromobutane is PRIMARY: open carbon"},
    {t: 5, cap: "Backside attack easy · primary cation too unstable"},
    {t: 12, cap: "So: SN2, not SN1"},
    {t: 16, cap: "SN2 is bimolecular: one step, nucleophile included"},
    {t: 22, cap: "rate = k[substrate][nucleophile]"},
    {t: 28, cap: "Double the ethoxide → double the rate"},
    {t: 32, cap: "Contrast: SN1's slow step has no nucleophile in it"}
  ]
});
