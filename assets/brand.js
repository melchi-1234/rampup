/* RampUp brand marks, inlined so the site has no image dependency and the mark
   is crisp at any size and themeable.
   Rampy's geometry is lifted verbatim from rampySvg() in the app's logic.js so
   the mascot on the website is the same character the product uses — the old
   site used a generic "R" square, which is nobody's brand. */
(function (global) {
  "use strict";

  function rampy(size, mood) {
    var s = size || 36, m = mood || "happy";
    var grad = "rg" + Math.abs((s + "" + m).split("").reduce(function (a, c) {
      return ((a << 5) - a + c.charCodeAt(0)) | 0;
    }, 0));
    var cap = m === "grad"
      ? '<path d="M24 24 60 8l36 16-36 16z" fill="#1b1030"/>'
      + '<path d="M42 33v10c0 5 8 8 18 8s18-3 18-8V33" fill="none" stroke="#1b1030" stroke-width="5"/>'
      + '<line x1="96" y1="24" x2="96" y2="42" stroke="#f59e0b" stroke-width="3"/>'
      + '<circle cx="96" cy="45" r="3.5" fill="#f59e0b"/>' : "";
    // Moods, matching rampySvg() in the app.
    var think = m === "think", celebrate = m === "celebrate";
    var ex = think ? 3 : 0;
    var mouth = celebrate
      ? '<path d="M46 76 Q60 96 74 76 Z" fill="#1b1030"/><path d="M53 84 Q60 90 67 84 Z" fill="#f472b6"/>'
      : (think ? '<circle cx="60" cy="82" r="3.5" fill="#1b1030"/>'
               : '<path d="M50 79 Q60 88 70 79" fill="none" stroke="#1b1030" stroke-width="5" stroke-linecap="round"/>');
    var arms = celebrate
      ? '<ellipse cx="13" cy="38" rx="7" ry="13" transform="rotate(35 13 38)" fill="#8b5cf6" stroke="#472a86" stroke-width="3" paint-order="stroke"/>'
      + '<ellipse cx="107" cy="38" rx="7" ry="13" transform="rotate(-35 107 38)" fill="#8b5cf6" stroke="#472a86" stroke-width="3" paint-order="stroke"/>'
      : '<ellipse cx="13" cy="72" rx="6" ry="10" transform="rotate(18 13 72)" fill="#8b5cf6" stroke="#472a86" stroke-width="3" paint-order="stroke"/>'
      + '<ellipse cx="107" cy="72" rx="6" ry="10" transform="rotate(-18 107 72)" fill="#8b5cf6" stroke="#472a86" stroke-width="3" paint-order="stroke"/>';
    return '<svg class="rampy-mark" width="' + s + '" height="' + s + '" viewBox="-6 0 132 122" '
      + 'xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'
      + '<defs><linearGradient id="' + grad + '" x1="0" y1="0" x2="1" y2="1">'
      + '<stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#6d28d9"/></linearGradient></defs>'
      + arms
      + '<path d="M60 12 C90 12 106 34 106 62 C106 92 86 110 60 110 C34 110 14 92 14 62 C14 34 30 12 60 12 Z" '
      + 'fill="url(#' + grad + ')" stroke="#472a86" stroke-width="3.5" paint-order="stroke"/>'
      + '<ellipse cx="44" cy="109" rx="9" ry="5" fill="#f59e0b" stroke="#472a86" stroke-width="3" paint-order="stroke"/>'
      + '<ellipse cx="76" cy="109" rx="9" ry="5" fill="#f59e0b" stroke="#472a86" stroke-width="3" paint-order="stroke"/>'
      + '<ellipse cx="42" cy="56" rx="12.5" ry="14" fill="#fff"/><ellipse cx="78" cy="56" rx="12.5" ry="14" fill="#fff"/>'
      + '<circle cx="' + (42+ex) + '" cy="56" r="6" fill="#1b1030"/><circle cx="' + (78+ex) + '" cy="56" r="6" fill="#1b1030"/>'
      + '<circle cx="' + (44+ex) + '" cy="53" r="2.2" fill="#fff"/><circle cx="' + (80+ex) + '" cy="53" r="2.2" fill="#fff"/>'
      + mouth
      + '<ellipse cx="29" cy="72" rx="6.5" ry="4.5" fill="#f472b6" opacity=".5"/>'
      + '<ellipse cx="91" cy="72" rx="6.5" ry="4.5" fill="#f472b6" opacity=".5"/>'
      + cap + '</svg>';
  }

  /* Line icons, 1.75 stroke, single family — replacing the emoji that were
     standing in for icons. Emoji render differently on every platform and
     cannot be coloured by a token. */
  var ICONS = {
    telescope: '<path d="M3 15.5 14.5 12"/><path d="m6.6 16.6 1.9 4.4"/><path d="M11 14.5 9.5 9"/><path d="m14.5 12 6-2.2a1.5 1.5 0 0 0 .9-1.9l-1-2.8a1.5 1.5 0 0 0-1.9-.9L12.6 6.3"/><path d="M4 21h4"/>',
    stairs:    '<path d="M3 20h4v-4h4v-4h4V8h4V4"/>',
    target:    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    repeat:    '<path d="M17 2.5 20.5 6 17 9.5"/><path d="M3.5 11V9a3 3 0 0 1 3-3h14"/><path d="M7 21.5 3.5 18 7 14.5"/><path d="M20.5 13v2a3 3 0 0 1-3 3h-14"/>',
    search:    '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    book:      '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v5H6.5A2.5 2.5 0 0 1 4 19.5z"/>',
    clock:     '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    spark:     '<path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.5l-1.8-5.9-5.7-1.8L10.2 9z"/>',
    check:     '<path d="m4.5 12.5 5 5 10-11"/>'
  };
  function icon(name, size) {
    var d = ICONS[name] || ICONS.spark, s = size || 24;
    return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" '
      + 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" '
      + 'aria-hidden="true" focusable="false">' + d + '</svg>';
  }

  global.RUBrand = { rampy: rampy, icon: icon, ICONS: ICONS };

  // Paint any [data-mark] / [data-icon] placeholder as soon as the DOM is ready.
  function paint() {
    document.querySelectorAll("[data-mark]").forEach(function (el) {
      el.innerHTML = rampy(Number(el.dataset.size) || 36, el.dataset.mark);
    });
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      el.innerHTML = icon(el.dataset.icon, Number(el.dataset.size) || 24);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", paint);
  else paint();
})(window);
