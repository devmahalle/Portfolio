import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Dev Mahalle</p>
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Github size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
