import React, { useEffect } from "react";
import { usePlayerStats } from "../Context/usePlayerStats";
import { useNavigate } from "react-router-dom";

const FinalScorePage: React.FC = () => {
  const { playerStats } = usePlayerStats();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log("Player Stats updated:", playerStats);
  }, [playerStats]);

  return (
    <div className="final-score-page">
      <h1>Final Score</h1>
      <div className="stats">
        <p>
          <strong>Player Name:</strong> {playerStats.playerName}
        </p>
        <p>
          <strong>Total Time:</strong> {playerStats.totalTime}
        </p>
        <p>
          <strong>Average Time per Question:</strong>{" "}
          {playerStats.timePerQuestion}
        </p>
        <p>
          <strong>Wrong Answers:</strong> {playerStats.wrongAnswers}
        </p>
      </div>
      <div>
        <button onClick={goHome}>Retry</button>
      </div>
    </div>
  );
};

export default FinalScorePage;
