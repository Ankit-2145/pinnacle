import type { LucideIcon } from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {links.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-brand-blue hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
