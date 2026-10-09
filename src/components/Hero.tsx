import React, { useState, useEffect } from 'react';
import { 
  Download, ArrowRight, Github, Linkedin, Mail, Code, 
  Sparkles, CheckCircle2, ShieldCheck, Terminal, ExternalLink 
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface HeroProps {
  profile: ProfileInfo;
  onOpenResume: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onNavigateSection }) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    const currentTitle = profile.typingTitles[typingIndex % profile.typingTitles.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTypingIndex(prev => prev + 1);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        if (displayedText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingIndex, profile.typingTitles]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-mesh">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-emerald-400 font-semibold">11 Years Accounting Experience</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Financial Lead & Vibe Coding Specialist</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400">{profile.name}</span>
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-sky-400 dark:text-sky-400">
                  {displayedText}
                </span>
                <span className="w-0.5 h-7 bg-sky-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Short Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profile.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenResume}
                id="hero-download-resume-btn"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>View & Download Resume (PDF / DOCX)</span>
              </button>

              <button
                onClick={() => onNavigateSection('projects')}
                id="hero-view-projects-btn"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 dark:bg-slate-900/80 border border-slate-700 dark:border-slate-800 text-slate-200 hover:text-white hover:border-sky-500/50 hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-sky-400" />
                <span>View Featured Projects</span>
              </button>

              <button
                onClick={() => onNavigateSection('contact')}
                id="hero-contact-btn"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/40 dark:bg-slate-800/40 border border-slate-700/60 text-slate-300 hover:text-white hover:border-blue-500 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-slate-800/80">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{profile.yearsOfExperience}+</div>
                <div className="text-xs text-slate-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{profile.projectsCompleted}+</div>
                <div className="text-xs text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{profile.codeLines}</div>
                <div className="text-xs text-slate-400">Lines Written</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                id="hero-email-link"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-all"
                title="Email Direct"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Avatar Frame & Software Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-3xl glass-panel p-4 overflow-hidden border border-slate-800 shadow-2xl">
                
                {/* Photo Header */}
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel border border-slate-700/60 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono text-sky-400 font-semibold">GITHUB DEV</p>
                        <p className="text-sm font-bold text-white">@{profile.githubUsername}</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                        <Terminal className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono text-slate-300">11 Yrs Accounting & Audit</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                    <span className="text-xs font-mono text-slate-300">Vibe Coding & AI Tech</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
