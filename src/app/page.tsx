 
import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-8 mb-20 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 items-start">
          {/* Left Side - Introduction Text */}
          <div className="space-y-6 self-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Hi, I'm Beverly
            </h2>
            <div className="space-y-10 text-base leading-relaxed text-gray-600">
              
              <p className="text-xl md:text-xl font-semibold">
              Passionate about building systems in both physical and digital spaces to enable new forms of interaction, perception, and creativity.
              </p>
            </div>
          </div>
          
          {/* Right Side - Image Holder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-gray-100 relative overflow-hidden">
              <Image src="/photo.jpg" alt="Beverly Qin" fill className="object-cover scale-140" priority />
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
          {/* Project Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Machine Learning Algorithm</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              An innovative approach to pattern recognition using neural networks and optimization techniques.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Distributed Systems Architecture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Scalable microservices architecture designed for high-performance data processing applications.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Data Visualization Platform</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Interactive dashboard for exploring and analyzing complex datasets with real-time updates.
            </p>
          </div>

          {/* Project Card 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Blockchain Implementation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Secure and efficient blockchain protocol with smart contract capabilities and consensus mechanisms.
            </p>
          </div>

          {/* Project Card 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Computer Vision System</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advanced image recognition system using deep learning for real-time object detection and classification.
            </p>
          </div>

          {/* Project Card 6 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Optimization Framework</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mathematical optimization library with multiple algorithms for solving complex computational problems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
