/* Perspective questions are answered by LEVEL: does the explanation live in
   whole structures, or in people making meaning face to face? Beat 1 is the
   ungated base frame. */
RU_EX.reg("k1h6qr0y", {
  dur: 37,
  css: `
svg[data-x="k1h6qr0y"]{font-family:inherit}
svg[data-x="k1h6qr0y"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k1h6qr0y"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k1h6qr0y"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k1h6qr0y"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Which sociological perspective explains a crew's private symbols">
  <text class="tag" x="24" y="26">NICKNAMES FOR THE MACHINES &#183; PRIVATE HAND SIGNALS &#183; A CREW IDENTITY</text>

  <!-- beat 2: the level test -->
  <g data-from="1">
    <rect x="24"  y="44" width="284" height="46" rx="10" fill="var(--surface-2)"/>
    <rect x="332" y="44" width="284" height="46" rx="10" fill="var(--accent)" fill-opacity=".14"/>
    <text class="lbl" x="166" y="66" text-anchor="middle">the whole structure</text>
    <text class="sm"  x="166" y="84" text-anchor="middle">what a system needs, who holds power</text>
    <text class="lbl" x="474" y="66" text-anchor="middle" fill="var(--accent)">face to face</text>
    <text class="sm"  x="474" y="84" text-anchor="middle" fill="var(--accent)">meaning people build between them</text>
  </g>

  <!-- beat 3: which side the evidence sits on -->
  <g data-from="2">
    <text class="sm" x="24" y="116" fill="var(--accent)">every symbol here was invented by the workers themselves, in the doing</text>
  </g>

  <!-- the four perspectives -->
  <rect class="chip" x="24" y="140" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="182" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="224" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="266" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="158" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="200" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="242" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="284" text-anchor="middle">D</text>
  <text class="sm" x="64" y="158">rational choice / social exchange</text>
  <text class="sm" x="64" y="200">conflict theory</text>
  <text class="sm" x="64" y="242">symbolic interactionism</text>
  <text class="sm" x="64" y="284">structural functionalism</text>

  <!-- beat 4: C wins -->
  <g data-from="3">
    <rect x="24" y="224" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="242" text-anchor="middle" fill="var(--correct)">C</text>
    <text class="sm" x="330" y="242" fill="var(--correct)">shared symbols &#8594; shared identity</text>
  </g>

  <!-- beat 5: the two structural ones -->
  <g data-from="4">
    <line x1="64" y1="195" x2="300" y2="195" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="279" x2="300" y2="279" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="200" fill="var(--incorrect)">would ask who is exploiting whom</text>
    <text class="sm" x="330" y="284" fill="var(--incorrect)">would ask what the factory needs</text>
  </g>

  <!-- beat 6: rational choice -->
  <g data-from="5">
    <line x1="64" y1="153" x2="300" y2="153" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="330" y="158" fill="var(--incorrect)">would price costs against benefits</text>
    <text class="sm" x="24" y="326" fill="var(--accent)">none of those is what a private nickname is doing</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "Private nicknames, shared hand signals, a crew identity"},
    {t: 6.35,  cap: "Which level: whole structures, or face-to-face meaning?"},
    {t: 12.86, cap: "The workers built every one of these symbols themselves"},
    {t: 16.97, cap: "Shared symbols → shared identity = symbolic interactionism"},
    {t: 22.04, cap: "Functionalism: system needs · Conflict: who exploits whom"},
    {t: 29.91, cap: "Rational choice prices costs and benefits — not this"}
  ]
});
