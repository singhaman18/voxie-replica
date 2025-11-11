"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { benefitCards } from "@/data/content";

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  // Parallax + smooth motion values
  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), {
    stiffness: 90,
    damping: 20,
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.15, 0.4]);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative mx-auto mt-32 w-full max-w-6xl px-6 sm:px-8 lg:px-10"
    >
      {/* Floating glow background */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end md:justify-between text-white mb-16 relative z-10"
      >
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            • Benefits
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Tailored{" "}
            <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              benefits
            </span>{" "}
            for every need
          </h2>
        </div>
        <p className="mt-4 max-w-md text-white/70 md:mt-0">
          Discover how effortlessly you can integrate, customize, and optimize
          your AI chatbot to transform customer engagement.
        </p>
      </motion.header>

      {/* Main grid */}
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 items-center z-10">
        {/* Left side - Benefit cards */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefitCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
                backgroundColor: "rgba(37,99,235,0.08)",
                boxShadow:
                  "0 20px 40px rgba(56,189,248,0.25), 0 0 20px rgba(37,99,235,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className={`group relative rounded-2xl border border-white/10 bg-linear-to-br from-white/5 via-white/5 to-transparent p-6 backdrop-blur-lg transition-all duration-500 ${
                index === 0
                  ? "border-blue-500/30 bg-linear-to-r from-blue-600/10 via-blue-600/5 to-transparent shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                  : "hover:border-blue-400/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-lg font-semibold ${
                    index === 0
                      ? "text-white"
                      : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    index === 0
                      ? "text-white/90"
                      : "text-white/60 group-hover:text-white/80"
                  }`}
                >
                  {card.description}
                </p>
              </div>
              {/* Inner hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-linear-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-700"
                animate={{ rotate: [0, 360] }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Right side - Parallax Image */}
        <motion.div
          style={{ y: yImage }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-transparent to-transparent shadow-xl shadow-blue-900/40"
          >
            <Image
              src="/images/tVeZOu4aOIN6u5KpBJwfnw1TLEk.avif"
              alt="AI collaboration team"
              width={550}
              height={400}
              className="h-full w-full object-cover rounded-3xl"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
