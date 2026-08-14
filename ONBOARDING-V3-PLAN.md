Melchi — written to `/Users/melchiorgoldfarb/rampup-web/ONBOARDING-V3-PLAN.md`; full document follows.

# RampUp Onboarding V3 — Conversion Plan

**Scope:** `/start/` funnel (`start/index.html`, `assets/funnel.js`, `assets/billing.js`), from first paint to `checkout_started`.
**Constraint that governs everything below:** no invented social proof, no invented scarcity, no dark patterns. RampUp has ~zero users, so any "12,483 students" line is both false and unnecessary. The two things that are genuinely ours are **the founder's money-back guarantee** and **arithmetic done on the user's own test date**. Those are the trust engine. Everything in this plan either sharpens one of them or gets out of the way.

---

## 0. Evidence grading (read before citing anything in here)

The three research reports are not equally usable. Grading them first, so no one repeats a number that cannot be defended.

| Source | Status | How it is used here |
|---|---|---|
| RevenueCat *State of Subscription Apps 2026* — trial-length conversion (≤4d 25.5% / 5–9d 37.4% / 17–32d 42.5%), Day-0/Day-1 cancel concentration (55% / 84%) | **Usable.** Vendor-published but aggregated from real cross-app SDK data | Drives the "do not shorten the 7-day trial" call (§2.6) |
| RevenueCat paywall-placement case studies (Greg 3%→15%, Rootd 5× revenue) | **Usable with caveat.** Named single-company anecdotes, no controls | Directional only — supports "paywall lives inside the flow, not after free usage", which RampUp already does |
| Adapty — 44.5% of purchases on Day 0; 71–95% of trial starts on Day 0 | **Usable.** First-party SDK aggregate | Drives §5 instrumentation extending past checkout into the first app session |
| Adapty — "loading screen with social proof is table stakes" | **Pattern only, no measured lift.** And the social-proof half is unusable for RampUp | We keep the interstitial, we reject the social-proof content (§1, building) |
| "Appcues: −30% steps → +50% completion", "Appcues: −15% per screen past five", "Intercom: −30% time → +15–25% conversion" | **DO NOT CITE.** Untraceable to any primary study; only appears unlinked in SEO round-ups | Excluded. The step-count argument in §3 is made from our own measured tap-count instead |
| "Paywall after 3–5 screens converts 40–60% better" | **DO NOT CITE.** No traceable primary source | Excluded |
| "Noom quiz converts >10%" / time-to-value percentage set / "69% correlation" | **DO NOT CITE.** Unattributed | Excluded |
| Acely (acely.com) | **Not a competitor.** SAT/ACT/PSAT, no MCAT product | Used only as a flow pattern, and — more valuably — as a **failure catalogue** (§2.5) |
| Plausible cookieless model; Cloudflare Workers Analytics Engine limits (250 datapoints/invocation, 3-month retention) | **Usable.** Documented product behaviour | Drives the schema in §4 |

**One correction to the brief:** Acely was sourced as competitive research but sells SAT/ACT prep. Its pricing ($49–$149/mo) and its 200-point guarantee are not comparable to a $19.99/mo MCAT product. Its *published complaints* are the useful part.

---

## 1. Verdict on every existing step

Current order (`start/index.html:178`):
`name → grade → feeling → courses → confidence → when → [building] → reveal → commit → plan`

Proposed V3 order:
`name → grade → when → feeling → courses(+confidence inline) → [building] → reveal → commit → plan`

Net: **9 hash steps → 8**, and the one expensive screen moves to the last position before the payoff.

### 1.1 `name` — **KEEP, unchanged position, remove the block**
- `renderName()` (`start/index.html:282`). Cheapest possible micro-yes, and it is genuinely load-bearing: `RU.firstName()` feeds the H1 on `grade`, `feeling`, `reveal`, `commit`, and `plan`. A funnel that addresses you by name on five screens is not decoration, it is the personalization mirror.
- It never leaves the device (`funnel.js:67` `blank()`, localStorage only), and the copy already says so. Keep that sentence verbatim — it is a trust deposit made in the first four seconds.
- **Change:** `btn.disabled = !inp.value.trim()` (line 297) makes the primary button dead on arrival. A disabled primary CTA as the first thing a user sees is a bad first frame. Enable it always; pressing it with an empty field behaves exactly like the existing "Skip this". Keep the skip link too.
- **Change:** `setTimeout(focus, 90)` — on iOS Safari a programmatic focus that does not raise the keyboard leaves a blinking cursor with no keyboard, which reads as broken. Verify on device; if the keyboard does not raise, drop the autofocus rather than ship a half-state.

### 1.2 `grade` — **KEEP, unchanged**
- `renderGrade()` (`:312`). One tap, six options, and it is real input: `GRADE_BASE_GOAL` (`funnel.js:54`) → `suggestedGoal()` (`:123`) → `paceMinutes()` (`:137`) → the daily-minutes number that the reveal, the mathbox, and the commit screen all quote. Cutting it would make three downstream numbers softer.

