import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const features = [
    {
      title: "💸 Rebate Farming",
      description: "Maximize broker rebates through thousands of micro-lot trades with intelligent execution patterns."
    },
    {
      title: "🔐 Capital Preservation", 
      description: "Smart hedging engine that avoids losses and preserves your trading capital through advanced risk management."
    },
    {
      title: "📈 Safe Profit",
      description: "Secure 1–5% daily profit through high-frequency volatility trading with proven algorithms."
    },
    {
      title: "📱 Complete Control",
      description: "Full visibility and control via premium mobile app with real-time monitoring and instant adjustments."
    },
    {
      title: "🤖 AI-Driven Automation",
      description: "Advanced Expert Advisor with machine learning capabilities for optimal trade timing and execution."
    },
    {
      title: "🌐 One-Stop Solution",
      description: "Backend, admin, trading engine, and app control unified in a single, powerful ecosystem."
    }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Why Choose
            <span className="bg-gradient-gold bg-clip-text text-transparent"> TEKWEALTH?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make TEKWEALTH Gold Master 
            the ultimate trading automation solution for serious traders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription CTA */}
        <div className="bg-gradient-card rounded-xl p-8 border border-primary/20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Trading?
          </h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful traders using TEKWEALTH Gold Master 
            for consistent, automated profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="animate-glow-pulse">
              Start Free Trial
            </Button>
            <Button variant="premium" size="lg">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}