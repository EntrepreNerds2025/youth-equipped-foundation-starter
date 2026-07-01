import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/partners")({
  component: Partners,
});

const WE = ["Workshops & project-based curriculum", "Trained facilitators & mentors", "Equipment and storytelling frameworks", "Documentation of the impact for your funders"];
const YOU = ["The young people", "A space to meet", "Community trust & relationships", "A staff contact to coordinate"];

function Partners() {
  return (
    <>
      <PageHero eyebrow="For Partners" title="Bring a hands-on skills program to your youth.">
        Youth Equipped partners with organizations that already serve young people — schools, nonprofits, churches, and
        community centres — and adds hands-on skills programming.
      </PageHero>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8">
            <h2 className="text-xl font-bold text-foreground">We bring</h2>
            <ul className="mt-4 space-y-3">
              {WE.map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-8">
            <h2 className="text-xl font-bold text-foreground">You bring</h2>
            <ul className="mt-4 space-y-3">
              {YOU.map((x) => (
                <li key={x} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-14 text-2xl font-bold text-foreground">How it works</h2>
        <ol className="mt-6 space-y-4">
          {[
            "Reach out and tell us about the youth you serve.",
            "We plan a StoryReady cohort together and confirm dates, space, and consent.",
            "We deliver the six-week lab with your young people.",
            "We share a documented recap you can use with your community and funders.",
          ].map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy font-display text-sm font-bold text-white">{i + 1}</span>
              <p className="pt-1 text-muted-foreground">{s}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
            <Link to="/contact">Start the conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
