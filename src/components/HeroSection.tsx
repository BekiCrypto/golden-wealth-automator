import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trading.jpg";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-poppins">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              TEKWEALTH
            </span>
            <br />
            <span className="text-foreground">Gold Master</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-poppins">
            One-stop AI-driven trading automation ecosystem delivering high-frequency gold hedging, 
            mobile control, and premium analytics under a luxury experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-3 animate-glow-pulse"
            >
              Start Trading Now
            </Button>
            <Button 
              variant="premium" 
              size="lg" 
              className="text-lg px-8 py-3"
            >
              View Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="text-4xl font-bold text-primary mb-2">1-5%</div>
              <div className="text-muted-foreground">Daily Profit Target</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Automated Trading</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">XAUUSD</div>
              <div className="text-muted-foreground">Gold Trading Focus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}