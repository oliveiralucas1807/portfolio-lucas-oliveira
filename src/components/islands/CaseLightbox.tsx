import { useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '@/i18n/config';

export type LightboxImage = { id: string; group: string; src: string; alt: string; client: string };

export default function CaseLightbox({ locale, images, dialogLabel }: { locale: Locale; images: LightboxImage[]; dialogLabel?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const active = images.find((image) => image.id === activeId) ?? null;
  const group = useMemo(() => active ? images.filter((image) => image.group === active.group) : [], [active, images]);
  const index = active ? group.findIndex((image) => image.id === active.id) : -1;

  const close = () => {
    setActiveId(null);
    requestAnimationFrame(() => opener.current?.focus());
  };
  const move = (delta: number) => {
    if (!group.length || index < 0) return;
    setActiveId(group[(index + delta + group.length) % group.length].id);
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>('[data-lightbox-id]');
      if (!trigger?.dataset.lightboxId) return;
      opener.current = trigger;
      setActiveId(trigger.dataset.lightboxId);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!active) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'Tab') {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('.case-lightbox button'));
        if (!controls.length) return;
        const current = controls.indexOf(document.activeElement as HTMLElement);
        const next = event.shiftKey ? (current - 1 + controls.length) % controls.length : (current + 1) % controls.length;
        event.preventDefault();
        controls[next].focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeId, index, group.length]);

  if (!active) return <span data-lightbox-ready hidden />;
  return <div className="case-lightbox" role="dialog" aria-modal="true" aria-label={dialogLabel ?? (locale === 'pt' ? 'Visualizador de artes' : 'Artwork viewer')} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touchStart.current == null || end == null) return; const distance = end - touchStart.current; if (Math.abs(distance) > 55) move(distance < 0 ? 1 : -1); touchStart.current = null; }}>
    <header className="case-lightbox-bar"><div><strong>{active.client}</strong><span data-lightbox-counter>{index + 1} / {group.length}</span></div><button ref={closeButton} type="button" onClick={close} aria-label={locale === 'pt' ? 'Fechar visualizador' : 'Close viewer'}>×</button></header>
    <button className="case-lightbox-nav is-previous" type="button" onClick={() => move(-1)} aria-label={locale === 'pt' ? 'Arte anterior' : 'Previous artwork'}>‹</button>
    <figure><img src={active.src} alt={active.alt} /><figcaption>{active.alt}</figcaption></figure>
    <button className="case-lightbox-nav is-next" type="button" onClick={() => move(1)} aria-label={locale === 'pt' ? 'Próxima arte' : 'Next artwork'}>›</button>
  </div>;
}
