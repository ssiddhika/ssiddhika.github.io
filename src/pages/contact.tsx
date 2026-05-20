import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="page-hero-decor flex items-center justify-center min-h-[70vh] py-12 px-4 lg:px-12">
        <div className="hero-blob hero-blob--pink" aria-hidden="true" />
        <div className="hero-blob hero-blob--lavender" aria-hidden="true" />
        <div className="w-full max-w-lg relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact Me
            </h1>
            <p className="text-lg lg:text-xl text-muted mb-4">
              Want to get in touch? Connect with me on LinkedIn or GitHub.
            </p>
          </div>
          <div className="section-card p-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a
                href="https://www.linkedin.com/in/siddhika-prasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <FaLinkedin size={48} />
                <span className="text-lg font-semibold text-portfolio-muted">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ssiddhika"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <FaGithub size={48} />
                <span className="text-lg font-semibold text-portfolio-muted">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
