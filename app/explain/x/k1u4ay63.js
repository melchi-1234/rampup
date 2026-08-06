/* Extraction works; resolution does not, because bicarbonate is achiral. */
RU_EX.reg("k1u4ay63", {
  dur: 44,
  css: `
svg[data-x="k1u4ay63"]{font-family:inherit}
svg[data-x="k1u4ay63"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1u4ay63"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1u4ay63"] .glass{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="k1u4ay63"] .ether{fill:var(--accent);opacity:.12}
svg[data-x="k1u4ay63"] .aq{fill:var(--accent);opacity:.26}
svg[data-x="k1u4ay63"] .en{transition:transform 1s ease, fill .5s ease}
svg[data-x="k1u4ay63"][data-step="2"] .en,svg[data-x="k1u4ay63"][data-step="3"] .en,
svg[data-x="k1u4ay63"][data-step="4"] .en,svg[data-x="k1u4ay63"][data-step="5"] .en,
svg[data-x="k1u4ay63"][data-step="6"] .en{transform:translate(0,96px);fill:var(--correct)}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Both enantiomers extract together">
  <path class="glass" d="M56 50 L56 214 L100 268 L100 322"/>
  <path class="glass" d="M196 50 L196 214 L152 268 L152 322"/>
  <line class="glass" x1="56" y1="50" x2="196" y2="50"/>
  <rect class="ether" x="58" y="56" width="136" height="96"/>
  <text class="sm" x="126" y="42" text-anchor="middle">ether</text>
  <rect class="aq" x="58" y="152" width="136" height="62"/>
  <path class="aq" d="M58 214 L100 268 L152 268 L194 214 Z"/>
  <text class="sm" x="126" y="298" text-anchor="middle">aqueous NaHCO₃, pH 8</text>
  <line class="glass" x1="58" y1="152" x2="194" y2="152" stroke-dasharray="5 4"/>

  <circle class="en" cx="98"  cy="94" r="11" fill="var(--warn)"/>
  <circle class="en" cx="152" cy="112" r="11" fill="var(--warn)"/>
  <text class="sm" x="98"  y="78" text-anchor="middle">(R)</text>
  <text class="sm" x="152" y="96" text-anchor="middle">(S)</text>

  <!-- ordinary extraction logic -->
  <text class="lbl" x="240" y="66" data-from="0">pKa 3.4, and the solution is pH 8</text>
  <text class="sm"  x="240" y="88" data-from="1" style="fill:var(--correct)">pH ≫ pKa → deprotonated → charged → water-soluble</text>
  <text class="sm"  x="240" y="110" data-from="2">so it moves into the aqueous layer. ordinary extraction.</text>

  <!-- the actual question -->
  <g data-from="3">
    <rect x="232" y="132" width="384" height="42" rx="14" fill="var(--warn)" opacity=".18"/>
    <text class="lbl" x="424" y="158" text-anchor="middle" style="fill:var(--warn)">but it's racemic — does only ONE enantiomer move?</text>
  </g>

  <g data-from="4">
    <text class="lbl" x="240" y="204">enantiomers have IDENTICAL pKa values</text>
    <text class="sm"  x="240" y="224">mirror images, identical energies</text>
  </g>
  <g data-from="5">
    <text class="lbl" x="240" y="256">and bicarbonate is achiral</text>
    <text class="sm"  x="240" y="276">no handedness, so it cannot tell left from right</text>
  </g>

  <g data-from="6">
    <rect x="232" y="292" width="384" height="52" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="424" y="314" text-anchor="middle" style="fill:var(--accent)">both move together — no resolution</text>
    <text class="sm"  x="424" y="332" text-anchor="middle" style="fill:var(--accent)">separating enantiomers needs a CHIRAL agent</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Mandelic acid pKa 3.4, in bicarbonate at pH 8"},
    {t: 6, cap: "pH ≫ pKa → deprotonated, charged, water-soluble"},
    {t: 12, cap: "So it moves into the aqueous layer"},
    {t: 17, cap: "But it's racemic — does only ONE move?"},
    {t: 24, cap: "No: enantiomers have IDENTICAL pKa values"},
    {t: 31, cap: "And bicarbonate is achiral — no handedness"},
    {t: 37, cap: "Both move together — resolution needs a CHIRAL agent"}
  ]
});
