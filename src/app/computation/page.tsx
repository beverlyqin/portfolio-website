import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Computation() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Computation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} linkToComputation={false} />
          ))}
        </div>
      </section>
    </main>
  );
}
