import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='text-center text-3xl my-4 rounded-3xl p-4 bg-blue-200 w-96 mx-auto'>QA</h1>
            <div class="grid grid-rows-4 grid-flow-col gap-4 p-6">
                <div className='border-2 rounded-3xl w-full p-4'>
                    <h1 className='text-lg font-bold '># Props vs state</h1>
                    <p>Props is short for properties and they are used to pass data between React components. Data from props is read-only, and cannot be modified by a component that is receiving it from outside.
                    And State is another special built-in object, which allows components to create and manage their own data. State data can be modified by its own component, but is private (cannot be accessed from outside)</p>
                </div>
                <div className='border-2 rounded-3xl w-full p-4'>
                    <h1 className='text-lg font-bold'># How does useState work?</h1>
                    <p>UseState is a react hook that allows to pass the initial state to this function, and it returns a variable with the current state value and another function to update this value. we can declare useState by const [state, setState] = useState(initialState);
                    The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.
                    </p>
                </div>
                <div className='border-2 rounded-3xl w-full p-4'>
                    <h1 className='text-lg font-bold'># Purpose of useEffect other than fetching data.</h1>
                    <p>The useEffect hook will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the setState function. This, in turn, will cause the component to render so as to update the DOM with the data. Main thinks is,
                        <li>when state change it trigger animation on new array value</li>
                        <li>when props change it update paragraph list on fetched API data update</li>
                    </p>
                </div>
                <div className='border-2 rounded-3xl w-full p-4'>
                    <h1 className='text-lg font-bold'># How Does React work?</h1>
                    <p>
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page. Whenever a React component returns an element, the Virtual DOM will update the real DOM to match. This is How React works.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;