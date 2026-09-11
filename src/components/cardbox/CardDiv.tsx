import { use, useState } from 'react';
import type { ItechnologyType } from '../techType/Type';
import AvailableCards from './AvailableCards';
import Selectedcards from './Selectedcards';
import { toast } from 'react-toastify';

interface CardDivProps {
    technologyPromise: Promise<ItechnologyType[]>
}

const CardDiv = ({ technologyPromise }: CardDivProps) => {
    const technologise = use(technologyPromise);
    
    const [selectedCards , setSelectedCards] = useState<ItechnologyType[]>([])
    const [isSelected, setIsSelected] = useState(false)

    const handleRemoveAll = () => {
        toast.error("Removed all technologies from stack")
        setSelectedCards([])
    }


    return (
        <div className='Container grid grid-cols-4'>
            <div className='grid col-span-3'>
                <div>
                    <p><span className='text-black font-extrabold text-5xl'>Explore the</span> <span className='bg-linear-to-r from-pink-600 to-purple-700 text-5xl bg-clip-text text-transparent font-extrabold'>Technologies</span></p>
                    <h2 className='text-gray-500 pt-4 font-bold text-1xl'>Pick one technology per category to build your ideal stack.</h2>
                </div>
                <div>
                    <AvailableCards technologise={technologise} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
                </div>
            </div>
            <div className='pt-50'>
                <Selectedcards selectedCards={selectedCards} setSelectedCards={setSelectedCards} isSelected={isSelected} setIsSelected={setIsSelected}/>
                {(selectedCards.length === 0)? (""): (<button onClick={() => handleRemoveAll()} className="btn w-full mt-4 border border-red-600 rounded-lg font-semibold text-lg text-red-600">Remove all</button>)}
            </div>
        </div>
    );
};

export default CardDiv;