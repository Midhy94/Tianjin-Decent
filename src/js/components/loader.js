/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Executive Page Loader Animation Component
 */

import logoUrl from '../../assets/images/T-D-Logo.png';

export function initPageLoader() {
  let loader = document.getElementById('page-loader');

  // If not statically present in HTML, inject dynamically
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.className = 'page-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = `
      <div class="page-loader__content">
        <div class="page-loader__logo-box">
          <div class="page-loader__glow"></div>
          <img src="${logoUrl}" alt="Tianjin Decent Logo" class="page-loader__logo" />
        </div>
        <div class="page-loader__text">
          <span class="page-loader__name">TIANJIN DECENT</span>
          <span class="page-loader__sub">INTERNATIONAL TRADE CO., LTD.</span>
        </div>
        <div class="page-loader__track">
          <div class="page-loader__bar"></div>
        </div>
      </div>
    `;
    document.body.prepend(loader);
  }

  const startTime = performance.now();
  const MIN_DISPLAY_TIME = 600; // ms for smooth brand perception
  const MAX_DISPLAY_TIME = 2000; // safety ceiling in case of slow resources

  let isDismissed = false;

  function dismissLoader() {
    if (isDismissed || !loader) return;
    isDismissed = true;

    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

    setTimeout(() => {
      loader.classList.add('is-finished');
      setTimeout(() => {
        if (loader && loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 550);
    }, remaining);
  }

  if (document.readyState === 'complete') {
    dismissLoader();
  } else {
    window.addEventListener('load', dismissLoader, { once: true });
    // Safety fallback
    setTimeout(dismissLoader, MAX_DISPLAY_TIME);
  }
}

