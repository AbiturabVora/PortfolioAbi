document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('navBackdrop');

  // Toggle the menu, hamburger animation and backdrop when the button is clicked
  hamburger.addEventListener('click', () => {
    const opening = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('open', opening);
    // accessibility
    hamburger.setAttribute('aria-expanded', opening ? 'true' : 'false');
  });

  // Close when clicking backdrop
  if (backdrop) {
    backdrop.addEventListener('click', () => closeNav());
  }
});

// This function is already called by your HTML (onclick="closeNav()")
// It closes the menu when a user clicks a link
function closeNav() {
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  const backdrop = document.getElementById('navBackdrop');
  
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}