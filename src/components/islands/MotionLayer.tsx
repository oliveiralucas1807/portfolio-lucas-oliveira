import { useEffect } from 'react';

export default function MotionLayer() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

    if (reduced || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealItems.forEach((item) => observer.observe(item));

    const parallaxItems = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    const cleanups = parallaxItems.map((item) => {
      const move = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 7;
        item.style.setProperty('--motion-x', `${x.toFixed(2)}px`);
        item.style.setProperty('--motion-y', `${y.toFixed(2)}px`);
      };
      const reset = () => {
        item.style.setProperty('--motion-x', '0px');
        item.style.setProperty('--motion-y', '0px');
      };
      item.addEventListener('pointermove', move);
      item.addEventListener('pointerleave', reset);
      return () => {
        item.removeEventListener('pointermove', move);
        item.removeEventListener('pointerleave', reset);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
