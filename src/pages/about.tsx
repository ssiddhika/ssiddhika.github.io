import Head from 'next/head';
import AboutPhoto from '../components/AboutPhoto';

const experience = [
  {
    role: 'Application Engineering Intern',
    company: 'Advanced Navigation',
    dates: 'August 2025 – Present',
    description:
      'Customer success and support under the APAC go-to-market team — applied AI validation, knowledge base work, and bridging engineering, sales, and support.',
    image: {
      src: '/images/stryde4.jpg',
      alt: 'Siddhika at Stryde4 with Advanced Navigation',
      caption: 'Out in the field at Stryde4 with Advanced Navigation',
    },
  },
  {
    role: 'AI in Space Intern',
    company: 'Powerhouse Museum',
    dates: 'July 2025',
    description:
      'Co-designed and facilitated a program on spacecraft design, generative AI, and technology ethics with Space Machines Company and ING Bank.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Optik Consultancy',
    dates: 'November 2023 – February 2024',
    description:
      'Built and deployed a Navisworks plugin in C# for Hilti Australia within 12 weeks.',
  },
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About me — Siddhika Prasad</title>
        <meta
          name="description"
          content="About Siddhika Prasad — software engineering and business student at UTS, based in Sydney."
        />
      </Head>

      <article className="about-page">
        <h1 className="about-page-title font-heading">About me</h1>

        <section className="about-section" aria-labelledby="about-bio">
          <div id="about-bio" className="about-prose">
            <p>
              I&apos;m in my final year — out of five! — studying software engineering and
              business at UTS, graduating November 2026.
            </p>
            <p>
              I chose these degrees because I wanted to build cool things in tech and understand
              the humans behind the problems. Engineering and HRM felt like an odd combination at
              first, but the more I&apos;ve worked in the real world the more sense it makes.
            </p>
            <p>
              For the last ten months I&apos;ve been at Advanced Navigation, a deep tech Australian
              company, working in customer success and support under their go-to-market team.
              It&apos;s been one of those experiences that teaches you more than you expected — I
              came in thinking it was mostly technical work and left knowing a lot more about sales
              cycles, customer centricity, and what it actually takes to get engineering teams and
              customers on the same page.
            </p>
            <p>
              Before that I built and shipped software for construction tech, co-led a startup
              project that got funded by Business NSW, and helped run the first AI in Space workshop
              at the Powerhouse Museum.
            </p>
            <p>
              It&apos;s still very early in my career. I&apos;m learning something new every day
              which, honestly, is exactly where I want to be right now.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download="Siddhika_Prasad_Resume.pdf"
            className="btn btn-outline btn-primary rounded-full mt-10 about-resume-btn"
          >
            Download resume
          </a>
        </section>

        <section className="about-section" aria-labelledby="about-education">
          <h2 id="about-education" className="about-section-heading font-heading">
            Education
          </h2>
          <div className="about-education-block">
            <p className="about-education-degree font-heading">
              Bachelor of Engineering (Honours) / Bachelor of Business
            </p>
            <p className="about-education-meta text-muted">
              University of Technology Sydney · 2022 – 2026
            </p>
            <p className="about-education-detail">
              Majors in Software Engineering and Human Resource Management · WAM 75+
            </p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-experience">
          <h2 id="about-experience" className="about-section-heading font-heading">
            Experience
          </h2>
          <ul className="about-timeline">
            {experience.map((item) => (
              <li key={`${item.company}-${item.dates}`} className="about-timeline-item">
                <h3 className="about-timeline-role font-heading">{item.role}</h3>
                <p className="about-timeline-company">{item.company}</p>
                <p className="about-timeline-dates text-muted">{item.dates}</p>
                <p className="about-timeline-desc text-muted">{item.description}</p>
                {item.image && (
                  <AboutPhoto
                    src={item.image.src}
                    alt={item.image.alt}
                    caption={item.image.caption}
                    variant="medium"
                  />
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section" aria-labelledby="about-other">
          <h2 id="about-other" className="about-section-heading font-heading">
            A few other things
          </h2>
          <div className="about-aside">
            <p>
              Outside internships I&apos;ve mentored 75+ first-year business students at UTS and
              co-delivered workshops to hundreds more. I&apos;ve taught at Code Camp, where our team
              helped lift enrolments, and I&apos;ve been a student ambassador for the Faculty of
              Engineering and IT and a gender equity ambassador for Women in Engineering and IT.
              None of that is on a product roadmap, but it&apos;s a big part of how I work with
              people.
            </p>
          </div>
        </section>

        <section className="about-section about-photos-section" aria-label="Photos">
          <div className="about-photo-grid">
            <AboutPhoto
              src="/images/confluence.jpg"
              alt="At a team event wearing a Confluence shirt"
              caption="Apparently I read a lot of Confluence pages"
              variant="grid"
            />
            <AboutPhoto
              src="/images/mentoring.jpg"
              alt="UTS Business Mentor Award"
              caption="UTS Business Mentor Award"
              variant="grid"
            />
          </div>
        </section>
      </article>
    </>
  );
};

export default AboutPage;
