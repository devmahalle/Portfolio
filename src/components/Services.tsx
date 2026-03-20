import { Handshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container max-w-4xl">
        <div className="glass rounded-xl p-10 text-center space-y-4">
          <Handshake className="mx-auto text-accent" size={32} />
          <h2 className="text-2xl font-bold tracking-tight">Services</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Currently not offering services. Open to opportunities, internships, and collaborations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 active:scale-[0.97] transition-all mt-2"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
