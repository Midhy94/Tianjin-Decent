/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Subtle Scroll Reveal Animation Engine
 * 
 * Provides subtle Apple-inspired elevation & fade scroll reveals
 * for all sections, content cards, and data matrices across the website.
 */

let observer = null;

/**
 * Initializes the global scroll observer and attaches reveals to sections and cards.
 */
export function initScrollReveal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-section, .reveal-card').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  // Create single shared IntersectionObserver instance
  if (!observer && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });
  }

  // Initial scan
  attachRevealTargets();

  // Watch for dynamic DOM additions (e.g. catalog filter updates, dynamic tables)
  if ('MutationObserver' in window) {
    let timeoutId = null;
    const mutObserver = new MutationObserver(mutations => {
      let shouldScan = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldScan = true;
          break;
        }
      }
      if (shouldScan) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          attachRevealTargets();
        }, 50);
      }
    });

    mutObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

/**
 * Discovers and binds sections and cards to the reveal observer.
 * @param {HTMLElement|Document} container
 */
export function attachRevealTargets(container = document) {
  if (!observer) return;

  // 1. Sections and major editorial blocks (excluding top header and hero)
  const sectionSelectors = [
    'section:not(.hero-v2):not(.site-header):not(.catalog-header)',
    '.editorial-split',
    '.spec-table-card',
    '.inquiry-form-card',
    '.rfq-card',
    '.cta-banner',
    '.logistics-card',
    '.about-story',
    '.timeline-item',
    '.inspection-card',
    '.cert-item'
  ].join(',');

  const sections = container.querySelectorAll(sectionSelectors);
  sections.forEach(sec => {
    // Skip if already tagged
    if (sec.classList.contains('reveal-section') || sec.classList.contains('is-revealed')) return;
    
    // Check if element is already visible in viewport on initial load
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      sec.classList.add('reveal-section', 'is-revealed');
    } else {
      sec.classList.add('reveal-section');
      observer.observe(sec);
    }
  });

  // 2. Individual cards & list items across all grids
  const cardSelectors = [
    '.family-card',
    '.product-card',
    '.solution-card',
    '.case-study-card',
    '.fitting-item-card',
    '.accessory-card',
    '.contact-point',
    '.metric-card',
    '.stat-card',
    '.feature-item',
    '.pillar-card',
    '.hero-feature-card',
    '.trust-badge'
  ].join(',');

  const cards = container.querySelectorAll(cardSelectors);
  cards.forEach(card => {
    if (card.classList.contains('reveal-card') || card.classList.contains('is-revealed')) return;

    // Check sibling index for delicate stagger delay
    const parent = card.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(el => el.matches && el.matches(cardSelectors));
      const idx = siblings.indexOf(card);
      const stagger = (idx >= 0 ? idx % 6 : 0) * 0.07;
      card.style.setProperty('--reveal-delay', `${stagger.toFixed(2)}s`);
    }

    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      card.classList.add('reveal-card', 'is-revealed');
    } else {
      card.classList.add('reveal-card');
      observer.observe(card);
    }
  });
}
