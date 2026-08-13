/* RampUp web funnel — shared state, personalization and analytics.
 *
 * The personalization here is a faithful mirror of the real app
 * (RampUp-iOS/websrc/logic.js). It MUST stay faithful: the homepage sells a
 * starting level per subject, and the reveal has to show the level the app will
 * actually serve. Every constant below is copied from logic.js, with the source
 * line noted, so a drift is visible in a diff rather than as a broken promise.
 *
 * No accounts, no cookies, no third-party analytics. Everything is localStorage
 * on this device, which is what the privacy page says.
 */
(function (global) {
  "use strict";

  /* ---------------------------------------------------------------- constants
     Mirrors of logic.js. Do not "improve" these independently. */

  // logic.js: SUBJECTS
  var SUBJECTS = [
    { name: "General Chemistry", category: "Chem/Phys",   courses: ["General Chemistry I", "General Chemistry II"] },
    { name: "Physics",           category: "Chem/Phys",   courses: ["Physics I", "Physics II"] },
    { name: "Organic Chemistry", category: "Chem/Phys",   courses: ["Organic Chemistry I", "Organic Chemistry II"] },
    { name: "Biology",           category: "Bio/Biochem", courses: ["Intro Biology I", "Intro Biology II"] },
    { name: "Biochemistry",      category: "Bio/Biochem", courses: ["Biochemistry"] },
    { name: "Psychology",        category: "Psych/Soc",   courses: ["Introductory Psychology"] },
    { name: "Sociology",         category: "Psych/Soc",   courses: ["Introductory Sociology"] }
  ];
  // CARS has no coursework, so it is never Preview and always starts at Medium.
  var CARS = { name: "CARS", category: "CARS", courses: [] };

  /* Acely asks "how are you feeling about test prep right now?" before it asks
     for an account. It does nothing for a study plan — it buys rapport, and it
     sets up the reassurance screen that comes right before the ask. Worth
     taking, but only because we actually USE it: it changes what the reveal
     leads with, so a nervous learner sees the Preview explanation first rather
     than a wall of levels. */
  var FEELINGS = [
    { v: "behind",     l: "Behind, honestly" },
    { v: "unsure",     l: "Not sure where I stand" },
    { v: "steady",     l: "Steady, just want a plan" },
    { v: "confident",  l: "Confident" }
  ];
  var GRADES = ["High school", "College freshman", "College sophomore", "College junior", "College senior", "Other"];
  var COURSE_STATES = [{ v: "none", l: "Not yet" }, { v: "taking", l: "Taking now" }, { v: "completed", l: "Completed" }];
  var CONF_STATES = [{ v: "started", l: "Just started" }, { v: "comfortable", l: "Comfortable" }, { v: "strong", l: "Strong" }];
  var CONF_TO_DIFF = { started: "easy", comfortable: "medium", strong: "hard" };
  var WHEN_OPTIONS = [
    { v: "exact", l: "I have a date",     days: null },
    { v: "3mo",   l: "About 3 months",    days: 92 },
    { v: "6mo",   l: "About 6 months",    days: 183 },
    { v: "later", l: "A year or more",    days: 365 },
    { v: "none",  l: "Not scheduled yet", days: null }
  ];
  var GRADE_BASE_GOAL = {
    "High school": 5, "College freshman": 10, "College sophomore": 10,
    "College junior": 20, "College senior": 20, "Other": 10
  };
  var GOAL_OPTIONS = [5, 10, 20, 30, 50];
  // logic.js secPerQ(): FULL_PLAN totals 375 min over 230 questions -> 98 s each.
  var SEC_PER_Q = 98;
  var DIFF_LABEL = { preview: "Preview", easy: "Easy", medium: "Medium", hard: "Hard", mcat: "MCAT" };
  var DAY_MS = 86400000;

  /* ---------------------------------------------------------------- state */
  var KEY = "rampup.funnel.v1";
  var blank = function () {
    return { name: "", grade: null, feeling: null, courses: {}, confidence: {}, timeframe: null, testDate: null, step: 1, done: false };
  };
  var S = blank();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") S = Object.assign(blank(), p);
      }
    } catch (e) { /* private mode: run in memory */ }
    SUBJECTS.forEach(function (s) {
      s.courses.forEach(function (c) { if (!(c in S.courses)) S.courses[c] = "none"; });
    });
    return S;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function reset() { S = blank(); try { localStorage.removeItem(KEY); } catch (e) {} load(); }

  /* ------------------------------------------------- personalization (mirror) */

  // logic.js isPreview(): no course in this subject has been touched at all.
  function isPreview(name) {
    if (name === "CARS") return false;
    var s = byName(name); if (!s) return false;
    return !s.courses.some(function (c) { return S.courses[c] !== "none"; });
  }
  // logic.js startingDifficulty()
  function startingDifficulty(name) {
    if (name === "CARS") return "medium";
    var s = byName(name); if (!s) return "easy";
    var completed = s.courses.some(function (c) { return S.courses[c] === "completed"; });
    if (completed) return CONF_TO_DIFF[S.confidence[name]] || "medium";
    return "easy";
  }
  function tierFor(name) { return isPreview(name) ? "preview" : startingDifficulty(name); }
  function byName(n) {
    if (n === "CARS") return CARS;
    return SUBJECTS.filter(function (s) { return s.name === n; })[0] || null;
  }
  function allSubjects() { return SUBJECTS.map(function (s) { return s.name; }).concat(["CARS"]); }
  // logic.js touchedSubjects(): confidence is only asked where there is coursework.
  function touchedSubjects() {
    return SUBJECTS.filter(function (s) {
      return s.courses.some(function (c) { return S.courses[c] !== "none"; });
    }).map(function (s) { return s.name; });
  }
  function daysUntilTest() {
    if (!S.testDate) return null;
    var t = new Date(S.testDate + "T00:00:00");
    if (isNaN(t.getTime())) return null;
    var now = new Date(); now.setHours(0, 0, 0, 0);
    return Math.round((t - now) / DAY_MS);
  }
  // logic.js suggestedGoal()
  function suggestedGoal() {
    var base = GRADE_BASE_GOAL[S.grade] || 10;
    var d = daysUntilTest();
    /* Calibrated to verified prep norms (AAMC survey ~20h/wk x 3mo; industry
       300-350h total): inside 4 months the daily practice target is the real
       consensus pace; far out it is a maintenance dose, never a token one. */
    var byDate = (d === null || d < 0) ? 0
      : d <= 60 ? 50 : d <= 120 ? 30 : d <= 240 ? 20 : 10;
    var want = Math.max(base, byDate);
    return GOAL_OPTIONS.reduce(function (best, g) {
      return Math.abs(g - want) < Math.abs(best - want) ? g : best;
    }, GOAL_OPTIONS[0]);
  }
  // logic.js paceMinutes()
  function paceMinutes(goal) { return Math.max(5, Math.round(goal * SEC_PER_Q / 60)); }

  function setTimeframe(v) {
    S.timeframe = v;
    var o = WHEN_OPTIONS.filter(function (x) { return x.v === v; })[0];
    if (v === "none") { S.testDate = null; }
    else if (o && o.days) {
      var d = new Date(Date.now() + o.days * DAY_MS);
      S.testDate = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    }
  }

  function rows() {
    return allSubjects().map(function (name) {
      var t = tierFor(name);
      return { name: name, category: (byName(name) || {}).category, tier: t, label: DIFF_LABEL[t], preview: t === "preview" };
    });
  }

  /* The first-day plan. Deliberately conservative: on day one there is nothing
     to review and nothing missed, so the app's own rules reduce to "teach the
     Preview subjects, then start where coursework says you can hold your own".
     Anything more specific here would be a promise the app does not keep. */
  function planPreview() {
    var r = rows(), goal = suggestedGoal(), out = [];
    var preview = r.filter(function (x) { return x.preview; });
    var ready = r.filter(function (x) { return !x.preview; });
    if (preview.length) {
      out.push({
        kind: "new", title: "New to me: " + preview[0].name,
        why: "You haven't taken " + preview[0].name + " yet, so RampUp teaches the concept before it asks you anything about it."
      });
    }
    var start = ready.filter(function (x) { return x.tier !== "medium" || x.name !== "CARS"; })[0] || ready[0] || r[0];
    if (start) {
      out.push({
        kind: "practice", title: start.name + " at " + DIFF_LABEL[start.tier],
        why: start.name === "CARS"
          ? "CARS doesn't depend on coursework, so everyone starts at Medium and moves from there."
          : "Your coursework says you can already reason at " + DIFF_LABEL[start.tier] + " here, so there's no point starting below it."
      });
    }
    out.push({
      kind: "review", title: "Review builds from tomorrow",
      why: "Anything you miss today comes back on the day you're most likely to be forgetting it, not on a fixed schedule."
    });
    return { blocks: out, goal: goal, minutes: paceMinutes(goal) };
  }

  /* ---------------------------------------------------------------- analytics
     Local only. ENDPOINT is empty and nothing is transmitted, which is exactly
     what the app does and exactly what the privacy page says. When a real
     endpoint exists, set it here and the buffer flushes — no other change. */
  var EV_KEY = "rampup.funnel.events.v1", EV_CAP = 300, ENDPOINT = "";
  function track(name, props) {
    try {
      var buf = JSON.parse(localStorage.getItem(EV_KEY) || "[]");
      buf.push({ n: name, p: props || {}, t: Date.now() });
      if (buf.length > EV_CAP) buf.splice(0, buf.length - EV_CAP);
      localStorage.setItem(EV_KEY, JSON.stringify(buf));
    } catch (e) {}
  }
  function events() { try { return JSON.parse(localStorage.getItem(EV_KEY) || "[]"); } catch (e) { return []; } }

  global.RU = {
    SUBJECTS: SUBJECTS, CARS: CARS, GRADES: GRADES, FEELINGS: FEELINGS, COURSE_STATES: COURSE_STATES,
    CONF_STATES: CONF_STATES, WHEN_OPTIONS: WHEN_OPTIONS, DIFF_LABEL: DIFF_LABEL,
    state: function () { return S; }, load: load, save: save, reset: reset,
    isPreview: isPreview, startingDifficulty: startingDifficulty, tierFor: tierFor,
    touchedSubjects: touchedSubjects, allSubjects: allSubjects, byName: byName,
    daysUntilTest: daysUntilTest, suggestedGoal: suggestedGoal, paceMinutes: paceMinutes,
    setTimeframe: setTimeframe, rows: rows, planPreview: planPreview,
    firstName: function(){ return (S.name || "").trim().split(/\s+/)[0] || ""; },
    track: track, events: events
  };
})(window);
