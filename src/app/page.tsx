import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto mb-16 max-w-5xl px-6 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
              Hi, I&apos;m Beverly
            </h2>
            <p className="max-w-md text-base leading-relaxed text-gray-600">
              I design systems that bridge the digital and physical, drawing from my background in computer science and architecture.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-80 w-64 overflow-hidden rounded-3xl bg-gray-100 sm:h-[22rem] sm:w-72">
              <Image src="/photo2.png" alt="Beverly Qin" fill className="object-cover scale-100" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <div className="mb-6 flex items-end justify-between border-b border-black pb-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-black">Selected work</h2>
          <p className="text-sm text-gray-500">Scroll to explore →</p>
        </div>
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} compact />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <div className="grid gap-6 border-t border-black pt-4 md:grid-cols-[1fr_2fr]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-black">Contact</h2>
          <div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-700">
              <a href="mailto:qinbeverly@gmail.com" className="underline decoration-1 underline-offset-4 hover:text-black">Email</a>
              <a href="https://www.linkedin.com/in/beverly-qin" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-black">LinkedIn</a>
              <a href="https://github.com/beverlyqin" target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-4 hover:text-black">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </main>
  );
}
