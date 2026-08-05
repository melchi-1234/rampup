/* Bystander: the crowd is only the setting. The discriminator is the REASON
   the witnesses gave, so the scene puts that reason on screen and holds every
   concept against it. Beat 1 is the ungated base frame. */
RU_EX.reg("k6xghj5", {
  dur: 44,
  css: `
svg[data-x="k6xghj5"]{font-family:inherit}
svg[data-x="k6xghj5"] .lbl{fill:var(--text);font-size:14px;font-weight:700}
svg[data-x="k6xghj5"] .sm{fill:var(--muted);font-size:12.5px;font-weight:600}
svg[data-x="k6xghj5"] .tag{fill:var(--muted);font-size:11px;font-weight:800;letter-spacing:.05em}
svg[data-x="k6xghj5"] .fig{fill:none;stroke:var(--muted);stroke-width:1.6}
svg[data-x="k6xghj5"] .chip{fill:none;stroke:var(--border-strong);stroke-width:1.5}
`,
  svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Why a crowd failed to call for help">
  <text class="tag" x="24" y="26">A CROWD WATCHES SOMEONE COLLAPSE &#183; NOBODY CALLS</text>

  <!-- six onlookers -->
  <g class="fig">
    <circle cx="60"  cy="60" r="7"/><path d="M60 67 v16 M50 74 h20 M60 83 l-6 11 M60 83 l6 11"/>
    <circle cx="110" cy="60" r="7"/><path d="M110 67 v16 M100 74 h20 M110 83 l-6 11 M110 83 l6 11"/>
    <circle cx="160" cy="60" r="7"/><path d="M160 67 v16 M150 74 h20 M160 83 l-6 11 M160 83 l6 11"/>
    <circle cx="210" cy="60" r="7"/><path d="M210 67 v16 M200 74 h20 M210 83 l-6 11 M210 83 l6 11"/>
    <circle cx="260" cy="60" r="7"/><path d="M260 67 v16 M250 74 h20 M260 83 l-6 11 M260 83 l6 11"/>
    <circle cx="310" cy="60" r="7"/><path d="M310 67 v16 M300 74 h20 M310 83 l-6 11 M310 83 l6 11"/>
  </g>

  <!-- beat 2: the reason they all gave -->
  <g data-from="1">
    <rect x="24" y="106" width="592" height="34" rx="10" fill="var(--warn)" fill-opacity=".16"/>
    <text class="lbl" x="320" y="128" text-anchor="middle" fill="var(--warn)">every witness said the same thing: &#8220;I assumed someone else had already called&#8221;</text>
  </g>

  <!-- the four concepts, letter column then claim column -->
  <rect class="chip" x="24" y="164" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="206" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="248" width="30" height="26" rx="8"/>
  <rect class="chip" x="24" y="290" width="30" height="26" rx="8"/>
  <text class="lbl" x="39" y="182" text-anchor="middle">A</text>
  <text class="lbl" x="39" y="224" text-anchor="middle">B</text>
  <text class="lbl" x="39" y="266" text-anchor="middle">C</text>
  <text class="lbl" x="39" y="308" text-anchor="middle">D</text>
  <text class="sm" x="64" y="182">fundamental attribution error</text>
  <text class="sm" x="64" y="224">diffusion of responsibility</text>
  <text class="sm" x="64" y="266">deindividuation</text>
  <text class="sm" x="64" y="308">in-group bias</text>

  <!-- beat 3: two of them are not crowd effects at all -->
  <g data-from="2">
    <line x1="64" y1="177" x2="300" y2="177" stroke="var(--incorrect)" stroke-width="1.5"/>
    <line x1="64" y1="303" x2="300" y2="303" stroke="var(--incorrect)" stroke-width="1.5"/>
    <text class="sm" x="320" y="182" fill="var(--incorrect)">blames someone&#8217;s character, not a crowd</text>
    <text class="sm" x="320" y="308" fill="var(--incorrect)">favors your own side &#8212; no side here</text>
  </g>

  <!-- beat 4: deindividuation IS a crowd effect, which is what makes it the trap -->
  <g data-from="3">
    <rect x="24" y="248" width="30" height="26" rx="8" fill="var(--warn)" fill-opacity=".18"
          stroke="var(--warn)" stroke-width="2"/>
    <text class="lbl" x="39" y="266" text-anchor="middle" fill="var(--warn)">C</text>
    <text class="sm" x="320" y="260" fill="var(--warn)">a real crowd effect &#8212; but it RELEASES action</text>
    <text class="sm" x="320" y="278" fill="var(--warn)">you would not risk alone. Here nobody acted.</text>
  </g>

  <!-- beat 5: the duty splits -->
  <g data-from="4">
    <rect x="24" y="206" width="30" height="26" rx="8" fill="var(--correct)" fill-opacity=".2"
          stroke="var(--correct)" stroke-width="2"/>
    <text class="lbl" x="39" y="224" text-anchor="middle" fill="var(--correct)">B</text>
    <text class="sm" x="320" y="224" fill="var(--correct)">one duty to act, split six ways &#8594; each share shrinks</text>
    <line x1="60" y1="98" x2="310" y2="98" stroke="var(--correct)" stroke-width="2" stroke-dasharray="4 3"/>
  </g>

  <!-- beat 6: the transferable move -->
  <g data-from="5">
    <text class="sm" x="24" y="342" fill="var(--accent)">the crowd is only the setting &#8212; match the concept to the REASON they gave</text>
  </g>
</svg>`,
  steps: [
    {t: 0,     cap: "A crowd watches. Nobody calls for help."},
    {t: 6.03,  cap: "Each assumed someone else had already called"},
    {t: 11.90, cap: "Two of them aren't crowd effects at all"},
    {t: 20.49, cap: "Deindividuation: a crowd effect that releases action"},
    {t: 30.12, cap: "The duty splits across everyone watching"},
    {t: 37.35, cap: "Match the concept to the reason they gave"}
  ]
});
