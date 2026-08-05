import { useEffect, useRef } from 'react';

type IconName = 'mail' | 'whatsapp' | 'linkedin' | 'file';
type Link = { href: string; label: string; detail: string; external?: boolean; icon: IconName };
type Props = {
  contactTitle: string;
  contactIntro: string;
  contactLinks: Link[];
  closeLabel: string;
};

export default function PortfolioModal({ contactTitle, contactIntro, contactLinks, closeLabel }: Props) {
  const contactRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialogs = { contact: contactRef.current };
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
        <h2 id="contact-modal-title" className="modal-title-optical">{contactTitle}</h2>
        <p>{contactIntro}</p>
        <div className="modal-links">{contactLinks.map((link) => <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}><ModalIcon name={link.icon} /><strong>{link.label}</strong><span>{link.detail}</span></a>)}</div>
      </div>
    </dialog>
  </>;
}

function ModalIcon({ name }: { name: IconName }) {
  return <svg className="ui-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>}
    {name === 'whatsapp' && <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8 8c2 5 4 7 8 8"/></>}
    {name === 'linkedin' && <><rect x="4" y="9" width="3" height="11"/><path d="M5.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM11 20V9h3v2c1-2 7-3 7 3v6h-3v-6c0-3-4-3-4 0v6z"/></>}
    {name === 'file' && <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M8.5 15h7M8.5 18h5"/></>}
  </svg>;
}
