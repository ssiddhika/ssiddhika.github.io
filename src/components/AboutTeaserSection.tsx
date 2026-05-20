import Link from 'next/link';

const AboutTeaserSection = () => {
  return (
    <section className="about-teaser rounded-[var(--radius-xl)] px-6 py-8 lg:px-10 lg:py-10">
      <p className="text-base lg:text-lg leading-relaxed max-w-2xl">
      I picked software engineering and human resource management because I wanted to understand how products get built and how people work together. Turns out those two things are more connected than they sound. Still figuring out exactly where that takes me, but I'm enjoying the process.


      </p>
      <Link
        href="/about"
        className="inline-block mt-6 text-primary font-semibold hover:underline"
      >
        Read more about me →
      </Link>
    </section>
  );
};

export default AboutTeaserSection;
