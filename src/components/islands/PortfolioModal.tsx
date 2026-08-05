import { useEffect, useRef } from 'react';

type Link = { href: string; label: string; detail: string; external?: boolean };
type Props = {
  contactTitle: string;
  contactIntro: string;
  contactLinks: Link[];
  spotifyTitle: string;
  spotifyText: string;
  closeLabel: string;
};

export default function PortfolioModal({ contactTitle, contactIntro, contactLinks, spotifyTitle, spotifyText, closeLabel }: Props) {
  const contactRef = useRef<HTMLDialogElement>(null);
  const spotifyRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialogs = { contact: contactRef.current, spotify: spotifyRef.current };
    const open = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>('[data-modal-open]');
      if (!trigger) return;
      const key = trigger.dataset.modalOpen as keyof typeof dialogs;
      const dialog = dialogs[key];
      if (!dialog) return;
      lastTrigger.current = trigger;
      dialog.showModal();
    };
    const restoreFocus = () => lastTrigger.current?.focus();
    document.addEventListener('click', open);
    Object.values(dialogs).forEach((dialog) => dialog?.addEventListener('close', restoreFocus));
    return () => {
      document.removeEventListener('click', open);
      Object.values(dialogs).forEach((dialog) => dialog?.removeEventListener('close', restoreFocus));
    };
  }, []);

  function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }

  return <>
    <dialog ref={contactRef} className="portfolio-modal" data-modal="contact" aria-labelledby="contact-modal-title" onClick={closeOnBackdrop}>
      <div className="modal-panel">
        <button className="modal-close" type="button" aria-label={closeLabel} onClick={() => contactRef.current?.close()}>×</button>
        <p className="eyebrow">Contato</p>
        <h2 id="contact-modal-title">{contactTitle}</h2>
        <p>{contactIntro}</p>
        <div className="modal-links">{contactLinks.map((link) => <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><strong>{link.label}</strong><span>{link.detail}</span></a>)}</div>
      </div>
    </dialog>
    <dialog ref={spotifyRef} className="portfolio-modal" data-modal="spotify" aria-labelledby="spotify-modal-title" onClick={closeOnBackdrop}>
      <div className="modal-panel modal-spotify">
        <button className="modal-close" type="button" aria-label={closeLabel} onClick={() => spotifyRef.current?.close()}>×</button>
        <span className="modal-record" aria-hidden="true"><i>LO</i></span>
        <div><p className="eyebrow">Spotify</p><h2 id="spotify-modal-title">{spotifyTitle}</h2><p>{spotifyText}</p></div>
      </div>
    </dialog>
  </>;
}
