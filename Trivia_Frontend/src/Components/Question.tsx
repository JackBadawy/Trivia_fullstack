import { useEffect, useState } from "react";
import { triviaQuestions } from "../LookUpTables/TriviaQuestionLUT";
import { usePlayerStats } from "../Context/usePlayerStats";
import { useNavigate } from "react-router-dom";
import { postPlayerStats } from "../Services/Stats_Service";

const Question = () => {
  const [i, iterate] = useState(1);
  const { playerStats, setPlayerStats } = usePlayerStats();
  const [countdown, setCountdown] = useState(10);
  const [totalTime, setTotalTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
      setTotalTime((prevTotalTime) => prevTotalTime + 1);
    }, 1000);

    if (countdown === 0) {
      setPlayerStats((prevStats) => ({
        ...prevStats,
        wrongAnswers: prevStats.wrongAnswers + 1,
      }));
      if (i < 10) {
        iterate(i + 1);
        setCountdown(10);
      } else {
        clearInterval(timer);
        calculateFinalStats();
      }
    }

    return () => clearInterval(timer);
  }, [countdown, i, setPlayerStats]);

  useEffect(() => {
    console.log("Player Stats updated:", playerStats);
  }, [playerStats]);

  const iterateQuestion = (isCorrect: boolean) => {
    setPlayerStats((prevStats) => ({
      ...prevStats,
      wrongAnswers: isCorrect
        ? prevStats.wrongAnswers
        : prevStats.wrongAnswers + 1,
    }));
    if (i < 10) {
      iterate(i + 1);
      setCountdown(10);
    } else {
      calculateFinalStats();
    }
  };

  const calculateFinalStats = async () => {
    const averageTime = totalTime / 10;
    const finalStats = {
      ...playerStats,
      totalTime: `${totalTime} seconds`,
      timePerQuestion: `${averageTime.toFixed(2)} seconds`,
    };

    setPlayerStats(finalStats);

    try {
      await postPlayerStats(finalStats);
      console.log("Player stats posted successfully");
    } catch (error) {
      console.error("Failed to post player stats:", error.message);
    }

    navigate("/score");
  };

  return (
    <div className="question__container">
      <h1>Question</h1>
      <p>{triviaQuestions[i].question}</p>
      {Object.values(triviaQuestions[i].potentialAnswers).map(
        (answer, index) => (
          <button key={index} onClick={() => iterateQuestion(answer.correct)}>
            {answer.text}
          </button>
        )
      )}
      <div>
        <p>Wrong Answers: {playerStats.wrongAnswers}</p>
        <p>Time Remaining: {countdown} seconds</p>
      </div>
    </div>
  );
};

export default Question;
