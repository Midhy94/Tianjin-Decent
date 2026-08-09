(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(e){if(e.ep)return;e.ep=!0;const l=a(e);fetch(e.href,l)}})();const k="/assets/T-D-Logo-CoMgngHF.png";function g(s="dark"){return`<img src="${k}" alt="TDI Logo" class="nav__logo-mark" style="height: 44px; width: auto; object-fit: contain;" />`}function L(){return`
    <nav class="nav" id="main-nav" aria-label="Main navigation">
      <div class="container">
        <div class="nav__inner">

          <!-- Logo -->
          <a href="/" class="nav__logo" aria-label="TIANJIN DECENT — Home">
            ${g("dark")}
            <div class="nav__logo-text">
              <span class="nav__logo-name">TIANJIN DECENT</span>
              <span class="nav__logo-sub">International Trading</span>
            </div>
          </a>

          <!-- Desktop Links -->
          <div class="nav__links" role="list">
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
  `}function w(){return`
    <footer class="footer" role="contentinfo">
      <div class="container">

        <!-- Main footer grid -->
        <div class="footer__grid">

          <!-- Brand column -->
          <div class="footer__brand-col">
            <div>
              <a href="/" class="nav__logo" aria-label="TIANJIN DECENT — Home" style="margin-bottom: 24px; text-decoration: none;">
                ${g("dark")}
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
  `}function E(){const s=document.querySelector(".nav"),t=document.querySelector(".nav__hamburger"),a=document.querySelector(".mobile-menu"),o=document.querySelector(".mobile-menu__close"),e=document.querySelectorAll(".mobile-menu__link");if(!s)return;const l=40;let r=!1;function f(){r||(requestAnimationFrame(()=>{const n=window.scrollY>l;s.classList.toggle("nav--scrolled",n),r=!1}),r=!0)}window.addEventListener("scroll",f,{passive:!0}),f();function v(){a==null||a.classList.add("open"),t==null||t.classList.add("open"),document.body.style.overflow="hidden",t==null||t.setAttribute("aria-expanded","true")}function d(){a==null||a.classList.remove("open"),t==null||t.classList.remove("open"),document.body.style.overflow="",t==null||t.setAttribute("aria-expanded","false")}t==null||t.addEventListener("click",()=>{(a==null?void 0:a.classList.contains("open"))?d():v()}),o==null||o.addEventListener("click",d),e.forEach(n=>{n.addEventListener("click",d)}),document.addEventListener("keydown",n=>{n.key==="Escape"&&d()});const u=window.location.pathname;document.querySelectorAll(".nav__link, .mobile-menu__link").forEach(n=>{const i=n.getAttribute("href");if(!i)return;const c=(i==="/"||i==="/index.html")&&(u==="/"||u==="/index.html"),m=!c&&u.includes(i.replace(".html",""));(c||m)&&n.classList.add("nav__link--active")});const _=document.querySelectorAll(".nav__dropdown");_.forEach(n=>{const i=n.querySelector(".nav__dropdown-trigger");i==null||i.addEventListener("click",c=>{c.stopPropagation(),_.forEach(h=>{var p;h!==n&&(h.classList.remove("open"),(p=h.querySelector(".nav__dropdown-trigger"))==null||p.setAttribute("aria-expanded","false"))}),n.classList.toggle("open");const m=n.classList.contains("open");i.setAttribute("aria-expanded",m?"true":"false")}),i==null||i.addEventListener("keydown",c=>{if(c.key==="Enter"||c.key===" "){c.preventDefault(),n.classList.toggle("open");const m=n.classList.contains("open");i.setAttribute("aria-expanded",m?"true":"false")}})}),document.addEventListener("click",()=>{_.forEach(n=>{var i;n.classList.remove("open"),(i=n.querySelector(".nav__dropdown-trigger"))==null||i.setAttribute("aria-expanded","false")})})}function S(){const s=document.querySelectorAll(".reveal");if(!s.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(o=>o.classList.add("revealed"));return}const a=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&(e.target.classList.add("revealed"),a.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});s.forEach(o=>a.observe(o))}function x(){const s=document.querySelectorAll("[data-count]");if(!s.length)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.forEach(o=>{o.textContent=o.dataset.count});return}const a=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&(b(e.target),a.unobserve(e.target))})},{threshold:.5});s.forEach(o=>a.observe(o))}function b(s){const t=parseFloat(s.dataset.count),a=s.dataset.suffix||"",o=1200,e=performance.now();function l(r){const f=r-e,v=Math.min(f/o,1),d=1-Math.pow(1-v,3),u=Math.round(t*d);s.textContent=u+a,v<1?requestAnimationFrame(l):s.textContent=t+a}requestAnimationFrame(l)}function A(){const s=document.querySelectorAll(".filter-pill"),t=document.querySelectorAll("[data-category]");s.length&&s.forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.filter;s.forEach(e=>e.classList.remove("filter-pill--active")),a.classList.add("filter-pill--active"),t.forEach(e=>{const l=e.dataset.category,r=!o||o==="all"||l===o;e.style.display=r?"":"none",r&&(e.classList.remove("revealed"),setTimeout(()=>e.classList.add("revealed"),10))})})})}function T(){document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{const a=document.querySelector(s.getAttribute("href"));a&&(t.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}))})})}export{w as a,E as b,A as c,T as d,x as e,L as g,S as i};
