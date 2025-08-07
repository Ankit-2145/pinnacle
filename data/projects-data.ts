interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Research Goal",
    description:
      "A full-featured Learning Management System (LMS) built with Next.js and Razorpay integration, enabling instructors to create courses, manage content, track learner progress, and issue certificates. Includes secure authentication, real-time payments, and a clean, responsive UI.",
    image: "/research-goal.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "NextAuth",
      "Razorpay",
      "Zustand",
      "Postgresql",
    ],
    category: "Education",
    client: "Research Goal",
    liveUrl: "https://www.researchgoal.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title:
      "2025 International Conference on Applied Artificial Intelligence and Innovation (AAII)",
    description:
      "Official website for the 2025 International Conference on Applied Artificial Intelligence and Innovation, built for Shoolini University. Features include paper submissions, speaker listings, event schedule, and registration — all wrapped in a responsive, professional design.",
    image: "/aaiic.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Conference",
    client: "Shoolini University",
    liveUrl: "https://aaiic.in",
  },
  {
    id: 3,
    title:
      "2024 International Conference on Applied Artificial Intelligence (2AI)",
    description:
      "Official website for the 2024 International Conference on Applied AI, designed to streamline submissions, highlight speakers, and simplify event registration — all within a clean, mobile-friendly experience tailored for a global academic audience.",
    image: "/aai.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Conference",
    client: "Shoolini University",
    liveUrl: "https://applied-ai-conference.org",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title:
      "Datanode - Ultimate Study Resource for Computer Application Students",
    description:
      "A responsive educational platform built to simplify learning. Born from real academic challenges, it delivers curated study materials, updated syllabi, and a lot more. Originally an open-source project, now being developed under Pinnacle.",
    image: "/datanode.png",
    technologies: ["Next.js", "React", "TypeScript", "nextra"],
    category: "Education",
    client: "Open Source Project",
    liveUrl: "https://www.datanode.in",
    githubUrl: "https://github.com",
  },
];
