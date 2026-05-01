import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Figma,
  Palette,
  Layers,
  Sparkles,
  Component,
  Smartphone,
  TestTube,
  Search,
  Users,
  Lightbulb,
  MessageSquare,
  Zap,
  GitBranch,
  Boxes,
  Trello,
  FileCode2,
  Wand2,
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

type Category = "all" | "frontend" | "design" | "workflow";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: Exclude<Category, "all">;
  level: "Core" | "Pro" | "Daily";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", icon: Component, category: "frontend", level: "Core" },
  { name: "JavaScript", icon: FileCode2, category: "frontend", level: "Core" },
  { name: "TypeScript", icon: Code2, category: "frontend", level: "Pro" },
  { name: "Tailwind CSS", icon: Wand2, category: "frontend", level: "Daily" },
  { name: "HTML & CSS", icon: Code2, category: "frontend", level: "Core" },
  { name: "Responsive UI", icon: Smartphone, category: "frontend", level: "Pro" },
  { name: "Design Systems", icon: Boxes, category: "frontend", level: "Pro" },
  { name: "Cursor AI", icon: Zap, category: "frontend", level: "Daily" },

  // Design
  { name: "Figma", icon: Figma, category: "design", level: "Daily" },
  { name: "Prototyping", icon: Layers, category: "design", level: "Pro" },
  { name: "Wireframing", icon: Layers, category: "design", level: "Pro" },
  { name: "Lottie", icon: Sparkles, category: "design", level: "Daily" },
  { name: "Canva", icon: Palette, category: "design", level: "Daily" },
  { name: "A/B Testing", icon: TestTube, category: "design", level: "Pro" },

  // Workflow & Soft
  { name: "Git & GitHub", icon: GitBranch, category: "workflow", level: "Daily" },
  { name: "JIRA", icon: Trello, category: "workflow", level: "Daily" },
  { name: "User Research", icon: Search, category: "workflow", level: "Pro" },
  { name: "Collaboration", icon: Users, category: "workflow", level: "Core" },
  { name: "Problem Solving", icon: Lightbulb, category: "workflow", level: "Core" },
  { name: "Communication", icon: MessageSquare, category: "workflow", level: "Core" },
];

const filters: { id: Category; label: string; emoji: string }[] = [
  { id: "all", label: "All", emoji: "✨" },
  { id: "frontend", label: "Frontend Dev", emoji: "💻" },
  { id: "design", label: "UX / UI Design", emoji: "🎨" },
  { id: "workflow", label: "Workflow", emoji: "⚙️" },
];

const stats = [
  { value: "3+", label: "Years Building" },
  { value: "100+", label: "Screens Shipped" },
  { value: "200+", label: "LeetCode Solved" },
  { value: "20+", label: "Tools Mastered" },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<Category>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-blob opacity-30 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-blob opacity-20 blur-3xl" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            My Toolkit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            A curated stack I use to design and build delightful, performant interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 reveal">
          {filters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`group inline-flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-glow scale-105"
                    : "bg-card text-foreground border-border hover:border-primary/50 hover:-translate-y-0.5"
                }`}
              >
                <span className="text-base group-hover:scale-125 transition-transform">{f.emoji}</span>
                {f.label}
                <span
                  className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-primary-foreground/20" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {f.id === "all" ? skills.length : skills.filter((s) => s.category === f.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Stack Card */}
        <div className="reveal mb-10">
          <TiltCard tiltAmount={4}>
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 border border-border bg-card">
              <div
                className="absolute inset-0 opacity-60"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow shrink-0">
                    <Code2 className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                      Primary Stack
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Frontend Development
                    </h3>
                    <p className="text-muted-foreground mt-1 max-w-md">
                      Building production-ready React apps with TypeScript, Tailwind & modern tooling.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind", "Vite", "Node"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-sm font-mono font-medium text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal"
              style={{ transitionDelay: `${Math.min(i * 30, 300)}ms` }}
            >
              <div className="group relative h-full rounded-2xl p-4 md:p-5 bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-cyan/5" />

                <div className="relative z-10 flex flex-col items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-secondary group-hover:bg-gradient-accent flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="w-full">
                    <p className="font-body font-semibold text-sm md:text-base text-foreground">
                      {skill.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          skill.level === "Core"
                            ? "bg-primary"
                            : skill.level === "Pro"
                            ? "bg-cyan-500"
                            : "bg-mint"
                        }`}
                        style={{
                          backgroundColor:
                            skill.level === "Core"
                              ? "hsl(var(--primary))"
                              : skill.level === "Pro"
                              ? "hsl(var(--cyan))"
                              : "hsl(var(--mint))",
                        }}
                      />
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="reveal">
          <div className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 text-center group hover:bg-secondary/50 transition-colors"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 inline-block transition-transform duration-300">
                    {s.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                    {s.label}
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
