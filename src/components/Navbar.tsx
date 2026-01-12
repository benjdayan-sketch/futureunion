import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Mission", href: "/#mission" },
  {
    label: "Builders",
    href: "/#initiatives",
    submenu: [
      { label: "Global Defense 300", href: "/global-defense-300" },
      { label: "Top Defense Companies 2024", href: "/top-defense-companies-2024" },
      { label: "Intrepid List 2025", href: "/intrepid-investors" },
      { label: "Clean Capital", href: "/clean-capital" },
    ]
  },
  {
    label: "Intelligence",
    href: "/#initiatives",
    submenu: [
      { label: "Research", href: "/research" },
      { label: "Decoupling Index", href: "/decoupling-index" },
    ]
  },
  {
    label: "Human Capital",
    href: "/#initiatives",
    submenu: [
      { label: "Fellows 2025", href: "/fellows-2025" },
      { label: "Veterans Transparency Index", href: "/veteran-employers" },
    ]
  },
  { label: "Contact", href: "/#contact" },
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
          FUTURE<span className="text-gold">—</span>UNION
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      className="flex items-center gap-1 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                      onMouseEnter={() => setActiveSubmenu(link.label)}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <div
                      className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <div className="bg-background border border-border shadow-lg min-w-[200px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.label}
                            to={sublink.href}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
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
                <li key={link.label}>
                  {link.submenu ? (
                    <>
                      <span className="block px-6 py-3 text-foreground font-semibold uppercase tracking-wide text-sm">
                        {link.label}
                      </span>
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.label}
                          to={sublink.href}
                          className="block px-8 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="block px-6 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors uppercase tracking-wide text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
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