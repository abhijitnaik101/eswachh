import React from 'react';

const LocationTile = ({ location, open }) => {
    
    return(
        <>
        <div className='h-24 w-[90%] m-4 bg-white rounded-lg flex flex-col justify-evenly p-4'>
            <h2 className='font-semibold text-slate-700 text-lg'>{location}</h2>
            <p className='text-slate-600 font-semibold text-sm'>{open}</p>
        </div>
        </>
    )
}

export default LocationTile