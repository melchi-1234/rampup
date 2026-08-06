/* Beam torque. Every wrong answer here is a specific slip, so each one gets
   its arithmetic drawn beside it. Beat 1 is the ungated base frame. */
RU_EX.reg("k11pc7ev", {
  dur: 45,
  css: `
svg[data-x="k11pc7ev"]{font-family:inherit}
svg[data-x="k11pc7ev"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k11pc7ev"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k11pc7ev"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k11pc7ev"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Tension in a cable supporting a hinged beam">
  <text class="tag" x="24" y="26">HINGED BEAM &#183; CABLE AT 30&#176; &#183; FIND THE TENSION</text>

  <!-- wall, beam, cable -->
  <line x1="40" y1="40" x2="40" y2="150" stroke="var(--border-strong)" stroke-width="3"/>
  <line x1="40" y1="120" x2="316" y2="120" stroke="var(--text)" stroke-width="2.5"/>
  <line x1="40" y1="52"  x2="316" y2="120" stroke="var(--accent)" stroke-width="2"/>
  <circle cx="40" cy="120" r="4" fill="var(--text)"/>
  <text class="sm" x="46" y="140">hinge</text>
  <text class="sm" x="180" y="98" style="fill:var(--accent)">cable</text>
  <text class="sm" x="292" y="112" text-anchor="end">30&#176;</text>
  <text class="sm" x="178" y="140" text-anchor="middle">6.0 m beam, 20 kg</text>
  <line x1="224" y1="120" x2="224" y2="152" stroke="var(--warn)" stroke-width="2"/>
  <text class="sm" x="224" y="168" text-anchor="middle" style="fill:var(--warn)">10 kg at 4.0 m</text>

  <!-- candidates -->
  <line x1="350" y1="16" x2="350" y2="300" stroke="var(--border-strong)" stroke-width="1"/>
  <rect class="chip" x="368" y="38"  width="96" height="28" rx="14"/>
  <rect class="chip" x="368" y="82"  width="96" height="28" rx="14"/>
  <rect class="chip" x="368" y="126" width="96" height="28" rx="14"/>
  <rect class="chip" x="368" y="170" width="96" height="28" rx="14"/>
  <text class="lbl" x="416" y="57"  text-anchor="middle">1.7&#215;10&#178;</text>
  <text class="lbl" x="416" y="101" text-anchor="middle">2.9&#215;10&#178;</text>
  <text class="lbl" x="416" y="145" text-anchor="middle">3.3&#215;10&#178;</text>
  <text class="lbl" x="416" y="189" text-anchor="middle">6.7&#215;10&#178;</text>

  <!-- beat 2: pick the hinge as the pivot -->
  <g data-from="1">
    <text class="sm" x="24" y="196" style="fill:var(--accent)">take torques about the hinge &#8212; the hinge force has no lever arm, so it drops out</text>
  </g>

  <!-- beat 3: the beam's own weight -->
  <g data-from="2">
    <text class="sm" x="24" y="224">beam: 200 N at its center, 3.0 m &#8594; 600 N&#183;m</text>
  </g>

  <!-- beat 4: the hanging load -->
  <g data-from="3">
    <text class="sm"  x="24" y="248">load: 100 N at 4.0 m &#8594; 400 N&#183;m</text>
    <text class="lbl" x="24" y="272" style="fill:var(--warn)">1000 N&#183;m turning the beam down</text>
  </g>

  <!-- beat 5: only the perpendicular component lifts -->
  <g data-from="4">
    <text class="lbl" x="24" y="300" style="fill:var(--accent)">T &#183; sin30 &#183; 6.0 = 3.0 T lifting</text>
    <text class="sm"  x="24" y="320">only the part perpendicular to the beam does any turning</text>
  </g>

  <!-- beat 6: the answer, and the slip that gives 167 -->
  <g data-from="5">
    <rect x="368" y="126" width="96" height="28" rx="14" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="416" y="145" text-anchor="middle" style="fill:var(--correct)">3.3&#215;10&#178;</text>
    <text class="sm" x="476" y="145" style="fill:var(--correct)">3.0 T = 1000</text>
    <line x1="374" y1="52" x2="458" y2="52" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="476" y="57" style="fill:var(--incorrect)">no sine: 1000/6</text>
    <line x1="374" y1="96" x2="458" y2="96" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="476" y="101" style="fill:var(--incorrect)">used tan30</text>
    <line x1="374" y1="184" x2="458" y2="184" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="476" y="189" style="fill:var(--incorrect)">cable at 3.0 m</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "20 kg beam, 6.0 m · 10 kg load at 4.0 m · cable at 30°"},
    {t: 8.11,  cap: "Torque about the hinge → the hinge force drops out"},
    {t: 15.18, cap: "Beam: 200 N at its center, 3.0 m → 600 N·m"},
    {t: 21.53, cap: "Load: 100 N at 4.0 m → 400 · total 1000 N·m down"},
    {t: 28.12, cap: "Cable: only T·sin30 lifts · × 6.0 m = 3.0 T"},
    {t: 35.75, cap: "3.0 T = 1000 → 333 N · no sine → 167 N"}
  ]
});
