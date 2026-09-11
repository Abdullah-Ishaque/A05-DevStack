import React, { type Dispatch, type SetStateAction } from 'react';
import type { ItechnologyType } from '../techType/Type';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

interface selectedCardsProps {
    selectedCards: ItechnologyType[],
    setSelectedCards: Dispatch<SetStateAction<ItechnologyType[]>>,
    isSelected: boolean,
    setIsSelected: Dispatch<SetStateAction<boolean>>
}

const Selectedcards = ({ selectedCards, setSelectedCards, isSelected, setIsSelected }: selectedCardsProps) => {
    const handleReomoveCard = (selectedCard: ItechnologyType) => {
        const restCards = selectedCards.filter((card) => {
            return card.name != selectedCard.name
        })
        toast.error(`Removed ${selectedCard.name}`)
        setSelectedCards(restCards)
        setIsSelected(false)
    }
    return (
        <div>
            {

                <div>

                    <h1 className='font-bold text-2xl'>Your Stack</h1>
                    <h1>{selectedCards.length === 0 ? ("No technologies selected yet.") : (`${selectedCards.length} Technology Selected`)}</h1>
                    {selectedCards.map((selectedCard) => {
                        return (
                            <div>
                                <div className='border border-gray-400 mt-2 rounded-lg p-2 flex justify-between items-center'>
                                    <div className='flex items-center gap-4'>
                                        <div><img src={selectedCard.icon} alt="" className='w-7 h-7' /></div>
                                        <div>
                                            <h1 className='font-semibold'>{selectedCard.name}</h1>
                                            <h1 className='text-gray-600'>{selectedCard.category}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleReomoveCard(selectedCard)} className='btn'><RxCross2 /></button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}

                </div>
            }
        </div>
    );
};

export default Selectedcards;