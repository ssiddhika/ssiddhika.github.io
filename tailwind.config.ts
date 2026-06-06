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
          bg: 'var(--background)',
          'bg-alt': 'var(--background-secondary)',
          card: 'var(--card-bg)',
          primary: 'var(--accent-primary)',
          'primary-soft': 'var(--color-primary-soft)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          border: 'var(--border)',
        },
      },
      borderRadius: {
        portfolio: 'var(--radius-lg)',
        container: 'var(--radius-container)',
        pill: 'var(--radius-pill)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#D4849A',
          'primary-content': '#FFFFFF',
          secondary: '#B09AC7',
          'secondary-content': '#3D1F2D',
          accent: '#C9A0B4',
          'accent-content': '#3D1F2D',
          neutral: '#7D5068',
          'neutral-content': '#FDF0F4',
          'base-100': '#FFFFFF',
          'base-200': '#FAF4FF',
          'base-300': '#EDD5E0',
          'base-content': '#3D1F2D',
          info: '#B09AC7',
          'info-content': '#3D1F2D',
          success: '#B09AC7',
          warning: '#D4849A',
          error: '#D4849A',
          '--rounded-box': '1rem',
          '--rounded-btn': '999px',
          '--rounded-badge': '999px',
        },
        'portfolio-dark': {
          primary: '#E09AB0',
          'primary-content': '#1E1418',
          secondary: '#C4B3D8',
          'secondary-content': '#F8EEF2',
          accent: '#D4B0C4',
          'accent-content': '#F8EEF2',
          neutral: '#C4A0B0',
          'neutral-content': '#1E1418',
          'base-100': '#2A2228',
          'base-200': '#231C28',
          'base-300': '#3D2E38',
          'base-content': '#F8EEF2',
          info: '#C4B3D8',
          'info-content': '#F8EEF2',
          success: '#C4B3D8',
          warning: '#E09AB0',
          error: '#E09AB0',
          '--rounded-box': '1rem',
          '--rounded-btn': '999px',
          '--rounded-badge': '999px',
        },
      },
    ],
    darkTheme: 'portfolio-dark',
  },
};

export default config;
