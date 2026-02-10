
import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Smartphone, 
  Code2, 
  Database,
  ExternalLink,
  X,
  Zap,
  GitBranch,
  Globe,
  Terminal,
  Activity
} from 'lucide-react';
import { PROJECTS, SKILLS } from './constants';
import { Project } from './types';
import SkillsChart from './components/SkillsChart';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-akmal-575a81280/";

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-sky-500 selection:text-white">
      {/* Navigation - Fixed to follow scroll */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-2 rounded-xl shadow-lg shadow-sky-900/40">
              <Smartphone className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">MA<span className="text-sky-400">Dev</span></span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400">
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Stack</a>
            <a href="#contact" className="bg-sky-600 text-white px-6 py-2 rounded-xl hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/20">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Vertical Scroll Enabled */}
      <main className="pt-32 relative">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
                Full-Stack Mobile Developer
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-none text-white tracking-tighter">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Muhammad Akmal</span> Bin Zainal Abdin.
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                I develop end-to-end Flutter systems like <span className="text-white font-bold">AMS</span> and <span className="text-white font-bold">Oceztra</span>. 
                Expert in <span className="text-sky-400">GetX</span>, <span className="text-sky-400">REST API</span> integration, and debugging complex JSON payloads using <span className="text-orange-400 font-bold">Postman</span>.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                <div className="space-y-1">
                  <div className="text-2xl font-black text-white">Postman</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">JSON Body Expert</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-white">Jython</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Backend Logic</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-white">MySQL</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Database</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-white">GetX</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">State Mgmt</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 pt-8">
                <a href="#projects" className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-sky-50 transition-all shadow-xl">
                  View Systems <ChevronRight className="w-6 h-6" />
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/akmlmhd" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-400 hover:text-sky-400">
                    <Github className="w-7 h-7" />
                  </a>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all text-slate-400 hover:text-sky-400">
                    <Linkedin className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative hidden lg:block">
              <div className="relative z-10 w-[420px] mx-auto group">
                <div className="absolute -top-12 -left-20 z-50 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl animate-float" style={{animationDelay: '1s'}}>
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><GitBranch className="w-5 h-5"/></div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase font-bold">Team GitHub</div>
                        <div className="text-xs font-bold text-white">Branch Flow</div>
                      </div>
                   </div>
                </div>

                <div className="absolute bottom-20 -right-20 z-50 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-4 rounded-2xl shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/20 rounded-lg text-sky-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">
                        Connectivity
                      </div>
                      <div className="text-xs font-bold text-white">
                        Postman / JSON
                      </div>
                    </div>
                  </div>
                </div>


                <div className="bg-slate-950 border-[12px] border-slate-900 rounded-[3.5rem] p-6 shadow-2xl h-[640px] w-full relative overflow-hidden group-hover:border-slate-800 transition-colors duration-500">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-[1.5rem] z-20"></div>
                   <div className="relative z-10 space-y-6 mt-8">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full bg-slate-800 animate-pulse"></div>
                        <div className="flex gap-2">
                           <div className="w-8 h-8 rounded-lg bg-slate-800"></div>
                           <div className="w-8 h-8 rounded-lg bg-slate-800"></div>
                        </div>
                      </div>
                      <div className="h-44 bg-gradient-to-br from-sky-500/30 to-blue-600/10 rounded-3xl border border-sky-500/20 flex items-center justify-center relative overflow-hidden">
                        <Smartphone className="w-12 h-12 text-sky-400 opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 h-3 w-24 bg-sky-400/30 rounded"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-28 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col p-4">
                            <Activity className="w-4 h-4 text-orange-400 mb-auto" />
                            <div className="h-2 w-full bg-slate-800 rounded"></div>
                         </div>
                         <div className="h-28 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col p-4">
                            <Database className="w-4 h-4 text-emerald-400 mb-auto" />
                            <div className="h-2 w-full bg-slate-800 rounded"></div>
                         </div>
                      </div>
                      <div className="h-32 bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-3">
                         <div className="flex gap-2">
                            <div className="h-8 w-8 rounded-full bg-slate-800"></div>
                            <div className="space-y-1 pt-1">
                               <div className="h-2 w-20 bg-slate-800 rounded"></div>
                               <div className="h-1.5 w-32 bg-slate-800/50 rounded"></div>
                            </div>
                         </div>
                         <div className="h-12 w-full bg-sky-600/20 rounded-xl border border-sky-500/30 flex items-center justify-center">
                            <div className="h-2 w-16 bg-sky-400 rounded text-[10px] text-sky-400 flex items-center justify-center font-bold uppercase">JSON Response OK</div>
                         </div>
                      </div>
                   </div>
                   <div className="absolute -inset-10 bg-sky-500/5 blur-[100px] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-40 scroll-mt-24">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Enterprise <span className="text-sky-400">Full-Stack</span></h2>
              <p className="text-slate-500 text-lg uppercase tracking-widest font-bold">Management Systems & Audit Architecture</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                     <div className="flex gap-2 mb-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-3 py-1 bg-sky-500/20 border border-sky-500/30 rounded-lg text-sky-400 text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
                            {tag}
                          </span>
                        ))}
                     </div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-sky-400 transition-colors tracking-tighter">{project.title}</h3>
                  <p className="text-slate-400 mb-8 line-clamp-2 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                     <span className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                       Technical Detail <ChevronRight className="w-4 h-4 text-sky-500" />
                     </span>
                     <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-950" />
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="max-w-7xl mx-auto px-6 mb-40 scroll-mt-24">
           <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full"></div>
              <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                <div className="flex-1 w-full space-y-8">
                  <div>
                    <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Professional <span className="text-sky-400">Stack</span></h2>
                    <p className="text-slate-400 text-lg">Hands-on experience with REST debugging in Postman, combined with Flutter/GetX agility.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILLS.map((skill) => {
                      // Remove border line for Flutter (GetX) and Jython as requested
                      const isSpecialSkill = skill.name === 'Flutter (GetX)' || skill.name === 'Jython';
                      return (
                        <div 
                          key={skill.name} 
                          className={`p-6 rounded-2xl flex items-center justify-between group transition-all bg-slate-950/60 ${isSpecialSkill ? 'border-none' : 'border border-slate-800/50 hover:border-sky-500/30'}`}
                        >
                          <div className="flex items-center gap-4">
                              <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-sky-500/10 transition-all">
                                {skill.name.includes('Postman') ? <Terminal className="w-5 h-5 text-orange-400" /> :
                                 skill.name.includes('REST') ? <Globe className="w-5 h-5 text-sky-400" /> :
                                 skill.name.includes('Jython') ? <Code2 className="w-5 h-5 text-amber-400" /> :
                                 skill.name.includes('MySQL') ? <Database className="w-5 h-5 text-emerald-400" /> :
                                 skill.category === 'Framework' ? <Smartphone className="w-5 h-5 text-sky-400" /> :
                                 <GitBranch className="w-5 h-5 text-purple-400" />
                                }
                              </div>
                              <div>
                                 <div className="font-bold text-slate-200">{skill.name}</div>
                                 <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{skill.category}</div>
                              </div>
                          </div>
                          <div className="text-sky-400 font-black font-mono text-sm">{skill.level}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="flex-1 w-full flex flex-col items-center">
                   <div className="w-full h-80 md:h-[500px] mb-8">
                     <SkillsChart />
                   </div>
                </div> */}
              </div>
           </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-6 mb-20 scroll-mt-24">
          <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 space-y-10">
               <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">Ready for your <br/> next mobile project.</h2>
               <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
                 Full-stack Flutter development with GetX, Postman debugging, and Jython/MySQL REST APIs.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a href="mailto:akmal23a@gmail.com" className="w-full sm:w-auto bg-white text-sky-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-sky-50 transition-all shadow-xl shadow-sky-900/20 flex items-center justify-center gap-3">
                   <Mail className="w-6 h-6" /> Hire Akmal
                 </a>
                 <a href="https://drive.google.com/drive/folders/1rE4L97r1clOHbin33EUgbPWHAqObHEJ2?usp=sharing" className="w-full sm:w-auto bg-sky-950/20 border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-sky-950/40 transition-all backdrop-blur-sm">
                   Download CV
                 </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-[3rem] border border-slate-800 overflow-hidden relative shadow-2xl flex flex-col lg:flex-row">
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 p-3 bg-slate-800 rounded-2xl hover:bg-slate-700 text-white transition-all shadow-lg">
                <X className="w-6 h-6" />
              </button>
              <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                 <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
              </div>
              <div className="flex-1 p-10 md:p-16 overflow-y-auto space-y-10 custom-scrollbar">
                 <div>
                    <div className="text-sky-400 font-black text-[10px] uppercase tracking-[0.2em] mb-4">Project Case Study</div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">{selectedProject.title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.fullDescription}</p>
                 </div>
                 <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
                    <h3 className="text-white font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                       <Zap className="w-4 h-4 text-amber-400" /> Architecture Highlights
                    </h3>
                    <p className="text-slate-400 text-sm italic leading-relaxed">
                      {selectedProject.technicalChallenge}
                    </p>
                 </div>
                 <div>
                    <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6">Stack & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                       {selectedProject.tags.map(tag => (
                         <span key={tag} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-bold border border-slate-700/50">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="pt-4">
                    <a href={selectedProject.link} className="inline-flex items-center gap-3 bg-sky-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/20">
                       Visit Project <ExternalLink className="w-5 h-5" />
                    </a>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-sky-500 p-1.5 rounded-lg shadow-lg shadow-sky-900/20">
                <Smartphone className="text-white w-5 h-5" />
              </div>
              <span className="font-black text-xl tracking-tight text-white">MA<span className="text-sky-400">Elite</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Muhammad Akmal &bull; Full-Stack Mobile Application Developer.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 text-xs font-black uppercase tracking-widest text-slate-400">
            <a href="https://github.com/akmlmhd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 text-center text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Muhammad Akmal Bin Zainal Abdin &bull; Full-Stack Mobile Excellence
        </div>
      </footer>
    </div>
  );
}

export default App;
