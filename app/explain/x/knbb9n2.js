/* Hydrophobic effect as an entropy ledger: the chain loses, the water wins bigger,
   and each wrong choice misprices one column. Beat 1 is the ungated base frame. */
RU_EX.reg("knbb9n2", {
  dur: 40,
  css: `
svg[data-x="knbb9n2"]{font-family:inherit}
svg[data-x="knbb9n2"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="knbb9n2"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="knbb9n2"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="knbb9n2"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Entropy ledger showing that released water drives protein folding">
  <text class="tag" x="24" y="24">FOLDING BURIES THE NONPOLAR SIDE CHAINS &#183; &#916;G &lt; 0</text>

  <!-- base frame: the paradox, the chain's own entropy, and the four claims -->
  <text class="lbl" x="24" y="50">The chain gets MORE ordered &#8212; yet folding is spontaneous.</text>
  <rect x="24" y="104" width="284" height="56" rx="10" fill="var(--surface-2)"/>
  <text class="tag" x="40" y="126">&#916;S PROTEIN CHAIN</text>
  <text class="sm"  x="40" y="148">&#8722; loses conformational freedom</text>

  <rect class="chip" x="24" y="194" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="224" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="254" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="284" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="211" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="241" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="271" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="301" text-anchor="middle">D</text>
  <text class="sm" x="62" y="211">releases the caged water</text>
  <text class="sm" x="62" y="241">nonpolar chains bond covalently</text>
  <text class="sm" x="62" y="271">reactions always favor more order</text>
  <text class="sm" x="62" y="301">water H-bonds to the buried chains</text>

  <!-- beat 2: widen the accounting to the whole system -->
  <g data-from="1">
    <rect x="24" y="64" width="592" height="30" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="84" text-anchor="middle">SYSTEM = protein + solvent &#183; the water is most of it</text>
  </g>

  <!-- beat 3: the water column is the one that pays -->
  <g data-from="2">
    <rect x="332" y="104" width="284" height="56" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="tag" x="348" y="126" fill="var(--correct)">&#916;S SURROUNDING WATER</text>
    <text class="sm"  x="348" y="148" fill="var(--correct)">+ + rigid cage &#8594; free bulk water</text>
    <text class="lbl" x="320" y="182" text-anchor="middle">&#916;S(system) &gt; 0 &#8594; &#916;G &lt; 0, spontaneous</text>

    <rect x="24" y="194" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="211" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm"  x="62"  y="211" fill="var(--correct)">releases the caged water</text>
    <text class="sm"  x="350" y="211" fill="var(--correct)">solvent entropy jumps &#8594; favorable</text>
  </g>

  <!-- beat 4: B invents bonds, D invents hydrogen bonds to grease -->
  <g data-from="3">
    <line x1="58" y1="236" x2="300" y2="236" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="58" y1="296" x2="300" y2="296" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="350" y="241" fill="var(--incorrect)">no C&#8211;C bond forms on folding</text>
    <text class="sm" x="350" y="301" fill="var(--incorrect)">no H-bond donor, and buried = dry</text>
  </g>

  <!-- beat 5: C states the second law backward -->
  <g data-from="4">
    <line x1="58" y1="266" x2="300" y2="266" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="350" y="271" fill="var(--incorrect)">the second law runs the other way</text>
  </g>

  <!-- beat 6: the habit to keep -->
  <g data-from="5">
    <rect x="24" y="316" width="592" height="32" rx="10" fill="var(--correct)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="338" text-anchor="middle" fill="var(--correct)">Order somewhere? Ask what the solvent gained.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Chain gets MORE ordered — but ΔG < 0. Where's the win?"},
    {t: 6.27,  cap: "System = protein + solvent. Water dominates the count."},
    {t: 11.58, cap: "Ordered cage → bulk water: ΔS(water) ↑ drives folding"},
    {t: 19.69, cap: "B: no C–C bonds form. D: nonpolar can't H-bond water"},
    {t: 27.16, cap: "C reverses the 2nd law: entropy of universe increases"},
    {t: 33.27, cap: "Rule: always price the solvent's entropy first"}
  ]
});
