/* RampUp funnel motion (GSAP core ONLY — no ScrollTrigger/SplitText: this is
   the conversion-critical page, it stays as light as the effect allows).
   Exposes RUMotion.panelTransition(container, renderStep, direction). If GSAP
   hasn't loaded (defer order, blocked file) or reduced-motion is set, the
   transition degrades to an immediate render — identical to the old behavior. */
(function () {
  "use strict";
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var live = !!window.gsap && !reduce;

  window.RUMotion = {
    panelTransition: function (container, renderStep, direction) {
      var outgoing = container.firstElementChild;
      var mount = function () {
        renderStep();
        if (!live) return;
        var incoming = container.firstElementChild;
        if (!incoming) return;
        incoming.style.animation = "none";   // GSAP owns the entrance; kill the CSS panelIn so they never double
        gsap.fromTo(
          incoming,
          { autoAlpha: 0, x: 22 * direction },
          { autoAlpha: 1, x: 0, duration: 0.3, ease: "power3.out" }
        );
      };
      if (live && outgoing) {
        gsap.to(outgoing, {
          autoAlpha: 0, x: -22 * direction, duration: 0.16, ease: "power2.in",
          onComplete: mount
        });
      } else {
        mount();
      }
    }
  };
})();
