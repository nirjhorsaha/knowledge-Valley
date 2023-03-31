import React, { useState } from 'react';
import './HomePage.css'
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const HomePage = () => {
    const [time, setTime] = useState(0)
    // console.log(time);
    const [titles, setTitle] = useState([])
    // let setTitle = [];
    // console.log(title);
    
    return (
        <div className='p-4 m-4'>
            <div className="main-container flex flex-wrap">
                <div className="blog-container w-full md:w-2/3 ">
                    <Main setTitle={setTitle} setTime={setTime}></Main>
                </div>
                <div className="sidebar w-full md:w-1/3">
                    <Sidebar titles={titles} time={time}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default HomePage;