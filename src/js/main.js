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

  // ── Preloader Counter Animation ──
  const preloader = document.getElementById('preloader');
  const progressBar = document.querySelector('.preloader__bar');
  const counterVal = document.querySelector('.preloader__counter');
  
  if (preloader && progressBar && counterVal) {
    let count = 0;
    const duration = 1200; // 1.2s preloader show time
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);
    
    const counterInterval = setInterval(() => {
      count += step;
      if (count >= 100) {
        count = 100;
        clearInterval(counterInterval);
        
        // Wait for page resources to load fully
        window.addEventListener('load', () => {
          hidePreloader();
        });
        
        // Fallback: load anyway after 1 second to prevent infinite lock
        setTimeout(hidePreloader, 1000);
      }
      
      const displayCount = Math.floor(count).toString().padStart(2, '0');
      counterVal.textContent = displayCount;
      progressBar.style.width = `${count}%`;
    }, intervalTime);

    function hidePreloader() {
      if (!preloader.classList.contains('loaded')) {
        preloader.classList.add('loaded');
      }
    }
  }
});
