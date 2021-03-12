import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import FinishCard from './FinishCard';
import { Link } from 'react-router-dom'; 
import {useTranslation} from "react-i18next";
import axios from 'axios';

function Quiz() {
    const {t, i18n} = useTranslation('common');

    const book = useSelector(state => state.book);
    const color = useSelector(state => state.color);
    const lang = useSelector(state => state.lang);

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [options, setOptions] = useState([]);
    const [questions, setQuestions] = useState('');
    const [answer, setAnswer] = useState(0);
    const [myAnswer, setMyAnswer] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [rightAns, setRightAns] = useState(false);
    const [quizLen, setQuizLen] = useState(0);

    const API = `http://localhost:3000/${book}/${currentQuestion}`;
    const API_ans = `http://localhost:3000/${book}_ans/${currentQuestion}`;

    const getData = async() => {
        const response = await axios.get(API);
        const data = response.data;
        setQuestions(data.question[lang]);
        setAnswer(data.answer);
        setOptions(data.options[lang]);
        setQuizLen(data.all_question);
    };
    
    const handleChangeQuestion = async() => {
        const response = await axios.get(API_ans);
        const data = response.data;
        setAnswer(data.answer);
        if(myAnswer===answer){
          setCounter(counter+1);
        }
        setCurrentQuestion(currentQuestion+1);
        let opt = document.querySelectorAll('.option');
        opt.forEach(o=>{
            o.classList.remove("bg-green-200")
            o.classList.remove("bg-red-200")
        });
      };

    const mounted = useRef(false);
    useEffect(() => {
        if(!mounted.current) {
            getData();
            mounted.current = true;
        } else {
            getData();
        }
    });

    const handleCheckAnswer = async (myAnswer, i) => {
        const response = await axios.get(API_ans);
        const data = response.data;
        setAnswer(data.answer);
        setMyAnswer(options.indexOf(myAnswer));
        if (myAnswer===data.answer){
            let element = document.getElementById(i);
            element.classList.toggle("bg-green-200");
        } else {
            let element = document.getElementById(i);
            element.classList.toggle("bg-red-200");
            let element2 = document.getElementById(data.answer);
            element2.classList.toggle("bg-green-200");
        };
    };

    const handleFinish = async()=>{
        setIsFinished(true);
        const response = await axios.get(API_ans);
        const data = response.data;
        setAnswer(data.answer);
    };

    return (
        
        (isFinished)? 
            <FinishCard counter={counter}/>
         :<>        
            <div className="flex flex-col">
                <button className="italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"><Link to={'/'}>{t(`quiz.main`)}</Link></button>
                <h2 className={`p-4 text-center self-center block italic font-bold text-8xl text-${color}-400`}>{t(`welcome.${book}`)}</h2>
                <div className="flex flex-col self-center p-8 m-8 shadow-2xl">
                    <h2>{currentQuestion}  / {quizLen} </h2>
                    <h1 className="text-center p-2 text-xl block italic font-bold">{questions} </h1>
                    {options.map((option, i)=> (
                    <div id={i} onClick={()=>handleCheckAnswer(option, i)} className={rightAns ? "option text-center p-4 cursor-pointer text-xl block bg-gray-700" : "option text-center cursor-pointer p-4 text-xl block "} >{option}</div>
                    ))}
                    {currentQuestion<quizLen ?
                    <button className="self-center italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        onClick={handleChangeQuestion}
                    >
                        {t(`quiz.next`)}
                    </button> :
                    <button className="self-center italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline" onClick={handleFinish}>{t(`quiz.finish`)}</button>}
                </div>
            </div>
          </>
        
    );
}

export default Quiz;