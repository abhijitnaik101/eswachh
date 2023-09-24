"use client"
import TopNav from '@/Components/TopNav';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { app } from '../Firebase';

const HomeView = ({props}) => {

    const auth = getAuth(app);

    
    const backG = [
        {backgroundImage : "url('joinusblack.png')",},
        {backgroundImage: "url('aboutus.png')"},
        {backgroundImage: "url('volunteers.png')"},
    ]

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("you are logged in");
                setUser(user)
            }
            else {
                console.log("you are logged out");
                setUser(null)
            }
        })
    }, [])
    return (
        <>
        <main className='bg-slate-50'>

            <div>
                <div className="h-96 w-full bg-green-400 bg-cover flex justify-center items-center" style={backG[0]}>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[50px] font-semibold text-white'>ECOFINDER</p>
                        <p className='text-[15px] text-white'>FINDS YOUR WAY TO LACATE AND DISPOSE YOUR E-WASTE</p>
                        {
                            user !== null ? <Link href='/SignIn' className='bg-green-600 hover:bg-green-700 py-2 px-5 text-green-50 font-semibold rounded-lg m-4'>YOU ARE LOGGED IN</Link>
                            : <Link href='/SignIn' className='bg-green-600 hover:bg-green-700 py-2 px-5 text-green-50 font-semibold rounded-lg m-4'>JOIN US</Link>
                        }
                        
                        
                    </div>
                </div>

                <h1 className="h-48 w-30 text-5xl font-serif text-center pt-6"> WELCOME!</h1>
                <Link href='/FaciliyHome' className='px-3 py-6 bg-blue-500 text-white font-medium hover:bg-blue-600'>join as facility</Link>
                <div className="flex justify-evenly items-center ">
                    <div className="h-full w-[600px] text-black pt-4 ml-10">

                        <h1 className=" text-2xl font-bold text-black "> ABOUT US </h1>
                        <p className='py-6 text-justify text-slate-600'>Eco Finder is a digital platform designed to help individuals and businesses locate, manage, and responsibly dispose of electronic waste (e-waste). It brings together the recycling and waste management organizations and programs to move the towards a circular economy that reduces e-waste and reuses all materials.
                        </p>
                        < button onClick={() => signOut(auth)} className="text-sm  text-green-500 px-4 py-2 border-green-500 border-2 font-medium rounded-lg hover:bg-green-500 hover:text-white"> Read more </button>
                    </div>

                    <div className="h-[400px] w-[600px] bg-green-500 ml-5 bg-cover" style={backG[1]}>

                    </div>
                </div>
            </div>



            <div className='py-40  relative'>

                <div className='absolute h-56 w-56 rounded-full -z-10 filter blur-3xl left-3 top-44'></div>

                <div>
                    <h1 className="text-black-500 text-center pt-20 text-3xl h-40 font-bold"> OUR MISSION</h1>
                </div>

                <div className="flex justify-evenly">

                    <div className='relative flex flex-col items-center pt-14'>
                        <div className='absolute top-0 h-36 w-36'>
                            <img src='/location.png' />
                        </div>
                        <div className="bg-white w-[380px] h-[400px] rounded-xl flex flex-col justify-center items-center shadow-md">
                            <h2 className='font-semibold text-lg p-4 '> EASY LOCATE</h2>
                            <p className='px-8 text-justify text-slate-600'>
                                The system provides location-based services to help users find the nearest e-waste recycling centers, drop-off points, or pickup services. Users can input their location or use geolocation to identify nearby options.
                            </p>
                        </div>
                    </div>

                    <div className='relative flex flex-col items-center pt-14'>
                        <div className='absolute top-0 h-36 w-36'>
                            <img src='/public.png' />
                        </div>
                        <div className="bg-white w-[380px] h-[400px] rounded-xl flex flex-col justify-center items-center shadow-md">
                            <h2 className='font-semibold text-lg p-4'>PUBLIC AWARENESS</h2>
                            <p className='px-8 text-justify text-slate-600'>
                                Increase public awareness about the significance of e-waste, its environmental impact, and the importance of recycling and proper disposal practices.
                            </p>
                        </div>
                    </div>


                    <div className='relative flex flex-col items-center pt-14'>
                        <div className='absolute top-0 h-36 w-36'>
                            <img src='/disposal.png' />
                        </div>
                        <div className="bg-white w-[380px] h-[400px] rounded-xl flex flex-col justify-center items-center shadow-md">
                            <h2 className='font-semibold text-lg p-4 '>SELF DISPOSAL</h2>
                            <p className='px-8 text-justify text-slate-600'>
                                The users can upload pictures of their electronic devices and can earn credits as per the useful metals collected from the dispose.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="flex pt-10 justify-evenly">

                    <div className="h-[433px] w-[650px] bg-green-500 bg-cover" style={backG[2]}> </div>


                    <div className="h-[433px] w-[650px] flex flex-col justify-center">
                        <div>
                            <h1 className='text-2xl font-bold text-black'> OUR VOLUNTEERS</h1>
                            <p className='py-6 text-slate-600 font-medium text-justify'>Our volunteers play a crucial role in e-waste disposal and management by contributing their time, expertise, and efforts to promote responsible practices and mitigate the environmental impact of electronic waste.
                            </p>
                        < button className="text-sm  text-green-500 px-4 py-2 border-green-500 border-2 font-medium rounded-lg hover:bg-green-500 hover:text-white"> Read more </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center py-52'>
                <h1 className="font-bold sherif text-3xl"> EVENTS</h1>
                <div className="w-[1430px] h-[500.81px] bg-green-500"> </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className="bg-slate-800 h-[460px] w-full flex justify-center items-start pt-20">
                    <div className='flex flex-col justify-center items-start w-1/4 pl-20'>
                        <h2 className='py-8 text-lg font-medium text-white'>USEFUL LINKS</h2> 
                        <p className=' text-white'>About Us</p>
                        <p className=' text-white'>Services</p>
                        <p className=' text-white'>Contact Us</p>
                        <p className=' text-white'>Help</p>
                        <p className=' text-white'>Disclaimer</p>
                    </div>
                    <div className='flex flex-col justify-center items-start w-1/4 pl-20'>
                        <h2 className='py-8 text-lg font-medium text-white'>SUPPORT</h2> 
                        <p className=' text-white'>OUTR, Techno campus, Ghatikiya, BBSR</p>
                        <p className=' text-white'>PIN - 751003</p>
                    </div>
                    <div className='flex flex-col justify-center items-start w-1/4 pl-20'>
                        <h2 className='py-8 text-lg font-medium text-white'>SOCIALS</h2> 
                        <p className=' text-white'>@abhijitnaik101@gmail.com</p>
                        <p className=' text-white'>_abhijit_naik</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default HomeView