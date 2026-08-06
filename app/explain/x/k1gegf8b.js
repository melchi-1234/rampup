/* Steady state: the capacitor branch is open, so it reads one resistor's drop. */
RU_EX.reg("k1gegf8b", {
  dur: 41,
  css: `
svg[data-x="k1gegf8b"]{font-family:inherit}
svg[data-x="k1gegf8b"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1gegf8b"] .big{fill:var(--text);font-size:17px;font-weight:800}
svg[data-x="k1gegf8b"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1gegf8b"] .wire{stroke:var(--text);stroke-width:2.5;fill:none}
svg[data-x="k1gegf8b"] .res{fill:var(--surface-2);stroke:var(--accent);stroke-width:2}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Capacitor across one resistor at steady state">
  <!-- battery -->
  <line class="wire" x1="52" y1="92" x2="52" y2="252"/>
  <line class="wire" x1="38" y1="158" x2="66" y2="158" stroke-width="5"/>
  <line class="wire" x1="44" y1="178" x2="60" y2="178"/>
  <text class="lbl" x="20" y="216">12 V</text>

  <!-- series loop -->
  <path class="wire" d="M52 92 H320"/>
  <path class="wire" d="M52 252 H320"/>
  <rect class="res" x="112" y="66" width="76" height="52" rx="8"/>
  <text class="lbl" x="150" y="98" text-anchor="middle">2.0 Ω</text>
  <path class="wire" d="M320 92 V132"/>
  <rect class="res" x="282" y="132" width="76" height="76" rx="8"/>
  <text class="lbl" x="320" y="176" text-anchor="middle">4.0 Ω</text>
  <path class="wire" d="M320 208 V252"/>

  <!-- the capacitor branch, in parallel with the 4 ohm -->
  <path class="wire" d="M320 132 H440 V158"/>
  <path class="wire" d="M320 208 H440 V182"/>
  <line class="wire" x1="416" y1="158" x2="464" y2="158" stroke-width="4"/>
  <line class="wire" x1="416" y1="182" x2="464" y2="182" stroke-width="4"/>
  <text class="sm" x="440" y="206" text-anchor="middle">100 μF</text>

  <g data-from="1">
    <line x1="376" y1="120" x2="410" y2="146" stroke="var(--incorrect)" stroke-width="3"/>
    <line x1="376" y1="220" x2="410" y2="194" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="470" y="140" style="fill:var(--incorrect)">no current: treat as OPEN</text>
  </g>

  <!-- the arithmetic -->
  <text class="lbl" x="482" y="52" data-from="2">just a series loop now</text>
  <text class="big" x="482" y="80" data-from="3">I = 12 / 6 = 2.0 A</text>

  <g data-from="4">
    <rect x="264" y="126" width="112" height="88" rx="10" fill="none"
          stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 4"/>
    <text class="sm" x="482" y="240" style="fill:var(--accent)">the capacitor sits ACROSS the 4 Ω</text>
    <text class="sm" x="482" y="258" style="fill:var(--accent)">so it reads that resistor's drop</text>
  </g>
  <text class="big" x="482" y="288" data-from="5" style="fill:var(--accent)">V = 2.0 × 4.0 = 8 V</text>
  <text class="sm"  x="482" y="308" data-from="5" style="fill:var(--incorrect)">not the full 12 V</text>

  <g data-from="6">
    <rect x="24" y="296" width="404" height="46" rx="16" fill="var(--correct)" opacity=".18"/>
    <text class="big" x="226" y="325" text-anchor="middle" style="fill:var(--correct)">U = ½CV² = 3.2 mJ</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "At steady state: no current through the capacitor"},
    {t: 5, cap: "So its branch is effectively OPEN"},
    {t: 10, cap: "Leaving a simple series loop: 2 Ω + 4 Ω"},
    {t: 15, cap: "I = 12/6 = 2.0 A"},
    {t: 19, cap: "It reads the voltage across the 4 Ω resistor"},
    {t: 26, cap: "V = (2.0)(4.0) = 8 V, not the full 12"},
    {t: 32, cap: "U = ½CV² = ½(100 µF)(8²) = 3.2 mJ"}
  ]
});
