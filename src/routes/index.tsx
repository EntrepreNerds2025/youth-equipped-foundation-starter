import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Youth Equipped
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Coming soon — empowering the next generation.
      </p>
    </div>
  );
}
