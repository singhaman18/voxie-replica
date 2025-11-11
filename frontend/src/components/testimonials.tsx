"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { testimonials } from "@/data/content";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.25]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);
  const sectionY = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -40]);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  } as const;

  return (
    <motion.section
      id="testimonials"
      ref={sectionRef}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="relative mx-auto mt-32 w-full max-w-6xl space-y-12 px-6 sm:px-8 lg:px-10"
    >
      {/* Floating glow background */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]"
      />

      {/* Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center text-center text-white"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400"
        >
          • Testimonials
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          See what our customers are saying{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            about our platform
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Discover how businesses worldwide are enhancing customer engagement,
          saving time, and driving growth with our intelligent chatbot solutions.
        </motion.p>
      </motion.header>

      {/* Testimonial Card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(56,189,248,0.05)]"
      >
        {/* Glow orbs */}
        <motion.div
          className="absolute -left-16 top-10 hidden h-32 w-32 rounded-full bg-blue-500/20 blur-3xl sm:block"
          animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 bottom-10 hidden h-32 w-32 rounded-full bg-sky-400/10 blur-3xl sm:block"
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-3">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                className="h-10 w-10 rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="h-10 w-10 rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Testimonial Content */}
          <div className="relative h-full min-h-[260px] flex-1">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.name}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex h-full flex-col gap-6"
              >
                <Quote className="h-10 w-10 text-sky-400" />
                <h3 className="text-2xl font-semibold text-white">
                  {current.headline}
                </h3>
                <p className="text-lg leading-relaxed text-white/70">
                  {current.quote}
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-3">
                  {current.image ? (
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={48}
                      height={48}
                      className="rounded-full border border-white/20 object-cover"
                    />
                  ) : (
                    <Avatar className="h-12 w-12 border border-white/20 bg-white/10 text-white">
                      <AvatarFallback>
                        {current.name
                          .split(" ")
                          .map((part) => part.charAt(0))
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">
                      {current.name}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                      {current.handle}
                    </span>
                    <span className="text-xs text-white/60">
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, dotIndex) => (
            <motion.button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative"
            >
              <motion.span
                initial={false}
                animate={{
                  width: index === dotIndex ? "2rem" : "0.75rem",
                  backgroundColor:
                    index === dotIndex
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-2 rounded-full"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
