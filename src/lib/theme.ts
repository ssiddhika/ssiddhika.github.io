export type PortfolioTheme = 'portfolio' | 'portfolio-dark';

export const THEME_STORAGE_KEY = 'portfolio-theme';

export function applyTheme(theme: PortfolioTheme) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function getStoredTheme(): PortfolioTheme | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'portfolio' || stored === 'portfolio-dark') {
    return stored;
  }
  return null;
}

export function getInitialTheme(): PortfolioTheme {
  const stored = getStoredTheme();
  if (stored) return stored;
  if (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'portfolio-dark';
  }
  return 'portfolio';
}

export function toggleTheme(current: PortfolioTheme): PortfolioTheme {
  const next = current === 'portfolio' ? 'portfolio-dark' : 'portfolio';
  applyTheme(next);
  return next;
}
