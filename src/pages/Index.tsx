import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { Dashboard } from "@/components/Dashboard";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <HeroSection />
      <ModulesSection />
      <Dashboard />
      <FeaturesSection />
      
      {/* Footer */}
      <footer className="bg-gradient-dark py-12 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              TEKWEALTH
            </span>
            <span className="text-foreground"> Gold Master</span>
          </div>
          <p className="text-muted-foreground mb-6">
            The ultimate AI-driven trading automation ecosystem
          </p>
          <div className="text-sm text-muted-foreground">
            © 2024 TEKWEALTH Gold Master. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
