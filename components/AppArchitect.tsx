
import React, { useState } from 'react';
import { getAppArchitecture } from '../services/geminiService';
import { AppArchitecture } from '../types';
import { Loader2, Sparkles, Code2, Layers, Cpu, CheckCircle2, Terminal } from 'lucide-react';

const AppArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AppArchitecture | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    try {
      const arch = await getAppArchitecture(prompt);
      setResult(arch);
    } catch (err) {
      setError('Failed to generate architecture. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-sky-500/20 rounded-lg">
          <Sparkles className="text-sky-400 w-6 h-6" />
        </div>
        <h3 className="text-3xl font-bold text-white tracking-tight">
          AI Architecture <span className="text-sky-400">Gen</span>
        </h3>
      </div>
      
      <p className="text-slate-400 mb-8 max-w-2xl text-lg">
        Input your mobile vision. I'll architect a production-ready Flutter foundation using the best design patterns.
      </p>

      <div className="flex flex-col gap-4 mb-10">
        <div className="relative group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'A meditation app with AI-generated soundtracks and community groups...'"
            className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 w-full h-32 resize-none transition-all placeholder:text-slate-600 group-hover:border-slate-700"
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-sky-950/20"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Processing Logic...
            </>
          ) : (
            <>
              <Cpu className="w-5 h-5" />
              Generate Technical Blueprint
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Architecture Details */}
            <div className="space-y-8">
              <div className="border-l-4 border-sky-500 pl-6">
                <h4 className="text-2xl font-bold text-white mb-2">{result.appName}</h4>
                <p className="text-slate-400 italic">"{result.coreConcept}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                  <Layers className="w-4 h-4 text-sky-400 mb-3" />
                  <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1">State</h5>
                  <p className="text-slate-200 text-sm font-medium">{result.recommendedStack.stateManagement}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                  <Cpu className="w-4 h-4 text-purple-400 mb-3" />
                  <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1">Backend</h5>
                  <p className="text-slate-200 text-sm font-medium">{result.recommendedStack.backend}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                  <Code2 className="w-4 h-4 text-green-400 mb-3" />
                  <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-1">Database</h5>
                  <p className="text-slate-200 text-sm font-medium">{result.recommendedStack.localDatabase}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-slate-200 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" /> Core Features
                  </h5>
                  <ul className="grid grid-cols-1 gap-2">
                    {result.features.map((feature, i) => (
                      <li key={i} className="bg-slate-800/30 text-slate-300 text-xs py-2 px-3 rounded-lg border border-slate-700/30">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Code Snippet & Packages */}
            <div className="space-y-6">
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-slate-500" />
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">dart_snippet.dart</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                  </div>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-xs font-mono leading-relaxed">
                    <code className="text-sky-300">
                      {result.starterCode}
                    </code>
                  </pre>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-200 mb-3 flex items-center gap-2 text-sm">
                  <Layers className="w-4 h-4 text-sky-400" /> Dependencies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {result.packages.map((pkg, i) => (
                    <span key={i} className="px-2.5 py-1 bg-sky-500/10 text-sky-400 text-[10px] rounded-lg border border-sky-500/20 font-mono">
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-950/40 p-8 rounded-2xl border border-slate-800/50">
            <h5 className="font-bold text-slate-200 mb-6 uppercase tracking-tighter text-sm flex items-center gap-2">
              <Code2 className="w-4 h-4 text-sky-500" /> Implementation Roadmap
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {result.roadmap.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl group-hover:border-sky-500/50 transition-all h-full">
                    <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold flex items-center justify-center mb-3 border border-sky-500/20">
                      0{i+1}
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppArchitect;
