import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_EMAIL } from "@/lib/site";
import { sendContact } from "@/lib/send-contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const ROLES = [
  "A youth-serving organization (partner)",
  "A sponsor or funder",
  "A creative or mentor",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

function Contact() {
  const [role, setRole] = useState(ROLES[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContact({ data: { name, email, org, role, message } });
      setStatus("sent");
      setName("");
      setEmail("");
      setOrg("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <>
        <PageHero eyebrow="Contact & Apply" title="Thank you — message sent.">
          We've received your note and will be in touch soon.
        </PageHero>
        <section className="mx-auto max-w-2xl px-6 py-16">
          <Button onClick={() => setStatus("idle")} className="bg-brand-navy text-white hover:bg-brand-navy/90">
            Send another message
          </Button>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="Contact & Apply" title="Let's talk.">
        Whether you serve youth, want to sponsor a cohort, or want to mentor — tell us a little about you and we'll be in
        touch.
      </PageHero>
      <section className="mx-auto max-w-2xl px-6 py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="role">I'm reaching out as</Label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1.5" />
            </div>
          </div>
          <div>
            <Label htmlFor="org">Organization (optional)</Label>
            <Input id="org" value={org} onChange={(e) => setOrg(e.target.value)} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="mt-1.5" />
          </div>
          {status === "error" ? (
            <p className="text-sm text-destructive">
              Something went wrong sending your message. Please email us directly at{" "}
              <a href={"mailto:" + CONTACT_EMAIL} className="underline">{CONTACT_EMAIL}</a>.
            </p>
          ) : null}
          <Button type="submit" size="lg" disabled={status === "sending"} className="bg-brand-navy text-white hover:bg-brand-navy/90">
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
          <p className="text-xs text-muted-foreground">
            Prefer email? Write us at <a href={"mailto:" + CONTACT_EMAIL} className="underline">{CONTACT_EMAIL}</a>.
          </p>
        </form>
      </section>
    </>
  );
}
