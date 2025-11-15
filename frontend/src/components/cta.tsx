"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#050913] text-center text-white">
      {/* Glowing radial aura background */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-[140px]"
      />

      {/* Enhanced Floating Orb Animation */}
      <motion.div
        initial={{ rotate: 0, y: 50, scale: 1 }}
        animate={{
          rotate: 360,
          y: [50, 80, 50], // up and down movement
          scale: [1, 1.05, 1], // subtle breathing effect
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[520px] opacity-90"
      >
        <Image
          src="/images/vlZ7bY9K7Lqx4NKEh9Y4sQHSs.avif"
          alt="3D Orb Animation"
          width={700}
          height={700}
          priority
          className="select-none pointer-events-none"
        />
      </motion.div>

      {/* CTA Content */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-6"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80"
        >
          <motion.span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-400"
            animate={{
              boxShadow: [
                "0 0 0px rgba(56,189,248,0)",
                "0 0 15px rgba(56,189,248,0.6)",
                "0 0 0px rgba(56,189,248,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            CY
          </motion.span>
          Cyra
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="max-w-3xl text-balance text-5xl font-bold leading-tight md:text-6xl"
        >
          Ready to transform your{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            engagement?
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-lg text-white/70 leading-relaxed"
        >
          Start your journey with a chatbot that adapts to your needs, scales
          with your business, and delights your customers.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 px-8 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            <Link href="/signup">Get Started →</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
