import { useContext } from "react";
import { PlayerStatsContextType } from "./PlayerStatsContext";
import { PlayerStatsContext } from "./PlayerStatsContext";

export const usePlayerStats = (): PlayerStatsContextType => {
  const context = useContext(PlayerStatsContext);
  if (!context) {
    throw new Error("usePlayerStats must be used within a PlayerStatsProvider");
  }
  return context;
};
