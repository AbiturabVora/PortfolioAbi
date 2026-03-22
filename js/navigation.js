/* ════════════════════════════════════
   NAVIGATION — ACTIVE STATE + HAMBURGER
   ════════════════════════════════════ */

const secs = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  secs.forEach((s) => {
    const box = s.getBoundingClientRect();
    if (box.top <= 200) current = s.getAttribute('id');
  });
  navA.forEach((a) => {
    a.style.color = '#666';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--dark)';
    }
  });
});

// ── HAMBURGER MENU ──────────────────────────────
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
  if (navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    closeNav();
  }
});

// Called from anchor onclick in HTML
function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  document.body.style.overflow = '';
}
