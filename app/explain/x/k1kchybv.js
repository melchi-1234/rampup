/* Floating fraction is a pure density ratio — viscosity never appears. */
RU_EX.reg("k1kchybv", {
  dur: 41,
  css: `
svg[data-x="k1kchybv"]{font-family:inherit}
svg[data-x="k1kchybv"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1kchybv"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="k1kchybv"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1kchybv"] .tank{fill:none;stroke:var(--border-strong);stroke-width:2.5}
svg[data-x="k1kchybv"] .cube{fill:var(--accent);opacity:.85;stroke:var(--text);stroke-width:2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="A cube floating in water versus oil">
  <!-- water tank: 60% submerged -->
  <rect class="tank" x="34" y="120" width="180" height="150" rx="8"/>
  <rect x="38" y="176" width="172" height="90" fill="var(--accent)" opacity=".18"/>
  <line x1="38" y1="176" x2="210" y2="176" stroke="var(--accent)" stroke-width="2"/>
  <rect class="cube" x="94" y="140" width="90" height="90" rx="3"/>
  <text class="sm" x="124" y="292" text-anchor="middle">water · 1000</text>
  <text class="lbl" x="124" y="108" text-anchor="middle" data-from="4" fill="var(--accent)">60% under</text>

  <!-- oil tank: 67% submerged, sits deeper -->
  <rect class="tank" x="256" y="120" width="180" height="150" rx="8"/>
  <rect x="260" y="176" width="172" height="90" fill="var(--warn)" opacity=".2"/>
  <line x1="260" y1="176" x2="432" y2="176" stroke="var(--warn)" stroke-width="2"/>
  <rect class="cube" x="316" y="146" width="90" height="90" rx="3" data-from="5"/>
  <text class="sm" x="346" y="292" text-anchor="middle">oil · 900</text>
  <text class="lbl" x="346" y="108" text-anchor="middle" data-from="5" fill="var(--warn)">67% under</text>

  <!-- the derivation -->
  <text class="lbl" x="466" y="70" data-from="0">at equilibrium:</text>
  <text class="sm"  x="466" y="94" data-from="1">ρ_obj · V · g  =  ρ_fluid · V_sub · g</text>
  <text class="sm"  x="466" y="118" data-from="2" fill="var(--muted)">cancel g, rearrange…</text>
  <g data-from="3">
    <rect x="452" y="132" width="168" height="52" rx="14" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="536" y="154" text-anchor="middle" fill="var(--accent)">V_sub / V</text>
    <text class="big" x="536" y="176" text-anchor="middle" fill="var(--accent)">= ρ_obj / ρ_fluid</text>
  </g>
  <text class="sm" x="466" y="212" data-from="4">600 / 1000 = 0.60</text>
  <text class="sm" x="466" y="234" data-from="5" fill="var(--warn)">600 / 900 = 0.67</text>

  <g data-from="6">
    <rect x="34" y="312" width="586" height="38" rx="16" fill="var(--correct)" opacity=".18"/>
    <text class="lbl" x="327" y="336" text-anchor="middle" fill="var(--correct)">thinner fluid → sits deeper · viscosity never enters the equation</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "Floating: buoyancy balances weight"},
    {t: 4, cap: "ρ_object · V = ρ_fluid · V_submerged"},
    {t: 11, cap: "Rearrange: it collapses to one ratio"},
    {t: 15, cap: "fraction submerged = ρ_object / ρ_fluid"},
    {t: 21, cap: "Water: 600/1000 = 60% submerged"},
    {t: 27, cap: "Oil: 600/900 = 67% submerged"},
    {t: 32, cap: "Thinner fluid → sits deeper. Viscosity is irrelevant."}
  ]
});
