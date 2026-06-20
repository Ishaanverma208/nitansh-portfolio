/* ═══════════════════════════════════════════
   Nitansh Deep — Portfolio JavaScript
═══════════════════════════════════════════ */

// ── NAVBAR SCROLL ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER ─────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── PARTICLE CANVAS ──────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x     = Math.random() * canvas.width;
    this.y     = Math.random() * canvas.height;
    this.size  = Math.random() * 1.5 + 0.3;
    this.speed = Math.random() * 0.4 + 0.1;
    this.angle = Math.random() * Math.PI * 2;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.6 ? '#c9a84c' : '#3b82f6';
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.angle += 0.005;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

for (let i = 0; i < 90; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── COUNTER ANIMATION ────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur    = 1800;
    const step   = target / (dur / 16);
    let current  = 0;
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, 16);
  });
}

// ── SCROLL REVEAL ────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.expertise-card, .project-card, .method-step, .about-grid, .contact-box'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Trigger counter when hero stats come into view
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { animateCounters(); heroObserver.unobserve(entry.target); }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.hero-stats');
if (statsEl) heroObserver.observe(statsEl);

// ── PROJECT FILTER ───────────────────────
document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    const filter = pill.dataset.filter;
    document.querySelectorAll('.project-card:not(.add-more-card)').forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hidden');
      } else {
        const tags = card.dataset.tags || '';
        card.classList.toggle('hidden', !tags.includes(filter));
      }
    });
  });
});

// ── TICKER DUPLICATE (seamless scroll) ───
const ticker = document.getElementById('ticker');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML; // duplicate for infinite scroll
}

// ── CONTACT FORM ─────────────────────────
function handleContact(e) {
  e.preventDefault();
  const note = document.getElementById('form-note');
  const btn  = document.getElementById('cf-submit');
  btn.textContent  = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    note.textContent = '✅ Message received! Nitansh will get back to you soon.';
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
}

// ── ACTIVE NAV HIGHLIGHT ─────────────────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navLinkEls.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text-primary)';
    }
  });
}, { passive: true });

// ── SMOOTH HOVER GLOW ON CARDS ───────────
document.querySelectorAll('.expertise-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(168,131,42,0.07), #ffffff 60%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.background = ''; });
});
document.querySelectorAll('.project-card:not(.add-more-card)').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,0.07), var(--bg-card) 60%)`;
  });
  card.addEventListener('mouseleave', () => { card.style.background = ''; });
});
