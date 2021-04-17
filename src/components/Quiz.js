import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FinishCard from './FinishCard';
import { fetchNewQuestion } from '../actions/questionActions';
import { fetchNewAnswer } from '../actions/answerActions';
import { API } from './API';
import { next } from '../actions';
import {useTranslation} from "react-i18next";

function Quiz() {
    const {t, i18n} = useTranslation('common');
    const dispatch = useDispatch();

    const book = useSelector(state => state.book);
    const lang = useSelector(state => state.lang);
    
    const color = useSelector(state => state.color);
    const currentQuestion = useSelector(state => state.currentQuestion);
    const APILink = `${API}/${book}/${currentQuestion}`;
    const APILink_ans = `${API}/${book}_ans/${currentQuestion}`;
    const question = useSelector(state => state.question);
    const rightAns = useSelector(state => state.answer);
    const [myAnswer, setMyAnswer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [answeredChecked, setAnswerChecked] = useState(false);

    const handleChangeQuestion = () => {
        if(myAnswer===rightAns.answer){
          setCounter(counter+1);
        };
        dispatch(next());
        setAnswerChecked(false);       
      };
      
    useEffect(()=>{
        dispatch(fetchNewQuestion(APILink));       
    },[currentQuestion]);

    useEffect(() => {
        dispatch(fetchNewAnswer(APILink_ans));
    },[myAnswer]);

    const handleCheckAnswer = (myanswer, i) => {
        setAnswerChecked(true);
        setMyAnswer(i);
    };

    const getCheckedClass = (i) => {
        if (answeredChecked && rightAns) {
            if (i === myAnswer) {
                return rightAns.answer === i ? 'bg-green-200' : 'bg-red-200';
            } else if (i === rightAns.answer) {
               return 'bg-green-200';
            } 
        } else {
            return '';
        }
    };

    const handleFinish = ()=>{
        setIsFinished(true);
        dispatch(fetchNewAnswer(APILink_ans))
        if(myAnswer===rightAns.answer){
          setCounter(counter+1);
        }
    };
    return (
        
        (isFinished)? 
            <FinishCard counter={counter}/>
         :<> {       
            question.length>=currentQuestion?
                <div className="flex flex-col">
                    <h2 className={`p-4 text-center self-center block italic font-bold text-8xl text-${color}-400`}>{t(`welcome.${book}`)}</h2>
                    <div className="flex flex-col self-center p-8 m-8 shadow-2xl">
                    <h2>{currentQuestion}  / {question[currentQuestion-1].all_question} </h2>
                    <h1 className="text-center p-2 text-xl block italic font-bold">{question[currentQuestion-1].question[lang]} </h1>
                    {question[currentQuestion-1].options[lang].map((option, i)=> (
                    <div id={i} onClick={()=>handleCheckAnswer(option, i)} 
                    className={`ansopt text-center cursor-pointer p-4 text-xl block ${getCheckedClass(i)}`} >
                        {option}</div>
                    ))}
                    {currentQuestion<question[currentQuestion-1].all_question ?
                        <button className="self-center italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        onClick={handleChangeQuestion}
                        >
                            {t(`quiz.next`)}
                        </button> :
                        <button className="self-center italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline" onClick={handleFinish}>{t(`quiz.finish`)}</button>}
                    </div>
                </div>:'Loading...'
            }
          </>
        
    );
}

export default Quiz;