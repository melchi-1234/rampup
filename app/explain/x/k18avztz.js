/* X-linked recessive: the mother is a forced carrier, and the son's Y comes
   from dad, so only her two X's are in play. Beat 1 is the base frame.
   Squares are sons, circles daughters; a FILLED shape is affected, a half-
   filled circle is a carrier — so the son square stays OPEN with a "?" and
   never asserts an outcome the scene has not earned yet. */
RU_EX.reg("k18avztz", {
  dur: 38,
  css: `
svg[data-x="k18avztz"]{font-family:inherit}
svg[data-x="k18avztz"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k18avztz"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k18avztz"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k18avztz"] .ped{fill:none;stroke:var(--text);stroke-width:1.8}
svg[data-x="k18avztz"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why any son of an obligate carrier has a fifty percent chance">
  <text class="tag" x="24" y="26">X-LINKED RECESSIVE &#183; ONLY MOM'S TWO X&#8217;s ARE IN PLAY</text>

  <!-- pedigree: her affected father, then her, then the son in question -->
  <rect class="ped" x="40" y="52" width="30" height="30" fill="var(--text)"/>
  <text class="sm" x="55" y="98" text-anchor="middle">her father</text>
  <text class="sm" x="55" y="114" text-anchor="middle">X&#7580;Y</text>

  <line x1="70" y1="67" x2="118" y2="67" stroke="var(--text)" stroke-width="1.5"/>
  <circle class="ped" cx="140" cy="67" r="16"/>
  <text class="sm" x="140" y="98" text-anchor="middle">the woman</text>

  <line x1="156" y1="67" x2="204" y2="67" stroke="var(--text)" stroke-width="1.5"/>
  <rect class="ped" x="204" y="52" width="30" height="30"/>
  <text class="lbl" x="219" y="73" text-anchor="middle">?</text>
  <text class="sm" x="219" y="98" text-anchor="middle">their son</text>

  <!-- beat 2: dad's single X must go to every daughter -->
  <g data-from="1">
    <text class="sm" x="24" y="140" fill="var(--warn)">an affected father has ONE X, and every daughter gets it</text>
  </g>

  <!-- beat 3: so she is a carrier, with certainty -->
  <g data-from="2">
    <path d="M124 67 a16 16 0 0 1 32 0 z" fill="var(--warn)" transform="rotate(-90 140 67)"/>
    <text class="sm" x="140" y="114" text-anchor="middle" fill="var(--warn)">X X&#7580;</text>
    <text class="sm" x="24" y="162" fill="var(--warn)">obligate carrier &#8212; probability 1, not one half</text>
  </g>

  <!-- beat 4: the son's Y is dad's, so dad drops out entirely -->
  <g data-from="3">
    <text class="sm" x="24" y="190">a son takes his Y from his father, so his father&#8217;s X never reaches him</text>
    <text class="sm" x="24" y="210" fill="var(--accent)">only which of the mother&#8217;s two X&#8217;s he gets decides it</text>
  </g>

  <!-- beat 5: the fork, and the number the question wants -->
  <g data-from="4">
    <line x1="140" y1="232" x2="140" y2="248" stroke="var(--accent)" stroke-width="2"/>
    <path d="M80 248 L200 248" stroke="var(--accent)" stroke-width="2"/>
    <line x1="80"  y1="248" x2="80"  y2="264" stroke="var(--accent)" stroke-width="2"/>
    <line x1="200" y1="248" x2="200" y2="264" stroke="var(--accent)" stroke-width="2"/>
    <rect x="34" y="264" width="92" height="30" rx="8" fill="var(--surface-2)"/>
    <rect x="154" y="264" width="92" height="30" rx="8" fill="var(--incorrect)" fill-opacity=".16"/>
    <text class="sm" x="80"  y="284" text-anchor="middle">gets X &#183; fine</text>
    <text class="sm" x="200" y="284" text-anchor="middle" fill="var(--incorrect)">gets X&#7580; &#183; affected</text>
    <text class="lbl" x="140" y="318" text-anchor="middle" fill="var(--correct)">50% for any son &#8212; first or fifth</text>
  </g>

  <!-- candidates, fixed columns -->
  <rect class="chip" x="300" y="140" width="72" height="26" rx="13"/>
  <rect class="chip" x="300" y="176" width="72" height="26" rx="13"/>
  <rect class="chip" x="300" y="212" width="72" height="26" rx="13"/>
  <rect class="chip" x="300" y="248" width="72" height="26" rx="13"/>
  <text class="lbl" x="336" y="158" text-anchor="middle">0%</text>
  <text class="lbl" x="336" y="194" text-anchor="middle">25%</text>
  <text class="lbl" x="336" y="230" text-anchor="middle">50%</text>
  <text class="lbl" x="336" y="266" text-anchor="middle">100%</text>

  <!-- beat 5 marks the winner; beat 6 names the trap -->
  <g data-from="4">
    <rect x="300" y="212" width="72" height="26" rx="13" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="336" y="230" text-anchor="middle" fill="var(--correct)">50%</text>
  </g>
  <g data-from="5">
    <text class="sm" x="388" y="194" fill="var(--incorrect)">&#189; for a son &#215; &#189; for the X</text>
    <text class="sm" x="388" y="214" fill="var(--incorrect)">but you were GIVEN a son</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "X-linked recessive — four percentages on the table"},
    {t: 5.79,  cap: "Her father is XᶜY — his only X goes to every daughter"},
    {t: 12.54, cap: "Obligate carrier (X Xᶜ) — probability 1, not ½"},
    {t: 19.21, cap: "A son gets Y from his father — only mom's X is in play"},
    {t: 25.72, cap: "½ working, ½ colorblind → 50% for any son, first or fifth"},
    {t: 32.95, cap: "Asked about a son? The ½ for sex is already spent."}
  ]
});
