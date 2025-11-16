import { AIRecommendations } from "@/components/dashboard/AIRecommendations";
import { AlertsList } from "@/components/dashboard/AlertsList";
import { AnalyticsCards } from "@/components/dashboard/AnalyticsCards";
import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { dashboardConfig } from "@/data/content";

export default function DashboardPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dark flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="mb-8">
              <h1 className="text-foreground mb-2">{dashboardConfig.title}</h1>
              <p className="text-muted-foreground">
                Welcome back! Here&apos;s your security overview for today,
                {currentDate}
              </p>
            </div>

            <AnalyticsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AlertsList />

              <AIRecommendations />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
