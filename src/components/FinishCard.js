import React from 'react';
import { useSelector } from 'react-redux';
import {useTranslation} from "react-i18next";
import { Link } from 'react-router-dom'; 

function FinishCard(props) {
  const {t, i18n} = useTranslation('common');

  const book = useSelector(state => state.book);
  const color = useSelector(state => state.color);

  const { counter } = props;
  return (
    <>
      <div className="flex flex-col">
        <button className="italic flex-grow-0 w-36 font-bold border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"><Link to={'/'}>{t(`quiz.main`)}</Link></button>
        <h2 className={`p-4 text-center self-center block italic font-bold text-8xl text-${color}-400`}>{t(`welcome.${book}`)}</h2>
        <div className="flex flex-col self-center p-8 m-8 shadow-2xl">
          <h1 className="text-center p-2 text-6xl block italic font-bold">{t(`finish.have`)} {counter} {counter===1 ? t(`finish.point`) : t(`finish.points`)}</h1>
        </div>
      </div>
    </>
  );
}

export default FinishCard;