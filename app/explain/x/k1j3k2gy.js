/* Parallel branches each see the full 12 V, so you add CURRENTS. Every wrong
   answer is a branch taken alone, or a series slip. Beat 1 is the base frame. */
RU_EX.reg("k1j3k2gy", {
  dur: 39,
  css: `
svg[data-x="k1j3k2gy"]{font-family:inherit}
svg[data-x="k1j3k2gy"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1j3k2gy"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1j3k2gy"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1j3k2gy"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Total current from a battery feeding a 4 ohm and a 12 ohm resistor in parallel">
  <text class="tag" x="24" y="26">TOTAL CURRENT OUT OF THE BATTERY</text>

  <!-- circuit: rails and branch wires first, boxes paint over them -->
  <line x1="60" y1="70" x2="270" y2="70" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="180" x2="270" y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="170" y1="70" x2="170" y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="270" y1="70" x2="270" y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="70" x2="60" y2="115" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="123" x2="60" y2="180" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="48" y1="115" x2="72" y2="115" stroke="var(--text)" stroke-width="3"/>
  <line x1="53" y1="123" x2="67" y2="123" stroke="var(--text)" stroke-width="2"/>

  <rect x="152" y="108" width="36" height="34" rx="5" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="1.5"/>
  <rect x="246" y="108" width="48" height="34" rx="5" fill="var(--surface-2)" stroke="var(--border-strong)" stroke-width="1.5"/>
  <text class="lbl" x="170" y="130" text-anchor="middle">4 &#8486;</text>
  <text class="lbl" x="270" y="130" text-anchor="middle">12 &#8486;</text>
  <text class="sm"  x="60"  y="200" text-anchor="middle">12 V</text>
  <text class="sm"  x="24"  y="226">Parallel &#8594; each branch gets the full 12 V</text>

  <!-- the four candidate answers, always visible -->
  <rect class="chip" x="336" y="60"  width="280" height="60" rx="10"/>
  <rect class="chip" x="336" y="132" width="280" height="60" rx="10"/>
  <rect class="chip" x="336" y="204" width="280" height="60" rx="10"/>
  <rect class="chip" x="336" y="276" width="280" height="60" rx="10"/>
  <text class="lbl" x="352" y="88">A &#183; 1.0 A</text>
  <text class="lbl" x="352" y="160">B &#183; 0.75 A</text>
  <text class="lbl" x="352" y="232">C &#183; 3.0 A</text>
  <text class="lbl" x="352" y="304">D &#183; 4.0 A</text>

  <!-- beat 2: each branch draws its own current off the same 12 V -->
  <g data-from="1">
    <text class="sm" x="170" y="200" text-anchor="middle" style="fill:var(--text)">12/4 = 3 A</text>
    <text class="sm" x="270" y="200" text-anchor="middle" style="fill:var(--text)">12/12 = 1 A</text>
  </g>

  <!-- beat 3: add the currents -->
  <g data-from="2">
    <rect x="336" y="276" width="280" height="60" rx="10" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="352" y="304" style="fill:var(--correct)">D &#183; 4.0 A</text>
    <text class="sm"  x="352" y="324" style="fill:var(--correct)">3 A + 1 A &#8212; every branch counted</text>
  </g>

  <!-- beat 4: A and C are single branches (and 3 doubles as R_eq) -->
  <g data-from="3">
    <line x1="350" y1="84" x2="420" y2="84" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="350" y1="228" x2="420" y2="228" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="108" style="fill:var(--incorrect)">12/12 &#8212; the 12 &#8486; branch alone</text>
    <text class="sm" x="352" y="252" style="fill:var(--incorrect)">12/4 &#8212; one branch; R_eq = 3.0 &#8486; too</text>
  </g>

  <!-- beat 5: B adds the resistors in series -->
  <g data-from="4">
    <line x1="350" y1="156" x2="430" y2="156" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="180" style="fill:var(--incorrect)">series slip: 4 + 12 = 16, 12/16</text>
  </g>

  <!-- beat 6: parallel resistance is always below the smallest branch -->
  <g data-from="5">
    <rect x="24" y="248" width="296" height="62" rx="10" fill="var(--surface-2)"/>
    <text class="sm" x="38" y="274">1/R = 1/4 + 1/12 &#8594; R = 3.0 &#8486;</text>
    <text class="sm" x="38" y="296">parallel R sits below every branch</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Parallel: each branch sees the full 12 V"},
    {t: 6.99,  cap: "12/4 = 3 A · 12/12 = 1 A"},
    {t: 14.38, cap: "3 A + 1 A = 4.0 A total"},
    {t: 18.89, cap: "1.0 A and 3.0 A = one branch each (3 = R_eq too)"},
    {t: 27.88, cap: "0.75 A: series slip, 4+12=16 Ω, 12/16"},
    {t: 32.71, cap: "Parallel R is always < the smallest resistor"}
  ]
});
