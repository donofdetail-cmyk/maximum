/* Maximum Mobile Detailing - small, dependency free. */
(function () {
  'use strict';

  /* ---- sticky call bar reveals once ----
     It would cover the hero CTAs on a short phone screen, so it waits until
     the visitor has scrolled into the services section, then stays. */
  var bar = document.querySelector('.stickybar');
  var trigger = document.getElementById('services');
  if (bar && trigger) {
    if (!('IntersectionObserver' in window)) {
      bar.classList.add('is-in');
    } else {
      var barIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          bar.classList.add('is-in');
          barIO.disconnect();
        });
      }, { rootMargin: '0px 0px -15% 0px', threshold: 0 });
      barIO.observe(trigger);
    }
  }

  /* ---- sliding gallery ----
     Native scroll-snap does the work; the buttons just nudge it,
     so touch, trackpad, and keyboard all behave the same. */
  var track = document.getElementById('gal-track');
  if (track) {
    var prev = document.querySelector('.gal-prev');
    var next = document.querySelector('.gal-next');
    var step = function () {
      var card = track.querySelector('.gal-item');
      return card ? card.getBoundingClientRect().width + 18 : 300;
    };
    var sync = function () {
      var max = track.scrollWidth - track.clientWidth;
      if (prev) prev.disabled = track.scrollLeft <= 8;
      if (next) next.disabled = track.scrollLeft >= max - 8;
    };
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  }

  /* ---- one FAQ open at a time keeps the page from turning into a wall ---- */
  var qas = document.querySelectorAll('.qa');
  Array.prototype.forEach.call(qas, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(qas, function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---- footer year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* ---- scroll reveal, one device, applied sparingly ---- */
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.svc, .rev');
    Array.prototype.forEach.call(targets, function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .55s ease ' + ((i % 3) * 70) + 'ms, transform .55s cubic-bezier(.22,.75,.3,1) ' + ((i % 3) * 70) + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.style.opacity = '1';
        en.target.style.transform = 'none';
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }
})();
