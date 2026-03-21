import { Award, ExternalLink, ShieldCheck, Cloud, Server } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: Cloud,
    color: "primary" as const,
    status: "Completed",
    desc: "Foundational understanding of AWS Cloud services, architecture, security, and pricing.",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    icon: Server,
    color: "accent" as const,
    status: "Completed",
    desc: "Core knowledge of Azure services, cloud concepts, security, compliance, and trust.",
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    icon: ShieldCheck,
    color: "primary" as const,
    status: "In Progress",
    desc: "Designing distributed systems, cost optimization, and high availability on AWS.",
  },
];

const Certifications = () => {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-accent rounded-full" />
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">Certifications</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`glass rounded-2xl p-6 space-y-5 hover:${cert.color === "primary" ? "glow-blue" : "glow-accent"} transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Decorative circle */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-${cert.color}/5`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-${cert.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon size={24} className={`text-${cert.color}`} />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg leading-snug">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>

              {/* Status badge */}
              <div className="flex items-center justify-between pt-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      cert.status === "Completed" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                    }`}
                  />
                  {cert.status}
                </span>
                <Award size={16} className="text-muted-foreground/30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
