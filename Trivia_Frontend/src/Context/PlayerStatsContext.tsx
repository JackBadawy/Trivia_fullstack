import React, { createContext, useState, ReactNode, useContext } from "react";

export interface PlayerStats {
  playerName: string;
  timePerQuestion: string;
  totalTime: string;
  wrongAnswers: number;
}

export interface PlayerStatsContextType {
  playerStats: PlayerStats;
  setPlayerStats: React.Dispatch<React.SetStateAction<PlayerStats>>;
}

const defaultStats: PlayerStats = {
  playerName: "",
  timePerQuestion: "",
  totalTime: "",
  wrongAnswers: 0,
};

export const PlayerStatsContext = createContext<
  PlayerStatsContextType | undefined
>(undefined);

interface PlayerStatsProviderProps {
  children: ReactNode;
}

export const PlayerStatsProvider: React.FC<PlayerStatsProviderProps> = ({
  children,
}) => {
  const [playerStats, setPlayerStats] = useState<PlayerStats>(defaultStats);

  return (
    <PlayerStatsContext.Provider value={{ playerStats, setPlayerStats }}>
      {children}
    </PlayerStatsContext.Provider>
  );
};
