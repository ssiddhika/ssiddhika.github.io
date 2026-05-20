import Link from 'next/link';

const featuredProjects = [
  {
    title: 'SME Growth Recommender Platform',
    outcome:
      'Led a team of 8 for Business NSW — funded for further development after launch.',
    projectUrl: '/projects/project1',
  },
  {
    title: 'MEP Supports Analysis Tool',
    outcome:
      'C# Navisworks plugin for Hilti, live in 12 weeks and cut manual quoting work.',
    projectUrl: '/projects/project2',
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="home-projects-section">
      <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-8">
        Some things I&apos;ve built
      </h2>
      <ul className="space-y-4">
        {featuredProjects.map((project) => (
          <li key={project.title}>
            <Link href={project.projectUrl} className="project-row group">
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg lg:text-xl font-semibold text-[var(--color-text)] group-hover:text-portfolio-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mt-1 text-sm lg:text-base">{project.outcome}</p>
              </div>
              <span className="project-row-arrow" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/projects" className="text-primary font-medium hover:underline">
          All projects →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
