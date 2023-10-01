"use client"
import BookHandler from '@/Components/Bookhandler';
import React, { useState } from 'react';
const Parent = () =>
{
    const [data, setData] = useState("");
    const childtoParent = (childData) =>{
        setData(childData);
    }
    return(
        <>
            <div>
                {data}
                <BookHandler childParent={childtoParent}/>
            </div>
        </>
    )
}
export default Parent;