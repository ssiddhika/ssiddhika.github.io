import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer border-t border-soft py-10 mt-4">
      <div className="max-w-screen-lg mx-auto px-6 text-center">
        <p className="text-sm lg:text-base text-muted leading-relaxed">
          Say hi —{' '}
          <a
            href="mailto:siddhikapr@gmail.com"
            className="text-primary hover:text-portfolio-primary-soft transition-colors"
          >
            siddhikapr@gmail.com
          </a>
          <span className="text-[var(--color-border-strong)] mx-2">·</span>
          <a
            href="https://www.linkedin.com/in/siddhika-prasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-portfolio-primary-soft transition-colors inline-flex items-center gap-1"
          >
            <FaLinkedin className="inline w-4 h-4" aria-hidden />
            LinkedIn
          </a>
          <span className="text-[var(--color-border-strong)] mx-2">·</span>
          <a
            href="https://github.com/ssiddhika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-portfolio-primary-soft transition-colors inline-flex items-center gap-1"
          >
            <FaGithub className="inline w-4 h-4" aria-hidden />
            GitHub
          </a>
        </p>
        <p className="text-xs text-muted mt-4">
          © {new Date().getFullYear()} Siddhika Prasad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
