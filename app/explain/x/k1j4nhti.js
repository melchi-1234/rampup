/* Rate law from a two-step mechanism: the slow step, minus the intermediate. */
RU_EX.reg("k1j4nhti", {
  dur: 44,
  css: `
svg[data-x="k1j4nhti"]{font-family:inherit}
svg[data-x="k1j4nhti"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1j4nhti"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="k1j4nhti"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1j4nhti"] .card{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}

svg[data-x="k1j4nhti"] .slow{stroke:var(--accent);stroke-width:3;fill:none;opacity:0;transition:opacity .4s ease}
svg[data-x="k1j4nhti"][data-step="0"] .slow,svg[data-x="k1j4nhti"][data-step="1"] .slow,
svg[data-x="k1j4nhti"][data-step="2"] .slow,svg[data-x="k1j4nhti"][data-step="3"] .slow,
svg[data-x="k1j4nhti"][data-step="4"] .slow,svg[data-x="k1j4nhti"][data-step="5"] .slow,
svg[data-x="k1j4nhti"][data-step="6"] .slow{opacity:1}

svg[data-x="k1j4nhti"] .r1,svg[data-x="k1j4nhti"] .flag,svg[data-x="k1j4nhti"] .why,
svg[data-x="k1j4nhti"] .keq,svg[data-x="k1j4nhti"] .sub,svg[data-x="k1j4nhti"] .fin{opacity:0;transition:opacity .45s ease}
svg[data-x="k1j4nhti"][data-step="1"] .r1,svg[data-x="k1j4nhti"][data-step="2"] .r1,
svg[data-x="k1j4nhti"][data-step="3"] .r1,svg[data-x="k1j4nhti"][data-step="4"] .r1,
svg[data-x="k1j4nhti"][data-step="5"] .r1{opacity:1}
svg[data-x="k1j4nhti"][data-step="2"] .flag,svg[data-x="k1j4nhti"][data-step="3"] .flag,
svg[data-x="k1j4nhti"][data-step="4"] .flag,svg[data-x="k1j4nhti"][data-step="5"] .flag{opacity:1;animation:k1jPulse 1.4s ease-in-out infinite}
@keyframes k1jPulse{0%,100%{stroke-opacity:.35}50%{stroke-opacity:1}}
svg[data-x="k1j4nhti"][data-step="3"] .why,svg[data-x="k1j4nhti"][data-step="4"] .why,
svg[data-x="k1j4nhti"][data-step="5"] .why{opacity:1}
svg[data-x="k1j4nhti"][data-step="4"] .keq,svg[data-x="k1j4nhti"][data-step="5"] .keq,
svg[data-x="k1j4nhti"][data-step="6"] .keq{opacity:1}
svg[data-x="k1j4nhti"][data-step="5"] .sub,svg[data-x="k1j4nhti"][data-step="6"] .sub{opacity:1}
svg[data-x="k1j4nhti"][data-step="6"] .fin{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Deriving a rate law from a mechanism">
  <!-- the two steps -->
  <rect class="card" x="24" y="34" width="330" height="52" rx="12"/>
  <text class="sm"  x="40" y="54">step 1 &mdash; fast, reversible</text>
  <text class="lbl" x="40" y="76">2 NO  ⇌  N₂O₂</text>

  <rect class="card" x="24" y="98" width="330" height="52" rx="12"/>
  <text class="sm"  x="40" y="118">step 2 &mdash; slow</text>
  <text class="lbl" x="40" y="140">N₂O₂ + O₂  →  2 NO₂</text>
  <rect class="slow" x="24" y="98" width="330" height="52" rx="12"/>
  <text class="sm" x="366" y="128" style="fill:var(--accent)">the rate law comes from here</text>

  <!-- rate law, with the intermediate flagged -->
  <g class="r1">
    <text class="big" x="24" y="196">rate = k₂ [N₂O₂] [O₂]</text>
  </g>
  <g class="flag">
    <rect x="96" y="176" width="66" height="28" rx="8" fill="none" stroke="var(--incorrect)" stroke-width="2.5"/>
  </g>
  <g class="why">
    <text class="sm" x="180" y="196" style="fill:var(--incorrect)">an intermediate &mdash; it cannot appear</text>
    <text class="sm" x="180" y="214" style="fill:var(--incorrect)">in a rate law, you can't measure it</text>
  </g>

  <!-- swap it out using the fast equilibrium -->
  <g class="keq">
    <text class="lbl" x="24" y="252">K = [N₂O₂] / [NO]²</text>
    <text class="lbl" x="250" y="252" style="fill:var(--accent)">so  [N₂O₂] = K [NO]²</text>
  </g>
  <g class="sub">
    <text class="sm" x="24" y="284">substitute back in</text>
  </g>
  <g class="fin">
    <rect x="150" y="298" width="340" height="42" rx="16" fill="var(--correct)" opacity=".16"/>
    <text class="big" x="320" y="326" text-anchor="middle" style="fill:var(--correct)">rate = k [NO]² [O₂]</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "The rate law comes from the SLOW step"},
    {t: 5, cap: "rate = k₂[N₂O₂][O₂]"},
    {t: 11, cap: "Problem: N₂O₂ is an intermediate"},
    {t: 17, cap: "Intermediates can't appear in a rate law"},
    {t: 23, cap: "Use the fast equilibrium: K = [N₂O₂]/[NO]²"},
    {t: 30, cap: "So [N₂O₂] = K[NO]²"},
    {t: 35, cap: "rate = k[NO]²[O₂]"}
  ]
});
