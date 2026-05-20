import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    title: 'AI in Space Workshop',
    subtitle:
      'A three-day workshop on spacecraft design and AI ethics at the Powerhouse Museum.',
    imageUrl: '/images/Projects/Space.avif',
    projectUrl: '/projects/project4',
  },
  {
    title: 'SME Growth Recommender Platform',
    subtitle:
      'A web app to identify high-growth potential SMEs, built with a team of 8 for Business NSW.',
    imageUrl: '/images/Projects/SME.png',
    projectUrl: '/projects/project1',
  },
  {
    title: 'Omada — Networking App',
    subtitle:
      'A cross-platform mobile app for sharing and organising contact details, built in 12 weeks for UTS Software Innovation Studio.',
    imageUrl: '/images/Projects/Omada.png',
    projectUrl: '/projects/project5',
  },
  {
    title: 'MEP Supports Tool',
    subtitle:
      'A Navisworks plugin for Hilti that automates BIM support recommendations for faster quotations.',
    imageUrl: '/images/Projects/MEP.avif',
    projectUrl: '/projects/project2',
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
          <p className="text-lg lg:text-xl text-base-content mb-8">
            Below are some projects I&apos;ve worked on. Click to find out more!
          </p>
          <Carousel responsive={responsive}>
            {projects.map((project) => (
              <div key={project.projectUrl} className="p-4">
                <div
                  className="bg-base-100 rounded-lg shadow-md overflow-hidden h-full flex flex-col border border-soft"
                  style={{ height: '420px' }}
                >
                  <Link href={project.projectUrl} className="flex flex-col h-full group">
                    <div className="relative w-full h-48 flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-base-content text-sm lg:text-base leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="text-primary font-medium mt-4 group-hover:underline">
                        View project →
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
