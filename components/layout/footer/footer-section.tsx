import Link from "next/link";

interface FooterSectionProps {
  title: string;
  links: Array<{ name: string; href: string }>;
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
