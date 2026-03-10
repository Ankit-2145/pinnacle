export interface Service {
  id: number;
  title: string;
  description: string;
  offerings: string[];
  color: string;
  lightColor: string;
  textColor: string;
}

export const servicesData = [
  {
    title: "Website Development",
    description:
      "Pixel-perfect websites tailored to your brand. We build responsive, high-performance websites that blend creativity with functionality. Every site is designed to deliver results, whether it's about conversions, engagement, or information delivery.",
    offerings: [
      "Static websites",
      "Full-stack websites",
      "Business/corporate websites",
      "Landing pages",
      "Portfolio websites",
      "CMS-based websites (WordPress, Sanity, etc.)",
      "JAMstack websites",
      "Headless website architecture",
    ],
    color: "bg-violet-600",
    lightColor: "bg-violet-100",
    textColor: "text-violet-600",
  },
  {
    title: "Web App Development",
    description:
      "Scalable, secure, and smart web apps for modern businesses. From MVPs to complex dashboards, we create web apps that are fast, user-friendly, and built for growth.",
    offerings: [
      "Custom web portals",
      "SaaS platforms",
      "Admin dashboards",
      "CRM and ERP systems",
      "Booking systems",
      "Analytics dashboards",
      "Progressive Web Apps (PWAs)",
      "Real-time apps",
    ],
    color: "bg-sky-600",
    lightColor: "bg-sky-100",
    textColor: "text-sky-600",
  },
  {
    title: "Mobile App Development",
    description:
      "Your business in every pocket. We develop mobile apps that run smoothly across devices, helping you engage users on-the-go with intuitive UI and robust performance.",
    offerings: [
      "Cross-platform apps",
      "Native iOS and Android apps",
      "MVP development for startups",
      "App UI/UX design",
      "App store deployment",
      "API integration and backend support",
      "Push notification systems",
      "App performance optimization",
    ],
    color: "bg-emerald-600",
    lightColor: "bg-emerald-100",
    textColor: "text-emerald-600",
  },
  {
    title: "UI/UX Design",
    description:
      "User experiences that feel as good as they look. Our design team focuses on creating interfaces that users love to engage with—balancing aesthetics, clarity, and usability.",
    offerings: [
      "Website UI/UX design",
      "App UI/UX design",
      "Wireframing & prototyping (Figma, Adobe XD)",
      "User journey mapping",
      "Design systems & style guides",
      "Accessibility (WCAG) design integration",
      "Interactive mockups and flows",
    ],
    color: "bg-pink-600",
    lightColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "E-commerce Development",
    description:
      "Build, sell, and scale—without the hassle. We create conversion-focused online stores that look great, load fast, and sell better.",
    offerings: [
      "Shopify stores",
      "WooCommerce development",
      "Headless E-commerce",
      "Custom product configurators",
      "Payment gateway integrations",
      "Multi-vendor marketplace platforms",
      "Inventory and order management systems",
    ],
    color: "bg-amber-600",
    lightColor: "bg-amber-100",
    textColor: "text-amber-600",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "We keep your site running, so you can keep growing. Our team ensures your digital presence stays secure, updated, and optimized — even post-launch.",
    offerings: [
      "Regular updates & patches",
      "Bug fixing & troubleshooting",
      "Security audits & fixes",
      "Uptime monitoring",
      "Content updates",
      "Hosting & domain management support",
      "Backup & recovery solutions",
      "Performance monitoring",
    ],
    color: "bg-cyan-600",
    lightColor: "bg-cyan-100",
    textColor: "text-cyan-600",
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Be found faster, load even faster. We optimize your site to rank higher on search engines and deliver a smoother experience to users.",
    offerings: [
      "Technical SEO audit",
      "On-page SEO optimization",
      "Core Web Vitals improvement",
      "Site speed optimization",
      "Mobile-first performance enhancements",
      "Structured data (schema) implementation",
      "SEO copywriting & content structuring",
      "Keyword research & strategy",
    ],
    color: "bg-orange-600",
    lightColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tech built around your business needs. When off-the-shelf isn't enough, we deliver purpose-built software tailored to your workflow and goals.",
    offerings: [
      "Internal workflow automation tools",
      "Inventory and logistics systems",
      "Custom reporting dashboards",
      "Role-based access control systems",
      "Client management tools",
      "API integrations",
      "Backend logic automation",
    ],
    color: "bg-blue-600",
    lightColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    title: "CMS Development",
    description:
      "Manage your content, your way. We build flexible content systems that let you update, scale, and organize your site without developer help.",
    offerings: [
      "WordPress development",
      "Sanity.io, Strapi, and other headless CMS solutions",
      "Content modeling & dynamic page setup",
      "Custom CMS admin interfaces",
      "Content migration and restructuring",
      "Multilingual content support",
      "CMS training & documentation",
    ],
    color: "bg-teal-600",
    lightColor: "bg-teal-100",
    textColor: "text-teal-600",
  },
  {
    title: "Branding & Creative Direction",
    description:
      "Make a first impression that lasts. Your brand's visual identity tells your story. We help you craft one that's memorable, consistent, and professional.",
    offerings: [
      "Logo design",
      "Brand identity kits",
      "Brand guidelines documentation",
      "Visual storytelling for web",
      "Presentation and pitch deck design",
      "Digital & print collateral",
      "Rebranding strategy and redesign",
    ],
    color: "bg-purple-600",
    lightColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
];

{
  /* E-COMMERCE DEVELOPMENT */
}
{
  /* <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1  w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-amber-600 dark:bg-amber-400 p-2 w-fit rounded-xl text-white">
          <ShoppingCart className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-amber-600 dark:text-amber-400 mt-4">
          E-commerce Development
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Selling online shouldn&apos;t feel like rocket science. We build
          e-commerce stores that are fast, fuss-free, and actually make you
          money — not migraines.
        </p>
      </div> */
}

{
  /* CUSTOM SOFTWARE SOLUTIONS */
}
{
  /* <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-blue-600 dark:bg-blue-400 p-2 w-fit rounded-xl text-white">
          <Code className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-4">
          Custom Software Solutions
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Can&apos;t find a tool that does exactly what you need? We&apos;ll
          just build it — custom software that actually fits your business
          instead of forcing you to work around it.
        </p>
      </div> */
}

{
  /* CMS DEVELOPMENT */
}
{
  /* <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-md col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-teal-600 dark:bg-teal-400 p-2 w-fit rounded-xl text-white">
          <FileText className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-teal-600 dark:text-teal-400 mt-4">
          CMS Development
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Still bugging your developer to change a headline? Stop. We build CMS
          setups that put you in control — update, scale, and manage content
          without the tech headaches.
        </p>
      </div> */
}
