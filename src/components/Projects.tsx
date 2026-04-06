import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import farmlandImg from "@/assets/project-farmland.jpg";
import attendanceImg from "@/assets/project-attendance.jpg";

const projects = [
  {
    title: "AWS Scalable Web App",
    subtitle: "Using Terraform",
    description:
      "Designed and deployed scalable AWS infrastructure using Terraform including VPC, subnets, security groups, and EC2 web server.",
    image: farmlandImg,
    tags: ["AWS", "Terraform", "IaC", "Cloud"],
  },
  {
    title: "Farm Land Market",
    description:
      "A platform designed to help users buy and sell farmland efficiently, reducing dependency on brokers and simplifying the process.",
    image: farmlandImg,
    tags: ["Web App", "Marketplace", "Full Stack"],
  },
  {
    title: "Attendance Monitoring",
    subtitle: "Using Face Recognition",
    description:
      "A smart attendance system that uses face recognition technology to automate attendance tracking in real time.",
    image: attendanceImg,
    tags: ["AI/ML", "Computer Vision", "Python"],
  },
];

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-primary rounded-full" />
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">Projects</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Things I've <span className="gradient-text">built</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            A selection of projects showcasing my skills in development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl overflow-hidden group hover:glow-blue transition-all duration-500 relative"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />

                {/* Floating arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-primary" />
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="text-sm text-muted-foreground font-medium">{p.subtitle}</p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="flex gap-4 pt-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 active:scale-[0.97] transition-all">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground text-xs font-semibold hover:text-foreground hover:bg-secondary/80 active:scale-[0.97] transition-all">
                    <Github size={14} /> Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
