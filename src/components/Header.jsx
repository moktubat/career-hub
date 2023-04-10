import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className="relative flex items-center justify-between font-bold">
        
                <Link to='/' className="text-3xl">Job-Hunting</Link>

                <ul className="items-center hidden space-x-8 lg:flex">
                    <li><NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')} >Statistics</NavLink></li>
                    <li><NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? 'active' : 'default')} >Applied Jobs</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')} >Blog</NavLink></li>
                </ul>

                <button className='btn'>
                Start Applying
                </button>
        </div>
      </div>
    );
};

export default Header;