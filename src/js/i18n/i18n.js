/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Internationalization (i18n) Core Engine
 * 
 * Features:
 * - 4 Languages: English (default), Français, Русский, Español
 * - Seamless persistence via localStorage
 * - Non-destructive DOM text translation preserving original HTML structure
 * - Header dropdown & mobile drawer navigation integration
 * - Reactive update on language switch without unexpected reloads or redirects
 */

import { en } from './translations/en.js';
import { fr } from './translations/fr.js';
import { ru } from './translations/ru.js';
import { es } from './translations/es.js';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'es', label: 'Español', short: 'ES' },
];

export const TRANSLATIONS = { en, fr, ru, es };

const STORAGE_KEY = 'td_language_preference';
let currentLang = 'en';
let isTranslating = false;

/**
 * Returns saved language from URL param or localStorage (default: 'en')
 */
export function getStoredLanguage() {
  try {
    // 1. Check URL query param ?lang= (compatible with existing query routing)
    if (typeof window !== 'undefined' && window.location && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang')?.toLowerCase();
      if (urlLang && TRANSLATIONS[urlLang]) {
        try {
          localStorage.setItem(STORAGE_KEY, urlLang);
        } catch (err) {}
        return urlLang;
      }
    }

    // 2. Check LocalStorage persistence
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
  } catch (e) {
    // LocalStorage unavailable
  }
  return 'en';
}

/**
 * Returns the currently active language code ('en', 'fr', 'ru', 'es')
 */
export function getCurrentLanguage() {
  return currentLang;
}

/**
 * Translate a string or key with fallback
 */
export function t(key, fallback) {
  if (!key) return '';
  const trimmed = typeof key === 'string' ? key.trim() : String(key);
  
  const langDict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  if (langDict && langDict[trimmed] !== undefined) {
    return langDict[trimmed];
  }
  
  const enDict = TRANSLATIONS.en;
  if (enDict && enDict[trimmed] !== undefined) {
    return enDict[trimmed];
  }

  return fallback !== undefined ? fallback : key;
}

/**
 * Translate all text nodes and elements within the DOM
 */
export function translateDocument(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  isTranslating = true;

  const targetDict = TRANSLATIONS[lang];

  // 1. Set HTML lang attribute
  document.documentElement.lang = lang;

  // 2. Translate Page Title & Meta Description
  if (document._tdOrigTitle === undefined) {
    document._tdOrigTitle = document.title;
  }
  const titleTrimmed = document._tdOrigTitle.trim();
  if (lang === 'en') {
    document.title = document._tdOrigTitle;
  } else if (targetDict && targetDict[titleTrimmed]) {
    document.title = targetDict[titleTrimmed];
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    if (metaDesc._tdOrigContent === undefined) {
      metaDesc._tdOrigContent = metaDesc.getAttribute('content') || '';
    }
    const descTrimmed = metaDesc._tdOrigContent.trim();
    if (lang === 'en') {
      metaDesc.setAttribute('content', metaDesc._tdOrigContent);
    } else if (targetDict && targetDict[descTrimmed]) {
      metaDesc.setAttribute('content', targetDict[descTrimmed]);
    }
  }

  // 3. TreeWalker for all visible text nodes
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName.toLowerCase();
        
        // Skip code, script, style, and language selector itself
        if (['script', 'style', 'noscript', 'code'].includes(tag)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.closest('.lang-selector') || parent.closest('.mobile-lang-bar')) {
          return NodeFilter.FILTER_REJECT;
        }
        
        // Skip empty or whitespace-only nodes
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_SKIP;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let textNode;
  while ((textNode = walker.nextNode())) {
    if (textNode._tdOrigText === undefined) {
      textNode._tdOrigText = textNode.nodeValue;
    }

    const raw = textNode._tdOrigText;
    const trimmed = raw.trim();
    if (!trimmed) continue;

    if (lang === 'en') {
      textNode.nodeValue = textNode._tdOrigText;
    } else if (targetDict && targetDict[trimmed]) {
      const match = raw.match(/^(\s*)(.*?)(\s*)$/s);
      const leading = match ? match[1] : '';
      const trailing = match ? match[3] : '';
      textNode.nodeValue = leading + targetDict[trimmed] + trailing;
    }
  }

  // 4. Translate Form Placeholders
  const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
  inputs.forEach((input) => {
    if (input._tdOrigPlaceholder === undefined) {
      input._tdOrigPlaceholder = input.placeholder;
    }
    const trimmed = input._tdOrigPlaceholder.trim();
    if (!trimmed) return;

    if (lang === 'en') {
      input.placeholder = input._tdOrigPlaceholder;
    } else if (targetDict && targetDict[trimmed]) {
      input.placeholder = targetDict[trimmed];
    }
  });

  // 5. Translate Form Select Options where applicable
  const selectOptions = document.querySelectorAll('select option');
  selectOptions.forEach((opt) => {
    if (opt._tdOrigText === undefined) {
      opt._tdOrigText = opt.textContent;
    }
    const trimmed = opt._tdOrigText.trim();
    if (!trimmed) return;

    if (lang === 'en') {
      opt.textContent = opt._tdOrigText;
    } else if (targetDict && targetDict[trimmed]) {
      opt.textContent = targetDict[trimmed];
    }
  });

  // 6. Translate elements with explicit data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    if (el._tdOrigText === undefined) {
      el._tdOrigText = el.textContent;
    }

    if (lang === 'en') {
      el.textContent = el._tdOrigText;
    } else if (targetDict && targetDict[key]) {
      el.textContent = targetDict[key];
    }
  });

  // 7. Update Language Switcher UI components
  updateLanguageSwitcherUI(lang);

  isTranslating = false;
}

