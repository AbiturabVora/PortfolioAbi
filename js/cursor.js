/* ════════════════════════════════════
   CUSTOM CURSOR FUNCTION
   (Only active on pointer/mouse devices — disabled on Android/touch)
   ════════════════════════════════════ */

// Detect touch devices — skip custom cursor entirely on Android/iOS
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
if (isTouchDevice) {
  // Remove cursor elements from DOM so they never interfere
  const curEl = document.getElementById('cur');
  const ringEl = document.getElementById('cur-ring');
  if (curEl) curEl.remove();
  if (ringEl) ringEl.remove();
} else {
  const cur = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;
  let cursorVisible = false;

  function isDarkBackground() {
    const el = document.elementFromPoint(mx, my);
    if (!el) return false;
    const bgColor = window.getComputedStyle(el).backgroundColor;
    const rgb = bgColor.match(/\d+/g);
    if (rgb && rgb.length >= 3) {
      const brightness = (parseInt(rgb[0]) + parseInt(rgb[1]) + parseInt(rgb[2])) / 3;
      return brightness < 128;
    }
    return false;
  }

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;

    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';

    if (!cursorVisible) {
      cursorVisible = true;
      cur.style.opacity = '1';
      ring.style.opacity = '0.6';
      rx = mx;
      ry = my;
    }

    const el = document.elementFromPoint(mx, my);
    if (!el) return;
    const isLink = el.closest('a, button');
    if (!isLink && isDarkBackground()) {
      cur.style.background = '#f0ede4';
      ring.style.borderColor = '#f0ede4';
    } else if (!isLink) {
      cur.style.background = '#111111';
      ring.style.borderColor = '#111111';
    }
  });

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

  (function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

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
}
