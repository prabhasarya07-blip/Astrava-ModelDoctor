/* ────────────────────────────────────────
   Header — Premium app header
   ──────────────────────────────────────── */

"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 flex items-center justify-between px-6 py-3.5 border-b border-white/[0.06] glass-strong"
    >
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/10">
          <div className="absolute inset-0 rounded-xl bg-accent-blue/10 blur-md" />
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" className="relative z-10">
            <path d="M14 2L26 8v12l-12 6L2 20V8l12-6z" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="14" r="4" fill="url(#logo-grad)" />
            <path d="M14 10v8M10 14h8" stroke="#0A0A14" strokeWidth="1.5" />
            <defs>
              <linearGradient id="logo-grad" x1="2" y1="2" x2="26" y2="26">
                <stop stopColor="#4285F4" />
                <stop offset="1" stopColor="#00DEB4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand */}
        <div>
          <h1 className="text-base font-bold tracking-tight">
            <span className="text-text-primary">Model</span>
            <span className="gradient-text">Doctor</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted font-medium">
            The MRI for your ML Pipeline
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="hidden sm:flex items-center gap-3 text-xs text-text-muted">
        <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-teal/[0.06] border border-accent-teal/10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-dot" />
          <span className="text-accent-teal/80 font-medium">Gemini 2.5 Flash</span>
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] font-medium">
          Team ASTROID
        </span>
      </div>
    </motion.header>
  );
}
