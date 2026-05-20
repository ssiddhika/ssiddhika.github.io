import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer border-t border-soft bg-surface-alt text-portfolio-muted py-8 mt-8">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/siddhika-prasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-primary hover:text-portfolio-primary-soft transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ssiddhika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-primary hover:text-portfolio-primary-soft transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-sm text-portfolio-muted">
          &copy; {new Date().getFullYear()} Siddhika Prasad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
