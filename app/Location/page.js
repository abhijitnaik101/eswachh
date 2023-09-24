"use client"
import LocationTile from '@/Components/LocationTile';
import MapView from '@/Components/MapView';
import React, { useState } from 'react';
import LocationData from '@/Components/LocationData';
import SearchBar from '@/Components/SearchBar';

const Location = () => {

    const result = [
        'jhgfa',
        'iureen',
        'kencaf',
    ]
    const [sortedName, setSortedName] = useState([]);
    const [showTrashPins, setShowTrashPins] = useState(false);

    const [searchLocation, setSearchLocation] = useState(null);
    const [searchClicked, setSearchClicked] = useState(false);

    const onChanged = (value) => {
        setSearchClicked(false);
        setSearchLocation(value);
    }

    const onClicked = (value) => {
        setSearchLocation(value);
        setSearchClicked(true);
    }

    const sortSearch = () => {

        var arr = LocationData().map((value,index) => {
            value.name.startsWith(searchLocation);
            console.log("Sorted name = ", arr);
        })
    }

    return (
        <>
            <main>
                <div className='h-screen w-screen flex justify-evenly fixed bg-zinc-100 p-2'>
                    <div className='w-[70%] h-max'>
                        <div className=' h-max w-full flex justify-center items-end px-5'>
                            <button onClick={() => {
                                if(searchLocation === null)
                                {
                                    if (showTrashPins === false)
                                    setShowTrashPins(true);
                                    else
                                    setShowTrashPins(false);
                                }
                                else
                                {

                                }
                                

                            }} className='bg-blue-400 hover:bg-blue-500 p-2 px-6 mb-4 rounded-md text-white'>
                                Find 
                            </button>

                            {/*Seardch Bar */}
                            <div className='w-full mr-6 relative'>
                        <input onChange={(e)=>{ onChanged(e.target.value) }} type='address' value={searchLocation} autoComplete='on' placeholder='Location' className='py-3 px-4 m-3 rounded-lg w-full'/>
                        {
                            (searchLocation && !searchClicked) ? <>
                                <div className='absolute z-10 bg-white rounded-lg p-4 w-full shadow-md'>
                                    {sortSearch()}
                                    {
                                        
                                    LocationData().map( (value, index) => 
                                    <p onClick={(e) => {onClicked(e.target.textContent); console.log(e.target.textContent)}} className='p-1 hover:bg-slate-100'>
                                        {value.name}
                                    </p> )
                                    }
                                </div>
                            </> : <></>
                        }
                </div>
                    </div>
                        <div className='flex justify-center items-center p-6 h-[500px] w-full'>
                            <MapView pinBool={showTrashPins} />
                        </div>
                    </div>

                    <div className='flex flex-col justify-start items-center h-full w-[25%]'>

                        <div className='w-full bg-slate-50 rounded-lg mt-4 h-[70%] overflow-auto scrollbar  scrollbar-track-inherit scrollbar-thumb-slate-400 shadow-sm' >

                            <h1 className=' bg-slate-50 text-slate-800 text-xl text-center font-semibold pt-4 pb-2 w-full sticky top-0 z-10'>Locations</h1>
                            <LocationTile location={'Berkshire street'} open={2.30} />
                            {showTrashPins && LocationData().map((value, index) =>
                                <LocationTile location={value.name} open={value.opening} />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Location