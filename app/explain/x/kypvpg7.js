/* Demographic transition: peak growth is Stage 2, not 3.
   The graph is the answer sheet — growth is the gap between the curves, and
   the choice chips sit under the stage bands they claim. data-from = beat − 1. */
RU_EX.reg("kypvpg7", {
  dur: 48,
  css: `
svg[data-x="kypvpg7"]{font-family:inherit}
svg[data-x="kypvpg7"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="kypvpg7"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="kypvpg7"] .chip{fill:var(--card);stroke:var(--border-strong);stroke-width:1.5}
svg[data-x="kypvpg7"] .chipC,svg[data-x="kypvpg7"] .chipD{transition:opacity .4s ease}
svg[data-x="kypvpg7"][data-step="2"] .chipC,svg[data-x="kypvpg7"][data-step="3"] .chipC,
svg[data-x="kypvpg7"][data-step="4"] .chipC,svg[data-x="kypvpg7"][data-step="5"] .chipC,
svg[data-x="kypvpg7"][data-step="2"] .chipD,svg[data-x="kypvpg7"][data-step="3"] .chipD,
svg[data-x="kypvpg7"][data-step="4"] .chipD,svg[data-x="kypvpg7"][data-step="5"] .chipD{opacity:.35}
svg[data-x="kypvpg7"] .chipB{transition:opacity .4s ease}
svg[data-x="kypvpg7"][data-step="4"] .chipB,svg[data-x="kypvpg7"][data-step="5"] .chipB{opacity:.35}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Demographic transition model, four stages">
  <!-- base frame: axes, bands, curves, labels, chips -->
  <line x1="70" y1="250" x2="570" y2="250" stroke="var(--border-strong)" stroke-width="1.5"/>
  <line x1="195" y1="60" x2="195" y2="250" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 5"/>
  <line x1="320" y1="60" x2="320" y2="250" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 5"/>
  <line x1="445" y1="60" x2="445" y2="250" stroke="var(--border-strong)" stroke-width="1" stroke-dasharray="4 5"/>

  <!-- beat 2: growth IS the gap (shading only, no new text) -->
  <g data-from="1">
    <path d="M70 88 L320 88 C355 92 395 190 445 205 L570 208 L570 215 L445 215 C390 215 340 213 320 215 C265 195 240 104 195 100 L70 100 Z"
          fill="var(--accent)" opacity=".14"/>
  </g>

  <path d="M70 100 L195 100 C240 104 265 195 320 215 L570 215" fill="none" stroke="var(--incorrect)" stroke-width="2.5"/>
  <path d="M70 88 L320 88 C355 92 395 190 445 205 L570 208" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
  <text class="sm" x="74" y="82" style="fill:var(--accent)">birth rate</text>
  <text class="sm" x="74" y="118" style="fill:var(--incorrect)">death rate</text>

  <text class="sm" x="132.5" y="270" text-anchor="middle">Stage 1</text>
  <text class="sm" x="257.5" y="270" text-anchor="middle">Stage 2</text>
  <text class="sm" x="382.5" y="270" text-anchor="middle">Stage 3</text>
  <text class="sm" x="507.5" y="270" text-anchor="middle">Stage 4</text>

  <g class="chipC"><circle class="chip" cx="132.5" cy="292" r="13"/><text class="lbl" x="132.5" y="297" text-anchor="middle">C</text></g>
  <g><circle class="chip" cx="257.5" cy="292" r="13"/><text class="lbl" x="257.5" y="297" text-anchor="middle">A</text></g>
  <g class="chipB"><circle class="chip" cx="382.5" cy="292" r="13"/><text class="lbl" x="382.5" y="297" text-anchor="middle">B</text></g>
  <g class="chipD"><circle class="chip" cx="507.5" cy="292" r="13"/><text class="lbl" x="507.5" y="297" text-anchor="middle">D</text></g>

  <!-- beat 3: stages 1 and 4 have no gap -->
  <g data-from="2">
    <text class="sm" x="132.5" y="135" text-anchor="middle" style="fill:var(--muted)">gap ~ 0</text>
    <text class="sm" x="507.5" y="195" text-anchor="middle" style="fill:var(--muted)">gap ~ 0</text>
  </g>

  <!-- beat 4: stage 2, the widest gap -->
  <g data-from="3">
    <rect x="195" y="60" width="125" height="190" fill="var(--warn)" opacity=".10"/>
    <line x1="300" y1="92" x2="300" y2="202" stroke="var(--text)" stroke-width="2"/>
    <path d="M295 99 L300 92 L305 99 Z" fill="var(--text)"/>
    <path d="M295 195 L300 202 L305 195 Z" fill="var(--text)"/>
    <text class="sm" x="250" y="235" text-anchor="middle">widest gap</text>
  </g>

  <!-- beat 5: stage 3, the trap — the gap is closing -->
  <g data-from="4">
    <text class="sm" x="375" y="205" text-anchor="middle" style="fill:var(--incorrect)">gap closing</text>
  </g>

  <!-- beat 6: verdict -->
  <g data-from="5">
    <circle cx="257.5" cy="292" r="17" fill="none" stroke="var(--correct)" stroke-width="3"/>
    <rect x="235" y="24" width="170" height="26" rx="13" fill="var(--correct)" opacity=".16"/>
    <text class="sm" x="320" y="42" text-anchor="middle" style="fill:var(--correct)">peak growth = widest gap</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Two lines: birth rate and death rate"},
    {t: 8.11,  cap: "Growth = the gap between the lines"},
    {t: 15.1,  cap: "Stages 1 & 4: lines close, no surge — C and D out"},
    {t: 22.65, cap: "Stage 2: deaths plunge, births lag — widest gap (1920–1965)"},
    {t: 31.72, cap: "Stage 3: births fall, gap closes — growth slows, B out"},
    {t: 41.43, cap: "Widest gap = peak growth = Stage 2 — answer A"}
  ],
  transcript:
    "Demographic transition is two lines, birth rate and death rate. Each choice picks one stage. " +
    "Growth is the gap between the lines. The surge is wherever that gap is widest. Stages one and " +
    "four have the lines close together. Tiny gap, no surge. C and D are out. In stage two, " +
    "sanitation and medicine pull deaths down while births stay high. Widest gap, biggest surge. " +
    "The trap, choice B, is stage three. Births finally fall too, the gap closes, so growth is " +
    "slowing, not peaking. Widest gap means peak growth. Stage two, answer A."
});
