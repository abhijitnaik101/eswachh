"use client"
import LocationTile, { b } from '@/Components/LocationTile';
import MapView from '@/Components/MapView';
import React, { useState } from 'react';
import LocationData from '@/Components/LocationData';
import SearchBar from '@/Components/SearchBar';
import UploadPhoto from '../FireStorage/uploadPhoto';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Location = () => {

    const [specLocation, setSpecLocation] = useState([]);
    const [specBool, setSpecBool] = useState(false);

    const result = [
        'jhgfa',
        'iureen',
        'kencaf',
    ]
    const [sortedName, setSortedName] = useState([]);
    const [sortedSearchOpt, setSortedSearchOpt] = useState([]);
    const [showTrashPins, setShowTrashPins] = useState(false);

    const [searchLocation, setSearchLocation] = useState(null);
    const [searchClicked, setSearchClicked] = useState(false);

    const [isPickClicked, setIsPickClicked] = useState(false);

    const [isSearchedClicked, setIsSearchedClicked] = useState(false);
    const [myLocationClicked, setMyLocationClicked] = useState(false);


    const onChanged = (value) => {
        setSearchClicked(false);
        setSearchLocation(value);
    }

    const onClicked = (value) => {
        setSearchLocation(value);
        setSearchClicked(true);
    }

    function pickStatusChange(value) {
        setIsPickClicked(value);
    }

    function searchedLocation() {
        setSpecLocation(LocationData().filter(value => {
            if (value.name === searchLocation) {
                return value.latitude;
            }
        }));
        setSpecBool(true);

        console.log("Array of Lat Long : ", specLocation);

        // const lat = LocationData().filter(value => {
        //     if(value.name === searchLocation){
        //         return value.latitude;
        //     }
        // })

        // console.log("lat : ", lat);

        setShowTrashPins(false);
        setIsSearchedClicked(true);
        if (isSearchedClicked) {
            setSortedName(LocationData().filter(value => { return value.name.toLowerCase().startsWith(searchLocation.toLowerCase()) }));
            print("Sorted name: ", sortedName);
        }
    }

    function showOptions() {

    }

    return (
        <>
            <main className='relative'>
                <div className='w-screen flex justify-evenly p-2 relative'>
                    <div className='w-[70%] h-max'>
                        {/* <div className=' h-max w-full flex justify-center items-end px-5 bg-purple-300'>
                            
                            
                            <div className='w-full mr-6 relative'>

                                <div className='flex justify-between items-center'>
                                    <input onChange={(e) => { onChanged(e.target.value) }} type='address' value={searchLocation} autoComplete='on' placeholder='Location' className='py-3 px-4 m-3 rounded-lg w-full' />

                                    <button onClick={searchedLocation} className='bg-blue-500 hover:bg-blue-600 rounded-md h-10 w-20 text-white'>search</button>
                                </div>

                                {
                                    (searchLocation && !searchClicked) ? <>
                                        <div className='absolute z-10 bg-white rounded-lg p-4 w-full shadow-md'>
                                            {

                                                LocationData().map((value, index) =>
                                                    <p onClick={(e) => { onClicked(e.target.textContent); console.log(e.target.textContent) }} className='p-1 hover:bg-slate-100'>
                                                        {value.name}
                                                    </p>)
                                            }
                                        </div>
                                    </> : <></>
                                }
                            </div> 
                            
                        </div>*/}
                        <div className='flex flex-col justify-center items-center h-max w-full '>
                            <MapView showAllMarkers={showTrashPins} showMyLocation={myLocationClicked} speLocation={specLocation} speBool={specBool} />

                            <motion.div initial={{y:200}} animate={{y:0}} transition={{duration:0.5}}
                                className='flex justify-center bg-white absolute p-4 bottom-8 rounded-full'>
                                <motion.button whileTap={{ scale: 0.9 }}
                                    onClick={
                                        () => {
                                            if (myLocationClicked === false) {
                                                setMyLocationClicked(true);
                                            }
                                            else {
                                                setMyLocationClicked(false);
                                            }
                                        }
                                    } className='h-10 w-32 rounded-full mx-2 bg-slate-800 hover:bg-slate-900 text-white hover:text-[17px] duration-300'>
                                    My Location
                                </motion.button>

                                <motion.button whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        if (searchLocation === null) {
                                            if (showTrashPins === false)
                                                setShowTrashPins(true);
                                            else
                                                setShowTrashPins(false);
                                        }
                                        else {

                                        }

                                    }} className=' rounded-full mx-2 bg-slate-800 hover:bg-slate-900 hover:text-[17px] h-10 w-36  text-white'>
                                    Nearby Facility
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>


                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='flex flex-col justify-start items-center h-[600px] w-[35%] bg-slate-50'>

                        <div className='w-full bg-slate-50 rounded-lg h-max overflow-auto scrollbar scrollbar-track-inherit scrollbar-thumb-slate-400 shadow-sm flex flex-wrap' >
                            
                            <h1 className='bg-slate-50 text-slate-800 text-xl text-center font-semibold pt-4 pb-2 w-full sticky top-0 z-10'>Locations</h1>
                            {/*<LocationTile location={'Berkshire street'} open={2.30} isPickPressed={pickStatusChange} />*/}
                            {showTrashPins && LocationData().map((value, index) =>
                                <LocationTile location={value.name} open={value.opening} close={value.closing} distance={value.distance} isPickPressed={pickStatusChange} />
                            )}
                            {
                                setSearchClicked && sortedName.map((value, index) => <LocationTile location={value.name} open={value.opening} close={value.closing} distance={value.distance} isPickPressed={pickStatusChange} />)
                            }

                        </div>
                    </motion.div>
                </div>

                {
                    isPickClicked ? <>
                        <div className='fixed w-full h-screen flex justify-center items-start bg-black opacity-20'></div>
                        <div className='fixed w-full h-screen flex justify-center items-start'>

                            <UploadPhoto isXClicked={pickStatusChange} />
                        </div>
                    </> : <></>
                }
            </main>
        </>
    )
}

export default Location