import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowUpRight, Terminal, Coffee, Rocket } from "lucide-react";

// Brand SVG logos (inline, lightweight) — colored on hover, mono by default
const Logos: Record<string, JSX.Element> = {
  React: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <circle cx="12" cy="12" r="2" />
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text x="12" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="hsl(var(--card))" fontFamily="monospace">TS</text>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <text x="12" y="17" textAnchor="middle" fontSize="9" fontWeight="800" fill="hsl(var(--card))" fontFamily="monospace">JS</text>
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 6c-2.7 0-4.4 1.35-5.1 4.05.97-1.35 2.1-1.85 3.4-1.5.74.2 1.27.74 1.86 1.34.96.97 2.07 2.1 4.5 2.1 2.7 0 4.4-1.35 5.1-4.05-.97 1.35-2.1 1.85-3.4 1.5-.74-.2-1.27-.74-1.86-1.34C15.54 7.13 14.43 6 12 6zM6.9 12c-2.7 0-4.4 1.35-5.1 4.05.97-1.35 2.1-1.85 3.4-1.5.74.2 1.27.74 1.86 1.34.96.97 2.07 2.1 4.5 2.1 2.7 0 4.4-1.35 5.1-4.05-.97 1.35-2.1 1.85-3.4 1.5-.74-.2-1.27-.74-1.86-1.34C10.44 13.13 9.33 12 6.9 12z" />
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.6 6H8.5l.2 2.4h8.7l-.6 7.2L12 19l-4.8-1.4-.3-3.4h2.4l.2 1.6L12 16.6l2.5-.4.3-3H6.9l-.6-7h11.6L17.6 8z" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M3 2l1.6 18L12 22l7.4-2L21 2H3zm14.6 6H8.4l.2 2.4h8.6l-.6 7.2L12 19l-4.6-1.4-.3-3.4h2.3l.2 1.6L12 16.6l2.5-.4.3-3H6.9l-.6-7h11.6L17.6 8z" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M22 4L12 22 2 4l10 3 10-3z" />
    </svg>
  ),
  Node: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.5 3.6L12 11.5 5.5 7.9 12 4.3z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M22.5 11.4L12.6 1.5a1.6 1.6 0 00-2.3 0L8.2 3.6l2.6 2.6a1.9 1.9 0 012.4 2.4l2.5 2.5a1.9 1.9 0 11-1.1 1.1L12.2 9.9v6.2a1.9 1.9 0 11-1.6 0V9.8a1.9 1.9 0 01-1-2.5L6.9 4.7l-5.4 5.4a1.6 1.6 0 000 2.3l9.9 9.9a1.6 1.6 0 002.3 0l8.8-8.8a1.6 1.6 0 000-2.1z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M8.5 2h3.5v6H8.5a3 3 0 010-6zm7 0a3 3 0 110 6H12V2h3.5zM8.5 9H12v6H8.5a3 3 0 010-6zm7 0a3 3 0 11-3 3V9h3zM8.5 16H12v3a3 3 0 11-3.5-3z" />
    </svg>
  ),
  Framer: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M5 2h14v7h-7l7 7h-7v6l-7-7V9h7L5 2z" />
    </svg>
  ),
  Lottie: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 8l6 4-6 4V8z" fill="hsl(var(--card))" />
    </svg>
  ),
  Notion: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M4 3h13l3 3v15H4V3zm3 4v12h10V8H7zm2 2h6v1H9V9zm0 3h6v1H9v-1zm0 3h4v1H9v-1z" />
    </svg>
  ),
  Cursor: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M3 2l9 20 3-9 9-3L3 2z" />
    </svg>
  ),
  VSCode: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M17 2l5 2v16l-5 2-9-8-5 4-2-1V5l2-1 5 4 9-8zm-2 6l-5 4 5 4V8z" />
    </svg>
  ),
  Jira: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 2L2 12l5 5 5-5 5 5 5-5L12 2zm0 13l-3 3 3 4 3-4-3-3z" />
    </svg>
  ),
  Miro: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M17 2l3 1-3 9 3-7 2 1-4 10 3-6 2 1-5 11h-3l3-9-4 9h-3l3-10-4 10H8l3-11-4 11H4l5-13 3 1-3 9 4-10 2 1-3 8 4-9 2 1-3 7 4-9z" />
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 14a4 4 0 11-1-5l-1.4 1.4A2 2 0 1014 14h2z" fill="hsl(var(--card))" />
    </svg>
  ),
};

type CategoryId = "frontend" | "design" | "workflow";

interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  tagline: string;
  accentVar: string; // hsl var
  tools: { name: string; tag?: string }[];
  highlights: string[];
}

