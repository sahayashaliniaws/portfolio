import React, { useRef, useState } from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import { personalInfo, experience, projects } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const printContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextResume = () => {
    const resumeText = `SAHAYA SHALINI S
AWS CLOUD & DEVOPS ENGINEER
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
• Cloud Platforms: AWS EC2, S3, IAM, VPC, EKS, ECS, Lambda, API Gateway, Application Load Balancer (ALB), CloudWatch
• Infrastructure as Code: Terraform, Ansible
• Containers & Orchestration: Docker, Kubernetes, Amazon EKS, Amazon ECS, Helm, Pods, Services, ConfigMaps
• CI/CD & Build Automation: Jenkins Declarative Pipelines, Maven, Git, GitHub
• Application Technologies: Java 17, Spring Boot, REST APIs, Microservices, Nginx
• Code Quality & Security: SonarQube, Quality Gates, Vulnerability Scanning, IAM Roles and Policies, Least-Privilege Access, Security Groups
• Databases: Amazon RDS for MySQL, Amazon DynamoDB
• Monitoring & Operations: Amazon CloudWatch, Prometheus, Grafana, Linux Administration, Shell Scripting, Jira, Confluence

PROFESSIONAL EXPERIENCE
HCLTech Pvt Ltd | Chennai, India
Associate DevOps Engineer | Client: Fiserv India Ltd
Mar 2024 – Aug 2026
• Built and maintained Jenkins CI/CD pipelines integrated with Git, GitHub, and Maven.
• Provisioned and maintained AWS infrastructure using Terraform and IaC practices.
• Containerized applications using Docker; supported Kubernetes (Pods, Services, Helm).
• Supported containerized application deployments on Amazon ECS and EKS.
• Monitored infrastructure health using Amazon CloudWatch, Prometheus, and Grafana.
• Integrated SonarQube quality gates, automated validation, and vulnerability scanning.
• Performed Linux administration and automated routine tasks using Shell Scripting and Ansible.

HCLTech Pvt Ltd | Chennai, India
AWS Cloud / Support Engineer | Client: AFG Software Services
Jul 2022 – Feb 2024
• Supported AWS infrastructure using EC2, VPC, S3, IAM, EBS, RDS, and Lambda.
• Managed AWS networking (subnets, route tables, IGW, Security Groups, NACLs, ALB, Auto Scaling).
• Monitored health and availability using Amazon CloudWatch metrics, logs, and alarms.
• Troubleshot AWS infrastructure, Linux servers, and network connectivity.
• Managed IAM roles, policies, and permissions in accordance with AWS security best practices.

KEY PROJECTS
1. AWS Cloud-Native E-Commerce Microservices Platform
• Developed Java 17 / Spring Boot microservices (User, Product, Order) with REST APIs.
• Containerized with Docker, automated Jenkins CI/CD with SonarQube quality gates, and Terraform IaC.

2. High-Availability Scalable Game Server on AWS
• Designed Java game server with ALB and EC2 Auto Scaling across Multi-AZ.
• Integrated AWS Lambda, API Gateway, RDS MySQL, and DynamoDB.

CERTIFICATIONS & EDUCATION
• AWS Cloud Practitioner Essentials — Amazon Web Services, 2026
• AWS Cloud & DevOps Advanced Program — Login360, Chennai, 2026
• Bachelor of Engineering in Electronics & Communication Engineering — LICET, Chennai (2015–2019)
`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0B1120] border border-sky-500/40 shadow-2xl overflow-hidden text-white">
        
        {/* Top Modal Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-950/90 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <h3 className="font-heading font-bold text-base sm:text-lg">
              Official ATS Resume Preview
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyTextResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700 text-xs font-mono transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div 
          ref={printContentRef}
          className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0F172A] text-gray-100 font-sans text-xs sm:text-sm print:bg-white print:text-black print:p-0"
        >
          {/* Header */}
          <div className="border-b border-gray-700 pb-6 mb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black uppercase">
              {personalInfo.name}
            </h1>
            <div className="text-sm font-bold text-sky-400 print:text-blue-700 uppercase tracking-wider mt-1">
              {personalInfo.roleTitle}
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-gray-300 print:text-gray-700 font-mono mt-3">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:underline">{personalInfo.phone}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-sky-400 font-mono mt-2">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/sahayashaliniaws</span>
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/sahaya-shalini-s</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-gray-300 print:text-gray-800 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-gray-300 print:text-gray-800">
              <p><strong className="text-white print:text-black">Cloud Platforms:</strong> AWS EC2, S3, IAM, VPC, EKS, ECS, Lambda, API Gateway, Application Load Balancer (ALB), CloudWatch</p>
              <p><strong className="text-white print:text-black">Infrastructure as Code:</strong> Terraform, Ansible</p>
              <p><strong className="text-white print:text-black">Containers & Orchestration:</strong> Docker, Kubernetes, Amazon EKS, Amazon ECS, Helm, Pods, Services, ConfigMaps</p>
              <p><strong className="text-white print:text-black">CI/CD & Build Automation:</strong> Jenkins Declarative Pipelines, Maven, Git, GitHub</p>
              <p><strong className="text-white print:text-black">Application Technologies:</strong> Java 17, Spring Boot, REST APIs, Microservices, Nginx</p>
              <p><strong className="text-white print:text-black">Code Quality & Security:</strong> SonarQube, Quality Gates, Vulnerability Scanning, IAM Roles and Policies, Least-Privilege Access, Security Groups</p>
              <p><strong className="text-white print:text-black">Databases:</strong> Amazon RDS for MySQL, Amazon DynamoDB</p>
              <p><strong className="text-white print:text-black">Monitoring & Operations:</strong> Amazon CloudWatch, Prometheus, Grafana, Linux Administration, Shell Scripting, Jira, Confluence</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-3">
              Professional Experience
            </h2>

            {experience.map((exp, idx) => (
              <div key={idx} className="mb-5 last:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div>
                    <span className="font-bold text-white print:text-black text-sm">{exp.company}</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span className="text-sky-300 print:text-blue-700 font-semibold">{exp.role}</span>
                    <span className="text-gray-400 mx-2">|</span>
                    <span className="text-gray-300 print:text-gray-700 italic">{exp.client}</span>
                  </div>
                  <span className="text-xs font-mono text-gray-400 print:text-gray-600">{exp.period}</span>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs text-gray-300 print:text-gray-800 mt-2">
                  {exp.keyResponsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-3">
              Key Projects
            </h2>

            {projects.map((proj, idx) => (
              <div key={idx} className="mb-4 last:mb-0">
                <div className="font-bold text-white print:text-black text-sm">
                  {proj.title}
                </div>
                <div className="text-xs text-gray-300 print:text-gray-800 mt-1 leading-relaxed">
                  {proj.solution}
                </div>
                <div className="text-[11px] font-mono text-sky-300 print:text-blue-700 mt-1">
                  <strong>Tools & Technologies:</strong> {proj.tools.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-2">
              Certifications & Education
            </h2>
            <div className="space-y-1.5 text-xs text-gray-300 print:text-gray-800">
              <p>• <strong>AWS Cloud Practitioner Essentials</strong> — Amazon Web Services, 2026</p>
              <p>• <strong>AWS Cloud & DevOps Advanced Program</strong> — Login360, Chennai, 2026</p>
              <p>• <strong>Bachelor of Engineering in Electronics & Communication Engineering</strong> — Loyola-ICAM College of Engineering and Technology (LICET), Chennai | 2015–2019</p>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-sky-400 print:text-blue-700 font-bold border-b border-gray-700 pb-1 mb-2">
              Languages
            </h2>
            <p className="text-xs text-gray-300 print:text-gray-800">
              <strong>English:</strong> Professional Working Proficiency &nbsp;|&nbsp; <strong>Tamil:</strong> Native Proficiency
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
