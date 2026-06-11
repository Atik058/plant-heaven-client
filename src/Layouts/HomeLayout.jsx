import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
            </Outlet>
        </div>
    );
};

export default HomeLayout;