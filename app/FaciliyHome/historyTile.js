"use client"
import React from 'react';

const HistoryTile = ({props}) => {
    return(
        <>
        <div className='bg-white rounded-lg m-1 h-16 w-full flex justify-between items-center px-10'>
            <div>{props}</div>
            <div>date</div>
            <div>credits</div>
        </div>
        </>
    )
}
export default HistoryTile;