import React from 'react';
import { TimelineEvent } from '@/data/about'; // Import the type
import { motion } from 'framer-motion';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  // Animation for each item - Removed y animation to fix dot positioning
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative pl-8 border-l-2 border-[#d97150]">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="mb-10 ml-4" // Margin between items
          variants={itemVariants}
          // Stagger children if needed, applied on parent in page.tsx
        >
          {/* Dot on the timeline */}
          <div className="absolute w-4 h-4 bg-[#ff996c] rounded-full mt-1.5 -left-[9px] border border-gray-900 dark:border-[#d97150] dark:bg-[#ff996c]"></div>

          {/* Year/Date */}
          <time className="mb-1 text-sm font-normal leading-none text-[#ff996c]">
            {event.year}
          </time>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-100 mt-1">
            {event.title}
          </h3>

          {/* Description */}
          <p className="mb-4 text-base font-normal text-gray-400">
            {event.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;