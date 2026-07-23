import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Moon, Sun, Code2, Download, Briefcase, 
  Settings, Sparkles, Terminal, ChevronRight 
} from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface NavbarProps {
  profile: ProfileInfo;
  isDarkMode: boolean;
  toggleTheme: () => void;
  openConfig: () => void;
  openSeoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  isDarkMode,
  toggleTheme,
  openConfig,
  openSeoModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'software-portfolio', label: 'Software Suite' },
    { id: 'github', label: 'GitHub Live' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollSpy
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 glass-panel shadow-2xl border-b border-slate-800/80 dark:border-slate-800/80' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 dark:bg-slate-950 rounded-[11px] flex items-center justify-center text-blue-400 group-hover:text-sky-300 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                {profile.name}
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-blue-600 dark:text-sky-400 font-mono tracking-wider block -mt-1">
                DEV.PORTFOLIO
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white bg-blue-600 shadow-md shadow-blue-500/30' 
                      : 'text-slate-400 dark:text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2.5 rounded-xl bg-slate-800/50 dark:bg-slate-900/80 border border-slate-700/60 dark:border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 transition-all focus:outline-none"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Admin Config button */}
            <button
              onClick={openConfig}
              id="admin-config-btn"
              title="Edit Profile Configuration"
              className="p-2.5 rounded-xl bg-slate-800/50 dark:bg-slate-900/80 border border-slate-700/60 dark:border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 transition-all focus:outline-none"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Get In Touch CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              id="nav-hire-me-btn"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2 border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-600/20 text-sky-400 border border-blue-500/30' 
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={openConfig}
                className="flex-1 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4 text-sky-400" />
                Edit Config
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
