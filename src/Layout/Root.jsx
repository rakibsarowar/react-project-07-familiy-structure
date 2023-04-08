import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1>Hello! This is main room</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;