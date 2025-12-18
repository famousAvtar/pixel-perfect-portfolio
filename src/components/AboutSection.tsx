import { useEffect, useRef } from "react";
import { Palette, Code2, Lightbulb, Heart } from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "User Research",
    description: "Deep understanding of user needs",
  },
  {
    icon: Code2,
    title: "Prototyping",
    description: "Wireframing & interactive prototypes",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving",
    description: "200+ LeetCode problems solved",
  },
  {
    icon: Heart,
    title: "Collaboration",
    description: "Cross-team stakeholder partnerships",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-hero opacity-50 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image/Graphic */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative">
              {/* Main shape */}
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-secondary rounded-3xl -rotate-3" />
                <div className="absolute inset-4 bg-card rounded-2xl shadow-card overflow-hidden">
                  {/* Abstract pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-primary/20 animate-float" />
                      <div className="absolute bottom-12 right-8 w-16 h-16 rounded-lg bg-cyan/20 rotate-12 animate-float-slow" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-primary/30 animate-pulse-soft" />
                      <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-mint/40 animate-float" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                  {/* Emoji/Avatar placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-card rounded-2xl p-4 shadow-card border border-border animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">B.Tech CSE</p>
                    <p className="text-sm text-muted-foreground">AI Specialization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Turning Vision Into
                <span className="gradient-text"> Digital Reality</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a UI/UX Designer based in Gurugram with a B.Tech in CSE (AI) from Gurugram University. 
                I specialize in research, prototyping, and creating responsive designs that make an impact.
              </p>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                With experience at companies like Incredipets and EpiCred, I've led end-to-end UX design projects,
                created scalable design systems, and improved user experiences with measurable outcomes. 
                I love turning complex problems into elegant, user-friendly solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="reveal p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300 group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
