import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { SPONSOR_TIERS } from "@/lib/site";

export const Route = createFileRoute("/sponsors")({
  component: Sponsors,
});

function Sponsors() {
  return (
    <>
      <PageHero eyebrow="For Sponsors & Funders" title="Invest in youth skills. See the impact.">
        Sponsoring Youth Equipped is a practical way to invest in young people's future readiness — and, because
        storytelling is what we do, you get the impact documented and told well.
      </PageHero>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {SPONSOR_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={
                "rounded-2xl border bg-card p-8 " +
                (tier.featured ? "ring-2 ring-brand-cyan" : "")
              }
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                {tier.featured ? (
                  <span className="rounded-full bg-brand-cyan/15 px-2 py-0.5 text-xs font-semibold text-brand-cyan">Most popular</span>
                ) : null}
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-brand-navy">{tier.amount}</p>
              <p className="mt-3 text-sm text-muted-foreground">{tier.perks}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Sponsorship supports our programs directly and is typically treated by companies as a community-investment or
          marketing expense. Amounts are in CAD and can be tailored — let's find the right fit.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-brand-navy text-white hover:bg-brand-navy/90">
            <Link to="/contact">Talk to us about sponsoring</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
