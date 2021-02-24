import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {quizData} from '../questionsData';
import FinishCard from './FinishCard';

function Quiz() {
    const book = useSelector(state => state.book);
    const color = useSelector(state => state.color);
    const lang = useSelector(state => state.lang);
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [options, setOptions] = useState([]);
    const [questions, setQuestions] = useState('');
    const [answer, setAnswer] = useState(0);
    const [myAnswer, setMyAnswer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [quiz, setQuiz] = useState(book)
    const [quizLang, setQuizLang] = useState(lang)

    const x = quizData.$(book)[currentQuestion].question.$(lang);
    const loadQuizData = () => {
        setQuestions(x);
        setAnswer(quizData[quiz][currentQuestion].answer);
        setOptions(quizData[0].questions[currentQuestion].options[quizLang])
    };
    console.log(options)
    console.log(quizData.Twilight[4].options.en)
    const handleChangeQuestion = () => {
        if(myAnswer===answer){
          setCounter(counter+1);
        }
        setCurrentQuestion(currentQuestion+1);
      };

    const mounted = useRef(false);
    useEffect(() => {
        if(!mounted.current) {
            loadQuizData();
            mounted.current = true;
        } else {
            loadQuizData();
        }
    });

    const handleCheckAnswer = (myAnswer) => {
        setMyAnswer(options.indexOf(myAnswer));
    };

    const handleFinish = ()=>{
        setIsFinished(true);
    };

    return (
        
        (isFinished)? 
            <FinishCard counter={counter}/>
         :<>        
            <h2 className="quiz-content_question-counter">{currentQuestion===0? `Question`: `Questions`}  {currentQuestion +1}  out of {quizData.length} remaining </h2>
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
        
    );
}

export default Quiz;