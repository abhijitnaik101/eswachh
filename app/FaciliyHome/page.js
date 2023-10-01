"use client"
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { app } from '../Firebase';
import HistoryTile from './historyTile';


const FacilityHome = () => {
    const db = getFirestore(app);

    const [list, setList] = useState([]);
    var List = [];
    const [showData, setShowData] = useState(false);

    //retrive data from FireStore collections
    function fetchData() {
        getDocs(collection(db, "users"))
            .then((qsnapshot) => {
                qsnapshot.forEach((doc) => {
                    List.push(doc.id);
                    console.log("List : ", List);
                    //console.log(`${doc.id} => ${JSON.parse(JSON.stringify(doc.data())).name}`);
                })

            })
    }

    function showDataFunc() {
        if (showData === false)
            setShowData(true);
        setList(List.map((value) => {return value}));
        console.log("this list : ", list);
    }

    return (
        <>
            <main className=''>
                <div className='h-[400px] w-full bg-red-100 overflow-auto flex flex-col items-center'>
                    <p>You are on Facility homepage</p>
                    <button onClick={fetchData} className='h-12 w-32 hover:bg-blue-600 bg-blue-500 text-white'> fetch data </button>
                    <button onClick={showDataFunc} className='h-12 w-32 hover:bg-blue-600 bg-blue-500 text-white'> show data </button>
                    <div className='w-[90%] h-full bg-slate-100'>
                    {
                        (showData === true) ? list.map((value) => <HistoryTile props={value}/>) : <></>
                    }
                    </div>
                    
                </div>
            </main>
        </>
    )
}
export default FacilityHome