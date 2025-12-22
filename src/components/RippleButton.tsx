import { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleButton({ children, className = "", onClick, ...props }: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
    
    onClick?.(e);
  };

  return (
    <Button 
      className={`relative overflow-hidden ${className}`} 
      onClick={handleClick}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {children}
    </Button>
  );
}
