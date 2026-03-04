interface Project {
  id: number;
  title: string;
  description: string;
  slug: string;
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
    slug: "research-goal",
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
      "PostgreSQL",
    ],
    category: "Education",
    client: "Research Goal",
    liveUrl: "https://www.researchgoal.com",
  },
  {
    id: 2,
    title:
      "2025 International Conference on Applied Artificial Intelligence and Innovation (AAII)",
    description:
      "Official website for the 2025 International Conference on Applied Artificial Intelligence and Innovation, built for Shoolini University. Features include paper submissions, speaker listings, event schedule, and registration — all wrapped in a responsive, professional design.",
    slug: "2025-international-conference-on-applied-artificial-intelligence-and-innovation",
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
    slug: "2024-international-conference-on-applied-artificial-intelligence",
    image: "/aai.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Conference",
    client: "Shoolini University",
    liveUrl: "https://applied-ai-conference.netlify.app/",
  },
  {
    id: 4,
    title:
      "Datanode - Ultimate Study Resource for Computer Application Students",
    description:
      "A responsive educational platform built to simplify learning. Born from real academic challenges, it delivers curated study materials, updated syllabi, and a lot more. Originally an open-source project, now being developed under Pinnacle.",
    slug: "datanode",
    image: "/datanode.png",
    technologies: ["Next.js", "React", "TypeScript", "nextra"],
    category: "Education",
    client: "Open Source Project",
    liveUrl: "https://data-node.vercel.app/",
  },
  {
    id: 5,
    title: "Headway Consultancy Services",
    description:
      "A streamlined responsive website for Headway Consultancy Services — providing visa consultancy and international diploma information, designed to guide students through academic paths with clarity, trust, and accessibility.",
    slug: "headway-consultancy-services",
    image: "/hcs.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Consultancy",
    client: "Headway Consultancy Services",
    liveUrl: "https://headwayconsultancyservices.com/",
  },
  {
    id: 6,
    title: "Govt. Sanskrit College, Solan, Himachal Pradesh",
    description:
      "A functional website for Govt. Sanskrit College, Solan, Himachal Pradesh — serving as a digital notice board while also providing essential institutional information through a clean, accessible, and responsive design.",
    slug: "govt-sanskrit-college-solan",
    image: "/gsc-solan.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Education",
    client: "Govt. Sankrit College, Solan",
    liveUrl: "https://www.gscsolan.in",
  },
  {
    id: 7,
    title:
      "PM SHRI Pt.Durga Dutt Govt. Model Sr. Sec. School Of Excellence, Narag, Himachal Pradesh",
    description:
      "A modern school website for PM SHRI Pt. Durga Dutt Govt. Model Sr. Sec. School of Excellence — designed to showcase academics, activities, and essential updates with a clean, responsive interface.",
    slug: "govt-school-narag",
    image: "/pmsnarag.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Education",
    client: "PMS",
    liveUrl: "https://www.pmsnarag.in",
  },
  {
    id: 8,
    title: "Govt. Sr. Sec. School, Naina Tikker, Himachal Pradesh",
    description:
      "A responsive website for Govt. Sen. Sec. School — built to highlight academics, activities, notices, and achievements while ensuring easy navigation and accessibility for students and parents.",
    slug: "govt-school-naina-tikker",
    image: "/gsss-n.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Vite", "Flowbite"],
    category: "Education",
    client: "GSSS",
    liveUrl: "https://www.gsssnainatikker.in",
  },
];
