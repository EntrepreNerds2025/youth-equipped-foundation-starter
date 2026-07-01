import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import type { Track } from "@/lib/site";

export function TrackDetail({ track, children }: { track: Track; children?: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={track.status === "live" ? "Program · Live now" : "Program · On the roadmap"} title={track.name}>
        {track.tagline}
      </PageHero>
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-lg text-muted-foreground">{track.summary}</p>
        <h2 className="mt-10 text-2xl font-bold text-foreground">What youth do</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {track.activities.map((a) => (
            <li key={a} className="flex items-start gap-2 text-sm">
              <Check className={"mt-0.5 h-4 w-4 shrink-0 " + track.tw} />
              <span>{a}</span>
            </li>
          ))}
        </ul>
        {track.status === "roadmap" ? (
          <div className="mt-10 rounded-xl border bg-muted/50 p-5 text-sm text-muted-foreground">
            {track.name} is on our roadmap. We're launching with StoryReady first and adding tracks as our capacity and
            funding grow. Want to help bring {track.name} to life sooner?{" "}
            <Link to="/sponsors" className="font-medium text-foreground underline">Sponsor a track</Link> or{" "}
            <Link to="/contact" className="font-medium text-foreground underline">get in touch</Link>.
          </div>
        ) : null}
        {children}
      </section>
    </>
  );
}
