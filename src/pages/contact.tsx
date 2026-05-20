import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen py-8 px-4 lg:px-12">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact Me
            </h1>
            <p className="text-lg lg:text-xl text-base-content mb-4">
              Want to get in touch? Connect with me on LinkedIn or GitHub.
            </p>
          </div>
          <div className="bg-base-100 p-8 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <a
                href="https://www.linkedin.com/in/siddhika-prasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <FaLinkedin size={48} />
                <span className="text-lg font-semibold text-neutral">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ssiddhika"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <FaGithub size={48} />
                <span className="text-lg font-semibold text-neutral">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
