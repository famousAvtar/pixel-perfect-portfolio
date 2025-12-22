import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { ParallaxFloater } from "@/components/ParallaxFloater";
import { MagneticButton } from "@/components/MagneticButton";
import { RippleButton } from "@/components/RippleButton";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Light decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-16 w-48 h-48 bg-cyan/10 rounded-full blur-2xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <MagneticButton strength={15}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-8 animate-scale-in hover:bg-accent transition-colors">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-soft" />
              <span className="text-sm font-medium text-accent-foreground">
                Open for freelance work
              </span>
            </div>
          </MagneticButton>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
            Hi, I'm{" "}
            <span className="gradient-text hover:animate-wiggle inline-block cursor-default">Avtar</span>
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 opacity-0 animate-slide-up stagger-2">
            Frontend Developer & UX Designer
          </p>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up stagger-3">
            Frontend Developer & UX Designer building
            <span className="text-foreground font-medium"> pixel-perfect, accessible interfaces</span>
            <span className="text-muted-foreground"> with React, TypeScript & modern web tech.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up stagger-4">
            <MagneticButton strength={25}>
              <RippleButton variant="hero" size="xl" onClick={scrollToProjects}>
                View My Work
              </RippleButton>
            </MagneticButton>
            <MagneticButton strength={25}>
              <Button variant="outline" size="lg" onClick={scrollToContact} className="hover-glow">
                Get in Touch
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <MagneticButton strength={20}>
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-body">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce-soft group-hover:text-primary transition-colors" />
          </button>
        </MagneticButton>
      </div>
    </section>
  );
}
