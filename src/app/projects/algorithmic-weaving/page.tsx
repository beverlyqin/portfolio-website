import Link from 'next/link';
import Image from 'next/image';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function AlgorithmicWeavingPage() {
  return (
    <div className="project-page min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Robotic Arm Image Fabrication with Langton’s Ant</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
                    {/* Project Metadata */}
          <ProjectMetadata
            myRole="Designer, Developer"
            year="2022"
            contribution="Research, Design, Development"
            tools="Python, Grasshopper, Rhino"
            team="Seo Yoon Lee"
          />
        </div>

        {/* Project Image */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Media</h2>
          <div className="w-full h-96 bg-gray-100 relative overflow-hidden">
            <Image 
              src="/algorithmic-weaving.png" 
              alt="Algorithmic Weaving" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            Designed and programmed a robotic arm system capable of fabricating images using thread, inspired by agent-based simulation models such as Langton&apos;s Ant and Conway&apos;s Game of Life. The project explored how simple algorithmic rules can generate complex emergent patterns, and how these rules can be physically embodied in robotic fabrication.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Holder 4 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <Image 
                src="/weave1.jpg" 
                alt="Weave 1" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Video Holder 1 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/weave1.jpg"
              >
                <source src="/weave6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Image Holder 5 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <Image 
                src="/weave3.png" 
                alt="Weave 3" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Video Holder 2 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/weave3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Image Holder 6 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <Image 
                src="/weave4.jpg" 
                alt="Weave 4" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Video Holder 3 */}
            <div className="w-full h-72 bg-gray-100 relative overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/weave.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="algorithmic-weaving" />
      
      <BackToTop />
    </div>
  );
}
