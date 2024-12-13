import bugbook from "@/public/projects/bugbook.webp";
import propertypulse from "@/public/projects/property-pulse.webp";
import wildoasis from "@/public/projects/wild-oasis.webp";
import flowscrape from "@/public/projects/flowscrape.webp";
import { StaticImageData } from "next/image";

export type Tool = {
  path: string;
  name: string;
  href: string;
};

export const primaryTools: Tool[] = [
  {
    path: "nextjs",
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    path: "react",
    name: "React",
    href: "https://react.dev/",
  },
  {
    path: "tailwindcss",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    path: "shadcnui",
    name: "shadcn/ui",
    href: "https://ui.shadcn.com/",
  },
  {
    path: "prisma",
    name: "Prisma ORM",
    href: "https://www.prisma.io/",
  },
  {
    path: "postgresql",
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    path: "zod",
    name: "Zod",
    href: "https://zod.dev/",
  },
  {
    path: "react-query",
    name: "React Query",
    href: "https://tanstack.com/query/",
  },
  {
    path: "zustand",
    name: "Zustand",
    href: "https://docs.pmnd.rs/zustand/",
  },
  {
    path: "jotai",
    name: "Jotai",
    href: "https://jotai.org/",
  },
  {
    path: "motion",
    name: "Framer Motion",
    href: "https://motion.dev/",
  },
  {
    path: "claude",
    name: "Claude",
    href: "https://www.claude.ai/",
  },
  {
    path: "typescript",
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    path: "vercel",
    name: "Vercel",
    href: "https://vercel.com/",
  },
];

export type Project = {
  name: string;
  course: string;
  courseHref: string;
  src: StaticImageData;
  sourceHref: string;
  demoHref: string;
  tags: string[];
};

export const primaryProjects: Project[] = [
  {
    name: "FlowScrape",
    course: "Kliton Bare",
    courseHref: "https://www.youtube.com/watch?v=RkwbGuL-dzo",
    src: flowscrape,
    sourceHref: "https://github.com/kellan-dev/flowscrape",
    demoHref: "https://flowscrape-lime.vercel.app/",
    tags: [
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "Prisma",
      "Zod",
      "React Query",
      "Clerk",
      "React Flow",
      "Stripe",
      "Recharts",
      "Puppeteer",
      "OpenAI",
      "Dark Mode",
    ],
  },
  {
    name: "Bugbook",
    course: "Coding In Flow",
    courseHref: "https://www.youtube.com/watch?v=TyV12oBDsYI",
    src: bugbook,
    sourceHref: "https://github.com/kellan-dev/bugbook",
    demoHref: "https://bugbook-virid.vercel.app/",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "Prisma",
      "Zod",
      "React Query",
      "Uploadthing",
      "Lucia Auth",
      "Dark Mode",
      "Responsive",
    ],
  },
  {
    name: "PropertyPulse",
    course: "NextJS From Scratch",
    courseHref: "https://www.traversymedia.com/nextjs-from-scratch",
    src: propertypulse,
    sourceHref: "https://github.com/kellan-dev/property-pulse",
    demoHref: "https://property-pulse-brown-nine.vercel.app/",
    tags: [
      "JavaScript",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "AuthJS",
      "Responsive",
    ],
  },
  {
    name: "Wild Oasis",
    course: "Ultimate React",
    courseHref: "https://www.udemy.com/course/the-ultimate-react-course/",
    src: wildoasis,
    sourceHref: "https://github.com/kellan-dev/wild-oasis-internal",
    demoHref: "https://wild-oasis-internal.vercel.app/",
    tags: [
      "JavaScript",
      "React",
      "React Router",
      "Styled Components",
      "Supabase",
      "React Query",
      "Recharts",
    ],
  },
];
