import { ArrowDown, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[120px] pointer-events-none" />

    <div className="container grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <div className="space-y-6 opacity-0 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          OPEN TO OPPORTUNITIES
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
          Hi, I'm{" "}
          <span className="gradient-text">Dev Mahalle</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-md">
          Cloud Engineer | AWS | Azure — Passionate about building scalable cloud solutions and modern infrastructure.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium text-sm hover:border-primary/40 active:scale-[0.97] transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Profile image */}
      <div className="flex justify-center opacity-0 animate-fade-up [animation-delay:200ms]">
        <div className="relative">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden gradient-border glow-blue">
            <img
              src={profileImg}
              alt="Dev Mahalle"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 glow-accent">
            <p className="text-xs font-semibold gradient-text">Cloud Engineer</p>
            <p className="text-[10px] text-muted-foreground">AWS · Azure</p>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
      <ArrowDown size={20} />
    </a>
  </section>
);

export default Hero;
