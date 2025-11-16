"use client";

import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export function AnalyticsCards() {
  const cardClass = `
    bg-[#0F1624]
    border border-white/10
    rounded-2xl
    shadow-[0_0_20px_rgba(99,102,241,0.12)]
    p-6
    text-white
    transition
    hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]
    hover:-translate-y-1
  `;

  const scoreData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Score",
        data: [78, 80, 82, 88, 90, 94],
        borderColor: "#8B5CF6",
        backgroundColor: "rgba(139,92,246,0.25)",
        tension: 0.4,
      },
    ],
  };

  const apiActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [1400, 1650, 1720, 1500, 1900, 1750, 2100],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const cards = [
    { title: "Threats Blocked", value: "1,247", meta: "+12.5%", color: "text-emerald-400" },
    { title: "Active Incidents", value: "3", meta: "-67%", color: "text-red-400" },
    { title: "Security Score", value: "94/100", meta: "+5 pts", color: "text-emerald-400" },
    { title: "Vulnerabilities", value: "12", meta: "-8", color: "text-red-400" },
  ];

  return (
    <>
      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.title} className={cardClass}>
            <p className="text-sm text-white/60">{c.title}</p>
            <div className="mt-3 flex justify-between">
              <p className="text-3xl font-bold text-white">{c.value}</p>
              <p className={`text-sm font-semibold ${c.color}`}>{c.meta}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className={cardClass}>
          <div className="flex justify-between">
            <h3 className="font-semibold text-white text-lg">Security Score Trend</h3>
            <span className="text-white/50 text-sm">Last 6 months</span>
          </div>
          <div className="mt-4">
            <Line data={scoreData} />
          </div>
        </div>

        <div className={cardClass}>
          <h3 className="font-semibold text-white text-lg">Vulnerabilities by Severity</h3>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-white/70">Critical</span>
              <span className="text-red-400 font-semibold">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">High</span>
              <span className="text-orange-400 font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Medium</span>
              <span className="text-blue-400 font-semibold">7</span>
            </div>
          </div>
        </div>

        <div className={cardClass}>
          <div className="flex justify-between">
            <h3 className="font-semibold text-white text-lg">API Activity Overview</h3>
            <p className="text-white/50 text-sm">Weekly</p>
          </div>

          <div className="mt-4">
            <Bar 
              data={apiActivityData}
              options={{ plugins: { legend: { display: false }}}}
            />
          </div>
        </div>

      </div>
    </>
  );
}
