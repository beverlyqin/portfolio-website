import Link from 'next/link';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function MinishellPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unix-Style Minishell Implementation</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
          {/* Project Metadata */}
          <ProjectMetadata
            myRole="Developer"
            year="2025"
            contribution="Development, Testing"
            tools="C, Bash, Shell"
            team="Sanjay Kumar"
          />
        </div>


        {/* Project Details */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            Built a lightweight, executable shell program in C that replicates core Unix shell functionality. The project required implementing process management, signal handling, and file system navigation at a low level, demonstrating practical systems programming skills.
            </p>
            <p className="text-gray-500 text-sm mt-4 italic">
              Note: Course assignment – full code not public, available upon request.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <div className="prose prose-gray max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Prompt</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Displays current working directory in real time using getcwd, with color-coded formatting (ANSI escape sequences)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Built-in Commands</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Implemented cd (with support for ~, nested paths, and quoted directory names) and exit without relying on exec</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Process Management</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Forks and executes external commands with exec, ensuring parent waits for child process completion</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Error Handling</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Robust error messages for all system calls (fork, exec, chdir, wait, malloc), preventing crashes</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Signal Handling</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Captures SIGINT (Ctrl+C) safely using async-safe signal handlers, returning the user to the prompt without terminating the shell</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Extra</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Quoted directory name support (cd &ldquo;some folder name&rdquo;)</p>
                  <p className="text-gray-600 text-sm">• Multi-process piping (chains of up to 64 processes, e.g. echo &ldquo;5\n3\n2&rdquo; | sort | uniq)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="minishell" />
      
      <BackToTop />
    </div>
  );
}