### 1.3 `when` — **KEEP, MOVE from position 6 to position 3**
This is the highest-value single field in the funnel and it is currently asked last.
- `daysUntilTest()` (`funnel.js:115`) drives `suggestedGoal()`'s `byDate` term, the entire `mathbox` (`start/index.html:557–574`), and the top-left reveal stat.
- Asking it last means **every user who abandons on the courses wall gives us nothing we can compute with.** Asking it third means grade + date alone are enough to render a real, honest partial reveal — which also unlocks abandon-recovery (§2.7).
- It is a 1–2 tap screen. Moving it up front-loads all four cheap screens and leaves exactly one expensive screen, positioned one step from the payoff. That is the goal-gradient argument, made from our own structure rather than from an uncitable stat.
- **Migration cost, do not miss it:** `S.done = true` is set inside the `when` Continue handler (`:468`) and `route()` gates `reveal`/`commit`/`plan` on `S.done` (`:735`). When `when` moves up, `S.done = true` must move to the **courses** Continue handler. Miss this and anyone can deep-link `#reveal` with no coursework.
- `renderWhen()`'s CTA "See my levels" (`:437`) moves to the courses screen with it.

### 1.4 `feeling` — **KEEP, position 4 (after `when`, still before `courses`)**
- `funnel.js:31` is honest that this does nothing for the plan math. But it is not dead weight: it branches `affirmFor("courses")` (`:199`), the pre-scroll Preview notice on the reveal (`:541`), and `FEEL_LINE` on the paywall (`:655`). Three real copy branches for one tap.
- Order constraint: `feeling` must stay **before** `courses` because `affirmFor("courses")` reads `S.feeling`. It can sit after `when` freely.
- **Change:** rewrite `affirmFor("feeling")` to fold in the date they just gave — "You are 118 days out. That is enough runway to teach before it tests" is a better affirmation than the current grade-only version, and it is true arithmetic.

### 1.5 `courses` — **KEEP, RESTRUCTURE. This is the drop cliff.**
`renderCourses()` (`:355`) is the only heavy screen: **11 course rows × 3 buttons**, rendered as a single scrolling wall. Three fixes, in order of value:

**(a) Ask per subject, not per course — 11 decisions → 7.**
The two functions that consume `S.courses` only ever use `.some()`:
- `isPreview()` (`funnel.js:90`): `!s.courses.some(c => S.courses[c] !== "none")`
- `startingDifficulty()` (`funnel.js:96`): `s.courses.some(c => S.courses[c] === "completed")`

Neither distinguishes "General Chemistry I" from "II". So a subject-level control with a deterministic fan-out (`Completed` → set every course in that subject to `completed`; `Taking now` → `taking`; `Not yet` → `none`) produces **byte-identical** tier output while removing four decisions. Keep a small "by course" disclosure for the honest edge case (finished Gen Chem I, taking II) — it changes nothing in the current logic, but it will matter if the app's mirror ever gets finer-grained, and it costs nothing to preserve the data.

**(b) Merge `confidence` into this screen (see 1.6).**

**(c) Stop re-rendering the whole screen on every tap.**
Every course button handler calls `renderCourses()` (`:388`), which rewrites `view.innerHTML` wholesale. On a 11-row screen this rebuilds ~40 buttons per tap, flashes, and drops the user's place below the fold. Replace with a targeted `aria-pressed` toggle on the three siblings in that row. Same bug in `renderConfidence()` (`:416`).

**(d) Keep the "Not yet" default.** `load()` (`funnel.js:79–81`) pre-seeds every course to `none`, so Continue is never blocked. Do not add validation here. A user who taps Continue immediately gets an all-Preview plan, which is a legitimate and well-handled outcome — the reveal already has bespoke copy for it (`:548`).

### 1.6 `confidence` — **MERGE into `courses`. Delete the standalone step.**
Two reasons, one of them a real bug:

**The bug:** `touchedSubjects()` (`funnel.js:110`) returns every subject with any course `!== "none"` — including **"Taking now"**. But `startingDifficulty()` (`:99`) only reads `S.confidence[name]` when a course is `"completed"`. So a user who marks everything "Taking now" is asked up to **seven confidence questions whose answers are discarded**, then told "this decides whether you start at Easy, Medium or Hard" (`:399`) — which is false for them. That is an accidental dark pattern in a funnel whose entire pitch is honesty.

**The fix:** add `completedSubjects()` to `funnel.js` (do **not** modify `touchedSubjects()` — that function is a declared mirror of `RampUp-iOS/websrc/logic.js` and changing it silently forks the app). Reveal the confidence segmented control **inline**, directly under a subject, at the moment that subject is marked `Completed`. Progressive disclosure: it only ever appears where it does something.

