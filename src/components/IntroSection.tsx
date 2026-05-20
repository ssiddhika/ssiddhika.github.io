import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const IntroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.15 }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob--pink" aria-hidden="true" />
      <div className="hero-blob hero-blob--lavender" aria-hidden="true" />
      <div className="hero-blob hero-blob--mauve" aria-hidden="true" />

      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg relative z-10 py-16 lg:py-24 flex flex-col min-h-[88vh]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-14 flex-1">
          <div className="flex-1 min-w-0 text-center md:text-left w-full">
            <h1 className="hero-greeting font-heading hero-text">
              <span className="hero-wave" aria-hidden="true">
                👋
              </span>
              Hi, I&apos;m Siddhika.
            </h1>
            <p className="hero-lead mt-6 hero-text max-w-xl mx-auto md:mx-0">
              I&apos;m a final year software engineering and business student in Sydney.  I like to build things, break things, and try to make tech a bit more human along the way.
            </p>
            <p className="hero-location mt-4 hero-text">Sydney, Australia</p>

            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 hero-text">
              <Link href="/projects" className="btn btn-primary rounded-full px-8">
                See my work
              </Link>
            </div>
          </div>

          <div className="relative flex-shrink-0 hero-image hero-image-frame mx-auto md:mx-0">
            <Image
              src="/images/IMG_6371.JPG"
              alt="Siddhika Prasad"
              width={280}
              height={280}
              className="rounded-[var(--radius-xl)] w-[260px] h-[260px] md:w-[280px] md:h-[280px] object-cover"
              priority
            />
          </div>
        </div>

        <a
          href="#right-now"
          className="hero-scroll hero-text mx-auto md:mx-0 mt-12 md:mt-auto"
          aria-label="Scroll to see what I'm working on"
        >
          <span className="text-sm text-muted">A bit about right now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 mt-1 text-portfolio-primary"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
