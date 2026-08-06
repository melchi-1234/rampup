/* Activity goes full, zero, full again. Complete reversal puts this on the
   reversible end of the axis, which is what a cofactor looks like. */
RU_EX.reg("k1y8udt4", {
  dur: 41,
  css: `
svg[data-x="k1y8udt4"]{font-family:inherit}
svg[data-x="k1y8udt4"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1y8udt4"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1y8udt4"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1y8udt4"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a chelated enzyme regains full activity when magnesium is added back">
  <text class="tag" x="24" y="24">ACTIVITY: FULL &#8594; ZERO &#8594; FULL AGAIN</text>

  <!-- base frame: the three states -->
  <rect x="24"  y="34" width="160" height="52" rx="10" fill="var(--surface-2)"/>
  <rect x="216" y="34" width="160" height="52" rx="10" fill="var(--surface-2)"/>
  <rect x="408" y="34" width="160" height="52" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="104" y="56" text-anchor="middle">enzyme</text>
  <text class="sm"  x="104" y="74" text-anchor="middle">full activity</text>
  <text class="lbl" x="296" y="56" text-anchor="middle" style="fill:var(--incorrect)">+ EDTA</text>
  <text class="sm"  x="296" y="74" text-anchor="middle">activity &#8594; zero</text>
  <text class="lbl" x="488" y="56" text-anchor="middle" style="fill:var(--correct)">+ Mg&#178;&#8314;</text>
  <text class="sm"  x="488" y="74" text-anchor="middle">FULL activity back</text>
  <line x1="188" y1="60" x2="206" y2="60" stroke="var(--border-strong)" stroke-width="2"/>
  <polygon points="214,60 204,55 204,65" fill="var(--border-strong)"/>
  <line x1="380" y1="60" x2="398" y2="60" stroke="var(--border-strong)" stroke-width="2"/>
  <polygon points="406,60 396,55 396,65" fill="var(--border-strong)"/>

  <!-- base frame: all four candidates -->
  <rect class="chip" x="24" y="154" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="192" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="230" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="268" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="172" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="210" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="248" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="286" text-anchor="middle">D</text>
  <text class="sm" x="64" y="172">Mg&#178;&#8314; is a required COFACTOR</text>
  <text class="sm" x="64" y="210">Mg&#178;&#8314; displaces the substrate</text>
  <text class="sm" x="64" y="248">Mg&#178;&#8314; is the SUBSTRATE</text>
  <text class="sm" x="64" y="286">EDTA denatured, Mg&#178;&#8314; refolded</text>

  <!-- beat 2: the axis, and which end this landed on -->
  <g data-from="1">
    <rect x="24"  y="96" width="272" height="32" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="160" y="117" text-anchor="middle">PERMANENT damage</text>
    <rect x="320" y="96" width="272" height="32" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="456" y="117" text-anchor="middle" style="fill:var(--correct)">REVERSIBLE loss</text>
    <text class="sm"  x="456" y="145" text-anchor="middle" style="fill:var(--correct)">it came all the way back</text>
  </g>

  <!-- beat 3: apoenzyme plus cofactor rebuilds the holoenzyme -->
  <g data-from="2">
    <rect x="24" y="154" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="172" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm" x="300" y="172" style="fill:var(--correct)">apoenzyme + cofactor &#8594; holoenzyme</text>
  </g>

  <!-- beat 4: denaturation lives on the permanent end -->
  <g data-from="3">
    <rect x="24" y="96" width="272" height="32" rx="10" fill="var(--incorrect)" fill-opacity=".12"
          stroke="var(--incorrect)" stroke-width="2"/>
    <text class="lbl" x="160" y="117" text-anchor="middle" style="fill:var(--incorrect)">PERMANENT damage</text>
    <line x1="64" y1="281" x2="292" y2="281" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="286" style="fill:var(--incorrect)">unfolding is not undone by a salt</text>
  </g>

  <!-- beat 5: consumed vs reused, and the displacement bait -->
  <g data-from="4">
    <line x1="64" y1="243" x2="292" y2="243" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="248" style="fill:var(--incorrect)">a substrate is consumed; this was not</text>
    <line x1="64" y1="205" x2="292" y2="205" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="300" y="210" style="fill:var(--incorrect)">displacing substrate would INHIBIT</text>
  </g>

  <!-- beat 6: the one-line rule -->
  <g data-from="5">
    <rect x="24" y="306" width="568" height="34" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="328" text-anchor="middle">lost to a chelator, restored by the metal = COFACTOR</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "EDTA out → dead. Mg²⁺ back → full activity"},
    {t: 7.71,  cap: "Axis: reversible vs permanent damage"},
    {t: 15.26, cap: "apoenzyme + Mg²⁺ cofactor → active holoenzyme"},
    {t: 22.33, cap: "Denaturation ≠ undone by adding a salt"},
    {t: 28.68, cap: "Cofactor: reused. Substrate: consumed."},
    {t: 36.63, cap: "Lost on chelation, back with metal = cofactor"}
  ]
});
