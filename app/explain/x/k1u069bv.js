/* Strengthen: the objection is about a base rate, so the winner is the choice
   that counts the half nobody counted. Beat 1 is the ungated base frame. */
RU_EX.reg("k1u069bv", {
  dur: 37,
  css: `
svg[data-x="k1u069bv"]{font-family:inherit}
svg[data-x="k1u069bv"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1u069bv"] .sm{fill:var(--text);font-size:12.5px;font-weight:700}
svg[data-x="k1u069bv"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1u069bv"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Diagram of the defense of difficult poetry and the base-rate objection to it">
  <text class="tag" x="24" y="24">STRENGTHEN THE AUTHOR&#8217;S OBJECTION</text>

  <!-- beat 1 (base frame): the claim being defended -->
  <rect x="24" y="34" width="592" height="32" rx="10" fill="var(--surface-2)"/>
  <text class="sm" x="38" y="54">DEFENSE &#183; a baffling poem now may be a masterpiece later</text>

  <!-- the four candidate facts -->
  <rect class="chip" x="24" y="192" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="224" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="256" width="30" height="24" rx="8"/>
  <rect class="chip" x="24" y="288" width="30" height="24" rx="8"/>
  <text class="lbl" x="39" y="209" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="241" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="273" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="305" text-anchor="middle">D</text>
  <text class="sm" x="64" y="209">equal rates: celebrated vs forgotten</text>
  <text class="sm" x="64" y="241">most people enjoy art they get at once</text>
  <text class="sm" x="64" y="273">obscure symphonies now standard</text>
  <text class="sm" x="64" y="305">a famous critic praised one poem</text>

  <!-- beat 2: the load-bearing assumption -->
  <g data-from="1">
    <rect x="24" y="72" width="592" height="32" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="sm" x="38" y="92" style="fill:var(--accent)">ASSUMES &#183; being baffling PREDICTS being great</text>
  </g>

  <!-- beat 3: the author attacks by counting, and half the pile is missing -->
  <g data-from="2">
    <rect class="chip" x="24" y="116" width="286" height="44" rx="10"/>
    <text class="sm" x="167" y="136" text-anchor="middle">baffling &#8594; later celebrated</text>
    <text class="sm" x="167" y="153" text-anchor="middle">the cases we remember</text>
    <rect x="330" y="116" width="286" height="44" rx="10" fill="var(--warn)" fill-opacity=".12"
          stroke="var(--border-strong)" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text class="sm" x="473" y="136" text-anchor="middle">baffling &#8594; quickly forgotten</text>
    <text class="sm" x="473" y="153" text-anchor="middle" style="fill:var(--warn)">the cases nobody counts</text>
  </g>

  <!-- beat 4: supply the count, and the prediction dies -->
  <g data-from="3">
    <text class="lbl" x="320" y="143" text-anchor="middle" style="fill:var(--correct)">=</text>
    <text class="sm"  x="320" y="180" text-anchor="middle" style="fill:var(--correct)">equal rates &#8594; being baffling predicts nothing</text>
    <rect x="24" y="192" width="30" height="24" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="209" text-anchor="middle" style="fill:var(--correct)">A</text>
    <text class="sm"  x="64" y="209" style="fill:var(--correct)">equal rates: celebrated vs forgotten</text>
    <text class="sm"  x="356" y="209" style="fill:var(--correct)">&#10003; supplies the uncounted half</text>
  </g>

  <!-- beat 5: three facts that never touch a rate -->
  <g data-from="4">
    <line x1="64" y1="236" x2="348" y2="236" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="268" x2="348" y2="268" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="300" x2="348" y2="300" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="356" y="273" style="fill:var(--incorrect)">the defense&#8217;s own survivor</text>
    <text class="sm" x="356" y="305" style="fill:var(--incorrect)">one case, never a rate</text>
    <text class="sm" x="356" y="241" style="fill:var(--incorrect)">popularity, a different question</text>
  </g>

  <!-- beat 6: the habit worth keeping -->
  <g data-from="5">
    <rect x="24" y="322" width="592" height="26" rx="8" fill="var(--surface-2)"/>
    <text class="sm" x="320" y="340" text-anchor="middle">When the argument turns on a RATE, answer with the missing count.</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Defense: baffling now, masterpiece later"},
    {t: 4.67,  cap: "Assumption: difficulty predicts greatness"},
    {t: 9.42,  cap: "Baffling failures exist, but go uncounted"},
    {t: 15.29, cap: "Equal rates ⇒ difficulty predicts nothing"},
    {t: 21.72, cap: "Survivors, one critic, taste: none touch the rate"},
    {t: 30.55, cap: "Rate arguments need the uncounted half"}
  ]
});
