/* CARS: a "functions primarily to" question is about the passage's SHAPE. */
RU_EX.reg("k1lvrl7o", {
  dur: 43,
  css: `
svg[data-x="k1lvrl7o"]{font-family:inherit}
svg[data-x="k1lvrl7o"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1lvrl7o"] .sm{fill:var(--muted);font-size:12px;font-weight:600}
svg[data-x="k1lvrl7o"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1lvrl7o"] .box{fill:var(--surface-2);stroke:var(--border-strong);stroke-width:1.6}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="The shape of the passage, part by part">
  <text class="sm" x="320" y="28" text-anchor="middle">this asks about SHAPE — so label what each part DOES</text>

  <g data-from="1">
    <rect class="box" x="24" y="42" width="592" height="52" rx="14"/>
    <text class="tag" x="40" y="62">PART 1 · PRESENTS A FAMILIAR VIEW</text>
    <text class="sm"  x="40" y="84">authenticity = strip away pretence to reach a true self underneath</text>
  </g>
  <g data-from="2">
    <rect x="24" y="104" width="592" height="52" rx="14" fill="var(--warn)" opacity=".18"/>
    <text class="tag" x="40" y="124" style="fill:var(--warn)">PART 2 · RAISES A PROBLEM</text>
    <text class="sm"  x="40" y="146" style="fill:var(--warn)">if every layer is itself contingent, the stripping never reaches bottom</text>
  </g>
  <g data-from="3">
    <rect x="24" y="166" width="592" height="52" rx="14" fill="var(--correct)" opacity=".18"/>
    <text class="tag" x="40" y="186" style="fill:var(--correct)">PART 3 · OFFERS AN ALTERNATIVE</text>
    <text class="sm"  x="40" y="208" style="fill:var(--correct)">authenticity = owning your commitments openly instead</text>
  </g>

  <g data-from="4">
    <rect x="130" y="230" width="380" height="34" rx="17" fill="var(--accent)" opacity=".18"/>
    <text class="lbl" x="320" y="253" text-anchor="middle" style="fill:var(--accent)">shape: view → problem → alternative</text>
    <text class="sm"  x="320" y="280" text-anchor="middle">and notice what it never does: it never declares the first view false</text>
  </g>

  <g data-from="5">
    <text class="sm" x="24" y="306" style="fill:var(--incorrect)">D · “proves no true self exists” — far stronger than anything he claims</text>
    <text class="sm" x="24" y="324" style="fill:var(--incorrect)">C · “defends the traditional view” — he questions it, not defends it</text>
  </g>
  <g data-from="6">
    <rect x="330" y="292" width="286" height="44" rx="14"
          fill="var(--correct)" fill-opacity=".2" stroke="var(--correct)" stroke-width="2.5"/>
    <text class="sm"  x="473" y="312" text-anchor="middle" style="fill:var(--correct)">A · questions one conception,</text>
    <text class="lbl" x="473" y="329" text-anchor="middle" style="fill:var(--correct)">presents an alternative → A</text>
  </g>
</svg>`,
  steps: [
    {t: 0, cap: "This asks about SHAPE — track what each part does"},
    {t: 6, cap: "1. presents a familiar view: strip away to the true self"},
    {t: 13, cap: "2. raises a problem: the stripping never bottoms out"},
    {t: 20, cap: "3. offers an alternative: owning your commitments"},
    {t: 27, cap: "Shape: view → problem → alternative"},
    {t: 34, cap: "So: not “proves none exists”, not “defends tradition”"},
    {t: 39, cap: "Question one view, offer an alternative → A"}
  ]
});
