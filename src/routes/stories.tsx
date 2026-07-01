import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/stories")({
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageHero eyebrow="Stories" title="The best stories are on their way.">
        Our first StoryReady cohort will fill this page with youth-created clips, spotlights, and behind-the-scenes
        moments.
      </PageHero>
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-lg text-muted-foreground">
          We're launching our first cohort soon. Want to help make these stories happen — as a partner site, a sponsor,
          or a mentor?
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-brand-navy text-white hover:bg-brand-navy/90"><Link to="/partners">Partner with us</Link></Button>
          <Button asChild variant="outline"><Link to="/sponsors">Sponsor a cohort</Link></Button>
        </div>
      </section>
    </>
  );
}
