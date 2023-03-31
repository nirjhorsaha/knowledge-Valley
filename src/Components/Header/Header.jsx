import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 p-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl md:text-3xl ">Knowledge Valley</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1680202415~exp=1680203015~hmac=fa75cc68a64ac2562b10ab4bc07de987b385c6abb7a35677cbce6ffca49bd353" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='w-[95%] mx-auto'/>
        </div>
    );
};

export default Header;