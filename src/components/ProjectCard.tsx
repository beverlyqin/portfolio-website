import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  linkToComputation?: boolean;
}

export default function ProjectCard({ project, linkToComputation = false }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-400 text-sm">{project.imagePlaceholder}</span>
      </div>
      <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
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
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      {cardContent}
    </div>
  );
}
