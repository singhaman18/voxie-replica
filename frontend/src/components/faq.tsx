"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { useRef } from "react";

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.25]);
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 0.9]
  );
  const sectionY = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -40]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.section
      id="faq"
      ref={sectionRef}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="relative mx-auto mt-32 w-full max-w-6xl space-y-12 px-6 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[120px]"
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
          • FAQs
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          Frequently asked{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            questions
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Find quick and clear answers to the most common questions about our AI
          Cyra platform.
        </motion.p>
      </motion.header>

      {/* Accordion Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(56,189,248,0.05)]"
      >
        <Accordion
          type="single"
          collapsible
          className="grid gap-4 md:grid-cols-2"
        >
          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent px-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-blue-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-white/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Footer Contact */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-6 py-4 text-center text-sm text-white"
        >
          Have more questions?{" "}
          <a
            href="mailto:hello@cyra.com"
            className="ml-2 font-medium text-blue-400 underline underline-offset-2 hover:text-blue-300"
          >
            hello@cyra.com
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
