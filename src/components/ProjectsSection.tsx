import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Redesign",
    description: "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["React", "Figma", "Tailwind CSS"],
    color: "from-primary/20 to-cyan/20",
    emoji: "🛍️",
  },
  {
    title: "Finance Dashboard",
    description: "Modern dashboard for tracking personal finances with data visualization and insights.",
    tags: ["TypeScript", "Chart.js", "UI/UX"],
    color: "from-cyan/20 to-mint/30",
    emoji: "📊",
  },
  {
    title: "Health & Wellness App",
    description: "Mobile-first web application for tracking health goals and daily wellness activities.",
    tags: ["Next.js", "Framer Motion", "Design System"],
    color: "from-mint/20 to-sky/20",
    emoji: "🏃‍♂️",
  },
  {
    title: "Creative Portfolio",
    description: "An artistic portfolio website for a photographer featuring immersive galleries.",
    tags: ["GSAP", "Three.js", "Creative Dev"],
    color: "from-sky/20 to-primary/20",
    emoji: "📸",
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
            A selection of projects that showcase my skills in design and development
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
                  <p className="font-body text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

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
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 reveal">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
