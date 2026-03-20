import { GraduationCap, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container max-w-4xl space-y-12">
        <div className="space-y-2">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">About Me</p>
          <h2 className="text-3xl font-bold tracking-tight">Who I Am</h2>
        </div>

        <p className="text-muted-foreground leading-relaxed max-w-2xl text-pretty">
          I am a passionate and detail-oriented Cloud Engineer with a strong interest in designing, deploying, and managing scalable cloud-based solutions. I specialize in cloud computing technologies and have hands-on experience working with modern cloud platforms, infrastructure automation, and distributed systems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 space-y-3 hover:glow-blue transition-shadow duration-500">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm text-muted-foreground">BTech in Computer Science</p>
            <p className="text-sm text-muted-foreground">MIT ADT University · 2026</p>
          </div>
          <div className="glass rounded-xl p-6 space-y-3 hover:glow-accent transition-shadow duration-500">
            <Briefcase className="text-accent" size={24} />
            <h3 className="font-semibold">Status</h3>
            <p className="text-sm text-muted-foreground">Fresher — Aspiring Cloud Engineer</p>
            <p className="text-sm text-muted-foreground">Open to internships & opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
