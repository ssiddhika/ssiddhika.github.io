import Link from 'next/link';

const AboutTeaserSection = () => {
  return (
    <section className="about-teaser rounded-[var(--radius-xl)] px-6 py-8 lg:px-10 lg:py-10">
      <p className="text-base lg:text-lg leading-relaxed max-w-2xl">
        I picked software engineering and human resource management on purpose — I wanted to
        know how products get built and how people work together. These days that looks like
        scripts and plugins on one side and workshops, mentoring, and customer conversations
        on the other. If that sounds like your kind of collaborator, I&apos;d love to hear from
        you.
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
