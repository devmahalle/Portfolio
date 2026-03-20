import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/50">
    {/* Gradient line at top */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container py-12">
      <div className="grid sm:grid-cols-3 gap-8 items-center">
        {/* Left - brand */}
        <div className="space-y-2">
          <p className="text-lg font-bold gradient-text">{"<Dev />"}</p>
          <p className="text-xs text-muted-foreground">Cloud Engineer · AWS · Azure</p>
        </div>

        {/* Center - copyright */}
        <div className="text-center space-y-1">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart size={12} className="text-destructive fill-destructive" /> by Dev Mahalle
          </p>
          <p className="text-xs text-muted-foreground">© 2026 All rights reserved</p>
        </div>

        {/* Right - socials + back to top */}
        <div className="flex items-center justify-end gap-3">
          {[
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Github, href: "https://github.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-blue transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 active:scale-[0.95] transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
