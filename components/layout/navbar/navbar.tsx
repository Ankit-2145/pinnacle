"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { CTAButton } from "@/components/shared/cta/cta-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const lastScrollY = React.useRef<number>(0);
  const ticking = React.useRef<boolean>(false);
  const pathname = usePathname();

  // Memoized scroll handler using useCallback
  const handleScroll = React.useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Show navbar when at top of page
        if (currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setIsVisible(true);
        } else if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > 100
        ) {
          // Scrolling down and past 100px
          setIsVisible(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []); // Empty dependency array since we're using refs

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Only depends on the memoized handleScroll

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full bg-background transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
            Pinnacle
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 font-workSans xl:flex">
          {navItems.map((item) => {
            const isActive =
              (pathname === "/" && item.href === "/") ||
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-brand-blue/40 via-brand-blue to-brand-blue/40 transition-opacity group-hover:opacity-100" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center space-x-3 xl:flex">
          <ModeToggle />
          <CTAButton />
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2 xl:hidden">
          <CTAButton />
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-4 sm:w-[400px]">
              <div className="mt-8 flex flex-col space-y-4">
                <div className="flex items-center space-x-2 border-b pb-4">
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
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "group relative px-4 py-2 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground",
                          isActive && "text-foreground",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
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
