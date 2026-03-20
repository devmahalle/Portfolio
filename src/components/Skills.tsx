import { Cloud, Network, Container, Terminal, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "AWS", icon: Cloud, level: 75 },
  { name: "Networking", icon: Network, level: 70 },
  { name: "Docker", icon: Container, level: 65 },
  { name: "Linux OS", icon: Terminal, level: 80 },
  { name: "Git & GitHub", icon: GitBranch, level: 85 },
];

const Skills = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container max-w-4xl space-y-12">
        <div className="space-y-2">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight">What I Work With</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="glass rounded-xl p-6 space-y-4 hover:glow-blue transition-shadow duration-500 group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <s.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="font-semibold">{s.name}</h3>
              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{s.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
