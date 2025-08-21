import Link from 'next/link';
import Image from 'next/image';
import ProjectMetadata from '@/components/ProjectMetadata';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        
        
        {/* Photo Section */}
        <div className="flex justify-center mb-4">
          <div className="w-64 h-80 bg-gray-100 relative overflow-hidden rounded-lg">
            <Image src="/photo.jpg" alt="Beverly Qin" fill className="object-cover" priority />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-8 text-center">
            <div className="max-w-lg mx-auto mb-6">
              <p className="text-gray-700 leading-relaxed">
              Master's student in Computer Science at Columbia University with a background in Architecture from Pratt Institute. 
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            I design systems that bridge the digital and physical, drawing from my background in architecture and computer science. I'm especially interested in spatial computing, human–AI interaction, and playful simulations
            Before shifting into computer science, I trained as an architectural designer at Pratt Institute, where I explored how computational design and interactive technologies can reshape built environments and human experiences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Outside of work, I enjoy bouldering, traveling, and capturing spaces and cultures through photography.
            </p>
          </div>

          <div className="bg-white p-8 text-center">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Programming</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• TypeScript</li>
                  <li>• C/C++</li>
                  <li>• Java</li>
                  <li>• Python</li>
                  <li>• SQL</li>
                  <li>• React</li>
                  <li>• Node.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Graphics</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Unreal Engine</li>
                  <li>• Unity 3D</li>
                  <li>• Blender</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Vray</li>
                  <li>• Enscape</li>
                  <li>• Twinmotion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Design</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Figma</li>
                  <li>• Rhino</li>
                  <li>• Grasshopper</li>
                  <li>• Revit</li>
                  <li>• AutoCAD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 text-center">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Contact
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm always interested in discussing new opportunities, collaborations, or interesting problems.
              <br />
              Feel free to reach out if you'd like to connect.
            </p>
            <div className="space-y-3 text-gray-700 flex flex-col items-center">
              <a href="mailto:qinbeverly@gmail.com" className="flex items-center space-x-3 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/beverly-qin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/beverlyqin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