/**
 * Crisp SVG vector flags (rounded circular) for supported languages
 */
export function getFlagSvg(langCode, width = 17, height = 17) {
  switch (langCode?.toLowerCase()) {
    case 'fr':
      return `<svg class="lang-flag" width="${width}" height="${height}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="13.33" height="40" fill="#002654"/><rect x="13.33" width="13.34" height="40" fill="#FFFFFF"/><rect x="26.67" width="13.33" height="40" fill="#CE1126"/></svg>`;
    case 'ru':
      return `<svg class="lang-flag" width="${width}" height="${height}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="40" height="13.33" fill="#FFFFFF"/><rect y="13.33" width="40" height="13.34" fill="#0039A6"/><rect y="26.67" width="40" height="13.33" fill="#D52B1E"/></svg>`;
    case 'es':
      return `<svg class="lang-flag" width="${width}" height="${height}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="40" height="10" fill="#AA151B"/><rect y="10" width="40" height="20" fill="#F1BF00"/><rect y="30" width="40" height="10" fill="#AA151B"/></svg>`;
    case 'en':
    default:
      return `<svg class="lang-flag" width="${width}" height="${height}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="40" height="40" fill="#012169"/><path d="M0 0L40 40M40 0L0 40" stroke="#FFF" stroke-width="7"/><path d="M0 0L40 40M40 0L0 40" stroke="#C8102E" stroke-width="3.5"/><path d="M20 0V40M0 20H40" stroke="#FFF" stroke-width="10"/><path d="M20 0V40M0 20H40" stroke="#C8102E" stroke-width="6"/></svg>`;
  }
}

/**
 * Update UI state of language selector triggers and dropdown options
 */
export function updateLanguageSwitcherUI(lang) {
  // Update Current Flag in Header Trigger
  const currentFlagEls = document.querySelectorAll('.lang-selector__flag, #lang-current-flag');
  currentFlagEls.forEach(el => {
    el.innerHTML = getFlagSvg(lang, 17, 17);
  });

  // Update Current 2-letter Code in Header Trigger
  const currentCodeEls = document.querySelectorAll('.lang-selector__current, #lang-current-code');
  currentCodeEls.forEach(el => {
    el.textContent = lang.toUpperCase();
  });

  // Update Header Dropdown active state
  const dropdownItems = document.querySelectorAll('.lang-selector__item');
  dropdownItems.forEach(item => {
    const itemLang = item.getAttribute('data-lang');
    if (itemLang === lang) {
      item.classList.add('is-active');
      item.setAttribute('aria-selected', 'true');
    } else {
      item.classList.remove('is-active');
      item.removeAttribute('aria-selected');
    }
  });

  // Update Mobile Drawer active state
  const mobilePills = document.querySelectorAll('.mobile-lang-pill');
  mobilePills.forEach(pill => {
    const pillLang = pill.getAttribute('data-lang');
    if (pillLang === lang) {
      pill.classList.add('is-active');
    } else {
      pill.classList.remove('is-active');
    }
  });
}

/**
 * Set active language across the entire application
 */
export function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;

  try {
    localStorage.setItem(STORAGE_KEY, lang);
    if (typeof window !== 'undefined' && window.location) {
      const url = new URL(window.location.href);
      if (lang === 'en') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', lang);
      }
      window.history.replaceState({}, '', url.toString());
    }
  } catch (e) {
    // Ignore URL/storage errors
  }

  translateDocument(lang);

  // Dispatch custom event for components that need to respond
  window.dispatchEvent(new CustomEvent('td:languageChanged', { detail: { lang } }));
}

/**
 * Initialize Language Switcher Click and Keyboard Event Handlers
 */
export function initLanguageSwitcherEvents() {
  const trigger = document.getElementById('lang-selector-trigger');
  const dropdown = document.getElementById('lang-dropdown');
  const selector = document.getElementById('lang-selector');

  if (trigger && dropdown && selector) {
    const toggleDropdown = (open) => {
      const isExpanded = open !== undefined ? open : trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      if (isExpanded) {
        dropdown.classList.add('is-open');
      } else {
        dropdown.classList.remove('is-open');
      }
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!selector.contains(e.target)) {
        toggleDropdown(false);
      }
    });

    // Keyboard navigation (Escape closes, Arrow keys)
    selector.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleDropdown(false);
        trigger.focus();
      }
    });

    // Item selection
    dropdown.querySelectorAll('.lang-selector__item').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = item.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
          toggleDropdown(false);
        }
      });
    });
  }

  // Mobile Drawer language selection pills
  document.querySelectorAll('.mobile-lang-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const selectedLang = pill.getAttribute('data-lang');
      if (selectedLang) {
        setLanguage(selectedLang);
      }
    });
  });
}

/**
 * Main Initialization Function
 */
export function initI18n() {
  currentLang = getStoredLanguage();

  // Initialize Switcher UI events
  initLanguageSwitcherEvents();

  // If saved language is not English, translate page immediately
  if (currentLang !== 'en') {
    translateDocument(currentLang);
  } else {
    updateLanguageSwitcherUI('en');
  }

  // Setup mutation observer for dynamically added content (e.g. filtered product cards)
  let debounceTimeout = null;
  const observer = new MutationObserver((mutations) => {
    if (isTranslating || currentLang === 'en') return;

    let hasNewText = false;
    for (const m of mutations) {
      if (m.addedNodes.length > 0) {
        for (const n of m.addedNodes) {
          if (n.nodeType === Node.ELEMENT_NODE && !n.closest('.lang-selector') && !n.closest('.mobile-lang-bar')) {
            hasNewText = true;
            break;
          }
        }
      }
      if (hasNewText) break;
    }

    if (hasNewText) {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        translateDocument(currentLang);
      }, 60);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
