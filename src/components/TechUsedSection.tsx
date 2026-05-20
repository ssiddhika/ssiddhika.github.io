const skillGroups = [
  {
    label: 'Languages',
    variant: 'pink',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C#',
      'SQL',
      'HTML',
      'CSS',
      'C++',
    ],
  },
  {
    label: 'Frameworks',
    variant: 'lavender',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', '.NET'],
  },
  {
    label: 'Tools',
    variant: 'blue',
    skills: [
      'Figma',
      'Git',
      'Jira',
      'Confluence',
      'Adobe Creative Suite',
      'Autodesk Navisworks',
    ],
  },
  {
    label: 'AI',
    variant: 'peach',
    skills: ['Claude', 'ChatGPT', 'Gemini', 'Cursor', 'Lovable', 'NotebookLM', 'Rovo'],
  },
];

const TechUsedSection = () => {
  return (
    <section className="home-tech-section" aria-label="Some tech I've used">
      <h2 className="home-tech-title font-heading">Some tech I&apos;ve used</h2>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="tech-group-label">{group.label}</p>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className={`tech-chip tech-chip--${group.variant}`}>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechUsedSection;
