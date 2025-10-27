import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-background">
      <Helmet>
        <title>Page Not Found — Muqeeth Mohammad</title>
        <meta name="description" content="The page you’re looking for doesn’t exist." />
        <link rel="canonical" href="/404" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <Link to="/" className="story-link text-primary">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
