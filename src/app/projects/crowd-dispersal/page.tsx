import Link from 'next/link';
import Image from 'next/image';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectNavigation from '@/components/ProjectNavigation';
import BackToTop from '@/components/BackToTop';

export default function CrowdDispersalPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Particle-Based Crowd Dispersal Model</h1>
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          
                    {/* Project Metadata */}
          <ProjectMetadata
            myRole="Researcher, Developer, Designer"
            year="2025"
            contribution="Research, Design, Development"
            tools="C, Python, PCA Analysis"
            team="Robert Stott, Sanjay Kumar"
          />
        </div>

        

        {/* Overview Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            This project demonstrates how low-level simulation programming and linear algebra (PCA, eigen decomposition, covariance matrices) can be combined to model real-world crowd dynamics and generate actionable insights for spatial planning.
            </p>
          </div>
        </div>

        {/* Project Image */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Project Media</h2>
          <div className="w-full h-72 bg-white relative overflow-hidden">
            <Image 
              src="/crowd-collage.png" 
              alt="Crowd Dispersal Model" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Problem Statement</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            This project combined systems programming in C with linear algebra and probability to model crowd dispersal in 
            complex environments. I implemented a hybrid simulation engine where each agent is governed by mathematical 
            force equations, and analyzed the emergent dynamics through matrix transformations and eigenvalue decomposition.
            </p>
          </div>
        </div>

                 {/* Objective Section */}
         <div className="bg-white p-6 mb-4">
           <h2 className="text-xl font-semibold text-gray-900 mb-3">Forces and Behaviors Modeled with Linear Algebra</h2>
           <div className="prose prose-gray max-w-none">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
               <p className="text-gray-600 font-medium text-sm">- POI and Negative POI Attraction and Repulsion</p>
               <p className="text-gray-600 font-medium text-sm">- Boundary and Exit Forces</p>
               <p className="text-gray-600 font-medium text-sm">- Gaussian Wander (Ornstein-Uhlenbeck like noise)</p>
               <p className="text-gray-600 font-medium text-sm">- Exponential exit-time sampling</p>
               <p className="text-gray-600 font-medium text-sm">- Spawn accumulator (constant-rate vs Bernoulli spawn) and clump breakup</p>
               <p className="text-gray-600 font-medium text-sm">- Initial POI selection</p>
               <p className="text-gray-600 font-medium text-sm">- POI visit threshold & continuous exit-urge</p>
             </div>
             
             {/* Mathematical Formulation */}
             <div className="mb-4">
               <h3 className="text-lg font-medium text-gray-900 mb-3">Example: Boids (Flocking) Mathematical Formulation</h3>
               <div className="prose prose-gray max-w-none">
                 <p className="text-gray-600 mb-4">
                   We&apos;ve designed it such that agents attempt to separate, align, and cohere with their neighbors, inspired by algorithms like the one presented by Craig Reynolds in the 1987 paper &ldquo;Flocks, Herds, and Schools: A Distributed Behavioral Model.&rdquo; For each i, we compute for all j ≠ i within a certain neighbor-radius R<sub>n</sub>:
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3 mb-4">
                   <div className="text-center">
                     <p className="text-gray-600 font-medium mb-1">Separation (S):</p>
                     <p className="text-gray-800 font-mono text-sm">S = Σ<sub>j</sub> w<sub>sep</sub>(d<sub>ij</sub>) (x<sub>i</sub> - x<sub>j</sub>) / ||x<sub>i</sub> - x<sub>j</sub>||</p>
                   </div>
                   
                   <div className="text-center">
                     <p className="text-gray-600 font-medium mb-1">Alignment (A):</p>
                     <p className="text-gray-800 font-mono text-sm">A = Σ<sub>j</sub> w<sub>ali</sub>(d<sub>ij</sub>) v<sub>j</sub></p>
                   </div>
                   
                   <div className="text-center">
                     <p className="text-gray-600 font-medium mb-1">Cohesion (C):</p>
                     <p className="text-gray-800 font-mono text-sm">C = Σ<sub>j</sub> w<sub>coh</sub>(d<sub>ij</sub>) x<sub>j</sub></p>
                   </div>
                 </div>
                 
                 <p className="text-gray-600 mb-3">with exponential distance-weights:</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 mb-4">
                   <div className="text-center">
                     <p className="text-gray-800 font-mono text-sm">w<sub>sep</sub>(d) = e<sup>(-d/λ<sub>sep</sub>)</sup></p>
                   </div>
                   <div className="text-center">
                     <p className="text-gray-800 font-mono text-sm">w<sub>ali</sub>(d) = e<sup>(-d/λ<sub>ali</sub>)</sup></p>
                   </div>
                   <div className="text-center">
                     <p className="text-gray-800 font-mono text-sm">w<sub>coh</sub>(d) = e<sup>(-d/λ<sub>coh</sub>)</sup></p>
                   </div>
                 </div>
                 
                 <p className="text-gray-600">
                   We then form unit-directions for the different behaviors and scale with user-tunable weights α<sub>sep</sub>, α<sub>ali</sub>, α<sub>coh</sub> before adding up to a<sub>i</sub>.
                 </p>
               </div>
             </div>
             
             {/* Code Section - Full Width */}
             <div>
               <h3 className="text-lg font-medium text-gray-900 mb-2">Implementation</h3>
               <div className="bg-gray-100 p-4 rounded-lg">
                 <pre className="text-xs text-gray-800 overflow-x-auto overflow-y-auto max-h-64">
                                       <code>{`// --- Boids flocking ---
for(int i=0;i<count;i++){
    Vec2 sep={0,0}, align={0,0}, coh={0,0};
    float ss=0, sa=0, sc=0;
    
    for(int j=0;j<count;j++) if(j!=i){
        Vec2 d = vsub(agents[j].pos, agents[i].pos);
        float dist = vlen(d);
        
        if(dist < NEIGHBOR_RADIUS){
            float wsep = expf(-dist/SEP_DECAY);
            sep = vadd(sep, vmul(vnorm(vsub(agents[i].pos,agents[j].pos)),wsep));
            ss += wsep;
            
            float wal = expf(-dist/ALIGN_DECAY);
            align = vadd(align, vmul(agents[j].vel,wal));
            sa += wal;
            
            float wco = expf(-dist/COH_DECAY);
            coh = vadd(coh, vmul(agents[j].pos,wco));
            sc += wco;
        }
    }
    
    if(sc>0){
        Vec2 dir = vnorm(vsub(vmul(coh,1.0f/sc), agents[i].pos));
        agents[i].acc = vadd(agents[i].acc, vmul(dir, COH_WEIGHT));
    }
    if(sa>0){
        Vec2 dir = vnorm(vsub(vmul(align,1.0f/sa), agents[i].vel));
        agents[i].acc = vadd(agents[i].acc, vmul(dir, ALIGN_WEIGHT));
    }
    if(ss>0){
        Vec2 dir = vnorm(sep);
        agents[i].acc = vadd(agents[i].acc, vmul(dir, SEP_WEIGHT));
    }
}`}</code>
                 </pre>
               </div>
             </div>
           </div>
         </div>

        {/* Methodology Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Methodology</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
            Our simulation integrates both physics-based and rule-based models:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">- Social Repulsion – modified from Helbing&apos;s Social Force Model to prevent collisions.</p>
              <p className="text-gray-600">- Flocking Behaviors – adapted from Reynolds&apos; Boids model for alignment, separation, and cohesion.</p>
              <p className="text-gray-600">- Attraction to POIs – inverse-square forces toward stalls, entrances, and exits.</p>
              <p className="text-gray-600">- Boundary Forces – keep agents within Plaza limits.</p>
              <p className="text-gray-600">- Gaussian Noise – introduce natural randomness and wandering</p>
            </div>
          </div>
        </div>

                  {/* Data & Analysis Section */}
          <div className="bg-white p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">PCA Process - Pattern Analysis</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 mb-4 text-left">
                Principal Component Analysis (PCA) visualizes changes in multivariable data sets. We collect raw positional, velocity, and time data, then calculate derived metrics per agent over 600 seconds:
              </p>
              <p className="text-gray-600 mb-4 text-left">
                A principal component analysis graph comparing principal components 1 and 2. PC1 accounts for 37.8% of the total dataset variance, and PC2 accounts for 29.0% of the variance. In total, their 2-dimensional space accounts for 66.8% of the variance observed across all 7 experimental conditions.
              </p>
              <p className="text-gray-600 mb-4 text-left">
                Each dot represents one specific agent (person) in its respective simulation. The color is defined by the experimental condition where motion algorithms were removed: Boid&apos;s Flocking, Family Spawning, Noise, Pedestrian-Pedestrian Repulsion, POI Attraction and Neg POI Repulsion, POI goal, and standard conditions. Each condition has a corresponding statistical ellipse covering a 95% confidence interval.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                <p className="text-gray-600 text-sm">- mean speed</p>
                <p className="text-gray-600 text-sm">- speed standard deviation</p>
                <p className="text-gray-600 text-sm">- total displacement</p>
                <p className="text-gray-600 text-sm">- path length</p>
                <p className="text-gray-600 text-sm">- tortuosity (path length / total displacement)</p>
                <p className="text-gray-600 text-sm">- visited count (max number of POI visited)</p>
                <p className="text-gray-600 text-sm">- mean exit urge</p>
              </div>
              
              <p className="text-gray-600 mb-4">
                Data is cleaned by scaling, removing outliers, and eliminating NA values. We use standard processing: mean centering and dividing by standard deviation.
              </p>
              
              <p className="text-gray-600 mb-4">
                The covariance matrix C = (1/(n-1)) A · A<sup>T</sup> is computed from the normalized matrix A. We then calculate eigenvalues λ₁ ≥ λ₂ ≥ ... ≥ λ<sub>p</sub> and eigenvectors, projecting the transformation to obtain principal components P = A · S.
              Principal components are organized by variance explained, with the first component describing the most variance in the data.
              </p>
            </div>
          </div>

        {/* Results Section */}
        <div className="bg-white p-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Results</h2>
          <div className="prose prose-gray max-w-none">
            
            {/* Image Section */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">PCA Analysis Results</h3>
              <div className="bg-white p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="w-full rounded overflow-hidden flex justify-center">
                    <Image 
                      src="/PCA.png" 
                      alt="PCA Analysis Graph" 
                      width={400}
                      height={300}
                      className="h-auto"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-gray-800 font-medium text-sm mb-2">Figure 1: PCA of Per-Agent Summary Metrics Across Ablation Study Conditions</p>
                  <p className="text-gray-600 mb-4 text-left">
                    A principal component analysis graph comparing principal components 1 and 2. PC1 accounts for 37.8% of the total dataset variance, and PC2 accounts for 29.0% of the variance. In total, their 2-dimensional space accounts for 66.8% of the variance observed across all 7 experimental conditions.
                  </p>
                  <p className="text-gray-600 mb-4 text-left">
                    Each dot represents one specific agent (person) in its respective simulation. The color is defined by the experimental condition where motion algorithms were removed: Boid&apos;s Flocking, Family Spawning, Noise, Pedestrian-Pedestrian Repulsion, POI Attraction and Neg POI Repulsion, POI goal, and standard conditions. Each condition has a corresponding statistical ellipse covering a 95% confidence interval.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Project Navigation */}
      <ProjectNavigation currentProjectId="crowd-dispersal" />
      
      <BackToTop />
    </div>
  );
}
