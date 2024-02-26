"use client"
import { useEffect } from 'react';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../Firebase';
import HomeView from '../HomeView/page';
import Profile from '@/Components/profile';
import FireStore from '../FireStore/page';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { motion } from 'framer-motion';

const auth = getAuth(app);
const db = getFirestore(app);

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    var isLoggedIn = false

    //bool variable used to toggle b/w login and register
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"));
        addDoc(collection(db, "users/"), {
            email: email,
            name: userName,
            credits: 0,
        }).then((docRef) => {

            console.log(`Stored data name :  ${userName} and email : ${email} ${docRef.id}`);
        })
    }

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => alert("Signed In"))
            .catch((err) => console.log(err));
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("you are logged in : ", user.email);
                setUser(user)
            }
            else {
                console.log("you are logged out");
                setUser(null)
            }
        })
    }, [])

    if (user == null) {
        return (
            <>
                <div className=' h-[90%] w-[100%] flex justify-center items-center fixed bg-slate-100'>
                    <div className='h-[550px] flex items-center justify-between mx-auto bg-white border-[2px] rounded-xl w-3/5'>

                        <div className='h-full w-2/4 bg-green-400 rounded-l-xl flex justify-center items-center relative overflow-hidden'>
                            <img src='/bgsignin.jpg' alt='hp' className='h-full w-full rounded-l-xl absolute top-0'/>
                            <p className='text-white hover:text-5xl duration-700 text-4xl font-bold absolute z-10'>Welcome <br/>to E-swachh.</p>
                        </div>

                        <div className='h-full flex items-center justify-center mx-auto flex-col bg-white p-8 border-[2px] rounded-r-xl w-2/4'>
                            <h1 className='text-slate-800 text-3xl mb-4 font-montserrat font-bold left-0'>E-Swachh.</h1>

                            <div className='flex flex-col items-start w-3/4 '>

                                {/*<div className=''>user name</div>
                            <input onChange={e => setUserName(e.target.value)} value={userName} className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='email' required placeholder='Email address' />*/}

                                <div className='font-montserrat  text-slate-700 font-medium'>Email</div>
                                <input onChange={e => setEmail(e.target.value)} value={email} className='px-4 my-2 w-full h-12 border border-1 border-gray-200 rounded-lg' type='email' required placeholder='Email address' />

                                <div className='font-montserrat text-slate-700 font-medium'>Password</div>
                                <input onChange={e => setPassword(e.target.value)} value={password} className='px-4 my-2 h-12 w-full border border-1 border-gray-200 rounded-lg' type='password' required placeholder='Password' />
                                {
                                    (isRegisterClicked === true) ? <><motion.div initial={{ opacity: 0 }}
                                    transition={{ ease: 'easeOut', duration: 0.4 }}
                                    whileInView={{opacity:1}} className='font-montserrat text-slate-700 font-medium'>Username</motion.div>
                                    <motion.input initial={{opacity:0}} whileInView={{opacity:1}} onChange={e => setPassword(e.target.value)} value={password} className='px-4 my-2 h-12 w-full border border-1 border-gray-200 rounded-lg' type='password' required placeholder='Password' /></> : <></>
                                }
                                

                                
                            </div>
                            <div className='flex w-3/4 justify-between'>
                                <motion.button whileTap={{ scale: 0.9 }} onClick={signinUser} className='bg-blue-600 hover:bg-blue-700 text-white h-10 w-36 mt-4 rounded-md font-semibold'>Log in</motion.button>
                                <motion.button whileTap={{ scale: 0.9 }} onClick={createUser} className=' text-black border-2 border-slate-500 h-10 w-36 mt-4 rounded-md font-medium hover:border-black'>Register</motion.button>
                            </div>


                            <span onClick={() => setIsRegisterClicked(true)} className='text-slate-500 hover:text-black font-semibold text-center text-md my-4 hover:underline'>Forgot password</span>
                            <hr />
                            
                        </div>

                    </div>

                </div>

            </>

        )
    }

    return (
        <>

            <div className='h-screen w-[100%] flex justify-center items-center'>
                <div className='right flex items-center justify-center mx-auto flex-col bg-white p-8 border-[2px] rounded-xl w-1/4'>
                    <button onClick={() => signOut(auth)} className='bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-[8px] px-[10px] mx-auto rounded-[3px]'>Logout</button>
                </div>
            </div>
        </>
    )


}

export default SignIn;