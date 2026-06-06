import Head from 'next/head';
import Image from 'next/image';
import SectionHeading from '../../components/SectionHeading';

const Project3 = () => {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <meta
          name="description"
          content="A responsive developer portfolio built with Next.js, Tailwind CSS, GSAP, and Framer Motion to showcase projects, skills, and experience."
        />
      </Head>

      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        {/* Title */}
        <SectionHeading as="h1" className="mb-4">
          Personal Portfolio Website
        </SectionHeading>
        <p className="text-lg text-base-content mb-8">
          A modern, interactive portfolio site built to showcase my work, skills, and interests as a software engineering and business student.
        </p>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/Projects/Portfolio.png" 
            alt="Portfolio Screenshot"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Overview</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            I built this site to reflect my personal brand and provide a dedicated space to share my projects, technical skills, and achievements. Designed with responsiveness and accessibility in mind, it also serves as a practical exercise in full-stack development.
          </p>
        
        </section>

        {/* Features */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Key Features</SectionHeading>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li>Fully responsive design using Tailwind CSS</li>
            <li>GSAP and Framer Motion animations for smooth transitions</li>
            <li>Modular components for easy scalability and reuse</li>
            <li>SEO-friendly with meta tags and structured layout</li>
            <li>Interactive project pages with custom markdown and image galleries</li>
            <li>Hosted and deployed via Vercel</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Technologies Used</SectionHeading>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-outline">Next.js</span>
            <span className="badge badge-outline">TypeScript</span>
            <span className="badge badge-outline">Tailwind CSS</span>
            <span className="badge badge-outline">Daisy UI</span>
            <span className="badge badge-outline">Vercel</span>
            <span className="badge badge-outline">Figma</span>
            <span className="badge badge-outline">GSAP</span>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Lessons Learned</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            This project helped me deepen my front-end skills while learning the ins and outs of deployment, animations, and responsive UX design. I also gained experience managing components, state, and optimising for performance.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            I continue to iterate and refine it as I grow, adding new projects and features.
          </p>
        </section>

       
      </div>
    </>
  );
};

export default Project3;
