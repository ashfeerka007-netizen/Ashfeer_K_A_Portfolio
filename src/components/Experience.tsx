import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, 
  CheckCircle2, Sparkles, Terminal, Building2 
} from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedIds, setExpandedIds] = useState<string[]>(experiences.map(e => e.id));

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Track Record
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Detailed timeline of roles, engineering responsibilities, production deployments, and tangible technical achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {experiences.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all">
                  
                  {/* Top Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xl font-bold text-white">{exp.role}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-semibold">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-sm text-slate-300 mt-1 font-medium">
                        <span className="flex items-center gap-1.5 text-blue-400">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        <span>{exp.startDate} — {exp.endDate}</span>
                      </div>

                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                        title={isExpanded ? "Collapse Details" : "Expand Details"}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* High Level Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Expandable Section */}
                  {isExpanded && (
                    <div className="space-y-6 pt-2 animate-in fade-in duration-300">
                      
                      {/* Responsibilities List */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-2.5">
                          Key Responsibilities & Architectural Scope
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-2.5">
                          Measurable Engineering Impact
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-300">{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-mono text-slate-500 mr-2">Tech Stack:</span>
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono hover:border-sky-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
