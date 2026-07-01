import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Track } from "@/lib/site";

export function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      to={"/programs/" + track.slug}
      className="group relative flex flex-col rounded-2xl border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <span className={"mb-4 inline-block h-2 w-12 rounded-full " + track.bg} />
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-foreground">{track.name}</h3>
        {track.status === "live" ? (
          <span className="rounded-full bg-work/15 px-2 py-0.5 text-xs font-semibold text-work">Live</span>
        ) : (
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">Roadmap</span>
        )}
      </div>
      <p className={"mt-1 text-sm font-medium " + track.tw}>{track.tagline}</p>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{track.summary}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground">
        Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
