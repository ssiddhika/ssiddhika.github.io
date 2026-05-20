import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: 'var(--color-bg)',
          'bg-alt': 'var(--color-bg-alt)',
          card: 'var(--color-card)',
          primary: 'var(--color-primary)',
          'primary-soft': 'var(--color-primary-soft)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          text: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          border: 'var(--color-border)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
      },
      borderRadius: {
        portfolio: 'var(--radius-lg)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#C97B8E',
          'primary-content': '#FFFFFF',
          secondary: '#8B9ED4',
          'secondary-content': '#2D2A35',
          accent: '#B09AC7',
          'accent-content': '#2D2A35',
          neutral: '#6B6575',
          'neutral-content': '#FDF8F6',
          'base-100': '#FEF9FD',
          'base-200': '#FAF7FF',
          'base-300': '#E8E2F0',
          'base-content': '#2D2A35',
          info: '#9BA8D4',
          'info-content': '#2D2A35',
          success: '#B09AC7',
          warning: '#D4849A',
          error: '#C97B8E',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '0.5rem',
        },
        'portfolio-dark': {
          primary: '#E095A8',
          'primary-content': '#1A1820',
          secondary: '#9EB0E0',
          'secondary-content': '#F5F2F8',
          accent: '#C4B0D8',
          'accent-content': '#F5F2F8',
          neutral: '#A9A3B5',
          'neutral-content': '#1A1820',
          'base-100': '#2A2733',
          'base-200': '#221F2A',
          'base-300': '#3D3848',
          'base-content': '#F5F2F8',
          info: '#B0BFE8',
          'info-content': '#F5F2F8',
          success: '#C4B0D8',
          warning: '#ECA8B8',
          error: '#E095A8',
          '--rounded-box': '0.75rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '0.5rem',
        },
      },
    ],
    darkTheme: 'portfolio-dark',
  },
};

export default config;
