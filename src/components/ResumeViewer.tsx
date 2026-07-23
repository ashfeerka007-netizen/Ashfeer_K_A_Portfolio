import React, { useRef } from 'react';
import { 
  FileText, Download, Printer, Copy, Check, ExternalLink, 
  Sparkles, Mail, Phone, MapPin, Github, Linkedin, Terminal, Briefcase, GraduationCap 
} from 'lucide-react';
import { PortfolioConfig } from '../types/portfolio';

interface ResumeViewerProps {
  config: PortfolioConfig;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ config }) => {
  const [copied, setCopied] = React.useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const { profile, experiences, education, skills, certifications } = config;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    // Triggers print dialog which allows saving as PDF, or generates formatted plain text download
    const element = document.createElement("a");
    const resumeText = `
${profile.name} — ${profile.title}
Email: ${profile.email} | Phone: ${profile.phone} | Location: ${profile.location}
GitHub: ${profile.githubUrl} | LinkedIn: ${profile.linkedinUrl}

PROFESSIONAL SUMMARY:
${profile.summary}

WORK EXPERIENCE:
${experiences.map(e => `
- ${e.role} | ${e.company} (${e.startDate} - ${e.endDate})
  Location: ${e.location}
  Responsibilities:
  ${e.responsibilities.map(r => `  * ${r}`).join('\n')}
  Achievements:
  ${e.achievements.map(a => `  * ${a}`).join('\n')}
`).join('\n')}

EDUCATION:
${education.map(e => `- ${e.degree}, ${e.institution} (${e.duration})`).join('\n')}

TECHNICAL SKILLS:
${skills.map(s => `${s.category}: ${s.skills.map(sk => sk.name).join(', ')}`).join('\n')}
    `.trim();

    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyText = () => {
    const text = `${profile.name} - ${profile.title}\n${profile.email} | ${profile.phone}\n${profile.summary}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-24 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive CV</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Curriculum Vitae
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Inspect formatted resume, print directly, or export formatted document.
          </p>

          {/* Action Toolbar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleDownloadPdf}
              id="resume-download-btn"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume File</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blue-400" />}
              <span>{copied ? 'Copied Summary!' : 'Copy Summary'}</span>
            </button>
          </div>
        </div>

        {/* Paper CV Preview Card */}
        <div 
          ref={resumeRef}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl bg-slate-900/90 text-slate-100 print:bg-white print:text-slate-900 print:p-0 print:shadow-none space-y-8"
        >
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-slate-700 shadow-md bg-slate-900" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900">{profile.name}</h1>
                  <p className="text-sky-400 font-semibold text-sm sm:text-base mt-1 print:text-blue-700">{profile.title}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Experience Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white print:text-slate-900">{exp.role} — <span className="text-sky-400 print:text-blue-700">{exp.company}</span></h4>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 print:text-slate-700">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-3">
              Technical Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((sCat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300 text-xs">
                  <span className="font-bold text-white print:text-slate-900 block mb-1">{sCat.category}:</span>
                  <span className="text-slate-300 print:text-slate-700 font-mono">{sCat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            {education.map(edu => (
              <div key={edu.id} className="flex justify-between text-xs text-slate-300 print:text-slate-800">
                <span className="font-bold text-white print:text-slate-900">{edu.degree}, {edu.institution}</span>
                <span className="font-mono text-slate-400">{edu.duration}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
