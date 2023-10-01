"use client"
import React, { useState } from 'react';



const LocationTile = ({ location, distance, open, close, isPickPressed }) => {

    
    
    return (
        <>
            <div className='h-max w-[90%] mx-4 mb-4 bg-white rounded-lg flex flex-col justify-between p-4 shadow-md'>
                <div className='flex justify-between'>
                    {/*<div className='bg-red-500 h-28 w-full rounded-md'>
                        <img src='/ewasteFacility.png' className='h-full cover'/>
    </div>*/}
                </div>
                <div className='w-full p-2 '>
                    <h2 className='font-semibold text-slate-700 text-lg'>{location}</h2>
                    <p className='text-sm font-medium opacity-60'>distance</p>
                    <p className='text-md font-semibold text-slate-600 '>{distance}</p>

                    <div className='w-full flex justify-center pt-4 '>
                        <div className='flex items-start '>
                            <img src='/check.png' className='h-5 w-5 mt-2 mr-2 opacity-60' />
                            <div>
                                <p className='text-sm font-medium opacity-60'>opens </p>
                                <p className='text-green-500 font-semibold text-sm'>{open} </p>
                            </div>
                        </div>
                        <div className='ml-6 flex items-start'>
                            <img src='/close.png' className='h-5 w-5 mt-2 mr-2 opacity-60' />
                            <div>
                                <p className='text-sm font-medium opacity-60'>closes </p>
                                <p className='text-red-500 font-semibold text-sm'>{close}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => isPickPressed(true)} className='ml-10 mt-2 w-24  bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-1 text-white'>pick up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationTile