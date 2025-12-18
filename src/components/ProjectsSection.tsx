import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EpiCred (EpiScholar)",
    description: "Built and scaled a reusable design system in Figma with 50+ components and tokens, cutting design-to-dev handoff time by 35% and ensuring brand consistency across 100+ screens.",
    achievements: [
      "Conducted usability testing and heuristic evaluation",
      "Optimized loan application flow for accessibility",
      "Increased overall task success rate"
    ],
    tags: ["Design System", "Figma", "Usability Testing", "Interaction Design"],
    color: "from-primary/20 to-cyan/20",
    emoji: "💳",
    link: "https://www.epicred.in",
  },
  {
    title: "Admitio.club (EpiScholar)",
    description: "Designed search, filters, and program listing flows for Admitio, improving first-result click-through rate by 22% and streamlining admission discovery for 5,000+ students.",
    achievements: [
      "Applied information architecture & user journey mapping",
      "Restructured navigation and content hierarchy",
      "Boosted engagement by 18%"
    ],
    tags: ["UX Research", "Wireframing", "Information Architecture"],
    color: "from-cyan/20 to-mint/30",
    emoji: "🎓",
    link: "https://www.admitio.club",
  },
];

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-cyan/5 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Real projects with measurable impact on user experience and business outcomes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-card rounded-3xl border border-border overflow-hidden card-hover">
                {/* Project Preview */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      {project.emoji}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <ul className="mb-4 space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-2" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
