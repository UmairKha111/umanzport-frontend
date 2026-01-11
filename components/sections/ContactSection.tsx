"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "Full Stack Development",
  message: "",
};

const services = [
  "Full Stack Development",
  "Website Design & UI/UX",
  "Digital Marketing",
  "Social Media Management",
  "Branding & Identity",
  "Maintenance & Support",
];

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    phone: false,
    service: false,
    message: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!isEmailValid(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.message.trim()) e.message = "Please write a short message.";
    else if (form.message.trim().length < 20)
      e.message = "Please write at least 20 characters.";

    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onBlur = (key: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

 const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setTouched({
    name: true,
    email: true,
    phone: true,
    service: true,
    message: true,
  });

  if (hasErrors) return;

  try {
    setStatus("loading");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    setStatus("success");
    setForm(initialState);
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  return (
    <section className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Let’s Talk About Your <span className="text-[#fd9c52]">Project</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Tell us what you’re building. We’ll respond with the right approach,
            timeline, and budget guidance — no confusion.
          </p>

          <div className="mt-10 space-y-6 text-gray-700">
            <div className="border-l-4 border-[#fd9c52] pl-5">
              <p className="font-semibold text-black">Email</p>
              <p className="text-gray-600">umanztechnology@gmail.com</p>
            </div>

            <div className="border-l-4 border-[#fd9c52] pl-5">
              <p className="font-semibold text-black">Phone</p>
              <p className="text-gray-600">+91 7052568655</p>
            </div>

            <div className="border-l-4 border-[#fd9c52] pl-5">
              <p className="font-semibold text-black">Office</p>
              <p className="text-gray-600">
               I I M Road Lucknow, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 border border-black/10 rounded-2xl p-6">
            <p className="font-semibold text-black">Typical Response Time</p>
            <p className="mt-2 text-gray-600">
              Within 24 hours (Mon–Sunday). If it’s urgent, mention “URGENT” in your message.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-black/10 rounded-3xl p-10 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-black">Send a Message</h2>
          <p className="mt-2 text-gray-600">
            Share details. The more context, the better our response.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-black">Full Name</label>
              <input
                value={form.name}
                onChange={(e) => onChange("name", e.target.value)}
                onBlur={() => onBlur("name")}
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none focus:border-[#F58220]"
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-black">Email</label>
              <input
                value={form.email}
                onChange={(e) => onChange("email", e.target.value)}
                onBlur={() => onBlur("email")}
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none focus:border-[#F58220]"
                placeholder="you@company.com"
              />
              {touched.email && errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-black">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                onBlur={() => onBlur("phone")}
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none focus:border-[#F58220]"
                placeholder="+91 XXXXX XXXXX"
              />
              {touched.phone && errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="text-sm font-medium text-black">
                Service Required
              </label>
              <select
                value={form.service}
                onChange={(e) => onChange("service", e.target.value)}
                onBlur={() => onBlur("service")}
                className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 text-black outline-none focus:border-[#F58220] bg-white"
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-black">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                onBlur={() => onBlur("message")}
                className="mt-2 w-full min-h-[140px] rounded-xl border border-black/15 px-4 py-3 text-black outline-none focus:border-[#F58220]"
                placeholder="Tell us about your project, goals, timeline, and anything important..."
              />
              {touched.message && errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Status */}
            {status === "success" && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">
                Message sent successfully. We’ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-700">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#fd9c52] text-white font-semibold py-4 hover:opacity-90 transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to be contacted regarding this inquiry.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
