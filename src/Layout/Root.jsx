import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <div className='mt-16'>
            <Footer/>
         </div>
        </div>
    );
};

export default Root;