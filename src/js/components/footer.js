/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Footer Component (Minimal, Refined European Industrial)
 */

import { SITE_CONFIG, getWhatsAppUrl, getWhatsAppIconSvg } from '../config.js';
import logoUrl from '../../assets/images/T-D-Logo.png';

export function initFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  footerPlaceholder.innerHTML = `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        
        <div class="footer-top">
          
          <!-- Col 1: Brand & Logistics Lockup -->
          <div class="footer-brand">
            <a href="/index.html" class="footer-brand__lockup" aria-label="TIANJIN DECENT Homepage">
              <img src="${logoUrl}" alt="TIANJIN DECENT Logo" class="footer-brand__logo" />
              <div class="footer-brand__text">
                <span class="footer-brand__name">TIANJIN DECENT</span>
                <span class="footer-brand__sub">INTERNATIONAL TRADE CO., LTD.</span>
              </div>
            </a>
            <p class="footer-brand__desc">
              Global export supplier of certified steel products and modular scaffolding systems engineered for international construction standards.
            </p>
            <div class="footer-port-meta">
              <span class="footer-port-meta__label">Primary Loading Port</span>
              <span class="footer-port-meta__val">Xingang Terminal, Port of Tianjin (CNTSN)</span>
            </div>
          </div>

          <!-- Col 2: Products -->
          <div class="footer-col">
            <div class="footer-col__title">Products</div>
            <ul class="footer-links">
              <li><a href="/products.html?category=steel-plate-sheet" class="footer-link">Steel Plate &amp; Sheet</a></li>
              <li><a href="/products.html?category=steel-section-profile" class="footer-link">Steel Section &amp; Profile</a></li>
              <li><a href="/products.html?category=steel-pipe-tube" class="footer-link">Steel Pipe &amp; Tube</a></li>
              <li><a href="/products.html?category=scaffolding-accessories" class="footer-link">Scaffolding &amp; Systems</a></li>
              <li><a href="/products.html?category=steel-wire-rod" class="footer-link">Steel Wire &amp; Rod</a></li>
            </ul>
          </div>

          <!-- Col 3: Company & Quality -->
          <div class="footer-col">
            <div class="footer-col__title">Company</div>
            <ul class="footer-links">
              <li><a href="/about.html" class="footer-link">About Tianjin Decent</a></li>
              <li><a href="/quality.html" class="footer-link">Quality &amp; Testing (EN 10204)</a></li>
              <li><a href="/solutions.html" class="footer-link">Engineering Solutions</a></li>
              <li><a href="/contact.html" class="footer-link">Contact &amp; RFQ Desk</a></li>
            </ul>
          </div>

          <!-- Col 4: Direct Inquiries -->
          <div class="footer-col footer-col--inquiry">
            <div class="footer-col__title">Direct Inquiries</div>
            <p class="footer-inquiry-note">Tianjin export coordination &amp; technical pricing:</p>
            <div class="footer-contact-stack">
              <a href="mailto:${SITE_CONFIG.email}" class="footer-contact-link">
                <svg class="footer-contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>${SITE_CONFIG.email}</span>
              </a>
              <a href="${whatsappUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="footer-whatsapp-pill"
                 aria-label="Direct WhatsApp inquiry with Tianjin Decent: ${SITE_CONFIG.whatsappNumber}">
                ${getWhatsAppIconSvg(19)}
                <span>${SITE_CONFIG.whatsappNumber}</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Minimal Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom__copy">
            © ${currentYear} <strong>${SITE_CONFIG.companyName}</strong>. All rights reserved.
          </div>
          <div class="footer-bottom__meta">
            <span>ASTM · EN · JIS · ISO · BS</span>
            <span class="footer-bottom__sep">•</span>
            <span>Tianjin, China</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
