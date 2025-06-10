'use client'; // Required for state and lightbox interaction

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom"; // Import zoom plugin
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles

import { ImageGalleryBlock } from '@/types/project'; // Import the specific block type

interface ImageGalleryProps {
  block: ImageGalleryBlock;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ block }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!block?.images || block.images.length === 0) {
    return null;
  }

  // Prepare slides for the lightbox
  const slides = block.images.map(img => ({
    src: img.url,
    alt: img.alt || '',
    // You can add width/height here if known, otherwise lightbox calculates
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      {/* Optional Title/Description for the gallery */}
      {block.title && <h4 className="text-lg font-semibold mb-1 text-gray-300">{block.title}</h4>}
      {block.description && <p className="text-sm text-gray-400 mb-3">{block.description}</p>}

      {/* Scrollable Thumbnail Container */}
      <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"> {/* Increased spacing */}
        {block.images.map((image, index) => (
          <div
            key={index}
            // Increased thumbnail size (adjust w-48 h-32 as needed)
            // Re-added 'relative' class
            className="flex-shrink-0 w-48 h-32 relative rounded-lg overflow-hidden cursor-pointer group shadow-md"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.url}
              alt={image.alt || `Gallery image ${index + 1}`}
              fill={true} // Use fill prop again
              sizes="192px" // Provide sizes hint (w-48 = 12rem = 192px)
              style={{ objectFit: 'cover' }} // Use inline style for object-fit
              className="transition-transform duration-300 group-hover:scale-110"
            />
            {/* Removed the overlay div that seemed to cause issues */}
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom]} // Enable zoom plugin
        // Add other plugins or customizations if needed (e.g., Thumbnails, Captions)
      />
    </div>
  );
};

export default ImageGallery;