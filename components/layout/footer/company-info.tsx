import Link from "next/link";
import { Mail, Phone } from "lucide-react";

interface CompanyInfoProps {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export function CompanyInfo({ name, address, email, phone }: CompanyInfoProps) {
  return (
    <div className="space-y-6">
      {/* Logo */}
      <Link
        href="/"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          {name}
        </span>
      </Link>

      {/* Address */}
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
        {address.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < address.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* Contact Info */}
      <div className="space-y-3">
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4 flex-shrink-0" />
          <span>{email}</span>
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span>{phone}</span>
        </a>
      </div>
    </div>
  );
}
