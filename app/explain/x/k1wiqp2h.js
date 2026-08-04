/* Yerkes-Dodson: two curves whose peaks sit at different arousal levels. */
RU_EX.reg("k1wiqp2h", {
  dur: 40,
  css: `
svg[data-x="k1wiqp2h"]{font-family:inherit}
svg[data-x="k1wiqp2h"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1wiqp2h"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1wiqp2h"] .ax{stroke:var(--muted);stroke-width:2}
svg[data-x="k1wiqp2h"] .cur{fill:none;stroke-width:4;stroke-linecap:round}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Yerkes-Dodson curves for a simple and a complex task">
  <line class="ax" x1="80" y1="272" x2="600" y2="272"/>
  <line class="ax" x1="80" y1="272" x2="80" y2="56"/>
  <text class="sm" x="340" y="298" text-anchor="middle">arousal  →</text>
  <text class="sm" x="58" y="164" text-anchor="middle" transform="rotate(-90 58 164)">performance</text>
  <text class="sm" x="100" y="292">low</text>
  <text class="sm" x="580" y="292" text-anchor="end">high</text>

  <!-- simple task: monotonic rise -->
  <path class="cur" stroke="var(--correct)" d="M84 250 Q300 210 596 96"/>
  <text class="lbl" x="596" y="84" text-anchor="end" fill="var(--correct)">simple task</text>
  <text class="sm"  x="596" y="112" text-anchor="end" data-from="0">keeps improving</text>

  <!-- complex task: inverted U peaking early -->
  <path class="cur" stroke="var(--accent)" d="M84 254 Q220 96 340 132 Q460 168 596 258" data-from="1"/>
  <text class="lbl" x="228" y="92" data-from="1" fill="var(--accent)">complex task</text>
  <circle cx="248" cy="118" r="7" fill="var(--accent)" data-from="1"/>
  <text class="sm" x="248" y="146" text-anchor="middle" data-from="1">peaks, then falls</text>

  <text class="sm" x="340" y="322" text-anchor="middle" data-from="2">so arousal is not simply good or bad &mdash; it depends on the task</text>

  <!-- where each peak sits -->
  <g data-from="4">
    <line x1="248" y1="118" x2="248" y2="272" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4"/>
    <text class="sm" x="248" y="290" text-anchor="middle" fill="var(--accent)">best for HARD</text>
    <line x1="560" y1="106" x2="560" y2="272" stroke="var(--correct)" stroke-width="2" stroke-dasharray="4 4"/>
    <text class="sm" x="556" y="290" text-anchor="middle" fill="var(--correct)">best for EASY</text>
  </g>

  <g data-from="3">
    <rect x="330" y="176" width="264" height="46" rx="16" fill="var(--accent)" opacity=".16"/>
    <text class="lbl" x="462" y="196" text-anchor="middle" fill="var(--accent)">the Yerkes-Dodson law</text>
    <text class="sm"  x="462" y="214" text-anchor="middle" fill="var(--accent)">the peak MOVES with difficulty</text>
  </g>
  <text class="sm" x="96" y="60" data-from="5">drive reduction, opponent-process and Maslow</text>
  <text class="sm" x="96" y="78" data-from="5">don't describe a curve at all</text>
</svg>`,
  steps: [
    {t: 0, cap: "Simple task: performance keeps improving"},
    {t: 5, cap: "Complex task: peaks in the middle, then falls"},
    {t: 10, cap: "Arousal isn't simply good or bad"},
    {t: 15, cap: "An inverted U whose peak MOVES with difficulty"},
    {t: 22, cap: "Hard task: peak is low · easy task: peak is high"},
    {t: 28, cap: "The distractors don't describe a curve"},
    {t: 34, cap: "Peak at intermediate arousal → Yerkes-Dodson"}
  ]
});
