import React from 'react';
// Import the specific block type
import { YouTubeVideoBlock } from '@/types/project';

// Update props to accept the YouTubeVideoBlock object
interface YouTubeEmbedProps {
  block: YouTubeVideoBlock;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ block }) => {
  // Check only for videoId within the block
  if (!block?.videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${block.videoId}`;

  return (
    // Component now only renders the iframe itself
    <div className="mb-2" style={{ width: '560px', height: '315px', maxWidth: '100%' }}>
        <iframe
            src={embedUrl}
            // Use title from block if available, otherwise default
            title={block.title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            width="560"
            height="315"
            className="block"
            style={{ maxWidth: '100%' }}
        ></iframe>
    </div>
  );
};

export default YouTubeEmbed;