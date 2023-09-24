"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Profile from './profile';

const TopNav = () => {

    return (
        <>
                <nav className='sticky top-0 z-10 w-full'>
                    <div className='shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 flex justify-between items-center h-[80px] w-full'>
                        <div className='flex'>
                            <div className='bg-white ml-10 mr-5 h-[30px] w-[30px]'></div>
                            <p className='text-2xl text-white font-bold'>ECOFINDER</p>
                        </div>

                        <div className='w-[700px] flex justify-evenly items-center p-[5px]'>
                            <Link href='/HomeView' className='text-white hover:font-semibold'>HOME</Link>
                            <a href='/Location' className='text-white hover:font-semibold'>LOCATE</a>
                            <Link href='/Device' className='text-white hover:font-semibold'>DISPOSE</Link>
                            <Link href='/' className='text-white hover:font-semibold'>KNOW US</Link>
                            <Link href='/' className='text-white hover:font-semibold'>EVENTS</Link>
                            <Link href='/SignIn' className='px-3 py-1 border-2 hover:border-emerald-500 border-white rounded-md text-white font-medium hover:bg-emerald-600'>Logout</Link>
                        </div>
                    </div>
                </nav>
        </>
    )
}
export default TopNav