import React from 'react';
import { 
  Cloud, 
  ArrowUp, 
  Mail, 
  Phone, 
  Terminal as TerminalIcon,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080C16] border-t border-gray-800/80 text-gray-400 py-16 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Identity & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-wide">
                Sahaya Shalini S
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              AWS Cloud & DevOps Engineer with 4 years of IT experience automating continuous delivery pipelines, scaling containerized microservices on Amazon EKS, and enforcing DevSecOps quality gates.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-sky-400 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-sky-400 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-sky-400 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Email candidate"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="w-9 h-9 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-sky-400 text-sky-400 flex items-center justify-center transition-all cursor-pointer"
                title="Launch CLI sandbox"
              >
                <TerminalIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-sky-300 transition-colors">About & Summary</a></li>
              <li><a href="#skills" className="hover:text-sky-300 transition-colors">DevOps & Cloud Skills</a></li>
              <li><a href="#aws" className="hover:text-sky-300 transition-colors">AWS Services Portfolio</a></li>
              <li><a href="#pipeline" className="hover:text-sky-300 transition-colors">Interactive CI/CD Pipeline</a></li>
              <li><a href="#projects" className="hover:text-sky-300 transition-colors">Production Cloud Projects</a></li>
              <li><a href="#experience" className="hover:text-sky-300 transition-colors">HCLTech Experience</a></li>
              <li><a href="#certifications" className="hover:text-sky-300 transition-colors">Certifications & Education</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${personalInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </p>
              <p className="text-gray-400 pt-2 font-mono">
                📍 Chennai, Tamil Nadu, India (Open to Relocation / Hybrid / Remote)
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600/20 text-sky-300 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-medium transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View ATS Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: System Status & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400">AWS Infrastructure Status: All Systems Operational (99.99%)</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span>© {new Date().getFullYear()} Sahaya Shalini S.</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-sky-400 hover:text-white border border-gray-800 transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
