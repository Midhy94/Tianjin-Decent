/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Main Application Script
 */

import { initNav } from './components/nav.js';
import { initFooter } from './components/footer.js';
import { initHeroSlider } from './components/hero-slider.js';
import { initScrollReveal } from './components/scroll-reveal.js';
import { initImageRevealCursor } from './components/cursor-reveal.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Navigation & Footer
  initNav();
  initFooter();
  initHeroSlider();

  // Initialize Global Subtle Scroll Reveal Animations
  initScrollReveal();

  // Initialize Image Reveal Cursor on Hover
  initImageRevealCursor();
});
