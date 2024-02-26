"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const LocationTile = ({ location, distance, open, close, isPickPressed }) => {



    return (
        <>
            <motion.div initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:1}} transition={{duration:0.15}}
                className='h-[200px] w-[230px] m-2 bg-white rounded-lg flex flex-col justify-start p-4 shadow-md'>
                <div className='flex justify-between'>
                    {/*<div className='bg-red-500 h-28 w-full rounded-md'>
                        <img src='/ewasteFacility.png' className='h-full cover'/>
                    </div>*/}
                </div>
                <div className='w-full p-2'>
                    <h2 className='font-semibold text-slate-700 text-lg'>{location}</h2>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-sm font-medium opacity-60'>distance</p>
                            <p className='text-md font-semibold text-slate-600 '>{distance}</p>
                        </div>
                        <div >
                            <button onClick={() => isPickPressed(true)} className='ml-10 mt-2 w-24  bg-slate-800 hover:bg-slate-900 rounded-md px-2 py-1 text-white'>pick up</button>
                        </div>

                    </div>
                    <div className='w-full flex pt-4 '>
                        <div className='flex items-start '>
                            <div>
                                <p className='text-sm font-medium opacity-60'>opens </p>
                                <p className='text-green-500 font-semibold text-sm'>{open} </p>
                            </div>
                        </div>
                        <div className='flex items-start ml-6'>

                            <div>
                                <p className='text-sm font-medium opacity-60'>closes </p>
                                <p className='text-red-500 font-semibold text-sm'>{close}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default LocationTile