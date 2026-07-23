import React, { useState } from 'react';
import { X, Globe, Copy, Check, FileCode, Search, ShieldCheck } from 'lucide-react';
import { ProfileInfo } from '../types/portfolio';

interface SeoModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileInfo;
}

export const SeoModal: React.FC<SeoModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'meta' | 'schema' | 'sitemap' | 'robots'>('meta');
  const [copied, setCopied] = useState(false);

  const siteUrl = "https://ashfeerka.dev";

  const metaTags = `<!-- Primary Meta Tags -->
<title>${profile.name} — ${profile.title}</title>
<meta name="title" content="${profile.name} — ${profile.title}">
<meta name="description" content="${profile.summary}">
<meta name="keywords" content="${profile.name}, Software Developer, Full Stack, React, .NET, Node.js, Portfolio">
<link rel="canonical" href="${siteUrl}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="${siteUrl}">
<meta property="og:title" content="${profile.name} — ${profile.title}">
<meta property="og:description" content="${profile.summary}">
<meta property="og:image" content="${profile.avatarUrl}">

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${siteUrl}">
<meta property="twitter:title" content="${profile.name} — ${profile.title}">
<meta property="twitter:description" content="${profile.summary}">
<meta property="twitter:image" content="${profile.avatarUrl}">`;

  const jsonLdSchema = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "${profile.name}",
  "jobTitle": "${profile.title}",
  "url": "${siteUrl}",
  "sameAs": [
    "${profile.githubUrl}",
    "${profile.linkedinUrl}"
  ],
  "knowsAbout": ${JSON.stringify(profile.coreStrengths)}
}`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/#software-portfolio</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/#projects</loc>
    <priority>0.8</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`;

  const getContentToCopy = () => {
    if (activeTab === 'meta') return metaTags;
    if (activeTab === 'schema') return jsonLdSchema;
    if (activeTab === 'sitemap') return sitemapXml;
    return robotsTxt;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContentToCopy());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-800 shadow-2xl relative">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-sky-400" />
            <h3 className="text-xl font-bold text-white">SEO & Meta Tag Suite</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 my-4 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'meta' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}
          >
            Meta & OG Tags
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'schema' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}
          >
            JSON-LD Schema
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'sitemap' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}
          >
            Sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'robots' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'}`}
          >
            Robots.txt
          </button>
        </div>

        {/* Content Box */}
        <div className="space-y-4">
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 font-mono text-xs overflow-x-auto max-h-72">
            {getContentToCopy()}
          </pre>

          <div className="flex justify-end">
            <button
              onClick={handleCopy}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Snippet'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
