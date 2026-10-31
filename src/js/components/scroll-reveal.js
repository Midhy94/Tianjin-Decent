/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Subtle & Lively Scroll Reveal Animation Engine (Motion Design & UI-UX Pro Max)
 * 
 * Provides smooth, Apple-inspired elevation, staggered waves, and optical scales
 * for sections, editorial splits, cards, and data matrices across the entire website.
 */

let observer = null;

/**
 * Initializes the global scroll observer and attaches reveals to sections, content blocks, and cards.
 */
export function initScrollReveal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-block, .reveal-media, .reveal-card, .reveal-section').forEach(el => {
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
      threshold: 0.06,
      rootMargin: '0px 0px -48px 0px'
    });
  }

  // Initial scan
  attachRevealTargets();

  // Watch for dynamic DOM additions (e.g. catalog filter updates, dynamic tables, tab switches)
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
        }, 60);
      }
    });

    mutObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

/**
 * Discovers and binds elements to the reveal observer with coordinated motion choreography.
 * @param {HTMLElement|Document} container
 */
export function attachRevealTargets(container = document) {
  if (!observer) return;

  const vh = window.innerHeight || 800;

  // 1. Section Headers & Major Narrative Blocks
  const blockSelectors = [
    '.section-header',
    '.section-intro',
    '.about-intro',
    '.editorial-split__content',
    '.spec-table-card',
    '.inquiry-form-card',
    '.rfq-card',
    '.cta-banner',
    '.logistics-card',
    '.about-story',
    '.timeline-item',
    '.metrics-row',
    '.quality-cert-matrix',
    '#quote-cta .container'
  ].join(',');

  const blocks = container.querySelectorAll(blockSelectors);
  blocks.forEach(block => {
    if (block.classList.contains('reveal-block') || block.classList.contains('is-revealed')) return;

    const rect = block.getBoundingClientRect();
    if (rect.top < vh - 60 && rect.bottom > 0) {
      block.classList.add('reveal-block', 'is-revealed');
    } else {
      block.classList.add('reveal-block');
      observer.observe(block);
    }
  });

  // 2. Editorial Media & Mosaic Panels (Subtle Optical Scale + Elevation)
  const mediaSelectors = [
    '.editorial-split__media',
    '.structural-mosaic-panel',
    '.editorial-media-trio'
  ].join(',');

  const mediaPanels = container.querySelectorAll(mediaSelectors);
  mediaPanels.forEach(media => {
    if (media.classList.contains('reveal-media') || media.classList.contains('is-revealed')) return;

    // Slight delay so narrative text leads and media blossoms
    media.style.setProperty('--reveal-delay', '0.08s');

    const rect = media.getBoundingClientRect();
    if (rect.top < vh - 60 && rect.bottom > 0) {
      media.classList.add('reveal-media', 'is-revealed');
    } else {
      media.classList.add('reveal-media');
      observer.observe(media);
    }
  });

  // 3. Staggered Cards, Metric Badges & Catalog Items
  const cardSelectors = [
    '.family-card',
    '.product-card',
    '.pipe-product-card',
    '.solution-card',
    '.case-study-card',
    '.fitting-item-card',
    '.accessory-card',
    '.contact-point',
    '.metric-item',
    '.stat-card',
    '.feature-item',
    '.pillar-card',
    '.hero-feature-card',
    '.trust-badge',
    '.inspection-card',
    '.cert-item',
    '.value-card'
  ].join(',');

  const cards = container.querySelectorAll(cardSelectors);
  cards.forEach(card => {
    if (card.classList.contains('reveal-card') || card.classList.contains('is-revealed')) return;

    // Dynamic wave stagger based on sibling column index
    const parent = card.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(el => el.matches && el.matches(cardSelectors));
      const idx = siblings.indexOf(card);
      const stagger = Math.min((idx >= 0 ? idx % 6 : 0) * 0.07, 0.42);
      card.style.setProperty('--reveal-delay', `${stagger.toFixed(2)}s`);
    }

    const rect = card.getBoundingClientRect();
    if (rect.top < vh - 60 && rect.bottom > 0) {
      card.classList.add('reveal-card', 'is-revealed');
    } else {
      card.classList.add('reveal-card');
      observer.observe(card);
    }
  });
}
