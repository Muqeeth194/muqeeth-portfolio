import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { Github, Link as LinkIcon } from "lucide-react";

const FeaturedProjects = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <header className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <a className="story-link" href="/projects">View all</a>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0,3).map((p) => (
          <Card key={p.slug} className="overflow-hidden hover-scale animate-enter">
            <img src={p.image} alt={`${p.title} project screenshot`} loading="lazy" className="w-full h-40 object-cover" />
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={p.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2" /> Code
                </a>
              </Button>
              {p.liveUrl && (
                <Button asChild variant="soft" size="sm">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    <LinkIcon className="mr-2" /> Live
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
