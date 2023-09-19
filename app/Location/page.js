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

    const [showTrashPins, setShowTrashPins] = useState(false);

    const [searchLocation, setSearchLocation] = useState(null);

    const [searchClicked, setSearchClicked] = useState(false);

    const onChanged = (value) =>
    {
        setSearchClicked(false);
        setSearchLocation(value);
    }

    const onClicked = (value) =>
    {
        setSearchLocation(value);
        setSearchClicked(true);
    }

    return (
        <>
            <main>
                <div className='h-screen w-screen flex justify-evenly fixed bg-zinc-100 p-2'>
                    <div className='w-[70%] h-max'>

                        <div className=' h-max w-full flex flex-col justify-center items-center'>

                            <button onClick={() => {
                                if (showTrashPins === false)
                                    setShowTrashPins(true);
                                else
                                    setShowTrashPins(false);
                            }} className='bg-blue-400 hover:bg-blue-500 py-1 px-6 mb-4 rounded-md text-white'>
                                Find
                            </button>
                        </div>


                        <div className='flex justify-center items-center p-6 h-[500px] w-full'>
                            <MapView pinBool={ showTrashPins } />
                        </div>
                    </div>

                    <div className='flex flex-col justify-start items-center h-full w-[25%]'>

                        <SearchBar/>
                        
                        <div className='w-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-lg mt-4 h-[70%] overflow-auto scrollbar  scrollbar-track-inherit scrollbar-thumb-emerald-600' >

                        <h1 className=' bg-gradient-to-r from-emerald-400 to-emerald-500 text-emerald-800 text-xl text-center font-semibold pt-4 w-full sticky top-0'>Locations</h1>
                        <LocationTile location={'kljdflkd'} open={234} />
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