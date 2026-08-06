/* Perspective items run on one axis: whose interests the institution serves,
   with a macro/micro pre-filter in front of it.
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken. */
RU_EX.reg("k1nnru8j", {
  dur: 42,
  css: `
svg[data-x="k1nnru8j"]{font-family:inherit}
svg[data-x="k1nnru8j"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1nnru8j"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1nnru8j"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1nnru8j"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Sorting four sociological perspectives by whose interests they serve">
  <text class="tag" x="24" y="24">ONE AXIS &#183; WHOSE INTERESTS DOES THE INSTITUTION SERVE?</text>

  <!-- beat 1 base: the claim and the four candidate lenses -->
  <rect x="24" y="34" width="592" height="32" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="36" y="54">the stem: testing passes family advantage down generations</text>

  <rect class="chip" x="24" y="112" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="146" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="180" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="214" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="130" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="164" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="198" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="232" text-anchor="middle">D</text>
  <text class="sm" x="64" y="130">Structural functionalism</text>
  <text class="sm" x="64" y="164">Feminist theory</text>
  <text class="sm" x="64" y="198">Conflict theory</text>
  <text class="sm" x="64" y="232">Symbolic interactionism</text>

  <!-- the axis itself, drawn before anything sits on it -->
  <text class="tag" x="24" y="258">WHERE THE MACRO LENSES SIT ON THE AXIS</text>
  <line x1="150" y1="290" x2="470" y2="290" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="200" y1="283" x2="200" y2="297" stroke="var(--text)" stroke-width="2"/>
  <line x1="430" y1="283" x2="430" y2="297" stroke="var(--text)" stroke-width="2"/>
  <text class="sm" x="200" y="278" text-anchor="middle">everyone benefits</text>
  <text class="sm" x="430" y="278" text-anchor="middle">the advantaged benefit</text>

  <!-- beat 2: the macro/micro pre-filter drops interactionism -->
  <g data-from="1">
    <rect class="chip" x="24" y="76" width="592" height="30" rx="10"/>
    <text class="sm" x="36" y="96">PRE-FILTER: this is macro structure, not micro meaning</text>
    <line x1="60" y1="227" x2="236" y2="227" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="244" y="232" fill="var(--incorrect)">meanings in daily interaction &#8212; wrong scale</text>
  </g>

  <!-- beat 3: functionalism scores the same fact with the opposite sign -->
  <g data-from="2">
    <circle cx="200" cy="290" r="6" fill="var(--incorrect)"/>
    <text class="sm" x="200" y="310" text-anchor="middle" fill="var(--incorrect)">functionalism</text>
    <line x1="60" y1="125" x2="236" y2="125" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="244" y="130" fill="var(--incorrect)">sorting scored as a shared gain, not a transfer</text>
  </g>

  <!-- beat 4: conflict theory is where the stem already sits -->
  <g data-from="3">
    <circle cx="430" cy="290" r="6" fill="var(--correct)"/>
    <text class="sm" x="430" y="310" text-anchor="middle" fill="var(--correct)">conflict theory &#183; the stem</text>
    <rect x="24" y="180" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="198" text-anchor="middle" fill="var(--correct)">C</text>
    <text class="sm" x="244" y="198" fill="var(--correct)">&#10003; institutions keep the advantaged on top</text>
  </g>

  <!-- beat 5: feminist theory is the right family, the wrong axis -->
  <g data-from="4">
    <circle cx="430" cy="290" r="12" fill="none" stroke="var(--warn)" stroke-width="2"/>
    <line x1="60" y1="159" x2="236" y2="159" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="244" y="164" fill="var(--incorrect)">conflict lens, but its axis is gender</text>
    <text class="sm" x="320" y="330" text-anchor="middle" fill="var(--warn)">the stem names family wealth, so the axis is class</text>
  </g>

  <!-- beat 6: the habit to keep -->
  <g data-from="5">
    <text class="lbl" x="320" y="348" text-anchor="middle" fill="var(--accent)">name the axis of inequality, then name the theory</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Axis: whose interests does the institution serve?"},
    {t: 6.83,  cap: "Macro structures, not micro meanings → not interactionism"},
    {t: 14.86, cap: "Functionalism: tests sort talent, society benefits"},
    {t: 21.77, cap: "Conflict: schooling reproduces class advantage ✓"},
    {t: 29.96, cap: "Feminist = conflict, but its axis is gender, not class"},
    {t: 37.43, cap: "Identify the axis first, then pick the lens"}
  ]
});
