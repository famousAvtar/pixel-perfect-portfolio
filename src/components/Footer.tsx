import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Avtar<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Avtar. Made with
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse-soft" />
            and lots of coffee
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-body text-sm text-muted-foreground hover:text-foreground link-underline transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
