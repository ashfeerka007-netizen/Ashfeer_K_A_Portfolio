import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, Search, Filter, 
  Sparkles, CheckCircle2, Eye, X, Layers, Code, Award 
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectSoftware: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectSoftware }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Management Systems', 'Full Stack', 'Frontend', 'Backend', 'AI', 'Open Source'];

  const filteredProjects = projects.filter(proj => {
    const matchesCat = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesQuery = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Built Applications
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Explore a curated selection of full-stack web applications, business management tools, and software solutions built with clean architecture.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sky-400 text-[11px] font-mono font-semibold backdrop-blur-md">
                    {proj.category}
                  </span>

                  {/* Status Pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono font-semibold backdrop-blur-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {proj.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Features List */}
                  <div className="pt-2 space-y-1">
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-800 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Quick View</span>
                </button>

                <div className="flex items-center gap-2">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md shadow-blue-600/20 transition-colors"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Quick View Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sky-400 text-xs font-mono font-semibold">
                  {activeModalProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Role: {activeModalProject.role}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>

              <div className="h-56 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.features.map((feat, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Duration: {activeModalProject.duration}
                </span>

                <div className="flex items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                  )}
                  {activeModalProject.liveDemoUrl && (
                    <a
                      href={activeModalProject.liveDemoUrl}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/25"
                    >
                      <span>Open Software Portfolio</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
