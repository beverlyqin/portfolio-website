export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Contact
        </h2>

        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Feel free to reach out for opportunities, collaborations, or questions.
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


