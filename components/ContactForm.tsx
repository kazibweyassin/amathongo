"use client";

import { useActionState, useEffect } from "react";
import { submitConsultation } from "@/lib/contact-action";
import { initialContactState } from "@/lib/contact-types";
import { enquiryTopics } from "@/lib/site";

function track(name: string) {
  const win = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push({ event: name });
  win.gtag?.("event", name);
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitConsultation, initialContactState);

  useEffect(() => {
    if (state.status === "sent" || state.status === "not_delivered") {
      track("contact_form_submit");
    }
  }, [state.status]);

  const done = state.status === "sent" || state.status === "not_delivered";

  return (
    <form id="enquiry" action={action} className="space-y-5" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message ? (
        <p role={state.status === "invalid" || state.status === "failed" ? "alert" : "status"} className="border border-line bg-cream px-4 py-3 text-bark">
          {state.message}
        </p>
      ) : null}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={80}
          aria-invalid={Boolean(state.fieldErrors.name)}
          aria-describedby={state.fieldErrors.name ? "name-error" : undefined}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink"
        />
        {state.fieldErrors.name ? (
          <p id="name-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-ink">
          Phone <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={24}
          aria-invalid={Boolean(state.fieldErrors.phone)}
          aria-describedby={state.fieldErrors.phone ? "phone-error" : undefined}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink"
        />
        {state.fieldErrors.phone ? (
          <p id="phone-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
          aria-invalid={Boolean(state.fieldErrors.email)}
          aria-describedby={state.fieldErrors.email ? "email-error" : undefined}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink"
        />
        {state.fieldErrors.email ? (
          <p id="email-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-semibold text-ink">
          Concern
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          aria-invalid={Boolean(state.fieldErrors.topic)}
          aria-describedby={state.fieldErrors.topic ? "topic-error" : undefined}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink"
        >
          <option value="" disabled>
            Choose one
          </option>
          {enquiryTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {state.fieldErrors.topic ? (
          <p id="topic-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.topic}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={2000}
          rows={6}
          aria-invalid={Boolean(state.fieldErrors.message)}
          aria-describedby={state.fieldErrors.message ? "message-error" : "message-hint"}
          className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink"
        />
        <p id="message-hint" className="mt-2 text-sm text-muted">
          A short account is enough. Do not include passwords, bank details, or copies of identity documents.
        </p>
        {state.fieldErrors.message ? (
          <p id="message-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-bark" htmlFor="consent">
          <input id="consent" name="consent" type="checkbox" value="yes" className="mt-1" required />
          <span>
            Please contact me about this healing.
          </span>
        </label>
        {state.fieldErrors.consent ? (
          <p id="consent-error" className="mt-2 text-sm text-clay">
            {state.fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary" disabled={pending || done}>
        {pending ? "Sending…" : "Request the Healing"}
      </button>
      <p className="text-sm text-muted">Your message is used only to reply to this enquiry.</p>
    </form>
  );
}
