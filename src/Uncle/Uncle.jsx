import React, { useContext } from 'react';
import { MoneyContext } from '../GrandPa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa Money: {money}</p>
            <button onClick={()=> setMoney(money+1000)}>Sent 1000 taka</button>
        </div>
    );
};

export default Uncle;