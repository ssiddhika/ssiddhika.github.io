import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const headingFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} ${bodyFont.className} min-h-screen bg-portfolio-bg text-portfolio-text`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
