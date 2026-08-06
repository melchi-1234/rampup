/* One axis sorts all four theories: whom is the practice said to serve, from a
   single private ledger out to the whole system. Beat 1 is the ungated frame. */
RU_EX.reg("kdaqtsm", {
  dur: 36,
  css: `
svg[data-x="kdaqtsm"]{font-family:inherit}
svg[data-x="kdaqtsm"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdaqtsm"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kdaqtsm"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kdaqtsm"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Four sociological theories sorted by whom the ritual is said to serve">
  <text class="tag" x="24" y="26">ONE AXIS SORTS ALL FOUR</text>

  <rect x="24" y="38" width="592" height="26" rx="13" fill="var(--surface-2)"/>
  <text class="sm" x="40" y="56">&#8592; one individual</text>
  <text class="tag" x="320" y="56" text-anchor="middle">WHOM DOES THE RITUAL SERVE?</text>
  <text class="sm" x="600" y="56" text-anchor="end">the whole system &#8594;</text>

  <!-- the four theories, already sorted along that axis -->
  <rect class="chip" x="24" y="80" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="126" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="172" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="218" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="97"  text-anchor="middle">A</text>
  <text class="lbl" x="39" y="143" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="189" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="235" text-anchor="middle">D</text>
  <text class="sm" x="64" y="97"  fill="var(--text)">Rational choice</text>
  <text class="sm" x="64" y="143" fill="var(--text)">Symbolic interactionism</text>
  <text class="sm" x="64" y="189" fill="var(--text)">Conflict theory</text>
  <text class="sm" x="64" y="235" fill="var(--text)">Structural functionalism</text>

  <!-- what the stem actually says -->
  <text class="tag" x="24" y="272">THE STEM SAYS</text>
  <rect class="chip" x="24"  y="282" width="192" height="30" rx="10"/>
  <rect class="chip" x="224" y="282" width="192" height="30" rx="10"/>
  <rect class="chip" x="424" y="282" width="192" height="30" rx="10"/>
  <text class="sm" x="120" y="301" text-anchor="middle">brings members together</text>
  <text class="sm" x="320" y="301" text-anchor="middle">reaffirms shared values</text>
  <text class="sm" x="520" y="301" text-anchor="middle">holds it all together</text>

  <!-- beat 2: the whole-system end of the axis is functionalism -->
  <g data-from="1">
    <rect x="24" y="210" width="592" height="40" rx="10" fill="var(--correct)" fill-opacity=".14"/>
    <rect x="24" y="218" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".22"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="235" text-anchor="middle" fill="var(--correct)">D</text>
    <text class="sm" x="64" y="235" fill="var(--correct)">Structural functionalism</text>
    <text class="sm" x="258" y="235" fill="var(--correct)">the whole system</text>
    <text class="sm" x="430" y="235" fill="var(--correct)">cohesion is the tell</text>
  </g>

  <!-- beat 3: conflict needs an elite the stem never names -->
  <g data-from="2">
    <text class="sm" x="258" y="189" fill="var(--text)">elites, not everyone</text>
    <line x1="64" y1="184" x2="182" y2="184" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="430" y="189" fill="var(--incorrect)">no elite is named</text>
  </g>

  <!-- beat 4: symbolic interactionism works one interaction at a time -->
  <g data-from="3">
    <text class="sm" x="258" y="143" fill="var(--text)">meaning between people</text>
    <line x1="64" y1="138" x2="240" y2="138" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="430" y="143" fill="var(--incorrect)">unit here = community</text>
  </g>

  <!-- beat 5: rational choice needs a private ledger -->
  <g data-from="4">
    <text class="sm" x="258" y="97" fill="var(--text)">one private ledger</text>
    <line x1="64" y1="92" x2="182" y2="92" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="430" y="97" fill="var(--incorrect)">no private incentives</text>
  </g>

  <!-- beat 6: every stem phrase is a system-level function -->
  <g data-from="5">
    <rect x="24"  y="282" width="192" height="30" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <rect x="224" y="282" width="192" height="30" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <rect x="424" y="282" width="192" height="30" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="sm" x="120" y="301" text-anchor="middle" fill="var(--correct)">brings members together</text>
    <text class="sm" x="320" y="301" text-anchor="middle" fill="var(--correct)">reaffirms shared values</text>
    <text class="sm" x="520" y="301" text-anchor="middle" fill="var(--correct)">holds it all together</text>
    <text class="sm" x="132" y="272" fill="var(--correct)">&#8594; all system-level functions</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Axis: whom does the ritual serve?"},
    {t: 4.11,  cap: "Whole system + cohesion = functionalism"},
    {t: 11.02, cap: "Conflict: ritual masks inequality, serves elites"},
    {t: 16.97, cap: "SI is micro: meaning built face to face"},
    {t: 25.8,  cap: "Rational choice: individual cost–benefit"},
    {t: 31.91, cap: "Solidarity + cohesion → functionalism"}
  ]
});
