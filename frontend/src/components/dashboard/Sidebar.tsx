import {
  Shield,
  Activity,
  AlertTriangle,
  FileSearch,
  Settings,
  LayoutDashboard,
  Brain,
  Lock,
} from "lucide-react";
import { dashboardConfig, dashboardNavItems } from "@/data/content";

const iconMap = {
  Dashboard: LayoutDashboard,
  "Live Monitoring": Activity,
  Threats: AlertTriangle,
  Investigations: FileSearch,
  "AI Assistant": Brain,
  "Security Policies": Lock,
  Settings: Settings,
};

export function Sidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="w-8 h-8 text-primary" />
            <div
              className="absolute inset-0 blur-xl opacity-50 bg-primary"
            ></div>
          </div>
          <div>
            <h1 className="text-foreground font-bold text-xl">CYRA</h1>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.75rem" }}
            >
              GCP Security
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {dashboardNavItems.map((item) => {
          const Icon = iconMap[item.label as keyof typeof iconMap];
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? "text-primary bg-primary/10 border-l-4 border-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-semibold"
          >
            <span>{dashboardConfig.userInitials}</span>
          </div>
          <div className="flex-1">
            <p
              className="text-sidebar-foreground"
              style={{ fontSize: "0.875rem" }}
            >
              {dashboardConfig.userName}
            </p>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.75rem" }}
            >
              {dashboardConfig.userEmail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
