(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const glow = document.querySelector('.cursor-glow');
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  // Gentle pointer glow and card parallax; disabled for touch and reduced-motion users.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const visual = document.querySelector('.hero-visual');
  if (!reduceMotion && finePointer && visual) {
    if (glow) {
      document.addEventListener('pointermove', event => {
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
        glow.style.opacity = '.9';
      });
      document.addEventListener('pointerleave', () => { glow.style.opacity = '0'; });
    }
    const cards = visual.querySelectorAll('[data-float]');
    visual.addEventListener('pointermove', event => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      cards.forEach((card, index) => {
        const factor = (index + 1) * 5;
        card.style.translate = `${x * factor}px ${y * factor}px`;
      });
    });
    visual.addEventListener('pointerleave', () => {
      cards.forEach(card => { card.style.translate = ''; });
    });
  }

  // Reveal the supporting sections as they enter view.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.proof-row, .below-fold, .contact-anchor');
    targets.forEach(el => el.classList.add('scroll-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .14 });
    targets.forEach(el => observer.observe(el));
  }
})();
