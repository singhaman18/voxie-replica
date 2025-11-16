"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  Cog6ToothIcon,
  ExclamationTriangleIcon,
  BoltIcon, // Import BoltIcon
} from "@heroicons/react/24/outline";

export function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
    { name: "Live Monitoring", href: "/dashboard/live-monitoring", icon: ChartBarIcon },
    { name: "Threats", href: "/dashboard/threats", icon: ExclamationTriangleIcon },
    { name: "Investigations", href: "/dashboard/investigations", icon: ShieldCheckIcon },
    { name: "AI Assistant", href: "/dashboard/ai-assistant", icon: CpuChipIcon },
    { name: "Security Policies", href: "/dashboard/policies", icon: BoltIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
  ];

  return (
    <aside
      className="
        w-64 h-screen
        bg-[#0F1624]
        border-r border-white/10
        shadow-[4px_0_25px_rgba(99,102,241,0.15)]
        flex flex-col
        p-6
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="
          w-10 h-10 cursor-pointer rounded-xl 
          bg-linear-to-br from-blue-500 to-purple-500 
          shadow-[0_0_15px_rgba(99,102,241,0.5)]
        "></div>
        <div>
          <h1 className="text-xl font-bold text-white cursor-pointer">CYRA</h1>
          <p className="text-xs text-white/50">GCP Security</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menu.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3
                rounded-xl text-sm font-medium
                transition
                ${active
                  ? "bg-linear-to-r from-purple-600/50 to-blue-600/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="mt-auto p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-300 font-semibold">
            AD
          </div>
          <div>
            <p className="text-white font-medium">Admin User</p>
            <p className="text-white/50 text-sm">admin@cyra.ai</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
