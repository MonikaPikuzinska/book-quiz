import React from 'react';
import { quizData } from '../questionsData';
import FinishCard from './FinishCard';

function Questions(props) {
    let { questions, options, handleCheckAnswer, myAnswer, currentQuestion, handleChangeQuestion, handleFinish, isFinished, counter } = props

    return (
        (isFinished)? 
            <FinishCard counter={counter}/>
         :<>        
            <h2 className="quiz-content_question-counter">{`Questions ${currentQuestion +1}  out of ${quizData.length} remaining `}</h2>
        <h1 className="quiz-content_question">{questions} </h1>
            {options.map(option => (
            <div onClick={()=>handleCheckAnswer(option)} className={myAnswer === option ? "quiz-content_options selected" : "quiz-content_options"} >{option}</div>
            ))}
            {currentQuestion<quizData.length-1 ?
            <button className="quiz-content_btn"
                onClick={handleChangeQuestion}
              >
                Next
              </button> :
              <button className="quiz-content_btn" onClick={handleFinish}>Finish</button>}
            </>
    )
}

export default Questions;