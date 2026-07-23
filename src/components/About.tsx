import React from 'react';
import { 
  UserCheck, Code, TrendingUp, ShieldCheck, Target, 
  Lightbulb, Sparkles, Award, CheckCircle, Clock 
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface AboutProps {
  profile: ProfileInfo;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-blue-400" />,
    UserCheck: <UserCheck className="w-5 h-5 text-sky-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-indigo-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            11 Years of Accounting Mastery Meets Cutting-Edge Tech Innovation
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Senior Accounting Clerk at Wayanad District Police Co-operative Society Ltd, uniting financial ledger precision with Vibe Coding, Google AI Studio, and Android Studio software capabilities.
          </p>
        </div>

        {/* Top Grid: Bio & Core Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Professional Overview Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {profile.summary}
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-3">
                  Core Strengths & Pillars
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.coreStrengths.map((strength, idx) => (
                    <div 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Location: {profile.location}</span>
              <span>Status: Active Developer</span>
            </div>
          </div>

          {/* Mission & Technical Interests Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-slate-950/90">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Personal Mission
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{profile.mission}"
              </p>

              <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-3">
                Technical Focus Areas
              </h4>
              <ul className="space-y-2">
                {profile.technicalInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Full Software Lifecycle</p>
                <p className="text-[11px] text-slate-400">Requirements → Design → Deployment → Support</p>
              </div>
            </div>
          </div>

        </div>

        {/* Professional Values Cards */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 font-mono text-center lg:text-left flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Engineering Values & Philosophy
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.values.map((val, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="mb-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800 w-fit group-hover:border-sky-500/40 transition-colors">
                  {iconMap[val.icon] || <Code className="w-5 h-5 text-blue-400" />}
                </div>
                <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
