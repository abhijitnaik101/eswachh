import React, { useState } from 'react';
import LocationData from './LocationData';

const SearchBar = () =>
{
    
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



    return(
        <>
            <div className='w-full mr-6 relative'>
                        <input onChange={(e)=>{ onChanged(e.target.value) }} type='address' value={searchLocation} autoComplete='on' placeholder='Location' className='py-3 px-4 m-3 rounded-lg w-full'/>
                        {
                            (searchLocation && !searchClicked) ? <>
                                <div className='absolute z-10 bg-white rounded-lg p-4 w-full shadow-md'>
                                    {LocationData().map( (value, index) => 
                                    <p onClick={(e) => {onClicked(e.target.textContent); console.log(e.target.textContent)}} className='p-1 hover:bg-slate-100'>
                                        {value.name}
                                    </p> )}
                                </div>
                            </> : <></>
                        }
                </div>
        </>
    )
}

export default SearchBar