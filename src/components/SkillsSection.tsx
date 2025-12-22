import { useEffect, useRef, useState } from "react";
import { 
  Figma, 
  Palette, 
  FileText, 
  LayoutGrid, 
  Trello, 
  Code2,
  Smartphone,
  TestTube,
  Users,
  Search,
  Lightbulb,
  MessageSquare
} from "lucide-react";
import { TiltCard } from "@/components/TiltCard";

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Canva", icon: Palette },
  { name: "Lottie Creator", icon: FileText },
  { name: "Notion", icon: LayoutGrid },
  { name: "Miro", icon: LayoutGrid },
  { name: "JIRA", icon: Trello },
  { name: "VS Code", icon: Code2 },
  { name: "Cursor AI", icon: Code2 },
];

const technicalSkills = [
  { name: "Prototyping", icon: Smartphone },
  { name: "Wireframing", icon: LayoutGrid },
  { name: "Design Systems", icon: Figma },
  { name: "Responsive Designs", icon: Smartphone },
  { name: "A/B Testing", icon: TestTube },
  { name: "ReactJS", icon: Code2 },
];

const softSkills = [
  { name: "User Research", icon: Search },
  { name: "Usability Testing", icon: TestTube },
  { name: "Stakeholder Collaboration", icon: Users },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Communication", icon: MessageSquare },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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

  const handleSkillClick = (skillName: string) => {
    setClickedSkill(skillName);
    setTimeout(() => setClickedSkill(null), 600);
  };

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4 hover-shake">
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
          {/* Tools */}
          <div className="reveal">
            <TiltCard tiltAmount={5}>
              <div 
                className="bg-card rounded-3xl p-6 border border-border h-full hover-lift transition-all duration-300"
                onMouseEnter={() => setHoveredCategory("tools")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center transition-transform duration-300 ${hoveredCategory === "tools" ? "scale-110 rotate-12" : ""}`}>
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Tools
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, index) => (
                    <button
                      key={tool.name}
                      onClick={() => handleSkillClick(tool.name)}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group ${
                        clickedSkill === tool.name ? "animate-jiggle scale-105" : ""
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <tool.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-300" />
                      <span className="font-body text-sm font-medium text-foreground group-hover:text-primary-foreground">
                        {tool.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Technical Skills */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <TiltCard tiltAmount={5}>
              <div 
                className="bg-card rounded-3xl p-6 border border-border h-full hover-lift transition-all duration-300"
                onMouseEnter={() => setHoveredCategory("technical")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center transition-transform duration-300 ${hoveredCategory === "technical" ? "scale-110 rotate-12" : ""}`}>
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Technical Skills
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {technicalSkills.map((skill, index) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group ${
                        clickedSkill === skill.name ? "animate-jiggle scale-105" : ""
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-300" />
                      <span className="font-body text-sm font-medium text-foreground group-hover:text-primary-foreground">
                        {skill.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Soft Skills */}
          <div className="reveal" style={{ transitionDelay: "200ms" }}>
            <TiltCard tiltAmount={5}>
              <div 
                className="bg-card rounded-3xl p-6 border border-border h-full hover-lift transition-all duration-300"
                onMouseEnter={() => setHoveredCategory("soft")}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center transition-transform duration-300 ${hoveredCategory === "soft" ? "scale-110 rotate-12" : ""}`}>
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Soft Skills
                  </h3>
                </div>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group w-full ${
                        clickedSkill === skill.name ? "animate-jiggle scale-105" : ""
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-300" />
                      <span className="font-body text-sm font-medium text-foreground group-hover:text-primary-foreground">
                        {skill.name}
                      </span>
                    </button>
                  ))}
                </div>
                
                {/* Fun stats with interactive counters */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group cursor-default">
                      <p className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">200+</p>
                      <p className="text-xs text-muted-foreground">LeetCode Problems</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors group cursor-default">
                      <p className="font-display text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">100+</p>
                      <p className="text-xs text-muted-foreground">Screens Designed</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
