import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="w-10/12 mx-auto mt-8 text-oscuro">
                <div className="flex flex-col justify-center w-full">
                    <h3 className="mb-8 text-center">
                        <span className="text-3xl sm:text-4xl lg:text-5xl leading-titles font-bold w-full sm:w-6/12 lg:w-full ">
                            Frequently Asked Question
                        </span>
                    </h3>
                    <div>
                        <div className="relative mb-4 ">
                            <input type="checkbox" id="toggle1" className="toggle hidden" />
                            <label className="title block font-bold bg-white p-4 cursor-pointer" for="toggle1">
                                Props vs state
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <p className="p-4">
                                    Props is short for properties and they are used to pass data between React components. Data from props is read-only, and cannot be modified by a component that is receiving it from outside.
                                    And State is another special built-in object, which allows components to create and manage their own data. State data can be modified by its own component, but is private (cannot be accessed from outside)
                                </p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input type="checkbox" id="toggle2" className="toggle hidden" />
                            <label className="title block font-bold bg-white p-4 cursor-pointer" for="toggle2">
                                How does useState work?
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <p className="p-4">
                                    UseState is a react hook that allows to pass the initial state to this function, and it returns a variable with the current state value and another function to update this value. we can declare useState by const [state, setState] = useState(initialState);
                                    The useState hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.
                                </p>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <input type="checkbox" id="toggle3" className="toggle hidden" />
                            <label className="title block font-bold bg-white p-4 cursor-pointer" for="toggle3">
                                Purpose of useEffect other than fetching data.
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <p className="p-4">
                                    The useEffect hook will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the setState function. This, in turn, will cause the component to render so as to update the DOM with the data. Main thinks is,
                                    <li>when state change it trigger animation on new array value</li>
                                    <li>when props change it update paragraph list on fetched API data update</li>
                                </p>
                            </div>
                        </div>
                        <div className="relative mb-8">
                            <input type="checkbox" id="toggle3" className="toggle hidden" />
                            <label className="title block font-bold bg-white p-4 cursor-pointer" for="toggle3">
                                How Does React work?
                            </label>
                            <div className="content bg-white overflow-hidden">
                                <p className="p-4">
                                    ReactJS is one of the most popular JavaScript libraries for mobile and web application development. A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page. Whenever a React component returns an element, the Virtual DOM will update the real DOM to match. This is How React works.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;


{/* <h1 className='text-center text-3xl my-4 rounded-3xl p-4 bg-blue-200 w-96 mx-auto'>FAQ</h1>
            <div className="grid grid-rows-4 grid-flow-col gap-4 p-6">
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
            </div> */}