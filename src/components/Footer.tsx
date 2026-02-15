import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const footerLinks = [
  { key: "home.footer.link.about", label: "About", defaultLabel: "About", href: "/#about", defaultHref: "/#about" },
  { key: "home.footer.link.mission", label: "Mission", defaultLabel: "Mission", href: "/#mission", defaultHref: "/#mission" },
  { key: "home.footer.link.initiatives", label: "Initiatives", defaultLabel: "Initiatives", href: "/#initiatives", defaultHref: "/#initiatives" },
  { key: "home.footer.link.team", label: "Team", defaultLabel: "Team", href: "/#team", defaultHref: "/#team" },
  { key: "home.footer.link.contact", label: "Contact", defaultLabel: "Contact", href: "/#contact", defaultHref: "/#contact" },
];

const legalLinks = [
  { key: "home.footer.link.terms", label: "Terms of Use", defaultLabel: "Terms of Use", href: "/terms", defaultHref: "/terms" },
  { key: "home.footer.link.privacy", label: "Privacy Policy", defaultLabel: "Privacy Policy", href: "/privacy", defaultHref: "/privacy" },
  { key: "home.footer.link.accessibility", label: "Accessibility", defaultLabel: "Accessibility", href: "/accessibility", defaultHref: "/accessibility" },
];

// TikTok icon component (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl tracking-wider text-foreground hover:text-gold transition-colors">
            <EditableText name="home.footer.logo.future" defaultContent="FUTURE" />
            <span className="text-gold">—</span>
            <EditableText name="home.footer.logo.union" defaultContent="UNION" />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <EditableLink
                key={link.key}
                name={`${link.key}.text`}
                linkName={`${link.key}.href`}
                defaultContent={link.defaultLabel}
                defaultHref={link.defaultHref}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
              />
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <EditableLink
              name="home.footer.social.linkedin.label" linkName="home.footer.social.linkedin.href"
              defaultContent="" defaultHref="https://www.linkedin.com/company/futureunion"
              className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </EditableLink>
            <EditableLink
              name="home.footer.social.twitter.label" linkName="home.footer.social.twitter.href"
              defaultContent="" defaultHref="https://twitter.com/_futureunion_"
              className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </EditableLink>
            <EditableLink
              name="home.footer.social.instagram.label" linkName="home.footer.social.instagram.href"
              defaultContent="" defaultHref="https://www.instagram.com/_futureunion_/"
              className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </EditableLink>
            <EditableLink
              name="home.footer.social.tiktok.label" linkName="home.footer.social.tiktok.href"
              defaultContent="" defaultHref="https://www.tiktok.com/@_futureunion_"
              className="w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <TikTokIcon className="w-5 h-5" />
            </EditableLink>
          </div>
        </div>

        {/* Contact Emails */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <EditableLink
            name="home.footer.contact.join.text" linkName="home.footer.contact.join.href"
            defaultContent="joinus@futureunion.co" defaultHref="mailto:joinus@futureunion.co"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4" />
          </EditableLink>
          <EditableLink
            name="home.footer.contact.media.text" linkName="home.footer.contact.media.href"
            defaultContent="media@futureunion.co" defaultHref="mailto:media@futureunion.co"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <Mail className="w-4 h-4" />
          </EditableLink>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <EditableLink
                key={link.key}
                name={`${link.key}.text`}
                linkName={`${link.key}.href`}
                defaultContent={link.defaultLabel}
                defaultHref={link.defaultHref}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              />
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <EditableText name="home.footer.copyright" defaultContent="Future Union. All rights reserved." />
          </p>
        </div>
      </div>
    </footer>
  );
};