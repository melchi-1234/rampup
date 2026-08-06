/* The S-curve is the evidence; multiple talking sites are the only thing that makes one. */
RU_EX.reg("k99pdmo", {
  dur: 33,
  css: `
svg[data-x="k99pdmo"]{font-family:inherit}
svg[data-x="k99pdmo"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k99pdmo"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k99pdmo"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k99pdmo"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why hemoglobin is sigmoidal and myoglobin is not">
  <text class="tag" x="24" y="26">TWO BINDING CURVES</text>
  <line x1="60" y1="180" x2="300" y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="50"  x2="60"  y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <text class="tag" x="60" y="198">pO&#8322; &#8594;</text>
  <text class="tag" x="24" y="46">SATURATION</text>
  <path d="M60 176 C110 172 130 120 170 92 C210 64 250 58 300 56"
        fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text class="sm" x="188" y="132" fill="var(--accent)">hemoglobin &#183; S-shaped</text>
  <path d="M60 176 C100 100 170 68 300 60" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="5 4"/>
  <text class="sm" x="120" y="80">myoglobin &#183; hyperbolic</text>
  <g data-from="1">
    <text class="sm" x="330" y="56" fill="var(--accent)">an S-curve means the affinity CHANGES</text>
    <text class="sm" x="330" y="76">as the protein fills &#8212; hard first, then easy</text>
  </g>
  <g data-from="2">
    <text class="lbl" x="330" y="112">so it needs more than one site,</text>
    <text class="lbl" x="330" y="132">and they have to influence each other</text>
  </g>
  <g data-from="3">
    <circle cx="380" cy="180" r="17" fill="var(--correct)" fill-opacity=".25" stroke="var(--correct)" stroke-width="2"/>
    <circle cx="424" cy="180" r="17" fill="var(--correct)" fill-opacity=".25" stroke="var(--correct)" stroke-width="2"/>
    <circle cx="380" cy="222" r="17" fill="var(--correct)" fill-opacity=".25" stroke="var(--correct)" stroke-width="2"/>
    <circle cx="424" cy="222" r="17" fill="var(--correct)" fill-opacity=".25" stroke="var(--correct)" stroke-width="2"/>
    <text class="sm" x="460" y="196" fill="var(--correct)">hemoglobin: 4 subunits</text>
    <text class="sm" x="460" y="216" fill="var(--correct)">one binds &#8594; the rest bind easier</text>
  </g>
  <g data-from="4">
    <circle cx="380" cy="276" r="17" fill="var(--surface-2)" stroke="var(--text)" stroke-width="2"/>
    <text class="sm" x="416" y="272">myoglobin: one chain, one site</text>
    <text class="sm" x="416" y="292">nothing to cooperate with</text>
  </g>
  <g data-from="5">
    <text class="sm" x="24" y="240">one site can only give a hyperbola</text>
    <text class="sm" x="24" y="266" fill="var(--incorrect)">myoglobin DOES have a heme</text>
    <text class="sm" x="24" y="286" fill="var(--incorrect)">and binding is reversible, not permanent</text>
    <text class="sm" x="24" y="306" fill="var(--incorrect)">molecular weight has nothing to do with it</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Hemoglobin: sigmoidal · myoglobin: hyperbolic"},
    {t: 5.23, cap: "An S-curve means affinity CHANGES as it fills"},
    {t: 11.02, cap: "That requires multiple sites that affect each other"},
    {t: 14.65, cap: "Hemoglobin: 4 subunits · one bound raises the others"},
    {t: 20.6, cap: "Myoglobin: one chain, one site — nothing to cooperate"},
    {t: 26.15, cap: "One site → hyperbola · myoglobin DOES have heme"}
  ]
});
