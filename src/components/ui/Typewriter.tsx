import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  cursor?: boolean;
}

const Typewriter = ({ text, speed = 40, className, cursor = true }: TypewriterProps) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplay("");
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) {
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span className={className} aria-live="polite">
      <span>{display}</span>
      {cursor && (
        <span
          aria-hidden
          className="inline-block ml-1 w-px h-[1em] align-middle bg-foreground/60 animate-pulse"
        />
      )}
    </span>
  );
};

export default Typewriter;