Then delete `renderConfidence()` (`:396`), `skipConfidence()` (`:240`), and the two skip branches in `nextOf()`/`prevOf()` (`:245`, `:251`). Move the "pick one for X" validation (`:420–424`) into the courses Continue handler.

Net: **one fewer screen, up to seven fewer taps, and a promise the app actually keeps.**

### 1.7 `[building]` interstitial — **KEEP. Tighten. Never put social proof in it.**
- `renderBuilding()` (`:478`), 3 lines × 620ms ≈ 1.9s. That is the right length. The Adapty report calls this pattern table stakes but supplies no lift number, so keep it because the lines are *true* — `rows()`, `suggestedGoal()` and `paceMinutes()` really are computed from their answers — not because a blog said so.
- **Reject** the report's suggestion to put ratings/user counts here. We have neither.
- **Change:** make the lines data-bound so they report what actually happened, not a generic verb:
  - `"Read your coursework — 5 subjects, 3 starting in Preview"`
  - `"Set a starting level for all 8 subjects"`
  - `"Paced to 118 days — 30 questions a day"`
  A loading screen that tells you your own numbers is doing work; one that says "Reading…" is theatre. Same duration, more earned.
- Cap total at **2.2s**. Anything beyond that is pure cost.

### 1.8 `reveal` — **KEEP. This is the product. Expand it (§2).**
- `renderReveal()` (`:502`) is already the strongest asset: per-subject tiers with bars, a Preview explanation that reframes gaps as the reason the product exists, the deadline mathbox with a cited AAMC hours figure, and a three-block first-day plan.
- **Instrumentation bug:** `RU.track("reveal_view", …)` (`:593`) fires on every render, including back-navigation and hash re-entry. Same for `paywall_view` (`:696`). Funnel counts are inflated today. Fix in §4 (`once` semantics).

### 1.9 `commit` — **KEEP as its own step, but make the answer matter**
- `renderCommit()` (`:602`). One tap between the emotional peak and the price. It is the cheapest screen in the funnel and it sets up the paywall's opening line ("You said you can show up").
- **Problem:** both options are cosmetic. `S.commit` only selects one sentence at `:630`. A micro-yes that has no consequence is theatre, and this funnel's whole differentiation is that inputs have consequences.
- **Change:** add a third honest option — *"Honestly, less than that"* — and make all three write a `S.goalOverride` that actually steps `suggestedGoal()` down one notch in `GOAL_OPTIONS` (`funnel.js:58`). Then the paywall's daily number reflects what they said. Do not gate anything on the answer; all three proceed.

### 1.10 `plan` / paywall — **KEEP. Restructure the order of proof (§2).**
- `renderPlan()` (`:624`). Billing is **live** — `LINKS` in `billing.js:38` is populated for both plans, so `isLive()` returns true and the real Stripe path renders. The honest-unavailable branch (`:679`) is dead code today; keep it, it is the correct failure direction.
- Plan order is quarterly-first with the monthly-equivalent as the headline ($16.66/mo, `billed` underneath). That is standard and honest. Keep.
- **Verify-before-shipping:** the feature list at `:647–652` hardcodes `776 practice questions, 219 at MCAT level` and `129 narrated walkthroughs`. Measured against the shipped bundle just now: `app/index.html` contains **752** `"choices"` occurrences and `app/explain/x/` contains **132** files (`app/explain/a/` has 125 audio files). Those numbers may be right for a different content set, but they do not match what is on this server today. **On a page that carries a money-back guarantee, no count may be hand-typed.** Generate them at build time (§6, P0-6).

---

## 2. Making the reveal convincing enough to earn the trial ask

The reveal currently *describes* the product. The additions below make it *be* the product for thirty seconds. All are true-data-only.

### 2.1 Put one real question on the reveal — highest-value single addition
Right now the user is asked to believe a claim about difficulty tiers. Instead, show them one **actual question from the bank, at their computed tier, in a subject they marked Completed**, fully answerable, with the real explanation on reveal.

- Do not load `app/index.html` (7.6 MB). Extract at build time into `assets/reveal-samples.json` (~15–25 KB): one question per subject per tier, with stem, choices, correct index, explanation.
- Copy: *"You said you finished Biochem and feel Comfortable. This is a Medium Biochem question — the actual first one your plan would serve."*
- This converts the entire reveal from a promise into a demonstration, and it is the only addition here that produces a new behavioural signal worth measuring (`reveal_sample_answered`).
- Guardrail: one question, not a quiz. Getting it wrong must be framed as the plan working (*"That is exactly the kind of miss the review scheduler is built around"*), never as a scare.

### 2.2 Play a real narrated walkthrough, 20 seconds, on tap
`app/explain/a/*.m4a` are real assets already shipping. Attach one to the sample question. Tap-to-play only, never autoplay. The "129 narrated walkthroughs" bullet on the paywall is a claim; a playing walkthrough is evidence.

