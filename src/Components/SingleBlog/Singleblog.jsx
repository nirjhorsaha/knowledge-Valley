import React, { useState } from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const Singleblog = ({ blog, setTitle, handleSpentTime }) => {
    const { name, title, img, time, date, avatar } = blog;
    // console.log(handleSpentTime);

    const handleTitles = (title) => {

        setTitle(prevTitle => [...prevTitle, title])
        // toast added in bookmark click handler
        toast.success('Bookmark Added.!', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <>
            <div className="card card-compact w-full md:w-11/12 bg-base-100 shadow-xl p-4 rounded-2xl mb-6 ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </label>
                            <div className='ms-2'>
                                <h2 className="card-title text-lg">{name}</h2>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div>
                            <p onClick={() => handleTitles(title)} className='font-bold  tracking-wide'>{time} min read <button>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                            </p>
                        </div>
                    </div>
                    <h2 className='text-2xl'>{title}</h2>
                    <div className='flex justify-start w-20 gap-2'>
                        <p className='font-bold bg-slate-300 w-32 rounded-full p-1'> Beginner </p>
                        <p className='font-bold bg-slate-300 w-28 rounded-full p-1'> Programming </p>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleSpentTime(blog)} className='italic mt-2 hover:text-red-600 '>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singleblog;