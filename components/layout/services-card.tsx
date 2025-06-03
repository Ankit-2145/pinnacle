"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Smartphone,
  Globe,
  Palette,
  ArrowRight,
  LineChart,
  Cloud,
  Cpu,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

// Define types for our services and tools
interface Tool {
  name: string;
  color: string;
  textColor?: string;
  icon?: React.ReactNode;
}

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  tools: Tool[];
  icon: React.ReactNode;
  gradient: string;
  featured?: boolean;
  stats?: {
    projects: string;
    satisfaction: string;
  };
}

export const ServicesCard = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Define services with their tools and enhanced properties
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Cutting-edge web solutions that drive business growth and user engagement",
      features: [
        "Full-stack development",
        "E-commerce platforms",
        "CMS integration",
        "Progressive web apps",
      ],
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      featured: true,
      stats: { projects: "200+", satisfaction: "98%" },
      tools: [
        { name: "React", color: "bg-blue-500", textColor: "text-white" },
        { name: "Next.js", color: "bg-black", textColor: "text-white" },
        { name: "TypeScript", color: "bg-blue-600", textColor: "text-white" },
        { name: "Node.js", color: "bg-green-600", textColor: "text-white" },
        { name: "Shopify", color: "bg-green-500", textColor: "text-white" },
      ],
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile experiences that users love",
      features: [
        "iOS & Android apps",
        "Cross-platform solutions",
        "App store optimization",
        "Mobile UI/UX",
      ],
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      stats: { projects: "150+", satisfaction: "96%" },
      tools: [
        { name: "React Native", color: "bg-blue-500", textColor: "text-white" },
        { name: "Flutter", color: "bg-sky-500", textColor: "text-white" },
        { name: "Swift", color: "bg-orange-500", textColor: "text-white" },
        { name: "Kotlin", color: "bg-purple-500", textColor: "text-white" },
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that convert visitors into customers",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Usability testing",
      ],
      icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      featured: true,
      stats: { projects: "300+", satisfaction: "99%" },
      tools: [
        { name: "Figma", color: "bg-purple-600", textColor: "text-white" },
        { name: "Adobe XD", color: "bg-pink-600", textColor: "text-white" },
        { name: "Sketch", color: "bg-amber-500", textColor: "text-white" },
        { name: "Framer", color: "bg-indigo-500", textColor: "text-white" },
      ],
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Data-driven strategies that amplify your brand's digital presence",
      features: [
        "SEO optimization",
        "Content marketing",
        "Social media campaigns",
        "Analytics & reporting",
      ],
      icon: <LineChart className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-green-500 via-teal-500 to-blue-500",
      stats: { projects: "100+", satisfaction: "94%" },
      tools: [
        { name: "Google Ads", color: "bg-blue-400", textColor: "text-white" },
        { name: "Meta Ads", color: "bg-blue-600", textColor: "text-white" },
        { name: "SEMrush", color: "bg-emerald-500", textColor: "text-white" },
        { name: "HubSpot", color: "bg-orange-500", textColor: "text-white" },
      ],
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description:
        "Scalable, secure infrastructure for the modern digital landscape",
      features: [
        "Cloud migration",
        "DevOps",
        "Serverless architecture",
        "Continuous integration",
      ],
      icon: <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      stats: { projects: "80+", satisfaction: "97%" },
      tools: [
        { name: "AWS", color: "bg-orange-400", textColor: "text-white" },
        { name: "Azure", color: "bg-blue-500", textColor: "text-white" },
        { name: "GCP", color: "bg-red-500", textColor: "text-white" },
        { name: "Docker", color: "bg-sky-600", textColor: "text-white" },
      ],
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that automate processes and unlock insights",
      features: [
        "Data analysis",
        "Predictive modeling",
        "Natural language processing",
        "Computer vision",
      ],
      icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8" />,
      gradient: "from-violet-600 via-purple-600 to-blue-600",
      featured: true,
      stats: { projects: "50+", satisfaction: "100%" },
      tools: [
        { name: "TensorFlow", color: "bg-orange-500", textColor: "text-white" },
        { name: "PyTorch", color: "bg-red-500", textColor: "text-white" },
        { name: "OpenAI", color: "bg-green-600", textColor: "text-white" },
        {
          name: "Hugging Face",
          color: "bg-yellow-500",
          textColor: "text-black",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Consistent 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer min-h-[420px] flex flex-col"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
            />

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 dark:border-white/10" />

            {/* Floating particles effect */}
            {hoveredService === service.id && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col text-white">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl border border-white/30 group-hover:bg-white/30 transition-colors">
                    {service.icon}
                  </div>
                  {service.featured && (
                    <div className="flex items-center space-x-1 bg-yellow-400/20 backdrop-blur-sm px-2 py-1 rounded-full border border-yellow-400/30 animate-pulse">
                      <Sparkles className="h-3 w-3 text-yellow-300" />
                      <span className="text-xs font-medium text-yellow-100">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {service.stats && (
                  <div className="text-right">
                    <div className="text-sm font-bold">
                      {service.stats.projects}
                    </div>
                    <div className="text-xs opacity-80">Projects</div>
                  </div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight group-hover:text-yellow-100 transition-colors">
                {service.title}
              </h3>

              <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features with enhanced styling */}
              <ul className="text-sm space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <div className="bg-white/20 rounded-full p-1 mr-3 mt-0.5 group-hover/item:bg-white/30 transition-colors">
                      <Target className="h-2 w-2" />
                    </div>
                    <span className="text-white/90 group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tools with enhanced design */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`${tool.color} ${
                        tool.textColor || "text-white"
                      } text-xs px-3 py-1.5 rounded-full font-medium shadow-lg backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className="mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm font-semibold hover:text-yellow-300 transition-colors group/cta cursor-pointer">
                    <span>Explore Service</span>
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-all duration-300 group-hover/cta:translate-x-1 ${
                        hoveredService === service.id ? "translate-x-1" : ""
                      }`}
                    />
                  </div>

                  {service.stats && (
                    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                      <Zap className="h-3 w-3 text-yellow-300" />
                      <span className="text-xs font-medium">
                        {service.stats.satisfaction}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
