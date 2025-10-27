import { NavLink } from "react-router-dom";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-display text-lg font-semibold">
          Muqeeth Mohammad
        </NavLink>
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/projects" className={linkClass} end>
            Projects
          </NavLink>
          <NavLink to="/blog" className={linkClass} end>
            Blog
          </NavLink>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/Muqeeth194"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://www.linkedin.com/in/muqeethahmed/"
              target="_blank"
              rel="noopener noreferrer"
              // className="story-link inline-flex items-center gap-1 text-sm "
              aria-label="LinkedIn profile"
            >
              <Linkedin className="mr-1" /> LinkedIn
            </a>
          </Button>
        </div>

        {/* Mobile Toggle button */}
        <Button asChild variant="outline" size="sm">
          <a
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </a>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink
              to="/projects"
              className={linkClass}
              onClick={closeMenu}
              end
            >
              Projects
            </NavLink>
            <NavLink to="/blog" className={linkClass} onClick={closeMenu} end>
              Blog
            </NavLink>
            <Button asChild variant="outline" size="sm" className="w-full">
              <a
                href="https://github.com/Muqeeth194"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <Github className="mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-full">
              <a
                href="https://www.linkedin.com/in/muqeethahmed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                onClick={closeMenu}
              >
                <Linkedin className="mr-1" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
