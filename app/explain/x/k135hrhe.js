/* Emotion theories differ on ORDER, so the scene is a timeline and each theory
   is a different arrangement of the same three events. Beat 1 is the base frame. */
RU_EX.reg("k135hrhe", {
  dur: 37,
  css: `
svg[data-x="k135hrhe"]{font-family:inherit}
svg[data-x="k135hrhe"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k135hrhe"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k135hrhe"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k135hrhe"] .box{fill:var(--surface-2)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which theory of emotion matches the order she reported">
  <text class="tag" x="24" y="26">SHE LEAPS BACK &#183; HEART ALREADY POUNDING</text>

  <!-- beat 2: the four theories differ only on order -->
  <g data-from="1">
    <text class="sm" x="24" y="50" style="fill:var(--accent)">all four theories use the same three events &#8212; they disagree only on the ORDER</text>
  </g>

  <!-- beat 3: her reported order -->
  <g data-from="2">
    <rect class="box" x="24"  y="66" width="150" height="34" rx="8"/>
    <rect x="192" y="66" width="150" height="34" rx="8" fill="var(--warn)" fill-opacity=".2"/>
    <rect x="360" y="66" width="150" height="34" rx="8" fill="var(--correct)" fill-opacity=".2"/>
    <text class="sm" x="99"  y="88" text-anchor="middle">the car whips past</text>
    <text class="sm" x="267" y="88" text-anchor="middle" style="fill:var(--warn)">racing heart, shaking</text>
    <text class="sm" x="435" y="88" text-anchor="middle" style="fill:var(--correct)">&#8220;then I felt afraid&#8221;</text>
    <text class="sm" x="180" y="88" text-anchor="middle">&#8594;</text>
    <text class="sm" x="350" y="88" text-anchor="middle">&#8594;</text>
    <text class="sm" x="24" y="120">her own account: the body came first, the feeling second</text>
  </g>

  <!-- the four theories, name column then order column -->
  <text class="tag" x="24"  y="158">THEORY</text>
  <text class="tag" x="250" y="158">ORDER IT CLAIMS</text>
  <text class="sm" x="24"  y="186">James-Lange</text>
  <text class="sm" x="24"  y="222">Cannon-Bard</text>
  <text class="sm" x="24"  y="258">Lazarus appraisal</text>
  <text class="sm" x="24"  y="294">Schachter-Singer</text>
  <text class="sm" x="250" y="186">body &#8594; feeling</text>
  <text class="sm" x="250" y="222">body and feeling together</text>
  <text class="sm" x="250" y="258">appraisal &#8594; body &#8594; feeling</text>
  <text class="sm" x="250" y="294">body + a label from the SITUATION</text>

  <!-- beat 4: James-Lange matches -->
  <g data-from="3">
    <rect x="18" y="168" width="598" height="26" rx="8" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="sm" x="480" y="186" style="fill:var(--correct)">exactly her order</text>
  </g>

  <!-- beat 5: the two that put something else first -->
  <g data-from="4">
    <line x1="250" y1="217" x2="480" y2="217" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="250" y1="253" x2="480" y2="253" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="490" y="222" style="fill:var(--incorrect)">then nothing is first</text>
    <text class="sm" x="490" y="258" style="fill:var(--incorrect)">she appraised after</text>
  </g>

  <!-- beat 6: the trap -->
  <g data-from="5">
    <line x1="250" y1="289" x2="530" y2="289" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="24" y="330" style="fill:var(--incorrect)">two-factor needs the label to come from the SITUATION &#8212; she read it off her own body</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "She leaps back · her heart is already pounding"},
    {t: 6.35,  cap: "They differ on ORDER · listen to hers"},
    {t: 12.38, cap: "She noticed the arousal, and THEN felt afraid"},
    {t: 17.69, cap: "James-Lange: the emotion IS reading the body"},
    {t: 23.64, cap: "Cannon-Bard: simultaneous · Lazarus: appraisal first"},
    {t: 30.55, cap: "Two-factor needs a SITUATIONAL label; she read her body"}
  ]
});
