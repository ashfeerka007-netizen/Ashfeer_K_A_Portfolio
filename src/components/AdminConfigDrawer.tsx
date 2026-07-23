import React, { useState } from 'react';
import { 
  X, Settings, Save, RotateCcw, Copy, Check, 
  User, Briefcase, Code, FolderGit2, Sparkles, FileText, Upload, Image
} from 'lucide-react';
import { PortfolioConfig } from '../types/portfolio';

interface AdminConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
  onUpdateConfig: (newConfig: PortfolioConfig) => void;
  onResetDefault: () => void;
}

export const AdminConfigDrawer: React.FC<AdminConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onResetDefault
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'skills' | 'json'>('profile');
  const [profileForm, setProfileForm] = useState(config.profile);
  const [jsonString, setJsonString] = useState(JSON.stringify(config, null, 2));
  const [copied, setCopied] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfileForm(prev => ({ ...prev, avatarUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    const updated = { ...config, profile: profileForm };
    onUpdateConfig(updated);
  };

  const handleApplyJson = () => {
    try {
      const parsed = JSON.parse(jsonString);
      onUpdateConfig(parsed);
      alert('Configuration updated successfully!');
    } catch (err) {
      alert('Invalid JSON format. Please check syntax.');
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-2xl h-full p-6 sm:p-8 border-l border-slate-800 shadow-2xl flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-sky-400" />
              <h3 className="text-xl font-bold text-white">Live Portfolio Config Editor</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 pb-4 border-b border-slate-800">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Profile Info</span>
            </button>

            <button
              onClick={() => setActiveTab('json')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                activeTab === 'json' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Config JSON</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="py-6 space-y-6">
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileForm.name}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={profileForm.title}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={profileForm.email}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">GitHub Username</label>
                    <input
                      type="text"
                      name="githubUsername"
                      value={profileForm.githubUsername}
                      onChange={handleProfileChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Profile Photo (Upload or Image URL)</label>
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={profileForm.avatarUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80"} 
                      alt="Preview" 
                      className="w-12 h-12 rounded-xl object-cover border border-slate-700 bg-slate-900" 
                    />
                    <label className="cursor-pointer px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Local Photo</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleAvatarFileUpload} 
                        className="hidden" 
                      />
                    </label>
                  </div>
                  <input
                    type="text"
                    name="avatarUrl"
                    placeholder="https://..."
                    value={profileForm.avatarUrl}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Summary</label>
                  <textarea
                    name="summary"
                    rows={4}
                    value={profileForm.summary}
                    onChange={handleProfileChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs"
                  ></textarea>
                </div>

                <button
                  onClick={handleSaveProfile}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Profile Updates</span>
                </button>
              </div>
            )}

            {activeTab === 'json' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Direct JSON editor for all portfolio data including skills, projects, solutions, education, and social links.
                </p>

                <textarea
                  rows={16}
                  value={jsonString}
                  onChange={e => setJsonString(e.target.value)}
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 font-mono text-xs focus:outline-none focus:border-sky-500 resize-none"
                ></textarea>

                <div className="flex gap-3">
                  <button
                    onClick={handleApplyJson}
                    className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Apply JSON</span>
                  </button>

                  <button
                    onClick={handleCopyJson}
                    className="py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Reset button */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onResetDefault}
            className="text-xs text-rose-400 hover:text-rose-300 font-mono flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original Defaults</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500">
            Saved to LocalStorage
          </span>
        </div>

      </div>
    </div>
  );
};
