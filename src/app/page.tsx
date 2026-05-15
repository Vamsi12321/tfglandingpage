"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Users,
  ShieldCheck,
  GitMerge,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileText,
  Star,
  UserCheck,
  Search,
  ChevronRight,
  Activity,
  Fingerprint,
  Briefcase,
  GraduationCap,
  Scale,
  CreditCard,
  MapPin,
  FileSearch,
  Globe,
  Clock,
  Loader2,
  XCircle
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-surface-50 text-slate-800 font-sans selection:bg-brand-200">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-surface-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-blue-600 flex items-center justify-center shadow-md shadow-brand-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-black tracking-tight text-slate-900">TFG <span className="text-brand-600">Reports</span></span>
                <p className="text-[9px] text-slate-400 font-medium">AI-Powered BGV Platform</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center bg-white/70 backdrop-blur-xl border border-surface-200/60 rounded-full p-1.5 shadow-xl shadow-brand-500/5 ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-brand-500/10 hover:border-brand-200/50">
              <Link href="#flow" className="group flex items-center gap-1.5 text-sm font-black text-brand-700 bg-white px-4 py-2 rounded-full shadow-md shadow-brand-500/10 border border-brand-100 hover:shadow-brand-500/20 transition-all hover:-translate-y-0.5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GitMerge className="w-3.5 h-3.5 text-brand-600 relative z-10" /> 
                <span className="relative z-10">Hiring Paths</span>
              </Link>
              
              <div className="flex items-center px-4 relative">
                <div className="absolute left-1 w-px h-4 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Features Flow</span>
                <div className="absolute right-1 w-px h-4 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
              </div>
              
              <Link href="#ai" className="group flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-brand-600 transition-all px-3 py-1.5 rounded-full hover:bg-blue-50/50">
                <Brain className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors" /> AI Screen
              </Link>
              
              <ChevronRight className="w-3 h-3 text-slate-300 mx-0.5" />
              
              <Link href="#ats" className="group flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-brand-600 transition-all px-3 py-1.5 rounded-full hover:bg-blue-50/50">
                <Users className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors" /> ATS & Interviews
              </Link>
              
              <ChevronRight className="w-3 h-3 text-slate-300 mx-0.5" />
              
              <Link href="#bgv" className="group flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-brand-600 transition-all px-3 py-1.5 rounded-full hover:bg-blue-50/50">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors" /> BGV
              </Link>
              
              <ChevronRight className="w-3 h-3 text-slate-300 mx-0.5" />
              
              <Link href="#hrms" className="group flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-brand-600 transition-all px-3 py-1.5 rounded-full hover:bg-blue-50/50">
                <UserCheck className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-500 transition-colors" /> HRMS
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background - soft lavender/pink gradient like reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/40 to-indigo-50/60 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/30 to-pink-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-xl shadow-brand-500/10 border border-brand-100 text-brand-600 text-sm font-bold mb-8">
              <Sparkles className="w-5 h-5 text-accent-500" />
              <span>Next-Gen Hiring, BGV & HRMS Platform</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 leading-[1.1]">
              The smartest way to <br />
              <span className="text-gradient">hire, verify & manage.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="mt-4 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              Seamlessly connect AI screening, Applicant Tracking, multi-round interviews, instant BGV, and HRMS auto-onboarding into one unified, intelligent flow.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/40">
                Start Hiring Flow
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="bg-white hover:bg-surface-100 text-slate-800 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center justify-center gap-2 border border-surface-200 shadow-xl shadow-slate-200/50">
                <Search className="w-5 h-5 text-accent-500" />
                Find Jobs (Seeker)
              </motion.button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Bank-Grade Security</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Two Hiring Paths - Premium */}
      <section id="flow" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-blue-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-brand-600 text-xs font-bold border border-brand-100 shadow-sm mb-5">
              <GitMerge className="w-4 h-4" /> Intelligent Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">Two Flexible <span className="text-gradient">Hiring Paths</span></h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">Choose the path that fits — full pipeline or fast-track direct verification.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Path 1 - Job Portal */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, type: "spring", stiffness: 80 }} whileHover={{ y: -4 }} className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 relative overflow-hidden">
                {/* Decorative gradient orb */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900">Job Portal Pipeline</h3>
                        <p className="text-sm text-blue-600 font-semibold">Full Hiring Flow</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-[10px] font-black rounded-full border border-blue-200 uppercase tracking-wider">Recommended</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[{ val: "6", label: "Steps" }, { val: "4", label: "Interview Rounds" }, { val: "Auto", label: "BGV Trigger" }].map((s, i) => (
                      <div key={i} className="text-center p-4 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-100">
                        <div className="text-2xl font-black text-slate-900">{s.val}</div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Steps with connecting line */}
                  <div className="relative">
                    {/* Vertical connecting line - centered on circles */}
                    <div className="absolute left-[22px] top-[28px] bottom-[28px] w-[2px] bg-gradient-to-b from-blue-300 via-indigo-300 to-blue-300 rounded-full" />
                    
                    <div className="space-y-0">
                      {[
                        { step: "Apply", desc: "Seeker registers & uploads resume" },
                        { step: "AI Screen", desc: "Bulk AI scoring against JD" },
                        { step: "Shortlist", desc: "Top candidates auto-shortlisted" },
                        { step: "Interview", desc: "Rounds: Tech → Manager → HR → Final" },
                        { step: "Hired", desc: "Offer extended & accepted" },
                        { step: "BGV", desc: "Verification starts automatically" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 py-3 px-1 rounded-xl hover:bg-blue-50/50 transition-colors group/item relative">
                          <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-md shadow-blue-500/20 flex-shrink-0 relative z-10 ring-[3px] ring-white">{i + 1}</div>
                          <div className="flex-1 flex items-baseline gap-2">
                            <span className="text-sm font-bold text-slate-900">{item.step}</span>
                            <span className="text-xs text-slate-400 font-medium">{item.desc}</span>
                          </div>
                          {i === 5 ? <ShieldCheck className="w-4 h-4 text-green-500 flex-shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-200 flex-shrink-0 group-hover/item:text-blue-400 transition-colors" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Timeline: Days to Weeks
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Path 2 - External */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7, type: "spring", stiffness: 80 }} whileHover={{ y: -4 }} className="group">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.15)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900">External AI Screening</h3>
                        <p className="text-sm text-indigo-600 font-semibold">Referrals / Walk-ins / Manual</p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-[10px] font-black rounded-full border border-indigo-200 uppercase tracking-wider">Flexible</span>
                  </div>

                  {/* Description */}
                  <div className="p-4 bg-gradient-to-r from-indigo-50/60 to-purple-50/40 rounded-2xl border border-indigo-100/60 mb-6">
                    <p className="text-sm text-slate-600">Upload JD + external resumes → AI ranks them → Choose your path below:</p>
                  </div>

                  {/* Options with connecting line */}
                  <div className="relative pl-4">
                    {/* Vertical connecting line - centered on circles */}
                    <div className="absolute left-[17px] top-[30px] bottom-[30px] w-[3px] bg-gradient-to-b from-blue-400 via-indigo-400 to-slate-300 rounded-full" />

                    {/* Option A */}
                    <div className="mb-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/60 border border-blue-100 hover:border-blue-200 transition-colors relative overflow-hidden group/card ml-6">
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-[10px] font-black flex items-center justify-center shadow-sm ring-[3px] ring-white z-10">A</div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-black text-slate-900">Direct BGV</h4>
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">Skip Pipeline</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {['AI Screen', 'Add to BGV', 'Verified'].map((s, idx) => (
                            <span key={idx} className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-100 shadow-sm">{s}</span>
                              {idx < 2 && <ArrowRight className="w-3 h-3 text-blue-300" />}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Option B */}
                    <div className="mb-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-50/80 to-purple-50/60 border border-indigo-100 hover:border-indigo-200 transition-colors relative overflow-hidden group/card ml-6">
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-[10px] font-black flex items-center justify-center shadow-sm ring-[3px] ring-white z-10">B</div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-200/20 rounded-full blur-2xl" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-black text-slate-900">Full Pipeline</h4>
                          <span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-2.5 py-1 rounded-full">With Interviews</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          {['AI Screen', 'Job', 'Shortlist', 'Interview', 'BGV'].map((s, idx) => (
                            <span key={idx} className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold text-indigo-700 bg-white px-2.5 py-1 rounded-lg border border-indigo-100 shadow-sm">{s}</span>
                              {idx < 4 && <ArrowRight className="w-3 h-3 text-indigo-300" />}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Self-Verification */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-colors relative ml-6">
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 text-white flex items-center justify-center shadow-sm ring-[3px] ring-white z-10">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h4 className="text-sm font-bold text-slate-700">Self-Verification Portal</h4>
                      </div>
                      <p className="text-xs text-slate-500">Send link → Candidate fills consent & uploads → Auto-verify via API</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Timeline: Immediate to Days
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Screening - Premium Dark Section */}
      <section id="ai" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[60%] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-bold border border-white/10 mb-4 backdrop-blur-sm">
              <Brain className="w-3.5 h-3.5" /> AI-Powered Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">AI Resume <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Screening</span></h2>
            <p className="text-base text-blue-200/70 max-w-2xl mx-auto">Upload a Job Description and resumes. Our AI reads, scores, and ranks candidates instantly.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-bold text-white">AI Analysis Report</span>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">Strong Fit</span>
                </div>

                <div className="flex items-center gap-4 mb-5 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-500/30">98</div>
                  <div>
                    <h5 className="text-base font-bold text-white">Alex Rodriguez</h5>
                    <p className="text-xs text-blue-300/70">Senior React Engineer • 5y exp</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] font-bold text-blue-300/50 uppercase tracking-wider mb-2">Matched Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'System Design'].map(s => (
                      <span key={s} className="px-2.5 py-1 bg-blue-500/15 text-blue-300 rounded-md text-xs font-semibold border border-blue-500/20">{s}</span>
                    ))}
                    <span className="px-2.5 py-1 bg-red-500/15 text-red-400 rounded-md text-xs font-semibold border border-red-500/20 line-through opacity-60">GraphQL</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                    <p className="text-[10px] font-bold text-green-400 mb-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Strengths</p>
                    <p className="text-xs text-green-200/70">Perfect frontend match. 5+ years Next.js.</p>
                  </div>
                  <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                    <p className="text-[10px] font-bold text-amber-400 mb-1 flex items-center gap-1"><Activity className="w-3 h-3" /> Gaps</p>
                    <p className="text-xs text-amber-200/70">No backend API design experience.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="grid grid-cols-3 gap-3">
                {[{ val: "100+", label: "Resumes/batch" }, { val: "60s", label: "Processing" }, { val: "95%", label: "Accuracy" }].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl font-black text-white">{s.val}</div>
                    <div className="text-[10px] text-blue-300/60 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {["Scoring & Ranking 0-100 against the JD", "Deep Strengths & Weaknesses analysis", "Skills gap identification (Matched vs Missing)", "Smart Recommendations (Strong Fit to Reject)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-sm text-blue-100/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Explore AI Features <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Feature Deep Dive: ATS & Interviews */}

      {/* ATS & Interview Management - Enhanced */}
      {/* ATS & Interview Management - Premium */}
      <section id="ats" className="py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[60px]" />
          <div className="absolute top-[50%] left-[50%] w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 text-xs font-bold border border-white/10 backdrop-blur-sm mb-5">
              <GitMerge className="w-3.5 h-3.5" /> Complete Hiring Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Powerful ATS & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Interview Management</span>
            </h2>
            <p className="text-base text-blue-200/60 max-w-2xl mx-auto">
              A comprehensive Kanban pipeline with multi-round structured interviews, AI scoring, and automatic BGV trigger on hire.
            </p>
          </div>

          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-5 gap-8 mb-14">
            {/* Left - Kanban Pipeline (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2"><GitMerge className="w-4 h-4 text-blue-400" /> Pipeline View</h3>
                  <span className="text-[10px] text-blue-300/60 font-medium">Drag & drop candidates between stages</span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                  {[
                    { name: "Applied", count: 12, candidates: [{ name: "Priya Sharma", role: "Full Stack Dev", score: null }] },
                    { name: "AI Screened", count: 8, candidates: [{ name: "Rahul Verma", role: "React Engineer", score: "96%" }] },
                    { name: "Tech Round", count: 5, candidates: [{ name: "Sarah Jenkins", role: "Frontend Dev", score: "94%" }] },
                    { name: "HR Round", count: 3, candidates: [{ name: "Alex Chen", role: "Backend Dev", score: null }] },
                    { name: "Hired", count: 2, candidates: [] }
                  ].map((col, idx) => (
                    <div key={idx} className="min-w-[160px] flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-300">{col.name}</span>
                        <span className="text-[10px] bg-white/10 text-slate-400 px-1.5 py-0.5 rounded font-bold">{col.count}</span>
                      </div>
                      {col.candidates.map((c, ci) => (
                        <div key={ci} className="bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 rounded-xl p-3 transition-colors cursor-grab">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-white">{c.name}</span>
                            {c.score && <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold">{c.score}</span>}
                          </div>
                          <p className="text-[10px] text-slate-400">{c.role}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex -space-x-1">
                              <div className="w-4 h-4 rounded-full bg-blue-500 border border-slate-800"></div>
                              <div className="w-4 h-4 rounded-full bg-indigo-500 border border-slate-800"></div>
                            </div>
                            <span className="text-[9px] text-blue-400 font-bold flex items-center gap-0.5">Move <ChevronRight className="w-2.5 h-2.5" /></span>
                          </div>
                        </div>
                      ))}
                      {col.candidates.length === 0 && (
                        <div className="border border-dashed border-white/10 rounded-xl p-3 text-center">
                          <span className="text-[10px] text-slate-500">Drop here</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Features (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { icon: <Brain className="w-5 h-5 text-blue-400" />, title: "AI-Powered Screening", desc: "Bulk score 100+ resumes against JD. Auto-rank and shortlist top candidates.", tag: "AI" },
                { icon: <Users className="w-5 h-5 text-indigo-400" />, title: "Dynamic Interviews", desc: "Configurable rounds as needed. Star ratings, feedback capture, flexible enforcement.", tag: "FLEXIBLE" },
                { icon: <Star className="w-5 h-5 text-amber-400" />, title: "Smart Offer & Hire", desc: "One-click offer extension. Mark as Hired triggers automatic BGV initiation.", tag: "AUTO" },
                { icon: <ShieldCheck className="w-5 h-5 text-green-400" />, title: "BGV Auto-Trigger", desc: "Hired → BGV starts instantly. No manual steps. Real-time status tracking.", tag: "SEAMLESS" }
              ].map((f, i) => (
                <div key={i} className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {f.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-bold text-white">{f.title}</h4>
                        <span className="text-[9px] font-bold text-blue-300 bg-blue-500/20 px-1.5 py-0.5 rounded">{f.tag}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Rounds Visual */}
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-2 text-center">Dynamic Interview Rounds</h3>
            <p className="text-xs text-slate-400 text-center mb-6">Configure as many rounds as needed — here is a typical flow:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { round: "Round 1", title: "Technical", desc: "Coding & system design assessment", icon: <Brain className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
                { round: "Round 2", title: "Manager", desc: "Team fit & leadership evaluation", icon: <Users className="w-6 h-6" />, color: "from-indigo-500 to-indigo-600" },
                { round: "Round 3", title: "HR", desc: "Culture fit & compensation discussion", icon: <UserCheck className="w-6 h-6" />, color: "from-purple-500 to-purple-600" },
                { round: "Round 4", title: "Final", desc: "Executive approval & offer decision", icon: <Star className="w-6 h-6" />, color: "from-amber-500 to-orange-500" }
              ].map((r, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                    {r.icon}
                  </div>
                  <span className="text-[10px] text-blue-300/60 font-bold uppercase">{r.round}</span>
                  <h4 className="text-sm font-bold text-white mt-0.5">{r.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Rating system preview */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className={`w-3.5 h-3.5 ${s <= 4 ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />)}
                </div>
                <span className="text-xs text-slate-400">Star Ratings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-xs text-slate-400">Detailed Feedback</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-slate-400">Progress Tracking</span>
              </div>
            </div>
          </div>

          {/* Candidate Journey */}
          <div className="mt-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h4 className="text-sm font-bold text-white mb-4 text-center">Complete Journey: Application → Verified Employee</h4>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {[
                { label: "Apply", color: "bg-blue-500" },
                { label: "AI Screen", color: "bg-indigo-500" },
                { label: "Interview", color: "bg-purple-500" },
                { label: "Offer", color: "bg-amber-500" },
                { label: "BGV", color: "bg-cyan-500" },
                { label: "HRMS", color: "bg-green-500" }
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className={`${s.color} text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md`}>{s.label}</span>
                  {i < 5 && <ArrowRight className="w-3.5 h-3.5 text-slate-500" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How BGV Verification Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-bold border border-blue-100 mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> After candidate is hired, BGV phase begins
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">How BGV Verification Works</h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">Complete background verification in 4 simple steps. From candidate onboarding to instant report downloads.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-green-500 rounded-full z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: <Users className="w-8 h-8 text-white" />, gradient: "from-blue-500 to-blue-600", title: "Add Candidate", desc: "Upload candidate details, documents, and select required BGV services" },
                { icon: <CheckCircle2 className="w-8 h-8 text-white" />, gradient: "from-indigo-500 to-purple-600", title: "Select Services", desc: "Choose from 12+ BGV services including AI-powered verification options" },
                { icon: <Brain className="w-8 h-8 text-white" />, gradient: "from-purple-500 to-pink-600", title: "AI Verification", desc: "Our AI engine processes and verifies information across multiple databases" },
                { icon: <FileText className="w-8 h-8 text-white" />, gradient: "from-green-500 to-emerald-600", title: "Instant Reports", desc: "Download comprehensive BGV reports instantly in multiple formats" }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }} className="text-center">
                  <motion.div whileHover={{ y: -5, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} className="relative inline-block mb-5">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl mx-auto`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 text-xs font-black shadow-md">{i + 1}</div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive: BGV */}
      <section id="bgv" className="py-28 relative overflow-hidden">
        {/* Background gradient decorations */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[45%] bg-indigo-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg shadow-blue-500/10 border border-blue-100 text-brand-600 font-bold mb-8"
            >
              <ShieldCheck className="w-5 h-5 text-brand-600" />
              <span>Comprehensive BGV Suite</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            >
              12+ Professional <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              Complete background verification solutions covering every aspect of candidate screening and validation
            </motion.p>
          </div>

          {/* AI-Powered Services */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><span className="text-xl">🤖</span> AI-Powered Services</h3>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" /> NEW AI TECHNOLOGY
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: <FileSearch className="w-6 h-6 text-white" />, title: "AI Resume Screening", badge: "HOT", badgeColor: "bg-yellow-400 text-slate-900", desc: "Upload 100+ resumes, get top 10-20 candidates with JD matching in 60 seconds", features: ["Bulk Processing", "95% Accuracy"], gradient: "from-blue-500 to-indigo-600" },
                { icon: <FileText className="w-6 h-6 text-white" />, title: "AI CV Validation", badge: "AI", badgeColor: "bg-yellow-400 text-slate-900", desc: "Advanced fraud detection and authenticity verification with 98% accuracy", features: ["Fraud Detection", "98% Accuracy"], gradient: "from-purple-500 to-pink-600" },
                { icon: <GraduationCap className="w-6 h-6 text-white" />, title: "AI Education Verification", badge: "AI", badgeColor: "bg-yellow-400 text-slate-900", desc: "Automated validation of educational credentials with AI document analysis", features: ["Document OCR", "24hrs"], gradient: "from-emerald-500 to-teal-600" }
              ].map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} whileHover={{ y: -8, transition: { duration: 0.3 } }} className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 text-white shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">{service.icon}</div>
                      <div>
                        <h4 className="text-base font-bold">{service.title}</h4>
                        <span className={`${service.badgeColor} px-2 py-0.5 rounded-full text-[10px] font-bold`}>{service.badge}</span>
                      </div>
                    </div>
                    <p className="text-white/85 mb-4 text-sm leading-relaxed">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">{service.features[0]}</span>
                      <span className="font-bold text-sm">{service.features[1]}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core BGV Services - Horizontal Scroll */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2"><span className="text-xl">🛡️</span> Core BGV Services</h3>
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
                <span>← Scroll to explore all services →</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
                {[
                  { icon: <CreditCard className="w-6 h-6 text-white" />, gradient: "from-blue-500 to-blue-600", title: "PAN Verification", subtitle: "Government Database ✓", subtitleColor: "text-blue-600", desc: "Validate PAN card details and authenticity instantly through government database integration", time: "Instant", badge: "✓ Real-time" },
                  { icon: <Fingerprint className="w-6 h-6 text-white" />, gradient: "from-indigo-500 to-indigo-600", title: "PAN to UAN", subtitle: "EPFO Integration ✓", subtitleColor: "text-blue-600", desc: "Link and verify PAN with UAN number seamlessly through EPFO database", time: "2-4 hrs", badge: "✓ Verified" },
                  { icon: <Briefcase className="w-6 h-6 text-white" />, gradient: "from-purple-500 to-purple-600", title: "Employment History", subtitle: "Multi-Source ✓", subtitleColor: "text-orange-600", desc: "Comprehensive employment background verification through multiple data sources", time: "24-48 hrs", badge: "✓ Detailed" },
                  { icon: <Scale className="w-6 h-6 text-white" />, gradient: "from-red-500 to-red-600", title: "Court Records", subtitle: "Legal Database ✓", subtitleColor: "text-red-600", desc: "Criminal and civil court records verification across multiple jurisdictions", time: "48 hrs", badge: "✓ Comprehensive" },
                  { icon: <CreditCard className="w-6 h-6 text-white" />, gradient: "from-green-500 to-green-600", title: "Credit Report", subtitle: "CIBIL Integration ✓", subtitleColor: "text-emerald-600", desc: "Detailed credit history and financial background through CIBIL integration", time: "Instant", badge: "✓ CIBIL" },
                  { icon: <MapPin className="w-6 h-6 text-white" />, gradient: "from-cyan-500 to-cyan-600", title: "Address Verification", subtitle: "Field Verification ✓", subtitleColor: "text-cyan-600", desc: "Physical address validation and verification through field agents", time: "3-5 days", badge: "✓ Physical" },
                  { icon: <GraduationCap className="w-6 h-6 text-white" />, gradient: "from-orange-500 to-orange-600", title: "Education Check", subtitle: "Institution Direct ✓", subtitleColor: "text-orange-600", desc: "Manual verification of educational credentials directly with institutions", time: "5-7 days", badge: "✓ Manual" },
                  { icon: <UserCheck className="w-6 h-6 text-white" />, gradient: "from-teal-500 to-teal-600", title: "Reference Check", subtitle: "Direct Contact ✓", subtitleColor: "text-teal-600", desc: "Supervisory and professional reference verification through direct contact", time: "2-3 days", badge: "✓ Personal" }
                ].map((service, i) => (
                  <div key={i} className="flex-shrink-0 w-72 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 snap-start">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>{service.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{service.title}</h4>
                        <div className={`text-xs ${service.subtitleColor} font-semibold`}>{service.subtitle}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">{service.time}</span>
                      <span className="text-green-600 font-bold text-sm">{service.badge}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>



          {/* Real-Time Tracking & Platform Highlights */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Live Status Tracker */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-indigo-600 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                Real-Time Tracking
              </h3>

              {/* Candidate Info */}
              <div className="bg-blue-50 rounded-2xl p-5 mb-6 flex items-center gap-4 border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-base shadow-lg shadow-brand-500/20">SJ</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">Sarah Jenkins</h4>
                  <p className="text-sm text-slate-500">BGV Request #892 • Senior Engineer</p>
                </div>
                <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold border border-blue-200">In Progress</span>
              </div>

              {/* Verification Status List */}
              <div className="space-y-4">
                {[
                  { name: "PAN / Aadhaar Verification", status: "COMPLETED", statusColor: "text-green-600", dotColor: "bg-green-500", time: "< 5 sec" },
                  { name: "AI CV & Education Check", status: "COMPLETED", statusColor: "text-green-600", dotColor: "bg-green-500", time: "30-60 sec" },
                  { name: "Employment History", status: "IN PROGRESS", statusColor: "text-blue-600", dotColor: "bg-blue-500", time: "24-48 hrs" },
                  { name: "Court Records Search", status: "PENDING", statusColor: "text-slate-400", dotColor: "bg-slate-300", time: "48 hrs" },
                  { name: "Address Verification", status: "PENDING", statusColor: "text-slate-400", dotColor: "bg-slate-300", time: "3-5 days" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${item.dotColor}`} />
                      <span className="text-sm font-medium text-slate-800">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold italic ${item.statusColor}`}>{item.status === 'COMPLETED' ? 'Verified' : item.status === 'IN PROGRESS' ? 'In Progress' : 'Pending'}</span>
                      <span className="text-[11px] text-slate-400">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Why Choose TFG BGV?
                </h4>
                <ul className="space-y-2">
                  {[
                    "Instant API-based identity verification (PAN, Aadhaar, UAN)",
                    "AI-powered document fraud detection",
                    "Multi-jurisdiction court record searches",
                    "CIBIL-integrated financial background checks",
                    "Self-verification portal for candidates"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Platform Highlights */}
            <div className="flex flex-col gap-6">
              {/* Stats Card */}
              <div className="bg-gradient-to-br from-brand-600 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-600/20 flex-1">
                <h3 className="text-xl font-black mb-6">Platform Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "12+", label: "Verification Types" },
                    { value: "99.5%", label: "Accuracy Rate" },
                    { value: "<5s", label: "API Verifications" },
                    { value: "24/7", label: "Real-time Tracking" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                      <div className="text-3xl font-black mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Ready to Experience Next-Gen BGV?</h3>
                  <p className="text-blue-100 text-sm mb-5">Start with our comprehensive suite of services today.</p>
                  <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:shadow-xl transition-all text-sm flex items-center gap-2">
                    Start BGV Process <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Un-Employee to Employee Journey Mapping */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-bold border border-blue-200 mb-5">
              <ArrowRight className="w-3.5 h-3.5" /> Complete Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">From Candidate to <span className="text-gradient">Verified Employee</span></h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">Clear mapping of how an un-employed candidate transforms into a fully verified, onboarded employee with complete benefits through our platform.</p>
          </motion.div>

          {/* Journey Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            {/* Before - Un-Employee */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-300 flex items-center justify-center">
                  <Users className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-700">Before: Candidate</h3>
                  <p className="text-xs text-slate-500">Un-employed / Job Seeker</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  "No verified identity in system",
                  "Unverified employment history",
                  "No background check on record",
                  "No access to company systems",
                  "No payroll or benefits setup",
                  "No official employee ID"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-3 h-3 text-slate-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After - Employee */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">After: Verified Employee</h3>
                    <p className="text-xs text-blue-600 font-semibold">Fully onboarded & active</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "PAN, Aadhaar, UAN verified via govt APIs",
                    "Employment history confirmed & documented",
                    "Complete BGV certificate generated",
                    "Full HRMS access with self-service portal",
                    "Payroll, attendance & leave auto-configured",
                    "Official employee ID & department assigned"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Transformation Steps */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
            <h3 className="text-lg font-black text-slate-900 text-center mb-8">How the Platform Transforms a Candidate into an Employee</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "1", title: "Apply", desc: "Candidate registers on portal", icon: <FileText className="w-5 h-5 text-white" />, color: "from-slate-500 to-slate-600", status: "Candidate" },
                { step: "2", title: "AI Screen", desc: "Resume scored by AI engine", icon: <Brain className="w-5 h-5 text-white" />, color: "from-blue-500 to-blue-600", status: "Screened" },
                { step: "3", title: "Interview", desc: "Multi-round evaluation", icon: <Users className="w-5 h-5 text-white" />, color: "from-indigo-500 to-indigo-600", status: "Evaluated" },
                { step: "4", title: "Offer", desc: "Offer letter accepted", icon: <Star className="w-5 h-5 text-white" />, color: "from-amber-500 to-orange-500", status: "Selected" },
                { step: "5", title: "BGV", desc: "Background verified", icon: <ShieldCheck className="w-5 h-5 text-white" />, color: "from-cyan-500 to-teal-500", status: "Verified" },
                { step: "6", title: "HRMS", desc: "Auto-added as employee", icon: <UserCheck className="w-5 h-5 text-white" />, color: "from-green-500 to-emerald-600", status: "Employee ✓" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 mb-1">{item.desc}</p>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i === 5 ? 'bg-green-100 text-green-700' : i === 0 ? 'bg-slate-100 text-slate-600' : 'bg-blue-50 text-blue-600'}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits after becoming employee */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
            <h3 className="text-lg font-black text-slate-900 text-center mb-6">Employee Benefits Unlocked After Onboarding</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <CreditCard className="w-5 h-5 text-blue-600" />, title: "Payroll Setup", desc: "Salary, PF, ESI auto-configured", bg: "bg-blue-50", border: "border-blue-100" },
                { icon: <Clock className="w-5 h-5 text-indigo-600" />, title: "Leave Management", desc: "Casual, sick, earned leave access", bg: "bg-indigo-50", border: "border-indigo-100" },
                { icon: <Activity className="w-5 h-5 text-purple-600" />, title: "Performance Goals", desc: "KPIs & review cycles assigned", bg: "bg-purple-50", border: "border-purple-100" },
                { icon: <Globe className="w-5 h-5 text-teal-600" />, title: "Self-Service Portal", desc: "Payslips, tax, HR requests", bg: "bg-teal-50", border: "border-teal-100" },
                { icon: <FileText className="w-5 h-5 text-amber-600" />, title: "Document Vault", desc: "All verified docs stored securely", bg: "bg-amber-50", border: "border-amber-100" },
                { icon: <ShieldCheck className="w-5 h-5 text-green-600" />, title: "BGV Certificate", desc: "Downloadable verification report", bg: "bg-green-50", border: "border-green-100" },
                { icon: <Fingerprint className="w-5 h-5 text-rose-600" />, title: "Attendance System", desc: "Biometric & geo-fencing enabled", bg: "bg-rose-50", border: "border-rose-100" },
                { icon: <Briefcase className="w-5 h-5 text-cyan-600" />, title: "Department Access", desc: "Role-based system permissions", bg: "bg-cyan-50", border: "border-cyan-100" }
              ].map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className={`${b.bg} border ${b.border} rounded-xl p-4 hover:shadow-md transition-all`}
                >
                  <div className="mb-2">{b.icon}</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">{b.title}</h4>
                  <p className="text-[11px] text-slate-500">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HRMS Auto-Onboarding - After BGV */}
      <section id="hrms" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-white" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-blue-700 text-xs font-bold border border-blue-200 shadow-sm mb-5">
              <UserCheck className="w-4 h-4" /> After BGV Completion → Employee Onboarded
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">HRMS <span className="text-gradient">Auto-Onboarding</span></h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto">Once BGV is successfully completed, the candidate is automatically added as an employee in the HRMS system — no manual data entry required.</p>
          </motion.div>

          {/* Flow indicator */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-14 flex-wrap">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-blue-200 shadow-md">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">BGV Completed</span>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
            <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg shadow-blue-500/20">
              <UserCheck className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">Auto-Added to HRMS</span>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-400" />
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-indigo-200 shadow-md">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-bold text-indigo-700">Full Employee Benefits</span>
            </div>
          </motion.div>

          {/* HRMS Features - Horizontal Scroll */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><span className="text-lg">🏢</span> HRMS Features</h3>
              <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
                <span>← Scroll to explore →</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
              {[
                { icon: <UserCheck className="w-6 h-6 text-white" />, gradient: "from-blue-500 to-blue-600", title: "Auto Employee Creation", desc: "Candidate data flows directly into HRMS as a new employee record after BGV clearance" },
                { icon: <FileText className="w-6 h-6 text-white" />, gradient: "from-green-500 to-emerald-600", title: "Document Management", desc: "All verified documents (PAN, Aadhaar, education) auto-attached to employee profile" },
                { icon: <CreditCard className="w-6 h-6 text-white" />, gradient: "from-purple-500 to-indigo-600", title: "Payroll Integration", desc: "Bank details, PAN, UAN auto-linked for seamless payroll setup from day one" },
                { icon: <Clock className="w-6 h-6 text-white" />, gradient: "from-amber-500 to-orange-600", title: "Attendance & Leave", desc: "Employee immediately gets access to attendance tracking and leave management" },
                { icon: <Activity className="w-6 h-6 text-white" />, gradient: "from-cyan-500 to-blue-600", title: "Performance Tracking", desc: "Goals, KPIs, and review cycles auto-configured based on role and department" },
                { icon: <Globe className="w-6 h-6 text-white" />, gradient: "from-indigo-500 to-purple-600", title: "Self-Service Portal", desc: "Employee gets instant access to payslips, tax declarations, and HR requests" }
              ].map((feature, i) => (
                <div key={i} className="flex-shrink-0 w-72 bg-white rounded-xl p-6 border-2 border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 snap-start">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
            </div>
          </div>

          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl shadow-blue-600/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: "Zero", label: "Manual Data Entry" },
                { val: "100%", label: "Data Accuracy" },
                { val: "Instant", label: "Employee Access" },
                { val: "Seamless", label: "BGV → HRMS Flow" }
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black">{s.val}</div>
                  <div className="text-sm text-blue-100">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Start Your Journey */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">
              Start Your AI-Powered<br />Hiring & Verification Journey
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Experience the complete flow — AI screening, structured interviews, instant BGV, and seamless HRMS onboarding. All in one platform.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "AI Screening", icon: <Brain className="w-3.5 h-3.5" /> },
                { label: "Dynamic Interviews", icon: <Users className="w-3.5 h-3.5" /> },
                { label: "Instant BGV", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
                { label: "HRMS Onboarding", icon: <UserCheck className="w-3.5 h-3.5" /> }
              ].map((f, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  {f.icon} {f.label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
                <Search className="w-5 h-5" /> Schedule Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/70 flex-wrap">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Setup in Minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">TFG Reports</h3>
                  <p className="text-xs text-gray-400">AI-Powered BGV Platform</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Transforming hiring with AI-powered background verification and comprehensive BGV services for modern enterprises.</p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2"><span>📞</span><span>8886099008</span></div>
                <div className="flex items-center space-x-2"><span>✉</span><span>naresh@tfgorg.com</span></div>
                <div className="flex items-center space-x-2"><span>🔗</span><Link href="https://www.linkedin.com/company/threshing-floor-group/" className="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</Link></div>
                <div className="flex items-center space-x-2"><span>🌐</span><Link href="https://www.tfgorg.com" className="text-blue-400 hover:text-blue-300 transition-colors">www.tfgorg.com</Link></div>
              </div>
              <div className="flex space-x-4 pt-2">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Globe className="w-4 h-4" /></div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Users className="w-4 h-4" /></div>
              </div>
            </div>

            {/* AI Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">AI Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Resume Screening AI</li>
                <li className="hover:text-white cursor-pointer transition-colors">CV Fraud Detection</li>
                <li className="hover:text-white cursor-pointer transition-colors">Education Verification</li>
                <li className="hover:text-white cursor-pointer transition-colors">Employment History</li>
                <li className="hover:text-white cursor-pointer transition-colors">Court Record Search</li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Enterprise Dashboard</li>
                <li className="hover:text-white cursor-pointer transition-colors">API Integration</li>
                <li className="hover:text-white cursor-pointer transition-colors">Multi-Organization</li>
                <li className="hover:text-white cursor-pointer transition-colors">Role Management</li>
                <li className="hover:text-white cursor-pointer transition-colors">Analytics & Reports</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Sales</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-white cursor-pointer transition-colors">Security & Compliance</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} TFG Reports. All rights reserved. Built with AI for the future of BGV.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2 text-xs text-gray-500"><ShieldCheck className="w-3 h-3" /><span>SOC 2 Compliant</span></div>
              <div className="flex items-center space-x-2 text-xs text-gray-500"><ShieldCheck className="w-3 h-3" /><span>ISO 27001</span></div>
              <div className="flex items-center space-x-2 text-xs text-gray-500"><CheckCircle2 className="w-3 h-3" /><span>GDPR Ready</span></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
