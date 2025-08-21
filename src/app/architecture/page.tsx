import ArchitectureProjectCard from '@/components/ArchitectureProjectCard';

// Placeholder architecture projects
const architectureProjects = [
  {
    id: "arch-project-1",
    title: "SaltBound Nomad",
    description: "The project proposes a nomadic desalination infrastructure that restores shorelines with salt. ",
    imageSrc: "/salt.jpg",
    imagePlaceholder: "SaltBound Nomad",
    tags: ["Rhino", "Grasshopper", "Blender", "Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "arch-project-3",
    title: "Specular Field",
    description: "Lower East Side museum uses glass, reflection, and metal to stitch neighborhood history into the streetscape. ",
    imageSrc: "/glasses.png",
    imagePlaceholder: "Architecture Project 4",
    tags: ["Rhino", "Vray",, "Adobe Illustrator", "Enscape"]
  },
  {
    id: "arch-project-2", 
    title: "INSIDE-OUT",
    description: "The project consists of a community center that also functions as an emergency shelter in the event of extreme weather conditions.",
    imageSrc: "/metal.png",
    imagePlaceholder: "Architecture Project 2",
    tags: ["Rhino", "Enscape", "Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: "arch-project-4",
    title: "Airflow Alchemy", 
    description: "A retirement home conceived as a sequence of microclimates, using orientation and curved surfaces to steer wind, tune sun and ventilation.",
    imageSrc: "/air.jpg",
    imagePlaceholder: "Architecture Project 3",
    tags: ["Rhino", "Enscape", "Adobe Illustrator", "Adobe Photoshop"]
  }
];

export default function Architecture() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {architectureProjects.map((project) => (
            <ArchitectureProjectCard 
              key={project.id} 
              project={project} 
              imageZoom={project.id === "arch-project-4" ? 1.2 : 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
