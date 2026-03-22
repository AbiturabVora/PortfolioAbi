/* ================================
   ABITURAB VORA PORTFOLIO - SCRIPTS
   ================================ */

// ── CUSTOM CURSOR ──────────────────────────────
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');

let mx = 0, my = 0; // actual mouse position
let rx = 0, ry = 0; // ring's current (lagging) position
let cursorVisible = false;

// Helper: Detect if background is dark
function isDarkBackground() {
  const el = document.elementFromPoint(mx, my);
  const bgColor = window.getComputedStyle(el).backgroundColor;
  const rgb = bgColor.match(/\d+/g);
  if (rgb && rgb.length >= 3) {
    const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
    return brightness < 128;
  }
  return false;
}

// Move dot instantly, fade in on first move
document.addEventListener('mousemove', function (e) {
  mx = e.clientX;
  my = e.clientY;

  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';

  // Show cursor the first time mouse moves
  if (!cursorVisible) {
    cursorVisible = true;
    cur.style.opacity = '1';
    ring.style.opacity = '0.6';
    rx = mx;
    ry = my;
  }

  // Invert cursor on dark backgrounds (unless hovering on links/buttons)
  const el = document.elementFromPoint(mx, my);
  const isLink = el.closest('a, button');
  if (!isLink && isDarkBackground()) {
    cur.style.background = '#f0ede4';
    ring.style.borderColor = '#f0ede4';
  } else if (!isLink) {
    cur.style.background = '#111111';
    ring.style.borderColor = '#111111';
  }
});

// Hide cursors when mouse leaves window
document.addEventListener('mouseleave', function () {
  cur.style.opacity = '0';
  ring.style.opacity = '0';
});

document.addEventListener('mouseenter', function () {
  if (cursorVisible) {
    cur.style.opacity = '1';
    ring.style.opacity = '0.6';
  }
});

// Ring trails behind dot with smooth lerp
(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

// Cursor grows + turns lime on hover over links/buttons
document.querySelectorAll('a, button').forEach(function (el) {
  el.addEventListener('mouseenter', function () {
    cur.style.width = '22px';
    cur.style.height = '22px';
    cur.style.background = '#7BF542';
    ring.style.width = '54px';
    ring.style.height = '54px';
    ring.style.borderColor = '#7BF542';
  });
  el.addEventListener('mouseleave', function () {
    cur.style.width = '14px';
    cur.style.height = '14px';
    cur.style.background = '#111111';
    ring.style.width = '38px';
    ring.style.height = '38px';
    ring.style.borderColor = '#111111';
  });
});

// ── SCROLL REVEAL + SKILL BARS ─────────────────
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.sk-bar').forEach((b) => (b.style.width = b.dataset.width + '%'));
      }
    });
  },
  { threshold: 0.05 }
);

document.querySelectorAll('.reveal').forEach((r) => {
  r.classList.add('hidden');
  obs.observe(r);
});

document.querySelectorAll('.skill-card').forEach((card) => {
  new IntersectionObserver(
    (en) => {
      en.forEach((e) => {
        if (e.isIntersecting) {
          const b = e.target.querySelector('.sk-bar');
          if (b) b.style.width = b.dataset.width + '%';
        }
      });
    },
    { threshold: 0.05 }
  ).observe(card);
});

// ── FORM HANDLING ──────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.f-submit');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#00c875';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}

// ── NAVIGATION ACTIVE STATE ────────────────────
const secs = document.querySelectorAll('section[id]');
const navA = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach((s) => {
    const box = s.getBoundingClientRect();
    if (box.top <= 200) cur = s.getAttribute('id');
  });
  navA.forEach((a) => {
    a.style.color = '#666';
    if (a.getAttribute('href') === '#' + cur) {
      a.style.color = 'var(--dark)';
    }
  });
});
