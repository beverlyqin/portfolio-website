import Link from 'next/link';
import Image from 'next/image';

interface ArchitectureProject {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imagePlaceholder: string;
  tags: string[];
}

interface ArchitectureProjectCardProps {
  project: ArchitectureProject;
  imageZoom?: number;
}

export default function ArchitectureProjectCard({ project, imageZoom = 1 }: ArchitectureProjectCardProps) {
  const cardContent = (
    <div className="aspect-square bg-white relative overflow-hidden">
      <div className="w-full h-3/4 bg-white relative overflow-hidden rounded-3xl">
        {project.imageSrc ? (
          <div className="w-full h-full relative overflow-hidden">
            <Image 
              src={project.imageSrc} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ 
                transform: `scale(${imageZoom})`,
                transformOrigin: 'center'
              }}
            />
          </div>
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
          {project.tags.map((tag, index) => (
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

  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="hover:shadow-lg transition-shadow duration-200">
        {cardContent}
      </div>
    </Link>
  );
}
