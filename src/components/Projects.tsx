import React, { useState } from 'react';
import { 
  FolderGit2, 
  X, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#0B1120] border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Production Architecture Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="gradient-text">Cloud & DevOps Projects</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Real-world enterprise microservices and scalable cloud server architectures engineered with modern DevOps principles, automated pipelines, and AWS high-availability frameworks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden border border-gray-800 hover:border-sky-500/40 transition-all duration-300 shadow-2xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Left Column: Image & Architecture Preview */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div 
                      className="relative rounded-2xl overflow-hidden group cursor-pointer border border-sky-500/30 bg-gray-950 shadow-xl"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Category Pill */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-mono font-semibold border border-blue-400/40">
                        {project.category}
                      </div>

                      {/* Zoom Button */}
                      <div className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-gray-900/90 text-sky-400 border border-sky-500/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-mono">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                      </div>

                      {/* Architecture Step ticker */}
                      <div className="absolute bottom-4 left-4 right-20 hidden sm:block">
                        <div className="text-[11px] font-mono text-gray-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-800 truncate">
                          ⚡ Flow: {project.architectureFlow[0]} &rarr; {project.architectureFlow[1]} &rarr; ...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Details & Metrics */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                        Key Architecture {index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-300 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Problem -> Solution Split */}
                    <div className="space-y-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-gray-950/70 border border-red-500/20 text-xs sm:text-sm text-gray-300">
                        <strong className="text-red-400 font-mono block text-xs uppercase mb-1">
                          Problem Statement
                        </strong>
                        {project.problem}
                      </div>

                      <div className="p-3.5 rounded-xl bg-gray-950/70 border border-emerald-500/20 text-xs sm:text-sm text-gray-300">
                        <strong className="text-emerald-400 font-mono block text-xs uppercase mb-1">
                          DevOps Solution
                        </strong>
                        {project.solution}
                      </div>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center">
                          <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
                          <div className="text-sm sm:text-base font-bold text-sky-300 font-heading mt-0.5">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tool Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-gray-900 text-gray-300 text-[11px] font-mono border border-gray-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-xs shadow-md shadow-blue-500/20 glow-btn transition-all cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Architecture Deep-Dive</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700 text-xs font-mono transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>GitHub Repo</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B1120] border border-sky-500/40 p-6 sm:p-8 shadow-2xl text-white">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700 focus:outline-none cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 block mb-1">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Architecture Diagram Image */}
            <div className="rounded-2xl overflow-hidden border border-gray-800 mb-6 bg-gray-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Step-by-Step Architecture Flow */}
            <div className="mb-6">
              <h4 className="text-sm font-bold font-mono text-gray-300 uppercase tracking-wider mb-3">
                Architectural Execution Flow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.architectureFlow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-950/70 border border-gray-800 text-xs font-mono text-gray-300">
                    <span className="w-5 h-5 rounded-md bg-blue-600/30 text-sky-300 flex items-center justify-center font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture In-Depth Details */}
            <div className="p-4 rounded-xl bg-gray-950/80 border border-gray-800 mb-6">
              <h4 className="text-xs font-mono uppercase text-sky-400 mb-2">Technical Architecture Breakdown</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                {selectedProject.architecture}
              </p>
              <h4 className="text-xs font-mono uppercase text-emerald-400 mb-2">Measurable Business & Engineering Outcomes</h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {selectedProject.outcome}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-gray-900 text-gray-300 text-[10px] font-mono border border-gray-800">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit GitHub Repository</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
