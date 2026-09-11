import React, { type Dispatch, type SetStateAction } from 'react';
import type { ItechnologyType } from '../techType/Type';

interface selectedCardsProps{
    selectedCards : ItechnologyType[],
    setSelectedCards : Dispatch<SetStateAction<ItechnologyType[]>>
}

const Selectedcards = ({selectedCards , setSelectedCards} : selectedCardsProps) => {
    return (
        <div>
            {
                selectedCards.map((selectedCard) => {
                    return(
                        <div>
                            <h2>{selectedCard.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Selectedcards;