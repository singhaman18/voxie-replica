/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, LogIn, Cloud, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -----------------------------------------------------
   Typing effect component
------------------------------------------------------ */
const TypingText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 2.2,
        ease: "easeInOut"
      }}
      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-transparent"
    >
      {text}
    </motion.span>
  );
};

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-28 md:py-40 text-white select-none">

      {/* Background Grid */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-20 bg-[url('/grid.svg')] opacity-[0.12]"
      />

      {/* Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(90,80,255,0.3),transparent_65%)] blur-[140px]"
      />

      <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center gap-10">

        {/* Badges */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Badge icon={<Cloud className="h-3.5 w-3.5" />} text="CLOUD ACCELERATED" />
          <Badge icon={<Shield className="h-3.5 w-3.5" />} text="SECURITY FOCUSED" />
          <Badge icon={<Cpu className="h-3.5 w-3.5" />} text="AI-NATIVE" />
        </motion.div>

        {/* === MAIN TAGLINE — NO MOVEMENT NOW === */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl font-extrabold sm:text-6xl md:text-7xl leading-tight"
        >
          Cyra – Your AI{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient inline-block">
            <TypingText text="Cybersecurity Co-Pilot" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-lg text-white/70 md:text-xl leading-relaxed"
        >
          AI-powered cybersecurity assistant that detects threats instantly,
          responds autonomously, and augments your security team in real time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <HoverButton
            gradient
            icon={<ArrowRight className="h-4 w-4" />}
            text="Get Started"
          />
          <HoverButton
            type="login"
            icon={<LogIn className="h-4 w-4" />}
            text="Login"
          />
          <HoverButton
            type="terminal"
            icon={<Terminal className="h-4 w-4" />}
            text="Live Terminal"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -----------------------------------------------------
   Badge Component
------------------------------------------------------ */
function Badge({ icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
      className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-md"
    >
      {icon}
      {text}
    </motion.div>
  );
}

/* -----------------------------------------------------
   HoverButton
------------------------------------------------------ */
function HoverButton({
  text,
  icon,
  gradient = false,
  type,
}: {
  text: string;
  icon: any;
  gradient?: boolean;
  type?: "login" | "terminal" | "default";
}) {
  const loginStyle =
    "cursor-pointer rounded-full px-8 py-6 text-base font-semibold text-white bg-[#1a1f2e] border border-blue-400/30 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-blue-300/60";

  const terminalStyle =
    "cursor-pointer rounded-full px-8 py-6 text-base font-semibold text-white bg-[#2a153d] border border-purple-400/30 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-purple-300/60";

  const defaultOutline =
    "cursor-pointer rounded-full px-8 py-6 text-base text-white border-white/25 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/50";

  const gradientStyle =
    "cursor-pointer rounded-full px-8 py-6 text-base font-semibold text-black bg-gradient-to-r from-blue-500 to-purple-600 transition-all hover:brightness-110";

  const chooseStyle = gradient
    ? gradientStyle
    : type === "login"
    ? loginStyle
    : type === "terminal"
    ? terminalStyle
    : defaultOutline;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
    >
      <Button size="lg" className={chooseStyle}>
        <span className="flex items-center gap-2">
          {icon}
          {text}
        </span>
      </Button>
    </motion.div>
  );
}
