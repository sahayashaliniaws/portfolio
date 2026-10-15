import React, { useState } from 'react';
import { Reveal, ScaleIn } from './Motion';
import { 
  User, 
  GraduationCap, 
  Globe2, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  GitBranch, 
  Activity, 
  Award,
  CheckCircle2,
  FileText,
  MapPin,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'pillars' | 'education' | 'facts'>('summary');

  const pillars = [
    {
      title: "Infrastructure as Code (IaC)",
      description: "Provisioning reproducible, version-controlled AWS infrastructure using Terraform and Ansible to eliminate environment drift across dev, staging, and prod.",
      icon: Layers,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Containerization & Orchestration",
      description: "Dockerizing microservices and orchestrating container deployments across Amazon EKS and ECS with Helm charts, ConfigMaps, and automated rolling updates.",
      icon: Server,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      title: "DevSecOps & Automated CI/CD",
      description: "Writing declarative Jenkins pipelines integrated with Git, Maven, and SonarQube quality gates to block code vulnerabilities before deployment.",
      icon: GitBranch,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Observability & 24/7 Operations",
      description: "Implementing proactive monitoring using Amazon CloudWatch, Prometheus, and Grafana. Maintaining runbooks and driving rapid incident resolution.",
      icon: Activity,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B1120]">
      {/* Background cyber lines */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Architecting <span className="gradient-text">Resilient Cloud Systems</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A dedicated AWS Cloud & DevOps Engineer blending 4 years of operational discipline, infrastructure automation, and container orchestration.
          </p>
        </Reveal>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-900/90 border border-gray-800 backdrop-blur-md">
            {[
              { id: 'summary', label: 'Professional Summary', icon: Sparkles },
              { id: 'pillars', label: 'Engineering Pillars', icon: ShieldCheck },
              { id: 'education', label: 'Education & Academics', icon: GraduationCap },
              { id: 'facts', label: 'Quick Facts & Languages', icon: Globe2 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/20 font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content 1: Professional Summary */}
        {activeTab === 'summary' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
            <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                  Delivering Scalable AWS Infrastructure & Enterprise CI/CD
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Throughout my career at <strong className="text-sky-300">HCLTech</strong> supporting tier-1 clients such as <strong className="text-white">Fiserv India Ltd</strong> and <strong className="text-white">AFG Software Services</strong>, I have focused on eliminating manual deployment friction, hardening AWS network security boundaries, and designing self-healing microservice clusters.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Zero-Downtime Rolling Kubernetes Deployments",
                    "SonarQube Static Analysis & Quality Gate Enforcement",
                    "Multi-AZ High Availability & VPC Isolation",
                    "Modular Terraform Infrastructure as Code"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-gray-300 font-mono">Immediate / Active Joiner in Chennai</span>
                </div>
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-sky-300 border border-blue-500/30 text-xs font-medium transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Full CV</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-sky-400">
                <div className="text-xs uppercase font-mono text-sky-400 tracking-wider mb-1">Current Role</div>
                <div className="text-lg font-bold text-white">Associate DevOps Engineer</div>
                <div className="text-sm text-gray-400">HCLTech Pvt Ltd | Client: Fiserv India Ltd</div>
                <div className="text-xs text-gray-400 font-mono mt-1">Mar 2024 – Aug 2026</div>
                <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                  Leading automated Jenkins CI/CD pipeline development, containerizing Java Spring Boot microservices on Kubernetes (EKS), and enforcing DevSecOps quality gates.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-blue-500">
                <div className="text-xs uppercase font-mono text-blue-400 tracking-wider mb-1">Foundational Experience</div>
                <div className="text-lg font-bold text-white">AWS Cloud / Support Engineer</div>
                <div className="text-sm text-gray-400">HCLTech Pvt Ltd | Client: AFG Software Services</div>
                <div className="text-xs text-gray-400 font-mono mt-1">Jul 2022 – Feb 2024</div>
                <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                  Managed multi-tier AWS VPC networks, EC2 fleets, S3 storage lifecycles, IAM least-privilege policies, and CloudWatch operational monitoring.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Engineering Pillars */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-sky-300 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>Pillar {idx + 1} of 4</span>
                    <span className="text-sky-400">Production-Grade Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab Content 3: Education & Academics */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sky-400 font-medium text-sm">
                    {personalInfo.education.major}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {personalInfo.education.institution}
                  </p>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-xs font-mono text-gray-300">
                {personalInfo.education.period}
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-3 font-mono">
                Academic & Technical Foundation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                {[
                  "Computer Networking & Protocol Architectures (TCP/IP, DNS, Subnets)",
                  "Digital Logic, Microprocessor & Embedded Systems",
                  "Structured Problem Solving & Algorithmic Foundations",
                  "Analytical Troubleshooting & Systems Diagnostics",
                  "Collaborative Engineering Project Lifecycle Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: Quick Facts & Languages */}
        {activeTab === 'facts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-sky-400" />
                <h4 className="font-heading font-bold text-white">Base & Relocation</h4>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                Primary Location: <span className="text-white font-semibold">Chennai, India</span>
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Open to on-site roles in Chennai, hybrid arrangements, or remote cloud engineering positions across India & global time zones.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="w-5 h-5 text-cyan-400" />
                <h4 className="font-heading font-bold text-white">Language Proficiency</h4>
              </div>
              <div className="space-y-3">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="p-2.5 rounded-lg bg-gray-950/60 border border-gray-800">
                    <div className="flex justify-between text-xs font-medium text-white mb-1">
                      <span>{lang.name}</span>
                      <span className="text-sky-400">{lang.proficiency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-amber-400" />
                <h4 className="font-heading font-bold text-white">Core Commitments</h4>
              </div>
              <ul className="text-xs text-gray-300 space-y-2 font-mono">
                <li>• 100% Infrastructure as Code</li>
                <li>• Zero Production Disruption</li>
                <li>• Rigorous Quality Gate Passing</li>
                <li>• Continuous Cloud Modernization</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
