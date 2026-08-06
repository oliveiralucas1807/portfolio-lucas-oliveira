import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const fine = matchMedia('(pointer: fine)').matches;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    document.documentElement.classList.add('has-custom-cursor');
    const dot = document.createElement('span');
    dot.className = 'cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    document.body.append(dot);
    const move = (event: PointerEvent) => dot.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    window.addEventListener('pointermove', move, { passive: true });
    return () => { window.removeEventListener('pointermove', move); dot.remove(); document.documentElement.classList.remove('has-custom-cursor'); };
  }, []);
  return null;
}
