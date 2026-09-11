
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
            <div>
                <h2>PRODUCT</h2>
                <ul className='flex flex-col pt-5'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div>
                <h2>COMPANY</h2>
                <ul className='flex flex-col pt-5'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <h2>LEGAL</h2>
                <ul className='flex flex-col pt-5'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>

                <ul className='flex gap-4 pt-30 pl-20'>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;