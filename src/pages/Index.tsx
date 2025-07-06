import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { ModulesSection } from "@/components/ModulesSection";
import { Dashboard } from "@/components/Dashboard";
import { FeaturesSection } from "@/components/FeaturesSection";

const Index = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-2xl text-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Navigation Bar */}
      <nav className="bg-gradient-dark border-b border-border/50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              TEKWEALTH
            </span>
            <span className="text-foreground"> Gold Master</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Welcome back!</span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

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
