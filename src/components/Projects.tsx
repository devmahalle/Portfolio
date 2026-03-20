import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import farmlandImg from "@/assets/project-farmland.jpg";
import attendanceImg from "@/assets/project-attendance.jpg";

const projects = [
  {
    title: "Farm Land Market",
    description:
      "A platform designed to help users buy and sell farmland efficiently, reducing dependency on brokers and simplifying the process.",
    image: farmlandImg,
  },
  {
    title: "Attendance Monitoring Using Face Recognition",
    description:
      "A smart attendance system that uses face recognition technology to automate attendance tracking.",
    image: attendanceImg,
  },
];

const Projects = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container max-w-4xl space-y-12">
        <div className="space-y-2">
          <p className="text-primary text-sm font-medium tracking-wider uppercase">Projects</p>
          <h2 className="text-3xl font-bold tracking-tight">Things I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-xl overflow-hidden group hover:glow-blue transition-shadow duration-500"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex gap-3 pt-1">
                  <button className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                    <ExternalLink size={14} /> View Project
                  </button>
                  <button className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> GitHub
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
