/* Two dials, run in order: the 3-degree substrate kills SN2, the concentrated
   base kills solvolysis, and only then does regiochemistry matter. */
RU_EX.reg("kq1t8zk", {
  dur: 44,
  css: `
svg[data-x="kq1t8zk"]{font-family:inherit}
svg[data-x="kq1t8zk"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kq1t8zk"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kq1t8zk"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kq1t8zk"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Choosing E2 and the Zaitsev alkene from substrate and base">
  <text class="tag" x="24" y="24">2-BROMO-2-METHYLBUTANE + CONC. NaOEt, WARMED</text>

  <!-- base frame: the two dials that decide everything -->
  <rect x="24"  y="36" width="272" height="32" rx="10" fill="var(--surface-2)"/>
  <rect x="320" y="36" width="272" height="32" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="160" y="57" text-anchor="middle">DIAL 1 &#183; THE SUBSTRATE</text>
  <text class="lbl" x="456" y="57" text-anchor="middle">DIAL 2 &#183; THE BASE</text>

  <!-- base frame: all four candidates -->
  <rect class="chip" x="24" y="172" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="210" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="248" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="286" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="190" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="228" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="266" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="304" text-anchor="middle">D</text>
  <text class="sm" x="64" y="190">2-methyl-2-butene &#183; E2</text>
  <text class="sm" x="64" y="228">2-ethoxy-2-methylbutane &#183; SN2</text>
  <text class="sm" x="64" y="266">2-methyl-1-butene &#183; Hofmann</text>
  <text class="sm" x="64" y="304">2-methyl-2-butanol &#183; SN1</text>

  <!-- beat 2: three alkyl groups block the backside -->
  <g data-from="1">
    <rect x="24" y="74" width="272" height="48" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="160" y="96" text-anchor="middle" fill="var(--incorrect)">3&#176; carbon &#183; shielded</text>
    <text class="sm"  x="160" y="114" text-anchor="middle">no backside attack &#8594; SN2 is dead</text>
    <line x1="64" y1="223" x2="292" y2="223" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="228" fill="var(--incorrect)">3&#176; carbon: SN2 has no trajectory</text>
  </g>

  <!-- beat 3: a concentrated base forces the bimolecular path -->
  <g data-from="2">
    <rect x="320" y="74" width="272" height="48" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="456" y="96" text-anchor="middle" fill="var(--accent)">high [EtO&#8722;] &#183; bimolecular</text>
    <text class="sm"  x="456" y="114" text-anchor="middle">solvolysis wants NO base present</text>
    <line x1="64" y1="299" x2="292" y2="299" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="304" fill="var(--incorrect)">that is warm ethanol, base deleted</text>
  </g>

  <!-- beat 4: mechanism settled, only the beta-H is left -->
  <g data-from="3">
    <rect x="24" y="130" width="568" height="30" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="151" text-anchor="middle" fill="var(--accent)">E2 it is &#8212; now choose which &#946;-H leaves</text>
  </g>

  <!-- beat 5: a slim base takes the more substituted alkene -->
  <g data-from="4">
    <rect x="24" y="172" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="190" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm" x="300" y="190" fill="var(--correct)">Zaitsev: the trisubstituted alkene</text>
  </g>

  <!-- beat 6: Hofmann needs bulk, and ethoxide has none -->
  <g data-from="5">
    <line x1="64" y1="261" x2="292" y2="261" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="266" fill="var(--incorrect)">needs a BULKY base, not a strong one</text>
    <rect x="24" y="322" width="568" height="30" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="342" text-anchor="middle">strong &#8800; bulky &#183; EtO&#8722; is slim, tert-butoxide is not</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "3° substrate + high [strong base] → run two dials"},
    {t: 6.51,  cap: "3° carbon is shielded → SN2 impossible (kills B)"},
    {t: 14.62, cap: "High [EtO–] → bimolecular; D is the no-base pathway"},
    {t: 23.69, cap: "E2 locked in → now pick the β-H (regiochemistry)"},
    {t: 29.24, cap: "Small base → Zaitsev: 2-methyl-2-butene (trisub.)"},
    {t: 36.47, cap: "Bulky ≠ strong; Hofmann needs t-BuO–, not EtO– (C)"}
  ]
});
