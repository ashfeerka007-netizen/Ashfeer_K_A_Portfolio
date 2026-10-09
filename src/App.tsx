import React, { useState, useEffect } from 'react';
import { initialPortfolioConfig } from './data/portfolioConfig';
import { PortfolioConfig } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SoftwareShowcase } from './components/SoftwareShowcase';
import { GitHubSection } from './components/GitHubSection';
import { Education } from './components/Education';
import { ResumeViewer } from './components/ResumeViewer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminConfigDrawer } from './components/AdminConfigDrawer';
import { SeoModal } from './components/SeoModal';

export default function App() {
  // Config state initialized from localStorage or defaults
  const [config, setConfig] = useState<PortfolioConfig>(() => {
    const saved = localStorage.getItem('ashfeer_portfolio_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.profile && parsed.profile.email === "ashfeerka@gmail.com" && parsed.profile.githubUsername === "ashfeerka007-netizen") {
          if (parsed.profile.avatarUrl?.includes('unsplash.com') || parsed.profile.avatarUrl === '/profile.jpg') {
            parsed.profile.avatarUrl = initialPortfolioConfig.profile.avatarUrl;
          }
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse saved portfolio config:', e);
      }
    }
    return initialPortfolioConfig;
  });

  // Theme mode state (Dark default)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('ashfeer_portfolio_theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Admin and SEO drawers state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);

  // Sync theme class on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('ashfeer_portfolio_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('ashfeer_portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  // Persist config changes
  const handleUpdateConfig = (newConfig: PortfolioConfig) => {
    setConfig(newConfig);
    localStorage.setItem('ashfeer_portfolio_config', JSON.stringify(newConfig));
  };

  const handleResetConfig = () => {
    setConfig(initialPortfolioConfig);
    localStorage.removeItem('ashfeer_portfolio_config');
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleNavigateSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Sticky Top Navigation */}
      <Navbar
        profile={config.profile}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        openConfig={() => setIsAdminOpen(true)}
        openSeoModal={() => setIsSeoOpen(true)}
      />

      {/* Main Sections Stack */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          profile={config.profile}
          onOpenResume={() => handleNavigateSection('resume')}
          onNavigateSection={handleNavigateSection}
        />

        {/* 2. About Me */}
        <About profile={config.profile} />

        {/* 3. Work Experience */}
        <Experience experiences={config.experiences} />

        {/* 4. Skills & Capabilities */}
        <Skills categories={config.skills} />

        {/* 5. Featured Projects Gallery */}
        <Projects
          projects={config.projects}
          onSelectSoftware={() => handleNavigateSection('software-portfolio')}
        />

        {/* 6. Software Development Portfolio (Deep Dive Cases) */}
        <SoftwareShowcase solutions={config.softwareSolutions} />

        {/* 7. GitHub Section (Live Sync) */}
        <GitHubSection username={config.profile.githubUsername} />

        {/* 8. Education & Certifications */}
        <Education
          education={config.education}
          certifications={config.certifications}
        />

        {/* 9. Interactive Resume Viewer */}
        <ResumeViewer config={config} />

        {/* 10. Contact Section */}
        <Contact profile={config.profile} />
      </main>

      {/* Footer */}
      <Footer
        profile={config.profile}
        onOpenConfig={() => setIsAdminOpen(true)}
        onOpenSeo={() => setIsSeoOpen(true)}
      />

      {/* Admin Config Live Drawer */}
      <AdminConfigDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={config}
        onUpdateConfig={handleUpdateConfig}
        onResetDefault={handleResetConfig}
      />

      {/* SEO & Meta Tags Modal */}
      <SeoModal
        isOpen={isSeoOpen}
        onClose={() => setIsSeoOpen(false)}
        profile={config.profile}
      />

    </div>
  );
}
