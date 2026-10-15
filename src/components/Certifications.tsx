import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Cloud,
  Cpu,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'aws':
        return Cloud;
      case 'devops':
        return Cpu;
      case 'academic':
        return GraduationCap;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Certifications & <span className="gradient-text">Academic Qualifications</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Formal cloud accreditations and academic engineering background affirming rigorous standards in DevOps automation, AWS infrastructure, and computer systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const BadgeIcon = getBadgeIcon(cert.badgeType);
            const isAws = cert.badgeType === 'aws';

            return (
              <div
                key={cert.id}
                className={`glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between group transition-all duration-300 ${
                  isAws ? 'border-amber-500/30 hover:border-amber-400/60' : 'hover:border-sky-400/50'
                }`}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg ${
                      isAws 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 shadow-amber-500/10'
                        : cert.badgeType === 'devops'
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400 shadow-sky-500/10'
                        : 'bg-purple-500/10 border-purple-500/30 text-purple-400 shadow-purple-500/10'
                    }`}>
                      <BadgeIcon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-gray-900 text-gray-300 border border-gray-800">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-sky-300 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-medium text-sky-400 mb-4">
                    {cert.issuer}
                  </div>

                  {/* Highlights covered */}
                  <div className="space-y-2 mb-6">
                    {cert.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Credential</span>
                  </span>
                  
                  <span className="text-xs font-mono text-sky-400 group-hover:underline flex items-center gap-1 cursor-pointer">
                    <span>{cert.credentialId || 'Accredited'}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continuous Learning Pledge */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-gray-900 to-cyan-900/20 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base">
                Continuous Upskilling & Cloud Architecture Advancement
              </div>
              <div className="text-xs text-gray-400">
                Actively learning and preparing for AWS Certified Solutions Architect - Associate & Certified Kubernetes Administrator (CKA).
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono whitespace-nowrap">
            Status: Active Candidate
          </div>
        </div>

      </div>
    </section>
  );
};
