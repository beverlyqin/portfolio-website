import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  linkToComputation?: boolean;
}

export default function ProjectCard({ project, linkToComputation = false }: ProjectCardProps) {
  const cardContent = (
    <div className="aspect-square bg-white relative overflow-hidden">
      <div className="w-full h-3/4 bg-white relative overflow-hidden">
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
      <div className="h-1/4 p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black mb-1 text-center truncate">{project.title}</h3>
        <p className="text-gray-600 text-xs leading-relaxed text-center line-clamp-2">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1 justify-center">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-1.5 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (linkToComputation) {
    return (
      <Link href="/computation" className="block">
        <div className="hover:shadow-lg transition-shadow duration-200">
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="hover:shadow-lg transition-shadow duration-200">
        {cardContent}
      </div>
    </Link>
  );
}
