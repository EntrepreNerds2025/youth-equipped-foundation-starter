import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/creative-circle")({
  component: CreativeCircle,
});

const ROLES = [
  { name: "Story Contributors", body: "Help casually with photos, editing, writing, captions, or content ideas." },
  { name: "Community Ambassadors", body: "Grow awareness, share stories, and make introductions in your community." },
  { name: "Volunteer Story Team", body: "Support community events, workshops, and behind-the-scenes content." },
  { name: "Workshop Facilitators", body: "Teach storytelling, video, photography, editing, AI tools, or public speaking." },
  { name: "Production Partners", body: "Paid contractors brought into funded projects when budgets allow." },
];

function CreativeCircle() {
  return (
    <>
      <PageHero eyebrow="Creative Circle" title="Lend your skills to the next generation.">
        The Creative Circle is our community of storytellers, creatives, and mentors who help young people build real
        skills.
      </PageHero>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {ROLES.map((r) => (
            <div key={r.name} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">{r.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-xl border bg-muted/50 p-5 text-sm text-muted-foreground">
          Some roles are volunteer and community-based; some are paid, project-based contractor opportunities when
          funding is available. We're clear upfront about expectations, compensation, credit, and how each person's work
          will be used.
        </div>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
            <Link to="/contact">Join the Creative Circle</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
