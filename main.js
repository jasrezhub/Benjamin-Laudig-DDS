// ── Navigation scroll effect ──
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// ── Active nav link ──
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── FAQ accordion ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#22c55e';
  btn.style.color = '#fff';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.style.color = '';
    btn.disabled = false;
    contactForm.reset();
  }, 3500);
});

// ── Scroll reveal (lightweight IntersectionObserver) ──
const revealEls = document.querySelectorAll(
  '.review-card, .service-card, .service-item, .insurance-card, .photo-item'
);
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ${i * 0.07}s ease, transform 0.5s ${i * 0.07}s ease`;
    obs.observe(el);
  });
}
