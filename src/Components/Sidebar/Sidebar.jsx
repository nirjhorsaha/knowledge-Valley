import React from 'react';
import './Sidebar.css'

const Sidebar = ({ time, titles }) => {
    // console.log(titles);
    return (
        <div className='sidebar'>
            <div className='border p-4 rounded-2xl w-full bg-blue-200'>
                <p>Spent time on read : {time} min</p>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl border rounded-3xl mt-6">
                <div className='p-4 rounded-2xl'>
                    <h2 className='text-xl p-2'>Bookmarked Blogs : 0</h2>
                    <div>
                        {
                            titles.map(title => (
                                <p className='p-4 border mt-3 rounded-2xl'>{title}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;