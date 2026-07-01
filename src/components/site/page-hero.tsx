import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b bg-brand-navy text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-cyan">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        {children ? <div className="mt-5 max-w-2xl text-lg text-slate-300">{children}</div> : null}
      </div>
    </section>
  );
}
