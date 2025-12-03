import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  trend: 'up' | 'down';
}

export default function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  return (
    <Card className="glass-card border-border/50 hover-glow animate-scale-in">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${
            trend === 'up' ? 'gradient-primary' : 'bg-muted'
          }`}>
            <Icon name={icon as any} size={24} className="text-white" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            <Icon name={trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
            {change}
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
