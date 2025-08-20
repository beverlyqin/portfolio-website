'use client';

import Link from 'next/link';
import { useState } from 'react';
import ProjectMetadata from '@/components/ProjectMetadata';

export default function VRSimulationPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: '/jidu1.jpg', alt: 'VR Simulation Screenshot 1' },
    { src: '/jidu2.jpg', alt: 'VR Simulation Screenshot 2' },
    { src: '/jidu3.jpg', alt: 'VR Simulation Screenshot 3' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">VR Simulation for Autonomous Vehicles</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
          {/* Project Metadata */}
          <ProjectMetadata
            myRole="Designer, Developer, Researcher"
            year="2023"
            contribution="Research, Design, Development, Testing"
            tools="C++, Rhino, Unreal Engine, Blueprint Visual Scripting"
            team="Jidu Auto Advanced Design Team"
          />
        </div>

        {/* Overview Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              This project developed an immersive VR simulation environment in Unreal Engine to visualize and test future autonomous vehicle transit systems. The simulation serves as a strategic tool for Jidu Auto's autonomous vehicle design and urban planning initiatives, enabling stakeholders to experience and evaluate proposed transportation solutions in a realistic virtual environment.
            </p>
            <p className="text-gray-500 text-sm mt-4 italic">
              Note: I'm unable to disclose the actual VR environments developed for this project due to company policy, but the summary reflects my role and contributions.
            </p>
          </div>
        </div>

        {/* Project Video */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">VR Opening Scene</h2>
          <div className="w-full h-50 bg-gray-100 relative overflow-hidden ">
            <video 
              src="/vr-simulation.mp4" 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              controls
            />
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Problem Statement</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
            Autonomous vehicle adoption raises new questions around how advertising, retail, and passenger experience will evolve inside and around self-driving transit systems. Traditional visualization tools often fail to capture how digital billboards, in-car displays, and city-scale ad placements integrate into future autonomous mobility. There was a need for a VR simulation platform that could:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">• Visualize advertisement and media spaces within autonomous vehicle interiors</p>
              <p className="text-gray-600">• Model city-scale ad placements across dynamic, self-driving transit networks</p>
              <p className="text-gray-600">• Help designers and stakeholders assess passenger attention, visibility, and engagement</p>
              <p className="text-gray-600">• Support long-term planning of monetization strategies alongside vehicle and city design</p>
            </div>
          </div>
        </div>

        {/* Image Slider Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Project Gallery</h2>
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img src={image.src} alt={image.alt} className="w-3/4 h-80 object-cover rounded-lg mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
              onClick={prevImage}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
              onClick={nextImage}
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => goToImage(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Architecture Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Technical Architecture</h2>
          <div className="prose prose-gray max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Core Technologies</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Unreal Engine 5 - Real-time rendering and physics</p>
                  <p className="text-gray-600 text-sm">• C++ - Core simulation logic and performance-critical systems</p>
                  <p className="text-gray-600 text-sm">• Blueprint Visual Scripting - Rapid prototyping and iteration</p>
                  <p className="text-gray-600 text-sm">• Rhino/Grasshopper - Urban environment modeling</p>
                  <p className="text-gray-600 text-sm">• VR SDK Integration - HTC Vive and Oculus support</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Key Features</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Real-time traffic simulation with AI agents</p>
                  <p className="text-gray-600 text-sm">• Dynamic weather and lighting systems</p>
                  <p className="text-gray-600 text-sm">• Multi-user collaborative testing</p>
                  <p className="text-gray-600 text-sm">• Data logging and analytics</p>
                  <p className="text-gray-600 text-sm">• Modular scenario framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Development Methodology</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              The project followed an iterative development approach combining rapid prototyping with systematic validation:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phase 1: Environment Modeling</h3>
                <p className="text-gray-600 text-sm">
                Created conceptual vehicle interiors and city-scale layouts in Unreal Engine to serve as canvases for testing ad placements, optimizing geometry for real-time rendering.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phase 2: Traffic Simulation</h3>
                <p className="text-gray-600 text-sm">
                Prototyped in-car and urban ad placements (screens, panels, billboards) using parameterized layouts. Focused on visibility, user attention, and spatial constraints inside autonomous vehicle cabins and across city corridors.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phase 3: VR Integration</h3>
                <p className="text-gray-600 text-sm">
                Implemented immersive VR experiences in Unreal Engine to allow stakeholders to “sit” inside the vehicle or navigate city spaces, evaluating ad exposure and passenger interaction opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phase 4: Testing Framework</h3>
                <p className="text-gray-600 text-sm">
                  Delivered VR walkthroughs to design leads and stakeholders, enabling iteration on ad placement strategies and long-term planning for monetization within autonomous transit systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
