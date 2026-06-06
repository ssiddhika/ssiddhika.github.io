import Head from 'next/head';
import Image from 'next/image';
import SectionHeading from '../../components/SectionHeading';

const Project1 = () => {
  return (
    <>
      <Head>
        <title>SME Growth Recommender</title>
        <meta name="description" content="A web-based platform built to identify high-growth SMEs using automation and data insights." />
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        {/* Title */}
        <SectionHeading as="h1" className="mb-4">
          SME Growth Recommender Platform
        </SectionHeading>
        <p className="text-lg text-base-content mb-8">
          A web-based tool built to help identify and support high-growth potential small to medium enterprises (SMEs) through automated insights and advanced filtering.
        </p>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/SDSTeam.png" 
            alt="SME Growth Recommender"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Overview */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Project Overview</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            Developed during a real-world software studio subject at UTS, our team of eight built a working demonstrator platform for SMEs@UTS and Business NSW. I served as co-lead and interim team lead, collaborating with stakeholders and a data science team to identify key growth indicators for SMEs.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            The platform automates the process of identifying high-growth SMEs using data-driven insights and interactive features.
          </p>
        </section>

        {/* Problem & Opportunity */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Problem & Opportunity</SectionHeading>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li><strong>Problem:</strong> SME identification was manual, time-consuming, and lacked digital tools.</li>
            <li><strong>Opportunity:</strong> Automate the discovery of high-growth SMEs through custom search criteria and data integration.</li>
            <li><strong>Outcome:</strong> A demonstrator was successfully delivered and presented to Business NSW as a potential real-world solution.</li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Solution Features</SectionHeading>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li>User registration and authentication</li>
            <li>Customizable preferences and notification settings</li>
            <li>Advanced search and filtering tools</li>
            <li>SME profile viewer with growth metrics</li>
            <li>Interactive dashboard with engagement tracking</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Technologies Used</SectionHeading>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-outline">TypeScript</span>
            <span className="badge badge-outline">Next.js</span>
            <span className="badge badge-outline">PayloadCMS</span>
            <span className="badge badge-outline">MongoDB</span>
            <span className="badge badge-outline">Shadcn UI</span>
            <span className="badge badge-outline">Figma</span>
            <span className="badge badge-outline">Jira</span>
            <span className="badge badge-outline">Confluence</span>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Lessons Learned</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            This project strengthened my leadership, teamwork, and project management skills in a simulated agile environment. I led sprint planning and retrospectives, managed stakeholder expectations, and used industry-standard tools to ensure team efficiency.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            It gave me firsthand experience of the software lifecycle, stakeholder communication, and how cross-functional teams operate.
          </p>
        </section>

        {/* Project Link */}
        <section>
          <SectionHeading className="section-heading--sm mb-3">Live Demo</SectionHeading>
          <p className="text-base lg:text-lg text-base-content">
            Check out the live platform here:{' '}
            <a 
              href="https://sme-growth-project.vercel.app/" 
              className="text-primary underline hover:text-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              sme-growth-project.vercel.app
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default Project1;
