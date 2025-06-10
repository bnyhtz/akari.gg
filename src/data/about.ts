export interface TimelineEvent {
  year: string; // Or a date range like "2020-2022"
  title: string;
  description: string;
}

export interface LanguageInfo {
  name: string; // English name
  nativeName?: string; // Optional name in the language itself
  proficiency: 'Native' | 'Fluent' | 'Conversational' | 'Basic'; // Example levels
}

export const timelineData: TimelineEvent[] = [
  {
    year: '2023 - Present',
    title: 'Current Role / Activity',
    description: 'Description of what you are currently doing (e.g., job, studies).',
  },
  {
    year: '2021-2023',
    title: 'Previous Role / Education',
    description: 'Description of a previous significant role or educational period.',
  },
  {
    year: '2020',
    title: 'Key Project or Milestone',
    description: 'Description of an important project, achievement, or learning experience.',
  },
  // Add more events here, oldest last or newest first depending on desired order
];

// Updated language data
export const languageData: LanguageInfo[] = [
  { name: 'Dutch', nativeName: 'Nederlands', proficiency: 'Native' },
  { name: 'Vietnamese', nativeName: 'Tiếng Việt', proficiency: 'Native' }, // Interpreted as Native
  { name: 'English', nativeName: 'English', proficiency: 'Fluent' }, // Added native name for consistency
  { name: 'German', nativeName: 'Deutsch', proficiency: 'Basic' }, // Interpreted as Basic
];

export const aboutIntro = `
Write a brief and engaging introduction about yourself here.
Highlight your passion, key skills, and what drives you.
Keep it concise and welcoming.
`;