import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { ProgramsWheel } from "@/components/site/programs-wheel";
import { TrackCard } from "@/components/site/track-card";
import { CtaBand } from "@/components/site/cta-band";
import { TRACKS } from "@/lib/site";

export const Route = createFileRoute("/programs/")({
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero eyebrow="Programs" title="Equipping the whole young person.">
        Five hands-on tracks that help youth create, build, work, lead, and communicate. Ready for life. Ready for work.
        Ready for what's next.
      </PageHero>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm">
          <ProgramsWheel className="h-auto w-full" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Our programs grow with our youth.</h2>
          <p className="mt-4 text-muted-foreground">
            StoryReady is live now. TechReady, WorkReady, LeadReady, and CreateReady are rolling out as we grow — each a
            hands-on track in the skills that matter next. Every track is delivered in partnership with organizations
            that already serve young people.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <TrackCard key={t.slug} track={t} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
