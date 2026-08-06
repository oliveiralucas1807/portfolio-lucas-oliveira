import { useEffect, useState } from 'react';

export default function AmbientAudioPlayer({ locale, spotifyUrl }: { locale: 'pt' | 'en'; spotifyUrl: string }) {
  const [hidden, setHidden] = useState(false);
  const [ready, setReady] = useState(false);
  const playlistId = spotifyUrl.match(/playlist\/([a-zA-Z0-9]+)/)?.[1];
  const embedUrl = playlistId ? `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0` : '';

  useEffect(() => {
    setHidden(sessionStorage.getItem('portfolio-audio-hidden') === 'true');
    setReady(true);
  }, []);

  function close() {
    sessionStorage.setItem('portfolio-audio-hidden', 'true');
    setHidden(true);
  }

  if (hidden) return null;

  return <aside className="ambient-player" data-audio-player data-ready={ready ? 'true' : 'false'} aria-label={locale === 'pt' ? 'Playlist do Lucas' : "Lucas's playlist"}>
    <header className="ambient-heading"><div><small>{locale === 'pt' ? 'Recomendação musical' : 'Music recommendation'}</small><strong>{locale === 'pt' ? 'Playlist do Lucas' : "Lucas's playlist"}</strong></div><button type="button" onClick={close} aria-label={locale === 'pt' ? 'Fechar player' : 'Close player'}>×</button></header>
    {embedUrl && <iframe title={locale === 'pt' ? 'Playlist do Lucas no Spotify' : "Lucas's playlist on Spotify"} src={embedUrl} width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />}
    <div className="ambient-actions">
      <span>{locale === 'pt' ? 'A reprodução é controlada pelo Spotify.' : 'Playback is controlled by Spotify.'}</span>
      <a href={spotifyUrl} target="_blank" rel="noreferrer" aria-label={locale === 'pt' ? 'Abrir playlist no Spotify' : 'Open playlist on Spotify'}>Spotify ↗</a>
    </div>
  </aside>;
}
