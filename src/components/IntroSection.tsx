import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const IntroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob--pink" aria-hidden="true" />
      <div className="hero-blob hero-blob--lavender" aria-hidden="true" />
      <div className="hero-blob hero-blob--mauve" aria-hidden="true" />

      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg relative z-10 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 min-w-0 md:pr-8">
            <h1 className="hero-name font-heading hero-text">
              Siddhika Prasad
              <span className="hero-name-underline" aria-hidden="true" />
            </h1>

            <p className="hero-identity mt-8 hero-text">
              Final-year Software Engineering and Human Resource Management student at UTS.
            </p>
            <p className="hero-identity mt-2 hero-text">
              I build systems and work comfortably with engineers and non-technical stakeholders.
            </p>

            <p className="hero-current mt-8 hero-text">
              <span className="hero-current-label">Currently</span>
              {' — Application Engineering Intern at Advanced Navigation, validating applied AI workflows and supporting customers across APAC.'}
            </p>

            <p className="hero-meta mt-5 hero-text">
              Sydney, Australia · Graduating November 2026
            </p>
          </div>

          <div className="relative flex-shrink-0 hero-image hero-image-frame">
            <Image
              src="/images/IMG_6371.JPG"
              alt="Siddhika Prasad"
              width={300}
              height={300}
              className="rounded-[var(--radius-xl)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
