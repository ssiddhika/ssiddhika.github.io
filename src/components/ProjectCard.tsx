import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, imageUrl, projectUrl }) => {
  return (
    <div className="flex flex-col bg-card rounded-portfolio shadow-soft border border-soft overflow-hidden">
      <div className="relative w-full h-52">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="w-full h-full" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-base-content mb-2">{title}</h3>
          <p className="text-base-content mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech: string, index: number) => (
              <span key={index} className="badge badge-primary">{tech}</span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link href={projectUrl} passHref>
            <span className="text-primary hover:underline cursor-pointer">Learn More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
