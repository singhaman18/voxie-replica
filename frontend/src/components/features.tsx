"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { featureCards } from "@/data/content"; // 👈 ensure this includes image/type fields

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  // Parallax glow on scroll
  const yGlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.4]);

  // Fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative mx-auto mt-32 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      {/* Parallax Glow Aura */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]"
      />

      {/* Section Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex flex-col items-center text-center text-white"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400"
        >
          • Features
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          Explore features that{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            empower your business
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Seamlessly integrate advanced Voxia technology into any platform with
          modular building blocks designed for support, sales, and success
          teams.
        </motion.p>
      </motion.header>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featureCards.map((card) => (
          <motion.article
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.98 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(56,189,248,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-white/0 p-8 shadow-xl shadow-black/20 backdrop-blur-lg transition-all duration-500"
          >
            {/* 🖼 Background Image for first two cards */}
            {card.image && (
              <div className="absolute inset-0 -z-10">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 transition duration-700"
                />
              </div>
            )}

            {/* Card Content */}
            <span className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
              {card.badge}
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-white transition-colors group-hover:text-sky-400">
              {card.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {card.description}
            </p>

            {/* Hover Glow Accent */}
            <motion.div
              className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-sky-500/20 blur-3xl opacity-0 group-hover:opacity-70 transition duration-700"
              animate={{ rotate: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
