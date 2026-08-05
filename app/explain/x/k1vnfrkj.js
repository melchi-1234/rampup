/* Acidity ranking: judge the ANION, and note that more resonance forms is not
   the test — where the charge sits is. Beat 1 is the ungated base frame. */
RU_EX.reg("k1vnfrkj", {
  dur: 44,
  css: `
svg[data-x="k1vnfrkj"]{font-family:inherit}
svg[data-x="k1vnfrkj"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1vnfrkj"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1vnfrkj"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1vnfrkj"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Ranking ethanol, phenol and acetic acid by acidity">
  <text class="tag" x="24" y="26">RANK BY INCREASING ACIDITY</text>
  <text class="sm"  x="24" y="48">two of the four orders are exact reverses &#8212; the word &#8220;increasing&#8221; is the whole question</text>

  <!-- the rule -->
  <g data-from="1">
    <rect x="24" y="64" width="592" height="30" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="320" y="84" text-anchor="middle" fill="var(--accent)">strip the proton, then ask how well the leftover anion spreads its charge</text>
  </g>

  <!-- three rows, fixed columns: name | anion | verdict -->
  <text class="tag" x="24"  y="122">ACID</text>
  <text class="tag" x="180" y="122">ANION</text>
  <text class="tag" x="330" y="122">WHERE THE CHARGE GOES</text>

  <g data-from="2">
    <text class="lbl" x="24"  y="150">ethanol</text>
    <text class="sm"  x="180" y="150">ethoxide</text>
    <text class="sm"  x="330" y="150">one oxygen holds all of it</text>
    <text class="sm"  x="330" y="168" fill="var(--incorrect)">nowhere to spread &#8594; weakest</text>
  </g>
  <g data-from="3">
    <text class="lbl" x="24"  y="204">phenol</text>
    <text class="sm"  x="180" y="204">phenoxide</text>
    <text class="sm"  x="330" y="204">4 spots &#8212; but 3 of them are carbon</text>
    <text class="sm"  x="330" y="222" fill="var(--warn)">carbon carries it badly &#8594; middle</text>
  </g>
  <g data-from="4">
    <text class="lbl" x="24"  y="258">acetic acid</text>
    <text class="sm"  x="180" y="258">acetate</text>
    <text class="sm"  x="330" y="258">only 2 spots &#8212; but BOTH are oxygen</text>
    <text class="sm"  x="330" y="276" fill="var(--correct)">and the C=O pulls &#8594; strongest</text>
    <text class="sm"  x="24"  y="300" fill="var(--accent)">more resonance forms is not the test &#8212; which ATOM holds the charge is</text>
  </g>

  <!-- the answer -->
  <g data-from="5">
    <rect x="24" y="316" width="360" height="32" rx="16" fill="var(--correct)" fill-opacity=".18"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="204" y="337" text-anchor="middle" fill="var(--correct)">ethanol &lt; phenol &lt; acetic acid</text>
    <text class="sm" x="404" y="337">weakest first, because &#8220;increasing&#8221;</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Three acids, four orders, two of them exact reverses"},
    {t: 8.67,  cap: "Acidity = how stable the anion left behind is"},
    {t: 15.10, cap: "Ethoxide: one oxygen holds the whole charge"},
    {t: 21.45, cap: "Phenoxide: 4 spots, but 3 of them are carbon"},
    {t: 29.80, cap: "Acetate: 2 spots, both oxygen, both pulled by C=O"},
    {t: 39.11, cap: "ethanol < phenol < acetic acid"}
  ]
});
