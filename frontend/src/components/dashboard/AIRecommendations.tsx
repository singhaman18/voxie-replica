/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export function AIRecommendations() {
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

  const recommendationCard = `
    p-4
    rounded-xl
    bg-white/5
    border border-white/10
    transition
    hover:bg-white/10
  `;

  const recommendations = [
    {
      title: "Implement Service Account Key Rotation",
      level: "high",
      desc: "CYRA detected stale service account keys older than 90 days. Rotate keys to reduce security risk.",
    },
    {
      title: "Enable Cloud Audit Logging",
      level: "critical",
      desc: "Admin audit logs are disabled in 2 GCP projects. Enable logs to monitor privileged activity.",
    },
    {
      title: "Restrict IAM Role Bindings",
      level: "medium",
      desc: "Too many users have access to Owner/Editor roles. Apply least-privilege permissions.",
    },
  ];

  const levelColors: any = {
    critical: "bg-red-500/20 text-red-300 border-red-500/30",
    high: "bg-amber-400/20 text-amber-300 border-amber-400/30",
    medium: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  };

  return (
    <div className={cardClass}>
      <h3 className="text-xl font-semibold text-white mb-4">
        AI-Powered Recommendations
      </h3>

      <p className="text-white/70 text-sm mb-6">
        CYRA analyzed your GCP security posture and suggests these improvements:
      </p>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className={recommendationCard}>
            <div className="flex justify-between items-start">
              <h4 className="text-white font-semibold">{rec.title}</h4>

              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full border ${levelColors[rec.level]}`}
              >
                {rec.level}
              </span>
            </div>

            <p className="text-white/60 mt-2 text-sm">{rec.desc}</p>

            <button className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition cursor-pointer">
              Take Action →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
