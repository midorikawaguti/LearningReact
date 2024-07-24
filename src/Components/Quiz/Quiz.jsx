import React, { useState } from 'react';
import './Quiz.css';
import { QUESTIONS } from '../../data-quiz';
import CodeDisplay from '../CodeDisplay/CodeDisplay';
import TabButton from '../TabButton';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionChange = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleSubmit = () => {
    const correctAnswerIndex = QUESTIONS[currentQuestionIndex].answer;

    if (selectedOptionIndex === correctAnswerIndex) {
      setScore(score + 1);
      console.log("selected:",selectedOptionIndex);
      console.log("correct answer",correctAnswerIndex);
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      setQuizCompleted(true);
    }
  };

    const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
    setSelectedOptionIndex(null);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz">
       <menu className='quiz-menu'>
        {QUESTIONS.map((_, index) => (
          <TabButton
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1em',
              border: '1px solid #ccc',
              borderRadius: '5px',
              color: '#6ea8ab',
              backgroundColor: '#f0f0f0',
              cursor: 'pointer',
              textAlign: 'center',
            }}
            key={index}
            isSelected={currentQuestionIndex === index}
            onClick={() => handleQuestionSelect(index)}
            className='{}'
          >
            {index + 1}
          </TabButton>
        ))}
      </menu>
      {!quizCompleted ? (
        <div className='question-box'>
          <h2>QUESTION {currentQuestionIndex+1}</h2>
          <h2>{QUESTIONS[currentQuestionIndex].question}</h2>
          {QUESTIONS[currentQuestionIndex]?.questionCode && (
            <CodeDisplay code={QUESTIONS[currentQuestionIndex].questionCode} />
            )}

          {QUESTIONS[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                checked={selectedOptionIndex === index}
                onChange={() => handleOptionChange(index)}
              />
              <label htmlFor={`option${index}`}>{option}</label>
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
