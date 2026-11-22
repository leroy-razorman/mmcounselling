"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

/**
 * Front-end only for now. Until the backend exists, submitting opens the
 * visitor's email app with their message addressed to the practice.
 * TODO(backend): replace handleSubmit with a POST to the enquiries endpoint.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = `${get("first")} ${get("last")}`.trim();
    const lines = [get("message"), "", `Name: ${name}`, `Email: ${get("email")}`];
    if (get("phone")) lines.push(`Phone: ${get("phone")}`);
    const body = lines.join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <span className="form-title">Send a message</span>
      <div className="form-grid">
        <label className="form-label">
          First name *
          <input className="field" type="text" name="first" required autoComplete="given-name" />
        </label>
        <label className="form-label">
          Last name *
          <input className="field" type="text" name="last" required autoComplete="family-name" />
        </label>
        <label className="form-label">
          Email *
          <input className="field" type="email" name="email" required autoComplete="email" />
        </label>
        <label className="form-label">
          Phone
          <input className="field" type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label className="form-label">
        How can we help you?
        <textarea className="field" name="message" rows={5} />
      </label>
      <button className="btn btn-primary btn-submit" type="submit">
        Submit
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {sent && (
          <>
            Your email app should have opened with your message ready to send. If it didn’t, email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </>
        )}
      </p>
    </form>
  );
}
