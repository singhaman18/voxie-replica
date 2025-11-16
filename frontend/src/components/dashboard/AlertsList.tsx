import { AlertTriangle, Clock } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { dashboardAlerts } from "@/data/content";

export function AlertsList() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "#ef4444";
      case "high":
        return "#f59e0b";
      case "medium":
        return "#eab308";
      case "low":
        return "#14b8a6";
      default:
        return "#64748b";
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<
      string,
      { bg: string; color: string; border: string }
    > = {
      active: {
        bg: "rgba(239, 68, 68, 0.1)",
        color: "#ef4444",
        border: "#ef4444",
      },
      investigating: {
        bg: "rgba(234, 179, 8, 0.1)",
        color: "#eab308",
        border: "#eab308",
      },
      pending: {
        bg: "rgba(59, 130, 246, 0.1)",
        color: "#3b82f6",
        border: "#3b82f6",
      },
      resolved: {
        bg: "rgba(20, 184, 166, 0.1)",
        color: "#14b8a6",
        border: "#14b8a6",
      },
    };

    return styles[status] || styles.pending;
  };

  return (
    <Card className="p-6 border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-primary" />
          <h2>Recent Alerts</h2>
        </div>
        <button
          className="text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: "0.875rem" }}
        >
          View All
        </button>
      </div>

      <div className="space-y-3">
        {dashboardAlerts.map((alert) => {
          const statusStyle = getStatusBadge(alert.status);

          return (
            <div
              key={alert.id}
              className="p-4 rounded-lg border border-border hover:border-opacity-100 transition-all cursor-pointer group"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
            >
              <div className="flex items-start gap-4">
                {/* Severity Indicator */}
                <div className="mt-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: getSeverityColor(alert.severity),
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-foreground group-hover:text-opacity-90">
                      {alert.title}
                    </p>
                    <Badge
                      className="border shrink-0"
                      style={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.color,
                        borderColor: statusStyle.border,
                        fontSize: "0.75rem",
                      }}
                    >
                      {alert.status}
                    </Badge>
                  </div>

                  <p
                    className="text-muted-foreground mb-2"
                    style={{ fontSize: "0.875rem" }}
                  >
                    {alert.description}
                  </p>

                  <div
                    className="flex items-center gap-2 text-muted-foreground"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <Clock className="w-3 h-3" />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
