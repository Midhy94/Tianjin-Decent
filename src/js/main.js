/**
 * TIANJIN DECENT — MAIN ENTRY POINT
 * Bootstraps global components and animations
 */

import { getNavHTML, getFooterHTML } from './components/layout.js';
import { initNav } from './components/nav.js';
import { initScrollReveal, initCounters, initSmoothScroll } from './components/animations.js';

// ── Inject shared components ──
function injectLayout() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) {
    navPlaceholder.outerHTML = getNavHTML();
  }

  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }
}

// ── Bootstrap ──
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initNav();
  initScrollReveal();
  initCounters();
  initSmoothScroll();

  // Client approval mode: block all links pointing to subpages (e.g. products, solutions, about)
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && (href.endsWith('.html') || href.includes('?')) && !href.includes('index.html')) {
        e.preventDefault();
      }
    }
  });
});
