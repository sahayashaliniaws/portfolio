import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { AwsEcosystem } from './components/AwsEcosystem';
import { ArchitecturePlayground } from './components/ArchitecturePlayground';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DevOpsTerminal } from './components/DevOpsTerminal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-[#F9FAFB] selection:bg-blue-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        onOpenTerminal={() => setTerminalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)} 
          onOpenTerminal={() => setTerminalOpen(true)} 
        />
        <About 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <Skills />
        <AwsEcosystem />
        <ArchitecturePlayground />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)} 
        onOpenTerminal={() => setTerminalOpen(true)} 
      />

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <DevOpsTerminal 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />
    </div>
  );
}

export default App;
