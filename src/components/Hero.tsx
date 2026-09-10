import React from 'react';
import Banner from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className='Container pt-15 h-140 flex justify-between content-center'>
            <div className='pt-25'>
                <h1 className='text-5xl font-extrabold text-black'>Build Your Ideal</h1>
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Development Stack
                </h1>
                <p className='text-gray-500 w-110 pt-10'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className='flex gap-4'>
                <button className='btn  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 w-45 h-12 rounded-xl mt-10'>Explore Technologies</button>
                <button className='btn-neutral cursor-pointer text-gray-500 h-12 mt-10 w-45 border-2 border-zinc-400 rounded-lg'>Learn more</button>
                </div>
            </div>
            <div className='pb-1200'>
                <img src={Banner} alt="" className='w-auto h-auto'/>
            </div>
        </div>
    );
};

export default Hero;