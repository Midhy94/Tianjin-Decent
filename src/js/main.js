/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Main Application Script
 */

import { initNav } from './components/nav.js';
import { initFooter } from './components/footer.js';
import { initHeroSlider } from './components/hero-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Navigation & Footer
  initNav();
  initFooter();
  initHeroSlider();

  // Scroll reveal observer (Apple-inspired quiet reveals)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});
