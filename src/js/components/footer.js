/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Footer Component
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
          
          <!-- Col 1: Corporate Entity & Port Terminal -->
          <div class="footer-brand">
            <a href="/index.html" style="display: inline-block; margin-bottom: 14px;">
              <img src="${logoUrl}" alt="TIANJIN DECENT Logo" style="height: 42px; width: auto;" />
            </a>
            <h3 class="footer-brand__name">${SITE_CONFIG.companyName}</h3>
            <p class="footer-brand__desc">
              Professional international industrial trading company specializing in Steel plate&amp; sheet, Steel Section&amp;profile, Steel pipe &amp;tube, steel wire&amp;rod, and modular scaffolding systems engineered for global standards.
            </p>
            <div style="margin-top: 16px;">
              <span class="tech-tag tech-tag--blue">
                LOGISTICS: ${SITE_CONFIG.portTerminal}
              </span>
            </div>
          </div>

          <!-- Col 2: Steel Categories (First-Level) -->
          <div class="footer-col">
            <div class="footer-col__title">Product Categories</div>
            <ul class="footer-links">
              <li><a href="/products.html?category=steel-plate-sheet" class="footer-link">Steel plate/sheet</a></li>
              <li><a href="/products.html?category=steel-section-profile" class="footer-link">Steel section/profile</a></li>
              <li><a href="/products.html?category=steel-pipe-tube" class="footer-link">Steel pipe/tube</a></li>
              <li><a href="/products.html?category=scaffolding-accessories" class="footer-link">Scaffolding &amp; Accessories</a></li>
              <li><a href="/products.html?category=steel-wire-rod" class="footer-link">Steel wire/rod</a></li>
            </ul>
          </div>

          <!-- Col 3: Scaffolding & Accessories (Second-Level) -->
          <div class="footer-col">
            <div class="footer-col__title">Scaffolding &amp; Accessories</div>
            <ul class="footer-links">
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Ringlock+System" class="footer-link">Ringlock System</a></li>
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Cuplock" class="footer-link">Cuplock &amp; Kwikstage</a></li>
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Steel+prop%2Fshoring" class="footer-link">Steel Prop / Shoring</a></li>
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Steel+plank%2Fboard" class="footer-link">Steel Plank / Board</a></li>
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Staircase%2Fbeam+ladder%2Fladder" class="footer-link">Staircase / Beam Ladder / Ladders</a></li>
              <li><a href="/products.html?category=scaffolding-accessories&subcategory=Couplers" class="footer-link">Drop-Forged Couplers</a></li>
            </ul>
          </div>

          <!-- Col 4: Compliance & Navigation -->
          <div class="footer-col">
            <div class="footer-col__title">Quality & Compliance</div>
            <ul class="footer-links">
              <li><a href="/quality.html" class="footer-link">Mill Test Certificates (EN 10204)</a></li>
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
                 class="footer-link" 
                 style="font-weight: 500;">
                WhatsApp: ${SITE_CONFIG.whatsappNumber}
              </a>
              <a href="${whatsappUrl}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="btn btn--whatsapp" 
                 style="display: inline-flex; align-items: center; justify-content: center; width: 100%; gap: 8px;">
                ${getWhatsAppIconSvg(18)}
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
