import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

interface TradingAccount {
  id: string;
  broker_name: string;
  account_number: string;
  balance: number;
  equity: number;
  margin: number;
  free_margin: number;
}

interface TradingPosition {
  id: string;
  symbol: string;
  position_type: string;
  lot_size: number;
  open_price: number;
  current_price: number;
  profit_loss: number;
  opened_at: string;
}

interface TradingStats {
  total_trades: number;
  winning_trades: number;
  losing_trades: number;
  daily_profit: number;
  total_volume: number;
  rebate_earned: number;
  max_drawdown: number;
}

export function useTradingData() {
  const { user } = useAuth();
  const [account, setAccount] = useState<TradingAccount | null>(null);
  const [positions, setPositions] = useState<TradingPosition[]>([]);
  const [stats, setStats] = useState<TradingStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    fetchTradingData();
  }, [user]);

  const fetchTradingData = async () => {
    if (!user) return;

    try {
      // Fetch trading account
      const { data: accountData } = await supabase
        .from("trading_accounts")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_active", true)
        .single();

      if (accountData) {
        setAccount(accountData);

        // Fetch active positions
        const { data: positionsData } = await supabase
          .from("trading_positions")
          .select("*")
          .eq("user_id", user.id)
          .eq("trading_account_id", accountData.id)
          .eq("is_open", true)
          .order("opened_at", { ascending: false });

        setPositions(positionsData || []);
      }

      // Fetch today's stats
      const today = new Date().toISOString().split('T')[0];
      const { data: statsData } = await supabase
        .from("trading_stats")
        .select("*")
        .eq("user_id", user.id)
        .eq("date", today)
        .single();

      setStats(statsData);
    } catch (error) {
      console.error("Error fetching trading data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    account,
    positions,
    stats,
    loading,
    refetch: fetchTradingData,
  };
}