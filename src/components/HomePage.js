import React from 'react';
import crown from '../img/crown.svg';
import harry from '../img/harry-potter.svg';
import twilight from '../img/twilight.svg';
import hunger from '../img/hunger.png';

const HomePage = () => {
    return ( 
        <>
            <div className="grid grid-flow-col grid-flow-row grid-cols-4 grid-rows-3 bg-gray-200">
                <button className="h-12 border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline row-start-0 row-end-0 justify-self-end gap-1 col-end-4 col-start-4">en</button>
                <button className="w-10 h-12 gap-1 justify-self-end row-start-0 row-end-0 col-end-4 col-start-4 bg-blue-400 row-span-1">pl</button>
                <h1>Book quizzes</h1>
                <div>
                    <title>Throne of glass</title>
                    <img src={crown}/>
                </div>
                <div>
                    <title>Harry Potter</title>
                    <img src={harry}/>
                </div>
                <div>
                    <title>Twilight</title>
                    <img src={twilight}/>
                </div>
                <div>
                    <title>The Hunger Games</title>
                    <img src={hunger}/>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;