### 2.3 Move the guarantee **up**, from the paywall to the reveal
The guarantee card (`:665–668`) currently appears only after the price. That is backwards: risk reversal works when it is read *before* the number, not as an apology after it. Render the same `.guarantee` block at the bottom of the reveal, above the Continue button, and keep it on the paywall too. It costs nothing and it is the strongest asset we own.

### 2.4 Name the founder, once, honestly
One line under the guarantee: who built this, that it is one person, and that the refund email is a real inbox a human reads (`rampupmcat@gmail.com`). No photo-op, no "trusted by", no invented credentials. A named person standing behind a refund is the correct substitute for social proof we do not have, and it is the only version of social proof that is true.

### 2.5 Pre-empt the guarantee's credibility problem — the Acely lesson
The most useful finding in the Acely report is a published complaint: a user believed the diagnostic *deliberately understated* their baseline to make the guaranteed improvement trivial to hit. That structural incentive is **identical for RampUp** — `terms.html §5` sets the baseline as "your first full-length RampUp exam within 14 days" when no official score exists, and a low baseline means fewer refunds owed. A sharp prospective buyer will see that immediately.

Defuse it on the reveal, in one sentence, using terms that already exist:
> *"If you already have an official MCAT or AAMC full-length score from the last six months, that is your baseline — not a practice test we score. We would rather you hold us to the harder number."*

This is already the policy (`terms.html §5(a)`). Surfacing it converts our biggest guarantee liability into the most credible line on the page.

### 2.6 Sharpen the mathbox — same arithmetic, one more true row
The mathbox (`:557–574`) is the best thing on the reveal. Two additions, both computed from inputs they gave us:

- **Cost-of-delay row.** `hours_now = d × mins / 60` already exists. Add `hours_if_started_in_14_days`, and state the delta plainly: *"Starting today: ~118 hours before test day. Starting in two weeks: ~104. That is 14 hours you cannot get back."* This is real urgency — it is their own calendar doing the arithmetic, not a countdown timer we invented. **No timer, no expiring offer, no "price goes up".**
- **Gap-to-target row.** Their computed total vs. the cited 240–350h range, stated as a fact rather than a threat: *"Your pace puts the practice half at ~118h. RampUp is the practice half; Lessons and Watch carry content review."* The existing footnote already says this — promote it from footnote to row.
- **Label the assumption.** "Practice hours that builds" should read *"…if you hold that daily target"*. One clause, and it stops the number being an overclaim.

### 2.7 Partial reveal for abandoners (only possible once `when` moves to step 3)
If a user has grade + date but no coursework and returns to `/start/`, do not restart them at `name`. Show a stripped reveal — days to test, suggested pace, the mathbox — with a single CTA: *"Two minutes of coursework and these become your levels."* Uses only what they already gave.

### 2.8 Keep the 7-day trial. Do not shorten it.
RevenueCat's 2026 aggregate: ≤4-day trials convert at 25.5% median, 5–9 day at 37.4%, 17–32 day at 42.5%. RampUp's 7 days sits in the middle band. The industry drift toward 3-day trials is going the wrong way against this data. Two notes:
- Because 55% of 3-day-trial cancellations happen on Day 0 and 84% by Day 1, the decision is made almost immediately regardless of trial length — so a *longer* trial costs little and is worth testing later (14 days) once there is enough volume to read a result. That requires new Stripe prices (`billing.js:38`), so it is a deliberate later experiment, not a tweak.
- Adapty's 44.5%-of-purchases-on-Day-0 figure means **the first app session after checkout is part of this funnel.** Instrument it (§4, `checkout_returned` → `first_session_*`).

### 2.9 What we are explicitly NOT adding
User counts · star ratings · testimonials · "N students studying right now" · countdown timers · expiring discounts · fake "limited spots" · pre-checked upsells · a hidden cancel path · a diagnostic tuned to flatter or to frighten. If any of these appears in a future diff, this document is the objection.

---

## 3. Speed: target and what to cut to hit it

**The page's own `<title>` promises "see your levels in two minutes."** Current flow probably breaks that promise. Measured tap/decision count:

| Step | Interactions | Current est. | V3 target |
|---|---|---|---|
| `name` | type + tap (button disabled until typed) | ~12 s | ~8 s (never blocked) |
| `grade` | 1 tap | ~5 s | ~5 s |
| `when` | 1–2 taps (+date picker) | ~8 s | ~8 s (moved to pos. 3) |
| `feeling` | 1 tap | ~5 s | ~5 s |
| `courses` | 11 rows, scroll, up to 11 taps + Continue | **45–70 s** | **25–35 s** (7 subject rows) |
| `confidence` | up to 7 taps + Continue, separate screen | **20–30 s** | **0** (merged; +~6 s inline) |
| `[building]` | fixed | 1.9 s | 1.9 s (cap 2.2 s) |
| **→ `reveal_view`** | | **≈ 115–160 s** | **≤ 90 s (p50 target)** |
| `reveal` read + optional sample Q | scroll, 1 optional tap | 25–45 s | 30–50 s (deliberately longer) |
| `commit` | 1 tap | ~5 s | ~5 s |
| **→ `paywall_view`** | | **≈ 150–210 s** | **≤ 150 s (p50 target)** |

