export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
}

export const projects: Project[] = [
  {
    id: "crowd-dispersal",
    title: "Particle-Based Crowd Dispersal Model",
    description: "A Dynamic Particle Dispersal Simulation for Crowd Flow Optimization in Madrid's Plaza Mayor Christmas Market using C and PCA Analysis",
    tags: ["C", "Python", "PCA Analysis"],
    imagePlaceholder: "Project Image"
  },
  {
    id: "test-prep-platform",
    title: "Personalized Test Prep Insights Platform",
    description: "A reflection data pipeline designed to surface learning patterns, deliver personalized feedback, and guide preparation strategies",
    tags: ["React", "REST APIs", "TypeScript", "TanStack Query", "Gemini 2.5 Flash API"],
    imagePlaceholder: "Project Image"
  },
  {
    id: "algorithmic-weaving",
    title: "Algorithmic Weaving: Robotic Arm Image Fabrication",
    description: "A robotic arm fabrication project driven by cellular automata algorithms to generate thread-based images.",
    tags: ["Python", "Grasshopper", "Rhino"],
    imagePlaceholder: "Project Image"
  },
  {
    id: "minishell",
    title: "Unix-Style Minishell Implementation",
    description: "A minishell project in C that replicates core shell functionality with built-in commands, signal handling, and external process execution.",
    tags: ["C"],
    imagePlaceholder: "Project Image"
  },
  {
    id: "chat-application",
    title: "Networked Chat Client-Server Application",
    description: "A simple client-server chat program that facilitates group messaging across multiple clients on the system.",
    tags: ["C"],
    imagePlaceholder: "Project Image"
  },
  {
    id: "vr-simulation",
    title: "VR Simulation for Autonomous Vehicles",
    description: "A VR simulation built in Unreal Engine to visualize future transit systems and support Jidu's autonomous vehicle design strategy.",
    tags: ["C++", "Rhino", "Unreal Engine"],
    imagePlaceholder: "Project Image"
  }
];
