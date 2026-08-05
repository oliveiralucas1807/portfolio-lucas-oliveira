import { useEffect, useState } from 'react';

function CloseIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

type FloatingSpotifyProps = {
  locale: 'pt' | 'en';
  playlist: string;
  embed: string;
};

export default function FloatingSpotify({ locale, playlist, embed }: FloatingSpotifyProps) {
  const [hidden, setHidden] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    setHidden(sessionStorage.getItem('portfolio-spotify-hidden') === 'true');
    setCollapsed(window.matchMedia('(max-width: 800px)').matches);
  }, []);

  function close() {
    sessionStorage.setItem('portfolio-spotify-hidden', 'true');
    setHidden(true);
  }

  if (hidden || !embed) return null;

  return <aside className={`floating-spotify${collapsed ? ' is-collapsed' : ''}`} data-floating-spotify aria-label={locale === 'pt' ? 'Player Spotify' : 'Spotify player'}>
    <div className="floating-spotify-head">
      <a href={playlist} target="_blank" rel="noreferrer">
        <span>Spotify</span>
        <strong>{locale === 'pt' ? 'Playlist do Lucas' : "Lucas's playlist"}</strong>
      </a>
      <div className="floating-actions">
        <button className="floating-toggle" type="button" onClick={() => setCollapsed((value) => !value)} aria-expanded={!collapsed}>
          {collapsed ? (locale === 'pt' ? 'Abrir' : 'Open') : (locale === 'pt' ? 'Recolher' : 'Collapse')}
        </button>
        <button className="floating-close" type="button" onClick={close} aria-label={locale === 'pt' ? 'Fechar player' : 'Close player'}><CloseIcon /></button>
      </div>
    </div>
    <iframe
      data-testid="spotify-embed"
      title={locale === 'pt' ? 'Playlist do Lucas no Spotify' : "Lucas's Spotify playlist"}
      src={embed}
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      allowFullScreen
    />
  </aside>;
}
