import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
// Step 1: create contex
export const RingCOntext = createContext('Gold Ring');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, setMoney] = useState(0)


    return (
        <div className='gradpa'>
            <h2>Grandapa</h2>
            <p>Has Money: {money}</p>
            {/* Step-2 crate a provider & pass value - in value you can use anything like, functin, array and so on */}
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingCOntext.Provider value='Ring'>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingCOntext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;