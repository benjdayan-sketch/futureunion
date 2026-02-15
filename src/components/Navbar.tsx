import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { EditableText } from "@/components/cms/EditableText";
import { EditableLink } from "@/components/cms/EditableLink";

const navLinks = [
  {
    key: "home.navbar.link.mission",
    label: "Mission",
    defaultLabel: "Mission",
    href: "/#mission",
    defaultHref: "/#mission"
  },
  {
    key: "home.navbar.link.builders",
    label: "Builders",
    defaultLabel: "Builders",
    href: "/#initiatives", // Fallback if no submenu
    defaultHref: "/#initiatives",
    submenu: [
      { key: "home.navbar.link.builders.intrepid", label: "Intrepid List 2025", defaultLabel: "Intrepid List 2025", href: "/intrepid-investors", defaultHref: "/intrepid-investors" },
      { key: "home.navbar.link.builders.clean", label: "Clean Capital", defaultLabel: "Clean Capital", href: "/clean-capital", defaultHref: "/clean-capital" },
    ]
  },
  {
    key: "home.navbar.link.intelligence",
    label: "Intelligence",
    defaultLabel: "Intelligence",
    href: "/#initiatives",
    defaultHref: "/#initiatives",
    submenu: [
      { key: "home.navbar.link.intelligence.research", label: "Research", defaultLabel: "Research", href: "/research", defaultHref: "/research" },
      { key: "home.navbar.link.intelligence.decoupling", label: "Decoupling Index", defaultLabel: "Decoupling Index", href: "/decoupling-index", defaultHref: "/decoupling-index" },
    ]
  },
  {
    key: "home.navbar.link.human",
    label: "Human Capital",
    defaultLabel: "Human Capital",
    href: "/#initiatives",
    defaultHref: "/#initiatives",
    submenu: [
      { key: "home.navbar.link.human.fellows", label: "Fellows 2025", defaultLabel: "Fellows 2025", href: "/fellows-2025", defaultHref: "/fellows-2025" },
      { key: "home.navbar.link.human.veterans", label: "Veterans Transparency Index", defaultLabel: "Veterans Transparency Index", href: "/veteran-employers", defaultHref: "/veteran-employers" },
    ]
  },
  {
    key: "home.navbar.link.contact",
    label: "Contact",
    defaultLabel: "Contact",
    href: "/#contact",
    defaultHref: "/#contact"
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-wider text-foreground hover:text-gold transition-colors">
          <EditableText name="home.navbar.logo.future" defaultContent="FUTURE" />
          <span className="text-gold">—</span>
          <EditableText name="home.navbar.logo.union" defaultContent="UNION" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.key} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                      onMouseEnter={() => setActiveSubmenu(link.label)}
                    >
                      <EditableText name={`${link.key}.label`} defaultContent={link.defaultLabel} />
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div
                      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="bg-background border border-border shadow-lg min-w-[200px]">
                        {link.submenu.map((sublink) => (
                          <EditableLink
                            key={sublink.key}
                            name={`${sublink.key}.text`}
                            linkName={`${sublink.key}.href`}
                            defaultContent={sublink.defaultLabel}
                            defaultHref={sublink.defaultHref}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          />
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <EditableLink
                    name={`${link.key}.text`}
                    linkName={`${link.key}.href`}
                    defaultContent={link.defaultLabel}
                    defaultHref={link.defaultHref}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                  />
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground hover:text-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden animate-fade-in">
            <ul className="flex flex-col py-6">
              {navLinks.map((link) => (
                <li key={`${link.key}-mobile`}>
                  {link.submenu ? (
                    <>
                      <span className="block px-6 py-3 text-foreground font-semibold uppercase tracking-wide text-sm">
                        <EditableText name={`${link.key}.label`} defaultContent={link.defaultLabel} />
                      </span>
                      {link.submenu.map((sublink) => (
                        <EditableLink
                          key={`${sublink.key}-mobile`}
                          name={`${sublink.key}.text`}
                          linkName={`${sublink.key}.href`}
                          defaultContent={sublink.defaultLabel}
                          defaultHref={sublink.defaultHref}
                          className="block px-8 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm"
                        />
                      ))}
                    </>
                  ) : (
                    <EditableLink
                      name={`${link.key}.text`}
                      linkName={`${link.key}.href`}
                      defaultContent={link.defaultLabel}
                      defaultHref={link.defaultHref}
                      className="block px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors uppercase tracking-wide text-sm"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};