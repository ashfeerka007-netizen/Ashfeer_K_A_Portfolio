import React from 'react';
import { 
  GraduationCap, Award, Calendar, MapPin, ExternalLink, 
  CheckCircle2, Sparkles, BookOpen 
} from 'lucide-react';
import { EducationItem, CertificationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const Education: React.FC<EducationProps> = ({ education, certifications }) => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Formal computer science education background and continuous professional certifications in software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              Academic Degrees
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div 
                  key={edu.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-sky-500/30 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm text-sky-400 font-medium">{edu.institution}</p>
                    </div>

                    <div className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono w-fit flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider mb-2">
                      Key Academic Milestones
                    </h5>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider mb-2">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-emerald-400" />
              Verified Certifications
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/30 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                      <p className="text-xs text-emerald-400 font-medium">{cert.organization}</p>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono flex-shrink-0">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.credentialUrl && (
                    <div className="pt-2 flex justify-end">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-sky-400 hover:text-white font-semibold flex items-center gap-1"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
