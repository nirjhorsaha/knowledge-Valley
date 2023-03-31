import React from 'react';
import './HomePage.css'
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';


const HomePage = () => {
    return (
        <div className='p-4 m-4'>
            <div className="main-container flex flex-wrap ">
                <div className="blog-container w-full md:w-2/3 ">
                    <Main></Main>
                </div>
                <div className="sidebar w-full md:w-1/3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default HomePage;