import React from 'react';
import { LanguageInfo } from '@/data/about'; // Import the type
import { motion } from 'framer-motion';

interface LanguagesProps {
  languages: LanguageInfo[];
}

// Helper to get percentage and color based on proficiency
const getProficiencyStyle = (proficiency: LanguageInfo['proficiency']): { width: string; colorClass: string } => {
  switch (proficiency) {
    case 'Native': return { width: '100%', colorClass: 'bg-green-500' };
    case 'Fluent': return { width: '90%', colorClass: 'bg-blue-500' };
    case 'Conversational': return { width: '65%', colorClass: 'bg-yellow-500' };
    case 'Basic': return { width: '30%', colorClass: 'bg-orange-500' };
    default: return { width: '0%', colorClass: 'bg-gray-500' };
  }
};

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
   // Animation for each item
   const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    // Adjusted grid for better bar display, maybe fewer columns
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {languages.map((lang, index) => {
        const { width, colorClass } = getProficiencyStyle(lang.proficiency);
        return (
          <motion.div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/60 shadow-md"
            variants={itemVariants}
          >
            <div className="flex justify-between items-baseline mb-2"> {/* Use baseline alignment */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-100">{lang.name}</h4>
                    {/* Display native name if available */}
                    {lang.nativeName && <p className="text-xs text-gray-500 mt-0.5">{lang.nativeName}</p>}
                </div>
                <span className="text-xs font-medium text-gray-400 flex-shrink-0">{lang.proficiency}</span> {/* Prevent proficiency text from wrapping */}
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-600 overflow-hidden mt-2"> {/* Added margin top */}
              <motion.div
                className={`h-2.5 rounded-full ${colorClass}`}
                style={{ width: '0%' }} // Start at 0 width
                animate={{ width: width }} // Animate to target width
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.1 }} // Add delay
              ></motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Languages;