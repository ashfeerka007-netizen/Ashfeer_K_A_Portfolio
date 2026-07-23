import React, { useState } from 'react';
import { 
  Code2, Layers, Server, Cpu, Wrench, Search, 
  Sparkles, Star, CheckCircle, Terminal, FileCode, Atom 
} from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...categories.map(c => c.category)];

  const filteredCategories = categories.map(cat => {
    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter(cat => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) return false;
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Languages & Technologies
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Comprehensive breakdown of software engineering stack, languages, frameworks, database systems, and developer tools.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 max-w-full no-scrollbar">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skill (e.g., React, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, catIdx) => (
            <div 
              key={catIdx}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {cat.skills.length} Items
                  </span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          {skill.isPrimary && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
                          {skill.name}
                        </span>
                        
                        <div className="flex items-center gap-3 text-[11px] font-mono">
                          {skill.years && (
                            <span className="text-slate-400">{skill.years} yrs exp</span>
                          )}
                          <span className="text-sky-400 font-bold">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified Expertise</span>
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
