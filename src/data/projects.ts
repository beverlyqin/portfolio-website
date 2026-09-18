export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imagePlaceholder: string;
  imageSrc?: string; // path under public/
}

export const projects: Project[] = [
  {
    id: "diffusion-image-editing",
    title: "Diffusion Image Editing",
    description: "Image-to-image translation, inpainting, prompt-guided edits, visual anagrams, and hybrid images with DeepFloyd IF.",
    tags: ["PyTorch", "Diffusion Models", "Image Editing", "Generative AI"],
    imagePlaceholder: "Project Image",
    imageSrc: "/diffusion-image-editing-anagram-flip.gif"
  },
  {
    id: "flow-matching",
    title: "Flow Matching from Scratch",
    description: "A time- and class-conditioned flow-matching UNet trained from scratch to generate MNIST digits.",
    tags: ["PyTorch", "UNet", "Flow Matching", "Generative AI"],
    imagePlaceholder: "Project Image",
    imageSrc: "/flow-matching/part2_class_samples_epoch10.png"
  },
  {
    id: "diffusion-flow-matching",
    title: "Diffusion Sampling & Guidance",
    description: "Generative image experiments with DeepFloyd IF diffusion, denoising, and classifier-free guidance.",
    tags: ["PyTorch", "Diffusion Models", "DeepFloyd IF", "Generative AI"],
    imagePlaceholder: "Project Image",
    imageSrc: "/diffusion-flow-matching/stage2_1_steps5.png"
  },
  {
    id: "neural-radiance-fields",
    title: "Neural Radiance Fields",
    description: "Neural fields for 2D image fitting and novel-view synthesis from multi-view images.",
    tags: ["PyTorch", "NeRF", "Computer Vision", "Neural Rendering"],
    imagePlaceholder: "Project Image",
    imageSrc: "/neural-radiance-fields/part2_lego_spherical.gif"
  },
  {
    id: "structure-from-motion",
    title: "Simple Structure from Motion",
    description: "A sparse 3D reconstruction pipeline from two images, using SIFT, RANSAC pose estimation, and triangulation.",
    tags: ["Python", "OpenCV", "SIFT", "3D Vision"],
    imagePlaceholder: "Project Image",
    imageSrc: "/structure-from-motion/step5_v1.png"
  },
  {
    id: "automatic-feature-matching",
    title: "Automatic Feature Matching Across Images",
    description: "A computer vision pipeline that detects Harris corners, builds local descriptors, and matches corresponding features between image pairs.",
    tags: ["Python", "NumPy", "scikit-image", "Computer Vision"],
    imagePlaceholder: "Project Image",
    imageSrc: "/automatic-feature-matching/set1_step4_matches.png"
  },
  {
    id: "prokudin-gorskii-alignment",
    title: "Prokudin-Gorskii Image Alignment",
    description: "A computer vision pipeline that reconstructs color photographs from three-channel glass plate scans using image alignment and multi-scale search.",
    tags: ["Python", "NumPy", "scikit-image", "Computer Vision"],
    imagePlaceholder: "",
    imageSrc: "/prokudin-gorskii/emir_pyramid_ncc.jpg"
  },
  {
    id: "algorithmic-weaving",
    title: "Robotic Arm Image Fabrication",
    description: "A robotic arm fabrication project driven by cellular automata algorithms to generate thread-based images.",
    tags: ["Python", "Grasshopper", "Rhino"],
    imagePlaceholder: "Project Image",
    imageSrc: "/algorithmic-weaving.png"
  },
  {
    id: "crowd-dispersal",
    title: "Particle-Based Crowd Dispersal Model",
    description: "A Dynamic Particle Dispersal Simulation for Crowd Flow Optimization in Madrid's Plaza Mayor Christmas Market using C and PCA Analysis",
    tags: ["C", "Python", "PCA Analysis"],
    imagePlaceholder: "Project Image",
    imageSrc: "/crowd-dispersal.png"
  },
  {
    id: "vr-simulation",
    title: "VR Simulation for Autonomous Vehicles",
    description: "A VR simulation built in Unreal Engine to visualize future transit systems and support Jidu's autonomous vehicle design strategy.",
    tags: ["C++", "Rhino", "Unreal Engine"],
    imagePlaceholder: "Project Image",
    imageSrc: "/vr-simulation.mp4"
  },
  {
    id: "minishell",
    title: "Unix-Style Minishell Implementation",
    description: "A minishell project in C that replicates core shell functionality with built-in commands, signal handling, and external process execution.",
    tags: ["C", "Bash", "Shell"],
    imagePlaceholder: "Project Image",
    imageSrc: "/minishell.png"
  },
  {
    id: "chat-application",
    title: "Networked Chat Client-Server Application",
    description: "A simple client-server chat program that facilitates group messaging across multiple clients on the system.",
    tags: ["C", "Bash", "Shell"],
    imagePlaceholder: "Project Image",
    imageSrc: "/chat-application.png"
  },
];
