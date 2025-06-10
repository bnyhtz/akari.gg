// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function ContactPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonHoverTap = {
    hover: { scale: 1.05, backgroundColor: "#D97150" /* purple-700 */ },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen" // Center content
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#ff996c] font-heading" // Added font-heading
      >
        Hit Me Up!
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-gray-400 text-center mb-12 max-w-2xl">
        I&apos;m always open to talk about new opportunities, collaborations or just to chat. Feel free to reach out!
      </motion.p>

      <motion.div variants={itemVariants} className="flex justify-center">
        <motion.a
          href="mailto:contact@akari.gg"
          className="flex items-center gap-2 bg-[#FF996C] text-white font-bold py-3 px-8 rounded-full transition duration-300 hover:bg-[#D97150] focus:outline-none focus:ring-2 focus:ring-[#D97150]/50"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHoverTap}
          style={{ textDecoration: "none" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="2" y="2" width="36" height="36" rx="10" fill="#fff" fillOpacity="0.18"/>
            <path d="M10 15L20 24L30 15" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="8" y="12" width="24" height="16" rx="5" stroke="#fff" strokeWidth="2.8"/>
          </svg>
          Send me an Email
        </motion.a>
      </motion.div>
<motion.div variants={itemVariants}>
  <hr className="my-10 border-t border-gray-700 w-full max-w-xl mx-auto" />
  <div className="flex flex-col items-center gap-4">
    <span className="text-gray-400 text-lg text-center">You can also contact me via</span>
    <div className="flex flex-row gap-6 justify-center">
      <a href="https://www.linkedin.com/in/bnyhtz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-9 h-9 text-gray-400 hover:text-purple-400 transition-colors" />
      </a>
    </div>
  </div>
</motion.div>
    </motion.div>
  );
}