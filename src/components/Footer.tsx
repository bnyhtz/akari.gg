import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Music } from 'lucide-react'; // Import icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = "https://linkedin.com/in/bnyhtz";
  const githubUrl = "https://github.com/bnyhtz";
  const musicUrl = "https://link.akari.gg/music";

  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 mt-auto py-8 px-4"> {/* mt-auto pushes footer down */}
      {/* Updated flex direction and alignment */}
      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Copyright */}
        <div className="text-sm text-gray-400 mb-4"> {/* Removed sm:mb-0 */}
          &copy; {currentYear} bnyhtz, all rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
          </Link>
          <Link href={musicUrl} target="_blank" rel="noopener noreferrer" aria-label="Music Profile">
            <Music className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
          </Link>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors" />
          </Link>
          {/* Add other links here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;