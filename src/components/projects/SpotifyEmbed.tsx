import React from 'react';
import { SpotifyTrackBlock } from '@/types/project'; // Import the specific block type

interface SpotifyEmbedProps {
  block: SpotifyTrackBlock;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ block }) => {
  if (!block?.trackId) {
    return null;
  }

  const embedUrl = `https://open.spotify.com/embed/track/${block.trackId}?utm_source=generator`;

  // Use Spotify's recommended compact height (80px or 152px)
  // Let's use 152px for better usability with controls showing
  const embedHeight = '152px';

  return (
    // Component renders only the iframe
    <iframe
        style={{ borderRadius: '12px' }}
        src={embedUrl}
        width="100%"
        height={embedHeight}
        frameBorder="0"
        allowFullScreen={false} // Fullscreen not typically needed/used for track embeds
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={block.title || "Spotify Track"} // Use title for accessibility
    ></iframe>
  );
};

export default SpotifyEmbed;