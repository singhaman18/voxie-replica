"use client";

import { BellIcon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header
      className="
        w-full h-16 
        bg-[#111827]
        border-b border-white/10
        shadow-[0_2px_25px_rgba(99,102,241,0.15)]
        flex items-center justify-between
        px-8
      "
    >
      {/* Search */}
      <input
        placeholder="Search threats, alerts, or ask CYRA..."
        className="
          w-96 px-4 py-2 rounded-xl
          bg-white/5 border border-white/10
          text-white placeholder-white/40
          focus:ring-2 ring-purple-500/40
          outline-none
        "
      />

      <div className="flex items-center gap-6">
        <button className="relative">
          <BellIcon className="w-6 h-6 text-white/70 hover:text-white transition cursor-pointer" />
        </button>

        {/* System Secure */}
        <div
          className="
            px-4 py-2 rounded-xl 
            bg-linear-to-r from-blue-500 to-purple-500 
            text-white text-sm font-medium
            shadow-[0_0_15px_rgba(99,102,241,0.4)]
          "
        >
          System Secure
        </div>

        {/* User */}
        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 font-semibold cursor-pointer">
          AD
        </div>
      </div>
    </header>
  );
}
