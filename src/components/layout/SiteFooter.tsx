import { Mail, Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Muqeeth Mohammad</p>
        <nav className="flex items-center gap-4">
          <a href="/projects" className="story-link">
            Projects
          </a>
          <a href="/blog" className="story-link">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="mailto:muqeeth44@gmail.com"
            className="story-link inline-flex items-center gap-1"
            aria-label="Email Muqeeth"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/muqeethahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="story-link inline-flex items-center gap-1"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
