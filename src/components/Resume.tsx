import { Download, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Resume = () => {
  const ref = useScrollReveal();

  return (
    <section id="resume" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary rounded-full" />
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">Resume</p>
        </div>

        <div className="glass rounded-2xl p-10 flex flex-col sm:flex-row items-center gap-8 hover:glow-blue transition-all duration-500">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <FileText size={36} className="text-primary" />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Get a detailed overview of my education, skills, projects, and cloud engineering experience.
            </p>
          </div>

          <a
            href="/Dev_Mahalle_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300 shrink-0"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
