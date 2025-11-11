"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { workflowSteps } from "@/data/content";
import { cn } from "@/lib/utils";

export function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll-based fade + lift for main section
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionY = useTransform(scrollYProgress, [0, 0.3, 1], [50, 0, -50]);

  // Parallax glow
  const yGlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.3]);

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
    <motion.section
      id="workflow"
      ref={sectionRef}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="relative mx-auto mt-32 w-full max-w-6xl px-6 sm:px-8 lg:px-10"
    >
      {/* Floating background glow */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center text-center text-white mb-16"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400"
        >
          • How it works
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          Simple steps to{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            smarter customer engagement
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Discover how effortlessly you can integrate, customize, and optimize
          your AI chatbot to transform customer engagement.
        </motion.p>
      </motion.header>

      {/* Workflow Steps Grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr]"
      >
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(56,189,248,0.25)] flex flex-col",
              index === 0 ? "md:row-span-2" : ""
            )}
          >
            {/* Step number + title */}
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 font-bold text-lg"
              >
                {index + 1}
              </motion.span>
              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>
            </div>

            {/* Step description */}
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              {step.description}
            </p>

            {/* Step visual animation area (full image cover) */}
            <motion.div
              className={cn(
                "relative w-full overflow-hidden rounded-2xl bg-blue-900/20 flex-1 min-h-48",
                index === 0 ? "h-full mt-auto" : "h-48"
              )}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              {/* Full background image */}
              <motion.img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out hover:brightness-110"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050913]/30 to-[#050913]/70" />

              {/* Subtle glowing effect */}
              <motion.div
                className="absolute inset-0 bg-blue-500/10 blur-3xl"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />

              {/* Animated rotating highlight line */}
              {/* <motion.div
                className="absolute top-1/2 left-1/2 w-[200px] h-[2px] bg-linear-to-r from-transparent via-blue-400/50 to-transparent"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              /> */}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
