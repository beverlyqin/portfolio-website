import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  linkToComputation?: boolean;
}

export default function ProjectCard({ project, linkToComputation = false }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="w-full h-80 bg-white mb-4 relative overflow-hidden">
        {project.imageSrc ? (
          project.id === "vr-simulation" ? (
            <video 
              src={project.imageSrc} 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            />
          ) : (
            <Image 
              src={project.imageSrc} 
              alt={project.title} 
              fill 
              className={project.id === "chat-application" ? "object-contain" : "object-cover"} 
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">{project.imagePlaceholder}</span>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-black mb-2 text-center">{project.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (linkToComputation) {
    return (
      <Link href="/computation" className="block">
        <div className="bg-white p-6 hover:shadow-lg transition-shadow duration-200">
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="bg-white p-6 hover:shadow-lg transition-shadow duration-200">
        {cardContent}
      </div>
    </Link>
  );
}
