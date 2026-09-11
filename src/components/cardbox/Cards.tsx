import React from 'react';
import type { ItechnologyType } from '../techType/Type';
import { FaStar } from "react-icons/fa";

interface cardsProps {
    technology: ItechnologyType
}

const Cards = ({ technology }: cardsProps) => {
    return (
        <div>
            <div className="card bg-base-100 w-auto h-auto shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <img src={technology.icon} alt="" className='h-10 w-10'/>
                        </div>
                        <div className='border-2 w-20 h-2 text-center pb-6 rounded-2xl'>
                            <h1 className='text-sm font-semibold'>{technology.badge}</h1>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h1 className='text-2xl font-bold'>{technology.name}</h1>
                        <p className='pt-2'>{technology.description}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='bg-gray-200 rounded-lg text-center p-1'>{technology.category}</div>
                        <div className='text-center p-1'>{technology.difficulty}</div>
                        <div className='text-center p-1'><p className='flex gap-1 items-center'><FaStar />{technology.rating}</p></div>
                    </div>
                    <button className='btn btn-active bg-gray-900 text-white rounded-lg'>Add to Stack</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;