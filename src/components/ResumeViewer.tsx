import React, { useRef, useState } from 'react';
import { 
  FileText, Download, Printer, Copy, Check, ExternalLink, 
  Sparkles, Mail, Phone, MapPin, Github, Linkedin, Terminal, 
  Briefcase, GraduationCap, Award, Eye, FileDown, CheckCircle2
} from 'lucide-react';
import { PortfolioConfig } from '../types/portfolio';

interface ResumeViewerProps {
  config: PortfolioConfig;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ config }) => {
  const [copied, setCopied] = useState(false);
  const [docxDownloading, setDocxDownloading] = useState(false);
  const [pdfDownloading, setPdfDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const { profile, experiences, education, skills, certifications } = config;

  // 1. HIGH-PRECISION PDF DOWNLOAD / PRINT ENGINE
  const handleDownloadPdf = () => {
    setPdfDownloading(true);
    setTimeout(() => {
      window.print();
      setPdfDownloading(false);
    }, 200);
  };

  // 2. MICROSOFT WORD (.DOCX) DYNAMIC DOCUMENT GENERATOR
  const handleDownloadDocx = () => {
    setDocxDownloading(true);

    try {
      const docxHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>${profile.name} - Curriculum Vitae</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page WordSection1 {
      size: 8.5in 11.0in;
      margin: 0.8in 0.8in 0.8in 0.8in;
      mso-header-margin: 0.5in;
      mso-footer-margin: 0.5in;
      mso-paper-source: 0;
    }
    div.WordSection1 { page: WordSection1; }
    body {
      font-family: 'Segoe UI', Calibri, Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
      color: #1e293b;
      background: #ffffff;
    }
    h1 {
      font-size: 22pt;
      color: #0f172a;
      margin: 0 0 4pt 0;
      font-weight: bold;
    }
    .title-sub {
      font-size: 12pt;
      color: #2563eb;
      font-weight: 600;
      margin: 0 0 8pt 0;
    }
    .contact-bar {
      font-size: 9.5pt;
      color: #475569;
      margin-bottom: 16pt;
      padding-bottom: 8pt;
      border-bottom: 1.5pt solid #cbd5e1;
    }
    h2 {
      font-size: 12pt;
      color: #1e3a8a;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      border-bottom: 1.5pt solid #3b82f6;
      padding-bottom: 3pt;
      margin-top: 14pt;
      margin-bottom: 8pt;
      font-weight: bold;
    }
    .job-title {
      font-size: 11pt;
      font-weight: bold;
      color: #0f172a;
    }
    .company {
      font-size: 10.5pt;
      color: #2563eb;
      font-weight: 600;
    }
    .meta-date {
      font-size: 9.5pt;
      color: #64748b;
      font-style: italic;
    }
    p {
      margin: 0 0 6pt 0;
    }
    ul {
      margin: 4pt 0 8pt 0;
      padding-left: 18pt;
    }
    li {
      margin-bottom: 3pt;
      font-size: 10pt;
    }
    table.skills-table {
      width: 100%;
      border-collapse: collapse;
      margin: 4pt 0 10pt 0;
    }
    table.skills-table td {
      padding: 4pt 6pt;
      vertical-align: top;
      font-size: 9.5pt;
      border-bottom: 0.5pt solid #f1f5f9;
    }
    .skill-cat {
      font-weight: bold;
      color: #0f172a;
      width: 32%;
    }
  </style>
</head>
<body>
<div class="WordSection1">
  
  <!-- Header -->
  <h1>${profile.name}</h1>
  <div class="title-sub">${profile.title}</div>
  <div class="contact-bar">
    <strong>Email:</strong> ${profile.email} &nbsp;|&nbsp; 
    <strong>Phone:</strong> ${profile.phone} &nbsp;|&nbsp; 
    <strong>Location:</strong> ${profile.location}<br>
    <strong>GitHub:</strong> <a href="${profile.githubUrl}">${profile.githubUrl}</a> &nbsp;|&nbsp; 
    <strong>LinkedIn:</strong> <a href="${profile.linkedinUrl}">${profile.linkedinUrl}</a>
  </div>

  <!-- Summary -->
  <h2>Professional Summary</h2>
  <p>${profile.summary}</p>

  <!-- Work Experience -->
  <h2>Work Experience (11 Years Professional Track Record)</h2>
  ${experiences.map(exp => `
    <div style="margin-bottom: 12pt;">
      <table style="width: 100%; margin-bottom: 2pt;">
        <tr>
          <td style="text-align: left;"><span class="job-title">${exp.role}</span> — <span class="company">${exp.company}</span></td>
          <td style="text-align: right;"><span class="meta-date">${exp.startDate} – ${exp.endDate}</span></td>
        </tr>
      </table>
      <p style="font-size: 9.5pt; color: #475569; margin-bottom: 4pt;"><em>${exp.location} (${exp.type})</em></p>
      <p>${exp.description}</p>
      
      <p style="font-weight: bold; margin-bottom: 2pt; font-size: 9.5pt; color: #1e3a8a;">Key Responsibilities & Operations:</p>
      <ul>
        ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>

      <p style="font-weight: bold; margin-bottom: 2pt; font-size: 9.5pt; color: #047857;">Key Achievements:</p>
      <ul>
        ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <p style="font-size: 9pt; color: #64748b;"><strong>Technologies / Tools:</strong> ${exp.technologies.join(', ')}</p>
    </div>
  `).join('')}

  <!-- Technical Competencies -->
  <h2>Technical Competencies & Domain Expertise</h2>
  <table class="skills-table">
    ${skills.map(s => `
      <tr>
        <td class="skill-cat">${s.category}</td>
        <td>${s.skills.map(sk => `${sk.name}${sk.years ? ` (${sk.years} yrs)` : ''}`).join(', ')}</td>
      </tr>
    `).join('')}
  </table>

  <!-- Education -->
  <h2>Education & Academic Credentials</h2>
  ${education.map(edu => `
    <div style="margin-bottom: 8pt;">
      <table style="width: 100%;">
        <tr>
          <td><strong>${edu.degree}</strong> — <span style="color: #2563eb;">${edu.institution}</span></td>
          <td style="text-align: right; color: #64748b; font-size: 9.5pt;">${edu.duration}</td>
        </tr>
      </table>
      ${edu.achievements ? `<p style="font-size: 9.5pt; color: #475569; margin: 2pt 0;">${edu.achievements.join(' | ')}</p>` : ''}
    </div>
  `).join('')}

  <!-- Certifications -->
  <h2>Verified Professional Certifications</h2>
  ${certifications.map(c => `
    <div style="margin-bottom: 6pt;">
      <table style="width: 100%;">
        <tr>
          <td><strong>${c.title}</strong> — <span style="color: #059669;">${c.organization}</span></td>
          <td style="text-align: right; color: #64748b; font-size: 9.5pt;">${c.issueDate}</td>
        </tr>
      </table>
      <p style="font-size: 9pt; color: #64748b; margin: 1pt 0;">Skills: ${c.skills.join(', ')}</p>
    </div>
  `).join('')}

</div>
</body>
</html>
      `.trim();

      const blob = new Blob(['\ufeff', docxHtml], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.docx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export DOCX:', err);
    } finally {
      setDocxDownloading(false);
    }
  };

  // 3. PLAIN TEXT SUMMARY CLIPBOARD COPY
  const handleCopyText = () => {
    const text = `
${profile.name} — ${profile.title}
Email: ${profile.email} | Phone: ${profile.phone} | Location: ${profile.location}
GitHub: ${profile.githubUrl} | LinkedIn: ${profile.linkedinUrl}

PROFESSIONAL SUMMARY:
${profile.summary}

WORK EXPERIENCE:
${experiences.map(e => `
- ${e.role} at ${e.company} (${e.startDate} - ${e.endDate})
  Location: ${e.location}
  Responsibilities:
  ${e.responsibilities.map(r => `  * ${r}`).join('\n')}
  Achievements:
  ${e.achievements.map(a => `  * ${a}`).join('\n')}
`).join('\n')}

EDUCATION:
${education.map(e => `- ${e.degree}, ${e.institution} (${e.duration})`).join('\n')}

CORE SKILLS:
${skills.map(s => `${s.category}: ${s.skills.map(sk => sk.name).join(', ')}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="resume" className="py-24 relative bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 no-print">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive CV & Documents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curriculum Vitae (PDF & Word Formats)
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            View formatted resume on-screen, download as ready-to-print <strong>PDF document</strong>, or export as editable <strong>Microsoft Word (.docx)</strong>.
          </p>

          {/* Action Toolbar */}
          <div id="resume-toolbar" className="mt-8 flex flex-wrap items-center justify-center gap-3">
            
            {/* 1. PDF Download Button */}
            <button
              onClick={handleDownloadPdf}
              id="resume-download-pdf-btn"
              disabled={pdfDownloading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              title="Download formatted resume as PDF"
            >
              <Download className="w-4 h-4" />
              <span>{pdfDownloading ? 'Generating PDF...' : 'Download Resume (PDF)'}</span>
            </button>

            {/* 2. Word (.DOCX) Download Button */}
            <button
              onClick={handleDownloadDocx}
              id="resume-download-docx-btn"
              disabled={docxDownloading}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-sky-500 text-slate-100 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-slate-800 transition-all hover:scale-[1.02]"
              title="Download editable Microsoft Word document"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              <span>{docxDownloading ? 'Preparing Word DOCX...' : 'Download Word (.docx)'}</span>
            </button>

            {/* 3. Direct Print Button */}
            <button
              onClick={handleDownloadPdf}
              id="resume-print-btn"
              className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
              title="Open browser print dialog"
            >
              <Printer className="w-4 h-4 text-sky-400" />
              <span>Print Document</span>
            </button>

            {/* 4. Copy Summary Button */}
            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 font-semibold text-xs flex items-center gap-2 transition-colors"
              title="Copy plain text summary to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-blue-400" />}
              <span>{copied ? 'Copied Summary!' : 'Copy Text'}</span>
            </button>
          </div>

          {/* Format Badges Indicator */}
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              PDF Format Ready (A4 / Letter)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              Microsoft Word (.docx) Compatible
            </span>
          </div>

        </div>

        {/* Paper CV Preview Card */}
        <div 
          ref={resumeRef}
          id="resume-printable"
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl bg-slate-900/90 text-slate-100 print:bg-white print:text-slate-900 print:p-0 print:shadow-none space-y-8"
        >
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img 
                  src={profile.avatarUrl} 
                  alt={profile.name} 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-slate-700 shadow-md bg-slate-900 print:border-slate-300" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900">{profile.name}</h1>
                  <p className="text-sky-400 font-semibold text-sm sm:text-base mt-1 print:text-blue-700">{profile.title}</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 print:text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-blue-700" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-400 print:text-blue-700" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 print:text-blue-700" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-blue-700 uppercase tracking-wider mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Experience Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-blue-700 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Work Experience (11 Years Professional Track Record)
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 border-b border-slate-800/60 print:border-slate-200 pb-4 last:border-none">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white print:text-slate-900">{exp.role} — <span className="text-sky-400 print:text-blue-700">{exp.company}</span></h4>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">{exp.startDate} – {exp.endDate}</span>
                  </div>
                  <p className="text-xs text-slate-400 print:text-slate-600 font-mono">{exp.location} • {exp.type}</p>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <span className="text-[11px] font-mono text-sky-400 print:text-blue-700 block mb-1">Key Responsibilities:</span>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 print:text-slate-700">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 print:text-emerald-700 block mb-1">Key Achievements:</span>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 print:text-slate-700">
                      {exp.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[11px] text-slate-400 print:text-slate-600 font-mono pt-1">
                    <strong>Tech Stack:</strong> {exp.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-blue-700 uppercase tracking-wider mb-3">
              Technical Core Competencies & Domain Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((sCat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300 text-xs">
                  <span className="font-bold text-white print:text-slate-900 block mb-1">{sCat.category}:</span>
                  <span className="text-slate-300 print:text-slate-700 font-mono">{sCat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 print:text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>
            <div className="space-y-2">
              {education.map(edu => (
                <div key={edu.id} className="flex justify-between text-xs text-slate-300 print:text-slate-800 border-b border-slate-800/40 print:border-slate-200 pb-1.5 last:border-none">
                  <div>
                    <span className="font-bold text-white print:text-slate-900 block">{edu.degree}</span>
                    <span className="text-slate-400 print:text-slate-600">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-slate-400">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div>
            <h3 className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Verified Credentials & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certifications.map(c => (
                <div key={c.id} className="p-2.5 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300 text-xs">
                  <div className="flex justify-between font-semibold text-white print:text-slate-900">
                    <span>{c.title}</span>
                    <span className="text-slate-400 font-mono text-[10px]">{c.issueDate}</span>
                  </div>
                  <p className="text-[11px] text-emerald-400 print:text-emerald-700 mt-0.5">{c.organization}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
