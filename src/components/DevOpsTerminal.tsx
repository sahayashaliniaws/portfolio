import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  X, 
  CornerDownLeft, 
  RotateCcw,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

interface DevOpsTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string;
  timestamp: string;
}

export const DevOpsTerminal: React.FC<DevOpsTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: `Welcome to Sahaya Shalini S's AWS Cloud & DevOps Interactive Shell (v2.4.0)
Type 'help' to see available commands or click the shortcut buttons below.
Try 'projects', 'terraform plan', 'kubectl pods', or 'cat resume'!`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output = '';
    if (terminalCommands[trimmed]) {
      output = terminalCommands[trimmed];
    } else if (trimmed === 'welcome') {
      output = `Welcome to Sahaya Shalini S's AWS Cloud & DevOps Interactive Shell.
Type 'help' to view available commands.`;
    } else {
      output = `zsh: command not found: ${trimmed}. Type 'help' to view valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdStr,
        output,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);

    setCommandHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  const handleCopyHistory = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const quickButtons = [
    'help',
    'projects',
    'skills',
    'experience',
    'aws',
    'terraform plan',
    'kubectl pods',
    'cat resume',
    'contact',
    'clear'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[85vh] max-h-[700px] flex flex-col rounded-2xl bg-[#090D16] border border-sky-500/40 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B1120] border-b border-gray-800 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer"
              title="Close terminal"
            />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <div className="ml-3 flex items-center gap-2 text-xs text-gray-300 font-medium">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>shalini@aws-cloud-shell:~ (bash)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyHistory}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 text-[11px] transition-all cursor-pointer"
              title="Copy terminal session"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={() => setHistory([])}
              className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer"
              title="Reset terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-950/90 border-b border-gray-800/80 overflow-x-auto text-[11px]">
          <span className="text-gray-500 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-400" /> Quick:
          </span>
          {quickButtons.map((btn) => (
            <button
              key={btn}
              onClick={() => executeCommand(btn)}
              className="px-2 py-0.5 rounded bg-gray-900 hover:bg-blue-600/30 text-gray-300 hover:text-sky-300 border border-gray-800 hover:border-sky-500/40 shrink-0 transition-all cursor-pointer"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-gray-300 leading-relaxed bg-[#090D16]/95">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <span className="text-emerald-400">shalini@aws-cloud</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-gray-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="text-gray-300 whitespace-pre-wrap pl-2 border-l border-gray-800 text-xs sm:text-sm">
                {item.output}
              </div>
            </div>
          ))}

          {/* Active Command Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400">shalini@aws-cloud</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-gray-600"
              autoFocus
            />
            <button
              onClick={() => executeCommand(input)}
              className="p-1 rounded bg-gray-800 text-gray-400 hover:text-white sm:hidden"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#0B1120] border-t border-gray-800 text-[11px] text-gray-500 flex items-center justify-between">
          <span>Press [Enter] to run • [Up/Down] for command history</span>
          <span className="text-emerald-400">STATUS: ONLINE (us-east-1)</span>
        </div>

      </div>
    </div>
  );
};
