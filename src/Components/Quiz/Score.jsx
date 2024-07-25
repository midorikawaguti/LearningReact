import { useEffect, useState } from "react";
import { QUESTIONS } from "../../data-quiz";

function Score({ onSubmit, answers, onNextQuestion, calculateOnly = false }) {
  const [score, setScore] = useState(0);

  //calculates the quiz score whenever the answers array changes.
  useEffect(() => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer !== null && answer === QUESTIONS[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
  }, [answers]);

  if (calculateOnly) {
    return score;
  }

  return (
    <div
    style={{
        display: 'flex',
        gap: '30px'

    }}>
      <button onClick={onSubmit}>Save</button>
      <button onClick={onNextQuestion}>Next</button>       
    </div>
  );
}

export default Score;
