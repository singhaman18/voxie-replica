"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/content";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth background transitions on scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0.9]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.15], [0.1, 0.3]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Full frosted glass effect
  const headerBg = useMotionTemplate`rgba(0, 0, 0, ${backgroundOpacity})`;
  const headerShadow = useMotionTemplate`0px 20px 50px rgba(0,0,0, ${shadowOpacity})`;

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleNavigate = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 w-full px-6 pt-4 backdrop-blur-2xl backdrop-saturate-200 transition-all"
      style={{
        backgroundColor: headerBg,
        boxShadow: headerShadow,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-7xl relative">
        {/* Scroll Progress Bar */}
        <motion.span
          className="absolute left-0 top-0 h-[1.5px] w-full origin-left bg-linear-to-r from-primary/40 via-sky-400/60 to-transparent"
          style={{ scaleX: progressScale }}
        />

        {/* Navbar content */}
        <motion.div className="flex items-center justify-between gap-6 rounded-2xl bg-transparent px-6 py-3 md:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={handleNavigate}
          >
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/40"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <motion.span
                className="text-lg font-semibold text-primary"
                animate={{ rotate: [0, 12, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                VX
              </motion.span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.3em] text-white/70">
                Cyra
              </span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                AI PLATFORM
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <motion.nav
            className="hidden items-center gap-8 rounded-full bg-black px-10 py-3 text-base text-white/80 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:flex"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.15, staggerChildren: 0.06 },
              },
            }}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname?.startsWith(link.href);
              return (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: -8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="relative px-3 py-1 rounded-md font-semibold transition-all duration-300 hover:text-white"
                    onClick={handleNavigate}
                  >
                    <motion.span
                      className={`relative z-10 ${
                        isActive
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </motion.span>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-md bg-linear-to-r from-sky-500/10 via-sky-400/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    />

                    {/* Underline */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-linear-to-r from-transparent via-sky-400 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <motion.div
              className="hidden md:inline-flex"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button
                asChild
                className="rounded-full bg-linear-to-r from-primary to-sky-400 px-6 py-2 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(56,189,248,0.25)] transition-all hover:shadow-[0_22px_45px_rgba(56,189,248,0.35)]"
              >
                <Link href="#pricing" onClick={handleNavigate}>
                  Get Started →
                </Link>
              </Button>
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-lg md:hidden"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mt-24 flex flex-1 flex-col gap-6 px-8"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={handleNavigate}
                    className="flex items-center justify-between rounded-2xl bg-black px-4 py-3 text-lg font-semibold text-white/90 hover:bg-sky-500/10 transition"
                  >
                    <span>{link.label}</span>
                    <motion.span
                      className="text-sm text-white/50"
                      initial={{ x: -4, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      ↗
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-linear-to-r from-primary to-sky-400 text-base font-semibold text-slate-900 shadow-[0_18px_40px_rgba(56,189,248,0.25)] hover:shadow-[0_22px_45px_rgba(56,189,248,0.35)]"
                >
                  <Link href="#pricing" onClick={handleNavigate}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
