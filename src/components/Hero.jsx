import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f0d]">
      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,\
      <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'>\
        <filter id=\'n\'>\
          <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
          <feColorMatrix type=\'saturate\' values=\'0\'/>\
        </filter>\
        <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/>\
      </svg>") }} />

      {/* Neon green radial glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-[160px]" />

      {/* 3D Spline hero */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 bg-gradient-to-b from-white via-emerald-100 to-emerald-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Let\'s Create Something Powerful
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto max-w-2xl text-emerald-100/80"
        >
          A cinematic, premium experience for visionary brands and elite AI video studios. Minimal, futuristic, and bold.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-emerald-500 px-8 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative">Start a Project</span>
          </a>
          <a
            href="#booking"
            className="relative inline-flex items-center justify-center rounded-xl border border-emerald-400/30 bg-white/5 px-8 py-3 text-sm font-semibold text-emerald-200 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/60 hover:bg-white/10 hover:text-white"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Neon gradient border frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-emerald-400/20 shadow-[0_0_0_1px_rgba(16,185,129,0.05),0_0_40px_rgba(16,185,129,0.15)_inset]" />
    </section>
  );
}
