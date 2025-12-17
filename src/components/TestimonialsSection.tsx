import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "Avtar's attention to detail and creative problem-solving made our project a huge success. The final product exceeded our expectations in every way.",
    avatar: "👩‍💼",
  },
  {
    name: "Michael Rodriguez",
    role: "Founder, StartupXYZ",
    content: "Working with Avtar was an absolute pleasure. They understood our vision immediately and delivered a stunning design that perfectly captured our brand.",
    avatar: "👨‍💻",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    content: "The UI/UX improvements Avtar implemented increased our conversion rates by 40%. Highly recommend their services to anyone looking for quality work.",
    avatar: "👩‍🎨",
  },
  {
    name: "David Park",
    role: "CTO at InnovateTech",
    content: "Avtar combines technical expertise with creative flair. They delivered clean, maintainable code alongside beautiful designs. A true full-stack talent.",
    avatar: "👨‍🔬",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Feedback from clients and collaborators I've had the pleasure to work with
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="reveal max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-3xl">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="font-body text-muted-foreground">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-xl"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Background testimonials preview */}
        <div className="hidden lg:flex justify-center gap-6 mt-12 opacity-50">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                index === activeIndex
                  ? "bg-transparent scale-0"
                  : "bg-card/50 hover:bg-card"
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
