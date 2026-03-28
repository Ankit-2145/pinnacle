import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const COMPANY_INFO = {
  name: "Pinnacle",
  address: "Solan, Himachal Pradesh, India - 173212",
  email: "info.sspinnacle@gmail.com",
  phone: "+91 7277 55555 0",
  copyright: "Pinnacle Smart Solutions",
};

export const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "CMS Development", href: "/services/cms-development" },
      {
        name: "Custom Web Applications",
        href: "/services/web-app-development",
      },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      {
        name: "SEO & Digital Marketing",
        href: "/services/seo-and-performance-optimization",
      },
      {
        name: "Branding & Logo Design",
        href: "/services/branding-and-creative-direction",
      },
      {
        name: "Website Maintenance",
        href: "/services/website-maintenance-and-support",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/work" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/refund" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Instagram,
    href: "https://instagram.com/pinnacle",
    label: "Follow us on Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/pinnacle",
    label: "Follow us on Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/pinnacle",
    label: "Follow us on Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/pinnacle",
    label: "Connect with us on LinkedIn",
  },
];
