import { Shield, TrendingUp, TrendingDown, Activity, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/card';
import { dashboardMetrics } from '@/data/content';

const iconMap = {
  threats: Shield,
  incidents: AlertTriangle,
  score: Activity,
  vulnerabilities: AlertTriangle,
};

const colorMap = {
  threats: 'hsl(var(--primary))',
  incidents: '#ef4444',
  score: '#10b981',
  vulnerabilities: '#f59e0b',
};

export function AnalyticsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dashboardMetrics.map((metric) => {
        const Icon = iconMap[metric.type as keyof typeof iconMap];
        const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
        const color = colorMap[metric.type as keyof typeof colorMap];
        
        return (
          <Card key={metric.title} className="p-6 relative overflow-hidden border-border">
            {/* Background Gradient */}
            <div 
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: color }}
            ></div>
            
            {/* Content */}
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${color}20` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="flex items-center gap-1" style={{ fontSize: '0.875rem' }}>
                  <TrendIcon 
                    className="w-4 h-4" 
                    style={{ color: metric.trend === 'up' ? '#10b981' : '#ef4444' }}
                  />
                  <span style={{ color: metric.trend === 'up' ? '#10b981' : '#ef4444' }}>
                    {metric.change}
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>
                  {metric.title}
                </p>
                <p className="text-foreground" style={{ fontSize: '1.875rem', fontWeight: 600 }}>
                  {metric.value}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
