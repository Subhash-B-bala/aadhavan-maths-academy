"use client";

import { useState, useRef } from "react";

const CLASS_OPTIONS = [
  "Class 6", "Class 7", "Class 8", "Class 9",
  "Class 10", "Class 11", "Class 12",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgkod";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) errs.name = "Please enter your full name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 12)
      errs.phone = "Enter a valid 10-digit phone number.";
    if (message.length < 5) errs.message = "Please add a short message.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3" aria-hidden="true">✅</div>
        <h3
          className="text-xl font-bold text-[#1B4332] mb-2"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Message sent!
        </h3>
        <p className="text-[#555555]">
          We&apos;ll get back to you within 2 hours to schedule your free demo class.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <input
        ref={honeypotRef}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          Full Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="e.g. Karthik Sundar"
          className={`w-full rounded-lg border px-4 py-3 text-sm text-[#1A1A1A] bg-white placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition ${
            errors.name ? "border-red-400" : "border-[#E8E4DC]"
          }`}
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          Phone Number <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="e.g. 98765 43210"
          className={`w-full rounded-lg border px-4 py-3 text-sm text-[#1A1A1A] bg-white placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition ${
            errors.phone ? "border-red-400" : "border-[#E8E4DC]"
          }`}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>

      {/* Class */}
      <div>
        <label htmlFor="class" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          Class / Standard
        </label>
        <select
          id="class"
          name="class"
          className="w-full rounded-lg border border-[#E8E4DC] px-4 py-3 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition"
        >
          <option value="">Select a class</option>
          {CLASS_OPTIONS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your child's current level, which board, or any questions you have…"
          className={`w-full rounded-lg border px-4 py-3 text-sm text-[#1A1A1A] bg-white placeholder:text-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition resize-none ${
            errors.message ? "border-red-400" : "border-[#E8E4DC]"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {state === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please call us directly at{" "}
          <a href="tel:+919790495049" className="underline font-semibold">+91 97904 95049</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-[#1B4332] hover:bg-[#0D2818] disabled:opacity-60 text-white font-bold py-4 rounded-lg transition-colors text-sm"
      >
        {state === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      <p className="text-center text-xs text-[#555555]">
        We typically reply within 2 hours.
      </p>
    </form>
  );
}
