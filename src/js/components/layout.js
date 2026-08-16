import logoUrl from '../../assets/T-D-Logo.png';

export function getLogoSVG(variant = 'dark') {
  return `<img src="${logoUrl}" alt="TDI Logo" class="nav__logo-mark" style="height: 44px; width: auto; object-fit: contain;" />`;
}

export function getNavHTML() {
  return `
    <!-- Preloader Overlay -->
    <div class="preloader" id="preloader" aria-hidden="true">
      <div class="preloader__inner">
        <img src="${logoUrl}" alt="Tianjin Decent Logo" class="preloader__logo" />
        <div class="preloader__progress">
          <div class="preloader__bar"></div>
        </div>
        <div class="preloader__counter">00</div>
        <div class="preloader__text">Tianjin Decent // Loading</div>
      </div>
    </div>

    <nav class="nav" id="main-nav" aria-label="Main navigation">
      <div class="container">
        <div class="nav__inner">

          <!-- Logo -->
          <a href="/" class="nav__logo" aria-label="TIANJIN DECENT — Home">
            ${getLogoSVG('dark')}
            <div class="nav__logo-text">
              <span class="nav__logo-name">TIANJIN DECENT</span>
              <span class="nav__logo-sub">International Trading</span>
            </div>
          </a>

          <!-- Desktop Links -->
          <div class="nav__links" role="list">
            <a href="/index.html" class="nav__link" role="listitem">Home</a>
            <a href="/about.html" class="nav__link" role="listitem">About</a>

            <div class="nav__dropdown" role="listitem">
              <button class="nav__link nav__dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                Products
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
                  <path d="M2 4l4 4 4-4"/>
                </svg>
              </button>
              <div class="nav__mega" role="menu">
                <div>
                  <div class="nav__mega-col-title">Scaffolding Systems</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=cuplock-scaffolding-system" class="nav__mega-link" role="menuitem">Cuplock System</a>
                    <a href="/product.html?slug=ringlock-system" class="nav__mega-link" role="menuitem">Ring-Lock System</a>
                    <a href="/product.html?slug=tube-fittings-scaffolding" class="nav__mega-link" role="menuitem">Tube & Fitting</a>
                    <a href="/product.html?slug=fiberglass-scaffolding" class="nav__mega-link" role="menuitem">Fiberglass System</a>
                  </div>
                </div>
                <div>
                  <div class="nav__mega-col-title">Components</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=scaffold-tube-48" class="nav__mega-link" role="menuitem">Scaffold Tubes</a>
                    <a href="/product.html?slug=right-angle-coupler" class="nav__mega-link" role="menuitem">Right-Angle Coupler</a>
                    <a href="/product.html?slug=swivel-coupler" class="nav__mega-link" role="menuitem">Swivel Coupler</a>
                    <a href="/product.html?slug=base-jack" class="nav__mega-link" role="menuitem">Base Jacks</a>
                    <a href="/products.html" class="nav__mega-link" role="menuitem">All Components →</a>
                  </div>
                </div>
                <div>
                  <div class="nav__mega-col-title">Access & Safety</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=aluminum-tower" class="nav__mega-link" role="menuitem">Mobile Towers</a>
                    <a href="/product.html?slug=aluminum-platform" class="nav__mega-link" role="menuitem">Platforms & Boards</a>
                    <a href="/product.html?slug=aluminum-extension-ladder" class="nav__mega-link" role="menuitem">Ladders</a>
                    <a href="/product.html?slug=toe-board" class="nav__mega-link" role="menuitem">Safety Accessories</a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/solutions.html" class="nav__link" role="listitem">Solutions</a>
            <a href="/quality.html" class="nav__link" role="listitem">Quality</a>
            <a href="/company.html" class="nav__link" role="listitem">Company</a>
            <a href="/resources.html" class="nav__link" role="listitem">Resources</a>
          </div>

          <!-- Actions -->
          <div class="nav__actions">
            <a href="/contact.html" class="btn btn--primary">Contact Us</a>
          </div>

          <!-- Hamburger -->
          <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button class="mobile-menu__close" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      <div style="margin-top: 80px; margin-bottom: 24px;">
        <div style="font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-on-dark-muted);">Tianjin Decent International Trading</div>
      </div>

      <div class="mobile-menu__links">
        <a href="/index.html" class="mobile-menu__link">Home</a>
        <a href="/about.html" class="mobile-menu__link">About</a>
        <a href="/products.html" class="mobile-menu__link">Products</a>
        <a href="/solutions.html" class="mobile-menu__link">Solutions</a>
        <a href="/quality.html" class="mobile-menu__link">Quality</a>
        <a href="/company.html" class="mobile-menu__link">Company</a>
        <a href="/resources.html" class="mobile-menu__link">Resources</a>
      </div>

      <div class="mobile-menu__actions">
        <a href="/contact.html" class="btn btn--primary btn--lg" style="width: 100%; justify-content: center;">Contact Us</a>
        <a href="/products.html" class="btn btn--ghost-dark btn--lg" style="width: 100%; justify-content: center;">Explore Products</a>
      </div>
    </div>
  `;
}