**Targets to commit to:**
- p50 `funnel_start` → `reveal_view` ≤ **90 s** (beats the title's own promise)
- p90 ≤ **150 s**
- p50 `funnel_start` → `paywall_view` ≤ **150 s**
- Step count 9 → **8**; worst-case taps 22 → **14**; typical taps ~15 → **~9**

**Where the time comes from, ranked:**
1. Merge `confidence` into `courses` — removes a whole screen and its scroll/settle time (**−20 to −30 s**)
2. Subject-level course rows, 11 → 7 (**−10 to −20 s**)
3. Per-category quick-set ("mark all three Completed") on the courses screen (**−5 to −10 s** for the common all-completed junior/senior)
4. Stop full re-render per tap in `renderCourses()` — removes flash and lost scroll position (**−5 to −15 s** of re-orientation)
5. Unblock the `name` primary button (**−3 s**, and a better first frame)
6. Preload `/assets/rampy/*.png` for the next step's mood so `stepArt()` (`:270`) never pops (perceptual, not clock)

**Do not trim:** the building interstitial, the reveal itself, or the guarantee. Time spent on the reveal is the product working. The only time worth cutting is time spent entering data.

---

## 4. Funnel event schema

Design rules, from the instrumentation report:
1. **Fixed vocabulary.** Naming consistency matters more than event volume. The list below is closed; adding an event means adding it here first.
2. **No PII, ever.** `S.name` must never enter a prop. It does not today (`ob_name` sends `{}`, `:303`) — keep it that way and add a guard.
3. **No durable user identity.** A weekly-rotating `sid` in localStorage, which lets *our own client* stitch a funnel across sessions but is never a person. This matches what `privacy.html` already promises.
4. **Same object, three destinations.** The exact record written to localStorage today is the exact record a future Cloudflare Worker POSTs, and the exact record Workers Analytics Engine ingests via `writeDataPoint`. No migration, no reshaping.

### 4.1 Envelope (added automatically inside `track()`)

```
{
  v:    2,          // schema version — old v1 records remain readable
  n:    "step_view" // event name, closed vocabulary
  p:    { ... },    // props, per table below
  t:    1755100000, // client epoch ms
  sid:  "k3f9x2m1", // random, localStorage, rotates every 7 days. NOT a user id
  seq:  7,          // monotonic within sid — orders events without trusting clocks
  st:   "courses",  // step the user was on when this fired
  dt:   4210        // ms since the current step was viewed
}
```

### 4.2 Event vocabulary (closed — 16 events cover the whole funnel)

| Event | Props | Fires from |
|---|---|---|
| `funnel_start` | `{resumed:bool, entry:"fresh"\|"hash"}` | IIFE bottom, `start/index.html:747` |
| `step_view` | `{step, step_index}` | `chrome()` (`:255`) — **once per step per sid**, plus `repeat:true` on re-entry |
| `step_complete` | `{step, step_index, edits}` | each Continue/option handler |
| `step_back` | `{from, to}` | `backBtn` handler (`:742`) |
| `name_skipped` | `{}` | `#skipName` (`:306`) — replaces `ob_name_skipped` |
| `grade_set` | `{grade}` | `renderGrade()` (`:326`) |
| `when_set` | `{timeframe, days_bucket}` | `renderWhen()` option handler (`:446`) |
| `feeling_set` | `{feeling}` | `renderFeeling()` (`:347`) |
| `courses_set` | `{touched, completed, taking, subjects_total:8}` | courses Continue (`:390`) |
| `confidence_set` | `{answered, of}` | courses Continue (post-merge) |
| `building_done` | `{ms}` | `renderBuilding()` tick end (`:491`) |
| `reveal_view` | `{previews, distinct_levels, goal, minutes, days_bucket, has_date}` | `renderReveal()` (`:593`) |
| `reveal_sample_answered` | `{subject, tier, correct}` | new sample-question block (§2.1) |
| `guarantee_expanded` | `{surface:"reveal"\|"paywall"}` | guarantee card / terms link |
| `commit_choice` | `{commit:"daily"\|"most"\|"less", goal_before, goal_after}` | `renderCommit()` (`:614`) |
| `paywall_view` | `{billing_live, plan_default, plans_shown}` | `renderPlan()` (`:696`) |
| `plan_selected` | `{plan, price_cents, billing_period}` | `[data-plan]` handler (`:708`) |
| `checkout_started` | `{plan, price_cents}` | `RUBilling.startCheckout()` (`billing.js:83`) |
| `checkout_returned` | `{plan, outcome:"purchased"\|"cancelled"}` | `/app/` on `?purchased=` / back-nav |
| `code_path` | `{}` | `#code` handler (`:721`) |
| `funnel_exit` | `{step, step_index, dwell_ms}` | `pagehide` + `visibilitychange:hidden` |

**Derived, never sent as its own event:** drop-off rate (consecutive `step_view` counts), time-per-step (`dt`), total time to reveal (`seq`-ordered `t` deltas within `sid`).

**Bucketing:** `days_bucket` ∈ `{"0-30","31-60","61-120","121-240","241+","none"}`. Raw `daysUntilTest()` stays local; the bucket is what transmits. Prices as integer cents (`1999`, `4999`) — never formatted strings.

### 4.3 Drop-in replacement for `funnel.js:186–199`

```js
/* ---------------------------------------------------------------- analytics v2
   Local-only until ENDPOINT is set. The record written here is byte-identical to
   the record a first-party collector will ingest — setting ENDPOINT is the only
   change required. Nothing here is ever a person: sid is random and rotates. */
  var EV_KEY   = "rampup.funnel.events.v1";   // key unchanged; records carry v:2
  var SID_KEY  = "rampup.funnel.sid.v1";
  var EV_CAP   = 300;
  var ENDPOINT = "";                 // e.g. "/e" once the Worker is deployed
  var SCHEMA_V = 2;
  var SID_TTL  = 7 * 86400000;       // weekly rotation — never a durable identity
  var _step = null, _stepAt = 0, _seen = {};

  function _sid() {
    var now = Date.now(), o = null;
    try { o = JSON.parse(localStorage.getItem(SID_KEY) || "null"); } catch (e) {}
    if (!o || !o.id || (now - o.born) > SID_TTL) {
      o = { id: Math.random().toString(36).slice(2, 10), born: now, seq: 0 };
    }
    o.seq = (o.seq || 0) + 1;
    try { localStorage.setItem(SID_KEY, JSON.stringify(o)); } catch (e) {}
    return o;
  }

  // Guard: catches a name or any free text leaking into props during dev.
  function _clean(p) {
    var out = {};
    Object.keys(p || {}).forEach(function (k) {
      var v = p[k];
      if (typeof v === "string" && v.length > 32) return;      // drop, never send
      if (typeof v === "number" || typeof v === "boolean" || typeof v === "string") out[k] = v;
    });
    return out;
  }

  function setStep(step) {                 // called from chrome()
    _step = step; _stepAt = Date.now();
  }

  function track(name, props, opts) {
    try {
      if (opts && opts.once) {
        var k = name + ":" + (props && props.step || "");
        if (_seen[k]) { props = Object.assign({}, props, { repeat: true }); }
        _seen[k] = 1;
      }
      var s = _sid();
      var rec = {
        v: SCHEMA_V, n: name, p: _clean(props), t: Date.now(),
        sid: s.id, seq: s.seq, st: _step, dt: _stepAt ? Date.now() - _stepAt : 0
      };
      var buf = JSON.parse(localStorage.getItem(EV_KEY) || "[]");
      buf.push(rec);
      if (buf.length > EV_CAP) buf.splice(0, buf.length - EV_CAP);
      localStorage.setItem(EV_KEY, JSON.stringify(buf));
      if (ENDPOINT) _send(rec);
    } catch (e) {}
  }

  function _send(rec) {
    try {
      var body = JSON.stringify(rec);
      if (navigator.sendBeacon) navigator.sendBeacon(ENDPOINT, body);
      else fetch(ENDPOINT, { method: "POST", body: body, keepalive: true });
    } catch (e) {}
  }

  function events() { try { return JSON.parse(localStorage.getItem(EV_KEY) || "[]"); } catch (e) { return []; } }

  /* Read your own funnel with zero infrastructure. RU.funnelReport() in the
     console prints step-by-step drop-off and median seconds per step from the
     local buffer. This is the whole analytics stack until a collector exists. */
  function funnelReport() {
    var ORDER = ["name","grade","when","feeling","courses","reveal","commit","plan"];
    var ev = events(), out = [];
    ORDER.forEach(function (st) {
      var views = ev.filter(function (e) { return e.n === "step_view" && e.p.step === st && !e.p.repeat; });
      var durs  = ev.filter(function (e) { return e.st === st && e.dt > 0; })
                    .map(function (e) { return e.dt; }).sort(function (a, b) { return a - b; });
      out.push({ step: st, entered: views.length,
                 medianSec: durs.length ? Math.round(durs[Math.floor(durs.length / 2)] / 100) / 10 : null });
    });
    console.table(out);
    return out;
  }
```

Export additions on `global.RU` (`funnel.js:201`): `setStep`, `funnelReport`, and keep `track` / `events` at their existing names so no call site breaks.

### 4.4 Call-site changes in `start/index.html`

| Line | Now | Change to |
|---|---|---|
| `:255` `chrome()` | — | `RU.setStep(step); RU.track("step_view", {step:step, step_index:idx+1}, {once:true});` |
| `:303` | `RU.track("ob_name", {})` | `RU.track("step_complete", {step:"name", step_index:1})` |
| `:307` | `ob_name_skipped` | `name_skipped` |
| `:327` | `ob_grade` | `grade_set` |
| `:348` | `ob_feeling` | `feeling_set` |
| `:391` | `ob_courses` | `courses_set` with `{touched, completed, taking}` |
| `:426` | `ob_confidence` | `confidence_set` (moves to courses Continue post-merge) |
| `:469` | `ob_complete` | `when_set` + `step_complete` |
| `:593` | `reveal_view` | add `{once:true}` — **fixes the inflated count** |
| `:615` | `ob_commit` | `commit_choice` with `goal_before/after` |
| `:696` | `paywall_view` | add `{once:true}`, add `plan_default`, `plans_shown` |
| `:708` | `plan_selected {plan}` | add `price_cents`, `billing_period` |
| `billing.js:83` | `checkout_started {plan}` | add `price_cents` |
| new | — | `pagehide`/`visibilitychange` → `funnel_exit` |

### 4.5 Future collector — the record ingests unchanged

Recommended path per the instrumentation report: **Cloudflare Workers Analytics Engine**, not a hand-rolled KV/D1 collector. No database to provision, SQL over HTTP to query. Limits to respect: 250 datapoints per Worker invocation, 3-month retention (so archive monthly to R2 if history matters).

```js
// Worker on rampupmcat.com/e — first-party, no cookies, IP never stored.
export default {
  async fetch(req, env) {
    if (req.method !== "POST") return new Response("", { status: 405 });
    const e = await req.json();
    env.RAMPUP_FUNNEL.writeDataPoint({
      blobs:   [e.n, e.st || "", e.p.step || "", e.p.plan || "", e.p.grade || "",
                e.p.feeling || "", e.p.timeframe || "", e.p.days_bucket || "", e.sid],
      doubles: [e.v, e.seq, e.dt || 0, e.p.step_index || 0, e.p.goal || 0,
                e.p.previews || 0, e.p.price_cents || 0],
      indexes: [e.sid]          // one index only, ≤96 bytes
    });
    return new Response("", { status: 204 });
  }
};
```

Turning it on is a **one-line change** — `ENDPOINT = "/e"` in `funnel.js`. Nothing else in the funnel changes, and `privacy.html` needs one honest sentence added before that line ships (what is sent, that it is first-party, that it carries no name and no durable id). **Do not flip `ENDPOINT` before the privacy page is updated** — the page currently states nothing is transmitted, and that must stay true.

---

## 5. Instrument past checkout

44.5% of subscription purchases land on Day 0 (Adapty). The funnel does not end at `checkout_started`; it ends at a user who did something useful in their first session. Add to `/app/`:

- `checkout_returned {plan, outcome}` on `?purchased=` / `session_id` handling
- `first_session_start {had_funnel:bool}`
- `first_question_answered {subject, tier, correct, ms_since_unlock}`
- `trial_day1_return {}` (any session 20–36 h after unlock)

Same envelope, same `track()`, same collector. These four turn a conversion number into a retention number.

---

## 6. Prioritized implementation checklist

Ordered by value ÷ effort. Every item has a file and a function anchor.

### P0 — do these first

| # | Task | Anchor |
|---|---|---|
| P0-1 | **Merge `confidence` into `courses`.** Add `completedSubjects()` (do NOT edit `touchedSubjects()`); reveal confidence inline on `Completed`; move validation into courses Continue; delete `renderConfidence()`, `skipConfidence()`, and the skip branches | `funnel.js:110` (add after), `start/index.html:396`, `:240`, `:245`, `:251`, `:420` |
| P0-2 | **Reorder `STEPS`** to `["name","grade","when","feeling","courses","reveal","commit","plan"]`; update `LABEL`, `MOOD`; fix `chrome()` total (now fixed 8, drop the `idx >= 3` fudge) | `start/index.html:178`, `:179`, `:183`, `:255` |
| P0-3 | **Move `S.done = true`** from the `when` handler to the `courses` Continue handler, or `#reveal` becomes deep-linkable with no data | `start/index.html:468` → `:390`; gate at `:735` |
| P0-4 | **Subject-level course rows (11 → 7)** with deterministic fan-out to `S.courses`, plus optional per-course disclosure and per-category quick-set | `start/index.html:355` `renderCourses()` |
| P0-5 | **Stop full re-render per tap** in `renderCourses()` (and the merged confidence controls) — toggle `aria-pressed` on siblings instead | `start/index.html:388`, `:416` |
| P0-6 | **Generate the content counts.** Replace hardcoded `776 / 219 / 129` with build-time values. Measured today: 752 `"choices"` in `app/index.html`, 132 files in `app/explain/x/`, 125 in `app/explain/a/`. Reconcile before shipping — a wrong count under a money-back guarantee is the worst possible error | `start/index.html:647–652`; add `tools/counts.js` |
| P0-7 | **Analytics v2**: drop in §4.3, rename all call sites per §4.4, add `{once:true}` to `reveal_view` and `paywall_view` (fixes inflated counts today) | `funnel.js:186–199`, `:201`; `start/index.html` call sites; `billing.js:83` |
| P0-8 | **Unblock the `name` CTA** — enabled always, empty submit behaves as skip | `start/index.html:297` |

### P1 — the conversion work

| # | Task | Anchor |
|---|---|---|
| P1-1 | **Real sample question on the reveal.** Build `assets/reveal-samples.json` from the app bank; render at their computed tier in a Completed subject; fire `reveal_sample_answered` | new `tools/extract-samples.js`; `start/index.html:502` `renderReveal()` |
| P1-2 | **Guarantee card on the reveal**, above Continue — reuse the existing `.guarantee` markup verbatim | `start/index.html:665` → also render in `renderReveal()` |
| P1-3 | **Baseline-fairness line** (§2.5) next to the guarantee, sourced from `terms.html §5(a)` | `start/index.html` `renderReveal()` + `renderPlan()`; `terms.html:86` |
| P1-4 | **Mathbox: cost-of-delay + gap-to-target rows**, and the "if you hold that daily target" clause | `start/index.html:557–574` |
| P1-5 | **Data-bound building lines** using real `rows()` / `suggestedGoal()` output; cap at 2.2 s | `start/index.html:478` `renderBuilding()` |
| P1-6 | **Make `commit` consequential** — third option, `S.goalOverride`, applied in `suggestedGoal()` | `start/index.html:602`; `funnel.js:123`, `:67` `blank()` |
| P1-7 | **Founder line** under the guarantee, one sentence, real inbox | `start/index.html` `renderReveal()` / `renderPlan()` |
| P1-8 | **Rewrite the affirmation chain** for the new order — `feeling` affirm folds in days-to-test; `courses` affirm keeps its `S.feeling` branch | `start/index.html:189` `affirmFor()` |

### P2 — after the first cohort of real data

| # | Task | Anchor |
|---|---|---|
| P2-1 | **Audio walkthrough sample** attached to the reveal question, tap-to-play only | `app/explain/a/*.m4a`; `renderReveal()` |
| P2-2 | **Partial reveal for abandoners** (grade + date, no coursework) | `start/index.html:732` `route()` |
| P2-3 | **`RU.funnelReport()`** wired to a hidden `/start/#debug` view so the funnel is readable on a phone with no backend | `funnel.js` `funnelReport()` |
| P2-4 | **Post-checkout instrumentation** (§5) in `/app/` | `app/index.html` purchase handler |
| P2-5 | **Cloudflare Worker + Analytics Engine collector**; update `privacy.html` **before** setting `ENDPOINT` | new `worker/rampup-funnel.js`; `funnel.js` `ENDPOINT`; `privacy.html` |
| P2-6 | **Week-1 plan preview** on the reveal — only after verifying against `RampUp-iOS/websrc/logic.js` that the scheduler actually produces it. `planPreview()`'s own comment warns against promising more than the app keeps | `funnel.js:160` |
| P2-7 | **14-day trial test** — needs new Stripe prices and links; a deliberate experiment, not a tweak | `billing.js:38`, `:64` |

### Regression checks before shipping any of the above
- `#reveal`, `#commit`, `#plan` all bounce to `#name` when `S.done` is false
- Back button from every step lands somewhere real (`prevOf()` after the reorder)
- All-"Not yet" path: 8 Preview tiers, plan renders, no confidence prompt, Continue never blocked
- All-"Completed" path: confidence appears for all 7, Continue blocked until answered
- A past date entered on `when` is rejected (`:459`, `:467`) and the reveal never shows a negative day count (`:504`)
- Both Stripe links resolve and land on `/app/?purchased=…&session_id=…` — the worker's `NAME_TO_PRODUCT` map must contain both product names or checkout succeeds and nothing unlocks (`billing.js:23–29`)
- `localStorage` disabled (private mode): funnel still runs in memory (`funnel.js:78`)
- No prop anywhere contains `S.name` — grep the diff for `S.name` inside any `track(` call

---

## 7. What success looks like

Not "conversion went up" — there is no clean baseline yet, and with near-zero traffic any single-week comparison is noise. The honest first milestone is **a readable funnel**:

1. `RU.funnelReport()` produces a step-by-step drop table from real sessions
2. p50 time to `reveal_view` is measured, not estimated, and is under 90 s
3. The largest single drop-off step is identified by name
4. Only then does a paywall or copy experiment mean anything

Until events are flowing, every conversion claim in this document is a hypothesis with a file path attached — which is the correct state for it to be in.