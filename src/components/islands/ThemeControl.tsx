import { useEffect, useState } from 'react';

export default function ThemeControl({ label }: { label: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    setReady(true);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    setTheme(next);
  }

  return <button className="icon-button" type="button" onClick={toggle} disabled={!ready} aria-label={label} title={label}>{theme === 'dark' ? '☀' : '◐'}</button>;
}
