
// Fix: Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  images: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Experience {
  year: string;
  content: string;
}

export interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'component';
  content?: string;
  component?: React.ReactNode;
}
