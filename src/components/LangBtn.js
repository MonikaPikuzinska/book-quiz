import React from 'react';
import { useDispatch } from 'react-redux';
import {useTranslation} from "react-i18next";

const LangBtn = (props) => {
    const { lang, langf } = props;
    const dispatch = useDispatch();
    const {t, i18n} = useTranslation('common');

    return ( 
        <>
            <button onClick={() => {i18n.changeLanguage(lang); dispatch(langf())}} className="italic font-bold h-12 w-12 border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">{lang}</button>
        </>
     );
};
 
export default LangBtn;