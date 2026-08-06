/* Role conflict vs role strain is settled by counting statuses: one status with
   competing demands, or two statuses pulling apart.
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("kimgipb", {
  dur: 35,
  css: `
svg[data-x="kimgipb"]{font-family:inherit}
svg[data-x="kimgipb"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kimgipb"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kimgipb"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kimgipb"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Role conflict versus role strain decided by counting statuses">
  <text class="tag" x="24" y="24">COUNT THE STATUSES PULLING ON HER</text>

  <!-- beat 1 base: the two sides of the axis, and the four labels on offer -->
  <rect x="24" y="34" width="284" height="28" rx="8" fill="var(--surface-2)"/>
  <text class="lbl" x="166" y="53" text-anchor="middle">tension INSIDE one status</text>
  <rect x="332" y="34" width="284" height="28" rx="8" fill="var(--surface-2)"/>
  <text class="lbl" x="474" y="53" text-anchor="middle">tension BETWEEN two statuses</text>

  <rect class="chip" x="24" y="180" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="212" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="244" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="276" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="198" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="230" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="262" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="294" text-anchor="middle">D</text>
  <text class="sm" x="64" y="198">Role strain</text>
  <text class="sm" x="64" y="230">Role exit</text>
  <text class="sm" x="64" y="262">Status inconsistency</text>
  <text class="sm" x="64" y="294">Role conflict</text>

  <!-- beat 2: two statuses, named -->
  <g data-from="1">
    <rect class="chip" x="340" y="70" width="112" height="32" rx="10"/>
    <text class="lbl" x="396" y="91" text-anchor="middle">physician</text>
    <text class="lbl" x="474" y="92" text-anchor="middle" fill="var(--warn)">&#8596;</text>
    <rect class="chip" x="496" y="70" width="112" height="32" rx="10"/>
    <text class="lbl" x="552" y="91" text-anchor="middle">mother</text>
    <text class="sm" x="474" y="120" text-anchor="middle">two statuses, two packages of demands</text>
  </g>

  <!-- beat 3: two statuses clashing is role conflict -->
  <g data-from="2">
    <rect x="332" y="132" width="284" height="32" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="474" y="153" text-anchor="middle" fill="var(--correct)">ROLE CONFLICT &#10003;</text>
    <rect x="24" y="276" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="294" text-anchor="middle" fill="var(--correct)">D</text>
    <text class="sm" x="220" y="294" fill="var(--correct)">&#10003; two statuses pulling against each other</text>
  </g>

  <!-- beat 4: strain is what the other column looks like -->
  <g data-from="3">
    <rect class="chip" x="110" y="70" width="112" height="32" rx="10"/>
    <text class="lbl" x="166" y="91" text-anchor="middle">physician</text>
    <text class="sm" x="166" y="120" text-anchor="middle">one status: be efficient AND warm</text>
    <rect x="24" y="132" width="284" height="32" rx="10" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="lbl" x="166" y="153" text-anchor="middle">ROLE STRAIN</text>
    <line x1="60" y1="193" x2="212" y2="193" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="220" y="198" fill="var(--incorrect)">needs both demands inside ONE status</text>
  </g>

  <!-- beat 5: the two labels that describe something else entirely -->
  <g data-from="4">
    <line x1="60" y1="225" x2="212" y2="225" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="60" y1="257" x2="212" y2="257" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="220" y="230" fill="var(--incorrect)">she leaves neither role behind</text>
    <text class="sm" x="220" y="262" fill="var(--incorrect)">rank mismatch &#8212; high education, low income</text>
  </g>

  <!-- beat 6: the rule -->
  <g data-from="5">
    <rect x="24" y="312" width="592" height="32" rx="10" fill="var(--accent)" fill-opacity=".12"/>
    <text class="lbl" x="320" y="333" text-anchor="middle">two statuses &#8594; conflict &#183; one status &#8594; strain</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Axis: tension WITHIN one status, or BETWEEN two?"},
    {t: 5.15,  cap: "Physician + mother = two distinct statuses"},
    {t: 10.46, cap: "Clash between statuses = role conflict ✓"},
    {t: 14.17, cap: "Role strain: competing demands INSIDE one role"},
    {t: 20.92, cap: "Role exit = quitting a status; inconsistency = rank mismatch"},
    {t: 29.83, cap: "Two statuses → conflict. One status → strain."}
  ]
});
