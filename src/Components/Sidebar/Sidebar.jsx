import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='border p-4 rounded-3xl w-full bg-blue-200'>
                <p>Spent time on read : 0 min</p>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl border rounded-3xl mt-6">
                <div className='p-4 rounded-3xl'>
                    <h2 className='text-xl p-2'>Bookmarked Blogs : 0</h2>
                    <div className=''>
                        <p className='p-4 border mt-3 rounded-3xl'>Master Microsoft Power Platform and Become an In-Demand!</p>
                        <p className='p-4 border mt-3 rounded-3xl'>Master Microsoft Power Platform and Become an In-Demand!</p>
                        <p className='p-4 border mt-3 rounded-3xl'>Master Microsoft Power Platform and Become an In-Demand!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;