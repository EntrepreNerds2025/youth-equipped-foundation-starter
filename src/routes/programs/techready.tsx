import { createFileRoute } from "@tanstack/react-router";
import { TrackDetail } from "@/components/site/track-detail";
import { CtaBand } from "@/components/site/cta-band";
import { TRACKS } from "@/lib/site";

export const Route = createFileRoute("/programs/techready")({
  component: TrackPage,
});

function TrackPage() {
  const track = TRACKS.find((t) => t.slug === "techready")!;
  return (
    <>
      <TrackDetail track={track} />
      <CtaBand />
    </>
  );
}
