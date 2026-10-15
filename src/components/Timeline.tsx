import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Cloud,
  Cpu,
  Sparkles
} from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './Motion';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  tags: string[];
}

const timelineData: TimelineEntry[] = [
  {
    year: '2015 – 2019',
    title: 'Bachelor of Engineering — ECE',
    subtitle: 'Loyola-ICAM College of Engineering and Technology (LICET), Chennai',
    description:
      'Built a strong foundation in computer networking, digital systems, microprocessors, and analytical problem-solving that directly translates to modern cloud & DevOps engineering.',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-600',
    tags: ['Networking', 'Digital Systems', 'Problem Solving']
  },
  {
    year: 'Jul 2022 – Feb 2024',
    title: 'AWS Cloud / Support Engineer',
    subtitle: 'HCLTech Pvt Ltd — Client: AFG Software Services',
    description:
      'Managed production AWS infrastructure across EC2, VPC, S3, IAM, EBS, RDS & Lambda. Led CloudWatch monitoring, incident management, and enforced least-privilege IAM policies for enterprise workloads.',
    icon: Cloud,
    color: 'from-amber-500 to-orange-600',
    tags: ['AWS', 'VPC', 'IAM', 'CloudWatch', 'Terraform', 'Linux']
  },
  {
    year: 'Mar 2024 – Aug 2026',
    title: 'Associate DevOps Engineer',
    subtitle: 'HCLTech Pvt Ltd — Client: Fiserv India Ltd',
    description:
      'Engineered Jenkins CI/CD pipelines, containerized Spring Boot microservices on Docker & Kubernetes (EKS), integrated SonarQube quality gates, and automated infrastructure with Terraform IaC for a tier-1 financial technology client.',
    icon: Cpu,
    color: 'from-blue-500 to-sky-500',
    tags: ['Jenkins', 'Docker', 'Kubernetes/EKS', 'Terraform', 'SonarQube', 'Helm']
  },
  {
    year: '2026',
    title: 'AWS Cloud Practitioner Essentials',
    subtitle: 'Amazon Web Services',
    description:
      'Validated core AWS cloud architecture knowledge spanning compute, storage, networking, security (IAM & Shared Responsibility Model), and the AWS Well-Architected Framework.',
    icon: Award,
    color: 'from-emerald-500 to-teal-600',
    tags: ['AWS Certified', 'Well-Architected', 'Cloud Fundamentals']
  },
  {
    year: '2026',
    title: 'AWS Cloud & DevOps Advanced Program',
    subtitle: 'Login360, Chennai',
    description:
      'Completed an intensive advanced program covering Terraform modules, Ansible automation, Docker multi-stage builds, Kubernetes cluster operations, Jenkins pipeline engineering, and Linux administration.',
    icon: BookOpen,
    color: 'from-cyan-500 to-blue-600',
    tags: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'Jenkins', 'Linux']
  },
  {
    year: 'Present',
    title: 'Actively Seeking Next Opportunity',
    subtitle: 'Open to AWS Cloud / DevOps Roles — Chennai, Hybrid, or Remote',
    description:
      'Preparing for AWS Solutions Architect – Associate and Certified Kubernetes Administrator (CKA). Looking to contribute to enterprise-scale cloud infrastructure, container orchestration, and CI/CD automation initiatives.',
    icon: Sparkles,
    color: 'from-sky-400 to-cyan-400',
    tags: ['Solutions Architect', 'CKA', 'Open to Opportunities']
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From an Electronics & Communication engineering degree through production AWS cloud operations to DevOps automation leadership — a continuous upward trajectory.
          </p>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/40 via-blue-500/40 to-cyan-400/40" />

          <StaggerContainer stagger={0.15} className="space-y-12">
            {timelineData.map((entry, idx) => {
              const Icon = entry.icon;
              const isEven = idx % 2 === 0;

              return (
                <StaggerItem key={idx}>
                  <div
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Connector dot */}
                    <div
                      className={`absolute left-5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${entry.color} ring-4 ring-[#0B1120] z-10`}
                    />

                    {/* Card */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        isEven ? 'sm:pr-4 sm:text-right' : 'sm:pl-4 sm:text-left'
                      }`}
                    >
                      <div className="glass-card p-5 sm:p-6 rounded-2xl group hover:border-sky-400/50 transition-all">
                        {/* Date badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold mb-3 bg-gradient-to-r ${entry.color} text-white shadow-sm`}
                        >
                          {entry.year}
                        </span>

                        <div className={`flex items-center gap-3 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                          <div
                            className={`w-9 h-9 rounded-xl bg-gradient-to-br ${entry.color} bg-opacity-20 flex items-center justify-center text-white shadow-md`}
                          >
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors">
                            {entry.title}
                          </h3>
                        </div>

                        <p className="text-xs text-sky-400 font-medium mb-2">{entry.subtitle}</p>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                          {entry.description}
                        </p>

                        <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : ''}`}>
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-gray-900 text-gray-300 text-[10px] font-mono border border-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
