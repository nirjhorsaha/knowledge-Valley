import React, { useEffect, useState } from 'react';
import './Main.css'
import Singleblog from '../SingleBlog/Singleblog';

const Main = ({ setTitle, handleSpentTime }) => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div  className='main'>
            {
                blogs.map((blog) => (<Singleblog
                    key={blog.id}
                    blog={blog}
                    setTitle={setTitle}
                    handleSpentTime={handleSpentTime}
                ></Singleblog>))
            }
        </div>
    );
};

export default Main;