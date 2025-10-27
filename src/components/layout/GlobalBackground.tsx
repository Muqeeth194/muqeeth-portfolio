import React, { useEffect, useState } from "react";
import { Boxes, Cpu, Database, Cloud, Terminal, Server, Braces, MessageSquare, Leaf, GitBranch, Atom, Globe, CircuitBoard, Binary, Package } from "lucide-react";

const GlobalBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const floatingIcons: { Comp: React.ComponentType<any>; className: string; factor: number; size: number }[] = [
    { Comp: Boxes, className: "left-6 top-24 text-primary/30", factor: 0.06, size: 32 },
    { Comp: Cpu, className: "right-8 top-32 text-accent-foreground/20", factor: -0.04, size: 28 },
    { Comp: Database, className: "left-1/3 bottom-16 text-muted-foreground/30", factor: 0.03, size: 36 },
    { Comp: Cloud, className: "right-1/4 bottom-24 text-primary/25", factor: -0.05, size: 40 },
    { Comp: Terminal, className: "right-10 top-1/2 text-accent-foreground/30", factor: 0.02, size: 32 },
    { Comp: Server, className: "right-1/3 top-20 text-muted-foreground/25", factor: 0.04, size: 30 },
    { Comp: Braces, className: "left-1/4 top-10 text-accent-foreground/20", factor: 0.05, size: 28 },
    { Comp: MessageSquare, className: "right-14 bottom-10 text-muted-foreground/25", factor: -0.02, size: 30 },
    { Comp: Leaf, className: "left-8 bottom-24 text-accent-foreground/25", factor: 0.03, size: 28 },
    { Comp: GitBranch, className: "left-1/2 top-28 text-muted-foreground/25", factor: 0.02, size: 28 },
    { Comp: Atom, className: "right-1/2 bottom-28 text-accent-foreground/25", factor: -0.03, size: 34 },
    { Comp: Globe, className: "right-1/4 top-1/4 text-primary/20", factor: -0.01, size: 30 },
    { Comp: CircuitBoard, className: "right-8 top-10 text-muted-foreground/20", factor: 0.03, size: 26 },
    { Comp: Binary, className: "left-4 top-40 text-accent-foreground/20", factor: -0.02, size: 26 },
    { Comp: Package, className: "right-1/3 bottom-8 text-primary/25", factor: 0.02, size: 26 },
  ];

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      {/* Static dark background, no fading/animation */}
      <div className="absolute inset-0 bg-background" />

      {/* Global floating tech icons across the entire site */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0">
          {floatingIcons.map((item, i) => {
            const Icon = item.Comp;
            return (
              <div key={i} className={`floating absolute ${item.className}`}>
                <Icon size={item.size} style={{ transform: `translateY(${scrollY * item.factor}px)` }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle dark overlay to ensure consistent darker shade */}
      <div className="bg-overlay-dark absolute inset-0" />
    </div>
  );
};

export default GlobalBackground;
