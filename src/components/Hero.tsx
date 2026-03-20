import { ArrowDown, Github, Linkedin, Cloud, Server, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Cloud Engineer", "AWS Specialist", "Azure Expert", "DevOps Enthusiast"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/5 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite_1s]" />

      {/* Floating tech icons */}
      <div className="absolute top-32 right-[15%] text-primary/15 animate-[float_6s_ease-in-out_infinite]">
        <Cloud size={48} />
      </div>
      <div className="absolute bottom-40 left-[10%] text-accent/15 animate-[float_7s_ease-in-out_infinite_1s]">
        <Server size={36} />
      </div>
      <div className="absolute top-1/2 right-[8%] text-primary/10 animate-[float_5s_ease-in-out_infinite_2s]">
        <Shield size={28} />
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div className="space-y-7 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            OPEN TO OPPORTUNITIES
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Hi, I'm
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight gradient-text">
              Dev Mahalle
            </h1>
          </div>

          {/* Typing role */}
          <div className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-muted-foreground">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span>
              {displayed}
              <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 animate-[blink_1s_step-end_infinite]" />
            </span>
          </div>

          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Passionate about building scalable cloud solutions, modern infrastructure, and automating everything in between.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 py-2">
            {[
              { value: "5+", label: "Projects" },
              { value: "3+", label: "Certifications" },
              { value: "2026", label: "Graduating" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-0.5">
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300"
            >
              View Projects
              <ArrowDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 active:scale-[0.97] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Github, href: "https://github.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center opacity-0 animate-fade-up [animation-delay:200ms]">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-3xl border border-primary/10 animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute -inset-8 rounded-[2rem] border border-accent/5 animate-[pulse_5s_ease-in-out_infinite_1s]" />

            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden gradient-border glow-blue relative">
              <img
                src={profileImg}
                alt="Dev Mahalle"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge - top left */}
            <div className="absolute -top-3 -left-3 glass rounded-xl px-4 py-2.5 glow-blue animate-[float_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <Cloud size={14} className="text-primary" />
                <p className="text-xs font-semibold text-foreground">AWS · Azure</p>
              </div>
            </div>

            {/* Floating badge - bottom right */}
            <div className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2.5 glow-accent animate-[float_5s_ease-in-out_infinite_1s]">
              <p className="text-xs font-bold gradient-text">Cloud Engineer</p>
              <p className="text-[10px] text-muted-foreground">Infrastructure & DevOps</p>
            </div>

            {/* Experience badge */}
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 glass rounded-lg px-3 py-1.5 animate-[float_6s_ease-in-out_infinite_2s]">
              <p className="text-[10px] text-muted-foreground">Fresher</p>
              <p className="text-xs font-semibold text-primary">2026 Grad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground group">
        <span className="text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Scroll</span>
        <span className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5 group-hover:border-primary/50 transition-colors">
          <span className="w-1 h-2 rounded-full bg-primary animate-[scrollDot_2s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  );
};

export default Hero;
