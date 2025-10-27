import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Typewriter from "@/components/ui/Typewriter";
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden group"
    >
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-enter max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <Typewriter
                text="Building reliable web experiences."
                speed={40}
              />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              I’m Muqeeth Mohammad, a full‑stack developer specializing in
              React, Node.js, and scalable architectures.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="hero"
                size="xl"
                className="hover-scale btn-glow"
              >
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="hover-scale btn-glow"
              >
                <a href="mailto:muqeeth44@gmail.com">
                  <Mail className="mr-2" /> Contact Me
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="hover-scale btn-glow"
              >
                <a
                  href="muqeeth-portfolio/Muqeeth_Mohammad_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <FileText className="mr-2" /> View Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end pr-9">
            <div
              aria-hidden
              className="absolute -z-10 h-72 w-72 md:h-[25rem] md:w-[25rem] rounded-full blur-3xl bg-primary/25"
            />
            <div className="h-[230px] w-[230px] md:h-72 md:w-72 lg:h-[346px] lg:w-[346px] rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="/muqeeth-portfolio/uploads/f08fbee7-d342-4337-bc76-a5f0e36ba3ee.png"
                alt="Muqeeth Mohammad professional profile photo"
                className="h-full w-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 230px, (max-width: 1024px) 288px, 346px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
