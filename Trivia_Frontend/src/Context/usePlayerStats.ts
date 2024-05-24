import { useContext } from "react";
import { PlayerStatsContextType } from "./playerStatsContext";
import { PlayerStatsContext } from "./playerStatsContext";

export const usePlayerStats = (): PlayerStatsContextType => {
  const context = useContext(PlayerStatsContext);
  if (!context) {
    throw new Error("usePlayerStats must be used within a PlayerStatsProvider");
  }
  return context;
};
