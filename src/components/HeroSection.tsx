import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

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
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-40 -left-40 w-96 h-96 bg-gradient-blob opacity-60" />
        <div className="blob-2 absolute top-1/4 -right-32 w-80 h-80 bg-gradient-blob opacity-50" />
        <div className="blob absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-blob opacity-40" style={{ animationDelay: "2s" }} />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-[15%] w-4 h-4 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/3 right-[20%] w-6 h-6 rounded-lg bg-cyan/30 animate-float-slow rotate-45" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-[25%] w-3 h-3 rounded-full bg-mint animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-[15%] w-8 h-8 rounded-full border-2 border-primary/20 animate-float-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/3 right-[30%] w-5 h-5 rounded-lg bg-sky/40 animate-float rotate-12" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container max-w-6xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Open for freelance work
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
            Hi, I'm{" "}
            <span className="gradient-text">Avtar</span>
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 opacity-0 animate-slide-up stagger-2">
            Crafting Digital Experiences
          </p>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up stagger-3">
            UI/UX Designer skilled in research, prototyping, and responsive design,
            <span className="text-foreground font-medium"> seeking to create impactful digital experiences</span>
            <span className="text-muted-foreground"> with measurable outcomes.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up stagger-4">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm font-body">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce-soft group-hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
}
