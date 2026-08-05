/* pI: walk the charge down a pH axis and average the pair that brackets zero.
   Beat 1 is the ungated base frame; data-from="N" appears as beat N+1 is spoken.
   Axis: x(pH) = 60 + pH * 43.333  ->  1.8=138, 6.0=320, 7.6=389, 9.2=459 */
RU_EX.reg("k1tyr5rj", {
  dur: 43,
  css: `
svg[data-x="k1tyr5rj"]{font-family:inherit}
svg[data-x="k1tyr5rj"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1tyr5rj"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1tyr5rj"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1tyr5rj"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Finding the isoelectric point of histidine on a pH axis">
  <text class="tag" x="24" y="28">NET CHARGE ZERO &#183; WALK UP THE pH</text>

  <!-- pH axis -->
  <line x1="60" y1="140" x2="580" y2="140" stroke="var(--border-strong)" stroke-width="2"/>
  <line x1="138" y1="133" x2="138" y2="147" stroke="var(--text)" stroke-width="2"/>
  <line x1="320" y1="133" x2="320" y2="147" stroke="var(--text)" stroke-width="2"/>
  <line x1="459" y1="133" x2="459" y2="147" stroke="var(--text)" stroke-width="2"/>
  <text class="sm" x="138" y="162" text-anchor="middle">1.8</text>
  <text class="sm" x="320" y="162" text-anchor="middle">6.0</text>
  <text class="sm" x="459" y="162" text-anchor="middle">9.2</text>
  <text class="tag" x="60"  y="178">&#8592; acidic</text>
  <text class="tag" x="580" y="178" text-anchor="end">basic &#8594;</text>

  <!-- candidates, one fixed column for the value and one for the verdict -->
  <rect class="chip" x="24" y="200" width="80" height="28" rx="14"/>
  <rect class="chip" x="24" y="236" width="80" height="28" rx="14"/>
  <rect class="chip" x="24" y="272" width="80" height="28" rx="14"/>
  <rect class="chip" x="24" y="308" width="80" height="28" rx="14"/>
  <text class="lbl" x="64" y="219" text-anchor="middle">3.9</text>
  <text class="lbl" x="64" y="255" text-anchor="middle">5.7</text>
  <text class="lbl" x="64" y="291" text-anchor="middle">7.6</text>
  <text class="lbl" x="64" y="327" text-anchor="middle">9.2</text>

  <!-- beat 2: everything protonated, net +2 -->
  <g data-from="1">
    <rect x="60" y="98" width="78" height="26" rx="5" fill="var(--incorrect)" fill-opacity=".16"/>
    <text class="lbl" x="99" y="116" text-anchor="middle" fill="var(--incorrect)">+2</text>
    <text class="sm" x="24" y="80">&#8722;COOH &#183; imidazole-H&#8314; &#183; &#8722;NH&#8323;&#8314;</text>
  </g>

  <!-- beat 3: past the first pKa, one charge gone -->
  <g data-from="2">
    <rect x="138" y="98" width="182" height="26" rx="5" fill="var(--warn)" fill-opacity=".16"/>
    <text class="lbl" x="229" y="116" text-anchor="middle" fill="var(--warn)">+1</text>
  </g>

  <!-- beat 4: past the side chain, net zero -->
  <g data-from="3">
    <rect x="320" y="98" width="139" height="26" rx="5" fill="var(--correct)" fill-opacity=".22"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="389" y="116" text-anchor="middle" fill="var(--correct)">0</text>
    <rect x="459" y="98" width="121" height="26" rx="5" fill="var(--surface-2)"/>
    <text class="lbl" x="519" y="116" text-anchor="middle">&#8722;1</text>
  </g>

  <!-- beat 5: average the pair that brackets the zero band -->
  <g data-from="4">
    <path d="M320 62 L320 54 L459 54 L459 62" fill="none" stroke="var(--correct)" stroke-width="2"/>
    <line x1="389" y1="54" x2="389" y2="46" stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="389" y="40" text-anchor="middle" fill="var(--correct)">(6.0 + 9.2)/2 = 7.6</text>
    <rect x="24" y="272" width="80" height="28" rx="14" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="64" y="291" text-anchor="middle" fill="var(--correct)">7.6</text>
    <text class="sm" x="124" y="291" fill="var(--correct)">the two pKa values flanking the zero band</text>
  </g>

  <!-- beat 6: where the near-misses come from -->
  <g data-from="5">
    <text class="sm" x="124" y="219" fill="var(--incorrect)">(1.8 + 6.0)/2 &#8212; the pair around +1, not 0</text>
    <text class="sm" x="124" y="255" fill="var(--incorrect)">&#8776; the mean of all three, 5.67 &#8212; averages too much</text>
    <text class="sm" x="124" y="327" fill="var(--incorrect)">just a pKa, not an average of a pair</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "pI = the pH where net charge is zero · 4 candidates"},
    {t: 8.35,  cap: "All three protonated: −COOH, imidazole-H⁺, −NH₃⁺ → net +2"},
    {t: 14.06, cap: "Each pKa passed drops charge by 1 · past 1.8 → +1"},
    {t: 21.61, cap: "Past 6.0 imidazole deprotonates → net 0, the zwitterion"},
    {t: 27.48, cap: "pI averages the pKa pair around net 0 · (6.0 + 9.2)/2 = 7.6"},
    {t: 35.75, cap: "3.9 = (1.8+6.0)/2 · 5.7 ≈ (1.8+6.0+9.2)/3 = 5.67"}
  ]
});
