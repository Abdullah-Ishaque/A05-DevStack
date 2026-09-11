import React, { type Dispatch, type SetStateAction } from 'react';
import type { ItechnologyType } from '../techType/Type';
import Cards from './Cards';

interface AvailableCardsProps {
    technologise: ItechnologyType[],
    selectedCards: ItechnologyType[],
    setSelectedCards: Dispatch<SetStateAction<ItechnologyType[]>>
}

const AvailableCards = ({ technologise, selectedCards, setSelectedCards}: AvailableCardsProps) => {
    return (
        <div className='grid grid-cols-3 gap-4 mt-24'>
            {
                technologise.map((technology: ItechnologyType, id: number) => {
                    const isAlreadySelected = selectedCards.some(
                        (item) => item.name === technology.name
                    );
                    return (

                        <Cards key={id} technology={technology} selectedCards={selectedCards} setSelectedCards={setSelectedCards} isAlreadySelected={isAlreadySelected}/>

                    )
                })
            }
        </div>
    );
};

export default AvailableCards;