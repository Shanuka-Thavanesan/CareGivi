import React from 'react';
import {caretakers} from './../../assets/data/caretakers';
import Caretakerscard from './Caretakerscard';

const CaretakerList =()=>{
    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
        {caretakers.map(caretaker =>(
        <Caretakerscard key={caretaker.id} caretaker={caretaker}/>))}
    </div>  
};

export default CaretakerList;