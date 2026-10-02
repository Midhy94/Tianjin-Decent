/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Navigation Component
 */

import { SITE_CONFIG, getWhatsAppUrl } from '../config.js';
import { getAllCategories, YFGG_PIPE_PRODUCTS } from '../data/products.js';
import logoUrl from '../../assets/images/T-D-Logo.png';

export function initNav() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (!navPlaceholder) return;

  const currentPath = window.location.pathname;
  const categories = getAllCategories();

  // Mega-menu product items (from client reference snapshot)
  const defaultProduct = YFGG_PIPE_PRODUCTS[1] || YFGG_PIPE_PRODUCTS[0]; // 'Straight seam high-frequency welded steel pipe'

  const pipeMenuItemsHtml = YFGG_PIPE_PRODUCTS.map((prod, index) => {
    const isActive = index === 1 ? 'is-active' : '';
    
    return `
      <a href="/product.html?id=${prod.slug}" 
         class="mega-menu-item ${isActive}" 
         data-slug="${prod.slug}"
         data-name="${prod.name}"
         data-spec="${prod.specification}"
         data-uses="${prod.uses}"
         data-img="${prod.image}">
        <span class="mega-menu-item__name">${prod.name}</span>
        <svg class="mega-menu-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
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
                <strong>Steel Pipes & Tubes Catalog</strong>
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
                  ${pipeMenuItemsHtml}
                </div>
              </div>

              <!-- Right Column: Interactive Live Preview -->
              <div class="mega-menu__preview-col">
                <div class="mega-preview-card" id="mega-preview-card">
                  <div class="mega-preview-card__img-wrap">
                    <img id="mega-preview-img" 
                         src="${defaultProduct.image}" 
                         alt="${defaultProduct.name}" 
                         class="mega-preview-card__img" />
                    <span class="mega-preview-card__badge" id="mega-preview-badge">Standard Specification</span>
                  </div>
                  <div class="mega-preview-card__content">
                    <h4 class="mega-preview-card__title" id="mega-preview-title">
                      ${defaultProduct.name}
                    </h4>
                    
                    <div class="mega-preview-card__info-group">
                      <div class="mega-preview-card__row">
                        <span class="mega-preview-card__label">Specification:</span>
                        <span class="mega-preview-card__value mega-preview-card__value--mono" id="mega-preview-spec">
                          ${defaultProduct.specification}
                        </span>
                      </div>
                      
                      <div class="mega-preview-card__row">
                        <span class="mega-preview-card__label">Uses & Applications:</span>
                        <p class="mega-preview-card__desc" id="mega-preview-uses">
                          ${defaultProduct.uses}
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

        <!-- Right Action Cluster: WhatsApp + Quote -->
        <div class="site-header__actions">
          
          <a href="${whatsappUrl}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn--whatsapp btn--whatsapp-icon" 
             aria-label="Direct WhatsApp Chat (${SITE_CONFIG.whatsappNumber})"
             title="Direct WhatsApp Chat: ${SITE_CONFIG.whatsappNumber}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.43C8.94 7.43 8.66 7.5 8.42 7.76C8.18 8.02 7.5 8.65 7.5 9.94C7.5 11.23 8.44 12.48 8.57 12.65C8.7 12.82 10.42 15.47 13.06 16.61C13.69 16.88 14.18 17.04 14.56 17.16C15.2 17.36 15.77 17.34 16.23 17.27C16.74 17.19 17.8 16.63 18.02 16C18.24 15.37 18.24 14.83 18.18 14.72C18.11 14.61 17.94 14.55 17.68 14.42C17.43 14.3 16.19 13.69 15.96 13.6C15.73 13.52 15.56 13.48 15.4 13.73C15.23 13.98 14.75 14.55 14.6 14.72C14.46 14.89 14.31 14.91 14.06 14.79C13.81 14.66 12.99 14.39 12.02 13.53C11.27 12.86 10.76 12.03 10.61 11.78C10.47 11.53 10.59 11.4 10.72 11.27C10.83 11.16 10.97 10.98 11.1 10.83C11.23 10.68 11.27 10.57 11.36 10.4C11.44 10.23 11.4 10.09 11.34 9.96C11.27 9.84 10.79 8.65 10.58 8.16C10.39 7.68 10.18 7.75 10.03 7.74H9.52C9.35 7.74 9.11 7.43 9.11 7.43Z"/>
            </svg>
          </a>

          <a href="/contact.html" class="btn btn--primary">
            Request Quote
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
          
          <!-- Mobile Pipe Products Accordion/Submenu -->
          <div class="mobile-sub-group">
            <span class="mobile-sub-group__title">Steel Pipes & Tubes Catalog</span>
            <div class="mobile-sub-links">
              ${YFGG_PIPE_PRODUCTS.map(p => `
                <a href="/product.html?id=${p.slug}" class="mobile-sub-link">
                  <span>${p.name}</span>
                </a>
              `).join('')}
            </div>
          </div>

          <a href="/quality.html" class="mobile-nav-link">Quality & Certified Testing</a>
          <a href="/solutions.html" class="mobile-nav-link">Applications & Projects</a>
          <a href="/about.html" class="mobile-nav-link">About Tianjin Decent</a>
          <a href="/contact.html" class="mobile-nav-link">B2B Quotation Desk</a>
        </nav>
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto; padding-top: 24px;">
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--lg" style="width: 100%;">
            Direct WhatsApp Chat (${SITE_CONFIG.whatsappNumber})
          </a>
          <a href="/contact.html" class="btn btn--primary btn--lg" style="width: 100%;">
            Submit B2B Inquiry
          </a>
        </div>
      </div>

    </header>
  `;

  // Sticky header scroll behavior
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.toggle('is-open');
      const isOpen = drawer.classList.contains('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
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
  const previewSpec = navPlaceholder.querySelector('#mega-preview-spec');
  const previewUses = navPlaceholder.querySelector('#mega-preview-uses');
  const previewCta = navPlaceholder.querySelector('#mega-preview-cta');

  megaItems.forEach(item => {
    const activateItem = () => {
      megaItems.forEach(i => i.classList.remove('is-active'));
      item.classList.add('is-active');

      const name = item.dataset.name;
      const spec = item.dataset.spec;
      const uses = item.dataset.uses;
      const img = item.dataset.img;
      const slug = item.dataset.slug;

      if (previewTitle) previewTitle.textContent = name;
      if (previewSpec) previewSpec.textContent = spec;
      if (previewUses) previewUses.textContent = uses;
      if (previewCta) previewCta.href = `/product.html?id=${slug}`;

      if (previewImg && img && previewImg.getAttribute('src') !== img) {
        previewImg.style.opacity = '0.3';
        previewImg.src = img;
        previewImg.alt = name;
        previewImg.onload = () => {
          previewImg.style.opacity = '1';
        };
      }
    };

    item.addEventListener('mouseenter', activateItem);
    item.addEventListener('focus', activateItem);
  });
}
