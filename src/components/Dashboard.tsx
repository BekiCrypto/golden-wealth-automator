import { TradingCard } from "./TradingCard";
import { Button } from "@/components/ui/button";

export function Dashboard() {
  return (
    <div className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
            Live Trading Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of your TEKWEALTH Gold Master trading performance
          </p>
        </div>

        {/* Trading Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <TradingCard
            title="Account Balance"
            value="$125,847.50"
            change="+2.45% today"
            trend="up"
          />
          <TradingCard
            title="Active Trades"
            value="14"
            change="XAUUSD positions"
            trend="neutral"
          />
          <TradingCard
            title="Today's Profit"
            value="$3,127.89"
            change="+2.49%"
            trend="up"
          />
          <TradingCard
            title="Total Volume"
            value="47.8 lots"
            change="High frequency"
            trend="up"
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TradingCard
            title="Rebate Earned"
            value="$892.45"
            change="This month"
            trend="up"
          />
          <TradingCard
            title="Win Rate"
            value="87.3%"
            change="Last 30 days"
            trend="up"
          />
          <TradingCard
            title="Max Drawdown"
            value="3.2%"
            change="Well within limits"
            trend="neutral"
          />
        </div>

        {/* Control Panel */}
        <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Trading Controls</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="gold">Resume Trading</Button>
            <Button variant="destructive">Emergency Stop</Button>
            <Button variant="premium">Adjust Settings</Button>
            <Button variant="outline">View Logs</Button>
          </div>
        </div>
      </div>
    </div>
  );
}