"use client";

import { motion, Variants } from "framer-motion";
import { CloudCog, Shield, FileSearch, Wrench } from "lucide-react";

const steps = [
  {
    title: "Connect GCP Project",
    desc: "Securely authenticate and sync your cloud environment.",
    icon: <CloudCog className="h-6 w-6 text-sky-400" />,
  },
  {
    title: "Scan Workloads",
    desc: "Cyra analyzes APIs, workloads, permissions, and posture.",
    icon: <Shield className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "Insights & Reports",
    desc: "Detailed AI insights, compliance checks, and threat paths.",
    icon: <FileSearch className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Fix Issues",
    desc: "Get guided remediation steps and continuous monitoring.",
    icon: <Wrench className="h-6 w-6 text-green-400" />,
  },
];

/* -------------------------
   Variants
-------------------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.35 },
  },
};

const makeCardVariant = (isLeft: boolean): Variants => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -120 : 120,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const dotPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

const numberPop: Variants = {
  hidden: { scale: 0.4, opacity: 0, y: -10 },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

/* -------------------------
   COMPONENT
-------------------------- */

export function WorkflowSection() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#050913] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <h2
          className="text-center text-5xl md:text-6xl font-bold 
                       bg-linear-to-r from-sky-400 via-blue-500 to-purple-500 
                       bg-clip-text text-transparent"
        >
          How Cyra Works
        </h2>

        <p className="text-center text-white/60 max-w-2xl mx-auto mt-6">
          A clean 4-step workflow showing Cyra’s full AI-powered security
          process.
        </p>

        {/* TIMELINE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-20"
        >
          {/* CENTER LINE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute left-1/2 top-0 bottom-0 w-[3px] origin-top 
                       bg-linear-to-b from-sky-400 via-blue-500 to-purple-500 opacity-70 
                       transform -translate-x-1/2 z-0"
          />

          {/* STEPS */}
          <div className="space-y-32">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  variants={makeCardVariant(isLeft)}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* DOT */}
                  <motion.div
                    variants={dotPop}
                    className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full 
                               bg-linear-to-br from-sky-400 to-purple-500 
                               shadow-[0_0_14px_rgba(120,80,255,0.6)]
                               transform -translate-x-1/2 -translate-y-1/2
                               z-10"
                  />

                  {/* CONNECTOR */}
                  <motion.div
                    variants={lineGrow}
                    className={`
                      absolute top-1/2 h-[3px] origin-left bg-linear-to-r
                      from-sky-400 to-purple-500/70
                      ${isLeft ? "right-[50%]" : "left-[50%]"}
                      z-0
                    `}
                    style={{
                      width: `calc(50% - 160px)`,
                    }}
                  />

                  {/* CARD */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.03,
                      boxShadow: "0 0 25px rgba(130,100,255,0.35)",
                      borderColor: "rgba(255,255,255,0.25)",
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`
                      w-[360px] p-6 rounded-2xl shadow-xl 
                      bg-white/10 backdrop-blur-xl border border-white/20
                      flex gap-4 items-start relative
                      ${isLeft ? "mr-32" : "ml-32"}
                      z-20
                    `}
                  >
                    {/* NUMBER BADGE */}
                    <motion.div
                      variants={numberPop}
                      className="absolute -top-4 left-0 px-3 py-1 rounded-full 
                                 bg-linear-to-r from-sky-400 to-purple-500 
                                 text-xs font-bold shadow-md"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>

                    {/* ICON WITH HOVER ANIMATION */}
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      }}
                      className="p-3 rounded-full bg-white/10 border border-white/20"
                    >
                      {step.icon}
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
