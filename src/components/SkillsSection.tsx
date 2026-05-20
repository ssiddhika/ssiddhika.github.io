import Image from 'next/image';

const SkillsSection = () => {
  return (
    <div className="section-card py-12 lg:py-16">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
          Skills
        </h2>
        <p className="text-lg lg:text-xl text-base-content mb-8 text-center">
          The skills, tools, and technologies I have experience in:
        </p>
        <div className="mb-12">
          <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4 text-center">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { src: "/images/TechStack/JavaScript.svg", alt: "JavaScript" },
              { src: "/images/TechStack/Typescript.svg", alt: "TypeScript" },
              { src: "/images/TechStack/React.svg", alt: "React" },
              { src: "/images/TechStack/Nextjs.svg", alt: "Next.js" },
              { src: "/images/TechStack/Node.svg", alt: "Node.js" },
              { src: "/images/TechStack/Tailwind.svg", alt: "Tailwind CSS" },
              { src: "/images/TechStack/Java.svg", alt: "Java" },
              { src: "/images/TechStack/Python.svg", alt: "Python" },
              { src: "/images/TechStack/CSharp.svg", alt: "C#" },
              { src: "/images/TechStack/C++.svg", alt: "C++" },
              { src: "/images/TechStack/html.svg", alt: "HTML" },
              { src: "/images/TechStack/MongoDB.svg", alt: "MongoDB" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center transition-transform transform hover:scale-90 hover:-translate-y-2">
                <Image src={tech.src} alt={tech.alt} width={64} height={64} />
                <p className="mt-2 text-base-content">{tech.alt}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xl lg:text-2xl font-semibold text-primary mb-4 text-center">
            Other Skills
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {[
              { src: "/images/TechStack/Adobe.svg", alt: "Adobe Creative Suite" },
              { src: "/images/TechStack/Figma.svg", alt: "Figma" },
              { src: "/images/TechStack/Jira.svg", alt: "Jira" },
              { src: "/images/TechStack/Confluence.svg", alt: "Confluence" },
             
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center transition-transform transform hover:scale-90 hover:-translate-y-2">
                <Image src={skill.src} alt={skill.alt} width={64} height={64} />
                <p className="mt-2 text-base-content">{skill.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
