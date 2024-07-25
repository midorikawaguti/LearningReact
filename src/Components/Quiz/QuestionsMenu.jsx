//import React, { useState } from 'react';
import './Quiz.css';
import TabButton from '../TabButton';
import { QUESTIONS } from '../../data-quiz';

function QuestionsMenu({ currentQuestionIndex, setCurrentQuestionIndex }){


    function handleQuestionSelect(index){
    setCurrentQuestionIndex(index);
    console.log("indexQ:", index);
   
  };

    return(
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
    )
}
export default QuestionsMenu;