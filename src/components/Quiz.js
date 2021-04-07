import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FinishCard from './FinishCard';
import { selectAllQuestion, fetchNewQuestion } from '../actions/questionActions';
import { selectAllAnswer, fetchNewAnswer } from '../actions/answerActions';
import { API } from './API';
import { next } from '../actions';
import { Link } from 'react-router-dom'; 
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
    const options = useSelector(state => state.question);
    const quizLen = useSelector(state => state.question);
    const rightAns = useSelector(state => state.answer);
    const [myAnswer, setMyAnswer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [answeredChecked, setAnswerChecked] = useState(false);


    const handleChangeQuestion = () => {
        if(rightAns.length>0 && myAnswer===rightAns[0].answer){
          dispatch(next());
          setCounter(counter+1);
          dispatch(fetchNewQuestion(APILink));
        }
        dispatch(next());
        dispatch(fetchNewQuestion(APILink))
        let opt = document.querySelectorAll('.option');
        opt.forEach(o=>{
            o.classList.remove("bg-green-200")
            o.classList.remove("bg-red-200")
        });
      };
    
    useEffect(() => {
        dispatch(fetchNewQuestion(APILink));
    },[answer]);

    useEffect(() => {
        async function fetch() {
            if (myAnswer) {
                await dispatch(fetchNewAnswer(APILink_ans));
            }  
        }
        fetch();
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
        if(rightAns.length>0 && myAnswer===rightAns[0].answer){
          setCounter(counter+1);
        }
    };

    return (
        
        (isFinished)? 
            <FinishCard counter={counter}/>
         :<> {       
            question.length>0?
                <div className="flex flex-col">
                    <button className="italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"><Link to={'/'}>{t(`quiz.main`)}</Link></button>
                    <h2 className={`p-4 text-center self-center block italic font-bold text-8xl text-${color}-400`}>{t(`welcome.${book}`)}</h2>
                    <div className="flex flex-col self-center p-8 m-8 shadow-2xl">
                    <h2>{currentQuestion}  / {quizLen[0].all_question} </h2>
                    <h1 className="text-center p-2 text-xl block italic font-bold">{question[0].question[lang]} </h1>
                    {options[0].options[lang].map((option, i)=> (
                    <div id={i} onClick={()=>handleCheckAnswer(option, i)} 
                    className={`option text-center cursor-pointer p-4 text-xl block ${getCheckedClass(i)}`} >
                        {option}</div>
                    ))}
                    {currentQuestion<quizLen[0].all_question ?
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