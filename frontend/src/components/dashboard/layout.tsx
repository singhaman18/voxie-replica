import {Sidebar} from "@/components/dashboard/Sidebar";
import {Header} from "@/components/dashboard/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#0D1224]">

      {/* White Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">

        {/* White Header */}
        <Header />

        {/* Dashboard Content Area */}
        <main className="px-8 py-8 max-w-7xl mx-auto w-full space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}
