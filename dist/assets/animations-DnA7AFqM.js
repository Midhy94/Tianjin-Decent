(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const g="/assets/T-D-Logo-CoMgngHF.png";function C(s="dark"){return`<img src="${g}" alt="Tianjin Decent Logo" class="nav__logo-mark" style="height: 44px; width: auto; object-fit: contain;" />`}function b(){return`
    <!-- Preloader Overlay -->
    <div class="preloader" id="preloader" aria-hidden="true">
      <div class="preloader__inner">
        <img src="${g}" alt="Tianjin Decent Logo" class="preloader__logo" />
        <div class="preloader__progress">
          <div class="preloader__bar"></div>
        </div>
        <div class="preloader__counter">00</div>
        <div class="preloader__text">TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. // Loading</div>
      </div>
    </div>

    <nav class="nav" id="main-nav" aria-label="Main navigation">
      <div class="container">
        <div class="nav__inner">

          <!-- Logo -->
          <a href="/" class="nav__logo" aria-label="TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Home">
            ${C("dark")}
            <div class="nav__logo-text">
              <span class="nav__logo-name">TIANJIN DECENT</span>
              <span class="nav__logo-sub">International Trade Co., Ltd.</span>
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
                  <div class="nav__mega-col-title">Steel Coils</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=hr-steel-coils" class="nav__mega-link" role="menuitem">Hot Rolled Steel Coils (HR)</a>
                    <a href="/product.html?slug=pre-galvanized-steel-coils" class="nav__mega-link" role="menuitem">Pre-Galvanized Coils for Forming</a>
                    <a href="/product.html?slug=color-coated-steel-coils" class="nav__mega-link" role="menuitem">Color Coated Steel Coils</a>
                    <a href="/products.html?category=steel-coils" class="nav__mega-link" role="menuitem" style="color: var(--color-primary); font-weight: 500;">All Steel Coils →</a>
                  </div>
                </div>
                <div>
                  <div class="nav__mega-col-title">Structural Profiles & Pipes</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=structural-steel-profiles" class="nav__mega-link" role="menuitem">H-Beam & I-Beam Steel</a>
                    <a href="/product.html?slug=structural-steel-profiles" class="nav__mega-link" role="menuitem">Channel & Angle Sections</a>
                    <a href="/product.html?slug=structural-steel-profiles" class="nav__mega-link" role="menuitem">RHS, SHS & CHS Hollow</a>
                    <a href="/product.html?slug=seamless-steel-pipes" class="nav__mega-link" role="menuitem">Seamless Industrial Pipes</a>
                    <a href="/products.html?category=structural-profiles" class="nav__mega-link" role="menuitem" style="color: var(--color-primary); font-weight: 500;">All Structural Steel →</a>
                  </div>
                </div>
                <div>
                  <div class="nav__mega-col-title">Scaffolding Systems & Accessories</div>
                  <div class="nav__mega-links">
                    <a href="/product.html?slug=cuplock-scaffolding-system" class="nav__mega-link" role="menuitem">Cup Lock Scaffolding</a>
                    <a href="/product.html?slug=ringlock-system" class="nav__mega-link" role="menuitem">Ring / Pin Lock System</a>
                    <a href="/product.html?slug=tube-fittings-scaffolding" class="nav__mega-link" role="menuitem">Tube & Fitting Scaffolding</a>
                    <a href="/product.html?slug=scaffold-tube-48" class="nav__mega-link" role="menuitem">Tubes, Couplers & Planks</a>
                    <a href="/products.html?category=scaffolding-systems" class="nav__mega-link" role="menuitem" style="color: var(--color-primary); font-weight: 500;">All Scaffolding Catalog →</a>
                  </div>
                </div>
              </div>
            </div>

            <a href="/solutions.html" class="nav__link" role="listitem">Solutions</a>
            <a href="/quality.html" class="nav__link" role="listitem">Quality</a>
            <a href="/company.html" class="nav__link" role="listitem">Company</a>
            <a href="/resources.html" class="nav__link" role="listitem">Resources</a>

            <!-- WhatsApp Link per client markup -->
            <a href="https://wa.me/?text=Hello%20TIANJIN%20DECENT%20INTERNATIONAL%20TRADE%20CO.,%20LTD.,%20I%20would%20like%20to%20inquire%20about%20your%20products" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="nav__whatsapp-link" 
               role="listitem"
               title="Chat with Tianjin Decent on WhatsApp">
              <svg viewBox="0 0 24 24" class="nav__whatsapp-icon" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.43C8.94 7.43 8.66 7.5 8.42 7.76C8.18 8.02 7.5 8.65 7.5 9.94C7.5 11.23 8.44 12.48 8.57 12.65C8.7 12.82 10.42 15.47 13.06 16.61C13.69 16.88 14.18 17.04 14.56 17.16C15.2 17.36 15.77 17.34 16.23 17.27C16.74 17.19 17.8 16.63 18.02 16C18.24 15.37 18.24 14.83 18.18 14.72C18.11 14.61 17.94 14.55 17.68 14.42C17.43 14.3 16.19 13.69 15.96 13.6C15.73 13.52 15.56 13.48 15.4 13.73C15.23 13.98 14.75 14.55 14.6 14.72C14.46 14.89 14.31 14.91 14.06 14.79C13.81 14.66 12.99 14.39 12.02 13.53C11.27 12.86 10.76 12.03 10.61 11.78C10.47 11.53 10.59 11.4 10.72 11.27C10.83 11.16 10.97 10.98 11.1 10.83C11.23 10.68 11.27 10.57 11.36 10.4C11.44 10.23 11.4 10.09 11.34 9.96C11.27 9.84 10.79 8.65 10.58 8.16C10.39 7.68 10.18 7.75 10.03 7.74H9.52C9.35 7.74 9.11 7.43 9.11 7.43Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
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
        <div style="font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-on-dark-muted);">TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.</div>
      </div>

      <div class="mobile-menu__links">
        <a href="/index.html" class="mobile-menu__link">Home</a>
        <a href="/about.html" class="mobile-menu__link">About</a>
        <a href="/products.html" class="mobile-menu__link">Products</a>
        <a href="/solutions.html" class="mobile-menu__link">Solutions</a>
        <a href="/quality.html" class="mobile-menu__link">Quality</a>
        <a href="/company.html" class="mobile-menu__link">Company</a>
        <a href="/resources.html" class="mobile-menu__link">Resources</a>
        <a href="https://wa.me/?text=Hello%20Tianjin%20Decent" target="_blank" rel="noopener noreferrer" class="mobile-menu__link" style="color: var(--color-whatsapp); display: flex; align-items: center; gap: 8px;">
          <span>WhatsApp Quick Inquiry</span>
        </a>
      </div>

      <div class="mobile-menu__actions">
        <a href="/contact.html" class="btn btn--primary btn--lg" style="width: 100%; justify-content: center;">Contact Us</a>
        <a href="/products.html" class="btn btn--ghost-dark btn--lg" style="width: 100%; justify-content: center;">Explore Products</a>
      </div>
    </div>

    <!-- Floating WhatsApp Action Widget -->
    <a href="https://wa.me/?text=Hello%20TIANJIN%20DECENT%20INTERNATIONAL%20TRADE%20CO.,%20LTD.,%20I%20am%20inquiring%20about%20your%20steel%20and%20scaffolding%20products" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="whatsapp-float" 
       aria-label="Contact us on WhatsApp">
      <svg viewBox="0 0 24 24" class="whatsapp-float__icon" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.43C8.94 7.43 8.66 7.5 8.42 7.76C8.18 8.02 7.5 8.65 7.5 9.94C7.5 11.23 8.44 12.48 8.57 12.65C8.7 12.82 10.42 15.47 13.06 16.61C13.69 16.88 14.18 17.04 14.56 17.16C15.2 17.36 15.77 17.34 16.23 17.27C16.74 17.19 17.8 16.63 18.02 16C18.24 15.37 18.24 14.83 18.18 14.72C18.11 14.61 17.94 14.55 17.68 14.42C17.43 14.3 16.19 13.69 15.96 13.6C15.73 13.52 15.56 13.48 15.4 13.73C15.23 13.98 14.75 14.55 14.6 14.72C14.46 14.89 14.31 14.91 14.06 14.79C13.81 14.66 12.99 14.39 12.02 13.53C11.27 12.86 10.76 12.03 10.61 11.78C10.47 11.53 10.59 11.4 10.72 11.27C10.83 11.16 10.97 10.98 11.1 10.83C11.23 10.68 11.27 10.57 11.36 10.4C11.44 10.23 11.4 10.09 11.34 9.96C11.27 9.84 10.79 8.65 10.58 8.16C10.39 7.68 10.18 7.75 10.03 7.74H9.52C9.35 7.74 9.11 7.43 9.11 7.43Z"/>
      </svg>
      <span class="whatsapp-float__text">WhatsApp Us</span>
    </a>
  `}function L(){return`
    <footer class="footer" role="contentinfo">
      <div class="container">

        <!-- Main footer grid -->
        <div class="footer__grid">

          <!-- Brand column -->
          <div class="footer__brand-col">
            <div>
              <a href="/" class="nav__logo" aria-label="TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. — Home" style="margin-bottom: 24px; text-decoration: none;">
                ${C("dark")}
                <div class="nav__logo-text">
                  <span class="nav__logo-name" style="color: var(--color-on-dark);">TIANJIN DECENT</span>
                  <span class="nav__logo-sub" style="color: var(--color-on-dark-muted);">International Trade Co., Ltd.</span>
                </div>
              </a>
              <p class="footer__brand-desc">
                TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. is a professional industrial trading company based in Tianjin, China. Sourcing and delivering Hot Rolled Coils, Pre-Galvanized Coils, Color Coated Coils, Structural Steel Profiles, and Modular Scaffolding Systems worldwide.
              </p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div class="footer__contact-detail">
                <div class="footer__contact-label">Headquarters</div>
                <div class="footer__contact-value">Tianjin, People's Republic of China</div>
              </div>
              <div class="footer__contact-detail">
                <div class="footer__contact-label">Email</div>
                <div class="footer__contact-value">
                  <a href="mailto:info@tjdecent.com">info@tjdecent.com</a>
                </div>
              </div>
              <div class="footer__contact-detail">
                <div class="footer__contact-label">WhatsApp Quick Contact</div>
                <div class="footer__contact-value">
                  <a href="https://wa.me/?text=Hello%20Tianjin%20Decent" target="_blank" rel="noopener noreferrer" style="color: var(--color-whatsapp); font-weight: 500;">Chat on WhatsApp →</a>
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

          <!-- Products column: Steel Coils -->
          <div>
            <div class="footer__col-title">Steel Coils</div>
            <div class="footer__links">
              <a href="/product.html?slug=hr-steel-coils" class="footer__link">Hot Rolled Coils (HR)</a>
              <a href="/product.html?slug=pre-galvanized-steel-coils" class="footer__link">Pre-Galvanized Coils</a>
              <a href="/product.html?slug=color-coated-steel-coils" class="footer__link">Color Coated Coils</a>
              <a href="/products.html?category=steel-coils" class="footer__link">Coil Specifications</a>
            </div>
          </div>

          <!-- Structural Profiles -->
          <div>
            <div class="footer__col-title">Structural Profiles</div>
            <div class="footer__links">
              <a href="/product.html?slug=structural-steel-profiles" class="footer__link">H-Beam & I-Beam</a>
              <a href="/product.html?slug=structural-steel-profiles" class="footer__link">Channels & Angles</a>
              <a href="/product.html?slug=structural-steel-profiles" class="footer__link">Square & Round Bars</a>
              <a href="/product.html?slug=seamless-steel-pipes" class="footer__link">Seamless Steel Pipes</a>
            </div>
          </div>

          <!-- Scaffolding Systems -->
          <div>
            <div class="footer__col-title">Scaffolding Systems</div>
            <div class="footer__links">
              <a href="/product.html?slug=cuplock-scaffolding-system" class="footer__link">Cup Lock System</a>
              <a href="/product.html?slug=ringlock-system" class="footer__link">Ring / Pin Lock System</a>
              <a href="/product.html?slug=tube-fittings-scaffolding" class="footer__link">Tube & Fitting Scaffolding</a>
              <a href="/product.html?slug=scaffold-tube-48" class="footer__link">Components & Couplers</a>
              <a href="/products.html" class="footer__link">All Products</a>
            </div>
          </div>

          <!-- Company column -->
          <div>
            <div class="footer__col-title">Company & Quality</div>
            <div class="footer__links">
              <a href="/about.html" class="footer__link">About Us</a>
              <a href="/company.html" class="footer__link">Company Overview</a>
              <a href="/quality.html" class="footer__link">Quality & MTC</a>
              <a href="/solutions.html" class="footer__link">Solutions</a>
              <a href="/contact.html" class="footer__link">Request a Quote</a>
            </div>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer__bottom">
          <div class="footer__legal">
            © ${new Date().getFullYear()} TIANJIN DECENT INTERNATIONAL TRADE CO., LTD. All rights reserved.
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
  `}function A(){const s=document.querySelector(".nav"),t=document.querySelector(".nav__hamburger"),a=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-menu__close"),e=document.querySelectorAll(".mobile-menu__link");if(!s)return;const i=40;let r=!1;function m(){r||(requestAnimationFrame(()=>{const l=window.scrollY>i;s.classList.toggle("nav--scrolled",l),r=!1}),r=!0)}window.addEventListener("scroll",m,{passive:!0}),m();function v(){a==null||a.classList.add("open"),t==null||t.classList.add("open"),document.body.style.overflow="hidden",t==null||t.setAttribute("aria-expanded","true")}function d(){a==null||a.classList.remove("open"),t==null||t.classList.remove("open"),document.body.style.overflow="",t==null||t.setAttribute("aria-expanded","false")}t==null||t.addEventListener("click",()=>{(a==null?void 0:a.classList.contains("open"))?d():v()}),o==null||o.addEventListener("click",d),e.forEach(l=>{l.addEventListener("click",d)}),document.addEventListener("keydown",l=>{l.key==="Escape"&&d()});const u=window.location.pathname;document.querySelectorAll(".nav__link, .mobile-menu__link").forEach(l=>{const n=l.getAttribute("href");if(!n)return;const c=(n==="/"||n==="/index.html")&&(u==="/"||u==="/index.html"),f=!c&&u.includes(n.replace(".html",""));(c||f)&&l.classList.add("nav__link--active")});const _=document.querySelectorAll(".nav__dropdown");_.forEach(l=>{const n=l.querySelector(".nav__dropdown-trigger");n==null||n.addEventListener("click",c=>{c.stopPropagation(),_.forEach(p=>{var h;p!==l&&(p.classList.remove("open"),(h=p.querySelector(".nav__dropdown-trigger"))==null||h.setAttribute("aria-expanded","false"))}),l.classList.toggle("open");const f=l.classList.contains("open");n.setAttribute("aria-expanded",f?"true":"false")}),n==null||n.addEventListener("keydown",c=>{if(c.key==="Enter"||c.key===" "){c.preventDefault(),l.classList.toggle("open");const f=l.classList.contains("open");n.setAttribute("aria-expanded",f?"true":"false")}})}),document.addEventListener("click",()=>{_.forEach(l=>{var n;l.classList.remove("open"),(n=l.querySelector(".nav__dropdown-trigger"))==null||n.setAttribute("aria-expanded","false")})})}function T(){const s=document.querySelectorAll(".reveal");if(!s.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(o=>o.classList.add("revealed"));return}const a=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&(e.target.classList.add("revealed"),a.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});s.forEach(o=>a.observe(o))}function E(){const s=document.querySelectorAll("[data-count]");if(!s.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(o=>{o.textContent=o.dataset.count});return}const a=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&(k(e.target),a.unobserve(e.target))})},{threshold:.5});s.forEach(o=>a.observe(o))}function k(s){const t=parseFloat(s.dataset.count),a=s.dataset.suffix||"",o=1200,e=performance.now();function i(r){const m=r-e,v=Math.min(m/o,1),d=1-Math.pow(1-v,3),u=Math.round(t*d);s.textContent=u+a,v<1?requestAnimationFrame(i):s.textContent=t+a}requestAnimationFrame(i)}function S(){const s=document.querySelectorAll(".filter-pill"),t=document.querySelectorAll("[data-category]");s.length&&s.forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.filter;s.forEach(e=>e.classList.remove("filter-pill--active")),a.classList.add("filter-pill--active"),t.forEach(e=>{const i=e.dataset.category,r=!o||o==="all"||i===o;e.style.display=r?"":"none",r&&(e.classList.remove("revealed"),setTimeout(()=>e.classList.add("revealed"),10))})})})}function N(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{const a=document.querySelector(s.getAttribute("href"));a&&(t.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}))})})}export{L as a,A as b,S as c,N as d,E as e,b as g,T as i};
