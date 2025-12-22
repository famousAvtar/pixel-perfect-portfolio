import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/avtarsingh99" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/avtar-singh-73a888235" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/worldofavtar" },
];

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-blob opacity-40" />
        <div className="blob-2 absolute -top-20 -right-20 w-72 h-72 bg-gradient-blob opacity-30" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Create Something
              <span className="gradient-text"> Amazing</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to discussing 
              new opportunities, creative ideas, or ways to help bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:avtar.singh.design@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-secondary transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground hover:text-primary transition-colors">avtar.singh.design@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Gurugram, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-body text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href="https://behance.net/worldofavtar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                  aria-label="Behance"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.987 1.458 2.59 2.69 2.59 1.168 0 1.878-.46 2.128-1.56H22.4c-.257.824-.741 1.536-1.474 2zm-5.438-6.324c-.991 0-1.634.512-1.907 1.324h3.724c-.152-.866-.731-1.324-1.817-1.324zM8.69 6.207H1v11.586h7.747c2.4 0 4.315-1.057 4.315-3.536 0-1.533-.834-2.555-2.008-2.994 1.043-.433 1.586-1.34 1.586-2.544 0-2.13-1.505-2.512-3.95-2.512zm-.23 8.67H3.89v-2.896h4.446c1.053 0 1.731.516 1.731 1.448 0 .93-.533 1.448-1.606 1.448zm-.184-5.105H3.89V7.554h4.393c.878 0 1.38.383 1.38 1.17 0 .678-.436 1.048-1.388 1.048z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-card">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
