"use client"
import React, { useState } from 'react';
import { app } from '../Firebase';
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";
const FireStore = ({props}) => {

    const db = getFirestore(app);

    const [name, setName] = useState(null)
    // async function fetchData()
    // {
    //     const querySnapshot = await getDocs(collection(db, "books"));
    //     querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${JSON.parse(JSON.stringify(doc.data())).first}`);
    //     });
    // }

    function fetchData(){
        getDocs(collection(db,"books")).then((qsnapshot) => {
            qsnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.parse(JSON.stringify(doc.data())).first}`);
            })
        })
    }

    // async function putData(){
    //     try {
    //         const docRef = await addDoc(collection(db, "books"), {
    //             first: name,
    //             last: "Lace",
    //             born: 1815
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }

    function putData() {
        try{
            addDoc(collection(db, "books"), {
                first: name,
                last: "Lace",
                born:1900
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id)
            })
        }
        catch(e)
        {
            console.error("Error adding document: ", e);
        }
    }

    function printName()
    {
        console.log("Data : ", name);
    }

    
    return (
        <>
            <div className='bg-green-500 w-96 h-96'>
                <input type='text' onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' value={name} className='p-4'></input>
                <button onClick={printName} className='p-3 bg-blue-500 hover:bg-blue-600 rounded-md'>print</button>
                <button onClick={putData} className='p-3 bg-blue-500 hover:bg-blue-600 rounded-md'>submit</button>
            </div>
        </>
    )
}
export default FireStore;
