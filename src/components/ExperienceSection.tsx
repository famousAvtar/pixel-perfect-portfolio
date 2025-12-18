import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "UX Designer",
    company: "Incredipets",
    location: "Gurugram",
    period: "Oct 2025 - Present",
    current: true,
    responsibilities: [
      "Built and enhanced visually appealing, responsive websites with optimized speed, SEO readiness, and consistent brand-centric UI/UX execution",
      "Partnered with marketing and development teams to convert concepts into interactive designs while staying updated on latest design innovations"
    ],
  },
  {
    title: "UI UX Designer",
    company: "EpiCred",
    location: "Gurugram",
    period: "May 2024 - Oct 2025",
    current: false,
    responsibilities: [
      "Led end-to-end UX design for more than 3 projects, including user research, wireframing, prototyping, and usability testing",
      "Created scalable design systems with reusable components and design tokens in Figma, improving developer handoff and product consistency"
    ],
  },
];

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl -translate-y-1/2" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            My professional journey in design and development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`reveal relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <div className="bg-card rounded-3xl p-6 border border-border shadow-card hover:border-primary/30 transition-colors">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="font-body text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Briefcase className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
