/* RampUp brand marks. Rampy is the canonical App-Store art (glossy purple
   blob, big white eyes, pink cheeks, purple stub arms) — a single raster
   asset at /assets/rampy/og.png, not a drawn SVG. All moods render the same
   OG art for now; the function signature is unchanged so callers don't care. */
(function (global) {
  "use strict";

  function rampy(size, mood) {
    var s = size || 36;
    return '<img class="rampy-mark" src="/assets/rampy/og.png" alt="" width="' + s + '" height="' + s
      + '" style="display:block; width:' + s + 'px; height:' + s + 'px; object-fit:contain;" />';
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
