/**
 * TIANJIN DECENT — ANIMATIONS
 * Scroll reveal using IntersectionObserver
 * Subtle, purposeful micro-animations
 */

/**
 * Initialize scroll reveal animations
 * Elements with .reveal class animate in on scroll
 */
export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  // Use reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    reveals.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after reveal — no need to re-trigger
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach(el => observer.observe(el));
}

/**
 * Initialize counter animation for stat numbers
 */
export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  if (!counters.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    counters.forEach(el => {
      el.textContent = el.dataset.count;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);

    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

/**
 * Product card image zoom — handled via CSS
 * This JS only initializes any dynamic hover enhancements
 */
export function initProductCards() {
  // Cards use pure CSS for hover states
  // This function is reserved for future JS enhancements (e.g., lazy loading)
}

/**
 * Filter pills for product catalog
 */
export function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('[data-category]');

  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.dataset.filter;

      // Update pill states
      pills.forEach(p => p.classList.remove('filter-pill--active'));
      pill.classList.add('filter-pill--active');

      // Filter cards
      productCards.forEach(card => {
        const category = card.dataset.category;
        const show = !target || target === 'all' || category === target;

        card.style.display = show ? '' : 'none';

        // Re-trigger reveal animation
        if (show) {
          card.classList.remove('revealed');
          setTimeout(() => card.classList.add('revealed'), 10);
        }
      });
    });
  });
}

/**
 * Smooth scroll for in-page anchor links
 */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
