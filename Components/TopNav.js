"use client"
import Link from 'next/link';
import React from 'react';


const TopNav = () => {

    return (
        <>
            
                <nav className='sticky top-0 z-10 w-full'>
                    <div className='shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 flex justify-between items-center h-[80px] w-full'>
                        <div className='flex'>
                            <div className='bg-white ml-10 mr-5 h-[30px] w-[30px]'></div>
                            <p className='text-2xl text-white font-bold'>ECOFINDER</p>
                        </div>

                        <div className='w-[40%] flex justify-evenly items-center p-[5px]'>

                            <Link href='/HomeView' className='text-white'>HOME</Link>
                            <Link href='/Location' className='text-white'>LOCATE</Link>
                            <Link href='/' className='text-white'>DISPOSE</Link>
                            <Link href='/' className='text-white'>KNOW US</Link>
                            <Link href='/' className='text-white'>EVENTS</Link>

                        </div>
                    </div>
                </nav>
            

        </>
    )
}
export default TopNav