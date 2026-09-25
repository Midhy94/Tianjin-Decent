/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Global Site Configuration & Metadata
 * 
 * Centralized configuration for business contact information,
 * WhatsApp messaging parameters, and logistics credentials.
 */

export const SITE_CONFIG = {
  // Official Legal Entity Name
  companyName: 'TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.',
  shortName: 'Tianjin Decent',
  tagline: 'International Industrial & Steel Supply',
  
  // WhatsApp Configuration (Single Source of Truth)
  whatsappNumber: '+86 19902098440',
  whatsappNumberDigits: '8619902098440',
  whatsappDefaultMessage: 'Hello TIANJIN DECENT INTERNATIONAL TRADE CO., LTD., I would like to inquire about your products.',

  // Direct Inquiries & Export Desk
  email: 'info@tjdecent.com',
  salesEmail: 'sales@tjdecent.com',
  
  // Strategic Logistics Hub
  portTerminal: 'Xingang Terminal, Port of Tianjin (CNTSN)',
  headquarters: 'Tianjin, People\'s Republic of China',
  
  // Navigation Routes
  navLinks: [
    { label: 'Home', href: '/index.html' },
    { label: 'Products', href: '/products.html', hasDropdown: true },
    { label: 'Quality & Testing', href: '/quality.html' },
    { label: 'Solutions', href: '/solutions.html' },
    { label: 'About Us', href: '/about.html' },
    { label: 'Contact', href: '/contact.html' },
  ],
};

/**
 * Generates a direct WhatsApp click-to-chat URL with prefilled text.
 * @param {string} [customMessage]
 * @returns {string}
 */
export function getWhatsAppUrl(customMessage) {
  const message = customMessage || SITE_CONFIG.whatsappDefaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumberDigits}?text=${encodeURIComponent(message)}`;
}
