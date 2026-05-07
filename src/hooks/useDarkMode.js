import { useState, useEffect } from 'react';

const storage = 'theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem (storage);
    return stored ?? getSystemTheme();
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('darkmode');
      document.body.classList.remove('lightmode');
    } else {
      document.body.classList.remove('darkmode');
      document.body.classList.add('lightmode');
    }
    localStorage.setItem (storage, theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem (storage)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const resetToSystem = () => {
    localStorage.removeItem (storage);
    setTheme(getSystemTheme());
  };

  return { theme, toggle, resetToSystem, isDark: theme === 'dark' };
}