import React from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Singleblog = (props) => {
    // console.log(props.blog.time);
    const { name, title, img, time, date, avatar } = props.blog;
    const { handleTime } = props.handleTime;
    console.log(props);

    return (
        <>
            <div className="card card-compact w-full md:w-11/12 bg-base-100 shadow-xl p-4 rounded-3xl mb-6 ">
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
                            <p className='font-bold'>{time} min read            <button>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                            </p>
                        </div>
                    </div>
                    <h2 className='text-2xl'>{title}</h2>
                    <p className='font-bold'> #beginner #programming</p>
                    <div className="card-actions justify-start">
                        <button onClick={handleTime} className='italic'>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singleblog;