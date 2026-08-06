/* CIP priority — first atom, then the tie-break. Bulk never matters. */
RU_EX.reg("kdulooi", {
  dur: 42,
  css: `
svg[data-x="kdulooi"]{font-family:inherit}
svg[data-x="kdulooi"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdulooi"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="kdulooi"] .sm{fill:var(--muted);font-size:11.5px;font-weight:600}
svg[data-x="kdulooi"] .bond{stroke:var(--text);stroke-width:2.2}
svg[data-x="kdulooi"] .grp{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}

svg[data-x="kdulooi"] .z,svg[data-x="kdulooi"] .rank1,svg[data-x="kdulooi"] .rank4,
svg[data-x="kdulooi"] .tie,svg[data-x="kdulooi"] .sets,svg[data-x="kdulooi"] .win,
svg[data-x="kdulooi"] .final{opacity:0;transition:opacity .45s ease}

svg[data-x="kdulooi"][data-step="0"] .z,svg[data-x="kdulooi"][data-step="1"] .z,
svg[data-x="kdulooi"][data-step="2"] .z,svg[data-x="kdulooi"][data-step="3"] .z,
svg[data-x="kdulooi"][data-step="4"] .z,svg[data-x="kdulooi"][data-step="5"] .z,
svg[data-x="kdulooi"][data-step="6"] .z{opacity:1}
svg[data-x="kdulooi"][data-step="1"] .rank1,svg[data-x="kdulooi"][data-step="2"] .rank1,
svg[data-x="kdulooi"][data-step="3"] .rank1,svg[data-x="kdulooi"][data-step="4"] .rank1,
svg[data-x="kdulooi"][data-step="5"] .rank1,svg[data-x="kdulooi"][data-step="6"] .rank1,
svg[data-x="kdulooi"][data-step="1"] .rank4,svg[data-x="kdulooi"][data-step="2"] .rank4,
svg[data-x="kdulooi"][data-step="3"] .rank4,svg[data-x="kdulooi"][data-step="4"] .rank4,
svg[data-x="kdulooi"][data-step="5"] .rank4,svg[data-x="kdulooi"][data-step="6"] .rank4{opacity:1}
svg[data-x="kdulooi"][data-step="2"] .tie,svg[data-x="kdulooi"][data-step="3"] .tie{opacity:1;animation:kdPulse 1.5s ease-in-out infinite}
@keyframes kdPulse{0%,100%{stroke-opacity:.35}50%{stroke-opacity:1}}
svg[data-x="kdulooi"][data-step="4"] .sets,svg[data-x="kdulooi"][data-step="5"] .sets,
svg[data-x="kdulooi"][data-step="6"] .sets{opacity:1}
svg[data-x="kdulooi"][data-step="5"] .win,svg[data-x="kdulooi"][data-step="6"] .win{opacity:1}
svg[data-x="kdulooi"][data-step="6"] .final{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="CIP priority assignment">
  <!-- stereocenter with four groups -->
  <text class="big" x="300" y="130" text-anchor="middle">C</text>
  <line class="bond" x1="284" y1="122" x2="212" y2="96"/>
  <line class="bond" x1="316" y1="122" x2="388" y2="96"/>
  <line class="bond" x1="284" y1="136" x2="212" y2="166"/>
  <line class="bond" x1="316" y1="136" x2="388" y2="166"/>

  <rect class="grp" x="128" y="76" width="76" height="30" rx="10"/>
  <text class="lbl" x="166" y="96" text-anchor="middle">&ndash;OH</text>
  <rect class="grp" x="396" y="76" width="92" height="30" rx="10"/>
  <text class="lbl" x="442" y="96" text-anchor="middle">&ndash;CH₂Br</text>
  <rect class="grp" x="396" y="150" width="112" height="30" rx="10"/>
  <text class="lbl" x="452" y="170" text-anchor="middle">&ndash;C(CH₃)₃</text>
  <rect class="grp" x="146" y="150" width="58" height="30" rx="10"/>
  <text class="lbl" x="175" y="170" text-anchor="middle">&ndash;H</text>

  <!-- the first atom in each, with atomic number -->
  <g class="z">
    <text class="sm" x="166" y="70" text-anchor="middle" style="fill:var(--accent)">O · 8</text>
    <text class="sm" x="442" y="70" text-anchor="middle">C · 6</text>
    <text class="sm" x="452" y="196" text-anchor="middle">C · 6</text>
    <text class="sm" x="175" y="196" text-anchor="middle">H · 1</text>
  </g>

  <g class="rank1">
    <circle cx="118" cy="91" r="13" fill="var(--correct)"/>
    <text class="lbl" x="118" y="96" text-anchor="middle" style="fill:var(--card)">1</text>
  </g>
  <g class="rank4">
    <circle cx="128" cy="165" r="13" fill="var(--incorrect)"/>
    <text class="lbl" x="128" y="170" text-anchor="middle" style="fill:var(--card)">4</text>
  </g>

  <!-- the two carbons are tied so far -->
  <rect class="tie" x="388" y="66" width="132" height="122" rx="14" fill="none"
        stroke="var(--warn)" stroke-width="2.5"/>
  <text class="tie sm" x="454" y="60" text-anchor="middle" style="fill:var(--warn)">tied on the first atom</text>

  <!-- tie-break: what each carbon holds -->
  <g class="sets">
    <rect x="60" y="232" width="240" height="66" rx="14" fill="var(--surface-2)"/>
    <text class="sm"  x="180" y="254" text-anchor="middle">the CH₂Br carbon holds</text>
    <text class="lbl" x="180" y="280" text-anchor="middle" style="fill:var(--correct)">( Br 35 , H , H )</text>
    <rect x="336" y="232" width="240" height="66" rx="14" fill="var(--surface-2)"/>
    <text class="sm"  x="456" y="254" text-anchor="middle">the tert-butyl carbon holds</text>
    <text class="lbl" x="456" y="280" text-anchor="middle">( C 6 , C , C )</text>
  </g>
  <g class="win">
    <text class="lbl" x="318" y="272" text-anchor="middle" style="fill:var(--accent)">&gt;</text>
    <text class="sm" x="318" y="316" text-anchor="middle" style="fill:var(--accent)">first point of difference: 35 beats 6</text>
  </g>

  <g class="final">
    <rect x="150" y="330" width="340" height="26" rx="13" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="320" y="348" text-anchor="middle" style="fill:var(--accent)">OH &gt; CH₂Br &gt; tert-butyl &gt; H</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Rank by the FIRST atom only"},
    {t: 5, cap: "O (8) is first · H is always last"},
    {t: 12, cap: "Both remaining groups attach through carbon: tied"},
    {t: 17, cap: "Break the tie one atom further out"},
    {t: 21, cap: "CH₂Br holds (Br, H, H) · tert-butyl holds (C, C, C)"},
    {t: 29, cap: "Br (35) beats C (6) at the first difference"},
    {t: 35, cap: "OH > CH₂Br > tert-butyl > H — bulk is irrelevant"}
  ],
  transcript:
    "Rank the four groups by the atom directly attached to the stereocenter, nothing else " +
    "yet. Oxygen is atomic number 8, the highest here, so the hydroxyl is number one. " +
    "Hydrogen is number four, and hydrogen is always last. That leaves two groups both " +
    "attached through carbon, tied so far. Break the tie by listing what each of those " +
    "carbons holds: the CH₂Br carbon holds bromine, hydrogen, hydrogen, while the tert-butyl " +
    "carbon holds carbon, carbon, carbon. Compare the highest atom in each set: bromine is " +
    "35, carbon is 6, so bromine wins immediately. CH₂Br outranks tert-butyl even though " +
    "tert-butyl is far bulkier. Size and carbon count never matter, only atomic number does."
});
