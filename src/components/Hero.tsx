import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal as TerminalIcon, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Cloud, 
  Server, 
  GitBranch,
  Sparkles,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.taglines[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalInfo.taglines.length);
      } else {
        setDisplayText(
          isDeleting 
            ? currentRole.substring(0, displayText.length - 1) 
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Canvas interactive constellation particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const particleCount = Math.min(Math.floor(width / 22), 55);
    const colors = ['#38BDF8', '#3B82F6', '#06B6D4', '#60A5FA'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
      {/* Background canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0 opacity-60" 
      />

      {/* Cyber ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{personalInfo.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-mono font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{personalInfo.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>4 Years IT Experience</span>
              </div>
            </div>

            {/* Candidate Name Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4">
              <span className="block text-white">Hi, I'm</span>
              <span className="gradient-text font-heading">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className="font-mono text-lg sm:text-2xl text-sky-300 font-semibold tracking-wide">
                &gt; {displayText}
                <span className="inline-block w-2.5 h-5 ml-1 bg-sky-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Bio Summary */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
              AWS Cloud & DevOps Engineer with <span className="text-sky-400 font-semibold">4 years of IT experience</span> (2 years AWS Cloud Support + 2 years DevOps Engineering at HCLTech). Specializing in <span className="text-white font-medium">Terraform IaC, Jenkins CI/CD, Kubernetes (Amazon EKS/ECS), Docker, Linux</span>, and resilient multi-AZ AWS architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 glow-btn transition-all"
              >
                <span>Explore Architecture & Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 text-white font-medium text-sm border border-gray-700/80 hover:border-sky-400/50 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>View ATS Resume</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-black/60 hover:bg-black/80 text-sky-400 font-mono text-xs border border-sky-500/30 hover:border-sky-400 transition-all cursor-pointer"
                title="Open interactive DevOps CLI sandbox"
              >
                <TerminalIcon className="w-4 h-4 text-sky-400" />
                <span>Launch CLI</span>
              </button>
            </div>

            {/* Core Tech Stack Icons Bar */}
            <div className="pt-6 border-t border-gray-800/80">
              <p className="text-xs uppercase font-mono tracking-wider text-gray-400 mb-3 text-center lg:text-left">
                Production-Proven Toolchain
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                {[
                  { name: 'AWS Cloud', icon: Cloud, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
                  { name: 'Terraform IaC', icon: Layers, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
                  { name: 'Kubernetes (EKS)', icon: Cpu, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
                  { name: 'Docker', icon: Server, color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
                  { name: 'Jenkins CI/CD', icon: GitBranch, color: 'text-red-400 border-red-500/30 bg-red-500/10' },
                  { name: 'SonarQube Gates', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' }
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium ${tech.color}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Profile Avatar & Holographic Cloud Ops Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-400 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-gray-800/80 to-gray-900/90 border border-sky-500/30 p-3 shadow-2xl backdrop-blur-xl">
                
                {/* Profile Portrait Image */}
                
              </div>
            </div>
          </div>
          </div>

        {/* Bottom Key Metric Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-800/80">
          {personalInfo.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:border-sky-500/30 transition-all text-center lg:text-left group"
            >
              <div className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-sky-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
