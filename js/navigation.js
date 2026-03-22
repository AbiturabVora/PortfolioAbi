<<<<<<< HEAD
/* ════════════════════════════════════
   NAVIGATION ACTIVE STATE
   ════════════════════════════════════ */

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
=======
/* ════════════════════════════════════
   NAVIGATION ACTIVE STATE
   ════════════════════════════════════ */

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
>>>>>>> 1432797 (Initial commit)
