import React, { useEffect, useState } from 'react';
import './Main.css'
import Singleblog from '../SingleBlog/Singleblog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const handleTime = () => {
        console.log('time');
    }

    return (
        <div>
            {
                blogs.map((blog) => (<Singleblog
                    key={blog.id}
                    blog={blog}
                    handleTime={handleTime}
                ></Singleblog>))
            }
        </div>
    );
};

export default Main;