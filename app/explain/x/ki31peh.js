/* PFK-1 with a dead regulatory site: the brake is gone, the engine is fine. */
RU_EX.reg("ki31peh", {
  dur: 42,
  css: `
svg[data-x="ki31peh"]{font-family:inherit}
svg[data-x="ki31peh"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="ki31peh"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="ki31peh"] .enz{fill:var(--accent);opacity:.22;stroke:var(--accent);stroke-width:2}
svg[data-x="ki31peh"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="PFK-1 with a disabled allosteric site">
  <!-- wild type -->
  <text class="sm" x="150" y="42" text-anchor="middle">wild-type PFK-1</text>
  <path class="enz" d="M60 60 h180 a24 24 0 0 1 24 24 v96 a24 24 0 0 1 -24 24 h-180 a24 24 0 0 1 -24 -24 v-96 a24 24 0 0 1 24 -24 z"/>
  <circle cx="104" cy="126" r="22" fill="var(--card)" stroke="var(--text)" stroke-width="2"/>
  <text class="sm" x="104" y="164" text-anchor="middle">catalytic</text>
  <circle cx="200" cy="126" r="22" fill="var(--card)" stroke="var(--correct)" stroke-width="2.5"/>
  <text class="sm" x="200" y="164" text-anchor="middle" style="fill:var(--correct)">regulatory</text>
  <text class="sm" x="150" y="196" text-anchor="middle" data-from="0">two separate sites</text>

  <g data-from="1">
    <circle cx="200" cy="126" r="9" fill="var(--warn)"/>
    <text class="sm" x="272" y="112" style="fill:var(--warn)">high ATP binds here</text>
    <text class="sm" x="272" y="130" style="fill:var(--warn)">→ enzyme slows down</text>
    <text class="sm" x="272" y="148">plenty of energy, stop making more</text>
  </g>

  <!-- mutant -->
  <text class="sm" x="150" y="234" text-anchor="middle" data-from="2">the mutant</text>
  <path class="enz" d="M60 250 h180 a24 24 0 0 1 24 24 v56 a24 24 0 0 1 -24 24 h-180 a24 24 0 0 1 -24 -24 v-56 a24 24 0 0 1 24 -24 z" data-from="2"/>
  <circle cx="104" cy="300" r="20" fill="var(--card)" stroke="var(--text)" stroke-width="2" data-from="2"/>
  <text class="sm" x="104" y="334" text-anchor="middle" data-from="2">catalytic: fine</text>
  <g data-from="2">
    <circle cx="200" cy="300" r="20" fill="var(--card)" stroke="var(--incorrect)" stroke-width="2.5" stroke-dasharray="5 4"/>
    <line x1="186" y1="314" x2="214" y2="286" stroke="var(--incorrect)" stroke-width="3"/>
    <text class="sm" x="200" y="334" text-anchor="middle" style="fill:var(--incorrect)">regulatory: dead</text>
  </g>

  <!-- consequences -->
  <g data-from="3">
    <rect class="box" x="300" y="196" width="316" height="56" rx="14"/>
    <text class="lbl" x="458" y="220" text-anchor="middle" style="fill:var(--correct)">Vmax unchanged · Km unchanged</text>
    <text class="sm"  x="458" y="240" text-anchor="middle">the chemistry still works perfectly</text>
  </g>
  <text class="lbl" x="458" y="278" text-anchor="middle" data-from="4" style="fill:var(--incorrect)">it just cannot hear the stop signal</text>

  <g data-from="5">
    <rect x="300" y="292" width="316" height="52" rx="14" fill="var(--incorrect)" opacity=".16"/>
    <text class="lbl" x="458" y="314" text-anchor="middle" style="fill:var(--incorrect)">ATP rises → glycolysis does not slow</text>
    <text class="sm"  x="458" y="332" text-anchor="middle" style="fill:var(--incorrect)">flux keeps running when it should stop</text>
  </g>
  <text class="lbl" x="458" y="70" text-anchor="middle" data-from="6" style="fill:var(--accent)">a broken brake, not a broken engine</text>
  <text class="sm"  x="458" y="88" text-anchor="middle" data-from="6">PFK-1 is the committed step, which is where a brake belongs</text>
</svg>`,
  steps: [
    {t: 0, cap: "PFK-1 has two separate sites"},
    {t: 6, cap: "High ATP binds the regulator and slows it down"},
    {t: 13, cap: "The mutant breaks only the REGULATORY site"},
    {t: 19, cap: "So it still works: same Vmax, same Km"},
    {t: 25, cap: "It simply cannot hear the stop signal"},
    {t: 29, cap: "ATP rises → glycolysis fails to slow"},
    {t: 35, cap: "A broken brake, not a broken engine"}
  ]
});
