import Image from 'next/image';
import Link from 'next/link';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

type Figure = readonly [string, string];
const figures = (files: string[], label: string): Figure[] => files.map((file) => [file, `${label} · ${file.replace('.png', '').replaceAll('_', ' ')}`]);
const steps = (prefix: string, values: number[], label: string) => figures(values.map((value) => `${prefix}${value}.png`), label);

const textStageOne = [
  ...steps('stage1_0_steps', [5, 20, 100], 'Walking building · low-resolution stage 1'), ...steps('stage1_1_steps', [5, 20, 100], 'Colosseum · low-resolution stage 1'), ...steps('stage1_2_steps', [5, 20, 100], 'Flamingo infrastructure · low-resolution stage 1'),
];
const textStageTwo = [
  ...steps('stage2_0_steps', [5, 20, 100], 'Walking building · upsampled stage 2'), ...steps('stage2_1_steps', [5, 20, 100], 'Colosseum · upsampled stage 2'), ...steps('stage2_2_steps', [5, 20, 100], 'Flamingo infrastructure · upsampled stage 2'),
];
const forwardNoise = steps('campanile_noisy_', [250, 500, 750], 'Forward-noised Campanile');
const gaussian = steps('campanile_gaussian_', [250, 500, 750], 'Gaussian denoising baseline');
const oneStep = steps('campanile_onestep_', [250, 500, 750], 'DeepFloyd one-step denoising');
const iterative = [...steps('campanile_iterative_step', [0, 5, 10, 15, 20], 'Iterative DDPM denoising'), ...figures(['campanile_iterative_final.png', 'campanile_onestep_final.png', 'campanile_gaussian_final.png'], 'Final reconstruction comparison')];
const unconditioned = figures(['sample1.png', 'sample2.png', 'sample3.png', 'sample4.png', 'sample5.png'], 'Plain iterative sampling');
const cfg = figures(['cfg_sample1.png', 'cfg_sample2.png', 'cfg_sample3.png', 'cfg_sample4.png', 'cfg_sample5.png'], 'Classifier-free guidance γ=7');

function Gallery({ items, cols = 'md:grid-cols-3' }: { items: Figure[]; cols?: string }) {
  return <div className={`grid grid-cols-1 ${cols} gap-5`}>{items.map(([file, caption]) => <figure key={file}><div className="relative aspect-square bg-gray-100"><Image src={`/diffusion-flow-matching/${file}`} alt={caption} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" /></div><figcaption className="mt-2 text-xs text-gray-500">{caption}</figcaption></figure>)}</div>;
}
function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section className="bg-white p-8 mb-8"><h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>{children}</section>; }
function Copy({ children }: { children: React.ReactNode }) { return <div className="space-y-4 leading-relaxed text-gray-600">{children}</div>; }

export default function DiffusionFlowMatchingPage() {
  return <div className="project-page min-h-screen bg-white"><div className="max-w-6xl mx-auto px-6 py-12">
    <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Projects</Link>
    <div className="bg-white p-8 mb-8"><h1 className="text-4xl font-bold text-gray-900 mb-4">Diffusion Sampling &amp; Guidance</h1><div className="w-full h-px bg-gray-300 mb-8" /><ProjectMetadata myRole="Developer" year="2026" contribution="Generative Modeling, Model Implementation, Training" tools="Python, PyTorch, DeepFloyd IF, Diffusers" team="Individual project" /></div>

    <Section title="Overview"><Copy><p>This project explores the DeepFloyd IF diffusion model through text-to-image generation, forward noising, denoising, iterative sampling, and classifier-free guidance.</p><p>The implementation choices, parameter sweeps, observations, and visual results below reflect the original report.</p></Copy></Section>

    <Section title="Text-to-Image Generation"><Copy><p>With random seed 88 and provided T5 prompt embeddings, I generated a walking building, a painting of the Colosseum, and desalination infrastructure occupied by flamingos. Each prompt is evaluated at 5, 20, and 100 inference steps.</p><p>Read each row from left to right as increasing denoising steps: 5, 20, then 100. Five steps produced muted or incomplete scenes; 20 improved coherence; and 100 gave the Colosseum more detail and gave the flamingo scene more architectural context. The walking-building prompt remained difficult at every setting.</p></Copy><h3 className="text-lg font-medium text-gray-900 mt-8 mb-2">Stage 1 · Low-resolution generation</h3><p className="text-sm leading-relaxed text-gray-600 mb-4">The first-stage outputs establish the composition and semantic content before upsampling.</p><Gallery items={textStageOne} /><h3 className="text-lg font-medium text-gray-900 mt-8 mb-2">Stage 2 · Upsampled results</h3><p className="text-sm leading-relaxed text-gray-600 mb-4">These are the corresponding stage-2 outputs, with stage 2 fixed at 20 steps.</p><Gallery items={textStageTwo} /></Section>

    <Section title="Diffusion Denoising"><Copy><p>The forward process adds scaled Gaussian noise to the Campanile test image. At t=250 the building remains recognizable; at t=500 it is severely degraded; and at t=750 it is close to pure noise.</p><p>Gaussian blur establishes why a classical baseline is insufficient: it softens low-noise inputs but cannot recover structure at higher noise levels. The DeepFloyd UNet one-step estimate is substantially better at t=250, but loses detail at t=500 and t=750. Iterative DDPM denoising, using strided timesteps from 990 to 0 with stride 30, progressively restores a sharper and more coherent image.</p></Copy><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Forward noise</h3><Gallery items={forwardNoise} /><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Gaussian-blur baseline</h3><Gallery items={gaussian} /><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">One-step DeepFloyd denoising</h3><Gallery items={oneStep} /><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Iterative denoising and final comparison</h3><Gallery items={iterative} cols="md:grid-cols-4" /></Section>

    <Section title="Sampling &amp; Classifier-Free Guidance"><Copy><p>Starting iterative denoising from pure noise produces recognizable but somewhat incoherent images. Classifier-free guidance (CFG) with γ=7 combines conditional and unconditional noise estimates, producing sharper, more coherent samples that better follow the prompt. The comparison below preserves both output sets.</p></Copy><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Plain diffusion samples</h3><Gallery items={unconditioned} cols="md:grid-cols-5" /><h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">CFG samples</h3><Gallery items={cfg} cols="md:grid-cols-5" /></Section>


  </div><ProjectNavigation currentProjectId="diffusion-flow-matching" /><BackToTop /></div>;
}
