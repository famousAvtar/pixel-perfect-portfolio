import { useEffect, useRef } from "react";

const designTools = [
  { name: "Figma", level: 95, emoji: "🎨" },
  { name: "Adobe XD", level: 85, emoji: "✨" },
  { name: "Photoshop", level: 80, emoji: "🖼️" },
  { name: "Illustrator", level: 75, emoji: "✏️" },
];

const devSkills = [
  { name: "React", level: 92, emoji: "⚛️" },
  { name: "TypeScript", level: 88, emoji: "📘" },
  { name: "Tailwind CSS", level: 95, emoji: "💨" },
  { name: "Next.js", level: 85, emoji: "▲" },
  { name: "Framer Motion", level: 80, emoji: "🎬" },
  { name: "Git", level: 85, emoji: "🔀" },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Time Management",
  "Attention to Detail",
  "Creative Thinking",
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate skill bars
            const bars = entry.target.querySelectorAll(".skill-bar-fill");
            bars.forEach((bar) => {
              const width = bar.getAttribute("data-width");
              (bar as HTMLElement).style.width = `${width}%`;
            });
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
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-blob opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-blob opacity-20 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Design Tools */}
          <div className="reveal">
            <div className="bg-card rounded-3xl p-6 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Design Tools
                </h3>
              </div>
              <div className="space-y-5">
                {designTools.map((skill, index) => (
                  <div key={skill.name} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.emoji}</span>
                        <span className="font-body font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Skills */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-card rounded-3xl p-6 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Development
                </h3>
              </div>
              <div className="space-y-5">
                {devSkills.map((skill, index) => (
                  <div key={skill.name} style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.emoji}</span>
                        <span className="font-body font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            <div className="bg-card rounded-3xl p-6 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-2xl bg-secondary text-secondary-foreground font-body text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Fun stats */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Fun facts:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-xl bg-secondary/50">
                    <p className="font-display text-2xl font-bold text-primary">50+</p>
                    <p className="text-xs text-muted-foreground">Projects Done</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary/50">
                    <p className="font-display text-2xl font-bold text-primary">∞</p>
                    <p className="text-xs text-muted-foreground">Cups of Coffee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
