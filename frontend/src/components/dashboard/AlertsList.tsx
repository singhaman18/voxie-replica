"use client";

export function AlertsList() {
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

  const alertItemClass = `
    p-4 mb-3
    bg-white/5
    border border-white/10
    rounded-xl
    hover:bg-white/10
    transition
    flex flex-col
    relative
  `;

  const alerts = [
    {
      title: "Unusual IAM Permission Change",
      desc: "Service account granted excessive permissions.",
      time: "5 min ago",
      status: "active",
    },
    {
      title: "Public Storage Bucket Detected",
      desc: "A GCS bucket is publicly accessible.",
      time: "12 min ago",
      status: "pending",
    },
    {
      title: "Firewall Rule Modified",
      desc: "SSH access opened to all IPs.",
      time: "25 min ago",
      status: "critical",
    },
    {
      title: "API Key Leak Suspected",
      desc: "Unusual outgoing API calls detected.",
      time: "1 hour ago",
      status: "resolved",
    },
    {
      title: "Failed Admin Login Attempts",
      desc: "Multiple failed login attempts from unknown device.",
      time: "2 hours ago",
      status: "active",
    },
  ];

  const statusColors = {
    pending: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    active: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    resolved: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    critical: "bg-red-500/20 text-red-300 border-red-400/30",
  };

  return (
    <div className={cardClass}>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Alerts</h3>
        <button className="text-sm text-blue-400 hover:underline cursor-pointer">View All</button>
      </div>

      <div className="space-y-4">
        {alerts.map((a, i) => (
          <div key={i} className={alertItemClass}>
            <div className="flex justify-between">
              <p className="font-semibold text-white">{a.title}</p>
            </div>
            <p className="text-sm text-white/60 mt-1">{a.desc}</p>

            <div className="flex items-center gap-3 mt-3">
              <p className="text-xs text-white/40">{a.time}</p>
            </div>

            {/* STATUS BADGE BOTTOM RIGHT */}
            <span
              className={`
                absolute bottom-3 right-3 
                px-3 py-1 text-xs font-semibold rounded-full border 
                ${statusColors[a.status as keyof typeof statusColors]}
              `}
            >
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
