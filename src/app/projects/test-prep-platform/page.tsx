import Link from 'next/link';
import Image from 'next/image';
import ProjectMetadata from '@/components/ProjectMetadata';

export default function TestPrepPlatformPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
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
          <ProjectMetadata
            myRole="Designer, Developer"
            year="2024"
            contribution="Research, Design, Development"
            tools="React, TypeScript, TanStack Query"
          />
        </div>

        {/* Project Image */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Media</h2>
          <div className="w-full h-96 bg-gray-100 relative overflow-hidden">
            <Image 
              src="/test-prep-platform.png" 
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
              [Add your specific project details here. This page can be customized with content specific to the test prep platform project.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
