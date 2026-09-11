import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { ItechnologyType } from '../techType/Type';
import { FaStar } from "react-icons/fa";
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

interface cardsProps {
    technology: ItechnologyType,
    selectedCards: ItechnologyType[],
    setSelectedCards: Dispatch<SetStateAction<ItechnologyType[]>>
    isAlreadySelected : boolean
}


const Cards = ({ technology, selectedCards, setSelectedCards,isAlreadySelected }: cardsProps) => {

    
    const handleSelect = (technology : ItechnologyType) => {
        if(isAlreadySelected) return;
        toast.success(`${technology.name} is added to stack`)
        setSelectedCards([...selectedCards, technology]);
        
        
    }
    return (
        <div>
            <div className="card bg-base-100 w-auto h-auto shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div>
                            <img src={technology.icon} alt="" className='h-10 w-10' />
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
                    <button onClick={() => handleSelect(technology)} disabled={isAlreadySelected} className={`${isAlreadySelected ? "btn btn-disabled text-pink-500" : "btn btn-active bg-gray-900 text-white"} rounded-lg`}>{isAlreadySelected ? (<span className='flex items-center'><TiTick />Added to stack</span>) : ("Add to Stack")}</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;