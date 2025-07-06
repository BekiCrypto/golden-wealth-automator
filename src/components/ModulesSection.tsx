import { ModuleCard } from "./ModuleCard";

export function ModulesSection() {
  const modules = [
    {
      title: "Backend API",
      description: "FastAPI + Supabase powerhouse",
      icon: "🔧",
      features: [
        "RESTful API with secure token access",
        "Encrypted broker credential management",
        "MyFXBook rebate integration",
        "Real-time trading analytics"
      ]
    },
    {
      title: "Admin Dashboard", 
      description: "Complete system oversight",
      icon: "🎛️",
      features: [
        "User and broker monitoring",
        "Kill/resume trading controls",
        "Comprehensive rebate stats",
        "System updates and alerts"
      ]
    },
    {
      title: "Mobile Control",
      description: "Premium trading on-the-go",
      icon: "📱",
      features: [
        "Real-time trading dashboard",
        "EA control panel settings",
        "Google Play Billing integration",
        "Secure credential storage"
      ]
    },
    {
      title: "Expert Advisor",
      description: "MT4/MT5 trading engine",
      icon: "🤖",
      features: [
        "XAUUSD grid & hedge system",
        "Auto lot sizing and risk control",
        "24/7 bidirectional hedging",
        "Dynamic SL/TP management"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Comprehensive Trading
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four powerful modules working in perfect harmony to deliver 
            automated gold trading success with complete user control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              features={module.features}
              icon={<span className="text-3xl">{module.icon}</span>}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">System Architecture</h3>
          <div className="bg-gradient-card rounded-xl p-8 border border-border/50 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-lg mb-2">📱</div>
                <div className="font-semibold text-foreground">Mobile App</div>
              </div>
              <div className="flex items-center justify-center text-2xl text-primary">↔</div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-lg mb-2">🔧</div>
                <div className="font-semibold text-foreground">FastAPI Backend</div>
              </div>
              <div className="flex items-center justify-center text-2xl text-primary">↔</div>
            </div>
            <div className="flex justify-center mt-4 text-2xl text-primary">↕</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-lg mb-2">🎛️</div>
                <div className="font-semibold text-foreground">Admin Dashboard</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="text-lg mb-2">🤖</div>
                <div className="font-semibold text-foreground">MT4/MT5 EA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}