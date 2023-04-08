import React, { useContext } from 'react';
import { RingCOntext } from '../GrandPa/Grandpa';

const Myself = () => {
    const angti = useContext(RingCOntext)
    return (
        <div>
            <h2>Myself</h2>
            <h2>Gift from Granpa: {angti}</h2>
        </div>
    );
};

export default Myself;