/* ════════════════════════════════════
   FORM HANDLING
   ════════════════════════════════════ */

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
