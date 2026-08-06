import React, { useState } from 'react';
import { RetroFrame } from './components/RetroFrame';
import { Terminal } from './components/Terminal';
import { OldSkoolDisplay } from './components/OldSkoolDisplay';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ExperienceViewer } from './components/ExperienceViewer';
import { PROJECTS, EXPERIENCES, ABOUT_TEXT, SKILLS_LIST, COMMANDS_HELP } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCommandTrigger = (cmd: string) => {
    if (cmd === 'help') {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveView('help');
        setIsTransitioning(false);
      }, 200);
      return;
    }
    
    if (cmd === 'clear') {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveView(null);
        setIsTransitioning(false);
      }, 200);
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveView(cmd);
      setIsTransitioning(false);
    }, 200);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'about':
        return (
          <OldSkoolDisplay title="SYSTEM INFO">
            <div className="font-mono text-xs bg-black text-green-400 p-3 leading-relaxed">
              <div className="text-green-300 font-bold mb-2">$ cat /etc/about.txt</div>
              <pre className="whitespace-pre-wrap text-green-200 leading-tight">
{`[USER PROFILE]
NAME: Peter Mbugua
ROLE: Backend Engineer & Cloud Architect
LOCATION: Remote

[SYSTEM SPECS]
PRIMARY_LANGUAGE: Java/Spring Boot
CLOUD_PLATFORM: AWS
ARCHITECTURE: Microservices
CONTAINER_RUNTIME: Docker/Kubernetes

[MISSION OBJECTIVE]
Building scalable backend architectures with modern cloud-native
technologies. Specializing in distributed systems, DevOps automation,
and high-performance APIs.

[CORE COMPETENCIES]
• Backend Development (Java, Python, Node.js)
• Cloud Architecture (AWS, Terraform, Kubernetes)
• API Design (REST, GraphQL, gRPC)
• Database Design (PostgreSQL, Redis, MongoDB)
• CI/CD Pipelines (Jenkins, GitHub Actions)

[STATUS]
System Status: ONLINE
Authorization: GRANTED
Access Level: ADMIN`}
              </pre>
              <div className="mt-3 text-green-300 border-t border-green-800 pt-2">
                <span className="text-cyan-400">peter@portfolio:~$</span> Access granted. Session active.
              </div>
            </div>
          </OldSkoolDisplay>
        );
      case 'projects':
        return (
          <OldSkoolDisplay title="ARCHIVE: SELECTED_WORKS">
            <ProjectCarousel projects={PROJECTS} />
          </OldSkoolDisplay>
        );
      case 'experience':
        return (
          <OldSkoolDisplay title="CHRONICLE: EXPERIENCE_LOG">
            <ExperienceViewer experiences={EXPERIENCES} />
          </OldSkoolDisplay>
        );
      case 'skills':
        return (
          <OldSkoolDisplay title="TECHNICAL CAPABILITIES">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               <div className="lg:col-span-7 bg-gradient-to-br from-slate-800 to-slate-900 text-emerald-400 p-8 rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
                 <div className="absolute top-0 right-0 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[10px] text-white font-bold uppercase tracking-widest rounded-bl-lg">TECH_STACK</div>
                 <pre className="text-sm md:text-base font-mono leading-relaxed whitespace-pre-wrap break-words text-slate-200">
                   {SKILLS_LIST}
                 </pre>
               </div>
               <div className="lg:col-span-5 space-y-8">
                 <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300 rounded-lg shadow-xl">
                    <h4 className="font-bold border-b-2 border-emerald-400 pb-2 text-slate-800 uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Proficiency Levels
                    </h4>
                    <ul className="text-lg space-y-4 text-slate-700 font-mono">
                      <li className="flex justify-between items-center">
                        <span className="font-semibold">Backend Development</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{width: '100%'}}></div>
                          </div>
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 font-bold text-sm rounded">100%</span>
                        </div>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-semibold">Cloud Architecture</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 font-bold text-sm rounded">92%</span>
                        </div>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-semibold">DevOps & CI/CD</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" style={{width: '88%'}}></div>
                          </div>
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 font-bold text-sm rounded">88%</span>
                        </div>
                      </li>
                    </ul>
                 </div>
                 <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 text-xs font-mono uppercase tracking-widest leading-loose rounded-lg shadow-xl border border-slate-700">
                    <div className="text-emerald-400 font-bold mb-3">[ SYSTEM STATUS ]</div>
                    <div className="space-y-2 text-slate-300">
                      <div>CORE_PROCESSOR: Java/Spring</div>
                      <div>CLOUD_PROVIDER: AWS</div>
                      <div>CONTAINER_ENGINE: Docker</div>
                      <div>ORCHESTRATOR: Kubernetes</div>
                    </div>
                 </div>
               </div>
            </div>
          </OldSkoolDisplay>
        );
      case 'contact':
        return (
          <OldSkoolDisplay title="COMMUNICATION CHANNELS">
            <div className="flex flex-col items-center py-16 space-y-12">
              <div className="text-center space-y-4">
                <h3 className="text-5xl font-black text-slate-800 tracking-tight uppercase bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Let's Connect</h3>
                <p className="text-slate-500 font-mono text-base uppercase tracking-widest">Ready for collaboration</p>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                 <a href="mailto:peter@example.com" className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700 rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <div className="relative text-center space-y-3">
                     <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div className="font-bold text-white text-xl tracking-widest uppercase">Email</div>
                     <div className="text-emerald-400 text-sm font-mono">peter@example.com</div>
                   </div>
                 </a>
                 <a href="https://linkedin.com/in/peter-mbugua" target="_blank" className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 p-8 border border-blue-500 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <div className="relative text-center space-y-3">
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                       </svg>
                     </div>
                     <div className="font-bold text-white text-xl tracking-widest uppercase">LinkedIn</div>
                     <div className="text-blue-300 text-sm font-mono">linkedin.com/in/peter-mbugua</div>
                   </div>
                 </a>
                 <a href="https://github.com/mbu-peter" target="_blank" className="group relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 p-8 border border-slate-600 rounded-xl shadow-2xl hover:shadow-slate-500/25 transition-all duration-300 hover:-translate-y-1">
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <div className="relative text-center space-y-3">
                     <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                       <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                     </div>
                     <div className="font-bold text-white text-xl tracking-widest uppercase">GitHub</div>
                     <div className="text-slate-300 text-sm font-mono">github.com/mbu-peter</div>
                   </div>
                 </a>
              </div>
            </div>
          </OldSkoolDisplay>
        );
      case 'help':
        return (
          <OldSkoolDisplay title="COMMAND_REFERENCE">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-emerald-400 p-8 rounded-lg shadow-2xl border border-slate-700">
              <div className="text-emerald-300 font-bold mb-4">$ cat /etc/commands.txt</div>
              <pre className="whitespace-pre-wrap text-green-200 leading-relaxed font-mono text-sm">
                {COMMANDS_HELP}
              </pre>
              <div className="mt-6 text-green-300 border-t border-green-800 pt-4">
                <div className="text-cyan-400 font-bold mb-2">Quick Start:</div>
                <div className="text-green-200 text-sm space-y-1">
                  <div>• Type 'about' to learn about me</div>
                  <div>• Type 'projects' to see my work</div>
                  <div>• Type 'skills' to view my tech stack</div>
                  <div>• Type 'contact' to get in touch</div>
                  <div>• Type 'clear' to reset the terminal</div>
                </div>
              </div>
            </div>
          </OldSkoolDisplay>
        );
      default:
        return (
          <div className="max-w-2xl w-full animate-[fadeIn_0.8s_ease-out]">
            <style>{`
              @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes wave {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-15deg); }
                75% { transform: rotate(15deg); }
              }
              .waving-hand {
                display: inline-block;
                animation: wave 1.5s infinite ease-in-out;
                transform-origin: bottom right;
              }
              @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
                50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.5); }
              }
              .glow-border {
                animation: glow 2s infinite;
              }
            `}</style>
            <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-emerald-400/50 p-10 shadow-2xl relative rounded-xl glow-border">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-t-xl"></div>

              <div className="flex flex-col items-center text-center space-y-8">
                <div className="relative">
                  <div className="text-9xl mb-4 waving-hand">👋</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  {/* Minecraft-style pixelated blocks */}
                  <div className="absolute -bottom-4 -left-4 flex gap-1">
                    <div className="w-3 h-3 bg-green-500 border border-green-600"></div>
                    <div className="w-3 h-3 bg-yellow-600 border border-yellow-700"></div>
                    <div className="w-3 h-3 bg-gray-600 border border-gray-700"></div>
                  </div>
                  {/* Creeper reference */}
                  <div className="absolute top-8 -right-12 text-4xl animate-pulse opacity-30">👾</div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight uppercase tracking-tight">
                    Welcome Aboard
                  </h3>
                  <p className="text-emerald-600 font-semibold uppercase tracking-widest text-sm">Portfolio Terminal v2.1.0</p>
                </div>

                <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

                <div className="space-y-6 max-w-lg">
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    Navigate through my digital workspace using the terminal interface. Try these commands:
                  </p>
                  {/* Minecraft-style ASCII Art */}
                  <div className="text-center font-mono text-xs text-emerald-600 opacity-60">
                    <div>░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░</div>
                    <div>░░░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░</div>
                    <div>░░░░░░░░░░░░░░░░████████████░░░░░░░░░░░</div>
                    <div>░░░░░░░░░░░░░░████████████████░░░░░░░░░</div>
                    <div>░░░░░░░░░░░░████████████████████░░░░░░░</div>
                    <div>░░░░░░░░░░████████████████████████░░░░░</div>
                    <div>░░░░░░░░████████████████████████████░░░</div>
                    <div>░░░░░░████████████████████████████████░</div>
                    <div>░░░░███████████████████████████████████</div>
                    <div>░░█████████████████████████████████████</div>
                    <div>███████████████████████████████████████</div>
                    <div className="text-emerald-400">⚒️ Backend Architect ⚒️</div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">help</span></div>
                      <div className="text-slate-400 text-xs">Command list</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">about</span></div>
                      <div className="text-slate-400 text-xs">My background</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">projects</span></div>
                      <div className="text-slate-400 text-xs">Portfolio work</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">skills</span></div>
                      <div className="text-slate-400 text-xs">Tech expertise</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center md:col-span-2">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">experience</span></div>
                      <div className="text-slate-400 text-xs">Career timeline</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-lg border border-slate-700 font-mono text-center md:col-span-2">
                      <div className="text-emerald-400 font-bold">$ <span className="text-white">contact</span></div>
                      <div className="text-slate-400 text-xs">Get in touch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-mono flex flex-col selection:bg-emerald-400/30 overflow-x-hidden">
      <div className="flex-1 max-w-[1400px] mx-auto w-full px-4 py-8 relative z-10 flex flex-col">

        {/* Header - PETER.MBUGUA.V1 */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-emerald-400/30 pb-8">
          <div className="border-l-4 border-emerald-400 pl-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-none bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent uppercase">PETER.MBUGUA</h1>
            <p className="text-emerald-400 font-semibold uppercase tracking-[0.3em] text-sm mt-3">Backend Engineer // Cloud Architect</p>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
          </div>
          <div className="hidden md:block text-right font-mono text-xs text-slate-400 uppercase tracking-[0.2em] space-y-1">
            <p>Status: <span className="text-emerald-400">ONLINE</span></p>
            <p>Session: {new Date().toLocaleTimeString()}</p>
            <p className="text-cyan-400">Kernel v2.1.0</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-12 gap-8 items-start flex-1">

          {/* Interaction Column */}
          <div className="xl:col-span-5 flex flex-col space-y-10">

            {/* Static Summary Section */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-emerald-400/30 p-8 relative overflow-hidden rounded-lg shadow-2xl">
               <div className="absolute top-0 right-0 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[10px] text-white font-bold uppercase tracking-widest rounded-bl-lg">SYSTEM.INFO</div>
               <div className="absolute top-4 left-4 w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
               <h2 className="text-lg font-bold text-emerald-400 uppercase tracking-[0.15em] mb-6 flex items-center gap-3 ml-8">
                 <span className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_12px_emerald-400]"></span> Summary
               </h2>
               <p className="text-lg text-slate-200 leading-relaxed font-light">
                 Building scalable backend architectures with <span className="text-emerald-400 font-semibold">Java/Spring Boot</span> and <span className="text-cyan-400 font-semibold">AWS cloud services</span>. Specializing in microservices, distributed systems, and DevOps automation.
               </p>
            </div>

            <div className="relative">
              <RetroFrame title="HOST_CLI" version="v2.4.0">
                <Terminal onTrigger={handleCommandTrigger} />
              </RetroFrame>

              {/* Minecraft-style Achievement Notification */}
              <div className="absolute -top-20 -left-8 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 border-4 border-yellow-600 shadow-[4px_4px_0_#92400e] animate-bounce opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🐛</div>
                  <div className="text-xs font-bold text-yellow-900 uppercase tracking-wider">
                    Achievement Unlocked!<br/>
                    <span className="text-yellow-800 font-mono">Bug Hunter Extraordinaire</span>
                  </div>
                </div>
              </div>

              {/* Help Popup Overlay - Fixed positioning */}
              {showHelp && (
                <>
                  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowHelp(false)}></div>
                  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse">
                    <div className="bg-emerald-500 text-black p-4 border-4 border-white shadow-[0_0_30px_rgba(16,185,129,0.8)] max-w-sm">
                      <div className="flex justify-between items-center mb-2 border-b-2 border-black pb-1">
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Command Reference</span>
                        <button onClick={() => setShowHelp(false)} className="text-lg font-bold hover:bg-black hover:text-emerald-500 px-1 rounded">×</button>
                      </div>
                      <pre className="text-xs font-bold leading-tight whitespace-pre font-mono">
                        {COMMANDS_HELP}
                      </pre>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Display Column */}
          <div className={`xl:col-span-7 w-full transition-all duration-300 transform ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <div className="min-h-[500px] flex items-start justify-center">
              {renderActiveView()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Old-School Minecraft Footer */}
      <footer className="w-full bg-[#1a1a1a] border-t-8 border-[#333] pt-6 pb-8 relative z-10 overflow-hidden">
        {/* Minecraft-style Pixel Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>

        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

          {/* GitHub Command Box */}
          <a href="https://github.com/mbu-peter" target="_blank" className="flex items-center gap-4 p-4 border-4 border-[#333] bg-[#2a2a2a] shadow-[inset_4px_4px_0_#444,inset_-4px_-4px_0_#111] hover:bg-[#3a3a3a] transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#333] border-4 border-[#444] flex items-center justify-center shrink-0">
              <div className="w-6 h-6 bg-[#10b981] border-b-2 border-[#059669]"></div>
            </div>
            <div className="text-sm font-bold uppercase">
              <div className="text-white font-mono text-xs">$ github</div>
              <div className="text-[#10b981] font-mono text-xs">Type: github</div>
            </div>
          </a>

          {/* LinkedIn Command Box */}
          <a href="#" target="_blank" className="flex items-center gap-4 p-4 border-4 border-[#333] bg-[#2a2a2a] shadow-[inset_4px_4px_0_#444,inset_-4px_-4px_0_#111] hover:bg-[#3a3a3a] transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#333] border-4 border-[#444] flex items-center justify-center shrink-0">
              <div className="w-6 h-6 bg-[#2563eb] border-b-2 border-[#1d4ed8]"></div>
            </div>
            <div className="text-sm font-bold uppercase">
              <div className="text-white font-mono text-xs">$ linkedin</div>
              <div className="text-[#3b82f6] font-mono text-xs">Type: linkedin</div>
            </div>
          </a>

          {/* Twitter Command Box */}
          <a href="https://twitter.com/mbugua_Khara" target="_blank" className="flex items-center gap-4 p-4 border-4 border-[#333] bg-[#2a2a2a] shadow-[inset_4px_4px_0_#444,inset_-4px_-4px_0_#111] hover:bg-[#3a3a3a] transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-[#333] border-4 border-[#444] flex items-center justify-center shrink-0">
              <div className="w-6 h-6 bg-[#64748b] border-b-2 border-[#475569]"></div>
            </div>
            <div className="text-sm font-bold uppercase">
              <div className="text-white font-mono text-xs">$ twitter</div>
              <div className="text-[#94a3b8] font-mono text-xs">Type: twitter</div>
            </div>
          </a>
        </div>

        {/* Minecraft-style Grass Row */}
        <div className="flex justify-center gap-0 mt-6 relative z-10">
          <div className="flex">
            {/* Grass blocks */}
            <div className="w-4 h-4 bg-green-600 border border-green-700"></div>
            <div className="w-4 h-4 bg-green-500 border border-green-600"></div>
            <div className="w-4 h-4 bg-green-600 border border-green-700"></div>
            <div className="w-4 h-4 bg-green-500 border border-green-600"></div>
            {/* Dirt blocks */}
            <div className="w-4 h-4 bg-yellow-700 border border-yellow-800"></div>
            <div className="w-4 h-4 bg-yellow-600 border border-yellow-700"></div>
            <div className="w-4 h-4 bg-yellow-700 border border-yellow-800"></div>
            {/* Stone blocks */}
            <div className="w-4 h-4 bg-gray-600 border border-gray-700"></div>
            <div className="w-4 h-4 bg-gray-500 border border-gray-600"></div>
            <div className="w-4 h-4 bg-gray-600 border border-gray-700"></div>
          </div>
        </div>

        <div className="mt-4 text-center text-white/30 text-xs uppercase tracking-widest font-bold relative z-10">
          <div className="mb-2 font-mono">© 2024 PETER MBUGUA // ALL_RIGHTS_RESERVED // KERNEL_v2.4.0</div>
          <div className="font-mono text-[10px]">BUILT_WITH_REACT_TYPESCRIPT // MINECRAFT_INSPIRED_UI</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
