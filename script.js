// ============================================================
// NAVBAR scroll effect
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ============================================================
// TYPING EFFECT
// ============================================================
const phrases = [
  'Backend Developer',
  '백엔드 개발자',
  'Performance Optimizer',
  'Infra Engineer',
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const typingEl = document.querySelector('.typing-text');

function type() {
  const current = phrases[phraseIdx];
  if (deleting) {
    typingEl.textContent = current.slice(0, charIdx--);
    if (charIdx < 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 50);
  } else {
    typingEl.textContent = current.slice(0, charIdx++);
    if (charIdx > current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
    setTimeout(type, 80);
  }
}
type();

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ============================================================
// SMOOTH ACTIVE NAV LINK
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
