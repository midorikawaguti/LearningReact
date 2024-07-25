// import React, { useState } from 'react';
import './Quiz.css';
import { useState } from 'react';
import QuestionsMenu from './QuestionsMenu';
import Question from './Question';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div className="quiz">
  
      <QuestionsMenu
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <Question
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
}

export default Quiz;
