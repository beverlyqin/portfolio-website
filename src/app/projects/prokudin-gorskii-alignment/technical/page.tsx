import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

type Result = { file: string; green: string; red: string };

const simpleResults: Result[] = [
  { file: 'monastery_l2n.jpg', green: '(2, -3)', red: '(2, 3)' },
  { file: 'monastery_ncc.jpg', green: '(2, -3)', red: '(2, 3)' },
  { file: 'tobolsk_l2n.jpg', green: '(3, 3)', red: '(3, 6)' },
  { file: 'tobolsk_ncc.jpg', green: '(3, 3)', red: '(3, 6)' },
];

const pyramidResults: Result[] = [
  { file: 'church_pyramid_ncc.jpg', green: '(4, 25)', red: '(-4, 58)' },
  { file: 'emir_pyramid_ncc.jpg', green: '(23, 49)', red: '(40, 107)' },
  { file: 'harvesters_pyramid_ncc.jpg', green: '(14, 60)', red: '(11, 123)' },
  { file: 'icon_pyramid_ncc.jpg', green: '(16, 40)', red: '(23, 90)' },
  { file: 'italil_pyramid_ncc.jpg', green: '(22, 39)', red: '(36, 77)' },
  { file: 'lastochikino_pyramid_ncc.jpg', green: '(-2, -3)', red: '(-8, 76)' },
  { file: 'melons_pyramid_ncc.jpg', green: '(5, 78)', red: '(11, 177)' },
  { file: 'self_portrait_pyramid_ncc.jpg', green: '(30, 79)', red: '(36, 175)' },
  { file: 'siren_pyramid_ncc.jpg', green: '(-8, 48)', red: '(-24, 96)' },
];

const selectedResults: Result[] = [
  { file: '_building_pyramid_ncc.jpg', green: '(-11, 47)', red: '(-20, 105)' },
  { file: '_camel_pyramid_ncc.jpg', green: '(15, 22)', red: '(39, 81)' },
  { file: '_lake_pyramid_ncc.jpg', green: '(-27, 56)', red: '(-61, 131)' },
];

function ResultGrid({ results, twoColumns = false }: { results: Result[]; twoColumns?: boolean }) {
  return <div className={`grid grid-cols-1 ${twoColumns ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-5`}>
    {results.map(({ file, green, red }) => <figure key={file}>
      <div className="relative aspect-[1.16] overflow-hidden bg-gray-100">
        <Image src={`/prokudin-gorskii/${file}`} alt={`Aligned result for ${file}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-gray-500"><span className="block text-gray-700">{file}</span>G shift (x, y) = {green}<br />R shift (x, y) = {red}</figcaption>
    </figure>)}
  </div>;
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[.9em] text-gray-800">{children}</code>;
}

export function ProkudinGorskiiTechnicalReport() {
  return (
    <div className="project-page min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Projects
        </Link>

        <div className="bg-white p-8 mb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-3">Technical report version</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prokudin-Gorskii Image Alignment</h1>
          <div className="w-full h-px bg-gray-300 mb-8" />
          <ProjectMetadata myRole="Developer" year="2026" contribution="Computer Vision, Algorithm Design, Testing" tools="Python, NumPy, scikit-image" team="Individual project" />
        </div>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Objective &amp; Pipeline</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>Prokudin-Gorskii glass plate scans contain three vertically stacked monochrome exposures. I split each input into equal-height B, G, and R channel arrays, held B fixed, estimated separate G→B and R→B shifts, then formed an RGB image with <Code>np.dstack([R, G, B])</Code>.</p>
            <p>The implementation uses Python 3, NumPy, and scikit-image. It saves the reconstructed image as a JPG and writes each channel displacement to <Code>out/alignment_results.txt</Code>.</p>
          </div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Small JPGs: Exhaustive Translation Search</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>For the small JPG inputs, I evaluated every integer displacement in a <strong className="text-gray-900">[-15, 15]</strong> window along both axes. Each trial applies <Code>np.roll</Code> to the moving channel and compares it with the fixed blue channel.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div><h3 className="font-medium text-gray-900 mb-2">L2 norm</h3><p>For each shift, calculate the square root of the sum of squared pixel differences. The shift with the lowest score wins.</p></div>
              <div><h3 className="font-medium text-gray-900 mb-2">Normalized cross-correlation</h3><p>Mean-center both images, normalize by their L2 norms, and choose the shift with the highest correlation score.</p></div>
            </div>
            <p>Both metrics produced equally good alignments on the three supplied small images. Because <Code>np.roll</Code> wraps pixels from one edge to the opposite edge, I scored only a cropped interior region. For JPGs, the crop removes 20 pixels on every edge before scoring; the chosen shift is still applied to the full-resolution channel.</p>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Available small-image results</h3>
          <ResultGrid results={simpleResults} twoColumns />
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">Large TIFs: Edge-Based Image Pyramid</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>Brute-force full-resolution search is too slow for the large TIF images. For these inputs, the pipeline first computes Sobel edge maps for the moving and reference channels. Edges remain more stable than raw brightness across differently exposed color channels, particularly for difficult images such as Emir.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong className="text-gray-900">Build the pyramid.</strong> Repeatedly downsample each edge map by 0.5 with anti-aliasing until the current smallest dimension is below 200 pixels.</li>
              <li><strong className="text-gray-900">Search the coarsest level.</strong> Start at zero displacement and perform a broad NCC search with a radius of 40 pixels.</li>
              <li><strong className="text-gray-900">Refine to full resolution.</strong> At every next level, double the prior shift and conduct a local NCC search with a radius of 8 pixels.</li>
              <li><strong className="text-gray-900">Construct the color image.</strong> Apply the final shift to the original full-resolution G and R channels—not the edge maps—and stack them with B.</li>
            </ol>
            <p>At pyramid levels, NCC scores exclude a border of <Code>min(10, height // 20, width // 20)</Code> pixels. This leaves enough image structure for matching while eliminating misleading wraparound regions.</p>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Pyramid NCC results</h3>
          <ResultGrid results={pyramidResults} />
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Images</h2>
          <p className="text-gray-600 leading-relaxed mb-6">I also ran the same pyramid NCC method on three additional images selected for the project.</p>
          <ResultGrid results={selectedResults} />
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Failure Analysis &amp; Refinement</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>Large low-detail areas and repetitive patterns can yield a deceptively good score for the wrong displacement. Interior cropping, a bounded search window, and edge maps reduce this failure mode.</p>
            <p>The first pyramid implementation failed because the border crop was too large—sometimes 70–80 pixels per side—and the search parameters were too narrow. Reducing the crop to 5–10 pixels, increasing the coarse search from ±30 to ±40, increasing local refinement from ±5 to ±8, and lowering the pyramid cutoff from 250 to 200 pixels improved convergence.</p>
            <p><strong className="text-gray-900">Implementation note:</strong> AI assistance was used while debugging the initial pyramid behavior and tuning these parameters. <Code>three_generations.tif</Code> could not be processed in the batch run and had to be run individually.</p>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-gray-500">The report references cathedral, lugano, and three_generations outputs, but their image files are not present in the local <Code>web/assets</Code> folder. This page displays every available local result image.</p>
        </section>
      </div>
      <ProjectNavigation currentProjectId="prokudin-gorskii-alignment" />
      <BackToTop />
    </div>
  );
}

export default function ProkudinGorskiiTechnicalRedirect() {
  redirect('/projects/prokudin-gorskii-alignment');
}
