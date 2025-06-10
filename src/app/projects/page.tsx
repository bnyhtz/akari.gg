// src/app/projects/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { projects } from '@/data/projects';
import { Project } from '@/types/project';

export default function ProjectsOverviewPage() {
  // Animation variants (keeping existing ones)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly faster stagger
        delayChildren: 0.1,
      },
    },
  };

  // Updated itemVariants for scale + fade animation
  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 }, // Start slightly smaller and faded out
    visible: {
      scale: 1, // Animate to full size
      opacity: 1, // Animate to full opacity
      transition: {
        duration: 0.4, // Adjust duration as needed
        ease: "easeOut",
      },
    },
  };

  // Simple function to truncate description for the card
  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#ff996c] font-heading"
      >
        My Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants} // Stagger children (cards)
      >
        {projects.map((project: Project) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref legacyBehavior>
            <motion.a // Use motion.a for animation on the link anchor
              className="block bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/60 flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 cursor-pointer"
              variants={itemVariants} // Animate each card
              whileHover={{ y: -5 }} // Existing hover effect for the card
            >
              {/* Display Featured Image */}
              <div className="relative w-full h-48 overflow-hidden"> {/* Container for image, adjust height h-48 */}
                {project.featuredImageUrl ? (
                  <Image
                    src={project.featuredImageUrl}
                    alt={`${project.title} featured image`}
                    fill={true} // Use fill prop
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Example sizes
                    style={{ objectFit: 'cover' }} // Use inline style
                    className="transition-transform duration-300 group-hover:scale-105" // Apply group-hover on parent link <a> tag
                  />
                ) : (
                  // Fallback placeholder
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                     <span className="text-gray-400 text-xs">(No Image)</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-heading text-[#ff996c]">{project.title}</h3>
                  {/* Reverted to use main description for summary */}
                  <p className="text-gray-400 text-sm mb-4">
                    {truncateDescription(project.description || '')}
                  </p>
                </div>
                {/* Optional Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={`${project.id}-tag-${index}`} className="bg-[#D97150] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                 <span className="text-[#D97150] hover:underline font-medium mt-4 inline-block text-sm">
                   View Details &rarr;
                 </span>
              </div>
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}