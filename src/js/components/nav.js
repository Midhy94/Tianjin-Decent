/**
 * TIANJIN DECENT — NAVIGATION
 * Sticky nav, scroll transformation, mobile menu, mega-menu
 */

export function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-menu__close');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  if (!nav) return;

  // Offset: distance from top before nav transitions
  const SCROLL_THRESHOLD = 40;

  // ── Scroll transformation ──
  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > SCROLL_THRESHOLD;
        nav.classList.toggle('nav--scrolled', scrolled);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Run once on init
  handleScroll();

  // ── Mobile menu ──
  function openMenu() {
    mobileMenu?.classList.add('open');
    hamburger?.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger?.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
    document.body.style.overflow = '';
    hamburger?.setAttribute('aria-expanded', 'false');
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileClose?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // ── Active link highlighting ──
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const isHome = (href === '/' || href === '/index.html') && (currentPath === '/' || currentPath === '/index.html');
    const isActive = !isHome && currentPath.includes(href.replace('.html', ''));

    if (isHome || isActive) {
      link.classList.add('nav__link--active');
    }
  });

  // ── Mega menu click toggle & keyboard accessibility ──
  const dropdowns = document.querySelectorAll('.nav__dropdown');

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav__dropdown-trigger');

    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Close other dropdowns first
      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove('open');
          d.querySelector('.nav__dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      dropdown.classList.toggle('open');
      const isOpen = dropdown.classList.contains('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    trigger?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('open');
        const isOpen = dropdown.classList.contains('open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav__dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    });
  });
}
