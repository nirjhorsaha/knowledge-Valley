import React, { useState } from 'react';
import './HomePage.css'
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

const HomePage = () => {
    const [time, setTime] = useState([])
    const [titles, setTitle] = useState([])
    // console.log(time);

    const handleSpentTime = (item) => {
        setTime([...time, item]);
    }


    const handleBookMark = (item) => {
        if (!singleData.includes(item)) {
            setSingleData([...singleData, item]);
            toast.success('Book Marked Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error('Already Bookmarked', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }
    
    return (
        <div className='p-4 m-4 homepage'>
            <div className="main-container flex flex-wrap">
                <div className="blog-container w-full md:w-2/3 ">
                    <Main setTitle={setTitle}  handleSpentTime={handleSpentTime}></Main>
                </div>
                <div className="sidebar w-full md:w-1/3">
                    <Sidebar titles={titles} time={time}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default HomePage;