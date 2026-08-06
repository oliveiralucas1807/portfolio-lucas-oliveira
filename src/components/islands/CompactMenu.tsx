import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/i18n/config';

export default function CompactMenu({ locale, homeLink, iconSrc }: { locale: Locale; homeLink: string; iconSrc: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', outside);
    window.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', outside); window.removeEventListener('keydown', key); };
  }, [open]);
  const labels = locale === 'pt' ? { menu: 'Abrir menu', work: 'TRABALHOS', about: 'SOBRE' } : { menu: 'Open menu', work: 'WORK', about: 'ABOUT' };
  return <div className="compact-menu-root" ref={root}>
    <button ref={trigger} className="icon-button compact-menu-trigger" type="button" data-compact-menu-trigger aria-label={labels.menu} aria-expanded={open} aria-controls="compact-navigation" onClick={() => setOpen((value) => !value)}><img src={iconSrc} alt="" aria-hidden="true" /></button>
    <div id="compact-navigation" className="compact-menu" data-compact-menu hidden={!open}>
      <a href={`${homeLink}#trabalhos`} onClick={() => setOpen(false)}>{labels.work}</a>
      <a href={`${homeLink}#sobre`} onClick={() => setOpen(false)}>{labels.about}</a>
    </div>
  </div>;
}
