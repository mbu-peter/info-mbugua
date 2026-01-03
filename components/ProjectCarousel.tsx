import React, { useState, useEffect } from 'react';
import { Project } from '../types';

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const currentProject = projects[currentIndex];

  // Auto-transition images smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % currentProject.images.length);
        setFade(true);
      }, 500); // Wait for fade out before changing source
    }, 4000); // 4 seconds interval

    return () => clearInterval(timer);
  }, [currentIndex, currentProject.images.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setImgIndex(0);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setImgIndex(0);
  };

  return (
    <div className="space-y-8">
      {/* Navigation Header - Fancy Tab Style */}
      <div className="flex items-end">
        <div className="bg-slate-900 text-white px-6 py-2 rounded-t-lg font-mono text-[10px] font-bold uppercase tracking-[0.3em] border-x border-t border-slate-900 shadow-[-4px_0_0_white]">
          Project Segment {String(currentIndex + 1).padStart(2, '0')}
        </div>
        <div className="flex-1 border-b-2 border-slate-900 h-px mb-[0.5px]"></div>
        <div className="flex gap-2 pb-2">
          <button 
            onClick={prevProject}
            className="w-8 h-8 flex items-center justify-center bg-white border-2 border-slate-900 shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:bg-slate-100"
            title="Previous Project"
          >
            ←
          </button>
          <button 
            onClick={nextProject}
            className="w-8 h-8 flex items-center justify-center bg-white border-2 border-slate-900 shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all active:bg-slate-100"
            title="Next Project"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: 3D Image Preview with Smooth Transition */}
        <div className="relative group">
          <div className="absolute inset-0 bg-slate-900 translate-x-3 translate-y-3 rounded shadow-lg -z-10 opacity-10"></div>
          <div className="relative bg-[#eee] p-3 border-4 border-slate-900 shadow-[8px_8px_0_rgba(0,0,0,0.1)]">
            <div className="overflow-hidden bg-black aspect-video relative">
              <img 
                src={currentProject.images[imgIndex]} 
                alt={currentProject.name}
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                 {currentProject.images.map((_, i) => (
                   <div 
                    key={i} 
                    className={`w-1 h-1 rounded-full transition-all ${i === imgIndex ? 'bg-emerald-500 w-3' : 'bg-white/30'}`} 
                   />
                 ))}
              </div>

              {/* Counter Tag */}
              <div className="absolute top-2 right-2 bg-slate-900 text-white text-[9px] px-2 py-1 font-mono tracking-widest border border-white/20">
                IMG_{String(imgIndex + 1).padStart(2, '0')} / {String(currentProject.images.length).padStart(2, '0')}
              </div>
            </div>
          </div>
          {/* Caption underneath image */}
          <p className="mt-4 text-[10px] text-slate-400 font-mono italic text-center uppercase tracking-widest">
            Visual Reference Archive ID: {currentProject.id}-X
          </p>
        </div>

        {/* Right: Technical Specifications */}
        <div className="space-y-6">
          <header className="space-y-1">
             <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none italic uppercase">
               {currentProject.name}
             </h3>
             <div className="h-1.5 w-24 bg-emerald-500"></div>
          </header>

          <div className="bg-slate-50 border-l-4 border-slate-300 p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 text-[8px] text-slate-200 font-bold uppercase tracking-widest">Description</div>
            <p className="text-slate-600 text-sm leading-relaxed font-mono italic">
              {currentProject.description}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              {currentProject.tech.map(t => (
                <span key={t} className="text-[10px] font-mono font-bold border-2 border-slate-900 bg-white px-3 py-1 text-slate-900 shadow-[2px_2px_0_rgba(0,0,0,1)] hover:bg-emerald-50 hover:border-emerald-500 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href={currentProject.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group relative h-10"
            >
              <div className="absolute inset-0 bg-slate-900 translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
              <div className="relative h-full flex items-center justify-center bg-white border-2 border-slate-900 text-slate-900 font-bold text-[10px] tracking-widest uppercase group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                SOURCE_CODE
              </div>
            </a>
            <a 
              href={currentProject.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group relative h-10"
            >
              <div className="absolute inset-0 bg-emerald-600 translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform"></div>
              <div className="relative h-full flex items-center justify-center bg-white border-2 border-emerald-600 text-emerald-600 font-bold text-[10px] tracking-widest uppercase group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                LIVE_DEMO
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};