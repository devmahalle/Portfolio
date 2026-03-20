import { Rocket, Users, MessageSquare } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { icon: Rocket, title: "Internships", desc: "Eager to contribute and learn at forward-thinking companies." },
  { icon: Users, title: "Collaborations", desc: "Open to working on cloud and DevOps projects together." },
  { icon: MessageSquare, title: "Freelance", desc: "Available for small cloud infrastructure tasks." },
];

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="container max-w-5xl relative space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-primary rounded-full" />
            <p className="text-primary text-sm font-semibold tracking-wider uppercase">Services</p>
            <div className="w-12 h-[2px] bg-primary rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I'm <span className="gradient-text">looking for</span>
          </h2>
          <p className="text-muted-foreground">
            Currently not offering paid services — but open to opportunities, internships, and collaborations that help me grow.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-8 text-center space-y-4 group hover:glow-blue transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto relative group-hover:scale-110 transition-transform duration-300">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
