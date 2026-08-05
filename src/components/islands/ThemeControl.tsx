import { useEffect, useState } from 'react';

export default function ThemeControl({ label }: { label: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
    setTheme(next);
  }

  return <button className="icon-button" type="button" onClick={toggle} aria-label={label} title={label}>{theme === 'dark' ? '☀' : '◐'}</button>;
}
