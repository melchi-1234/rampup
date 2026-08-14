/* RampUp home-page motion (GSAP 3.15.0, vendored). Five scenes, each
   self-guarded: missing vendor files or prefers-reduced-motion mean the page
   renders fully static with zero flash and zero layout shift. Nothing here
   animates layout properties — transforms, opacity, and textContent only. */

/* SCENE 1 — Hero headline SplitText entrance. Waits on document.fonts.ready so
   the split happens against the final line-wrap, not a fallback-font layout. */
(function () {
  "use strict";
  if (!window.gsap || !window.SplitText) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(SplitText, window.ScrollTrigger);

  var h1 = document.querySelector(".hero h1");
  if (!h1) return;

  document.fonts.ready.then(function () {
    SplitText.create(h1, {
      type: "lines,words",
      mask: "lines",
      autoSplit: true,
      onSplit: function (self) {
        return gsap.from(self.words, {
          yPercent: 130,
          rotate: 2.5,
          autoAlpha: 0,
          stagger: 0.032,
          duration: 0.85,
          ease: "expo.out",
          delay: 0.05
        });
      }
    });
  });
})();

/* SCENE 2 — Level-card bar choreography. Replaces the old CSS version, whose
   unconditional scaleX(0) left the bars invisible for JS-disabled visitors;
   here the "before" state is set at runtime, so no JS = correct static bars. */
(function () {
  "use strict";
  if (!window.gsap || !window.ScrollTrigger) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var card = document.querySelector(".levelcard");
  if (!card) return;

  var rows = gsap.utils.toArray(".levelcard .lvl-row", card);
  var bars = rows.map(function (r) { return r.querySelector(".lvl-bar i"); });

  gsap.set(bars, { scaleX: 0, transformOrigin: "left center" });

  ScrollTrigger.create({
    trigger: card,
    start: "top 85%",
    once: true,
    onEnter: function () {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(card.querySelectorAll("h3, .lc-sub"), { autoAlpha: 0, y: 10, duration: 0.4 })
        .from(rows, { autoAlpha: 0, x: -14, duration: 0.45, stagger: 0.08 }, 0.15)
        .to(bars, { scaleX: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" }, "-=0.35")
        .from(card.querySelector(".tiny"), { autoAlpha: 0, y: 6, duration: 0.4 }, "-=0.25");
    }
  });
})();

/* SCENE 3 — Scroll-pinned "how it works" ladder. Desktop only; scrub means the
   animation IS the scrollbar (never intercepts or slows the user's scroll).
   Mobile and reduced-motion get a plain per-rung reveal, no pin. */
(function () {
  "use strict";
  if (!window.gsap || !window.ScrollTrigger) return;

  var rungs = gsap.utils.toArray("#levels .rung");
  if (!rungs.length) return;

  var mm = gsap.matchMedia();
  mm.add(
    {
      desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      mobileOrReduced: "(max-width: 899.98px), (prefers-reduced-motion: reduce)"
    },
    function (ctx) {
      if (ctx.conditions.desktop) {
        var rungBars = rungs.map(function (r) { return r.querySelector(".rung-bar i"); });
        gsap.set(rungBars, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(rungs, { autoAlpha: 0.38 });

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#levels .ladder",
            start: "top 70%",
            end: "+=900",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            pinSpacing: true
          }
        });
        rungs.forEach(function (rung, i) {
          tl.to(rung, { autoAlpha: 1, duration: 0.4 }, i)
            .to(rung.querySelector(".rung-bar i"), { scaleX: 1, duration: 0.5, ease: "power2.out" }, i + 0.1)
            .to(rungs.filter(function (r) { return r !== rung; }), { autoAlpha: 0.38, duration: 0.3 }, i + 0.35);
        });
        tl.to(rungs[rungs.length - 1], { autoAlpha: 1, duration: 0.3 });

        return function () { tl.kill(); };
      }

      rungs.forEach(function (rung) {
        gsap.from(rung, {
          autoAlpha: 0, y: 22, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: rung, start: "top 88%", once: true }
        });
      });
    }
  );
})();

/* SCENE 4 — Stat count-ups. Duration scales with magnitude so "5" doesn't
   crawl as long as "964". Never touches non-numeric content. */
(function () {
  "use strict";
  if (!window.gsap || !window.ScrollTrigger) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var stats = gsap.utils.toArray(".stats .n");
  if (!stats.length) return;

  ScrollTrigger.batch(stats, {
    start: "top 88%",
    once: true,
    onEnter: function (els) {
      els.forEach(function (el) {
        var target = parseInt(el.textContent.replace(/\D/g, ""), 10);
        if (!isFinite(target)) return;
        var counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: Math.min(1.3, Math.max(0.5, target / 700)),
          ease: "power2.out",
          onUpdate: function () { el.textContent = Math.round(counter.val); }
        });
      });
    }
  });
})();

/* SCENE 5 — Magnetic CTA on the two compact primary buttons only.
   Fine-pointer devices; offset capped so the button never leaves its box. */
(function () {
  "use strict";
  if (!window.gsap) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
    var STRENGTH = 0.35;
    var xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
    var yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });
    btn.addEventListener("mousemove", function (e) {
      var r = btn.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * STRENGTH);
      yTo((e.clientY - (r.top + r.height / 2)) * STRENGTH);
    });
    btn.addEventListener("mouseleave", function () { xTo(0); yTo(0); });
  });
})();
