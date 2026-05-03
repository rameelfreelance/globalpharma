/**
 * Scroll-reveal: adds `.in-view` to elements with .fade-up, .scale-in,
 * .clip-wrap, .line-reveal, or .process-reveal when they enter viewport.
 *
 * Uses getBoundingClientRect + scroll events instead of IntersectionObserver
 * because the parent container uses CSS `zoom`, which breaks IO's intersection
 * calculations in all browsers.
 */

let scrollHandler: (() => void) | null = null;
let rafId: number | null = null;

function updateProcessScroll() {
  const targets = document.querySelectorAll<HTMLElement>('.process-scroll');
  const wh = window.innerHeight;
  targets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const progress = Math.min(
      1,
      Math.max(0, (wh - rect.top) / (wh + rect.height))
    );
    const depth = Number(el.style.getPropertyValue('--process-depth') || 0);
    const baseShift = 92 - progress * 150;
    const staggerOffset = depth * 14;
    el.style.setProperty('--process-shift', `${baseShift + staggerOffset}px`);
  });
}

function checkReveal() {
  const targets = document.querySelectorAll<HTMLElement>(
    '.fade-up, .scale-in, .clip-wrap, .line-reveal, .process-reveal'
  );
  const wh = window.innerHeight;
  targets.forEach((el) => {
    if (el.classList.contains('in-view')) return;
    const rect = el.getBoundingClientRect();
    // Earlier trigger so longer martindow-style eases finish while content is still on-screen.
    const triggerRatio =
      el.classList.contains('fade-up') || el.classList.contains('scale-in')
        ? 0.91
        : 0.93;
    if (rect.top < wh * triggerRatio && rect.bottom > 0) {
      el.classList.add('in-view');
    }
  });
  updateProcessScroll();
}

export function initScrollReveal() {
  // Clean up any previous listener
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler, false);
    scrollHandler = null;
  }
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Remove stale in-view classes from previous page
  document.querySelectorAll('.in-view').forEach((el) =>
    el.classList.remove('in-view')
  );

  // Initial check — catches everything already visible on load
  checkReveal();

  // Throttled scroll listener
  scrollHandler = () => {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      checkReveal();
      rafId = null;
    });
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
}

export function destroyScrollReveal() {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler, false);
    scrollHandler = null;
  }
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}
