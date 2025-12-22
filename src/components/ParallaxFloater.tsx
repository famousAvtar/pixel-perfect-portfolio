import { useEffect, useState } from "react";

interface ParallaxFloaterProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxFloater({ children, speed = 0.1, className = "" }: ParallaxFloaterProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      setOffset({
        x: x * 50 * speed,
        y: y * 50 * speed,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [speed]);

  return (
    <div
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
}
