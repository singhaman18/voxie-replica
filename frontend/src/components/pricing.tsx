"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

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

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    blurb: "Start small",
    price: 15,
    yearlyPrice: 10,
    popular: false,
    features: [
      "Essential chatbot capabilities to get you started",
      "Communicate in 10+ languages",
      "Seamless connection with platforms like WordPress & Shopify",
      "Up to 1,000 monthly conversations",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "Scale your capabilities",
    price: 85,
    yearlyPrice: 70,
    popular: true,
    features: [
      "Advanced automation and customization tools",
      "Communicate in 50+ languages",
      "Compatible with all major CRMs and APIs",
      "Up to 10,000 monthly conversations",
      "In-depth insights with exportable reports",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "Do more with enterprise",
    price: 125,
    yearlyPrice: 100,
    popular: false,
    features: [
      "Full access to all advanced functionalities",
      "Communicate in 100+ languages",
      "Tailored AI workflows for unique business needs",
      "No conversation limits — scale as needed",
      "Priority onboarding & dedicated account manager",
      "Deep-learning analytics for business insights",
    ],
  },
];

export function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const plans = useMemo(() => {
    return pricingPlans.map((plan) => ({
      ...plan,
      displayPrice: cycle === "monthly" ? plan.price : plan.yearlyPrice,
      cadence: cycle === "monthly" ? "per month" : "per month (billed yearly)",
      cta: cycle === "monthly" ? "Start Free Trial" : "Talk to Sales",
    }));
  }, [cycle]);

  return (
    <section
      id="pricing"
      className="relative mx-auto mt-32 w-full max-w-6xl px-6 sm:px-8 lg:px-10"
    >
      {/* Subtle glow background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute -top-32 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]"
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
          • Pricing
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mt-5 text-4xl font-bold leading-tight md:text-5xl"
        >
          Choose the right plan{" "}
          <span className="bg-linear-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            for your buisness
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-2xl text-lg text-white/70"
        >
          Flexible pricing built for startups, teams, and enterprises — scale
          your automation confidently.
        </motion.p>

        {/* Billing toggle */}
        <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-sm font-medium shadow-lg shadow-blue-500/5 backdrop-blur-xl">
          {(["monthly", "yearly"] as BillingCycle[]).map((item) => (
            <button
              key={item}
              onClick={() => setCycle(item)}
              className={cn(
                "relative rounded-full px-6 py-2 transition-all duration-300",
                cycle === item
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  : "text-white/60 hover:text-white"
              )}
            >
              {item === "monthly" ? "Monthly" : "Yearly"}
            </button>
          ))}
        </div>
      </motion.header>

      {/* Pricing Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mt-16 grid gap-8 md:grid-cols-3"
      >
        <AnimatePresence mode="wait">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.id + cycle}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 25px 45px rgba(56,189,248,0.25), 0 0 30px rgba(59,130,246,0.2)",
              }}
              className={cn(
                "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-10 backdrop-blur-xl transition-all duration-500",
                plan.popular &&
                  "border-blue-500/40 bg-linear-to-b from-blue-600/10 via-blue-600/5 to-transparent shadow-[0_0_25px_rgba(37,99,235,0.3)]"
              )}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute right-6 top-6 rounded-full border border-blue-500/40 bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Title + Price */}
              <div className="space-y-3 text-white">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                    {plan.blurb}
                  </span>
                  <h3 className="text-2xl font-semibold mt-1">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">
                    ${plan.displayPrice}
                  </span>
                  <span className="text-sm text-white/60">{plan.cadence}</span>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="mt-6"
              >
                <Button
                  className={cn(
                    "w-full rounded-full py-3 text-sm font-semibold transition-all duration-300",
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30"
                      : "bg-white text-black hover:bg-blue-50"
                  )}
                >
                  {plan.cta} →
                </Button>
              </motion.div>

              {/* Features */}
              <ul className="mt-8 space-y-4 text-sm text-white/70">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
