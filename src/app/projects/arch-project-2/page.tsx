'use client';

import Link from 'next/link';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function InsideOutPage() {
  return (
    <div className="project-page min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/architecture" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Architecture
        </Link>

        {/* Project Header */}
        <div className="bg-white p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">INSIDE-OUT</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
          {/* Project Metadata */}
          <ProjectMetadata
            myRole="Designer, Researcher"
            year="2023"
            contribution="Concept Development, Design, Visualization"
            tools="Rhino, Enscape, Adobe Illustrator, Adobe Photoshop"
            team="Individual Project"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white p-6 mb-4">
          {/* Embedded PDF */}
          <div className="w-full mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Portfolio</h2>
            <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="/port.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1"
                className="w-full h-full"
                title="INSIDE-OUT PDF"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="arch-project-2" />
      
      <BackToTop />
    </div>
  );
}
