import { useState } from 'react';
import { 
  Code, 
  Cloud, 
  Layers, 
  Cpu, 
  GitBranch, 
  Activity, 
  Database,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { Reveal, StaggerContainer, StaggerItem } from './Motion';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, any> = {
    'Cloud & AWS': Cloud,
    'DevOps & IaC': Layers,
    'Containers & Orchestration': Cpu,
    'CI/CD & Code Quality': GitBranch,
    'Monitoring & Observability': Activity,
    'Application & Databases': Database
  };

  const allCategories = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <Reveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Production-Tested <span className="gradient-text">DevOps Skills</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            4 years of battle-tested engineering proficiency across cloud architecture, automation pipelines, container orchestration, and continuous telemetry.
          </p>
        </Reveal>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-md shadow-blue-500/25 font-semibold'
                  : 'bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories & Skills Display */}
        <StaggerContainer stagger={0.1} className="space-y-12">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.category] || Code;
            return (
              <div key={category.category} className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800">
                
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                        {category.category}
                      </h3>
                      <p className="text-xs text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-sky-400 self-start sm:self-center">
                    {category.skills.length} Core Technologies
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 rounded-xl bg-gray-950/60 border border-gray-800/80 hover:border-sky-500/40 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="font-semibold text-white group-hover:text-sky-300 transition-colors text-sm">
                          {skill.name}
                        </div>
                        <span className="text-xs font-mono font-bold text-sky-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden mb-3">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Tags & Experience */}
                      <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono mb-3">
                        <span>Experience: {skill.experience}</span>
                        {skill.highlight && (
                          <span className="text-cyan-400 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Core
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-900">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-gray-900 text-gray-300 text-[10px] font-mono border border-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </StaggerContainer>

        {/* Operational Runbooks & Methodologies Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Methodologies & Standards
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Agile, DevSecOps, & ITIL Incident Management
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Experienced in operating with Jira Kanban/Scrum, documenting production runbooks in Confluence, performing root-cause analysis (RCA), and leading release change management boards.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Jira & Confluence', 'ITIL Practices', 'RCA & Post-Mortems', 'Release Management', 'Runbook Automation'].map((m) => (
                <span key={m} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sky-300 text-xs font-mono">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