const categories: Category[] = [
  {
    id: "frontend",
    label: "Frontend Dev",
    emoji: "💻",
    tagline: "Pixels that ship to production.",
    accentVar: "var(--primary)",
    tools: [
      { name: "React", tag: "Daily" },
      { name: "TypeScript", tag: "Pro" },
      { name: "JavaScript", tag: "Core" },
      { name: "Tailwind", tag: "Daily" },
      { name: "HTML", tag: "Core" },
      { name: "CSS", tag: "Core" },
      { name: "Vite", tag: "Daily" },
      { name: "Node", tag: "Pro" },
      { name: "Git", tag: "Daily" },
    ],
    highlights: ["Component architecture", "Responsive & accessible UI", "Performance tuning"],
  },
  {
    id: "design",
    label: "UX / UI Design",
    emoji: "🎨",
    tagline: "Designs that feel as good as they look.",
    accentVar: "var(--cyan)",
    tools: [
      { name: "Figma", tag: "Daily" },
      { name: "Framer", tag: "Pro" },
      { name: "Lottie", tag: "Pro" },
      { name: "Canva", tag: "Daily" },
      { name: "Miro", tag: "Pro" },
    ],
    highlights: ["Design systems", "Prototyping & micro-interactions", "User research & A/B testing"],
  },
  {
    id: "workflow",
    label: "Workflow",
    emoji: "⚙️",
    tagline: "Tools that keep the team flying.",
    accentVar: "var(--mint)",
    tools: [
      { name: "VSCode", tag: "Daily" },
      { name: "Cursor", tag: "Daily" },
      { name: "Notion", tag: "Daily" },
      { name: "Jira", tag: "Pro" },
      { name: "Git", tag: "Daily" },
    ],
    highlights: ["Agile collaboration", "AI-assisted dev workflows", "Clear documentation"],
  },
];

const stats = [
  { value: "3+", label: "Years Building", icon: Rocket },
  { value: "100+", label: "Screens Shipped", icon: Sparkles },
  { value: "200+", label: "LeetCode Solved", icon: Terminal },
  { value: "∞", label: "Cups of Coffee", icon: Coffee },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<CategoryId>("frontend");
  const current = categories.find((c) => c.id === active)!;

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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-blob opacity-30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-blob opacity-20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            My Toolbox
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Pick a discipline. Peek the stack. Built for delightful, performant interfaces.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* LEFT — Category switcher */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {categories.map((cat) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`group relative text-left rounded-3xl p-5 border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-transparent text-primary-foreground shadow-glow scale-[1.02]"
                      : "bg-card border-border hover:border-primary/40 hover:-translate-y-0.5"
                  }`}
                  style={
                    isActive
                      ? {
                          background: `linear-gradient(135deg, hsl(${cat.accentVar}), hsl(var(--primary)))`,
                        }
                      : undefined
                  }
                >
                  {/* arrow indicator */}
                  <div
                    className={`absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-primary-foreground/20 rotate-0"
                        : "bg-secondary group-hover:bg-primary group-hover:text-primary-foreground -rotate-45"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  <div
                    className={`text-3xl mb-3 inline-block transition-transform duration-500 ${
                      isActive ? "animate-bounce-soft" : "group-hover:scale-125 group-hover:rotate-12"
                    }`}
                  >
                    {cat.emoji}
                  </div>
                  <h3
                    className={`font-display text-xl font-bold mb-1 ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {cat.label}
                  </h3>
                  <p
                    className={`text-sm ${
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {cat.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {cat.tools.length} tools
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {cat.highlights.length} focus areas
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — Active stack panel */}
          <div className="lg:col-span-8">
            <div
              key={current.id}
              className="relative rounded-3xl border border-border bg-card p-6 md:p-8 h-full overflow-hidden animate-scale-in"
            >
              {/* Decorative corner glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-30 blur-3xl"
                style={{ background: `hsl(${current.accentVar})` }}
              />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-bold mb-1"
                      style={{ color: `hsl(${current.accentVar})` }}
                    >
                      Active Stack
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {current.label}
                    </h3>
                  </div>
                  <div
                    className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                    style={{
                      backgroundColor: `hsl(${current.accentVar} / 0.12)`,
                      color: `hsl(${current.accentVar})`,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: `hsl(${current.accentVar})` }} />
                    Live & shipping
                  </div>
                </div>

                {/* Tools grid */}
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  Tools & Tech
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-8">
                  {current.tools.map((tool, i) => (
                    <div
                      key={tool.name}
                      className="group relative aspect-square rounded-2xl bg-secondary/60 hover:bg-card border border-transparent hover:border-primary/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-3 cursor-default"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <div
                        className="w-8 h-8 mb-1.5 text-muted-foreground group-hover:scale-110 transition-all duration-300"
                        style={{ color: undefined }}
                      >
                        <div className="w-full h-full group-hover:[color:hsl(var(--primary))]" style={{ color: "inherit" }}>
                          {Logos[tool.name] ?? Logos.React}
                        </div>
                      </div>
                      <p className="text-[11px] font-semibold text-foreground text-center leading-tight">
                        {tool.name}
                      </p>
                      {tool.tag && (
                        <span className="absolute top-1.5 right-1.5 text-[9px] font-mono uppercase tracking-wider text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          {tool.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-secondary/60 border border-border text-sm font-medium text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: `hsl(${current.accentVar})` }}
                      />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="reveal mt-5">
          <div className="rounded-3xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`group p-6 text-center hover:bg-secondary/40 transition-colors relative ${
                    i !== 0 ? "md:border-l border-border" : ""
                  } ${i >= 2 ? "border-t md:border-t-0 border-border" : ""} ${
                    i === 1 ? "border-l border-border" : ""
                  } ${i === 3 ? "border-l border-border" : ""}`}
                >
                  <s.icon className="w-5 h-5 mx-auto mb-2 text-primary group-hover:scale-125 group-hover:rotate-12 transition-transform" />
                  <p className="font-display text-3xl md:text-4xl font-bold gradient-text">
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
