/* DTM: growth rate is the vertical GAP between the two curves, so the answer is
   the stage where they are furthest apart. Beat 1 is the ungated base frame. */
RU_EX.reg("k1koyamo", {
  dur: 40,
  css: `
svg[data-x="k1koyamo"]{font-family:inherit}
svg[data-x="k1koyamo"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1koyamo"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1koyamo"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1koyamo"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Demographic transition model: the birth-death gap peaks in Stage 2">
  <text class="tag" x="24" y="26">GROWTH RATE = BIRTHS &#8722; DEATHS</text>
  <line x1="396" y1="22" x2="416" y2="22" stroke="var(--accent)" stroke-width="3"/>
  <text class="sm" x="422" y="26">births</text>
  <line x1="490" y1="22" x2="510" y2="22" stroke="var(--text)" stroke-width="3"/>
  <text class="sm" x="516" y="26">deaths</text>

  <!-- axes drawn before the curves that cross them -->
  <line x1="60" y1="54" x2="60" y2="196" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="60" y1="196" x2="600" y2="196" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="195" y1="54" x2="195" y2="196" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="330" y1="54" x2="330" y2="196" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="465" y1="54" x2="465" y2="196" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="3 4"/>
  <text class="tag" x="127" y="212" text-anchor="middle">STAGE 1</text>
  <text class="tag" x="262" y="212" text-anchor="middle">STAGE 2</text>
  <text class="tag" x="397" y="212" text-anchor="middle">STAGE 3</text>
  <text class="tag" x="532" y="212" text-anchor="middle">STAGE 4</text>

  <polyline points="60,72 195,74 260,76 330,84 400,118 465,150 530,156 600,158"
            fill="none" stroke="var(--accent)" stroke-width="3"/>
  <polyline points="60,80 130,86 195,84 260,110 330,148 400,158 465,163 530,166 600,168"
            fill="none" stroke="var(--text)" stroke-width="3"/>

  <!-- the four candidate stages -->
  <rect class="chip" x="24" y="226" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="256" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="286" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="316" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="243" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="273" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="303" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="333" text-anchor="middle">D</text>
  <text class="sm" x="64" y="243">Stage 2 &#183; deaths crash, births high</text>
  <text class="sm" x="64" y="273">Stage 1 &#183; fertility is highest</text>
  <text class="sm" x="64" y="303">Stage 4 &#183; biggest population</text>
  <text class="sm" x="64" y="333">Stage 3 &#183; births finally fall</text>

  <!-- beat 2: stage 1 runs high against high, so the gap is nothing -->
  <g data-from="1">
    <line x1="110" y1="90" x2="110" y2="104" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="90" y="118" fill="var(--incorrect)">both high</text>
    <text class="sm" x="90" y="134" fill="var(--incorrect)">gap &#8776; 0</text>
    <line x1="64" y1="268" x2="265" y2="268" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="273" fill="var(--incorrect)">equal deaths cancel &#8594; gap &#8776; 0</text>
  </g>

  <!-- beat 3: deaths fall away from births -->
  <g data-from="2">
    <path d="M195,74 L260,76 L330,84 L330,148 L260,110 L195,84 Z"
          fill="var(--accent)" fill-opacity=".18"/>
    <text class="sm" x="204" y="66" fill="var(--text)">births stay high</text>
    <text class="sm" x="204" y="176" fill="var(--text)">deaths crash</text>
  </g>

  <!-- beat 4: the widest gap is the peak rate, so A -->
  <g data-from="3">
    <path d="M322,82 L317,91 L327,91 Z" fill="var(--correct)"/>
    <path d="M322,146 L317,137 L327,137 Z" fill="var(--correct)"/>
    <line x1="322" y1="88" x2="322" y2="140" stroke="var(--correct)" stroke-width="2.5"/>
    <rect x="336" y="54" width="214" height="26" rx="8" fill="var(--surface-2)"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="443" y="72" text-anchor="middle" fill="var(--correct)">widest gap = peak rate</text>
    <rect x="24" y="226" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="243" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm" x="336" y="243" fill="var(--correct)">the widest gap in the model</text>
  </g>

  <!-- beat 5: stage 3 closes the gap, stage 4 confuses size with rate -->
  <g data-from="4">
    <text class="sm" x="372" y="180" fill="var(--incorrect)">gap narrows</text>
    <text class="sm" x="478" y="186" fill="var(--incorrect)">gap &#8776; 0 again</text>
    <line x1="64" y1="298" x2="258" y2="298" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="328" x2="265" y2="328" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="336" y="303" fill="var(--incorrect)">big SIZE is not a fast RATE</text>
    <text class="sm" x="336" y="333" fill="var(--incorrect)">gap NARROWS &#8594; growth slows</text>
  </g>

  <!-- beat 6: the takeaway -->
  <g data-from="5">
    <rect x="468" y="96" width="132" height="46" rx="10" fill="var(--surface-2)"
          stroke="var(--border-strong)" stroke-width="1.5"/>
    <text class="lbl" x="534" y="116" text-anchor="middle">READ THE GAP</text>
    <text class="sm" x="534" y="134" text-anchor="middle">not the level</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Growth rate = birth rate − death rate"},
    {t: 5.87,  cap: "Stage 1: high births, high deaths → gap ≈ 0"},
    {t: 11.58, cap: "Stage 2: deaths fall fast, births stay high"},
    {t: 17.53, cap: "Widest gap ⇒ peak rate of natural increase"},
    {t: 23.96, cap: "Stage 3 gap narrows; Stage 4: size ≠ rate"},
    {t: 34.95, cap: "Read the gap, not the level"}
  ]
});
