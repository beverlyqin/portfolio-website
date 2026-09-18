import Link from 'next/link';
import Image from 'next/image';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function TestPrepPlatformPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Personalized Test Prep Insights Platform</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
                    {/* Project Metadata */}
          <div className="bg-white p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-500 text-sm font-medium">my role</span>
                  <p className="text-gray-900 font-medium">Software Engineer Intern</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm font-medium">year</span>
                  <p className="text-gray-900 font-medium">2025</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm font-medium">contribution</span>
                  <p className="text-gray-900 font-medium">Research, Design, Development</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-500 text-sm font-medium">tools</span>
                  <p className="text-gray-900 font-medium">React, TypeScript, TanStack Query</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Media</h2>
          <div className="w-full h-96 bg-gray-100 relative overflow-hidden">
            <Image 
              src="/mistake.png" 
              alt="Test Prep Platform" 
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
             Worked as a Software Engineer Intern on Mistake Note, an AI-powered web platform designed to help students reflect on mistakes and improve standardized test preparation. My work focused on building both the intelligent insight engine and the frontend experience that supported reflection workflows, analytics, and data-driven improvements.
            </p>
            <p className="text-gray-600 mt-4 text-sm">
              Note: Code is private on the company&apos;s GitHub
            </p>
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="test-prep-platform" />
      
      <BackToTop />
    </div>
  );
}
