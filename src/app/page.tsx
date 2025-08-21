 
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-8 mb-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 items-start">
          {/* Left Side - Introduction Text */}
          <div className="space-y-6 self-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Hi, I&apos;m Beverly
            </h2>
            <div className="space-y-10 text-base leading-relaxed text-gray-600">
              
              <p className="text-xl md:text-xl font-semibold">
              I design systems that bridge the digital and physical, drawing from my background in architecture and computer science.
              </p>
            </div>
          </div>
          
          {/* Right Side - Image Holder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-gray-100 relative overflow-hidden">
              <Image src="/photo2.png" alt="Beverly Qin" fill className="object-cover scale-100" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <BackToTop />
    </main>
  );
}
