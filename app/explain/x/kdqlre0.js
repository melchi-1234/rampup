/* Zaitsev is the default and the trap; the bulky base cannot reach the crowded H's. */
RU_EX.reg("kdqlre0", {
  dur: 38,
  css: `
svg[data-x="kdqlre0"]{font-family:inherit}
svg[data-x="kdqlre0"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kdqlre0"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kdqlre0"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="kdqlre0"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a bulky base gives the less substituted alkene">
  <text class="tag" x="24" y="26">2-BROMO-2-METHYLBUTANE + POTASSIUM tert-BUTOXIDE</text>
  <g data-from="1">
    <text class="lbl" x="24" y="56" style="fill:var(--accent)">strong base + 3&#176; carbon &#8594; E2 elimination</text>
    <text class="sm"  x="24" y="76">so the only question left is WHICH alkene</text>
  </g>
  <g data-from="2">
    <rect x="24" y="94" width="592" height="30" rx="10" fill="var(--warn)" fill-opacity=".16"/>
    <text class="lbl" x="320" y="114" text-anchor="middle" style="fill:var(--warn)">the usual rule is Zaitsev: take the MORE substituted alkene</text>
  </g>
  <g data-from="3">
    <text class="sm" x="24" y="152">but tert-butoxide is enormous. It cannot get in to the crowded</text>
    <text class="sm" x="24" y="172">hydrogens between the branches.</text>
    <circle cx="470" cy="158" r="34" fill="var(--incorrect)" fill-opacity=".18" stroke="var(--incorrect)" stroke-width="2"/>
    <text class="sm" x="470" y="162" text-anchor="middle" style="fill:var(--incorrect)">too bulky</text>
  </g>
  <g data-from="4">
    <text class="sm" x="24" y="212" style="fill:var(--accent)">so it reaches past them to an exposed hydrogen on the outer methyl</text>
  </g>
  <rect class="chip" x="24" y="236" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="278" width="30" height="26" rx="8"/>
  <rect class="chip" x="330" y="236" width="30" height="26" rx="8"/>
  <rect class="chip" x="330" y="278" width="30" height="26" rx="8"/>
  <text class="lbl" x="39"  y="254" text-anchor="middle">A</text>
  <text class="lbl" x="39"  y="296" text-anchor="middle">B</text>
  <text class="lbl" x="345" y="254" text-anchor="middle">C</text>
  <text class="lbl" x="345" y="296" text-anchor="middle">D</text>
  <text class="sm" x="64"  y="254">2-methyl-1-butene</text>
  <text class="sm" x="64"  y="296">2-methyl-2-butene</text>
  <text class="sm" x="370" y="254">1-pentene</text>
  <text class="sm" x="370" y="296">2-methylbutan-2-ol</text>
  <g data-from="5">
    <rect x="24" y="236" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="254" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm" x="64"  y="274" style="fill:var(--correct)">less substituted &#8212; the Hofmann product</text>
    <text class="sm" x="64"  y="316" style="fill:var(--incorrect)">Zaitsev &#8212; right rule, wrong base</text>
    <text class="sm" x="370" y="274" style="fill:var(--incorrect)">wrong carbon skeleton</text>
    <text class="sm" x="370" y="316" style="fill:var(--incorrect)">substitution, not elimination</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "2-bromo-2-methylbutane + KOtBu (strong, BULKY)"},
    {t: 6.59, cap: "Strong base + 3° carbon → E2 · but which alkene?"},
    {t: 15.34, cap: "Usually Zaitsev wins: the more substituted alkene"},
    {t: 22.09, cap: "A bulky base can't reach the crowded interior H's"},
    {t: 26.52, cap: "It grabs an exposed H → the LESS substituted alkene"},
    {t: 31.83, cap: "2-methyl-1-butene · bulky base → Hofmann product"}
  ]
});
