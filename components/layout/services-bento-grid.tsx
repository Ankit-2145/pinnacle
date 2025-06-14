"use client";

import React from "react";
import {
  Code,
  FileText,
  Globe,
  Palette,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { MarqueeVertical } from "./services-animations/services-marquee";
import { SEOCardSearch } from "./services-animations/services-seo-search";
import { Connect } from "./services-animations/services-ui-ux";

export const ServicesBentoGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full font-workSans">
      {/* WEBSITE & WEB APP DEVELOPMENT */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 lg:col-span-2 w-full flex lg:flex-row flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="max-w-xs">
          <div className="bg-violet-600 dark:bg-violet-400 p-2 w-fit rounded-xl text-white">
            <Globe className="h-4 w-4" />
          </div>
          <h2 className="text-lg font-medium text-violet-600 dark:text-violet-400 mt-4">
            Website & Web App Development
          </h2>
          <p
            className="
          text-sm text-muted-foreground max-w-sm mt-4"
          >
            Boring websites? Not here. We craft blazing-fast, scalable sites and
            web apps that don&apos;t just look good — they actually work, rank,
            and convert.
          </p>
        </div>
        <MarqueeVertical />
      </div>

      {/* SEO & PERFORMANCE OPTIMIZATION */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 lg:row-span-2 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-orange-600 dark:bg-orange-400 p-2 w-fit rounded-xl text-white">
          <Search className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-orange-600 dark:text-orange-400 mt-4">
          SEO & Performance Optimization
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4 mb-2">
          Because what&apos;s the point of a stunning site if no one finds it?
          We fix that — with SEO that ranks, speed that sticks, and strategy
          that actually works.
        </p>
        <SEOCardSearch />
      </div>

      {/* UI/UX DESIGN */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 lg:row-span-2 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-pink-600 dark:bg-pink-400 p-2 w-fit rounded-xl text-white">
          <Palette className="h-4 w-4" />
        </div>

        <h2 className="text-lg font-medium text-pink-600 dark:text-pink-400 mt-4">
          UI/UX Design
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Looks matter — but so does making sense. We design interfaces that not
          only wow users but actually help them get stuff done.
        </p>
        <Connect />
      </div>

      {/* MOBILE DEVELOPMENT */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-emerald-600 dark:bg-emerald-400 p-2 w-fit rounded-xl text-white">
          <Smartphone className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mt-4">
          Mobile App Development
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Another slow & boring app? Nope. We build sleek, fast mobile apps that
          feel native, work everywhere, and don&apos;t crash when you need them
          most.
        </p>
      </div>

      {/* E-COMMERCE DEVELOPMENT */}
      <div
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
      </div>

      {/* WEBSITE MAINTAINANCE & SUPPORT */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)] rounded-xl col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-cyan-600 dark:bg-cyan-400 p-2 w-fit rounded-xl text-white">
          <Settings className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-cyan-600 dark:text-cyan-400 mt-4">
          Website Maintenance & Support
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Set it and forget it? Not quite. We handle the boring-but-crucial
          stuff — updates, security, and fixes — so your site doesn&apos;t
          randomly break on a Tuesday.
        </p>
      </div>

      {/* CUSTOM SOFTWARE SOLUTIONS */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-md col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
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
      </div>

      {/* CMS DEVELOPMENT */}
      <div
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
      </div>

      {/* BRANDING & CREATIVE DIRECTION */}
      <div
        className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
      dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]
      rounded-md col-span-1 w-full flex flex-col group overflow-hidden relative h-full p-6"
      >
        <div className="bg-purple-600 dark:bg-purple-400 p-2 w-fit rounded-xl text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-medium text-purple-600 dark:text-purple-400 mt-4">
          Branding & Creative Direction
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mt-4">
          Your logo isn&apos;t your brand — but a bad one will haunt you. We
          help you look sharp, stay consistent, and actually make people
          remember you (for the right reasons).
        </p>
      </div>
    </div>
  );
};
