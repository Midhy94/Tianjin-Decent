/**
 * Image Reveal Cursor on Hover Component
 * Inspired by WebDevSnippets (tailwind-image-reveal-cursor)
 * Features smooth physics, directional tilt, crossfades, item dimming, and accessibility fallbacks.
 */

export function initImageRevealCursor() {
  const sections = document.querySelectorAll('[data-irc-section]');
  if (!sections.length) return;

  sections.forEach(section => {
    const list = section.querySelector('[data-irc-list]');
    const items = section.querySelectorAll('[data-irc-item]');
    const preview = section.querySelector('[data-irc-preview]');
    const previewImg = preview ? preview.querySelector('[data-irc-img-el]') : null;

    if (!items.length || !preview || !previewImg) return;

    // Configuration from data attributes or defaults
    const ease = parseFloat(section.dataset.ircEase) || 0.14;
    const maxTilt = parseFloat(section.dataset.ircTilt) || 12;

    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let currentTilt = 0;
    let isHovering = false;
    let isVisible = false;
    let rafId = null;

    // Check if device supports hover/fine pointer
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) {
      preview.style.display = 'none';
      return;
    }

    // Physics Loop using requestAnimationFrame
    const updatePhysics = () => {
      if (isHovering && targetX !== -9999) {
        if (!isVisible) {
          currentX = targetX;
          currentY = targetY;
          isVisible = true;
          preview.classList.add('is-active');
        }

        // Lerp position
        const deltaX = targetX - currentX;
        const deltaY = targetY - currentY;
        currentX += deltaX * ease;
        currentY += deltaY * ease;

        // Calculate tilt based on horizontal velocity
        const targetTilt = Math.max(-maxTilt, Math.min(maxTilt, deltaX * 0.22));
        currentTilt += (targetTilt - currentTilt) * 0.12;

        preview.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${currentTilt.toFixed(2)}deg)`;
      }

      rafId = requestAnimationFrame(updatePhysics);
    };

    // Track mouse coordinates relative to viewport
    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    section.addEventListener('mousemove', onMouseMove, { passive: true });

    // Item hover handlers
    items.forEach(item => {
      const imgSrc = item.dataset.ircImg;
      const imgAlt = item.dataset.ircAlt || 'Preview';

      const showItemPreview = () => {
        isHovering = true;
        preview.classList.add('is-active');

        // Swap image with smooth crossfade
        if (imgSrc && previewImg.getAttribute('src') !== imgSrc) {
          previewImg.style.opacity = '0.3';
          previewImg.style.transform = 'scale(1.08)';
          
          const temp = new Image();
          temp.onload = () => {
            previewImg.src = imgSrc;
            previewImg.alt = imgAlt;
            previewImg.style.opacity = '1';
            previewImg.style.transform = 'scale(1)';
          };
          temp.src = imgSrc;
        }

        // Dim non-hovered siblings
        items.forEach(other => {
          if (other !== item) {
            other.classList.add('is-dimmed');
            other.classList.remove('is-focused');
          } else {
            other.classList.remove('is-dimmed');
            other.classList.add('is-focused');
          }
        });
      };

      item.addEventListener('mouseenter', showItemPreview);
      item.addEventListener('focus', showItemPreview);

      item.addEventListener('mouseleave', () => {
        item.classList.remove('is-focused');
      });
    });

    // Reset when mouse leaves list/section
    const onSectionLeave = () => {
      isHovering = false;
      isVisible = false;
      preview.classList.remove('is-active');
      items.forEach(item => {
        item.classList.remove('is-dimmed', 'is-focused');
      });
    };

    if (list) {
      list.addEventListener('mouseleave', onSectionLeave);
    }
    section.addEventListener('mouseleave', onSectionLeave);

    // Start RAF
    rafId = requestAnimationFrame(updatePhysics);
  });
}

