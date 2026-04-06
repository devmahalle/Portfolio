import { Cloud, Network, Container, Terminal, GitBranch, Blocks } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "AWS", icon: Cloud, level: 75, color: "primary", desc: "EC2, S3, Lambda, CloudFormation" },
  { name: "Networking", icon: Network, level: 70, color: "primary", desc: "TCP/IP, DNS, VPN, Firewalls" },
  { name: "Docker", icon: Container, level: 65, color: "accent", desc: "Containers, Compose, Images" },
  { name: "Linux OS", icon: Terminal, level: 80, color: "primary", desc: "Ubuntu, CentOS, Shell scripting" },
  { name: "Git & GitHub", icon: GitBranch, level: 85, color: "accent", desc: "Version control, CI/CD, PRs" },
  { name: "Terraform", icon: Blocks, level: 60, color: "primary", desc: "IaC, Modules, State management" },
];

const AnimatedBar = ({ level, color }: { level: number; color: string }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) obs.observe(barRef.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={barRef} className="w-full h-2 rounded-full bg-muted overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${
          color === "accent"
            ? "bg-gradient-to-r from-accent to-primary"
            : "bg-gradient-to-r from-primary to-accent"
        }`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16 relative">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary rounded-full" />
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">Skills</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - heading */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
              Technologies I{" "}
              <span className="gradient-text">work with</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Continuously expanding my toolkit with hands-on experience in cloud platforms, containerization, and infrastructure management.
            </p>

            {/* Overall stats */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Proficiency Overview</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { label: "Cloud", value: "75%" },
                  { label: "DevOps", value: "70%" },
                  { label: "Systems", value: "80%" },
                ].map((s) => (
                  <div key={s.label} className="space-y-1">
                    <p className="text-2xl font-bold gradient-text">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - skill cards */}
          <div className="space-y-4">
            {skills.map((s, i) => (
              <div
                key={s.name}
                className="glass rounded-xl p-5 group hover:glow-blue transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    s.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  }`}>
                    <s.icon size={20} className={s.color === "accent" ? "text-accent" : "text-primary"} />
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{s.name}</h3>
                      <span className="text-xs font-medium text-muted-foreground tabular-nums">{s.level}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                    <AnimatedBar level={s.level} color={s.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
