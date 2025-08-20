import Link from 'next/link';

export default function Computation() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="pt-44 pb-12">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-5xl font-bold tracking-wider text-black mb-8">
              BEVERLY QIN
            </h1>
          </Link>
          
          {/* Navigation Tabs */}
          <nav className="flex justify-center space-x-16 mb-16">
            <Link 
              href="/computation" 
              className="text-lg font-light text-black border-b-2 border-black pb-1"
            >
              COMPUTATION
            </Link>
            <Link 
              href="/architecture" 
              className="text-lg font-light text-black hover:text-gray-600 transition-colors duration-200"
            >
              ARCHITECTURE
            </Link>
            <Link 
              href="/about" 
              className="text-lg font-light text-black hover:text-gray-600 transition-colors duration-200"
            >
              ABOUT
            </Link>
          </nav>
        </div>
      </header>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Computation
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Algorithmic Complexity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Research and development of efficient algorithms for complex computational problems, 
              focusing on time and space complexity optimization.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Algorithm Visualization</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Machine Learning Models
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Development of neural network architectures and training methodologies for 
              pattern recognition and predictive analytics.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">ML Model Architecture</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Optimization Techniques
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementation of mathematical optimization algorithms including linear programming, 
              genetic algorithms, and simulated annealing for complex problem solving.
            </p>
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Optimization Results</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
