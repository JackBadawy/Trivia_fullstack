import { useEffect, useState } from "react";
import { triviaQuestions } from "../LookUpTables/TriviaQuestionLUT";

const Question = () => {
  const [i, iterate] = useState(1);

  const iterateQuestion = () => {
    if (i < 10) {
      // Ensuring the question index does not exceed the number of questions
      iterate(i + 1);
    }
  };

  return (
    <div className="question__container">
      <h1>Question</h1>
      <p>{triviaQuestions[i].question}</p>
      {Object.values(triviaQuestions[i].potentialAnswers).map(
        (answer, index) => (
          <p key={index}>{answer.text}</p>
        )
      )}
      <button onClick={iterateQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
