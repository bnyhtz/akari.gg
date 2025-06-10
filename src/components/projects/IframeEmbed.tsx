'use client'; // Required for state and browser API usage

import React, { useState, useRef, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react'; // Using lucide-react for icons
// Import the specific block type
import { IframeBlock } from '@/types/project';

// Update props to accept the IframeBlock object
interface IframeEmbedProps {
  block: IframeBlock;
}

const IframeEmbed: React.FC<IframeEmbedProps> = ({ block }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Basic validation for URL
  try {
    new URL(block.url);
  } catch (e) {
    console.error("Invalid iframe URL provided:", block.url);
    return <p className="text-red-500">Error: Invalid embed URL.</p>;
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  // Use the title from block if available, otherwise default for accessibility
  const accessibilityTitle = block.title || "Embedded Content";

  return (
    // Component now only renders the iframe and its controls
    <div ref={containerRef} className="border border-gray-700 rounded-md overflow-hidden bg-gray-900 relative">
       {/* Header with only Fullscreen Button */}
       <div className="flex justify-end items-center p-1 bg-gray-700">
         <button
            onClick={toggleFullScreen}
            className="p-1 text-gray-400 hover:text-white focus:outline-none"
            title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
         >
            {isFullScreen ? <Minimize size={16} /> : <Maximize size={16} />}
         </button>
       </div>
       {/* Iframe */}
       <iframe
        ref={iframeRef}
        src={block.url}
        title={accessibilityTitle} // Use title for accessibility
        className={`w-full ${isFullScreen ? 'h-screen' : 'h-96'} block bg-white`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeEmbed;