import { useEffect, useRef, useState } from 'react';

type Track = { title: string; src: string };

export default function AmbientAudioPlayer({ locale, tracks, spotifyUrl }: { locale: 'pt' | 'en'; tracks: readonly Track[]; spotifyUrl: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [ready, setReady] = useState(false);
  const available = tracks.length > 0;

  useEffect(() => {
    setHidden(sessionStorage.getItem('portfolio-audio-hidden') === 'true');
    setReady(true);
    if (!audio.current || !available) return;
    audio.current.volume = 0.18;
    audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [available]);

  async function toggle() {
    if (!audio.current || !available) return;
    if (audio.current.paused) {
      await audio.current.play();
      setPlaying(true);
    } else {
      audio.current.pause();
      setPlaying(false);
    }
  }

  function next() {
    if (!available) return;
    setIndex((value) => (value + 1) % tracks.length);
    setPlaying(false);
  }

  function close() {
    sessionStorage.setItem('portfolio-audio-hidden', 'true');
    setHidden(true);
  }

  if (hidden) return null;

  return <aside className="ambient-player" data-audio-player data-ready={ready ? 'true' : 'false'} data-initial-volume="0.18" aria-label={locale === 'pt' ? 'Playlist do Lucas' : "Lucas's playlist"}>
    {available && <audio ref={audio} src={tracks[index].src} onEnded={next} />}
    <div><small>{locale === 'pt' ? 'Recomendação musical' : 'Music recommendation'}</small><strong>{available ? tracks[index].title : locale === 'pt' ? 'Playlist do Lucas' : "Lucas's playlist"}</strong><span>{!available && (locale === 'pt' ? 'Ouça a seleção completa no Spotify.' : 'Listen to the full selection on Spotify.')}</span></div>
    <div className="ambient-controls">
      <button type="button" onClick={toggle} disabled={!available} aria-label={playing ? 'Pausar' : 'Reproduzir'}>{playing ? 'Ⅱ' : '▶'}</button>
      <button type="button" onClick={next} disabled={!available} aria-label={locale === 'pt' ? 'Próxima faixa' : 'Next track'}>›</button>
      <input aria-label={locale === 'pt' ? 'Volume' : 'Volume'} type="range" min="0" max="1" step="0.01" defaultValue="0.18" disabled={!available} onChange={(event) => { if (audio.current) audio.current.volume = Number(event.currentTarget.value); }} />
      <a href={spotifyUrl} target="_blank" rel="noreferrer" aria-label={locale === 'pt' ? 'Abrir playlist no Spotify' : 'Open playlist on Spotify'}>Spotify ↗</a>
      <button type="button" onClick={close} aria-label={locale === 'pt' ? 'Fechar player' : 'Close player'}>×</button>
    </div>
  </aside>;
}
