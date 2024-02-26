"use client"
import TopNav from '@/Components/TopNav';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { app } from '../Firebase';
import { AnimatePresence, motion } from 'framer-motion';

const HomeView = ({ props }) => {
    //initialized authentication
    const auth = getAuth(app);

    const backG = [
        { backgroundImage: "url('joinusblack.png')", },
        { backgroundImage: "url('aboutus.png')" },
        { backgroundImage: "url('volunteers.png')" },
        { backgroundImage: "url('events.png')" }
    ]

    //user for signin/signup
    const [user, setUser] = useState(null);

    //tracks the signin/signup state of user.
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
                    {/* <div className="h-96 w-full bg-green-400 bg-cover flex justify-center items-center" style={backG[0]}>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-[50px] font-semibold text-white font-lato'>E-SWACHH</p>
                            <p className='text-[15px] text-white'>FINDS YOUR WAY TO LACATE AND DISPOSE YOUR E-WASTE</p>
                            
                            {
                                user !== null ? <Link href='/SignIn' className='bg-green-600 hover:bg-green-700 py-2 px-5 text-green-50 font-semibold rounded-lg m-4'>LOGGED IN</Link>
                                    : <Link href='/SignIn' className='bg-green-600 hover:bg-green-700 py-2 px-5 text-green-50 font-semibold rounded-lg m-4'>JOIN US</Link>
                            }
                        </div>
                    </div> */}

                    {/* New home page section */}
                    <div className='flex justify-start items-center relative w-full bg-gradient-to-bl from-purple-500 via-pink-500 to-pink-500  overflow-hidden mb-20'>
                        <div className='absolute h-[1000px] w-[1000px] rounded-full bg-white -right-[200px] -bottom-[200px]'>
                        </div>


                        <motion.div initial={{ opacity: 0 }}
                            transition={{ ease: 'easeOut', duration: 0.4 }}
                            whileInView={{ opacity: 1 }} className=' absolute h-[400px] w-[700px] right-0 bottom-44'>
                            <img src='/home6.png' />
                        </motion.div>

                        <AnimatePresence>
                            <motion.div initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }} className='w-[55%] h-[700px] py-20 pl-20 z-10 text-white' >
                                <h1 className='text-9xl font-lato font-bold'>E-Swachh.</h1>
                                <h2 className='text-2xl font-semibold p-2 '>we aim to make india free of e-waste</h2>
                                <br />
                                <br />
                                <br />

                                <p className='text-xl font-medium w-[570px] opacity-100'>
                                    Eco Finder is a digital platform designed to help individuals and businesses locate, manage, and responsibly dispose of electronic waste (e-waste).
                                </p>
                                <br />
                                <br />
                                <br />
                                <motion.button whileTap={{ scale: 0.9 }} className='py-2 px-3 duration-300 text-pink-500 text-lg rounded-lg bg-white hover:text-xl font-medium border-b-4 border-b-pink-600'>
                                    Get Started
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* New home page section ends */}

                    <div className='w-full flex justify-center'>
                        <motion.div initial={{ opacity: 0, scale:0.5 }} transition={{ duration: 0.3 }} whileInView={{ opacity: 1, scale:1 }} className='mb-20 s w-[60%] bg-gradient-to-r from-rose-500  to-pink-500 rounded-lg shadow-md flex flex-col items-center'>
                            <h1 className='text-xl text-white font-poppins font-medium m-5'>Question of the day.</h1>
                            <div className='h-32 w-[95%] bg-white rounded-lg mb-5'>
                            </div>
                            <div className='flex flex-wrap justify-evenly items-center w-full mb-5'>
                                <div className='w-48 h-20 bg-white rounded-lg'></div>
                                <div className='w-48 h-20 bg-white rounded-lg'></div>
                                <div className='w-48 h-20 bg-white rounded-lg'></div>
                                <div className='w-48 h-20 bg-white rounded-lg'></div>
                            </div>
                        </motion.div>
                    </div>


                    {/* ABOUT US */}
                    <div className="flex justify-evenly items-center ">
                        <div className="h-full w-[600px] text-black pt-4 ml-10">
                            <h1 className=" text-6xl font-bold text-black "> About us </h1>
                            <br />
                            <br />
                            <p className='py-6 text-slate-600 text-xl font-medium'>Eco Finder is a digital platform designed to help individuals and businesses locate, manage, and responsibly dispose of electronic waste (e-waste). It brings together the recycling and waste management organizations and programs to move the towards a circular economy that reduces e-waste and reuses all materials.
                            </p>
                            <br />
                            <br />
                            < motion.button whileTap={{scale:0.9}} onClick={() => signOut(auth)} className="text-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold h-14 w-36 rounded-full"> Know us </motion.button>
                        </div>

                        <div className="h-[400px] w-[600px] bg-green-500 ml-5 bg-cover" style={backG[1]}>
                            <img src='/aboutus1.jpg' alt='hp'/>
                        </div>
                    </div>
                </div>


                {/* OUR MISSION */}
                <div className='py-40  relative'>

                    <div className='absolute h-56 w-56 rounded-full -z-10 filter blur-3xl left-3 top-44'></div>

                    <div>
                        <h1 className="text-black-500 text-center pt-20 text-6xl h-40 font-bold "> Our Mission</h1>
                    </div>
                    <br/>

                    <div className="flex justify-evenly">

                        <div className='relative flex flex-col items-center pt-14'>
                            <div className='absolute top-0 h-36 w-36'>
                                <img src='/location.png' />
                            </div>
                            <div className="bg-white w-[430px] h-[500px] rounded-xl flex flex-col justify-center items-center shadow-md">
                                <h2 className='font-bold text-2xl p-4'>EASY LOCATE</h2>
                                <p className='p-10 text-xl text-slate-600 font-medium'>
                                    The system provides location-based services to help users find the nearest e-waste recycling centers, drop-off points, or pickup services. Users can input their location or use geolocation to identify nearby options.
                                </p>
                            </div>
                        </div>

                        <div className='relative flex flex-col items-center pt-14'>
                            <div className='absolute top-0 h-36 w-36'>
                                <img src='/public.png' />
                            </div>
                            <div className="bg-white w-[430px] h-[500px] rounded-xl flex flex-col justify-center items-center shadow-md">
                                <h2 className='font-bold text-2xl p-4'>PUBLIC AWARENESS</h2>
                                <p className='p-10 text-xl text-slate-600 font-medium'>
                                    Increase public awareness about the significance of e-waste, its environmental impact, and the importance of recycling and proper disposal practices.
                                </p>
                            </div>
                        </div>


                        <div className='relative flex flex-col items-center pt-14'>
                            <div className='absolute top-0 h-36 w-36'>
                                <img src='/disposal.png' />
                            </div>
                            <div className="bg-white w-[430px] h-[500px] rounded-xl flex flex-col justify-center items-center shadow-md">
                                <h2 className='font-bold text-2xl p-4'>SELF DISPOSAL</h2>
                                <p className='p-10 text-xl text-slate-600 font-medium'>
                                    The users can upload pictures of their electronic devices and can earn credits as per the useful metals collected from the dispose.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* OUR MISSION end */}

                {/* OUR VOLUNTEERS */}
                <div>
                    <div className="flex pt-10 justify-evenly">
                        <div className="h-[433px] w-[650px] bg-green-500 bg-cover" style={backG[2]}> </div>
                        <div className="h-[433px] w-[650px] flex flex-col justify-center">
                            <div>
                                <h1 className='text-6xl font-bold text-black'> Our Volunteers</h1>
                                <br/>
                                <br/>
                                <p className='py-6 text-slate-600 text-xl font-medium'>Our volunteers play a crucial role in e-waste disposal and management by contributing their time, expertise, and efforts to promote responsible practices and mitigate the environmental impact of electronic waste.
                                </p>
                                <br/>
                                <br/>
                                < motion.button whileTap={{scale:0.9}} onClick={() => signOut(auth)} className="text-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold h-14 w-36 rounded-full">Read more</motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center py-52'>
                    <h1 className="font-bold sherif text-3xl p-4"> EVENTS</h1>
                    <div className="w-[1430px] h-[500.81px]">
                        <div className="h-[500px] w-full bg-green-400 bg-cover flex justify-center items-center" style={backG[3]}>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[50px] font-semibold text-white'>JOIN US GLOBALLY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className='flex justify-center items-center'>
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
            </footer>
        </>
    )
}

export default HomeView