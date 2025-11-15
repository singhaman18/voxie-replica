"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Real-time Threat Detection",
    description:
      "Instantly detect misconfigurations, IAM anomalies, and critical risks across your entire GCP infrastructure.",
    icon: "/icons/threat.svg",
    gradient: "from-yellow-500/30 via-yellow-600/20 to-transparent",
    glow: "shadow-[0_0_50px_rgba(255,200,0,0.25)]",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Get intelligent, actionable recommendations powered by Cyra’s AI engine to resolve issues proactively.",
    icon: "/icons/ai.svg",
    gradient: "from-purple-500/30 via-purple-700/20 to-transparent",
    glow: "shadow-[0_0_60px_rgba(140,60,255,0.3)]",
  },
  {
    title: "Compliance & Audit Readiness",
    description:
      "Monitor security posture continuously and stay audit-ready with automated compliance scanning.",
    icon: "/icons/secure.svg",
    gradient: "from-green-500/30 via-green-700/20 to-transparent",
    glow: "shadow-[0_0_60px_rgba(0,255,180,0.3)]",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative mx-auto mt-32 w-full max-w-6xl px-6 text-white">
      
      {/* Background subtle stars */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/stars.png')] opacity-20"></div>

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-white/70"
      >
        Our benefits
      </motion.div>

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl"
      >
        Grow your cloud security posture with{" "}
        <span className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
          Cyra&apos;s intelligence
        </span>
      </motion.h2>

      {/* Cards Row */}
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {cards.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.04, y: -6 }}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl transition-all duration-500 ${item.glow}`}
          >
            {/* Gradient glow overlay */}
            <div
              className={`absolute inset-0 rounded-3xl bg-linear-to-br ${item.gradient} opacity-40`}
            ></div>

            {/* Floating highlight */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 right-0 h-24 w-40 rounded-full bg-white/10 blur-3xl"
            />

            {/* Icon */}
            <div className="relative z-10 mb-6 h-12 w-12 rounded-xl bg-white/10 p-3 backdrop-blur-lg">
              <Image src={item.icon} alt={item.title} width={40} height={40} />
            </div>

            {/* Title */}
            <h3 className="relative z-10 mb-2 text-lg font-semibold">{item.title}</h3>

            {/* Description */}
            <p className="relative z-10 text-sm text-white/70 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
