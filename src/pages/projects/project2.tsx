import Head from 'next/head';
import Image from 'next/image';
import SectionHeading from '../../components/SectionHeading';

const Project6 = () => {
  return (
    <>
      <Head>
        <title>Hilti MEP Supports Tool </title>
        <meta
          name="description"
          content="A Navisworks plugin to automate BIM analysis for MEP support suggestions, built during a consultancy internship with Optik and Hilti."
        />
      </Head>

      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        {/* Title */}
        <SectionHeading as="h1" className="mb-4">
          Hilti&apos;s MEP Supports Tool
        </SectionHeading>
        <p className="text-lg text-base-content mb-8">
          A Navisworks plugin that automates the analysis of BIM (Building Information Modelling) designs for MEP (Mechanical, Electrical, Plumbing) support structures — helping streamline Hilti’s quotation workflow.
        </p>

        {/* Image */}
        <div className="relative w-full h-72 md:h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image 
            src="/images/Projects/MEP.avif" 
            alt="Hilti MEP Plugin Screenshot"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Project Overview</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            Completed during my 2023 Summer internship at Optik Consultancy, this project involved designing and developing a Navisworks plugin for Hilti. Working in a cross-functional team over 12 weeks, we created a tool to help automate the quotation process for MEP supports in construction designs.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            It was my first end-to-end engineering project with a live client, and it gave me hands-on experience with an entirely new tech stack and industry.
          </p>
        </section>

        {/* Project Details */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Project Details</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            Hilti receives BIM files containing MEP elements requiring structural supports like T-posts or trapezes. Traditionally, estimating these supports for quotations is manual and time-consuming.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            Our solution automated the process by analyzing component geometry, location, and orientation, then suggesting supports using a reference database — and exporting results into a detailed spreadsheet.
          </p>
        </section>

        {/* Solution Process */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Solution Workflow</SectionHeading>
          <ul className="list-disc list-inside text-base lg:text-lg text-base-content space-y-2">
            <li>Open a Navisworks file and select MEP components.</li>
            <li>Activate the custom plugin to start analysis.</li>
            <li>Plugin categorizes components as Mechanical, Electrical, or Plumbing.</li>
            <li>Collects geometry and metadata including size and position.</li>
            <li>Calculates proximity to walls, floors, and ceilings.</li>
            <li>Assesses orientation (parallel/perpendicular).</li>
            <li>Generates a report with suggested supports and component data.</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Technologies Used</SectionHeading>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="badge badge-outline">C#</span>
            <span className="badge badge-outline">.NET Framework</span>
            <span className="badge badge-outline">Windows Forms</span>
            <span className="badge badge-outline">Navisworks 2024 API</span>
            <span className="badge badge-outline">Revit 2024</span>
            <span className="badge badge-outline">MongoDB</span>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-12">
          <SectionHeading className="section-heading--sm mb-3">Lessons Learned</SectionHeading>
          <p className="text-base lg:text-lg text-base-content mb-4">
            This project introduced me to the construction tech industry and gave me deep exposure to BIM workflows. I learned how to integrate external APIs, conduct rigorous testing, and collaborate in an agile scrum team.
          </p>
          <p className="text-base lg:text-lg text-base-content">
            Through mentorship, independent research, and stakeholder engagement, I strengthened my problem-solving skills, adaptability, and ability to work across disciplines. It was a rewarding challenge that taught me to manage uncertainty and technical complexity effectively.
          </p>
        </section>


      </div>
    </>
  );
};

export default Project6;
