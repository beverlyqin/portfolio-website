import Image from 'next/image';
import Link from 'next/link';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

const imageGroups = {
  corners: [
    ['set1_step1_originals.png', 'Set 1 original image pair'],
    ['set1_step1_harris.png', 'Set 1 Harris-corner response'],
    ['set2_step1_originals.png', 'Set 2 original image pair'],
    ['set2_step1_harris.png', 'Set 2 Harris-corner response'],
  ],
  suppression: [
    ['set1_step2_nms.png', 'Set 1 after non-maximal suppression'],
    ['set2_step2_nms.png', 'Set 2 after non-maximal suppression'],
  ],
  matching: [
    ['set1_step4_nndr.png', 'Set 1 NNDR distribution'],
    ['set1_step4_top5.png', 'Set 1 top five descriptor matches'],
    ['set1_step4_matches.png', 'Set 1 accepted feature matches'],
    ['set2_step4_nndr.png', 'Set 2 NNDR distribution'],
    ['set2_step4_top5.png', 'Set 2 top five descriptor matches'],
    ['set2_step4_matches.png', 'Set 2 accepted feature matches'],
  ],
} as const;

function FigureGrid({ images, className = 'md:grid-cols-2' }: { images: readonly (readonly [string, string])[]; className?: string }) {
  return (
    <div className={`grid grid-cols-1 ${className} gap-5`}>
      {images.map(([file, alt]) => (
        <figure key={file}>
          <div className="relative aspect-[1.65] overflow-hidden bg-gray-100">
            <Image src={`/automatic-feature-matching/${file}`} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
          </div>
          <figcaption className="mt-2 text-xs text-gray-500">{alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[.9em] text-gray-800">{children}</code>;
}

export default function AutomaticFeatureMatchingPage() {
  return (
    <div className="project-page min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Projects
        </Link>

        <div className="bg-white p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Automatic Feature Matching Across Images</h1>
          <div className="w-full h-px bg-gray-300 mb-8" />
          <ProjectMetadata myRole="Developer" year="2026" contribution="Computer Vision, Algorithm Design, Testing" tools="Python, NumPy, scikit-image" team="Individual project" />
        </div>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>Built a system for automatically detecting corresponding image features, following Brown et al.&apos;s <em>Multi-Image Matching Using Multi-Scale Oriented Patches</em>. The pipeline detects candidate corners, suppresses redundant points, extracts normalized local descriptors, and accepts reliable matches with a nearest-neighbor distance-ratio test.</p>
            <p>The implementation uses Python, NumPy, Matplotlib, and scikit-image. It processes two image pairs: <Code>img1.jpg</Code>/<Code>img2.jpg</Code> and <Code>img5.jpg</Code>/<Code>img6.jpg</Code>.</p>
          </div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Harris Corner Detection</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>I converted each image to grayscale and used the provided Harris detector with the <Code>eps</Code> method, <Code>sigma=1</Code>, and a 20-pixel edge discard. The detector returned more than 30,000 corners per image, so rendering every point initially made the images unreadable.</p>
            <p>For the diagnostic overlay, I reduced marker size to 0.5 and set alpha to 0.5. The dense response makes clear why the next stage is necessary: raw Harris detection supplies many candidate corners, not a compact set of discriminative interest points.</p>
          </div>
          <div className="mt-8"><FigureGrid images={imageGroups.corners} /></div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Adaptive Non-Maximal Suppression</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>I implemented non-maximal suppression from scratch with nested loops. First, I calculated each corner&apos;s Harris strength and kept the 2,000 strongest candidates to make the subsequent comparisons tractable. Candidates are sorted in descending strength so a strong point suppresses weaker nearby points, rather than the reverse.</p>
            <p>For every retained candidate, the implementation checks whether the absolute x and y differences from another point fall within half the suppression window. A point inside that local neighborhood is suppressed. An initial implementation overwrote the strength variable during iteration, leaving one surviving point; rebuilding the strengths array fixed the issue.</p>
            <p>I began with a 20-pixel window, which retained too many points. A 40-pixel window produced roughly 480 points in testing; the final visualization run uses an 80-pixel window. AI assistance was used to verify the indexing and half-window comparison during debugging.</p>
          </div>
          <div className="mt-8"><FigureGrid images={imageGroups.suppression} /></div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Local Feature Descriptors</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>For every surviving interest point, I extracted a 40×40 pixel patch centered at its location and resized it to 8×8 with anti-aliasing. I initially used grayscale descriptors, then switched to RGB patches following TA guidance.</p>
            <p>The resized 8×8×3 patch is flattened into a 192-dimensional descriptor. Each descriptor is normalized to zero mean and unit standard deviation; an epsilon of <Code>1e-8</Code> prevents division by zero for near-flat patches such as sky. Because normalized descriptors may fall outside the 0–1 display range, the top-match visualization renormalizes them only for display.</p>
          </div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. SSD Matching &amp; NNDR Filtering</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>The provided <Code>dist_SSD</Code> routine produces a pairwise squared-Euclidean-distance matrix between descriptors from both images. For each descriptor in image one, I find its closest and second-closest descriptors in image two, then calculate the nearest-neighbor distance ratio (NNDR).</p>
            <p>Matches are accepted only when the ratio is below <strong className="text-gray-900">0.5</strong>. A strong match should have a substantially closer nearest neighbor than its runner-up; ambiguous descriptors produce a higher ratio and are rejected. Final matches are ordered by ratio, then rendered both as top-five patch comparisons and as correspondences over the full image pair.</p>
          </div>
          <div className="mt-8"><FigureGrid images={imageGroups.matching} /></div>
        </section>

        <section className="bg-white p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation Notes</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>Key failure modes were excessive raw corner counts, an early NMS strengths-array bug, and the cost of comparing every candidate. Pre-filtering candidates before suppression, preserving coordinate order as (y, x), and sorting by response strength made the pipeline both more reliable and practical.</p>
            <p>AI tools were used to debug NMS indexing and help format visualizations; the detector, suppression, descriptor extraction, SSD matching, and NNDR filtering were implemented and documented in the project code.</p>
          </div>
        </section>
      </div>
      <ProjectNavigation currentProjectId="automatic-feature-matching" />
      <BackToTop />
    </div>
  );
}
