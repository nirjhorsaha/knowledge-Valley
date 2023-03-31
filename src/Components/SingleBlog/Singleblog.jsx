import React from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Singleblog = (props) => {
    // console.log(props);
    const {name,title, img, time, date,avatar } = props.blog;
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
                            <div>
                                <h2 className="card-title text-lg">{name}</h2>
                                <p>{date}</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>{time} min read <a href=""><FontAwesomeIcon icon={faBookmark} /></a>
                            </p>
                        </div>
                    </div>
                    <h2 className='text-2xl'>{title}</h2>
                    <p className='font-bold'> #beginner #programming</p>
                    <div className="card-actions justify-start">
                        <a href="" className='italic'>Mark as read</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Singleblog;