// src/app/about/page.tsx
"use client"; // May need client components for animations or interactions

import { motion } from "framer-motion";
import { timelineData, languageData, aboutIntro } from "@/data/about";
// Import sub-components
import Timeline from "@/components/about/Timeline";
import Languages from "@/components/about/Languages";

export default function AboutPage() {
  // Animation variants (similar to other pages)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Adjusted stagger
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = { // Variants for whole sections
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto max-w-4xl px-4 py-16" // Consistent width
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={sectionVariants} // Animate title as a section
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-400 font-heading"
      >
        About Me
      </motion.h1>

      {/* Introduction Section */}
      <motion.div
        variants={sectionVariants} // Animate intro
        className="mb-16 text-center text-lg text-gray-300 whitespace-pre-line bg-gray-800/30 p-6 rounded-lg" // Added subtle background
      >
        {aboutIntro.trim()}
      </motion.div>

      {/* Timeline Section */}
      <motion.div variants={sectionVariants} className="mb-16"> {/* Increased margin */}
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-200">My Journey</h2> {/* Increased margin */}
        <Timeline events={timelineData} /> {/* Use Timeline component */}
      </motion.div>

      {/* Languages Section */}
      <motion.div variants={sectionVariants} className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-200">Languages</h2> {/* Increased margin */}
        <Languages languages={languageData} /> {/* Use Languages component */}
      </motion.div>

    </motion.div>
  );
}