export function getFooterHTML() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">

        <!-- Main footer grid -->
        <div class="footer__grid">

          <!-- Brand column -->
          <div class="footer__brand-col">
            <div>
              <a href="/" class="nav__logo" aria-label="TIANJIN DECENT — Home" style="margin-bottom: 24px; text-decoration: none;">
                ${getLogoSVG('dark')}
                <div class="nav__logo-text">
                  <span class="nav__logo-name" style="color: var(--color-on-dark);">TIANJIN DECENT</span>
                  <span class="nav__logo-sub" style="color: var(--color-on-dark-muted);">International Trading</span>
                </div>
              </a>
              <p class="footer__brand-desc">
                Industrial scaffolding systems, components, and access equipment — supplied to international markets with precision and reliability.
              </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div class="footer__contact-detail">
                <div class="footer__contact-label">Location</div>
                <div class="footer__contact-value">Tianjin, People's Republic of China</div>
              </div>
              <div class="footer__contact-detail">
                <div class="footer__contact-label">Email</div>
                <div class="footer__contact-value">
                  <a href="mailto:info@tjdecent.com">[EDITABLE — info@tjdecent.com]</a>
                </div>
              </div>
              <div class="footer__contact-detail">
                <div class="footer__contact-label">Inquiry</div>
                <div class="footer__contact-value">
                  <a href="/contact.html">Submit an Inquiry →</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Products column -->
          <div>
            <div class="footer__col-title">Products</div>
            <div class="footer__links">
              <a href="/product.html?slug=cuplock-scaffolding-system" class="footer__link">Cuplock System</a>
              <a href="/product.html?slug=ringlock-system" class="footer__link">Ring-Lock System</a>
              <a href="/product.html?slug=tube-fittings-scaffolding" class="footer__link">Tube & Fitting</a>
              <a href="/product.html?slug=scaffold-tube-48" class="footer__link">Scaffold Tubes</a>
              <a href="/product.html?slug=aluminum-tower" class="footer__link">Mobile Towers</a>
              <a href="/products.html" class="footer__link">All Products</a>
            </div>
          </div>

          <!-- Company column -->
          <div>
            <div class="footer__col-title">Company</div>
            <div class="footer__links">
              <a href="/about.html" class="footer__link">About Us</a>
              <a href="/company.html" class="footer__link">Company Overview</a>
              <a href="/quality.html" class="footer__link">Quality</a>
              <a href="/solutions.html" class="footer__link">Solutions</a>
            </div>
          </div>

          <!-- Resources column -->
          <div>
            <div class="footer__col-title">Resources</div>
            <div class="footer__links">
              <a href="/resources.html" class="footer__link">Technical Documentation</a>
              <a href="/resources.html" class="footer__link">Product Information</a>
              <a href="/resources.html" class="footer__link">Downloads</a>
            </div>
          </div>

          <!-- Contact column -->
          <div>
            <div class="footer__col-title">Contact</div>
            <div class="footer__links">
              <a href="/contact.html" class="footer__link">Request a Quote</a>
              <a href="/contact.html" class="footer__link">Product Inquiry</a>
              <a href="/contact.html" class="footer__link">Get in Touch</a>
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer__bottom">
          <div class="footer__legal">
            © ${new Date().getFullYear()} Tianjin Decent International Trading Co., Ltd. All rights reserved.
          </div>
          <div class="footer__legal-links">
            <a href="#" class="footer__legal-link">Privacy Policy</a>
            <a href="#" class="footer__legal-link">Terms of Use</a>
          </div>
        </div>

      </div>

      <!-- Giant wordmark banner -->
      <div class="footer__wordmark" aria-hidden="true">
        <div class="container">
          <div class="footer__wordmark-text">TIANJIN DECENT</div>
        </div>
      </div>
    </footer>
  `;
}
