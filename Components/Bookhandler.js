"use client"
import React, { useState } from 'react';

const BookHandler = ({childParent}) =>
{
    
    const [data, setData] = useState("Book Handler data");
    function changeData(){
        setData("Just Changed");
    }
    return(
        <>
        <div>
            <button onClick={changeData} className='p-4 bg-blue-500 hover:bg-blue-600 text-white'>Chnage data</button>
            <button onClick={() => childParent(data)} className='p-4 bg-blue-500 hover:bg-blue-600 text-white'>click me</button>
        </div>
        </>
    )
}
export default BookHandler;