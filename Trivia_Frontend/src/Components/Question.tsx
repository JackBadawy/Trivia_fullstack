import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { triviaQuestions } from "../LookUpTables/TriviaQuestionLUT";
import { usePlayerStats } from "../Context/usePlayerStats";
import CircularTimer from "./CircularTimer";

const Question: React.FC = () => {
  const [i, iterate] = useState(1); // Adjusted to start from 1 index
  const { playerStats, setPlayerStats } = usePlayerStats();
  const [countdown, setCountdown] = useState(10);
  const [totalTime, setTotalTime] = useState(0);
  const navigate = useNavigate();

  const calculateFinalStats = useCallback(() => {
    const averageTime = totalTime / 10;
    setPlayerStats((prevStats) => ({
      ...prevStats,
      totalTime: `${totalTime} seconds`,
      timePerQuestion: `${averageTime.toFixed(2)} seconds`,
    }));
    navigate("/score");
  }, [totalTime, setPlayerStats, navigate]);

  const handleNextQuestion = useCallback(
    (isCorrect: boolean) => {
      setPlayerStats((prevStats) => ({
        ...prevStats,
        wrongAnswers: isCorrect
          ? prevStats.wrongAnswers
          : prevStats.wrongAnswers + 1,
      }));

      setTotalTime((prevTotalTime) => prevTotalTime + (10 - countdown));
      setCountdown(10);

      if (i < 10) {
        iterate(i + 1);
      } else {
        calculateFinalStats();
      }
    },
    [i, countdown, setPlayerStats, calculateFinalStats]
  );

  const handleTimeOut = useCallback(() => {
    handleNextQuestion(false);
  }, [handleNextQuestion]);

  useEffect(() => {
    if (countdown === 0) {
      handleTimeOut();
    }
  }, [countdown, handleTimeOut]);

  useEffect(() => {
    console.log("Player Stats updated:", playerStats);
  }, [playerStats]);

  return (
    <div className="question__container">
      <h1>Question {i}</h1>
      <CircularTimer key={i} duration={10} onComplete={handleTimeOut} />
      <p>{triviaQuestions[i].question}</p>
      {Object.values(triviaQuestions[i].potentialAnswers).map(
        (answer, index) => (
          <button
            key={index}
            onClick={() => handleNextQuestion(answer.correct)}
          >
            {answer.text}
          </button>
        )
      )}
      <div>
        <p>Wrong Answers: {playerStats.wrongAnswers}</p>
      </div>
    </div>
  );
};

export default Question;
