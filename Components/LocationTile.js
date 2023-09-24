import React from 'react';

const LocationTile = ({ location, open }) => {

    return (
        <>
            <div className='h-max w-[90%] mx-4 mb-4 bg-white rounded-lg flex flex-col justify-between p-4 shadow-md'>
                <div className='flex justify-between'>
                    <div className='bg-red-500 h-28 w-full rounded-md'></div>
                </div>
                <div className='w-3/5 p-2'>
                    <h2 className='font-semibold text-slate-700 text-lg'>{location}</h2>
                    <p className='text-sm font-medium opacity-60'>distance</p>
                    <p className='text-md font-semibold text-slate-600 '>87km</p>

                    <div className='flex justify-start pt-4'>
                        <div className='flex items-start'>
                            <img src='/check.png' className='h-5 w-5 mt-2 mr-2 opacity-60' />
                            <div>
                                <p className='text-sm font-medium opacity-60'>opens </p>
                                <p className='text-green-500 font-semibold text-sm'>{open} </p>
                            </div>

                        </div>
                        <div className='pl-6 flex items-start'>
                            <img src='/close.png' className='h-5 w-5 mt-2 mr-2 opacity-60' />
                            <div>
                                <p className='text-sm font-medium opacity-60'>opens </p>
                                <p className='text-red-500 font-semibold text-sm'>{open} </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LocationTile