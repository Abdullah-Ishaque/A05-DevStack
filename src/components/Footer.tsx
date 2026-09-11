
import React from 'react';
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='Container pt-8 pl-5 flex justify-between gap-4 h-70'>
            <div className='w-125'>
                <img src={Logo} alt="" />
                <p className='pt-4'>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <ul className='flex gap-4 pt-8'>
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
                <p className='pt-17'>© 2026 Dev Stack. All rights reserved.</p>
            </div>
            
        </div>
    );
};

export default Footer;