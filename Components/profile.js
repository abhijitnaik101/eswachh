"use client"
import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { signOut } from 'firebase/auth';
import { app } from '@/app/Firebase';
import Link from 'next/link';
import SignIn from '@/app/SignIn/page';


const Profile = () => {

    const storage = getStorage(app);

    const [imageUpload, setImageUpload] = useState();
    const [imageDownload, setImageDownload] = useState("https://firebasestorage.googleapis.com/v0/b/legaleaseweb.appspot.com/o/legalease%2Fpfp%2FDreamShaper_v7_2d_fantasy_illustration_black_color_rocky_mount_1.jpg?alt=media&token=6ddd80f8-96eb-4227-8739-e1b2218d0199");



    const uploadFile = () => {
        if (!imageUpload) return;

        const imageRef = ref(storage, "legalease/pfp/" + imageUpload.name);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
            });
        })
    }

    const [isOpen, setIsOpen] = useState(false)

    function Input() {
        console.log("Input is called");
        return (
            <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} className='opacity-0'/>
        );
        
    }
    var isLog = true;
    function LogOut() 
    {
        isLog = false;
        console.log("isLogged : ", isLog);
    }

    return (
        <>
            <div className="">
                <button
                    onClick={() => { setIsOpen((prev) => !prev) }}
                    className='bg-violet-500 w-[100px] h-[55px] flex items-center justify-evenly py-[5px] rounded-[5px] tracking-wider shadow-lg border-[2px] border-purple-300 active:border-black duration-200 active:text-white'
                >
                    <div className='w-[40px] h-[40px] overflow-hidden rounded-full'>
                        <img src="/img1.jpg" alt='hp'></img>
                    </div>

                    {!isOpen ?
                        (<AiOutlineCaretDown />) : (<AiOutlineCaretUp />)
                    }
                </button>
                {isOpen ?
                    (
                        <>
                            <div className='relative'>
                                <div className='mt-[10px] shadow-lg right-0 bg-white w-[250px] absolute p-4 rounded-lg flex items-center flex-col'>
                                    <div className='border-[1px] w-[100%] flex flex-col justify-center items-center'>
                                        <div className='bg-red-400 h-[150px] w-[60%]'>
                                            profile
                                        </div>
                                        <div className='flex flex-col justify-center items-center my-[10px]'>
                                            <p className='text-[20px] font-medium'>UserName</p>
                                            <p className=' text-justify'>User bio lorem ipsum User bio lorem ipsum User bio lorem ipsum</p>
                                        </div>
                                    </div>
                                    <label className='font-medium'>upload photo</label>

                                    <div className=' w-full cursor-pointer py-[4px] rounded-[4px] flex justify-between items-center'>
                                        
                                        <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} className='text-[12px] py-[8px] w-[85px]'/>

                                        <button onClick={uploadFile} className="p-[0px] h-[30px] w-[80px] prounded-lg bg-purple-500 hover:bg-purple-600 rounded-md text-white font-medium text-[12px]">
                                            upload
                                        </button>

                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <button className='flex justify-center w-[120px] hover:bg-slate-100 cursor-pointer p-[4px] rounded-[4px] border-[2px] my-[5px] '>
                                        <Link href="/" >Edit profile</Link>
                                    </button>
                                    <button onClick={LogOut} className='flex justify-center w-[120px] bg-red-500 hover:bg-red-600 cursor-pointer p-[4px] rounded-[5px] border-[2px] my-[5px] text-white font-medium'>
                                        Logout
                                    </button>

                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </>
                    ) : <></>
                }
            </div>
        </>
    )
}

export default Profile