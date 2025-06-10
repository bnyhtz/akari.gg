// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"; // Added useScroll, useMotionValueEvent
import { usePathname } from "next/navigation";
import { useState } from "react"; // Added useState

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  // Use Framer Motion hook to track scroll progress
  const { scrollY } = useScroll();

  // Update scrolled state based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10); // Set true if scrolled more than 10px
  });


  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }, // Added About link
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${ // Added transition
        scrolled
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-lg' // Styles when scrolled
          : 'bg-transparent border-b border-transparent' // Styles when at top
      } p-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
          Akari Le
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`relative text-gray-300 hover:text-white transition-colors ${
                  pathname === item.path ? "text-white font-semibold" : ""
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-purple-400"
                    layoutId="underline"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}