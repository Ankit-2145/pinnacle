"use client";

import React from "react";
import {
  Globe,
  Palette,
  Search,
  Settings,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { MarqueeVertical } from "./services-marquee";
import { SEOCardSearch } from "./services-seo-search";
import { Connect } from "./services-ui-ux";

export const ServicesBentoGrid = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 font-workSans lg:grid-cols-3">
      {/* WEBSITE & WEB APP DEVELOPMENT */}
      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:col-span-2 lg:flex-row dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="max-w-xs">
          <div className="w-fit rounded-xl bg-violet-600 p-2 text-white dark:bg-violet-400">
            <Globe className="h-4 w-4" />
          </div>
          <h2 className="mt-4 text-lg font-medium text-violet-600 dark:text-violet-400">
            Website & Web App Development
          </h2>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Boring websites? Not here. We craft blazing-fast, scalable sites and
            web apps that don&apos;t just look good — they actually work, rank,
            and convert.
          </p>
        </div>
        <MarqueeVertical />
      </div>

      {/* SEO & PERFORMANCE OPTIMIZATION */}
      <div className="group relative col-span-1 flex h-full w-full flex-col space-y-5 overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:row-span-2 dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="w-fit rounded-xl bg-orange-600 p-2 text-white dark:bg-orange-400">
          <Search className="h-4 w-4" />
        </div>

        <h2 className="text-lg font-medium text-orange-600 dark:text-orange-400">
          SEO & Performance Optimization
        </h2>

        <p className="max-w-sm text-sm text-muted-foreground">
          Because what&apos;s the point of a stunning site if no one finds it?
          We fix that — with SEO that ranks, speed that sticks, and strategy
          that actually works.
        </p>

        <div className="my-auto">
          <SEOCardSearch />
        </div>
      </div>

      {/* UI/UX DESIGN */}
      <div className="group relative col-span-1 flex h-full w-full flex-col space-y-5 overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:row-span-2 dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="w-fit rounded-xl bg-pink-600 p-2 text-white dark:bg-pink-400">
          <Palette className="h-4 w-4" />
        </div>

        <h2 className="text-lg font-medium text-pink-600 dark:text-pink-400">
          UI/UX Design
        </h2>

        <p className="max-w-sm text-sm text-muted-foreground">
          Looks matter — but so does making sense. We design interfaces that not
          only wow users but actually help them get stuff done.
        </p>

        <div className="mt-auto">
          <Connect />
        </div>
      </div>

      {/* MOBILE DEVELOPMENT */}
      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="w-fit rounded-xl bg-emerald-600 p-2 text-white dark:bg-emerald-400">
          <Smartphone className="h-4 w-4" />
        </div>
        <h2 className="mt-4 text-lg font-medium text-emerald-600 dark:text-emerald-400">
          Mobile App Development
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          Another slow & boring app? Nope. We build sleek, fast mobile apps that
          feel native, work everywhere, and don&apos;t crash when you need them
          most.
        </p>
      </div>

      {/* BRANDING & CREATIVE DIRECTION */}
      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="w-fit rounded-xl bg-purple-600 p-2 text-white dark:bg-purple-400">
          <Sparkles className="h-4 w-4" />
        </div>
        <h2 className="mt-4 text-lg font-medium text-purple-600 dark:text-purple-400">
          Branding & Creative Direction
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          Your logo isn&apos;t your brand — but a bad one will haunt you. We
          help you look sharp, stay consistent, and actually make people
          remember you (for the right reasons).
        </p>
      </div>

      {/* WEBSITE MAINTAINANCE & SUPPORT */}
      <div className="group relative col-span-1 flex h-full w-full flex-col overflow-hidden rounded-xl p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(255,255,255,0.05),0px_0px_0px_1px_rgba(255,255,255,0.1)]">
        <div className="max-w-xs">
          <div className="w-fit rounded-xl bg-cyan-600 p-2 text-white dark:bg-cyan-400">
            <Settings className="h-4 w-4" />
          </div>
          <h2 className="mt-4 text-lg font-medium text-cyan-600 dark:text-cyan-400">
            Website Maintenance & Support
          </h2>
          <p className="my-4 max-w-sm text-sm text-muted-foreground">
            Set it and forget it? Not quite. We handle the boring-but-crucial
            stuff — updates, security, and fixes — so your site doesn&apos;t
            randomly break on a Tuesday.
          </p>
        </div>
      </div>
    </div>
  );
};
