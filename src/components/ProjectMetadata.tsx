interface ProjectMetadataProps {
  myRole: string;
  year: string;
  contribution: string;
  tools: string;
  team?: string;
}

export default function ProjectMetadata({ 
  myRole, 
  year, 
  contribution, 
  tools, 
  team = "[Add team members here]" 
}: ProjectMetadataProps) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <span className="text-gray-500 text-sm font-medium">my role</span>
            <p className="text-gray-900 font-medium">{myRole}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm font-medium">year</span>
            <p className="text-gray-900 font-medium">{year}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm font-medium">contribution</span>
            <p className="text-gray-900 font-medium">{contribution}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <span className="text-gray-500 text-sm font-medium">tools</span>
            <p className="text-gray-900 font-medium">{tools}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm font-medium">team</span>
            <p className="text-gray-900 font-medium">{team}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
