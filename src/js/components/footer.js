/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Footer Component
 */

import { SITE_CONFIG, getWhatsAppUrl } from '../config.js';
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
          
          <!-- Col 1: Corporate Entity & Port Terminal -->
          <div class="footer-brand">
            <a href="/index.html" style="display: inline-block; margin-bottom: 14px;">
              <img src="${logoUrl}" alt="TIANJIN DECENT Logo" style="height: 42px; width: auto;" />
            </a>
            <h3 class="footer-brand__name">${SITE_CONFIG.companyName}</h3>
            <p class="footer-brand__desc">
              Professional international industrial trading company specializing in flat-rolled steel coils, structural steel profiles, and modular scaffolding systems engineered for global standards.
            </p>
            <div style="margin-top: 16px;">
              <span class="tech-tag tech-tag--blue">
                LOGISTICS: ${SITE_CONFIG.portTerminal}
              </span>
            </div>
          </div>

          <!-- Col 2: Steel Products -->
          <div class="footer-col">
            <div class="footer-col__title">Steel Products</div>
            <ul class="footer-links">
              <li><a href="/products.html?category=steel-coils" class="footer-link">Hot Rolled Coils (HR)</a></li>
              <li><a href="/products.html?category=steel-coils" class="footer-link">Pre-Galvanized Coils</a></li>
              <li><a href="/products.html?category=steel-coils" class="footer-link">Color Coated Coils (PPGI)</a></li>
              <li><a href="/products.html?category=structural-profiles" class="footer-link">H-Beams & I-Beams</a></li>
              <li><a href="/products.html?category=structural-profiles" class="footer-link">Channels & Angles</a></li>
              <li><a href="/products.html?category=structural-profiles" class="footer-link">Seamless Steel Pipes</a></li>
            </ul>
          </div>

          <!-- Col 3: Scaffolding Systems -->
          <div class="footer-col">
            <div class="footer-col__title">Scaffolding Systems</div>
            <ul class="footer-links">
              <li><a href="/products.html?category=scaffolding-systems" class="footer-link">Cup Lock System</a></li>
              <li><a href="/products.html?category=scaffolding-systems" class="footer-link">Ring / Pin Lock System</a></li>
              <li><a href="/products.html?category=scaffolding-systems" class="footer-link">Tube & Fitting System</a></li>
              <li><a href="/products.html?category=tubes-fittings" class="footer-link">Drop-Forged Couplers</a></li>
              <li><a href="/products.html?category=platforms" class="footer-link">Aluminum Platform Boards</a></li>
              <li><a href="/products.html?category=mobile-towers" class="footer-link">Mobile Aluminum Towers</a></li>
            </ul>
          </div>

          <!-- Col 4: Compliance & Navigation -->
          <div class="footer-col">
            <div class="footer-col__title">Quality & Compliance</div>
            <ul class="footer-links">
              <li><a href="/quality.html" class="footer-link">MTC EN 10204 3.1 / 3.2</a></li>
              <li><a href="/quality.html" class="footer-link">Third-Party Inspection (SGS/BV)</a></li>
              <li><a href="/solutions.html" class="footer-link">Engineering Solutions</a></li>
              <li><a href="/about.html" class="footer-link">Corporate Credentials</a></li>
              <li><a href="/contact.html" class="footer-link">B2B Quotation Desk</a></li>
            </ul>
          </div>

          <!-- Col 5: Direct Inquiries & WhatsApp -->
          <div class="footer-col">
            <div class="footer-col__title">Direct Inquiry Desk</div>
            <p style="font-size: 13px; color: var(--color-muted); line-height: 1.5; margin-bottom: 12px;">
              Direct coordination with our Tianjin dispatch and export engineering team.
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="mailto:${SITE_CONFIG.email}" class="footer-link" style="font-weight: 500;">
                ✉ ${SITE_CONFIG.email}
              </a>
              <a href="${whatsappUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="btn btn--whatsapp" 
                 style="display: inline-flex; justify-content: center; width: 100%;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.43C8.94 7.43 8.66 7.5 8.42 7.76C8.18 8.02 7.5 8.65 7.5 9.94C7.5 11.23 8.44 12.48 8.57 12.65C8.7 12.82 10.42 15.47 13.06 16.61C13.69 16.88 14.18 17.04 14.56 17.16C15.2 17.36 15.77 17.34 16.23 17.27C16.74 17.19 17.8 16.63 18.02 16C18.24 15.37 18.24 14.83 18.18 14.72C18.11 14.61 17.94 14.55 17.68 14.42C17.43 14.3 16.19 13.69 15.96 13.6C15.73 13.52 15.56 13.48 15.4 13.73C15.23 13.98 14.75 14.55 14.6 14.72C14.46 14.89 14.31 14.91 14.06 14.79C13.81 14.66 12.99 14.39 12.02 13.53C11.27 12.86 10.76 12.03 10.61 11.78C10.47 11.53 10.59 11.4 10.72 11.27C10.83 11.16 10.97 10.98 11.1 10.83C11.23 10.68 11.27 10.57 11.36 10.4C11.44 10.23 11.4 10.09 11.34 9.96C11.27 9.84 10.79 8.65 10.58 8.16C10.39 7.68 10.18 7.75 10.03 7.74H9.52C9.35 7.74 9.11 7.43 9.11 7.43Z"/>
                </svg>
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <div>
            © ${currentYear} <strong>${SITE_CONFIG.companyName}</strong>. All rights reserved. Registered in Tianjin, China.
          </div>
          <div style="display: flex; gap: 20px;">
            <span>Standards: ASTM | EN | JIS | BS | ISO</span>
            <span>Port: CNTSN Xingang</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
