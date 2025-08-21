import Link from 'next/link';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function ChatApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Networked Chat Client-Server Application</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
          {/* Project Metadata */}
          <ProjectMetadata
            myRole="Developer"
            year="2025"
            contribution="Development, Testing"
            tools="C, Network Programming"
            team="Sanjay Kumar"
          />
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            Developed a command-line chat client in C that communicates with a server over TCP sockets. The client supports real-time message broadcasting, allowing multiple clients to exchange messages through a central server.
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">Socket Connections</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Created and managed TCP sockets, handling both connection setup and graceful shutdowns</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Implemented username validation with length limits and server-side handshake</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Message Handling</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Sent and received messages via send_with_length and recv_with_length protocols, ensuring null-terminated string handling</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Event Loop</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Used fd_set and select() to multiplex input from both stdin and the network socket, enabling simultaneous user input and server message reception</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Error Handling</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Robust checks for invalid IPs, ports, and failed system calls, with clear error reporting</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Session Control</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">• Supported commands like bye to exit gracefully, along with detecting server disconnects or crashes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="chat-application" />
      
      <BackToTop />
    </div>
  );
}
