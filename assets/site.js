// Dr. Raashi Mehta's Skin Clinic — shared behaviour
(function () {
  // footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // mobile menu toggle
  var nav = document.getElementById('nav');
  var mb = document.getElementById('menuBtn');
  if (nav && mb) {
    mb.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close menu when a real link is tapped
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // dropdown: hover on desktop (CSS), tap-to-expand on mobile
  document.querySelectorAll('.dropdown > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width:980px)').matches) {
        e.preventDefault();
        btn.parentElement.classList.toggle('open');
      }
    });
  });

  // reveal on scroll
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
