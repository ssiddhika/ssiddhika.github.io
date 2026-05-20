import { Html, Head, Main, NextScript } from 'next/document';

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme =
      stored === 'portfolio-dark' || stored === 'portfolio'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'portfolio-dark'
          : 'portfolio';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'portfolio');
  }
})();
`;

export default function Document() {
  return (
    <Html lang="en" data-theme="portfolio" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
