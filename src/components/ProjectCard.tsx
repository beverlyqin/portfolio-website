import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  linkToComputation?: boolean;
  compact?: boolean;
}

export default function ProjectCard({ project, linkToComputation = false, compact = false }: ProjectCardProps) {
  const cardContent = (
    <article className={`group ${compact ? 'w-72 flex-none sm:w-80' : ''}`}>
      <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden rounded-3xl">
        {project.imageSrc ? (
          project.id === "vr-simulation" ? (
            <video 
              src={project.imageSrc} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
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
              className={`${project.id === "chat-application" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.025]`}
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-400 text-sm">{project.imagePlaceholder}</span>
          </div>
        )}
      </div>
      <div className={`${compact ? 'px-1 pt-3' : 'grid grid-cols-[1fr_auto] items-start gap-x-4 pt-4'}`}>
        <h3 className="text-lg font-semibold text-black leading-tight">{project.title}</h3>
        {!compact && <span className="pt-0.5 text-xs text-gray-400">↗</span>}
        <p className={`${compact ? 'mt-1 line-clamp-2 text-sm leading-relaxed text-gray-600' : 'col-span-2 mt-2 text-sm leading-relaxed text-gray-600'}`}>
          {project.description}
        </p>
        {!compact && (
          <div className="col-span-2 mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-1.5 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (linkToComputation) {
    return (
      <Link href="/computation" className="block">
        {cardContent}
      </Link>
    );
  }

  return (
    <Link href={`/projects/${project.id}`} className="block">
      {cardContent}
    </Link>
  );
}
