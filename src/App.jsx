import React from 'react';
import { 
  MapPin, 
  Mail, 
  Briefcase, 
  Camera, 
  BookOpen, 
  Cpu, 
  Server, 
  Globe,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Terminal,
  Code,
  Database,
  Headphones,
  Clock
} from 'lucide-react';

// Custom SVG Icons for Brands (Since Lucide removed them)
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-indigo-500/30 p-4 md:p-8 lg:p-12 overflow-x-hidden relative">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min grid-flow-row-dense">

          {/* 1. HERO / INTRO BOX (Spans 2 columns on lg) */}
          <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/10 transition-colors duration-500" />
            
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 text-sm">
                  <MapPin size={14} className="text-indigo-400" />
                  Raleigh, NC
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  Available for collaborations
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Ashish Suman.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-8 leading-snug max-w-2xl">
                Senior Software Engineer | AI & NLP Researcher | Travel Photographer
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <a 
                href="mailto:ashish.suman5@gmail.com"
                className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-medium hover:bg-white hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <Mail size={18} />
                Let's Connect
              </a>
            </div>
          </div>

          {/* 2. ABOUT ME BOX */}
          <div className="group col-span-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-3 mb-6 text-indigo-400">
              <Terminal size={24} />
              <h3 className="text-lg font-semibold text-zinc-100">About Me</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base flex-grow">
              I build intelligent, scalable systems that turn complex technical challenges into real-world solutions. With <strong>10+ years</strong> of industry experience, I bridge the gap between high-availability enterprise architecture and advanced AI.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-zinc-500">
                <GraduationCap size={16} className="mt-1 flex-shrink-0 text-cyan-400" />
                <span>PhD Researcher in Applied AI <br/><span className="text-xs">University of the Cumberlands</span></span>
              </div>
              <div className="flex items-start gap-3 text-sm text-zinc-500">
                <GraduationCap size={16} className="mt-1 flex-shrink-0 text-cyan-400" />
                <span>MS in Computer Science <br/><span className="text-xs">Penn State University</span></span>
              </div>
            </div>
          </div>

          {/* 3. SKILLS BOX (Spans 2 columns on lg) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Code size={24} className="text-indigo-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Technical Arsenal</h3>
            </div>
            
            <div className="space-y-6">
              {/* Skill Category 1 */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  <Cpu size={14} /> AI & NLP
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Gensim', 'Word2Vec', 'SciPy', 'TensorFlow'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-sm text-zinc-200 hover:border-indigo-400/50 hover:text-indigo-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Category 2 */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  <Globe size={14} /> Architecture
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Microservices', 'Distributed Systems', 'Scalable Architecture', 'System Design'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-sm text-zinc-200 hover:border-indigo-400/50 hover:text-indigo-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Category 3 */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-zinc-400 uppercase tracking-wider">
                  <Server size={14} /> Backend & Cloud
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Node.js', 'AWS', 'Docker', 'CI/CD'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-zinc-800/80 border border-zinc-700/50 rounded-lg text-sm text-zinc-200 hover:border-indigo-400/50 hover:text-indigo-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. PHOTOGRAPHY BOX (1 column) */}
          <div className="group col-span-1 relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Visual element representing lens/aperture */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 border-[12px] border-zinc-800/30 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-[6px] border-indigo-500/20 rounded-full group-hover:scale-125 transition-transform duration-700" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Camera size={24} className="text-cyan-400" />
                <h3 className="text-lg font-semibold text-zinc-100">Photography</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 relative z-10">
                Beyond the code, I capture the world through travel and landscape photography. Chasing light, framing perspectives, and documenting the journey.
              </p>
            </div>
            
            <div className="relative z-10 space-y-4">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                Current Gear
              </div>
              <div className="text-sm text-zinc-300 mb-4">
                Fujifilm X-S20 <br/>
                <span className="text-zinc-500">15-45mm | 55-200mm</span>
              </div>
              <a 
                href="https://instagram.com/outbound.visuals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors group/link"
              >
                <InstagramIcon size={16} />
                @outbound.visuals
                <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 5. EXPERIENCE BOX (Spans 2 columns on lg) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={24} className="text-indigo-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Experience</h3>
            </div>
            
            <div className="relative border-l border-zinc-800/80 ml-3 space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-6">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-zinc-100 font-medium text-lg">Senior Software Engineer</h4>
                  <span className="text-zinc-500 text-sm font-medium">2021 — Present</span>
                </div>
                <div className="text-indigo-400 text-sm font-medium mb-3">Fidelity Investments</div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Architecting and developing mission-critical, high-availability enterprise applications. Spearheading scalable backend microservices and engineering automated data extraction pipelines to modernize legacy financial workflows.
                </p>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-6">
                <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-cyan-400 transition-colors duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-zinc-300 font-medium">Technology Analyst</h4>
                  <span className="text-zinc-500 text-sm font-medium">2020 — 2021</span>
                </div>
                <div className="text-zinc-500 text-sm mb-2">Infosys Ltd.</div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-6">
                <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-cyan-400 transition-colors duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-zinc-300 font-medium">SDE Intern</h4>
                  <span className="text-zinc-500 text-sm font-medium">2019</span>
                </div>
                <div className="text-zinc-500 text-sm mb-2">Amazon</div>
              </div>

              {/* Experience Item 4 */}
              <div className="relative pl-6">
                <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 group-hover:bg-cyan-400 transition-colors duration-300" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="text-zinc-300 font-medium">Senior Software Engineer</h4>
                  <span className="text-zinc-500 text-sm font-medium">2014 — 2018</span>
                </div>
                <div className="text-zinc-500 text-sm">Edgeverve Systems</div>
              </div>
            </div>
          </div>

          {/* 6. MUSIC BOX (1 column) */}
          <div className="group col-span-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Headphones size={24} className="text-indigo-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Currently Listening</h3>
            </div>
            
            <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-indigo-500/40 transition-all group/music">
              <div className="relative w-14 h-14 rounded-full bg-zinc-950 overflow-hidden flex-shrink-0 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover/music:border-indigo-500/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900" />
                {/* Vinyl grooves */}
                <div className="absolute inset-1.5 rounded-full border border-zinc-800/50" />
                <div className="absolute inset-3 rounded-full border border-zinc-800/50" />
                {/* Center label */}
                <div className="w-5 h-5 rounded-full bg-indigo-500/80 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent w-full h-full rotate-45" />
              </div>
              <div>
                <div className="text-zinc-100 font-medium text-sm group-hover/music:text-indigo-400 transition-colors">Lofi Hip Hop Radio</div>
                <div className="text-zinc-500 text-xs mt-1">Beats to relax/study to</div>
              </div>
            </a>
          </div>

          {/* 7. RESEARCH & PROJECTS BOX (Spans 2 columns) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={24} className="text-indigo-400" />
              <h3 className="text-lg font-semibold text-zinc-100">Research & Work</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
              
              {/* Project Card 1 */}
              <div className="block p-5 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-indigo-500/40 transition-all cursor-pointer group/card h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <Sparkles size={16} className="text-cyan-400 mt-1" />
                  <ChevronRight size={16} className="text-zinc-600 group-hover/card:text-indigo-400 group-hover/card:translate-x-1 transition-all" />
                </div>
                <h4 className="text-zinc-100 font-medium mb-2 leading-snug">The Illusion of Weightless Compute</h4>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                  Academic research paper examining the environmental, carbon, and energy impacts of large-scale AI data centers.
                </p>
              </div>

              {/* Project Card 2 */}
              <div className="block p-5 rounded-2xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-indigo-500/40 transition-all cursor-pointer group/card h-full flex flex-col">
                 <div className="flex justify-between items-start mb-3">
                  <Database size={16} className="text-cyan-400 mt-1" />
                  <ChevronRight size={16} className="text-zinc-600 group-hover/card:text-indigo-400 group-hover/card:translate-x-1 transition-all" />
                </div>
                <h4 className="text-zinc-100 font-medium mb-2 leading-snug">SEC 10-K NLP Study</h4>
                <p className="text-zinc-400 text-sm leading-relaxed flex-grow">
                  Advanced text drift analysis utilizing Gensim Word2Vec word embedding alignments to track financial vocabulary shifts in corporate disclosures.
                </p>
              </div>
              
            </div>
          </div>

          {/* 9. TIME/LOCATION WIDGET (1 column) */}
          <div className="group col-span-1 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-4 text-indigo-400 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <Clock size={28} />
            </div>
            <div className="text-3xl font-bold text-zinc-100 font-mono tracking-tight mb-1">
              EST
            </div>
            <div className="text-sm text-zinc-400 font-medium">
              Based in Raleigh, NC
            </div>
          </div>

          {/* 10. CONNECT BOX (Full width bottom banner) */}
          <div className="group col-span-1 md:col-span-2 lg:col-span-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-500 flex flex-col items-center justify-center text-center min-h-[220px]">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Let's Build</h3>
            <p className="text-sm text-zinc-400 mb-8 max-w-[200px]">Open for collaborations and applied AI research.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/ashishsuman" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-800/80 rounded-full hover:bg-zinc-100 hover:text-zinc-900 text-zinc-400 transition-all duration-300 hover:scale-110 shadow-lg">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/ashishsuman1" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-800/80 rounded-full hover:bg-[#0A66C2] hover:text-white text-zinc-400 transition-all duration-300 hover:scale-110 shadow-lg">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Footer Text */}
        <div className="mt-12 text-center text-zinc-600 text-sm flex items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Ashish Suman. All rights reserved.</span>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;