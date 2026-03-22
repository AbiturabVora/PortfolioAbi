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
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--dark)';
      a.style.fontWeight = '900';
    }
  });
});

// ── HAMBURGER MENU ──────────────────────────────
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

// Create backdrop element dynamically
const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
document.body.appendChild(backdrop);

function openNav() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
  if (navLinks.classList.contains('open')) {
    closeNav();
  } else {
    openNav();
  }
});

// Close when tapping the backdrop
backdrop.addEventListener('click', closeNav);

// Close on escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeNav();
});
