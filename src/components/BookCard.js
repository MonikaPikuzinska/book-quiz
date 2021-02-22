import React from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import {useTranslation} from "react-i18next";

const BookCard = (props) => {
    const { color, img, title, funName, funColor } = props;
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation('common');

    return ( 
        <>
            <div onClick={() => {dispatch(funName()); dispatch(funColor())}} id="0" className="flex-1 self-center shadow-2xl m-0 cursor-pointer hover:scale-110 transform transition duration-500 w-100 h-150 flex flex-col">
                <Link to={title}>
                    <img className={`bg-${color}-400 p-8`} src={img}/>
                    <p className={`self-center block p-3 text-${color}-400 text-2xl font-bold`}>{t(`welcome.${title}`)}</p>
                </Link>
            </div>
        </>
     );
};
 
export default BookCard;