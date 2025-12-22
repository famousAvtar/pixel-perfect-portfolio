import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      trailId++;
      setTrail(prev => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Clean up old trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-6));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary/30 hidden md:block"
          style={{
            left: particle.x,
            top: particle.y,
            width: 8 + index * 1.5,
            height: 8 + index * 1.5,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length * 0.5,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer ring */}
        <div
          className={`absolute rounded-full border-2 border-primary transition-all duration-200 ease-out ${
            isPointer ? "w-12 h-12 bg-primary/10" : "w-8 h-8"
          } ${isClicking ? "scale-75" : "scale-100"}`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Inner dot */}
        <div
          className={`absolute w-2 h-2 rounded-full bg-primary transition-all duration-150 ${
            isClicking ? "scale-150" : "scale-100"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
}
