import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <section className="w-full max-w-md rounded-lg border bg-card p-8 text-center shadow-sm">
        <h1 className="text-5xl font-semibold tracking-tight">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">Page not found.</p>
        <p className="mt-2 text-sm text-muted-foreground">{location.pathname}</p>
        <div className="mt-6">
          <Link to="/" className="text-primary underline underline-offset-4 hover:opacity-80">
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
