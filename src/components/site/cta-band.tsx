import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="bg-brand-cyan">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          Let's equip the next generation together.
        </h2>
        <p className="max-w-2xl text-brand-navy/80">
          Whether you serve youth, want to sponsor a cohort, or want to mentor — there's a door for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
            <Link to="/partners">Bring a program to your youth</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white">
            <Link to="/sponsors">Sponsor a cohort</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
