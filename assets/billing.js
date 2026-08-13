/* RampUp web billing configuration.
 *
 * ONE file decides whether web checkout is purchasable. Nothing else in the site
 * needs editing to switch it on.
 *
 * ============================ HOW TO GO LIVE ============================
 * Everything below is built and tested. The only missing pieces are two Stripe
 * products, which need Melchior's Stripe account:
 *
 *   1. In Stripe → Products, create TWO recurring products:
 *        name: "RampUp Monthly"    price $19.99  billing period: monthly
 *        name: "RampUp 3 Months"   price $49.99  billing period: every 3 months
 *      On each price, set a FREE TRIAL of 7 days.
 *
 *   2. For each, create a Payment Link, and set its success URL to:
 *        https://rampupmcat.com/app/?purchased=sub_monthly&session_id={CHECKOUT_SESSION_ID}
 *        https://rampupmcat.com/app/?purchased=sub_quarterly&session_id={CHECKOUT_SESSION_ID}
 *      (the app reads exactly these two parameters and verifies the session
 *       server-side before unlocking anything — see logic.js applyVerified())
 *
 *   3. Paste the two link URLs into LINKS below.
 *
 *   4. Add the two product NAMES to NAME_TO_PRODUCT in
 *      RampUp-iOS/worker/rampup-verify.js and redeploy that worker:
 *        "RampUp Monthly":  "sub_monthly",
 *        "RampUp 3 Months": "sub_quarterly",
 *      Without this the verifier returns product:null and NOTHING unlocks —
 *      which is the correct failure direction, but it means checkout appears to
 *      work and then does not.
 *
 * Until step 3 is done, LINKS stay empty and the site says so honestly. It never
 * shows a checkout button that cannot complete.
 * =======================================================================
 */
(function (global) {
  "use strict";

  var LINKS = {
    sub_monthly:   "",   // <- paste the Stripe Payment Link
    sub_quarterly: ""    // <- paste the Stripe Payment Link
  };

  var PLANS = [
    {
      key: "sub_quarterly", label: "3 months", price: "$49.99",
      cadence: "every 3 months", perMonth: "$16.66", best: true,
      renewLine: "7 days free, then $49.99 every 3 months (about $16.66 a month). Renews automatically until you cancel."
    },
    {
      key: "sub_monthly", label: "Monthly", price: "$19.99",
      cadence: "a month", perMonth: null, best: false,
      renewLine: "7 days free, then $19.99 a month. Renews automatically until you cancel."
    }
  ];

  var TRIAL_DAYS = 7;

  function linkFor(key) { return (LINKS[key] || "").trim(); }
  function isLive() { return PLANS.some(function (p) { return linkFor(p.key); }); }
  function planByKey(k) { return PLANS.filter(function (p) { return p.key === k; })[0] || null; }

  /* Returns false when there is nothing to send them to. The caller must render
     the honest unavailable state rather than a button that goes nowhere. */
  function startCheckout(key) {
    var url = linkFor(key);
    if (!url) return false;
    try { global.RU && global.RU.track && global.RU.track("checkout_started", { plan: key }); } catch (e) {}
    global.location.href = url;
    return true;
  }

  global.RUBilling = {
    PLANS: PLANS, TRIAL_DAYS: TRIAL_DAYS,
    isLive: isLive, linkFor: linkFor, planByKey: planByKey, startCheckout: startCheckout
  };
})(window);
