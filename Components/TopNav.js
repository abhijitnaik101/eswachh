"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Profile from './profile';

const TopNav = () => {

    return (
        <>
            <nav className='sticky top-0 z-20 w-full'>
                <div className='shadow-md bg-white flex justify-between items-center h-[80px] w-full '>
                    <div className='flex items-center'>
                        <div className='ml-10 mr-5 h-[50px] w-[50px]'>
                            <img src='/logo.png' className='h-full w-full' />
                        </div>
                        <p className='text-2xl font-bold'>E-Swachh.</p>
                    </div>

                    <div className='w-[700px] flex justify-evenly items-center text-black p-[5px] font-medium text-lg'>
                        <Link href='/HomeView' className='hover:bg-slate-100 hover:text-xl duration-300 h-8 w-24 rounded-md text-center'>Home</Link>
                        <a href='/Location' className='hover:bg-slate-100 hover:text-xl duration-300 h-8 w-24 rounded-md text-center'>Locate</a>
                        <Link href='/Device' className='hover:bg-slate-100 hover:text-xl duration-300 h-8 w-24 rounded-md text-center'>Dispose</Link>
                        <Link href='/Awareness' className='hover:bg-slate-100 hover:text-xl duration-300 h-8 w-28 rounded-md text-center'>Awareness</Link>

                        <Link href='/SignIn' className='px-3 py-2 border-2 rounded-lg text-white bg-gradient-to-r from-violet-500 to bg-indigo-500 hover:from-violet-600 hover:to-indigo-600 hover:border-violet-500'>Logout</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default TopNav