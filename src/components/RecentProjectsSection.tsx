import ProjectCard from './ProjectCard';

const RecentProjectsSection = () => {
  const projects = [

    {
      title: 'AI in Space Workshop',
      description: 'Facilitated a holiday workshop with Space Machines Company focused on AI, spacecraft design and ethics.',
      technologies: ['Adobe Photoshop', 'Adobe Firefly'],
      imageUrl: '/images/Projects/Space.avif',
      projectUrl: '/projects/project4'
    },
    {
      
      title: 'SME Growth Recommender Platform',
      description: 'Front end demonstrator built for SMEs@UTS as part of Software Development Studio.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'HTML', 'PayloadCMS', 'MongoDB'],
      imageUrl: '/images/Projects/SME.png',
      projectUrl: '/projects/project1'
    },
    {
        title: 'MEP Support Suggestion Tool',
        description: 'Plugin created for Autodesk Navisworks to analyse MEP (mechanical, electrical, and plumbing) components',
        technologies: ['C#', 'Autodesk Navisworks', 'Autodesk Revit', 'Navisworks API'],
        imageUrl: '/images/Projects/MEP.avif',
                projectUrl: '/projects/project2'
      },
      {
        title: 'Personal Portfolio',
        description: 'Personalised developer portfolio website, created to showcase my projects and experience.',
        technologies: ['JavaScript', 'Node.js', 'HTML', 'Tailwind CSS', 'DaisyUI', 'Next.js'],
        imageUrl: '/images/Projects/Portfolio.png',
        projectUrl: '/projects/project3'
      },

    // Add more projects as needed
  ];

  return (
    <div className="section-card py-12 lg:py-16">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
          Recently
        </h2>
        <p className="text-lg lg:text-xl text-base-content mb-8 text-center">
          Check out some things I&apos;ve recently completed!
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;
