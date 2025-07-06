import { TradingCard } from "./TradingCard";
import { Button } from "@/components/ui/button";
import { useTradingData } from "@/hooks/useTradingData";

export function Dashboard() {
  const { account, positions, stats, loading } = useTradingData();

  if (loading) {
    return (
      <div className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-foreground">Loading trading data...</div>
        </div>
      </div>
    );
  }

  // Format currency
  const formatCurrency = (amount: number | null | undefined) => {
    if (!amount) return "$0.00";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Calculate win rate
  const winRate = stats?.total_trades 
    ? ((stats.winning_trades / stats.total_trades) * 100).toFixed(1)
    : "0.0";

  return (
    <div id="dashboard" className="py-20 px-4 bg-gradient-dark">
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
            value={formatCurrency(account?.balance)}
            change={account ? `${account.broker_name} • ${account.account_number}` : "No account"}
            trend="neutral"
          />
          <TradingCard
            title="Active Trades"
            value={positions.length.toString()}
            change="XAUUSD positions"
            trend="neutral"
          />
          <TradingCard
            title="Today's Profit"
            value={formatCurrency(stats?.daily_profit)}
            change={stats?.daily_profit && stats.daily_profit > 0 ? "+" + ((stats.daily_profit / (account?.balance || 1)) * 100).toFixed(2) + "%" : "0%"}
            trend={stats?.daily_profit && stats.daily_profit > 0 ? "up" : "neutral"}
          />
          <TradingCard
            title="Total Volume"
            value={`${stats?.total_volume || 0} lots`}
            change="High frequency"
            trend="up"
          />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <TradingCard
            title="Rebate Earned"
            value={formatCurrency(stats?.rebate_earned)}
            change="This month"
            trend="up"
          />
          <TradingCard
            title="Win Rate"
            value={`${winRate}%`}
            change={`${stats?.winning_trades || 0} wins of ${stats?.total_trades || 0} trades`}
            trend={parseFloat(winRate) > 70 ? "up" : "neutral"}
          />
          <TradingCard
            title="Max Drawdown"
            value={`${stats?.max_drawdown || 0}%`}
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