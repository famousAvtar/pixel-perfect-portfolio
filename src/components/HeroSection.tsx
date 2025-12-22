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
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-40 -left-40 w-96 h-96 bg-gradient-blob opacity-60" />
        <div className="blob-2 absolute top-1/4 -right-32 w-80 h-80 bg-gradient-blob opacity-50" />
        <div className="blob absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-blob opacity-40" style={{ animationDelay: "2s" }} />
        
        {/* Interactive floating shapes that follow mouse */}
        <ParallaxFloater speed={0.3} className="absolute top-1/4 left-[15%]">
          <div className="w-4 h-4 rounded-full bg-primary/30 animate-float" />
        </ParallaxFloater>
        <ParallaxFloater speed={-0.2} className="absolute top-1/3 right-[20%]">
          <div className="w-6 h-6 rounded-lg bg-cyan/30 animate-float-slow rotate-45" />
        </ParallaxFloater>
        <ParallaxFloater speed={0.4} className="absolute bottom-1/4 left-[25%]">
          <div className="w-3 h-3 rounded-full bg-mint animate-float" />
        </ParallaxFloater>
        <ParallaxFloater speed={-0.3} className="absolute top-1/2 right-[15%]">
          <div className="w-8 h-8 rounded-full border-2 border-primary/20 animate-float-slow animate-spin-slow" />
        </ParallaxFloater>
        <ParallaxFloater speed={0.2} className="absolute bottom-1/3 right-[30%]">
          <div className="w-5 h-5 rounded-lg bg-sky/40 animate-float rotate-12" />
        </ParallaxFloater>
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
