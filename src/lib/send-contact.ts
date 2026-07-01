import { createServerFn } from "@tanstack/react-start";

export type ContactInput = {
  name: string;
  email: string;
  org: string;
  role: string;
  message: string;
};

// Where submissions are delivered. Change to a shared inbox anytime.
const TO_ADDRESS = "camesha.russell03@gmail.com";
// Must be on a domain verified in your Resend account (impactloop.ca).
// Once youthequipped.ca is verified in Resend, switch this to it.
const FROM_ADDRESS = "Youth Equipped <youthequipped@impactloop.ca>";

export const sendContact = createServerFn({ method: "POST" })
  .validator((data: ContactInput) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Email is not configured yet (missing RESEND_API_KEY).");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [TO_ADDRESS],
        reply_to: data.email,
        subject: `Youth Equipped enquiry — ${data.role}`,
        text:
          `Name: ${data.name}\n` +
          `Email: ${data.email}\n` +
          `Organization: ${data.org || "—"}\n` +
          `Reaching out as: ${data.role}\n\n` +
          `${data.message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      throw new Error(`Resend error ${res.status}: ${detail}`);
    }

    return { ok: true as const };
  });
