
import React, { useState } from 'react';
import { Experience } from '../types';

interface ExperienceViewerProps {
  experiences: Experience[];
}

export const ExperienceViewer: React.FC<ExperienceViewerProps> = ({ experiences }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % experiences.length);
  const prev = () => setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  const current = experiences[index];

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      <div className="relative w-full max-w-lg">
        {/* Background Stack Effect */}
        <div className="absolute inset-0 bg-slate-900 translate-x-4 translate-y-4 -z-10 opacity-5"></div>
        
        <div className="bg-white border-4 border-slate-900 p-8 shadow-[12px_12px_0_rgba(16,185,129,0.1)] relative">
          {/* Year Badge */}
          <div className="absolute -top-6 -left-6 bg-slate-900 text-white px-6 py-2 font-black text-3xl italic tracking-tighter border-2 border-white shadow-lg">
            YR_{current.year}
          </div>

          <div className="pt-6 space-y-6">
            <div className="h-1 w-16 bg-emerald-500"></div>
            <p className="text-3xl text-slate-800 leading-tight font-mono lowercase">
              "{current.content}"
            </p>
            <div className="flex justify-between items-center pt-8">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Event_{index + 1}_of_{experiences.length}
              </span>
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="w-12 h-12 flex items-center justify-center bg-white border-4 border-slate-900 shadow-[4px_4px_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-2xl font-black"
                >
                  ←
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 flex items-center justify-center bg-white border-4 border-emerald-500 text-emerald-600 shadow-[4px_4px_0_#10b981] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all text-2xl font-black"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline Indicator Blocks */}
      <div className="flex gap-2">
        {experiences.map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 border-2 border-slate-900 transition-all ${i === index ? 'bg-emerald-500 scale-125' : 'bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
};
