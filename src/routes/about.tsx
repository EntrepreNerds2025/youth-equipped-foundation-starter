import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="We help young people get ready for what's next.">
        Youth Equipped is a youth-skills initiative built on a simple belief: talent is everywhere, but access isn't.
      </PageHero>
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-lg text-muted-foreground">
        <p>
          Young people are full of ideas, energy, and potential. What many don't have is consistent access to
          mentorship, hands-on experience, and the practical skills that turn potential into opportunity. Youth Equipped
          exists to close that gap.
        </p>
        <p>
          We run practical, project-based programs — starting with <span className="font-semibold text-foreground">StoryReady</span>,
          our storytelling and media lab — delivered right inside the schools, nonprofits, churches, and community
          centres young people already trust. Rather than build from scratch, we partner: they bring the youth, the
          space, and the relationships; we bring the curriculum, the mentors, and the projects.
        </p>
        <p>
          Storytelling comes first because it's where we're strongest, and because it's a gateway skill — it builds
          confidence, communication, and creativity that carry into every other track. Over time, Youth Equipped grows
          into a five-track system spanning storytelling, technology, work readiness, leadership, and creativity.
        </p>
        <p>
          Youth Equipped is an independent youth nonprofit. Some programs receive production, technology, and mentorship
          support from <span className="font-semibold text-foreground">Impact Loop</span>, a social-impact storytelling
          company — a relationship we disclose openly, never hide.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
