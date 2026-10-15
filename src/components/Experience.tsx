import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { experience } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  return (
    <section id="experience" className="py-24 relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Professional <span className="gradient-text">Engineering Experience</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            4 years of proven IT impact with HCLTech supporting tier-1 banking & enterprise software clients across DevOps automation and AWS cloud infrastructure operations.
          </p>
        </div>

        {/* Experience Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Timeline Navigation Cards */}
          <div className="lg:col-span-4 space-y-4">
            {experience.map((exp, index) => {
              const isActive = index === activeExpIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveExpIndex(index)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-950/70 to-gray-900 border-sky-400 shadow-xl shadow-blue-500/10'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-sky-400 font-semibold">
                      {exp.period}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-sky-300 border border-blue-500/20">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-white text-base">
                    {exp.role}
                  </h3>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">
                    {exp.company}
                  </div>
                  <div className="text-xs font-mono text-cyan-300 mt-1">
                    {exp.client}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-mono mt-3">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              );
            })}

            {/* Quick Stats callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Enterprise Track Record</span>
              </div>
              <ul className="space-y-1.5 text-gray-300">
                <li>• 2 Years: DevOps & CI/CD Automation</li>
                <li>• 2 Years: AWS Cloud Support & SysAdmin</li>
                <li>• 100% ITIL Incident Management Adherence</li>
              </ul>
            </div>
          </div>

          {/* Right Column: In-Depth Responsibility Breakdown */}
          <div className="lg:col-span-8">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sky-500/30">
              
              {/* Header inside card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-4 h-4 text-sky-400" />
                    <span className="font-heading font-bold text-lg text-white">
                      {experience[activeExpIndex].company}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm font-mono text-sky-400">
                      {experience[activeExpIndex].client}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {experience[activeExpIndex].role}
                  </div>
                </div>
                <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{experience[activeExpIndex].period}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="py-5">
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {experience[activeExpIndex].summary}
                </p>
              </div>

              {/* Bulleted Achievements from Resume */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  Key Responsibilities & Deliverables
                </h4>
                {experience[activeExpIndex].keyResponsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 border-t border-gray-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                  Technologies & Ecosystem Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience[activeExpIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-gray-900 text-sky-300 text-xs font-mono border border-gray-800 hover:border-sky-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
