/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Navigation Component
 */

import { SITE_CONFIG, getWhatsAppUrl, getWhatsAppIconSvg } from '../config.js';
import { PRODUCT_HIERARCHY, PRODUCTS, getAllCategories } from '../data/products.js';
import logoUrl from '../../assets/images/T-D-Logo.png';
import { initPageLoader } from './loader.js';
import { initI18n, getStoredLanguage, getFlagSvg, t } from '../i18n/i18n.js';

export function initNav() {
  // Initialize Executive Page Loader Animation
  initPageLoader();

  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  const currentPath = window.location.pathname;
  const categories = getAllCategories();

  // Mega-menu default preview product
  const defaultProduct = PRODUCTS[0];

  const megaMenuItemsHtml = PRODUCT_HIERARCHY.map(cat => {
    const subItemsHtml = cat.subcategories.map((subcat, idx) => {
      const prod = PRODUCTS.find(p => p.category === cat.id && p.subcategory === subcat) ||
                   PRODUCTS.find(p => p.category === cat.id && p.name === subcat) ||
                   PRODUCTS.find(p => p.category === cat.id) ||
                   PRODUCTS[0];
      const specVal = (prod.specifications && prod.specifications[0]) ? prod.specifications[0].value : 'Certified Standard';
      const usesVal = prod.shortDescription || (prod.applications && prod.applications[0]) || '';
      const imgVal = prod.heroImage || '/src/assets/images/hr-steel-coils.webp';
      const isInitialActive = cat.id === 'steel-plate-sheet' && idx === 0 ? 'is-active' : '';

      return `
        <a href="/product.html?id=${prod.slug}" 
           class="mega-menu-item ${isInitialActive}" 
           data-slug="${prod.slug}"
           data-name="${subcat}"
           data-cat="${cat.name}"
           data-spec="${specVal}"
           data-uses="${usesVal}"
           data-img="${imgVal}">
          <span class="mega-menu-item__name">${subcat}</span>
          <svg class="mega-menu-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      `;
    }).join('');

    return `
      <div class="mega-menu-cat-group">
        <div class="mega-menu-cat-header">
          <a href="/products.html?category=${cat.id}" class="mega-menu-cat-title">
            ${cat.name}
          </a>
        </div>
        ${subItemsHtml}
      </div>
    `;
  }).join('');

  // Main navigation items
  const navLinksHtml = SITE_CONFIG.navLinks.map(link => {
    const isHome = link.href === '/index.html' && (currentPath === '/' || currentPath === '/index.html');
    const isActive = isHome || currentPath === link.href;
    const activeClass = isActive ? 'nav-link--active' : '';

    if (link.hasDropdown) {
      return `
        <div class="nav-dropdown-wrapper">
          <a href="${link.href}" class="nav-link ${activeClass}" aria-haspopup="true" aria-expanded="false">
            <span>${link.label}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M1 1l4 4 4-4"/>
            </svg>
          </a>
          <div class="nav-dropdown-menu mega-menu-container" role="menu">
            
            <!-- Mega Menu Top Bar -->
            <div class="mega-menu__header">
              <div class="mega-menu__header-title">
                <strong>Industrial Products Catalog</strong>
              </div>
              <a href="/products.html" class="mega-menu__view-all">
                Browse All Products →
              </a>
            </div>

            <!-- Mega Menu Main Grid -->
            <div class="mega-menu__grid">
              
              <!-- Left Column: Products List -->
              <div class="mega-menu__list-col" id="mega-menu-list">
                <div class="mega-menu__list-scroll">
                  ${megaMenuItemsHtml}
                </div>
              </div>

              <!-- Right Column: Interactive Live Preview -->
              <div class="mega-menu__preview-col">
                <div class="mega-preview-card" id="mega-preview-card">
                  <div class="mega-preview-card__img-wrap">
                    <img id="mega-preview-img" 
                         src="${defaultProduct.heroImage}" 
                         alt="${t(defaultProduct.name)}" 
                         class="mega-preview-card__img" />
                    <span class="mega-preview-card__badge" id="mega-preview-badge">${t(defaultProduct.categoryName)}</span>
                  </div>
                  <div class="mega-preview-card__content">
                    <h4 class="mega-preview-card__title" id="mega-preview-title">
                      ${t(defaultProduct.subcategory || defaultProduct.name)}
                    </h4>
                    
                    <div class="mega-preview-card__info-group">
                      <div class="mega-preview-card__row">
                        <span class="mega-preview-card__label">Specification:</span>
                        <span class="mega-preview-card__value mega-preview-card__value--mono" id="mega-preview-spec">
                          ${t(defaultProduct.specifications[0]?.value || 'Certified Standard')}
                        </span>
                      </div>
                      
                      <div class="mega-preview-card__row">
                        <span class="mega-preview-card__label">Uses & Applications:</span>
                        <p class="mega-preview-card__desc" id="mega-preview-uses">
                          ${t(defaultProduct.shortDescription)}
                        </p>
                      </div>
                    </div>

                    <div class="mega-preview-card__footer">
                      <a href="/product.html?id=${defaultProduct.slug}" class="btn btn--primary btn--sm" id="mega-preview-cta">
                        View Technical Specifications →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      `;
    }

    return `
      <a href="${link.href}" class="nav-link ${activeClass}">
        ${link.label}
      </a>
    `;
  }).join('');

  // WhatsApp click-to-chat URL
  const whatsappUrl = getWhatsAppUrl();

  // Detect if on homepage
  const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html') || currentPath.endsWith('/');
  const headerClass = isHomePage ? 'site-header site-header--home' : 'site-header';
  const activeLang = getStoredLanguage();

  navPlaceholder.innerHTML = `
    <header class="${headerClass}" id="site-header">
      <div class="container site-header__inner">
        
        <!-- Brand Identity -->
        <a href="/index.html" class="site-brand" aria-label="TIANJIN DECENT Homepage">
          <img src="${logoUrl}" alt="TIANJIN DECENT Logo" class="site-brand__logo" />
          <div class="site-brand__text">
            <span class="site-brand__name">TIANJIN DECENT</span>
            <span class="site-brand__sub">INTERNATIONAL TRADE CO., LTD.</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="site-nav" aria-label="Main Navigation">
          ${navLinksHtml}
        </nav>

        <!-- Right Action Cluster: Language Switcher + WhatsApp + Quote -->
        <div class="site-header__actions">
          
          <!-- Multilingual Language Selector -->
          <div class="lang-selector" id="lang-selector">
            <button type="button" 
                    class="lang-selector__trigger" 
                    id="lang-selector-trigger" 
                    aria-expanded="false" 
                    aria-haspopup="true" 
                    aria-label="Select Language">
              <span class="lang-selector__flag" id="lang-current-flag">${getFlagSvg(activeLang, 17, 17)}</span>
              <span class="lang-selector__current" id="lang-current-code">${activeLang.toUpperCase()}</span>
              <svg class="lang-selector__arrow" width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M1 1l4 4 4-4"/>
              </svg>
            </button>
            <div class="lang-selector__dropdown" id="lang-dropdown" role="menu">
              <button type="button" class="lang-selector__item ${activeLang === 'en' ? 'is-active' : ''}" data-lang="en" role="menuitem">
                <span class="lang-selector__flag-wrap">${getFlagSvg('en', 17, 17)}</span>
                <span class="lang-selector__name">English</span>
                <span class="lang-selector__code">EN</span>
              </button>
              <button type="button" class="lang-selector__item ${activeLang === 'fr' ? 'is-active' : ''}" data-lang="fr" role="menuitem">
                <span class="lang-selector__flag-wrap">${getFlagSvg('fr', 17, 17)}</span>
                <span class="lang-selector__name">Français</span>
                <span class="lang-selector__code">FR</span>
              </button>
              <button type="button" class="lang-selector__item ${activeLang === 'ru' ? 'is-active' : ''}" data-lang="ru" role="menuitem">
                <span class="lang-selector__flag-wrap">${getFlagSvg('ru', 17, 17)}</span>
                <span class="lang-selector__name">Русский</span>
                <span class="lang-selector__code">RU</span>
              </button>
              <button type="button" class="lang-selector__item ${activeLang === 'es' ? 'is-active' : ''}" data-lang="es" role="menuitem">
                <span class="lang-selector__flag-wrap">${getFlagSvg('es', 17, 17)}</span>
                <span class="lang-selector__name">Español</span>
                <span class="lang-selector__code">ES</span>
              </button>
            </div>
          </div>

          <a href="${whatsappUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn--whatsapp btn--whatsapp-icon" 
             aria-label="Direct WhatsApp Chat (${SITE_CONFIG.whatsappNumber})"
             title="Direct WhatsApp Chat: ${SITE_CONFIG.whatsappNumber}">
            ${getWhatsAppIconSvg(20)}
          </a>

          <a href="/contact.html" class="btn btn--primary">
            ${t('Request Quote')}
          </a>

          <!-- Mobile Toggle -->
          <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle Navigation Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

        </div>

      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" id="mobile-drawer">
        <nav class="mobile-nav-list">
          <a href="/index.html" class="mobile-nav-link">Home</a>
          <a href="/products.html" class="mobile-nav-link">All Products & Specifications</a>
          
          <!-- Mobile Products Hierarchy Groups -->
          ${PRODUCT_HIERARCHY.map(cat => `
            <div class="mobile-sub-group">
              <a href="/products.html?category=${cat.id}" class="mobile-sub-group__title-link">
                <span class="mobile-sub-group__title">${cat.name}</span>
              </a>
              <div class="mobile-sub-links">
                ${cat.subcategories.map(subcat => {
                  const prod = PRODUCTS.find(p => p.category === cat.id && p.subcategory === subcat) ||
                               PRODUCTS.find(p => p.category === cat.id && p.name === subcat) ||
                               PRODUCTS.find(p => p.category === cat.id) ||
                               PRODUCTS[0];
                  return `
                    <a href="/product.html?id=${prod.slug}" class="mobile-sub-link">
                      <span>${subcat}</span>
                    </a>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}

          <a href="/quality.html" class="mobile-nav-link">Quality & Certified Testing</a>
          <a href="/solutions.html" class="mobile-nav-link">Applications & Projects</a>
          <a href="/about.html" class="mobile-nav-link">About Tianjin Decent</a>
          <a href="/contact.html" class="mobile-nav-link">B2B Quotation Desk</a>
        </nav>

        <!-- Mobile Language Selector -->
        <div class="mobile-lang-bar">
          <div class="mobile-lang-bar__title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Language</span>
          </div>
          <div class="mobile-lang-bar__grid">
            <button type="button" class="mobile-lang-pill ${activeLang === 'en' ? 'is-active' : ''}" data-lang="en">
              ${getFlagSvg('en', 16, 16)}
              <span>English (EN)</span>
            </button>
            <button type="button" class="mobile-lang-pill ${activeLang === 'fr' ? 'is-active' : ''}" data-lang="fr">
              ${getFlagSvg('fr', 16, 16)}
              <span>Français (FR)</span>
            </button>
            <button type="button" class="mobile-lang-pill ${activeLang === 'ru' ? 'is-active' : ''}" data-lang="ru">
              ${getFlagSvg('ru', 16, 16)}
              <span>Русский (RU)</span>
            </button>
            <button type="button" class="mobile-lang-pill ${activeLang === 'es' ? 'is-active' : ''}" data-lang="es">
              ${getFlagSvg('es', 16, 16)}
              <span>Español (ES)</span>
            </button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto; padding-top: 16px;">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--lg" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;">
            ${getWhatsAppIconSvg(20)}
            <span>Direct WhatsApp Chat (${SITE_CONFIG.whatsappNumber})</span>
          </a>
          <a href="/contact.html" class="btn btn--primary btn--lg" style="width: 100%;">
            Submit B2B Inquiry
          </a>
        </div>
      </div>

    </header>
  `;

  // Sticky header & smart auto-hide on scroll down / show on scroll up
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');

  let lastScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop);
  let ticking = false;
  const SCROLL_THRESHOLD = 8; // Min delta to filter out trackpad bounce/jitter
  const HIDE_OFFSET = 100;     // Scroll distance from top before auto-hide triggers

  const handleScroll = () => {
    const rawScrollY = window.pageYOffset || document.documentElement.scrollTop;
    const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    // Clamp to avoid Mac trackpad overscroll rubber-banding
    const currentScrollY = Math.min(Math.max(0, rawScrollY), maxScrollY);
    const scrollDelta = currentScrollY - lastScrollY;

    // Background blur & shadow activation
    if (currentScrollY > 20) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }

    // Check interaction states (don't hide if mobile menu or desktop dropdown is open)
    const isDrawerOpen = drawer && drawer.classList.contains('is-open');
    const hasOpenDropdown = navPlaceholder.querySelector('.nav-dropdown-wrapper.is-open');

    if (isDrawerOpen || hasOpenDropdown) {
      header.classList.remove('site-header--hidden');
    } else if (currentScrollY <= 20) {
      // Near top of document: always visible
      header.classList.remove('site-header--hidden');
    } else if (scrollDelta > SCROLL_THRESHOLD && currentScrollY > HIDE_OFFSET) {
      // Scrolling DOWN -> Slide out smoothly
      header.classList.add('site-header--hidden');
    } else if (scrollDelta < -SCROLL_THRESHOLD) {
      // Scrolling UP -> Slide in immediately
      header.classList.remove('site-header--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('is-open');
      const isOpen = drawer.classList.contains('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        header.classList.remove('site-header--hidden');
      }
    });
  }

  // Desktop dropdown hover & click handling
  const dropdownWrappers = navPlaceholder.querySelectorAll('.nav-dropdown-wrapper');
  dropdownWrappers.forEach(wrapper => {
    const trigger = wrapper.querySelector('.nav-link');
    let hoverTimer = null;

    const showMenu = () => {
      clearTimeout(hoverTimer);
      dropdownWrappers.forEach(w => {
        if (w !== wrapper) w.classList.remove('is-open');
      });
      wrapper.classList.add('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    };

    const hideMenu = () => {
      hoverTimer = setTimeout(() => {
        wrapper.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }, 180);
    };

    wrapper.addEventListener('mouseenter', showMenu);
    wrapper.addEventListener('mouseleave', hideMenu);

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = wrapper.classList.contains('is-open');
        if (isOpen) {
          wrapper.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          showMenu();
        }
      });
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown-wrapper')) {
      dropdownWrappers.forEach(w => {
        w.classList.remove('is-open');
        const trigger = w.querySelector('.nav-link');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Mega-menu live preview interaction on hover/focus
  const megaItems = navPlaceholder.querySelectorAll('.mega-menu-item');
  const previewImg = navPlaceholder.querySelector('#mega-preview-img');
  const previewTitle = navPlaceholder.querySelector('#mega-preview-title');
  const previewBadge = navPlaceholder.querySelector('#mega-preview-badge');
  const previewSpec = navPlaceholder.querySelector('#mega-preview-spec');
  const previewUses = navPlaceholder.querySelector('#mega-preview-uses');
  const previewCta = navPlaceholder.querySelector('#mega-preview-cta');

  megaItems.forEach(item => {
    const activateItem = () => {
      megaItems.forEach(i => i.classList.remove('is-active'));
      item.classList.add('is-active');

      const name = item.dataset.name;
      const cat = item.dataset.cat;
      const spec = item.dataset.spec;
      const uses = item.dataset.uses;
      const img = item.dataset.img;
      const slug = item.dataset.slug;

      if (previewTitle) previewTitle.textContent = t(name);
      if (previewBadge && cat) previewBadge.textContent = t(cat);
      if (previewSpec) previewSpec.textContent = t(spec);
      if (previewUses) previewUses.textContent = t(uses);
      if (previewCta) previewCta.href = `/product.html?id=${slug}`;

      if (previewImg && img && previewImg.getAttribute('src') !== img) {
        previewImg.style.opacity = '0.3';
        previewImg.src = img;
        previewImg.alt = t(name);
        previewImg.onload = () => {
          previewImg.style.opacity = '1';
        };
      }
    };

    item.addEventListener('mouseenter', activateItem);
    item.addEventListener('focus', activateItem);
  });

  // Re-translate current active preview when language changes
  window.addEventListener('td:languageChanged', () => {
    const activeItem = navPlaceholder.querySelector('.mega-menu-item.is-active') || megaItems[0];
    if (activeItem) {
      if (previewTitle) previewTitle.textContent = t(activeItem.dataset.name);
      if (previewBadge && activeItem.dataset.cat) previewBadge.textContent = t(activeItem.dataset.cat);
      if (previewSpec) previewSpec.textContent = t(activeItem.dataset.spec);
      if (previewUses) previewUses.textContent = t(activeItem.dataset.uses);
    }
  });

  // Initialize Multilingual Language Switcher & Document Translation
  initI18n();
}

