const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const email = String(formData.get('email')).trim();
  const subject = String(formData.get('subject')).trim();
  const message = String(formData.get('message')).trim();
  const mailto = `mailto:jacob.wong1606@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Reply to: ${email}\n\n${message}`)}`;
  window.location.href = mailto;
  formStatus.textContent = 'Your email app should open with the message ready to send.';
});
