
import React from 'react';

interface RetroFrameProps {
  children: React.ReactNode;
  title?: string;
  version?: string;
}

export const RetroFrame: React.FC<RetroFrameProps> = ({ children, title = "SYS_TERMINAL", version }) => {
  return (
    <div className="relative w-full perspective-[1200px]">
      {/* Box Shadow */}
      <div className="absolute inset-0 bg-black/50 translate-x-3 translate-y-3 rounded-sm -z-10 blur-xl"></div>
      
      {/* Main Chassis - Landscape and Compact height */}
      <div className="relative bg-[#D2C5A1] border-2 border-[#C2B591] rounded-sm shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),10px_10px_30px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
        
        {/* Top Trim */}
        <div className="bg-[#E6D9B8] px-4 py-2 flex justify-between items-center border-b border-[#C2B591]">
          <div className="flex gap-1.5">
             {[1,2,3].map(i => <div key={i} className="w-10 h-1 bg-black/10 rounded-full"></div>)}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-bold text-[#8B7D5F] tracking-[0.2em] uppercase">{title}</span>
            {version && <span className="text-[8px] text-[#6B5B3D] font-mono">{version}</span>}
          </div>
        </div>

        {/* Screen Area - Compact Height for 3-5 lines look */}
        <div className="p-2.5 bg-[#1a1a1a]">
          <div className="relative bg-black h-[140px] md:h-[160px] overflow-hidden rounded-sm border border-white/5 shadow-inner">
             {children}
             
             {/* CRT Visual Overlays */}
             <div className="absolute inset-0 pointer-events-none crt-scanline opacity-[0.12]"></div>
             <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.95)]"></div>
             
             {/* Glass Glare */}
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-30"></div>
          </div>
        </div>

        {/* Bottom Control Strip */}
        <div className="bg-[#E6D9B8] px-4 py-2 flex justify-between items-center border-t border-black/5">
           <div className="flex gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#B5A885] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_1px_rgba(255,255,255,0.4)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#B5A885] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_1px_rgba(255,255,255,0.4)]"></div>
           </div>
           
           <div className="flex items-center gap-2">
              <div className="text-[8px] text-[#8B7D5F] font-black tracking-widest uppercase">Status</div>
              <div className="w-16 h-1 bg-[#B5A885] rounded-full relative">
                 <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_5px_emerald] animate-pulse"></div>
              </div>
           </div>
        </div>
      </div>

      {/* 3D Depth Side */}
      <div className="absolute top-0 -right-3 h-full w-3 bg-[#C2B591] origin-left skew-y-[45deg] border-l border-black/10"></div>
    </div>
  );
};
