// --- Individual Content Block Types ---

export interface HeadingBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface YouTubeVideoBlock {
  type: 'youtube';
  videoId: string;
  title?: string;
  description?: string;
}

export interface CodeSnippetBlock {
  type: 'codeSnippet';
  language: string;
  code: string;
  title?: string;
  description?: string;
}

export interface IframeBlock {
  type: 'iframe';
  url: string;
  title?: string;
  description?: string;
  isBlueprint?: boolean;
}

export interface SpotifyTrackBlock {
    type: 'spotify';
    trackId: string;
    title?: string;
    description?: string;
}

export interface ImageInfo {
    url: string;
    alt?: string;
}

export interface ImageGalleryBlock {
    type: 'imageGallery';
    images: ImageInfo[];
    title?: string; // Optional title for the gallery section
    description?: string; // Optional description for the gallery section
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}
// --- Union Type for Content Blocks ---

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | YouTubeVideoBlock
  | CodeSnippetBlock
  | IframeBlock
  | SpotifyTrackBlock
  | ImageGalleryBlock
  | ImageBlock;
  
// --- Project Metadata Types ---

export interface ProjectInfoItem {
  label: string;
  value: string;
}

// --- Main Project Structure ---

export interface Project {
  id: string;
  title: string;
  description: string; // Main project description
  featuredImageUrl?: string; // Optional image URL for cards
  contentBlocks: ContentBlock[];
  tags?: string[];
  projectInfo?: ProjectInfoItem[];
  contributions?: string[];
}