
import React from 'react';

interface OldSkoolDisplayProps {
  title: string;
  children: React.ReactNode;
}

export const OldSkoolDisplay: React.FC<OldSkoolDisplayProps> = ({ title, children }) => {
  return (
    <div className="relative w-full max-w-4xl animate-[slideIn_0.5s_ease-out]">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      {/* 3D Paper/Folder Effect */}
      <div className="absolute inset-0 bg-black/20 translate-x-2 translate-y-2 rounded-sm -z-10 blur-sm"></div>
      
      <div className="bg-[#f0f0f0] border-l-8 border-b-8 border-r border-t border-[#d1d1d1] p-1 shadow-lg">
        {/* Header Tab */}
        <div className="bg-[#3b3b3b] text-[#f0f0f0] px-4 py-2 flex justify-between items-center mb-1">
          <span className="text-xs font-bold tracking-widest uppercase">{title}</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 border border-white/20"></div>
            <div className="w-3 h-3 border border-white/20"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white border-2 border-dashed border-[#ccc] p-6 text-slate-800">
           {children}
        </div>

        {/* Footer info bar */}
        <div className="mt-1 flex justify-between items-center px-2 py-1 bg-[#e0e0e0] border-t border-[#ccc] text-[9px] font-bold text-[#888]">
          <span>PRINTER_STATION_READY</span>
          <span>PAGE_01_OF_01</span>
        </div>
      </div>
    </div>
  );
};
