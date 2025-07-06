import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ModuleCard({ title, description, features, icon, className, style }: ModuleCardProps) {
  return (
    <Card 
      className={cn(
        "bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group",
        className
      )}
      style={style}
    >
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-primary text-2xl group-hover:animate-glow-pulse">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl text-foreground">{title}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="premium" className="w-full">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}