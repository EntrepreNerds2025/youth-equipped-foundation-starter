import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgramsWheel } from "@/components/site/programs-wheel";
import { TrackCard } from "@/components/site/track-card";
import { CtaBand } from "@/components/site/cta-band";
import { TRACKS } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-cyan">Youth Equipped</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Future-ready skills for the next generation.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              We help young people build real skills — starting with storytelling and media — through hands-on programs
              run with the schools, nonprofits, and community organizations they already trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-cyan text-brand-navy hover:bg-brand-cyan/90">
                <Link to="/programs">See our programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-navy">
                <Link to="/contact">Get involved</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <ProgramsWheel className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills open doors. Not every young person has the key.</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Plenty of young people have talent, ideas, and drive — but not the access, mentorship, or hands-on
          experience to turn that into real skills and opportunities. Youth Equipped closes that gap with practical,
          project-based learning delivered right inside the communities and programs youth already belong to.
        </p>
      </section>

      {/* What we do / wheel */}
      <section className="border-y bg-muted/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">One system. Five ways to grow.</h2>
            <p className="mt-4 text-muted-foreground">
              Youth Equipped is built around five hands-on tracks that equip the whole young person — to create, build,
              work, lead, and communicate. We're <span className="font-semibold text-foreground">starting with StoryReady</span>,
              our storytelling and media lab, and growing the rest as we do.
            </p>
            <p className="mt-4 font-display text-lg font-semibold text-brand-navy">Learn it. Build it. Use it.</p>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm md:order-2">
            <ProgramsWheel className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our programs</h2>
          <Link to="/programs" className="hidden items-center text-sm font-medium text-foreground hover:text-brand-cyan sm:inline-flex">
            All programs <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <TrackCard key={t.slug} track={t} />
          ))}
        </div>
      </section>

      {/* Two doors */}
      <section className="border-t bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground">For partner organizations</h3>
            <p className="mt-3 text-muted-foreground">
              Already serve youth? We bring the workshops, mentors, and project-based curriculum. You bring the young
              people, the space, and the trust.
            </p>
            <Button asChild className="mt-6 bg-brand-navy text-white hover:bg-brand-navy/90">
              <Link to="/partners">Bring a program to your youth</Link>
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h3 className="text-2xl font-bold text-foreground">For sponsors & funders</h3>
            <p className="mt-3 text-muted-foreground">
              Invest in youth skills and future readiness — and see the real impact, documented and told well.
            </p>
            <Button asChild className="mt-6 bg-brand-navy text-white hover:bg-brand-navy/90">
              <Link to="/sponsors">Sponsor a cohort</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Loop */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-lg text-muted-foreground">
          Youth Equipped is an independent youth nonprofit. Some programs receive production, technology, and mentorship
          support from <span className="font-semibold text-foreground">Impact Loop</span>, a social-impact storytelling
          company — disclosed openly.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
