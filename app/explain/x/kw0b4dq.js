/* Lactate is a recycling reaction, not a product the cell wants. */
RU_EX.reg("kw0b4dq", {
  dur: 44,
  css: `
svg[data-x="kw0b4dq"]{font-family:inherit}
svg[data-x="kw0b4dq"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kw0b4dq"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="kw0b4dq"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why blocking the ETC drives lactate production">
  <!-- the ETC, blocked -->
  <rect class="box" x="330" y="46" width="286" height="46" rx="14"/>
  <text class="lbl" x="473" y="75" text-anchor="middle">electron transport chain</text>
  <g data-from="0">
    <line x1="340" y1="86" x2="606" y2="52" stroke="var(--incorrect)" stroke-width="3.5"/>
    <text class="sm" x="473" y="110" text-anchor="middle" fill="var(--incorrect)">rotenone blocks complex I</text>
  </g>

  <!-- the NAD+ / NADH pool -->
  <g data-from="1">
    <rect x="330" y="130" width="286" height="70" rx="14" fill="var(--warn)" opacity=".16"/>
    <text class="sm"  x="473" y="152" text-anchor="middle">it was recycling</text>
    <text class="lbl" x="473" y="176" text-anchor="middle" fill="var(--warn)">NADH → NAD⁺</text>
    <text class="sm"  x="473" y="194" text-anchor="middle" fill="var(--incorrect)">not any more</text>
  </g>
  <g data-from="2">
    <text class="lbl" x="473" y="226" text-anchor="middle" fill="var(--incorrect)">NADH piles up · NAD⁺ runs out</text>
  </g>

  <!-- glycolysis needs NAD+ -->
  <rect class="box" x="24" y="46" width="270" height="150" rx="14"/>
  <text class="lbl" x="159" y="72" text-anchor="middle">glycolysis</text>
  <text class="sm"  x="159" y="96" text-anchor="middle">glucose → pyruvate</text>
  <g data-from="3">
    <rect x="44" y="112" width="230" height="66" rx="12" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="159" y="136" text-anchor="middle" fill="var(--accent)">GAPDH step</text>
    <text class="sm"  x="159" y="158" text-anchor="middle" fill="var(--accent)">CONSUMES NAD⁺</text>
    <text class="sm"  x="159" y="172" text-anchor="middle">every single turn</text>
  </g>
  <g data-from="4">
    <text class="sm" x="159" y="216" text-anchor="middle" fill="var(--incorrect)">no NAD⁺ → glycolysis stalls</text>
    <text class="sm" x="159" y="234" text-anchor="middle" fill="var(--incorrect)">and it is now the ONLY ATP source</text>
  </g>

  <!-- the fix -->
  <g data-from="5">
    <rect x="24" y="256" width="592" height="52" rx="16"
          fill="var(--correct)" fill-opacity=".18" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="320" y="280" text-anchor="middle" fill="var(--correct)">pyruvate + NADH → lactate + NAD⁺</text>
    <text class="sm"  x="320" y="299" text-anchor="middle" fill="var(--correct)">the cell buys its NAD⁺ back, and glycolysis keeps running</text>
  </g>
  <text class="lbl" x="320" y="336" text-anchor="middle" data-from="6" fill="var(--accent)">lactate is where the electrons get dumped — NAD⁺ is the point</text>
</svg>`,
  steps: [
    {t: 0, cap: "Rotenone stops the electron transport chain"},
    {t: 5, cap: "That chain was recycling NADH back to NAD⁺"},
    {t: 11, cap: "NADH piles up · NAD⁺ runs out"},
    {t: 16, cap: "But glycolysis CONSUMES NAD⁺ at GAPDH"},
    {t: 23, cap: "No NAD⁺ → glycolysis stalls → no ATP at all"},
    {t: 30, cap: "So: pyruvate → lactate, regenerating NAD⁺"},
    {t: 37, cap: "Lactate is the dumping ground, NAD⁺ is the goal"}
  ]
});
