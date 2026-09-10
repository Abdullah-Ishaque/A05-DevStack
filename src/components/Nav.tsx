import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='Container flex justify-between items-center gap-4 sticky top-0'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='text-gray-500 flex gap-4'>
                    <li className='text-purple-600'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex justify-between gap-5'>
                <button className='btn btn-ghost btn-secondary rounded-3xl text-gray-500 '>Sign in</button>
                <button className="btn btn-active btn-secondary rounded-3xl">Sign out</button>
            </div>
        </nav>
    );
};

export default Nav;