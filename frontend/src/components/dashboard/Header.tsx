import { Search, Bell, ChevronDown } from "lucide-react";
import * as React from "react";
import { Badge } from "../ui/badge";
import { dashboardConfig } from "@/data/content";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search threats, alerts, or ask CYRA..."
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-accent rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span
            className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary"
          ></span>
        </button>

        {/* Status Badge */}
        <Badge
          className="border border-primary/50 bg-primary/10 text-primary"
        >
          System Secure
        </Badge>

        {/* User Menu */}
        <button className="flex items-center gap-2 hover:bg-accent rounded-lg px-3 py-2 transition-colors">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground"
          >
            <span style={{ fontSize: "0.75rem" }}>{dashboardConfig.userInitials}</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
