/* Self-selection: the flaw is in the arrow that assigns people to groups,
   so trace that arrow first. Beat 1 is the ungated base frame. */
RU_EX.reg("k1l2msd0", {
  dur: 41,
  css: `
svg[data-x="k1l2msd0"]{font-family:inherit}
svg[data-x="k1l2msd0"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1l2msd0"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1l2msd0"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1l2msd0"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why self-selection into groups blocks a causal conclusion about a meditation app">
  <text class="tag" x="24" y="22">APP USERS REPORTED LOWER ANXIETY &#183; WHAT KILLS THE CAUSAL CLAIM?</text>

  <!-- beat 1 base frame: the design, with the assignment step exposed -->
  <rect x="24" y="38" width="110" height="44" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="79" y="66" text-anchor="middle">volunteers</text>
  <text class="sm"  x="150" y="56">chose their own group</text>
  <line x1="142" y1="70" x2="296" y2="70" stroke="var(--border-strong)" stroke-width="2"/>
  <path d="M296 65 L306 70 L296 75 Z" fill="var(--border-strong)"/>
  <text class="tag" x="150" y="88" style="fill:var(--incorrect)">NO RANDOM ASSIGNMENT</text>

  <rect x="308" y="34" width="140" height="36" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="378" y="57" text-anchor="middle">used the app</text>
  <rect x="308" y="78" width="140" height="36" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="378" y="101" text-anchor="middle">control</text>

  <line x1="448" y1="52" x2="464" y2="52" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="448" y1="96" x2="464" y2="96" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="464" y1="52" x2="464" y2="96" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="464" y1="74" x2="478" y2="74" stroke="var(--border-strong)" stroke-width="2"/>
  <path d="M478 69 L488 74 L478 79 Z" fill="var(--border-strong)"/>
  <rect x="488" y="50" width="128" height="48" rx="10" fill="var(--surface-2)"/>
  <text class="lbl" x="552" y="72" text-anchor="middle">anxiety gap</text>
  <text class="sm"  x="552" y="90" text-anchor="middle">app group lower</text>

  <!-- the four candidate flaws, letter column then claim column -->
  <rect class="chip" x="24" y="204" width="28" height="24" rx="8"/>
  <rect class="chip" x="24" y="236" width="28" height="24" rx="8"/>
  <rect class="chip" x="24" y="268" width="28" height="24" rx="8"/>
  <rect class="chip" x="24" y="300" width="28" height="24" rx="8"/>
  <text class="lbl" x="38" y="222" text-anchor="middle">A</text>
  <text class="lbl" x="38" y="254" text-anchor="middle">B</text>
  <text class="lbl" x="38" y="286" text-anchor="middle">C</text>
  <text class="lbl" x="38" y="318" text-anchor="middle">D</text>
  <text class="sm" x="60" y="222">self-selection confounds it</text>
  <text class="sm" x="60" y="254">no placebo, so regression to the mean</text>
  <text class="sm" x="60" y="286">sample too small for significance</text>
  <text class="sm" x="60" y="318">self-report makes it qualitative</text>

  <!-- beat 2: choosing drags everything else along -->
  <g data-from="1">
    <rect x="24" y="124" width="592" height="32" rx="10" fill="var(--warn)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="145" text-anchor="middle" style="fill:var(--warn)">self-selection &#8594; whatever made them choose comes too</text>
  </g>

  <!-- beat 3: name the things that ride along -->
  <g data-from="2">
    <rect class="chip" x="24"  y="162" width="186" height="30" rx="15"/>
    <rect class="chip" x="227" y="162" width="186" height="30" rx="15"/>
    <rect class="chip" x="430" y="162" width="186" height="30" rx="15"/>
    <text class="sm" x="117" y="181" text-anchor="middle">motivation</text>
    <text class="sm" x="320" y="181" text-anchor="middle">baseline anxiety</text>
    <text class="sm" x="523" y="181" text-anchor="middle">sleep &#183; exercise habits</text>
  </g>

  <!-- beat 4: no random assignment means correlation only -->
  <g data-from="3">
    <rect x="20" y="202" width="336" height="28" rx="10" fill="var(--correct)" fill-opacity=".16"
          stroke="var(--correct)" stroke-width="2"/>
    <rect x="24" y="204" width="28" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="38" y="222" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm"  x="60" y="222" style="fill:var(--correct)">self-selection confounds it</text>
    <text class="sm"  x="370" y="222" style="fill:var(--correct)">quasi-experimental: correlation</text>
  </g>

  <!-- beat 5: the other three each miss -->
  <g data-from="4">
    <line x1="60" y1="249" x2="310" y2="249" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="370" y="254" style="fill:var(--incorrect)">needs extreme baseline scores</text>
    <line x1="60" y1="281" x2="284" y2="281" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="370" y="286" style="fill:var(--incorrect)">the result was significant</text>
    <line x1="60" y1="313" x2="277" y2="313" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="370" y="318" style="fill:var(--incorrect)">self-report is still numeric</text>
  </g>

  <!-- beat 6: the habit -->
  <g data-from="5">
    <rect x="142" y="40" width="160" height="56" rx="10" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <text class="lbl" x="24" y="346" style="fill:var(--accent)">causal claim? check how people got into their groups</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Volunteers chose their own group; no randomization"},
    {t: 4.99,  cap: "Self-selection → confounds ride along with the choice"},
    {t: 11.66, cap: "Motivation, baseline anxiety, habits differ pre-app"},
    {t: 16.65, cap: "Quasi-experiment: correlation, not causation"},
    {t: 22.12, cap: "Sig. already reached; self-report is still quantitative"},
    {t: 35.35, cap: "Causal claim? Check assignment before anything else"}
  ]
});
