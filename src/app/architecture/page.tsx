 

export default function Architecture() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Architecture
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              System Design Patterns
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementation of scalable software architecture patterns including microservices, 
              event-driven architecture, and distributed systems design principles.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">System Architecture Diagram</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Database Architecture
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Design and optimization of database schemas, query performance, and data modeling 
              for high-throughput applications and complex data relationships.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Database Schema Design</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Cloud Infrastructure
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Deployment and management of cloud-native applications using containerization, 
              orchestration, and infrastructure-as-code practices.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Cloud Infrastructure Map</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
