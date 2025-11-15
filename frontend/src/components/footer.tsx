"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Reports", href: "/reports" },
      { label: "Projects", href: "/projects" },
      { label: "Settings", href: "/settings" },
      { label: "Connect GCP Project", href: "/projects/connect" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Pre-Seed Program", href: "/#program" },
      { label: "Security", href: "/#security" },
      { label: "Infrastructure", href: "/#infrastructure" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Setup Guide (GCP)", href: "/docs/gcp-setup" },
      { label: "Vulnerability Types", href: "/docs/vulnerabilities" },
      { label: "Remediation Steps", href: "/docs/remediation" },
      { label: "Support", href: "/support" },
    ],
  },
];

export function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full border-t border-white/10 bg-[#050913] text-white overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.2)_0%,transparent_70%)] blur-[160px]"
      />

      {/* Outer full-width wrapper */}
      <div className="w-full px-6 md:px-8 py-20">
        {/* Inner centered container */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between"
        >
          {/* Brand Info */}
          <motion.div variants={fadeUp} className="space-y-5 max-w-sm">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/80 hover:text-white/50 cursor-pointer"
            >
              Cyra
            </motion.div>

            <div className="flex gap-4 pt-2">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                >
                  <Link
                    href="#"
                    className="text-white/60 hover:text-white transition"
                    aria-label={Icon.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
            {footerLinks.map((section) => (
              <motion.div key={section.title} variants={fadeUp}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative inline-block transition text-white/70 hover:text-white"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-linear-to-r from-blue-400 to-sky-500 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp} className="my-10">
          <Separator className="border-white/10" />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUp}
          className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row"
        >
          <p>© Cyra {new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/legal/terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/legal/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/legal/cookies" className="hover:text-white transition">
              Cookies
            </Link>
            <Link
              href="/signup"
              className="ml-4 text-blue-400 hover:text-white font-semibold transition"
            >
              Get Started →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
