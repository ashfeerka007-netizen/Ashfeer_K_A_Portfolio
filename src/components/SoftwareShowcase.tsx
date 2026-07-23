import React, { useState } from 'react';
import { 
  Dumbbell, Scissors, PackageCheck, Users, BookOpenCheck, 
  Send, Plus, Trash2, CheckCircle, Clock, AlertCircle, 
  Layers, Terminal, Sparkles, Cpu, ChevronRight, Play, RefreshCw
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { SoftwareSolution } from '../types/portfolio';

interface SoftwareShowcaseProps {
  solutions: SoftwareSolution[];
}

export const SoftwareShowcase: React.FC<SoftwareShowcaseProps> = ({ solutions }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutions[0]?.id || 'sol-1');
  const activeSolution = solutions.find(s => s.id === activeSolutionId) || solutions[0];

  // -------------------------------------------------------------
  // SIMULATOR STATES FOR EACH OF THE 5 SYSTEMS
  // -------------------------------------------------------------

  // 1. Gym System Simulator State
  const [gymMembers, setGymMembers] = useState([
    { id: 'm1', name: 'Rahul V', plan: 'Quarterly Gym + Cardio', expiryDays: 4, phone: '+919876543210', status: 'Expiring Soon' },
    { id: 'm2', name: 'Anjali Nair', plan: 'Annual VIP Membership', expiryDays: 120, phone: '+919876543211', status: 'Active' },
    { id: 'm3', name: 'Mohammed Shafi', plan: 'Monthly Strength Plan', expiryDays: -2, phone: '+919876543212', status: 'Overdue' }
  ]);
  const [newGymName, setNewGymName] = useState('');
  const [gymMessageSent, setGymMessageSent] = useState<string | null>(null);

  const sendWhatsAppAlert = (memberName: string, phone: string) => {
    setGymMessageSent(`WhatsApp Payment Reminder sent to ${memberName} (${phone})!`);
    setTimeout(() => setGymMessageSent(null), 4000);
  };

  const addGymMember = () => {
    if (!newGymName.trim()) return;
    setGymMembers(prev => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        name: newGymName,
        plan: 'Monthly Standard',
        expiryDays: 30,
        phone: '+919876599999',
        status: 'Active'
      }
    ]);
    setNewGymName('');
  };

  // 2. Barber Queue Simulator State
  const [barberQueue, setBarberQueue] = useState([
    { id: 'q1', customer: 'Arun K', service: 'Haircut & Styling', estWaitMinutes: 15, status: 'In Chair' },
    { id: 'q2', customer: 'Fayiz P', service: 'Beard Trim & Spa', estWaitMinutes: 30, status: 'Next Up' },
    { id: 'q3', customer: 'Sujith M', service: 'Classic Haircut', estWaitMinutes: 45, status: 'Waiting' }
  ]);
  const [newCustomerName, setNewCustomerName] = useState('');
  const [selectedService, setSelectedService] = useState('Haircut ($20)');

  const joinBarberQueue = () => {
    if (!newCustomerName.trim()) return;
    const totalWait = (barberQueue.length + 1) * 15;
    setBarberQueue(prev => [
      ...prev,
      {
        id: `q-${Date.now()}`,
        customer: newCustomerName,
        service: selectedService,
        estWaitMinutes: totalWait,
        status: 'Waiting'
      }
    ]);
    setNewCustomerName('');
  };

  const serveCustomer = (id: string) => {
    setBarberQueue(prev => prev.filter(c => c.id !== id));
  };

  // 3. Rental Stock Simulator State
  const [rentalItems, setRentalItems] = useState([
    { id: 'r1', item: 'Sony FX3 Cinema Camera Kit', category: 'Camera', status: 'Rented', client: 'Pravin Studio', dueDays: -2, deposit: '$500' },
    { id: 'r2', item: 'Yamaha 5KW Diesel Generator', category: 'Power', status: 'Available', client: '—', dueDays: 0, deposit: '$300' },
    { id: 'r3', item: 'Godox SL60W Studio Lights Set', category: 'Lighting', status: 'Rented', client: 'Event Horizon', dueDays: 3, deposit: '$150' }
  ]);

  const toggleRentalStatus = (id: string) => {
    setRentalItems(prev => prev.map(item => {
      if (item.id === id) {
        const isRented = item.status === 'Rented';
        return {
          ...item,
          status: isRented ? 'Available' : 'Rented',
          client: isRented ? '—' : 'Walk-In Rental Client',
          dueDays: isRented ? 0 : 5
        };
      }
      return item;
    }));
  };

  // 4. Vibe Coding AI & Mobile Platform Simulator State
  const [vibeTarget, setVibeTarget] = useState<'Google AI Studio Applet' | 'Antigravity Autonomous Agent' | 'Android Studio Mobile APK'>('Google AI Studio Applet');
  const [vibeLogs, setVibeLogs] = useState([
    "[01:40:02] Initializing Antigravity Agent framework context...",
    "[01:40:05] Synthesizing accounting ledger module prompt via Google AI Studio...",
    "[01:40:08] Compiling responsive React UI component & state store...",
    "[01:40:12] Android Studio native bridge ready. Zero errors detected."
  ]);
  const [isVibeBuilding, setIsVibeBuilding] = useState(false);

  const runVibeBuild = () => {
    setIsVibeBuilding(true);
    const time = new Date().toLocaleTimeString();
    setVibeLogs(prev => [...prev, `[${time}] > Triggering Vibe Coding prompt compilation for target: ${vibeTarget}...`]);
    setTimeout(() => {
      setVibeLogs(prev => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] ✓ Vibe build successfully completed. Module hot-reloaded into ${vibeTarget}!`
      ]);
      setIsVibeBuilding(false);
    }, 1200);
  };

  // 5. Cash Book Register Simulator State
  const [ledgerEntries, setLedgerEntries] = useState([
    { id: 'e1', date: '2026-07-22', category: 'Client Project Fee', type: 'Income', amount: 1200, note: 'Rental Software Deposit' },
    { id: 'e2', date: '2026-07-22', category: 'Server Hosting', type: 'Expense', amount: 80, note: 'Cloud Run & DB Server' },
    { id: 'e3', date: '2026-07-23', category: 'Equipment Purchase', type: 'Expense', amount: 350, note: 'Monitor arm & Keychron' },
    { id: 'e4', date: '2026-07-23', category: 'Gym Subscription Fee', type: 'Income', amount: 450, note: 'Monthly Member Subscriptions' }
  ]);
  const [entryNote, setEntryNote] = useState('');
  const [entryAmount, setEntryAmount] = useState('');
  const [entryType, setEntryType] = useState<'Income' | 'Expense'>('Income');

  const addLedgerEntry = () => {
    if (!entryNote.trim() || !entryAmount || isNaN(Number(entryAmount))) return;
    setLedgerEntries(prev => [
      {
        id: `e-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        category: entryType === 'Income' ? 'General Revenue' : 'General Expense',
        type: entryType,
        amount: parseFloat(entryAmount),
        note: entryNote
      },
      ...prev
    ]);
    setEntryNote('');
    setEntryAmount('');
  };

  const totalIncome = ledgerEntries.filter(e => e.type === 'Income').reduce((sum, e) => sum + e.amount, 0);
  const totalExpense = ledgerEntries.filter(e => e.type === 'Expense').reduce((sum, e) => sum + e.amount, 0);
  const netBalance = totalIncome - totalExpense;

  const chartData = [
    { name: 'Total Income', value: totalIncome, fill: '#38bdf8' },
    { name: 'Total Expense', value: totalExpense, fill: '#f43f5e' }
  ];

  return (
    <section id="software-portfolio" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Software Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Management Systems & Software Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            In-depth architectural breakdown and live interactive simulators of custom software systems developed for businesses, organizations, and service operators.
          </p>
        </div>

        {/* Software Navigation Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {solutions.map((sol) => {
            const isActive = sol.id === activeSolutionId;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveSolutionId(sol.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                  isActive 
                    ? 'bg-blue-600/20 border-sky-400/60 shadow-xl shadow-blue-500/10 text-white' 
                    : 'glass-card border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="mb-3">
                  <div className={`p-2.5 rounded-xl w-fit ${isActive ? 'bg-sky-400 text-slate-950 font-bold' : 'bg-slate-900 text-sky-400'}`}>
                    {sol.previewType === 'gym' && <Dumbbell className="w-5 h-5" />}
                    {sol.previewType === 'barber' && <Scissors className="w-5 h-5" />}
                    {sol.previewType === 'rental' && <PackageCheck className="w-5 h-5" />}
                    {sol.previewType === 'vibe' && <Sparkles className="w-5 h-5" />}
                    {sol.previewType === 'cashbook' && <BookOpenCheck className="w-5 h-5" />}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold font-mono tracking-tight text-white mb-0.5 line-clamp-1">
                    {sol.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {sol.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Software Showcase Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-12">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-sky-400 text-xs font-mono mb-2">
                <span>System Architecture Case Study</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeSolution.name}
              </h2>
              <p className="text-sky-400 font-medium text-sm mt-1">
                {activeSolution.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {activeSolution.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Live Simulator Preview Box */}
          <div className="rounded-2xl bg-slate-950 p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  LIVE INTERACTIVE SIMULATOR PREVIEW: [{activeSolution.previewType.toUpperCase()}_ENGINE]
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-sky-400 text-[10px] font-mono">
                SIMULATION ACTIVE
              </span>
            </div>

            {/* 1. GYM SYSTEM INTERACTIVE PREVIEW */}
            {activeSolution.previewType === 'gym' && (
              <div className="space-y-6">
                
                {gymMessageSent && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center justify-between animate-in fade-in">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      {gymMessageSent}
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Member Register Table */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono text-slate-300 uppercase font-semibold">Active Gym Members & Status</h4>
                      <span className="text-xs text-slate-500">{gymMembers.length} Members</span>
                    </div>

                    <div className="space-y-2">
                      {gymMembers.map((m) => (
                        <div key={m.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-white">{m.name}</p>
                            <p className="text-[11px] text-slate-400">{m.plan}</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                              m.expiryDays < 0 ? 'bg-rose-950 text-rose-400 border border-rose-800' :
                              m.expiryDays <= 5 ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                              'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            }`}>
                              {m.expiryDays < 0 ? `Expired ${Math.abs(m.expiryDays)}d ago` : `${m.expiryDays} Days Left`}
                            </span>

                            <button
                              onClick={() => sendWhatsAppAlert(m.name, m.phone)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] flex items-center gap-1 transition-colors"
                            >
                              <Send className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add Member Form */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono text-sky-400 uppercase font-semibold">Register Member</h4>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Member Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Jasim K"
                        value={newGymName}
                        onChange={e => setNewGymName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <button
                      onClick={addGymMember}
                      className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Member
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* 2. BARBER QUEUE INTERACTIVE PREVIEW */}
            {activeSolution.previewType === 'barber' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Live Queue Display */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono text-slate-300 uppercase font-semibold">Live Waiting Room Queue</h4>
                      <span className="text-xs text-emerald-400 font-mono">2 Barbers Active</span>
                    </div>

                    <div className="space-y-2">
                      {barberQueue.map((q, idx) => (
                        <div key={q.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-slate-800 font-mono flex items-center justify-center text-sky-400 text-xs font-bold">
                              #{idx + 1}
                            </span>
                            <div>
                              <p className="font-bold text-white">{q.customer}</p>
                              <p className="text-[11px] text-slate-400">{q.service}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-sky-400" />
                              ~{q.estWaitMinutes} mins
                            </span>
                            <button
                              onClick={() => serveCustomer(q.id)}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-300 font-semibold text-[11px] border border-slate-700 transition-colors"
                            >
                              Serve
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Join Queue Control */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono text-sky-400 uppercase font-semibold">Take Virtual Queue Token</h4>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Customer Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Faisal M"
                        value={newCustomerName}
                        onChange={e => setNewCustomerName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Select Service</label>
                      <select
                        value={selectedService}
                        onChange={e => setSelectedService(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
                      >
                        <option>Haircut ($20)</option>
                        <option>Beard Trim ($10)</option>
                        <option>Full Salon Combo ($45)</option>
                      </select>
                    </div>
                    <button
                      onClick={joinBarberQueue}
                      className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Join Queue
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* 3. RENTAL STOCK INTERACTIVE PREVIEW */}
            {activeSolution.previewType === 'rental' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono text-slate-300 uppercase font-semibold">Inventory & Return Due Tracker</h4>
                  <span className="text-xs font-mono text-sky-400">Auto Deposit Register</span>
                </div>

                <div className="space-y-2">
                  {rentalItems.map((item) => (
                    <div key={item.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white">{item.item}</p>
                        <p className="text-[11px] text-slate-400">Category: {item.category} • Deposit: {item.deposit}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                          item.status === 'Available' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'
                        }`}>
                          {item.status} ({item.client})
                        </span>

                        <button
                          onClick={() => toggleRentalStatus(item.id)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold text-[11px] border border-slate-700"
                        >
                          {item.status === 'Rented' ? 'Return & Refund' : 'Checkout Rental'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. VIBE CODING PLATFORM INTERACTIVE PREVIEW */}
            {activeSolution.previewType === 'vibe' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <h4 className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>AI Studio & Antigravity Agent Build Simulator</span>
                  </h4>
                  <div className="flex gap-1.5 flex-wrap">
                    {(['Google AI Studio Applet', 'Antigravity Autonomous Agent', 'Android Studio Mobile APK'] as const).map(target => (
                      <button
                        key={target}
                        onClick={() => setVibeTarget(target)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${vibeTarget === target ? 'bg-sky-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 border border-slate-800'}`}
                      >
                        {target.split(' ')[0]} {target.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Console Output Terminal */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 space-y-1.5 min-h-[140px] max-h-[180px] overflow-y-auto">
                  {vibeLogs.map((log, idx) => (
                    <p key={idx} className={log.includes('✓') ? 'text-emerald-300 font-bold' : log.includes('>') ? 'text-sky-300 font-bold' : 'text-slate-400'}>
                      {log}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Target Output: <strong className="text-white">{vibeTarget}</strong>
                  </span>
                  <button
                    onClick={runVibeBuild}
                    disabled={isVibeBuilding}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isVibeBuilding ? 'animate-spin' : ''}`} />
                    <span>{isVibeBuilding ? 'Synthesizing...' : 'Trigger AI Vibe Build'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* 5. CASH BOOK REGISTER INTERACTIVE PREVIEW */}
            {activeSolution.previewType === 'cashbook' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Ledger Table */}
                  <div className="md:col-span-8 space-y-3">
                    <div className="grid grid-cols-3 gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono block">Total Income</span>
                        <span className="text-sm font-bold text-sky-400 font-mono">+${totalIncome}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono block">Total Expense</span>
                        <span className="text-sm font-bold text-rose-400 font-mono">-${totalExpense}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono block">Net Cash Balance</span>
                        <span className="text-sm font-bold text-white font-mono">${netBalance}</span>
                      </div>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {ledgerEntries.map(e => (
                        <div key={e.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <p className="font-bold text-white">{e.note}</p>
                            <p className="text-[10px] text-slate-500 font-mono">{e.date} • {e.category}</p>
                          </div>
                          <span className={`font-mono font-bold ${e.type === 'Income' ? 'text-sky-400' : 'text-rose-400'}`}>
                            {e.type === 'Income' ? '+' : '-'}${e.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add Entry Form */}
                  <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                    <h4 className="text-xs font-mono text-sky-400 uppercase font-semibold">Post Entry</h4>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setEntryType('Income')}
                        className={`flex-1 py-1 rounded text-xs font-semibold ${entryType === 'Income' ? 'bg-sky-500 text-white' : 'bg-slate-950 text-slate-400'}`}
                      >
                        Income
                      </button>
                      <button
                        onClick={() => setEntryType('Expense')}
                        className={`flex-1 py-1 rounded text-xs font-semibold ${entryType === 'Expense' ? 'bg-rose-500 text-white' : 'bg-slate-950 text-slate-400'}`}
                      >
                        Expense
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Note / Description"
                      value={entryNote}
                      onChange={e => setEntryNote(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                    />
                    <input
                      type="number"
                      placeholder="Amount ($)"
                      value={entryAmount}
                      onChange={e => setEntryAmount(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white"
                    />
                    <button
                      onClick={addLedgerEntry}
                      className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs"
                    >
                      Record Entry
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>

          {/* Software Technical Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider mb-3">
                Core System Modules
              </h4>
              <ul className="space-y-1.5">
                {activeSolution.features.map((f, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider mb-3">
                Software Architecture
              </h4>
              <ul className="space-y-1.5">
                {activeSolution.architecture.map((a, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-3">
                Challenges Solved
              </h4>
              <ul className="space-y-1.5">
                {activeSolution.challengesSolved.map((c, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-3">
                Future Roadmap
              </h4>
              <ul className="space-y-1.5">
                {activeSolution.futureImprovements.map((imp, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
