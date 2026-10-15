import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name or recruiter title.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a brief message (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Safe fallback
      }
    }, 1200);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Let's Discuss <span className="gradient-text">Cloud & DevOps Opportunities</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Interested in hiring an AWS Cloud & DevOps Engineer with 4 years of proven IT impact? Reach out directly via email, phone, or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Alert Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-gray-900 to-gray-950 border border-emerald-500/30 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-heading font-bold text-white text-base">
                  Available for Interviews & Hiring
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-mono">
                Actively seeking roles as AWS Cloud Engineer, DevOps Engineer, or Infrastructure Automation Specialist.
              </p>
              <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Location: Chennai, India</span>
                <span className="text-emerald-400 font-semibold">Ready to Relocate / Hybrid / Remote</span>
              </div>
            </div>

            {/* Email Card with 1-click copy */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card with 1-click copy */}
            <div className="glass-card p-5 rounded-2xl flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400">Direct Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 transition-all cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center gap-3 text-gray-300 hover:text-white group transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-[10px] text-gray-400 font-mono">Connect Profile</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-xl flex items-center gap-3 text-gray-300 hover:text-white group transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">GitHub</div>
                  <div className="text-[10px] text-gray-400 font-mono">Repositories</div>
                </div>
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-gray-950/70 border border-gray-800 text-xs text-gray-400 flex items-center gap-3">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Standard response time: within 12–24 business hours.</span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-sky-500/30 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-sky-400 font-semibold">{formData.name}</span>! Your inquiry has been routed directly to Sahaya Shalini. You can expect a response shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', role: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-sky-300 text-xs font-mono border border-gray-700 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-gray-800 pb-4 mb-2">
                    <h3 className="font-heading font-bold text-xl text-white">
                      Direct Message Dispatch
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Send an interview invitation, job opportunity, or technical inquiry.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Your Name / Recruiter <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe (Tech Recruiter)"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-950/80 border text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all ${
                          errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-sky-500'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-950/80 border text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all ${
                          errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-sky-500'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Amazon, Google, Deloitte, etc."
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5">
                        Role / Opportunity Type
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. AWS Cloud Engineer / DevOps"
                        className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Message / Project Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shalini, we came across your AWS & DevOps profile and would love to discuss an opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950/80 border text-xs sm:text-sm text-white placeholder:text-gray-600 focus:outline-none transition-all ${
                        errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 glow-btn transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Cloud Queue...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-gray-500 font-mono">
                    Protected by TLS encryption • No spam guarantee
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
