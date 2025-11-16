import { Card } from "../ui/card";
import { Brain, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { dashboardRecommendations } from "@/data/content";

export function AIRecommendations() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "critical":
        return "#ef4444";
      case "high":
        return "#f59e0b";
      case "medium":
        return "#eab308";
      default:
        return "#64748b";
    }
  };

  return (
    <Card className="p-6 border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <Brain className="w-5 h-5 text-primary" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-primary" />
        </div>
        <div>
          <h2>AI-Powered Recommendations</h2>
          <p className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>
            CYRA analyzed your GCP security posture and suggests these actions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {dashboardRecommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all group"
            style={{
              backgroundColor: "hsl(var(--primary) / 0.03)",
              borderLeftWidth: "3px",
              borderLeftColor: getImpactColor(rec.impact),
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-foreground">{rec.title}</p>
                  <div
                    className="px-2 py-1 rounded text-xs"
                    style={{
                      backgroundColor: `${getImpactColor(rec.impact)}20`,
                      color: getImpactColor(rec.impact),
                    }}
                  >
                    {rec.impact}
                  </div>
                </div>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "0.875rem" }}
                >
                  {rec.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-1"
                  style={{ fontSize: "0.75rem" }}
                >
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">
                    {rec.confidence}% confidence
                  </span>
                </div>
              </div>

              {rec.actionable && (
                <button
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all group-hover:translate-x-1 bg-primary/10 text-primary hover:bg-primary/20"
                  style={{
                    fontSize: "0.875rem",
                  }}
                >
                  <span>Take Action</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* AI Status Footer */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse bg-primary"></div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.875rem" }}
            >
              CYRA is actively monitoring your GCP environment
            </p>
          </div>
          <button
            className="text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontSize: "0.875rem" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </Card>
  );
}
