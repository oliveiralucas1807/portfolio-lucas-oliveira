import { useEffect, useState } from 'react';

function PlayerIcon({ name }: { name: 'close' | 'play' | 'volume' }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'close' && <path d="m6 6 12 12M18 6 6 18"/>}
    {name === 'play' && <path d="m9 6 9 6-9 6z"/>}
    {name === 'volume' && <><path d="M5 10v4h3l4 3V7l-4 3zM16 9c1 1 1 5 0 6M19 7c2 2 2 8 0 10"/></>}
  </svg>;
}

export default function FloatingSpotify({ locale, playlist }: { locale: 'pt' | 'en'; playlist: string }) {
  const [hidden, setHidden] = useState(false);
  const active = Boolean(playlist);
  useEffect(() => setHidden(sessionStorage.getItem('portfolio-spotify-hidden') === 'true'), []);
  function close() {
    sessionStorage.setItem('portfolio-spotify-hidden', 'true');
    setHidden(true);
  }
  if (hidden) return null;
  return <aside className="floating-spotify" data-floating-spotify aria-label={locale === 'pt' ? 'Player Spotify' : 'Spotify player'}>
    <button className="floating-close" type="button" onClick={close} aria-label={locale === 'pt' ? 'Fechar player' : 'Close player'}><PlayerIcon name="close" /></button>
    <span className="floating-record" aria-hidden="true"><i>LOS</i></span>
    <div className="floating-copy"><small>Spotify</small><strong>{locale === 'pt' ? 'Playlist em preparação' : 'Playlist coming soon'}</strong><span>{locale === 'pt' ? 'O som desta página chega depois.' : 'The soundtrack arrives later.'}</span></div>
    <div className="floating-controls">
      <button type="button" disabled={!active} aria-label={locale === 'pt' ? 'Reproduzir playlist' : 'Play playlist'}><PlayerIcon name="play" /></button>
      <button type="button" disabled={!active} aria-label={locale === 'pt' ? 'Mutar playlist' : 'Mute playlist'}><PlayerIcon name="volume" /></button>
    </div>
  </aside>;
}
