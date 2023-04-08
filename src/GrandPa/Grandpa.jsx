import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingCOntext = createContext('Gold Ring')
const Grandpa = () => {
    // Step 1: create contex
     
    // Step-2: use contex

    return (
        <div className='gradpa'>
          <h2>Grandapa</h2>
          {/* Step-2 crate a provider & pass value - in value you can use anything like, functin, array and so on */}
            <RingCOntext.Provider value='Ring'>
            <section className='flex'>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
            </RingCOntext.Provider>
        </div>
    );
};

export default Grandpa;