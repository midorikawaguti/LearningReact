import React, { useState } from 'react';
import './Quiz.css';
import CodeDisplay from '../CodeDisplay/CodeDisplay';
import { QUESTIONS } from '../../data-quiz';
import Score from './Score';

function Question({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleOptionChange = (index) => {
    setSelectedOptionIndex(index);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = index;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setSelectedOptionIndex(answers[currentQuestionIndex + 1] || null);
  };

    if(QUESTIONS[currentQuestionIndex].answer === selectedOptionIndex){
        setIsCorrectAnswer(true);
        console.log("CORRECT ANSWER");
    } else {
      setIsCorrectAnswer(false);
    }
  }
  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
       setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }

    setIsCorrectAnswer(false);
  };
  


  return (
    <>
      {!quizCompleted ? (
        <div className='question-box'>
          <h2>QUESTION {currentQuestionIndex + 1}</h2>
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
          <Score onSubmit={handleSubmit} onNextQuestion={handleNextQuestion} answers={answers} />
          <div>
            {isCorrectAnswer && <p> Coreect Answer </p>} 
          </div>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: <Score answers={answers} calculateOnly={true} /> / {QUESTIONS.length}</p>
        </div>
      )}
    </>
  );
}

export default Question;
