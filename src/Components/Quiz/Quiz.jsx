import React, { useState } from 'react';
import './Quiz.css';
import { QUESTIONS } from '../../data-quiz';


function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === QUESTIONS[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz">
      {!quizCompleted ? (
        <div>
          <h2>{QUESTIONS[currentQuestionIndex].question}</h2>
          {QUESTIONS[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={option}
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
          <button onClick={handleSubmit}>Next</button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {QUESTIONS.length}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;