/* RAAS: there are only two ways to raise a blood pressure, and the right
   answer is the pair that does one each. Beat 1 is the ungated base frame. */
RU_EX.reg("kq3hfq", {
  dur: 39,
  css: `
svg[data-x="kq3hfq"]{font-family:inherit}
svg[data-x="kq3hfq"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kq3hfq"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="kq3hfq"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kq3hfq"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="How angiotensin II and aldosterone restore blood pressure after a bleed">
  <text class="tag" x="24" y="26">PRESSURE FALLS AFTER A BLEED &#183; THE KIDNEY RELEASES RENIN</text>

  <!-- beat 2: only two levers exist -->
  <g data-from="1">
    <rect x="24"  y="44" width="272" height="34" rx="10" fill="var(--surface-2)"/>
    <rect x="320" y="44" width="272" height="34" rx="10" fill="var(--surface-2)"/>
    <text class="lbl" x="160" y="66" text-anchor="middle">LEVER 1 &#183; squeeze the vessels</text>
    <text class="lbl" x="456" y="66" text-anchor="middle">LEVER 2 &#183; refill the volume</text>
  </g>

  <!-- beat 3: angiotensin II is the squeeze -->
  <g data-from="2">
    <rect x="24" y="88" width="272" height="52" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="160" y="110" text-anchor="middle" fill="var(--accent)">angiotensin II</text>
    <text class="sm"  x="160" y="130" text-anchor="middle">potent vasoconstrictor &#8594; resistance rises</text>
  </g>

  <!-- beat 4: aldosterone is the refill -->
  <g data-from="3">
    <rect x="320" y="88" width="272" height="52" rx="10" fill="var(--correct)" fill-opacity=".14"/>
    <text class="lbl" x="456" y="110" text-anchor="middle" fill="var(--correct)">aldosterone</text>
    <text class="sm"  x="456" y="130" text-anchor="middle">Na&#8314; back in the distal nephron, water follows</text>
  </g>

  <!-- the four pairings, letter column then claim column -->
  <rect class="chip" x="24" y="170" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="212" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="254" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="296" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="188" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="230" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="272" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="314" text-anchor="middle">D</text>
  <text class="sm" x="64" y="188">angiotensin II squeezes &#183; aldosterone holds Na&#8314;</text>
  <text class="sm" x="64" y="230">aldosterone does the squeezing</text>
  <text class="sm" x="64" y="272">angiotensin II triggers ANP &#183; aldosterone holds K&#8314;</text>
  <text class="sm" x="64" y="314">renin does the squeezing</text>

  <!-- beat 4 also marks A, since the voice lands on it there -->
  <g data-from="3">
    <rect x="24" y="170" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="188" text-anchor="middle" fill="var(--correct)">A</text>
    <text class="sm" x="424" y="188" fill="var(--correct)">one lever each</text>
  </g>

  <!-- beat 5: B and D hand the squeeze to the wrong molecule -->
  <g data-from="4">
    <line x1="64" y1="225" x2="330" y2="225" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="309" x2="330" y2="309" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="230" fill="var(--incorrect)">aldosterone moves salt, not vessels</text>
    <text class="sm" x="352" y="314" fill="var(--incorrect)">renin is an enzyme, not a constrictor</text>
  </g>

  <!-- beat 6: C reaches for the hormone that does the opposite -->
  <g data-from="5">
    <line x1="64" y1="267" x2="330" y2="267" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="352" y="272" fill="var(--incorrect)">ANP LOWERS pressure &#8212; wrong direction</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "BP falls, renin is out — which pair of effects brings it back?"},
    {t: 7.87,  cap: "Only two levers: squeeze the vessels, or refill the volume"},
    {t: 12.54, cap: "Angiotensin II = the squeeze — vasoconstriction, resistance ↑"},
    {t: 18.65, cap: "Aldosterone = the refill — Na⁺ back, water follows → A"},
    {t: 27.00, cap: "B gives the squeeze to aldosterone · D to renin, an enzyme"},
    {t: 33.27, cap: "C reaches for ANP — the hormone that LOWERS pressure"}
  ]
});
