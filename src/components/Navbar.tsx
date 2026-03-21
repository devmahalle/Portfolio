import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight gradient-text">
          {"<Dev />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === l.href.slice(1)
                  ? "text-primary-foreground bg-primary shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_20px_-3px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/30 mt-2 mx-4 rounded-xl overflow-hidden animate-fade-in">
          <ul className="flex flex-col p-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === l.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
