import React from 'react';
import {useTranslation} from "react-i18next";
import crown from '../img/crown.svg';
import harry from '../img/harry-potter.svg';
import twilight from '../img/twilight.svg';
import hunger from '../img/hunger.svg';

const HomePage = () => {

    const {t, i18n} = useTranslation('common');

    return ( 
        <>
            <div className="flex flex-col">
                <button onClick={() => i18n.changeLanguage('en')} className="italic font-bold h-12 w-12 border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">en</button>
                <button onClick={() => i18n.changeLanguage('pl')} className="italic font-bold h-12 w-12 border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">pl</button>
                <h1 className="p-4 text-center self-center block italic font-bold text-8xl text-gray-700">{t('welcome.title')}</h1>
                <div className="p-20 flex flex-wrap flex-row space-y-14 space-x-14">
                    <div className="flex-1 self-center shadow-2xl cursor-pointer hover:scale-110 transform transition duration-500 w-100 h-150 flex flex-col">
                        <img className="bg-green-400 p-8" src={crown}/>
                        <p className="self-center block p-3 text-green-400 text-2xl font-bold">{t('welcome.throne')}</p>
                    </div>
                    <div className="flex-1 self-center shadow-2xl cursor-pointer hover:scale-110 transform transition duration-500 w-100 h-150 flex flex-col">
                        <img className="bg-indigo-400 p-8" src={harry}/>
                        <p className="self-center block p-3 text-indigo-400 text-2xl font-bold">{t('welcome.harry')}</p>
                    </div>
                    <div className="flex-1 self-center shadow-2xl cursor-pointer hover:scale-110 transform transition duration-500 w-100 h-150 flex flex-col">
                        <img className="bg-gray-400 p-8" src={twilight}/>
                        <p className="self-center block p-3 text-gray-400 text-2xl font-bold">{t('welcome.twilight')}</p>
                    </div>
                    <div className="flex-1 self-center shadow-2xl cursor-pointer hover:scale-110 transform transition duration-500 w-100 h-150 flex flex-col">
                        <img className="bg-red-400 p-8" src={hunger}/>
                        <p className="self-center block p-3 text-red-400 text-2xl font-bold">{t('welcome.hunger')}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;