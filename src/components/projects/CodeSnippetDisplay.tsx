'use client'; // Need state for expand/collapse

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a theme
// Import the specific block type
import { CodeSnippetBlock } from '@/types/project';

// Update props to accept the CodeSnippetBlock object
interface CodeSnippetDisplayProps {
  block: CodeSnippetBlock;
}

const CodeSnippetDisplay: React.FC<CodeSnippetDisplayProps> = ({ block }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const codeBlockMaxHeight = isExpanded ? 'none' : '8rem';

  return (
    // Component now only renders the snippet display itself
    <div className="border border-gray-700 rounded-md overflow-hidden bg-gray-800 transition-all duration-300 ease-in-out">
      {/* Header */}
      <div className="flex justify-between items-center p-2 bg-gray-700 cursor-pointer" onClick={toggleExpand}>
        {/* <span className="text-sm font-mono text-gray-300">
          {block.title ? `${block.title} (${block.language})` : block.language}
        </span> */}
        <button
          className="text-xs text-gray-400 hover:text-white focus:outline-none"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Collapse Code [-]' : 'Expand Code [+]'}
        </button>
      </div>
      {/* Code Block */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: codeBlockMaxHeight }}
      >
        <div className="p-0 m-0 overflow-auto">
          <SyntaxHighlighter
            language={block.language}
            style={vscDarkPlus}
            customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem' }}
            wrapLongLines={true}
          >
            {block.code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetDisplay;