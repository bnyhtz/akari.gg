"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react"; // Added useRef
import { projects } from "@/data/projects"; // Import actual project data


export default function Home() {
  // Refs for scroll-triggered background animations
  const currentWorkRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for "Currently Working On" section


  // Scroll tracking for "Featured Projects" section


  // Transform scroll progress to background opacity (No longer used for background, but keep if needed elsewhere)
  // const currentWorkBgOpacity = useTransform(currentWorkScroll, [0, 1], [0, 1]);
  // const featuredBgOpacity = useTransform(featuredScroll, [0, 1], [0, 1]);


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

  // --- Featured Projects Logic ---
  // Define which project IDs to feature
  const featuredProjectIds = ['starborn', 'operatie-infiltratie', 'bon-appmobile']; // Example IDs, adjust as needed

  // Filter the main projects array
  const featuredProjectsData = projects.filter(project =>
    featuredProjectIds.includes(project.id)
  );

  // Simple function to truncate description for the card
  const truncateDescription = (text: string | undefined, maxLength: number = 100) => {
    if (!text) return ''; // Handle cases where description might be missing
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  // --- End Featured Projects Logic ---


  return (
    <div className="font-sans overflow-hidden">

      {/* Hero Section - Updated Layout */}
      <motion.section
        className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16 md:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Flex container for text and image */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Image Content (Moved First) */}
            <motion.div variants={itemVariants} className="flex-shrink-0 order-first"> {/* Ensure image comes first */}
                <Image
                    src="/images/bnyHead.png" // Path from public directory
                    alt="Profile Picture"
                    width={280} // Keep width/height for non-fill images
                    height={280}
                    style={{ objectFit: 'cover' }} // Use inline style
                    priority
                />
            </motion.div>

            {/* Text Content (Moved Second) */}
            <motion.div variants={itemVariants} className="text-center md:text-left flex-1 order-last md:order-none"> {/* Adjusted alignment and order */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4 font-heading">
                  Hi there, I&apos;m Akari!
                </motion.h1>
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-8">
                   Gamifying Social Impact, one step at a time. 
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Link href="/projects" passHref legacyBehavior>
                    <motion.a
              className="inline-block bg-[#FF996C] hover:bg-[#D97150] text-white font-bold py-3 px-8 rounded-full transition duration-300 mt-4"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverTap}
                    >
                      Check out my work
                    </motion.a>
                  </Link>
                </motion.div>
            </motion.div>
        </div> {/* Close the flex container */}
      </motion.section>

      {/* Currently Working On Section */}
      <section ref={currentWorkRef} className="py-16 md:py-24 container mx-auto px-4 relative mb-16 md:mb-24"> {/* Added mb */}
        {/* Background Div - Solid Color Card Style */}
        <div
           className="absolute inset-0 bg-gray-800 rounded-xl -z-10" // Solid background, removed animation/gradient
        />
        {/* Removed motion from background div, keep on content container */}
        <motion.div // Content container with variants
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           variants={containerVariants}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-8 font-heading text-[#ff996c]">
            What I&apos;m Currently Working On
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-gray-300 text-center font-bold">
            IBeeXploring
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg text-center mb-3">
            a Birungi Studio project
          </motion.p>
          <motion.div variants={itemVariants} className="bg-transparent p-6 rounded-lg max-w-3xl mx-auto relative">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/ibx.png"
                alt="Infinite Runner Project Preview"
                width={420}
                height={270}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
            <p className="text-gray-300 text-lg text-center mb-6">
              I&apos;m currently focused on an <a href="https://IBeeXploring.com" className="text-[#D97150] hover:underline"><b>Infinite Runner</b></a> game with <a href="https://birungi.studio" className="text-[#D97150] hover:underline"><b>Birungi Studio</b></a> to create <b>Social Impact</b>. I&apos;m using <b>C#</b> and the <b>Unity</b> Game Engine for this project.
            </p>

          <motion.div variants={itemVariants} className="text-center mt-8">
             <Link href="https://IBeeXploring.com" passHref legacyBehavior>
              <motion.a
                className="inline-block bg-[#FF996C] hover:bg-[#D97150] text-white font-bold py-3 px-8 rounded-full transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </Link>
          </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section - Updated */}
      <section ref={featuredRef} className="py-16 md:py-24 container mx-auto px-4 relative">
         {/* Background Div - Solid Color Card Style */}
         <div
           className="absolute inset-0 bg-gray-800 rounded-xl -z-10" // Solid background
         />
        <motion.div // Content container with variants
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative" // Ensure content is above background
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-[#ff996c]">
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" // Adjust grid columns if needed
            variants={containerVariants}
          >
            {/* Map over filtered actual project data */}
            {featuredProjectsData.map((project) => (
              // Wrap the entire card div in the Link component
              <Link key={project.id} href={`/projects/${project.id}`} passHref legacyBehavior>
                <motion.a // Use motion.a for the link anchor
                  className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/60 flex flex-col transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 cursor-pointer" // Added cursor-pointer
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {/* Display Featured Image */}
                  <div className="relative w-full h-52 overflow-hidden"> {/* Container for image */}
                    {project.featuredImageUrl ? (
                      <Image
                        src={project.featuredImageUrl}
                        alt={`${project.title} featured image`}
                        fill={true} // Use fill prop
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Example sizes, adjust as needed
                        style={{ objectFit: 'cover' }} // Use inline style
                        className="transition-transform duration-300 group-hover:scale-105" // Apply group-hover on parent link <a> tag
                      />
                    ) : (
                      // Fallback placeholder if no image URL
                      <div className="w-full h-full bg-gradient-to-br from-purple-800 to-indigo-800 flex items-center justify-center">
                         <span className="text-purple-300 text-sm">(No Image)</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 font-heading">{project.title}</h3>
                      {/* Use actual description, truncated */}
                      <p className="text-gray-300 mb-4 text-sm">
                          {truncateDescription(project.description)}
                      </p>
                    </div>
                    {/* Removed the separate "Learn More" link */}
                    <span className="text-purple-400 font-medium mt-2 self-start text-sm opacity-70">
                      View Project &rarr; {/* Changed text slightly */}
                    </span>
                  </div>
                </motion.a>
              </Link>
            ))}
          </motion.div>
          {/* Apply itemVariants to the button container */}
          <motion.div variants={itemVariants} className="text-center">
             <Link href="/projects" passHref legacyBehavior>
              <motion.a
                className="inline-block bg-[#FF996C] hover:bg-[#D97150] text-white font-bold py-3 px-8 rounded-full transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
