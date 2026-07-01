import { createFileRoute } from "@tanstack/react-router";
import { TrackDetail } from "@/components/site/track-detail";
import { CtaBand } from "@/components/site/cta-band";
import { TRACKS } from "@/lib/site";

export const Route = createFileRoute("/programs/storyready")({
  component: StoryReady,
});

const WEEKS = [
  "What makes a strong story? Story fundamentals and ethics.",
  "Interviewing and asking better questions.",
  "Phone video, photography, and audio basics.",
  "Editing, captions, and social storytelling.",
  "Community story project.",
  "Showcase and reflection.",
];

function StoryReady() {
  const track = TRACKS.find((t) => t.slug === "storyready")!;
  return (
    <>
      <TrackDetail track={track}>
        <h2 className="mt-12 text-2xl font-bold text-foreground">The StoryReady Skills Lab</h2>
        <p className="mt-3 text-muted-foreground">
          A six-week youth storytelling and media-skills lab, delivered through an existing youth-serving partner site.
          The partner brings youth, space, and trust; we bring curriculum, mentors, and project-based learning. Target
          cohort size: 10–15 youth.
        </p>
        <ol className="mt-6 space-y-3">
          {WEEKS.map((w, i) => (
            <li key={i} className="flex gap-4 rounded-xl border bg-card p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-story/15 font-display text-sm font-bold text-story">
                {i + 1}
              </span>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Week {i + 1}.</span> {w}
              </p>
            </li>
          ))}
        </ol>
        <h3 className="mt-10 text-xl font-bold text-foreground">What youth walk away with</h3>
        <p className="mt-3 text-muted-foreground">
          Youth-created story clips, photos, and short videos; a portfolio piece; a certificate of completion; and the
          confidence to keep telling stories that matter in their community.
        </p>
      </TrackDetail>
      <CtaBand />
    </>
  );
}
