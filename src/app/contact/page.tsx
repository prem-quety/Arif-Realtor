"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      phone: HTMLInputElement;
      message: HTMLTextAreaElement;
      company: HTMLInputElement; // honeypot
    };
    if (form.company?.value?.trim()) return;

    const data = new FormData(form);
    setLoading(true);
    try {
      const r = await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(r.ok ? "ok" : "err");
      if (r.ok) form.reset();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-background text-heading">
      {/* HERO */}
      <section className="relative isolate">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/luxury-home.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_70%_20%,rgba(193,151,62,0.18),transparent_60%)] mix-blend-screen" />
        <div className="mx-auto w-full max-w-7xl px-6 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-white">
              Speak with Arif
            </h1>
            <p className="mt-3 text-white/85">
              Discreet, same-day response. Mississauga & GTA.
            </p>
            <div className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="mx-auto max-w-7xl px-6 pb-24 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* FORM CARD */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-6 md:p-10"
          >
            <h2 className="font-serif text-3xl">Let’s begin</h2>
            <p className="mt-2 text-muted">
              Share a few details. I’ll reply today.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" />
              {/* Honeypot */}
              <input
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="md:col-span-2">
                <Field
                  label="Message"
                  name="message"
                  as="textarea"
                  rows={6}
                  required
                />
              </div>
            </div>

            {/* helpers */}
            <input type="hidden" name="_subject" value="New inquiry" />

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="rounded-md bg-accent px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(193,151,62,0.35)] hover:brightness-110 transition disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message"}
              </button>
              {status === "ok" && (
                <span className="rounded-md bg-emerald-50 text-emerald-700 px-3 py-2 text-sm ring-1 ring-emerald-200">
                  Sent. I’ll get back today.
                </span>
              )}
              {status === "err" && (
                <span className="rounded-md bg-rose-50 text-rose-700 px-3 py-2 text-sm ring-1 ring-rose-200">
                  Couldn’t send. Try again.
                </span>
              )}
            </div>
          </motion.form>

          {/* SIDEBAR CARD */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-2 rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-black/10 shadow-[0_20px_80px_rgba(0,0,0,0.12)] p-6 md:p-10"
          >
            <h3 className="font-serif text-2xl">Direct contact</h3>
            <div className="mt-4 space-y-3 text-[15px]">
              <p>
                <span className="text-muted">Email</span>
                <br />
                <a
                  href="mailto:info@arifrealtor.com"
                  className="inline-block underline decoration-accent/70 underline-offset-4 text-heading hover:opacity-90"
                >
                  info@arifrealtor.com
                </a>
              </p>
              <p>
                <span className="text-muted">Phone</span>
                <br />
                <a
                  href="tel:+19050000000"
                  className="text-heading hover:opacity-90"
                >
                  +1 (905) 000-0000
                </a>
              </p>
              <p>
                <span className="text-muted">Office</span>
                <br />
                Mississauga, ON
              </p>
            </div>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <p className="mt-6 text-sm text-muted">
              Hours: Mon–Sat, 9am–7pm. Same-day response.
            </p>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

/* Elegant field with premium styling (inline utilities) */
function Field({ label, name, as, required, type = "text", rows = 4 }: any) {
  const base =
    "w-full rounded-xl bg-white/80 ring-1 ring-black/10 px-4 py-3 outline-none transition shadow-[0_2px_12px_rgba(0,0,0,0.04)] placeholder:text-muted/70 hover:bg-white focus:bg-white focus:ring-2 focus:ring-accent";
  return (
    <label className="block">
      <span className="text-sm tracking-wide text-muted">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          className={`mt-2 ${base}`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className={`mt-2 ${base}`}
        />
      )}
    </label>
  );
}
