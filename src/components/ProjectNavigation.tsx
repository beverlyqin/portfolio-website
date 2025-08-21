import Link from 'next/link';
import { projects } from '@/data/projects';

interface ProjectNavigationProps {
  currentProjectId: string;
}

export default function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  // Find the current project index
  const currentIndex = projects.findIndex(project => project.id === currentProjectId);
  
  // Get previous and next projects
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between py-8">
          {/* Previous Project */}
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">{prevProject.title}</span>
            </Link>
          ) : (
            <div className="w-24"></div>
          )}

          {/* Current Project Indicator */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Project</span>
            <span className="text-sm font-medium text-gray-900">
              {currentIndex + 1} of {projects.length}
            </span>
          </div>

          {/* Next Project */}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <span className="text-sm font-medium">{nextProject.title}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div className="w-24"></div>
          )}
        </div>
      </div>
      <div className="pb-12"></div>
    </div>
  );
}
