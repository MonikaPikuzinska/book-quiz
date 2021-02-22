import React from 'react';
import {useTranslation} from "react-i18next";
import Crown from '../img/crown.svg';
import Harry from '../img/harry-potter.svg';
import Twilight from '../img/twilight.svg';
import Hunger from '../img/hunger.svg';
import { en, pl, throne, harry, twilight, hunger, green, indigo, gray, red } from '../actions';
import BookCard from './BookCard';
import LangBtn from './LangBtn';

const HomePage = () => {

    const {t, i18n} = useTranslation('common');

    return ( 
        <>
            <div className="flex flex-col">
                <LangBtn lang={'en'} langf={en}/>
                <LangBtn lang={'pl'} langf={pl}/>
                <h1 className="p-4 text-center self-center block italic font-bold text-8xl text-gray-700">{t('welcome.title')}</h1>
                <div className="p-20 flex flex-wrap flex-row justify-around">
                    <BookCard color={'green'} img={Crown} title={'throne'} funName={throne} funColor={green}/>
                    <BookCard color={'indigo'} img={Harry} title={'harry'} funName={harry} funColor={indigo}/>
                    <BookCard color={'gray'} img={Twilight} title={'twilight'} funName={twilight} funColor={gray}/>
                    <BookCard color={'red'} img={Hunger} title={'hunger'} funName={hunger} funColor={red}/>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;