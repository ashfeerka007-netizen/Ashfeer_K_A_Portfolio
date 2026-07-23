import React from 'react';
import { 
  ArrowUp, Github, Linkedin, Mail, Terminal, Heart, 
  Settings, Globe, Shield 
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface FooterProps {
  profile: ProfileInfo;
  onOpenConfig: () => void;
  onOpenSeo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenConfig, onOpenSeo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-base font-bold text-white block">
                {profile.name}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                {profile.title}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Action Links & Back To Top */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSeo}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>SEO Meta</span>
            </button>

            <button
              onClick={onOpenConfig}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 text-xs font-mono transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Config</span>
            </button>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
