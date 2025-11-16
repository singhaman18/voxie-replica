// import { Sidebar } from "@/components/dashboard/Sidebar";
// import { Header } from "@/components/dashboard/Header";
import { AnalyticsCards } from "@/components/dashboard/AnalyticsCards";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { AIRecommendations } from "@/components/dashboard/AIRecommendations";

export function DashboardPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-white">
          CYRA Security Dashboard
        </h1>
        <p className="text-gray-300 mt-1">
          Welcome back! Here’s your security overview for today.
        </p>
      </div>

      <AnalyticsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AlertsList />
        <AIRecommendations />
      </div>
    </>
  );
}
