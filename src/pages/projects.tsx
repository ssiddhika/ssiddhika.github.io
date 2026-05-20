import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    title: 'SME Growth Recommender Platform',
    category: 'Web App · UTS Studio · Business NSW',
    subtitle:
      'A web app to identify high-growth potential SMEs, built with a team of 8 for Business NSW.',
    imageUrl: '/images/Projects/SME.png',
    projectUrl: '/projects/project1',
  },
  {
    title: 'MEP Supports Tool',
    category: 'Plugin · Hilti Australia',
    subtitle:
      'A Navisworks plugin for Hilti that automates BIM support recommendations for faster quotations.',
    outcome: 'Deployed in 12 weeks',
    imageUrl: '/images/Projects/MEP.avif',
    projectUrl: '/projects/project2',
  },
  {
    title: 'Omada — Networking App',
    category: 'Mobile App · UTS Studio',
    subtitle:
      'A cross-platform mobile app for sharing and organising contact details, built in 12 weeks for UTS Software Innovation Studio.',
    outcome: 'Cross-platform iOS and Android',
    imageUrl: '/images/Projects/Omada.png',
    projectUrl: '/projects/project5',
  },
  {
    title: 'AI in Space Workshop',
    category: 'Workshop Facilitation · Powerhouse Museum',
    subtitle:
      'A three-day workshop on spacecraft design and AI ethics at the Powerhouse Museum.',
    imageUrl: '/images/Projects/Space.avif',
    projectUrl: '/projects/project4',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="page-hero-decor min-h-screen">
        <div className="hero-blob hero-blob--pink" aria-hidden="true" />
        <div className="hero-blob hero-blob--lavender" aria-hidden="true" />
        <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16 relative z-10">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-8">
            Projects
          </h1>
          <p className="text-lg lg:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            A mix of university projects, internship work, and things built just to see if
            they&apos;d work. Some shipped, some taught me a lot, all of them meant something at
            the time.
          </p>
          <Carousel responsive={responsive}>
            {projects.map((project) => (
              <div key={project.projectUrl} className="p-4 h-full">
                <Link
                  href={project.projectUrl}
                  className="project-card group flex flex-col h-full min-h-[420px]"
                >
                  <div className="relative w-full h-48 flex-shrink-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="project-card-body p-4 flex flex-col flex-grow relative">
                    <p className="project-card-category">{project.category}</p>
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base-content text-sm lg:text-base leading-relaxed">
                      {project.subtitle}
                    </p>
                    {project.outcome && (
                      <span className="project-outcome-chip">{project.outcome}</span>
                    )}
                    <span className="project-card-arrow" aria-hidden>
                      →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
