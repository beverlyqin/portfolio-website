import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        
  
        {/* Photo Section */}
        <div className="flex justify-center mb-4">
          <div className="w-64 h-80 bg-gray-100 relative overflow-hidden rounded-3xl">
            <Image src="/photo.jpg" alt="Beverly Qin" fill className="object-cover" priority />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-8 text-left">
            <h1 className="text-3xl font-semibold text-black mb-6">Hi, I&apos;m Beverly 👋</h1>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              I&apos;m a <strong className="font-semibold text-black">software engineer and designer</strong> based in New York, with a background in computer science, architecture, and computational design. I&apos;m interested in building technology that connects the digital and physical worlds, especially in projects that combine technical and creative thinking.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              My architecture background shaped how I approach complex systems and design problems. Today, I work across <strong className="font-semibold text-black">software engineering, machine learning, and computer vision</strong>, bringing a computational and design-oriented perspective to the things I build.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              Most recently, I interned as a Software Development Engineer at <strong className="font-semibold text-black">AWS</strong>, building systems for secure AI-agent access to backend data. I&apos;ve also developed Unity-based VR applications for robotics and rehabilitation <strong className="font-semibold text-black">(RoAR Lab)</strong> research at Columbia.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              Outside of work, I enjoy traveling, photography, art, and design, and I&apos;m always looking for new places, exhibitions, buildings, and ideas to explore.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12">
            <section className="order-2 border-t border-black pt-4">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-black">
                Experience
              </h2>
              <div className="space-y-8">
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">Software Development Engineer Intern</h3>
                    <p className="text-sm text-gray-600">Jun 2026 – Aug 2026</p>
                  </div>
                  <p className="text-sm text-gray-700">Amazon Web Services · Seattle, WA</p>
                </article>
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">Graduate Research Assistant</h3>
                    <p className="text-sm text-gray-600">Aug 2025 – May 2026</p>
                  </div>
                  <p className="text-sm text-gray-700">Robotics and Rehabilitation Lab, Columbia University · New York, NY</p>
                </article>
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">Project Management Intern</h3>
                    <p className="text-sm text-gray-600">Feb 2024 – Feb 2025</p>
                  </div>
                  <p className="text-sm text-gray-700">STV · New York, NY</p>
                </article>
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">Automotive Design Innovation Intern</h3>
                    <p className="text-sm text-gray-600">May 2023 – Aug 2023</p>
                  </div>
                  <p className="text-sm text-gray-700">Jidu - Baidu EV subsidiary · Shanghai, China</p>
                </article>
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">Architecture Intern</h3>
                    <p className="text-sm text-gray-600">Aug 2022 – Dec 2022</p>
                  </div>
                  <p className="text-sm text-gray-700">Dessins LLC · New York, NY</p>
                </article>
              </div>
            </section>

            <section className="order-1 border-t border-black pt-4">
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-black">
                Education
              </h2>
              <div className="space-y-8">
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">M.S. in Computer Science</h3>
                    <p className="text-sm text-gray-600">2025 – 2027</p>
                  </div>
                  <p className="text-sm text-gray-700">Columbia University · New York, NY</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">Machine Learning track</p>
                </article>
                <article>
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold text-black">B.Arch. in Architecture</h3>
                    <p className="text-sm text-gray-600">2019 – 2024</p>
                  </div>
                  <p className="text-sm text-gray-700">Pratt Institute · Brooklyn, NY</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">Minor in Construction Management</p>
                </article>
              </div>
            </section>
          </div>

          <section className="mx-auto w-full max-w-5xl border-t border-black pt-4 text-left">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-black">
              Contact
            </h2>
            <p className="text-base leading-relaxed text-gray-700 md:whitespace-nowrap">
              I&apos;m always open to new opportunities, collaborations, and interesting problems.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-gray-700 [&_svg]:hidden">
              <a href="mailto:bq2159@columbia.edu" className="text-sm underline decoration-1 underline-offset-4 hover:text-black">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/beverly-qin" target="_blank" rel="noopener noreferrer" className="text-sm underline decoration-1 underline-offset-4 hover:text-black">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/beverlyqin" target="_blank" rel="noopener noreferrer" className="text-sm underline decoration-1 underline-offset-4 hover:text-black">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
