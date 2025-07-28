import Link from "next/link";
import { CompanyInfo } from "./company-info";
import { FooterSection } from "./footer-section";
import { SocialLinks } from "./social-links";
import { COMPANY_INFO, FOOTER_SECTIONS, SOCIAL_LINKS } from "./footer-data";

interface FooterProps {
  sections?: typeof FOOTER_SECTIONS;
  socialLinks?: typeof SOCIAL_LINKS;
  companyInfo?: typeof COMPANY_INFO;
}

export function Footer({
  sections = FOOTER_SECTIONS,
  socialLinks = SOCIAL_LINKS,
  companyInfo = COMPANY_INFO,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background font-workSans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Company Info - Takes up more space */}
            <div className="lg:col-span-5">
              <CompanyInfo
                name={companyInfo.name}
                address={companyInfo.address}
                email={companyInfo.email}
                phone={companyInfo.phone}
              />

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                  Follow Us
                </h3>
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            {/* Footer Sections */}
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
              {sections.map((section, index) => (
                <FooterSection
                  key={index}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {companyInfo.copyright}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
