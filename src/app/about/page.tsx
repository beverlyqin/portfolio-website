 

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          About
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Background
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a computer scientist with a passion for solving complex problems through 
              innovative computational approaches and elegant software design. My journey in 
              computer science began with a fascination for algorithms and has evolved to 
              encompass a wide range of technologies and methodologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe in the power of clean, maintainable code and the importance of 
              understanding both the theoretical foundations and practical applications 
              of computer science principles.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Programming Languages</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Python, JavaScript, TypeScript</li>
                  <li>• Java, C++, Rust</li>
                  <li>• SQL, NoSQL databases</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">Technologies</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Machine Learning & AI</li>
                  <li>• Cloud Computing (AWS, GCP)</li>
                  <li>• Distributed Systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Contact
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm always interested in discussing new opportunities, collaborations, or 
              interesting problems. Feel free to reach out if you'd like to connect.
            </p>
            <div className="space-y-2 text-gray-700">
              <p>• Email: [your-email@example.com]</p>
              <p>• LinkedIn: [your-linkedin-profile]</p>
              <p>• GitHub: [your-github-username]</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
