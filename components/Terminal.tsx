import React, { useState, useEffect, useRef } from 'react';
import { TerminalLine } from '../types';

interface TerminalProps {
  onTrigger: (cmd: string) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onTrigger }) => {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory: TerminalLine[] = [...history, { id: Date.now().toString(), type: 'input', content: input }];

    switch (cmd) {
      case 'help':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: 'Loading command reference...' });
        onTrigger('help');
        break;
      case 'clear':
        setHistory([{ id: `clear-${Date.now()}`, type: 'output', content: 'System buffer reset.' }]);
        setInput('');
        onTrigger('clear');
        return;
      case 'about':
      case 'projects':
      case 'skills':
      case 'contact':
      case 'experience':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: '200 OK' });
        onTrigger(cmd);
        break;
      case 'github':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: 'Opening GitHub profile...' });
        window.open('https://github.com/mbu-peter', '_blank');
        break;
      case 'linkedin':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: 'Opening LinkedIn profile...' });
        window.open('https://linkedin.com/in/peter-mbugua', '_blank');
        break;
      case 'twitter':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: 'Opening Twitter profile...' });
        window.open('https://twitter.com/mbuguaKhara', '_blank');
        break;
      case 'whoami':
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: 'peter@portfolio' });
        break;
      case '':
        break;
      default:
        newHistory.push({ id: `out-${Date.now()}`, type: 'output', content: `Unknown command: ${cmd}. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full font-mono text-emerald-400 text-xs selection:bg-emerald-500/30 bg-black" onClick={() => inputRef.current?.focus()}>
      {/* Scrollable history area - takes up all available space except for input */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-0.5">
        {history.map((line) => (
          <div key={line.id}>
            {line.type === 'input' && (
              <div className="flex items-center">
                <span className="text-green-400 font-bold mr-2 text-xs">peter@portfolio:~$</span>
                <span className="text-white text-xs">{line.content}</span>
              </div>
            )}
            {line.type === 'output' && (
              <div className="whitespace-pre-wrap break-words text-green-300 leading-tight font-light text-xs ml-6">
                {line.content}
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Fixed input prompt at the very bottom */}
      <form onSubmit={handleCommand} className="flex border-t border-green-800 p-2">
        <span className="text-green-400 font-bold mr-2 shrink-0 text-xs">peter@portfolio:~$</span>
        <input
          ref={inputRef}
          autoFocus
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-green-700 caret-green-400 font-light text-xs"
          placeholder=""
          spellCheck={false}
          autoComplete="off"
        />
      </form>
    </div>
  );
};