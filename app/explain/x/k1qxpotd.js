/* 1H NMR n+1 splitting for 1,1,2-trichloroethane: triplet + doublet. */
RU_EX.reg("k1qxpotd", {
  dur: 34,
  css: `
svg[data-x="k1qxpotd"]{font-family:inherit}
svg[data-x="k1qxpotd"] .lbl{fill:var(--text);font-size:15px;font-weight:700}
svg[data-x="k1qxpotd"] .big{fill:var(--text);font-size:19px;font-weight:800}
svg[data-x="k1qxpotd"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1qxpotd"] .bond{stroke:var(--text);stroke-width:2.2;stroke-linecap:round}
svg[data-x="k1qxpotd"] .peak{stroke-width:3;stroke-linecap:round;fill:none}

svg[data-x="k1qxpotd"] .envA,svg[data-x="k1qxpotd"] .envB{opacity:0;transition:opacity .4s ease}
svg[data-x="k1qxpotd"][data-step="0"] .envA,svg[data-x="k1qxpotd"][data-step="0"] .envB{opacity:1}
svg[data-x="k1qxpotd"][data-step="2"] .envA,svg[data-x="k1qxpotd"][data-step="3"] .envA{opacity:1}
svg[data-x="k1qxpotd"][data-step="4"] .envB,svg[data-x="k1qxpotd"][data-step="5"] .envB{opacity:1}
svg[data-x="k1qxpotd"][data-step="6"] .envA,svg[data-x="k1qxpotd"][data-step="6"] .envB{opacity:1}

svg[data-x="k1qxpotd"] .nbrA,svg[data-x="k1qxpotd"] .nbrB{opacity:0;transition:opacity .4s ease}
svg[data-x="k1qxpotd"][data-step="2"] .nbrA,svg[data-x="k1qxpotd"][data-step="3"] .nbrA{opacity:1;animation:k1qBlink 1.4s ease-in-out infinite}
svg[data-x="k1qxpotd"][data-step="4"] .nbrB,svg[data-x="k1qxpotd"][data-step="5"] .nbrB{opacity:1;animation:k1qBlink 1.4s ease-in-out infinite}
@keyframes k1qBlink{0%,100%{opacity:.4}50%{opacity:1}}

svg[data-x="k1qxpotd"] .rule{opacity:0;transition:opacity .45s ease}
svg[data-x="k1qxpotd"][data-step="1"] .rule,svg[data-x="k1qxpotd"][data-step="2"] .rule,
svg[data-x="k1qxpotd"][data-step="3"] .rule,svg[data-x="k1qxpotd"][data-step="4"] .rule,
svg[data-x="k1qxpotd"][data-step="5"] .rule,svg[data-x="k1qxpotd"][data-step="6"] .rule{opacity:1}

svg[data-x="k1qxpotd"] .trip,svg[data-x="k1qxpotd"] .doub{opacity:0;transition:opacity .5s ease}
svg[data-x="k1qxpotd"][data-step="3"] .trip,svg[data-x="k1qxpotd"][data-step="4"] .trip,
svg[data-x="k1qxpotd"][data-step="5"] .trip,svg[data-x="k1qxpotd"][data-step="6"] .trip{opacity:1}
svg[data-x="k1qxpotd"][data-step="5"] .doub,svg[data-x="k1qxpotd"][data-step="6"] .doub{opacity:1}

svg[data-x="k1qxpotd"] .trap{opacity:0;transition:opacity .5s ease}
svg[data-x="k1qxpotd"][data-step="6"] .trap{opacity:1}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="NMR splitting for 1,1,2-trichloroethane">
  <!-- structure -->
  <text class="sm" x="320" y="30" text-anchor="middle">1,1,2-trichloroethane</text>
  <line class="bond" x1="268" y1="86" x2="372" y2="86"/>
  <text class="big" x="252" y="93" text-anchor="middle">C</text>
  <text class="big" x="388" y="93" text-anchor="middle">C</text>
  <text class="sm" x="222" y="66" text-anchor="middle">Cl</text>
  <text class="sm" x="222" y="118" text-anchor="middle">Cl</text>
  <text class="sm" x="418" y="66" text-anchor="middle">Cl</text>
  <line class="bond" x1="240" y1="78" x2="228" y2="70"/>
  <line class="bond" x1="240" y1="94" x2="228" y2="106"/>
  <line class="bond" x1="400" y1="78" x2="412" y2="70"/>
  <!-- the two proton environments -->
  <g class="envA">
    <circle cx="252" cy="128" r="17" fill="var(--accent)" opacity=".2"/>
    <text class="lbl" x="252" y="134" text-anchor="middle" style="fill:var(--accent)">H</text>
  </g>
  <g class="envB">
    <circle cx="374" cy="128" r="17" fill="var(--correct)" opacity=".2"/>
    <text class="lbl" x="374" y="134" text-anchor="middle" style="fill:var(--correct)">H</text>
    <circle cx="408" cy="128" r="17" fill="var(--correct)" opacity=".2"/>
    <text class="lbl" x="408" y="134" text-anchor="middle" style="fill:var(--correct)">H</text>
  </g>
  <line class="bond" x1="252" y1="102" x2="252" y2="112"/>
  <line class="bond" x1="382" y1="102" x2="376" y2="112"/>
  <line class="bond" x1="394" y1="102" x2="404" y2="112"/>
  <text class="sm" x="252" y="164" text-anchor="middle">CHCl₂</text>
  <text class="sm" x="391" y="164" text-anchor="middle">CH₂Cl</text>

  <!-- neighbor highlights -->
  <g class="nbrA"><rect x="352" y="108" width="76" height="40" rx="12" fill="none"
      stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm" x="391" y="102" text-anchor="middle" style="fill:var(--correct)">2 neighbors</text></g>
  <g class="nbrB"><rect x="232" y="108" width="40" height="40" rx="12" fill="none"
      stroke="var(--accent)" stroke-width="2.5"/>
    <text class="sm" x="252" y="102" text-anchor="middle" style="fill:var(--accent)">1 neighbor</text></g>

  <g class="rule">
    <rect x="452" y="60" width="172" height="52" rx="14" fill="var(--accent)" opacity=".14"/>
    <text class="lbl" x="538" y="82" text-anchor="middle" style="fill:var(--accent)">n + 1 rule</text>
    <text class="sm" x="538" y="101" text-anchor="middle">n = protons NEXT DOOR</text>
  </g>

  <!-- triplet -->
  <g class="trip">
    <text class="sm" x="150" y="212" text-anchor="middle">CHCl₂ proton · n = 2</text>
    <line class="peak" stroke="var(--accent)" x1="106" y1="288" x2="106" y2="256"/>
    <line class="peak" stroke="var(--accent)" x1="150" y1="288" x2="150" y2="228"/>
    <line class="peak" stroke="var(--accent)" x1="194" y1="288" x2="194" y2="256"/>
    <line class="bond" x1="76" y1="288" x2="224" y2="288"/>
    <text class="lbl" x="150" y="312" text-anchor="middle" style="fill:var(--accent)">triplet (1:2:1)</text>
  </g>
  <!-- doublet -->
  <g class="doub">
    <text class="sm" x="416" y="212" text-anchor="middle">CH₂Cl protons · n = 1</text>
    <line class="peak" stroke="var(--correct)" x1="394" y1="288" x2="394" y2="234"/>
    <line class="peak" stroke="var(--correct)" x1="438" y1="288" x2="438" y2="234"/>
    <line class="bond" x1="346" y1="288" x2="486" y2="288"/>
    <text class="lbl" x="416" y="312" text-anchor="middle" style="fill:var(--correct)">doublet (1:1)</text>
  </g>
  <g class="trap">
    <text class="sm" x="320" y="342" text-anchor="middle" style="fill:var(--incorrect)">
      trap: never count the H's on the proton's own carbon
    </text>
  </g>
</svg>`,
  steps: [
    {t: 0,   cap: "Two distinct proton environments: CHCl₂ and CH₂Cl"},
    {t: 4.5, cap: "The n+1 rule counts NEIGHBORING protons, not your own"},
    {t: 9,   cap: "The CHCl₂ proton's neighbor carbon carries 2 protons"},
    {t: 14,  cap: "n = 2, so n+1 = 3 peaks: a triplet"},
    {t: 19,  cap: "The CH₂Cl protons' neighbor carbon carries just 1 proton"},
    {t: 24,  cap: "n = 1, so n+1 = 2 peaks: a doublet"},
    {t: 29,  cap: "CHCl₂ is the triplet, CH₂Cl is the doublet"}
  ],
  transcript:
    "1,1,2-trichloroethane has two distinct proton environments: the single proton on the " +
    "CHCl₂ carbon, and the two protons on the CH₂Cl carbon. The n+1 rule splits a signal " +
    "into n+1 peaks, where n is the number of equivalent protons on the ADJACENT carbon, " +
    "not on its own carbon. The lone CHCl₂ proton has one neighboring carbon, CH₂Cl, which " +
    "carries two protons, so n equals 2 and it appears as a triplet. The two CH₂Cl protons " +
    "neighbor the CHCl₂ carbon, which carries only one proton, so n equals 1 and they " +
    "appear as a doublet. The common mistake is counting the hydrogens on the proton's own " +
    "carbon, which would flip the answer."
});
