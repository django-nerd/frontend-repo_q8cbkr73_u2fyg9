import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Calendar, Phone, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#070a08] py-24">
      {/* subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(600px_circle_at_80%_80%,rgba(16,185,129,0.06),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 bg-gradient-to-b from-white to-emerald-300 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl"
        >
          Partner With A Studio That Delivers
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: Socials and booking */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                <Phone size={18} />
              </div>
              <div>
                <h3 className="text-white">Let's talk</h3>
                <p className="text-sm text-emerald-100/70">We respond within 24 hours</p>
              </div>
            </div>

            <div className="mb-6 space-y-3 text-emerald-100/80">
              <a href="mailto:studio@eliteavision.com" className="group flex items-center gap-3 rounded-lg border border-emerald-400/10 bg-black/30 px-4 py-3 transition hover:border-emerald-400/40">
                <Mail size={18} className="text-emerald-300" />
                <span className="group-hover:text-white">studio@eliteavision.com</span>
              </a>
              <a href="#booking" className="group flex items-center gap-3 rounded-lg border border-emerald-400/10 bg-black/30 px-4 py-3 transition hover:border-emerald-400/40">
                <Calendar size={18} className="text-emerald-300" />
                <span className="group-hover:text-white">Book a strategy call</span>
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-emerald-200 transition hover:scale-105 hover:border-emerald-400/60 hover:text-white">
                <Instagram size={18} />
              </a>
              <a aria-label="Twitter" href="https://twitter.com" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-emerald-200 transition hover:scale-105 hover:border-emerald-400/60 hover:text-white">
                <Twitter size={18} />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-white/5 text-emerald-200 transition hover:scale-105 hover:border-emerald-400/60 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <div className="mb-4">
              <label className="mb-2 block text-sm text-emerald-100">Your name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-emerald-400/20 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/50 focus:border-emerald-400/60"
                placeholder="Jane Cooper"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-emerald-100">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-emerald-400/20 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/50 focus:border-emerald-400/60"
                placeholder="you@company.com"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-emerald-100">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-emerald-400/20 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-emerald-100/50 focus:border-emerald-400/60"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-emerald-400/30 bg-emerald-500/90 px-5 py-3 font-semibold text-black transition-all hover:scale-[1.02] hover:bg-emerald-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {loading ? (
                <span className="flex items-center gap-2 text-black">
                  <MiniLoader /> Sending
                </span>
              ) : (
                <span className="flex items-center gap-2 text-black">
                  <Send size={16} /> Send message
                </span>
              )}
            </button>

            {success && (
              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-200">
                Thanks — your message has been received. We\'ll be in touch shortly.
              </div>
            )}
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp/contact button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-black shadow-[0_10px_30px_rgba(16,185,129,0.5)] transition hover:scale-105"
        aria-label="Quick contact"
      >
        <MessageCircle size={22} />
      </a>
    </section>
  );
}

function MiniLoader() {
  return (
    <span className="relative inline-block h-4 w-4">
      <span className="absolute inset-0 rounded-full bg-neutral-700" />
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/80" />
      <span className="absolute inset-[3px] rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)_inset]" />
    </span>
  );
}
