import React from 'react';
import './SingleBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Singleblog = (props) => {
    console.log(props);
    const {id, name,title, img, time, date,avatar } = props.blog;
    return (
        <div>
            <div className="card card-compact w-full md:w-5/6  bg-base-100 shadow-xl p-4 rounded-3xl mb-6">
                <figure><img src="https://img.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table_53876-165168.jpg?w=740&t=st=1680200933~exp=1680201533~hmac=484590d986603ba83757a685f63c98545b26df5050857944e51a9f46a10903fc" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1680202415~exp=1680203015~hmac=fa75cc68a64ac2562b10ab4bc07de987b385c6abb7a35677cbce6ffca49bd353" />
                                </div>
                            </label>
                            <div>
                                <h2 className="card-title text-lg">{name}</h2>
                                <p>Date</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold'>5 min read <a href=""><FontAwesomeIcon icon={faBookmark} /></a>
                            </p>
                        </div>
                    </div>
                    <h2 className='text-2xl'>If a dog chews shoes whose shoes does he choose?</h2>
                    <p className='font-bold'> #beginner #programming</p>
                    <div className="card-actions justify-start">
                        <a href="" className='italic'>Mark as read</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singleblog;