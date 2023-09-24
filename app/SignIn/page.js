"use client"
import { useEffect } from 'react';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../Firebase';
import HomeView from '../HomeView/page';
import Profile from '@/Components/profile';
import FireStore from '../FireStore/page';

const auth = getAuth(app);

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var isLoggedIn = false

    


    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert("Success"));
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
                console.log("you are logged in");
                setUser(user)
            }
            else {
                console.log("you are logged out");
                setUser(null)
            }
        })
    }, [])

    if(user==null){
        return (
            <>
                <div className='bg-slate-100 h-[90%] w-[100%] flex justify-center items-center fixed'>
                    <div className='h-[500px] flex items-center justify-center mx-auto flex-col bg-white p-8 border-[2px] rounded-xl w-1/4'>
                        <div className='flex flex-col items-start'>
                            <div className=''>Email</div>
                            <input onChange={e => setEmail(e.target.value)} value={email} className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='email' required placeholder='Email address'/>
                            <div className=''>Password</div>
                            <input onChange={e => setPassword(e.target.value)} value={password} className='px-4 h-12 my-2 border border-1 border-gray-200 rounded-lg' type='password' required placeholder='Password' />
                        </div>
                        <button onClick={signinUser} className='bg-blue-600 hover:bg-blue-700 text-white py-[5px] px-[10px] my-2 rounded-md font-bold'>Log in</button>
                        <span className='text-blue-500 text-center text-sm my-2 hover:underline'>Forgot password</span>
                        <hr />
                        <button onClick={createUser} className='bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-[8px] px-[10px] mx-auto rounded-[3px]'>Create new account</button>
                    </div>
                    <FireStore/>
                </div>
                
            </>
            
        ) 
    }

    return(
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