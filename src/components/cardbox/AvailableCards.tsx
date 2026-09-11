import React from 'react';
import type { ItechnologyType } from '../techType/Type';
import Cards from './Cards';

interface AvailableCardsProps {
    technologise: ItechnologyType[]
}

const AvailableCards = ({ technologise }: AvailableCardsProps) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                technologise.map((technology: ItechnologyType, id: number) => {
                    return(
                        <Cards key={id} technology={technology}/>
                        
                    )
                })
            }
        </div>
    );
};

export default AvailableCards;