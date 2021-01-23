import React from 'react';
import { quizData } from '../questionsData';

function FinishCard(props) {
  return (
    <>
      <h3 className="result_count">Game Over! Your final score is {props.counter} {props.counter===1? 'point': 'points'} </h3>
      <div className="result_container-for-right-answers">
        The correct answers:
        <ul className="result_list-right-answers">
          {quizData.map((item, index) => (
           <li className="result_right-answers" key={index}>
              {item.answer}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FinishCard;