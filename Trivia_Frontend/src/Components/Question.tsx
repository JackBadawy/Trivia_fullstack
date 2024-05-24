import { useEffect, useState } from "react";
import { triviaQuestions } from "../LookUpTables/TriviaQuestionLUT";
import { usePlayerStats } from "../Context/usePlayerStats";

const Question = () => {
  const [i, iterate] = useState(1);
  const { playerStats, setPlayerStats } = usePlayerStats();

  const iterateQuestion = (isCorrect: boolean) => {
    setPlayerStats((prevStats) => ({
      ...prevStats,
      wrongAnswers: isCorrect
        ? prevStats.wrongAnswers
        : prevStats.wrongAnswers + 1,
    }));
    if (i < 10) {
      iterate(i + 1);
    }
  };

  useEffect(() => {
    console.log("Player Stats updated:", playerStats);
  }, [playerStats]);

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
      </div>
    </div>
  );
};

export default Question;
