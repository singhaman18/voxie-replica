"use client";

import { motion } from "framer-motion";
import { trustedLogos } from "@/data/content";

export function TrustedSection() {
  return (
    <section className="relative mx-auto mt-28 w-full max-w-7xl px-6 sm:px-8 lg:px-10 text-white/80">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Heading */}
      <div className="mb-8 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50"
        >
          Trusted by leading teams worldwide
        </motion.span>
      </div>

      {/* Marquee Container */}
      <div className="relative flex h-16 items-center overflow-hidden">
        {/* Fading Edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent z-10" />

        {/* Infinite Marquee Animation */}
        <motion.div
          className="absolute flex w-max items-center gap-16 opacity-80"
          animate={{ x: [0, -800] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {[...trustedLogos, ...trustedLogos].map((logo, index) => (
            <motion.div
              key={`${logo.label}-${index}`}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-center gap-3 text-white/60 hover:text-white transition-all"
            >
              <span className="text-lg font-semibold opacity-70">
                {logo.initials}
              </span>
              <span className="text-base font-medium">{logo.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
