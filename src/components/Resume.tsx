import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  {
    type: "education" as const,
    title: "BTech in Computer Science",
    org: "MIT ADT University",
    period: "2022 – 2026",
    desc: "Focused on cloud computing, distributed systems, and infrastructure automation.",
  },
  {
    type: "project" as const,
    title: "Cloud Infrastructure Projects",
    org: "Self-directed / Academic",
    period: "2024 – Present",
    desc: "Designed and deployed scalable cloud solutions using AWS and Azure, including automated CI/CD pipelines and containerized applications.",
  },
  {
    type: "project" as const,
    title: "Farm Land Market Platform",
    org: "Academic Project",
    period: "2024",
    desc: "Built a full-stack platform to simplify farmland transactions, reducing dependency on brokers.",
  },
  {
    type: "project" as const,
    title: "Attendance Monitoring System",
    org: "Academic Project",
    period: "2023",
    desc: "Developed a face-recognition-based attendance system to automate tracking and improve accuracy.",
  },
];

const Resume = () => {
  const ref = useScrollReveal();

  return (
    <section id="resume" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-primary rounded-full" />
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">Resume</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Education & <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <a
            href="/Dev_Mahalle_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300 self-start"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/40 via-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 group">
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 relative z-10">
                    {item.type === "education" ? (
                      <GraduationCap size={16} className="text-primary" />
                    ) : (
                      <Briefcase size={16} className="text-accent" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-6 hover:glow-blue transition-all duration-500 group-hover:border-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                      <Calendar size={12} />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
