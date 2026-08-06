import { useEffect, useRef, useState } from 'react';

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const dialogs = { contact: contactRef.current };
    setReady(true);
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
    <dialog ref={contactRef} className="portfolio-modal" data-modal="contact" data-ready={ready ? 'true' : 'false'} aria-labelledby="contact-modal-title" onClick={closeOnBackdrop}>
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
  const isEmail = name === 'mail';
  const isWhatsapp = name === 'whatsapp';
  const solid = isWhatsapp || name === 'linkedin';
  return <svg className="ui-icon" data-icon-source={isEmail ? 'lucas-email' : isWhatsapp ? 'lucas-whatsapp' : undefined} width="20" height="20" viewBox={isEmail ? '0 0 512 512' : '0 0 24 24'} fill={solid ? 'currentColor' : 'none'} stroke={solid ? 'none' : 'currentColor'} strokeWidth={isEmail ? 30 : 1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'mail' && <g transform="matrix(1,0,0,-1,0,512)"><path d="m 0,0 c 0,-16.568 -13.432,-30 -30,-30 -16.568,0 -30,13.432 -30,30 0,16.568 13.432,30 30,30 C -13.432,30 0,16.568 0,0 Z" transform="translate(286,315)"/><path d="m 0,0 c -9.391,-3.322 -19.498,-5.13 -30.027,-5.13 -49.705,0 -90,40.294 -90,90 0,49.705 40.295,90 90,90 49.706,0 90,-40.295 90,-90 0,-16.569 -13.431,-30 -30,-30 -16.568,0 -30,13.431 -30,30" transform="translate(286.0269,230.1304)"/><path d="m 0,0 -76,-65.625 v -240 h 482 v 240 L 330,0" transform="translate(91,320.625)"/><path d="M 0,0 172.429,-150 0,-240" transform="translate(15,255)"/><path d="M 0,0 -172.43,90.001 0,240" transform="translate(497,15)"/><path d="M 0,0 H 150" transform="translate(181,105)"/><path d="m 0,0 v 277.625 c 0,16.5 13.5,30 30,30 h 330 c -16.5,0 -30,-13.5 -30,-30 V 0.001" transform="translate(91,189.375)"/></g>}
    {name === 'whatsapp' && <><path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/></>}
    {name === 'linkedin' && <path d="M4 3.5A2.5 2.5 0 1 1 4 8.5a2.5 2.5 0 0 1 0-5zM2 10h4v12H2V10zm6.5 0h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V22h-4v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V22h-4V10z"/>}
    {name === 'file' && <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M8.5 15h7M8.5 18h5"/></>}
  </svg>;
}
