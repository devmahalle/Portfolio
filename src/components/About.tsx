import { GraduationCap, Briefcase, MapPin, Calendar, Code2, Target } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  { icon: Code2, label: "Cloud Computing", desc: "AWS, Azure platforms" },
  { icon: Target, label: "Infrastructure", desc: "Automation & IaC" },
  { icon: MapPin, label: "Location", desc: "India" },
  { icon: Calendar, label: "Available", desc: "Immediately" },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary rounded-full" />
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">About Me</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — text content (3 cols) */}
          <div className="md:col-span-3 space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
              Turning cloud ideas into{" "}
              <span className="gradient-text">scalable reality</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              I am a passionate and detail-oriented Cloud Engineer with a strong interest in designing, deploying, and managing scalable cloud-based solutions. I specialize in cloud computing technologies and have hands-on experience working with modern cloud platforms, infrastructure automation, and distributed systems.
            </p>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 glass rounded-xl px-4 py-3 group hover:glow-blue transition-all duration-500">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <h.icon size={16} className="text-primary" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{h.label}</p>
                    <p className="text-xs text-muted-foreground">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — cards (2 cols) */}
          <div className="md:col-span-2 space-y-5">
            <div className="glass rounded-2xl p-6 space-y-4 hover:glow-blue transition-shadow duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-lg">Education</h3>
              <div className="space-y-1.5">
                <p className="text-sm font-medium">BTech in Computer Science</p>
                <p className="text-sm text-muted-foreground">MIT ADT University</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mt-1">
                  <Calendar size={12} /> Class of 2026
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 space-y-4 hover:glow-accent transition-shadow duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="text-accent" size={22} />
              </div>
              <h3 className="font-semibold text-lg">Current Status</h3>
              <div className="space-y-1.5">
                <p className="text-sm font-medium">Aspiring Cloud Engineer</p>
                <p className="text-sm text-muted-foreground">Open to internships & full-time roles</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Actively seeking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
