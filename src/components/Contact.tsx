import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, ArrowUpRight, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactLinks = [
  { icon: Mail, label: "devmahalle@email.com", href: "mailto:devmahalle@email.com", color: "primary" },
  { icon: Phone, label: "+91 XXXXX XXXXX", href: "#", color: "primary" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com", color: "accent" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com", color: "accent" },
];

const Contact = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (demo)");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-muted/50 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
      focused === field
        ? "border-primary/50 ring-2 ring-primary/20 bg-muted"
        : "border-border hover:border-border/80"
    }`;

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl space-y-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[2px] bg-primary rounded-full" />
          <p className="text-primary text-sm font-semibold tracking-wider uppercase">Contact</p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info (2 cols) */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug">
                Let's work{" "}
                <span className="gradient-text">together</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Feel free to reach out for collaborations, internships, or just a friendly chat about cloud technologies.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              <span>India</span>
            </div>

            <div className="space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 glass rounded-xl px-4 py-3 group hover:glow-blue transition-all duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      item.color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <item.icon size={16} className={item.color === "accent" ? "text-accent" : "text-primary"} />
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right form (3 cols) */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg">Send a message</h3>
                <p className="text-xs text-muted-foreground">I'll get back to you as soon as possible.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("name")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={inputClasses("email")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputClasses("message")} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] active:scale-[0.97] transition-all duration-300"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
