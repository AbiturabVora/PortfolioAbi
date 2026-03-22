/* ════════════════════════════════════
   ANIMATIONS & SCROLL REVEAL
   ════════════════════════════════════ */

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
