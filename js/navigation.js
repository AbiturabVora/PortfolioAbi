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
<<<<<<< HEAD
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--dark)';
      a.style.fontWeight = '900';
=======
    a.style.color = '#666';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--dark)';
>>>>>>> 53991f92b6b1512d0c3d6d0ffe6b2cc07c70e21b
    }
  });
});

// ── HAMBURGER MENU ──────────────────────────────
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

<<<<<<< HEAD
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
=======
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
>>>>>>> 53991f92b6b1512d0c3d6d0ffe6b2cc07c70e21b
