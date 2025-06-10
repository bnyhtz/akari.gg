// src/app/projects/[projectId]/page.tsx
"use client";

import { projects } from '@/data/projects';
// Import the main Project type and the ContentBlock union type
import { ContentBlock } from '@/types/project';
import YouTubeEmbed from '@/components/projects/YouTubeEmbed';
import CodeSnippetDisplay from '@/components/projects/CodeSnippetDisplay';
import IframeEmbed from '@/components/projects/IframeEmbed';
import SpotifyEmbed from '@/components/projects/SpotifyEmbed';
import ImageGallery from '@/components/projects/ImageGallery'; // Import ImageGallery component
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Info, ListChecks } from 'lucide-react'; // Icons for the info sections


// Next.js app directory expects params and optionally searchParams
type ProjectDetailPageProps = {
  params: { projectId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Optional: Animation variants for the detail page
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Helper function to render a single content block
const renderContentBlock = (block: ContentBlock, projectId: string, index: number) => {
  switch (block.type) {
    case 'heading': { // Use block scope for clarity
      // Explicitly render heading tags based on level
      const commonClasses = "font-semibold mb-4 text-gray-200 border-b border-gray-700 pb-2";
      switch (block.level) {
        case 1: // Use h2 styling for level 1 within content blocks
          return <h2 key={`${projectId}-block-${index}`} className={`text-3xl md:text-4xl ${commonClasses}`}>{block.text}</h2>;
        case 2:
          return <h2 key={`${projectId}-block-${index}`} className={`text-3xl md:text-4xl ${commonClasses}`}>{block.text}</h2>;
        case 3:
          return <h3 key={`${projectId}-block-${index}`} className={`text-2xl md:text-3xl ${commonClasses}`}>{block.text}</h3>;
        case 4:
          return <h4 key={`${projectId}-block-${index}`} className={`text-xl md:text-2xl ${commonClasses}`}>{block.text}</h4>;
        case 5:
          return <h5 key={`${projectId}-block-${index}`} className={`text-lg md:text-xl ${commonClasses}`}>{block.text}</h5>;
        case 6:
          return <h6 key={`${projectId}-block-${index}`} className={`text-base md:text-lg ${commonClasses}`}>{block.text}</h6>;
        default: // Fallback for invalid levels
          return <p key={`${projectId}-block-${index}`} className={`font-semibold ${commonClasses}`}>{block.text}</p>;
      }
    }
    case 'paragraph':
      // Use whitespace-pre-wrap to preserve line breaks
      return <p key={`${projectId}-block-${index}`} className="text-gray-300 mb-4 whitespace-pre-wrap">{block.text}</p>;

    case 'youtube':
      return (
        <div key={`${projectId}-block-${index}`} className="mb-8">
          {block.title && <h4 className="text-xl font-semibold mb-2 text-gray-200">{block.title}</h4>}
          {block.description && <p className="text-sm text-gray-400 mb-3">{block.description}</p>}
          {/* Pass the whole block object to the component - Corrected prop name */}
          <YouTubeEmbed block={block} />
        </div>
      );

    case 'codeSnippet':
      return (
        <div key={`${projectId}-block-${index}`} className="mb-6">
          {block.title && <h4 className="text-lg font-semibold mb-1 text-gray-300">{block.title} ({block.language})</h4>}
          {block.description && <p className="text-sm text-gray-400 mb-2">{block.description}</p>}
          {/* Pass the whole block object to the component - Corrected prop name */}
          <CodeSnippetDisplay block={block} />
        </div>
      );

    case 'iframe':
      return (
        <div key={`${projectId}-block-${index}`} className="mb-6">
          {block.title && <h4 className="text-lg font-semibold mb-1 text-gray-300">{block.title}</h4>}
          {block.description && <p className="text-sm text-gray-400 mb-2">{block.description}</p>}
          {/* Pass the whole block object to the component - Corrected prop name */}
          <IframeEmbed block={block} />
        </div>
      );

    case 'spotify': // Add case for Spotify blocks
      return (
        <div key={`${projectId}-block-${index}`} className="mb-6">
          {block.title && <h4 className="text-lg font-semibold mb-1 text-gray-300">{block.title}</h4>}
          {block.description && <p className="text-sm text-gray-400 mb-2">{block.description}</p>}
          {/* Pass the whole block object to the component */}
          <SpotifyEmbed block={block} />
        </div>
      );

    case 'imageGallery': // Add case for Image Gallery blocks
      return (
        <div key={`${projectId}-block-${index}`} className="mb-8">
          {/* Title/Description are handled within ImageGallery component if needed */}
          <ImageGallery block={block} />
        </div>
      );

    default:
      // Handle unknown block types gracefully
      if (typeof block === 'object' && block && 'type' in block) {
        console.warn("Unknown content block type:", (block as { type: string }).type);
      } else {
        console.warn("Unknown content block type:", block);
      }
      return null;
  }
};


const ProjectDetailPage = ({ params }: ProjectDetailPageProps) => {
  const { projectId } = params;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      className="container mx-auto max-w-4xl px-4 py-12 md:py-16"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Back link */}
      <Link href="/projects" className="text-purple-400 hover:underline mb-6 inline-block">
        &larr; Back to Projects
      </Link>

      {/* Project Title (Main H1) */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-purple-300">{project.title}</h1>

      {/* Re-added Main Project Description */}
      <p className="text-lg text-gray-300 mb-8 whitespace-pre-wrap">{project.description}</p>

      {/* Optional Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={`${project.id}-tag-${index}`} className="bg-purple-600/50 text-purple-200 text-xs font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* --- Styled Info Sections (Keep these separate for now) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> {/* Increased bottom margin */}
        {/* Project Info Section */}
        {project.projectInfo && project.projectInfo.length > 0 && (
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
              <Info size={20} className="text-blue-400" /> Project Info
            </h2>
            <dl className="space-y-2">
              {project.projectInfo.map((info, index) => (
                <div key={`${project.id}-info-${index}`} className="flex justify-between text-sm">
                  <dt className="font-medium text-gray-400">{info.label}:</dt>
                  <dd className="text-gray-200 text-right">{info.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
        {/* Contributions Section */}
        {project.contributions && project.contributions.length > 0 && (
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100 flex items-center gap-2">
              <ListChecks size={20} className="text-green-400" /> My Contributions
            </h2>
            <ul className="space-y-2 text-gray-300 text-sm list-none">
              {project.contributions.map((contribution, index) => (
                <li key={`${project.id}-contrib-${index}`} className="flex items-start gap-2">
                   <span className="text-green-400 mt-1">&#10003;</span> {/* Checkmark */}
                   <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* --- End Styled Info Sections --- */}

      
            {/* --- Render Content Blocks --- */}
            <div className="space-y-10"> {/* Increased spacing between blocks */}
              {project.contentBlocks.map((block, index) =>
                renderContentBlock(block, project.id, index)
              )}
            </div> {/* Added missing closing div */}
      {/* --- End Content Blocks --- */}

    </motion.div>
  );
};

export default ProjectDetailPage;