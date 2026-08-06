/* FENa: the number is only half the answer, the 1% threshold is the other half,
   so each choice is a (value, reading) pair. Beat 1 is the ungated base frame. */
RU_EX.reg("kgcpndd", {
  dur: 38,
  css: `
svg[data-x="kgcpndd"]{font-family:inherit}
svg[data-x="kgcpndd"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kgcpndd"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kgcpndd"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kgcpndd"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Fractional excretion of sodium computed from four labs and read against the one percent threshold">
  <text class="tag" x="24" y="24">FENa = (UNa &#215; PCr) &#247; (PNa &#215; UCr) &#215; 100</text>

  <!-- beat 1 (base frame): what the ratio means, and the four labs -->
  <text class="sm" x="24" y="46">the share of filtered Na&#8314; that reaches the urine</text>
  <text class="tag" x="150" y="70" text-anchor="middle">URINE</text>
  <text class="tag" x="240" y="70" text-anchor="middle">PLASMA</text>
  <line x1="24" y1="76" x2="286" y2="76" stroke="var(--border-strong)" stroke-width="1"/>
  <text class="sm"  x="24"  y="96">Na (mEq/L)</text>
  <text class="sm"  x="24"  y="118">Cr (mg/dL)</text>
  <text class="lbl" x="150" y="96"  text-anchor="middle">14</text>
  <text class="lbl" x="150" y="118" text-anchor="middle">20</text>
  <text class="lbl" x="240" y="96"  text-anchor="middle">140</text>
  <text class="lbl" x="240" y="118" text-anchor="middle">1.0</text>

  <!-- the four candidate readings -->
  <rect class="chip" x="24" y="208" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="238" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="268" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="298" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="225" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="255" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="285" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="315" text-anchor="middle">D</text>
  <text class="lbl" x="64" y="225">0.5%</text>
  <text class="lbl" x="64" y="255">0.5%</text>
  <text class="lbl" x="64" y="285">10%</text>
  <text class="lbl" x="64" y="315">0.05%</text>
  <text class="sm" x="124" y="225">prerenal</text>
  <text class="sm" x="124" y="255">ATN</text>
  <text class="sm" x="124" y="285">ATN</text>
  <text class="sm" x="124" y="315">prerenal</text>

  <!-- beat 2: put the labs in their places -->
  <g data-from="1">
    <text class="lbl" x="450" y="80" text-anchor="middle">14 &#215; 1.0 = 14</text>
    <line x1="360" y1="92" x2="540" y2="92" stroke="var(--text)" stroke-width="2"/>
    <text class="lbl" x="450" y="114" text-anchor="middle">140 &#215; 20 = 2800</text>
  </g>

  <!-- beat 3: the number itself -->
  <g data-from="2">
    <rect x="24" y="124" width="592" height="32" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="320" y="146" text-anchor="middle" fill="var(--correct)">14 &#247; 2800 = 0.005 &#8594; &#215;100 = 0.5%</text>
  </g>

  <!-- beat 4: read it against the threshold, which also kills B -->
  <g data-from="3">
    <rect x="24" y="160" width="286" height="42" rx="10" fill="var(--correct)" fill-opacity=".14"
          stroke="var(--correct)" stroke-width="1.5"/>
    <text class="lbl" x="167" y="181" text-anchor="middle" fill="var(--correct)">FENa &#60; 1%</text>
    <text class="sm"  x="167" y="197" text-anchor="middle" fill="var(--correct)">tubules reabsorbing &#183; PRERENAL</text>
    <rect x="330" y="160" width="286" height="42" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="473" y="181" text-anchor="middle">FENa &#62; 2%</text>
    <text class="sm"  x="473" y="197" text-anchor="middle">tubules leaking &#183; ATN</text>
    <rect x="24" y="208" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39"  y="225" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="lbl" x="64"  y="225" fill="var(--correct)">0.5%</text>
    <text class="sm"  x="124" y="225" fill="var(--correct)">prerenal</text>
    <text class="sm"  x="236" y="225" fill="var(--correct)">&#10003; clawing nearly all the Na&#8314; back</text>
    <line x1="64" y1="250" x2="228" y2="250" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="236" y="255" fill="var(--incorrect)">right number, reading inverted</text>
  </g>

  <!-- beat 5: the other two numbers, and where each comes from -->
  <g data-from="4">
    <line x1="64" y1="280" x2="228" y2="280" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="310" x2="228" y2="310" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="236" y="285" fill="var(--incorrect)">14/140 alone &#8212; creatinine dropped</text>
    <text class="sm" x="236" y="315" fill="var(--incorrect)">0.005 with a decimal misplaced</text>
  </g>

  <!-- beat 6: the habit worth keeping -->
  <g data-from="5">
    <rect x="24" y="326" width="592" height="24" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="343" text-anchor="middle">Low FENa = working tubules starved of blood, not dying ones.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "FENa = the filtered Na⁺ that escapes into the urine"},
    {t: 4.67,  cap: "(14 × 1.0) ÷ (140 × 20) = 14 ÷ 2800"},
    {t: 13.34, cap: "0.005 × 100 = 0.5%"},
    {t: 18.65, cap: "FENa < 1% → tubules intact, reabsorbing hard → prerenal"},
    {t: 24.52, cap: "10% = UNa/PNa alone; 0.05% = one misplaced zero"},
    {t: 32.23, cap: "Low FENa = intact tubules, poor perfusion, not ATN"}
  ]
});
