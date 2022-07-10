import { Helmet } from 'pressify/client';
import { useEffect, useState } from 'react';
import IconSun from '~icons/tabler/sun';
import IconMoon from '~icons/tabler/moon';

type ThemeMode = 'light' | 'dark';

const THEME_MODE_STORAGE_KEY = 'themeMode';

function getThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storageValue = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);

  if (
    storageValue === 'dark' ||
    (!storageValue &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark';
  } else {
    return 'light';
  }
}

if (typeof window !== 'undefined') {
  const themeMode = getThemeMode();
  const doc = document.documentElement;

  if (themeMode === 'dark') {
    doc.classList.add('dark');
  } else {
    doc.classList.remove('dark');
  }
}

export interface ThemeModeSwitchProps {
  showLabel?: boolean;
  className?: string;
}

export function ThemeModeSwitch() {
  const [themeMode, setThemeMode] = useState(() => getThemeMode());

  useEffect(() => {
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, themeMode);
  }, [themeMode]);

  return (
    <>
      <Helmet>
        <html className={themeMode} />
      </Helmet>
      <button
        className="w-8 h-8 inline-flex justify-center items-center text-base hover:text-primary-500 transition-colors"
        onClick={() =>
          setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        {themeMode === 'light' ? <IconSun /> : <IconMoon />}
      </button>
    </>
  );
}
