import React, { useEffect, useState } from 'react';
import './Sidebar.css'

const Sidebar = ({ time, titles }) => {
    console.log(titles.length);

    const [totalTime, setTotalTime] = useState(0)
    useEffect(() => {
        const newTime = time.reduce((prevTime, item) => {
            return prevTime + item.time
        }, 0)
        setTotalTime(newTime);

    }, [time])
    
    return (
        <div className='sidebar'>
            <div className='border p-4 rounded-2xl w-full bg-slate-300'>
                <p className='text-xl p-2 font-bold'>Spent time on read : {totalTime} min</p>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl border rounded-2xl mt-6">
                <div className='p-4 rounded-2xl bg-slate-100'>
                    <h2 className='text-xl p-2 font-bold'>Bookmarked Blogs : {titles.length}</h2>
                    <div>
                        {
                            titles.map(title => (
                                <p className='p-4 border mt-3 rounded-2xl bg-white'>{title}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;