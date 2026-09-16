/**
 * TIANJIN DECENT INTERNATIONAL TRADE CO., LTD.
 * Aurora-Style Hero Background Crossfade Slider
 */

export function initHeroSlider() {
  const bgContainer = document.getElementById('hero-aurora-bg');
  if (!bgContainer) return;

  const slides = bgContainer.querySelectorAll('.hero-aurora-slide');
  const dots = document.querySelectorAll('.hero-aurora-dot');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  let timer = null;
  const INTERVAL = 6500; // 6.5s per image crossfade

  function goToSlide(index) {
    slides[currentIndex].classList.remove('is-active');
    if (dots[currentIndex]) dots[currentIndex].classList.remove('is-active');

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add('is-active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('is-active');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(nextSlide, INTERVAL);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(idx);
      startTimer();
    });
  });

  // Pause slideshow when tab is not visible to conserve resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimer();
    } else {
      startTimer();
    }
  });

  startTimer();
}
