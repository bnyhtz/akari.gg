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
    year: '2025 - Present',
    title: 'Gameplay Developer & Audio Engineer (Intern) — Birungi Studio',
    description: 'Working on an Mobile Infinite Runner game with the main goal being Social Impact.',
  },
  {
    year: '2021 - Present',
    title: 'Software Developer (Student) — Mediacollege Amsterdam',
    description: 'Started MBO-4 Course in Software Development, specializing in Game Development.',
  },
  {
    year: '2024',
    title: 'Gameplay Developer (Intern) — XR-Lab',
    description: 'Developed VR/XR experiences and explored immersive technologies.',
  },
  {
    year: '2018 - 2021',
    title: 'Financial Administrative Assistant (Student) — Rijn IJssel',
    description: 'Finished MBO-3 Course in Financial Administrative Assistant, gaining skills in financial management and administration.',
  }

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
Hi, I'm Akari (they/she)! I'm a 23-year-old Game Developer and Music Artist based in The Netherlands.

From a young age I loved playing games, with my first ever console being a Nintendo SNES. I’d always play Super Mario World, Yoshi’s Island or the Donkey Kong Country games. I got introduced into the world of Minecraft at the age of 7 and I loved everything about it. Throughout the years I always thought how cool it would be to be able to create my own Minecraft plugins and mods, and being able to create my own games.

I started off in the develop-world with working in Scratch to create simple games (here’s one of them) and editing .yml/.json files to edit Minecraft plugins in Notepad++ before I started at Mediacollege. Once I got onto the course, I started working with HTML/CSS, Python and Javascript in VSC and then in the Unity Engine with C# and Unreal Engine with C++ and Blueprints. That was when I fell even more in love with the idea of developing my own games.

Currently, I'm developing an Mobile Infinite Runner game with Birungi Studio, but am also looking for a new internship to start with in September 2025.

If you’re interested in more about me, or to work together with me, feel free to contact me!
`;