// src/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";

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
    hover: { scale: 1.05, backgroundColor: "#7c3aed" /* purple-700 */ },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 flex flex-col items-center" // Center content
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-400 font-heading" // Added font-heading
      >
        Get In Touch
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-gray-400 text-center mb-12 max-w-2xl">
        Have a question, a project idea, or just want to say hello? Feel free to reach out!
      </motion.p>

      <motion.form
        variants={containerVariants} // Stagger form elements
        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
            placeholder="john.doe@example.com"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
            placeholder="Your message here..."
          ></textarea>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            type="submit"
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            whileHover="hover"
            whileTap="tap"
            variants={buttonHoverTap}
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}