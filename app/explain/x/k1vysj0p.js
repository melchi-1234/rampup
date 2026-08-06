/* Garcia effect — a 2x2 of which pairings are learned easily. */
RU_EX.reg("k1vysj0p", {
  dur: 37,
  css: `
svg[data-x="k1vysj0p"]{font-family:inherit}
svg[data-x="k1vysj0p"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1vysj0p"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1vysj0p"] .hd{fill:var(--muted);font-size:12px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1vysj0p"] .cell{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}

svg[data-x="k1vysj0p"] .c1,svg[data-x="k1vysj0p"] .c2,svg[data-x="k1vysj0p"] .c3,
svg[data-x="k1vysj0p"] .c4,svg[data-x="k1vysj0p"] .why,svg[data-x="k1vysj0p"] .adapt,
svg[data-x="k1vysj0p"] .fin{opacity:0;transition:opacity .45s ease}
svg[data-x="k1vysj0p"][data-step="0"] .c1,svg[data-x="k1vysj0p"][data-step="1"] .c1,
svg[data-x="k1vysj0p"][data-step="2"] .c1,svg[data-x="k1vysj0p"][data-step="3"] .c1,
svg[data-x="k1vysj0p"][data-step="4"] .c1,svg[data-x="k1vysj0p"][data-step="5"] .c1,
svg[data-x="k1vysj0p"][data-step="6"] .c1{opacity:1}
svg[data-x="k1vysj0p"][data-step="1"] .c2,svg[data-x="k1vysj0p"][data-step="2"] .c2,
svg[data-x="k1vysj0p"][data-step="3"] .c2,svg[data-x="k1vysj0p"][data-step="4"] .c2,
svg[data-x="k1vysj0p"][data-step="5"] .c2,svg[data-x="k1vysj0p"][data-step="6"] .c2{opacity:1}
svg[data-x="k1vysj0p"][data-step="2"] .c3,svg[data-x="k1vysj0p"][data-step="3"] .c3,
svg[data-x="k1vysj0p"][data-step="4"] .c3,svg[data-x="k1vysj0p"][data-step="5"] .c3,
svg[data-x="k1vysj0p"][data-step="6"] .c3{opacity:1}
svg[data-x="k1vysj0p"][data-step="3"] .c4,svg[data-x="k1vysj0p"][data-step="4"] .c4,
svg[data-x="k1vysj0p"][data-step="5"] .c4,svg[data-x="k1vysj0p"][data-step="6"] .c4{opacity:1}
svg[data-x="k1vysj0p"][data-step="4"] .why,svg[data-x="k1vysj0p"][data-step="5"] .why,
svg[data-x="k1vysj0p"][data-step="6"] .why{opacity:1}
svg[data-x="k1vysj0p"][data-step="5"] .adapt,svg[data-x="k1vysj0p"][data-step="6"] .adapt{opacity:1}
svg[data-x="k1vysj0p"][data-step="6"] .fin{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which stimulus pairings are learned easily">
  <text class="hd" x="212" y="52" text-anchor="middle">FOLLOWED BY NAUSEA</text>
  <text class="hd" x="448" y="52" text-anchor="middle">FOLLOWED BY SHOCK</text>
  <text class="hd" x="76" y="112" text-anchor="middle">TASTE</text>
  <text class="hd" x="76" y="228" text-anchor="middle">LIGHT +</text>
  <text class="hd" x="76" y="244" text-anchor="middle">SOUND</text>

  <g class="c1">
    <rect class="cell" x="130" y="66" width="164" height="86" rx="14"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)"/>
    <text class="lbl" x="212" y="100" text-anchor="middle" style="fill:var(--correct)">learned fast</text>
    <text class="sm"  x="212" y="122" text-anchor="middle">one trial, hours apart</text>
    <text class="sm"  x="212" y="140" text-anchor="middle">lasts for life</text>
  </g>
  <g class="c2">
    <rect class="cell" x="130" y="182" width="164" height="86" rx="14"/>
    <text class="lbl" x="212" y="216" text-anchor="middle" style="fill:var(--incorrect)">barely learned</text>
    <text class="sm"  x="212" y="238" text-anchor="middle">same nausea,</text>
    <text class="sm"  x="212" y="256" text-anchor="middle">same timing</text>
  </g>
  <g class="c3">
    <rect class="cell" x="366" y="66" width="164" height="86" rx="14"/>
    <text class="lbl" x="448" y="100" text-anchor="middle" style="fill:var(--incorrect)">fails too</text>
    <text class="sm"  x="448" y="122" text-anchor="middle">taste won't pair</text>
    <text class="sm"  x="448" y="140" text-anchor="middle">with pain</text>
  </g>
  <g class="c4">
    <rect class="cell" x="366" y="182" width="164" height="86" rx="14"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)"/>
    <text class="lbl" x="448" y="216" text-anchor="middle" style="fill:var(--correct)">works fine</text>
    <text class="sm"  x="448" y="238" text-anchor="middle">external cue with</text>
    <text class="sm"  x="448" y="256" text-anchor="middle">external threat</text>
  </g>

  <g class="why">
    <text class="sm" x="320" y="296" text-anchor="middle">the diagonal works, the off-diagonal does not &mdash; timing was identical</text>
  </g>
  <g class="adapt">
    <text class="sm" x="320" y="316" text-anchor="middle">a flavour that made you sick is worth avoiding: that is worth being born knowing</text>
  </g>
  <g class="fin">
    <rect x="170" y="326" width="300" height="28" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="345" text-anchor="middle" style="fill:var(--accent)">biological preparedness</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Taste + nausea: learned in ONE trial"},
    {t: 5, cap: "Light and sound + nausea: barely learned"},
    {t: 10, cap: "Taste + shock: also fails"},
    {t: 14, cap: "Light and sound + shock: works fine"},
    {t: 18, cap: "Not timing, not repetition: the PAIRING matters"},
    {t: 24, cap: "Linking flavour to illness avoids poison"},
    {t: 30, cap: "Biological preparedness — the Garcia effect"}
  ]
});
