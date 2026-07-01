export type Track = {
  slug: string;
  name: string;
  colorVar: string;      // css var name for the track color
  tw: string;            // tailwind text color class
  bg: string;            // tailwind bg color class
  tagline: string;
  summary: string;
  activities: string[];
  status: "live" | "roadmap";
};

export const TAGLINE = "Future-ready skills for the next generation.";

export const NAV = [
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "For Partners", to: "/partners" },
  { label: "For Sponsors", to: "/sponsors" },
  { label: "Creative Circle", to: "/creative-circle" },
  { label: "Stories", to: "/stories" },
];

export const TRACKS: Track[] = [
  {
    slug: "storyready",
    name: "StoryReady",
    colorVar: "--story",
    tw: "text-story",
    bg: "bg-story",
    tagline: "Storytelling, media & communication.",
    summary:
      "StoryReady teaches youth and emerging creatives how to tell real stories with video, photography, interviewing, writing, editing, and ethical community storytelling.",
    activities: [
      "Youth storytelling workshops",
      "Interviewing & asking better questions",
      "Phone video, photography & audio basics",
      "Editing, captions & social storytelling",
      "Community story projects",
      "Final story showcases",
    ],
    status: "live",
  },
  {
    slug: "techready",
    name: "TechReady",
    colorVar: "--tech",
    tw: "text-tech",
    bg: "bg-tech",
    tagline: "AI, digital tools & automation.",
    summary:
      "TechReady builds practical, responsible technology skills youth can use in school, work, and their own projects — from AI literacy to no-code building.",
    activities: [
      "AI literacy & responsible use",
      "No-code tools & automation",
      "Digital productivity",
      "Website building basics",
      "Digital safety & ethics",
    ],
    status: "roadmap",
  },
  {
    slug: "workready",
    name: "WorkReady",
    colorVar: "--work",
    tw: "text-work",
    bg: "bg-work",
    tagline: "Career, entrepreneurship & employment.",
    summary:
      "WorkReady helps youth prepare for work, business, and freelancing with the practical skills that open doors to real opportunity.",
    activities: [
      "Resume & portfolio building",
      "Interview skills",
      "Workplace communication",
      "Entrepreneurship & freelancing basics",
      "Financial literacy basics",
    ],
    status: "roadmap",
  },
  {
    slug: "leadready",
    name: "LeadReady",
    colorVar: "--lead",
    tw: "text-lead",
    bg: "bg-lead",
    tagline: "Confidence, voice & leadership.",
    summary:
      "LeadReady helps youth find their voice, build confidence, and lead with purpose through communication, teamwork, and community contribution.",
    activities: [
      "Public speaking & presentation",
      "Confidence & communication",
      "Team leadership & peer mentorship",
      "Community problem-solving",
      "Values & purpose workshops",
    ],
    status: "roadmap",
  },
  {
    slug: "createready",
    name: "CreateReady",
    colorVar: "--create",
    tw: "text-create",
    bg: "bg-create",
    tagline: "Design, video & creative production.",
    summary:
      "CreateReady helps youth turn creativity into real skills, projects, and pathways — across design, video production, and creative entrepreneurship.",
    activities: [
      "Design workshops",
      "Video production & editing",
      "Photography",
      "Branding basics",
      "Creative portfolio building",
    ],
    status: "roadmap",
  },
];

export const SPONSOR_TIERS = [
  {
    name: "Community Supporter",
    amount: "$1,500",
    perks: "Funds materials, snacks, and transit for one cohort; logo on the recap; social thank-you.",
  },
  {
    name: "Cohort Sponsor",
    amount: "$7,500",
    perks: "Funds one full StoryReady cohort; “presented by” recognition; impact recap video + report; social features.",
    featured: true,
  },
  {
    name: "Program Partner",
    amount: "$20,000",
    perks: "Funds three cohorts a year; quarterly impact reporting; co-branded showcase; deeper storytelling package.",
  },
  {
    name: "Founding Partner",
    amount: "$50,000",
    perks: "Multi-track, year-long support; advisory seat; full documentation; flagship recognition across the program.",
  },
];

export const CONTACT_EMAIL = "hello@youthequipped.ca";
