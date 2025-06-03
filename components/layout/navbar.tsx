"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CTAButton } from "./cta-button";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span className="text-xl font-bold tracking-tight text-primary">
            Pinnacle
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-workSans">
          {navItems.map((item) => {
            const isActive =
              (pathname === "/" && item.href === "/") ||
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground group",
                  isActive && "text-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-brand-blue/40 via-brand-blue to-brand-blue/40 transition-opacity group-hover:opacity-100" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <ModeToggle />
          <CTAButton />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 lg:hidden">
          <CTAButton />
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-4">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <span className="text-xl font-bold tracking-tight">
                    Pinnacle
                  </span>
                </div>

                <div className="flex flex-col space-y-3 pt-4">
                  {navItems.map((item) => {
                    const isActive =
                      (pathname === "/" && item.href === "/") ||
                      pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "relative px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground group",
                          isActive && "text-foreground"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
