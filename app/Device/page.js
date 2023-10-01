"use client"
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Chart, Bar } from "react-chartjs-2";

import SearchBar from '@/Components/SearchBar';
import DeviceData from '@/Components/DeviceData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarChart from '@/Components/BarChart';
import SearchDeviceBar from '@/Components/SearchDeviceBar';

ChartJS.register(ArcElement, Tooltip, Legend);


const Device = () => {

    

    const [showDeviceBool, setShowDeviceBool] = useState(false);
    const showDevice = (childData) =>{
        setShowDeviceBool(childData);
    }

    const data = {
        labels: [
            'Harmful',
            'Recyclable',
            'Plastic'
        ],
        datasets: [{

            data: [50, 20, 30],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <>
            <main className='bg-slate-100 flex h-screen w-full'>
                {
                    showDeviceBool ?
                
                <div>
                    <div className='ml-10 w-[900px]'>
                        <SearchDeviceBar shoDevice={showDevice}/>
                    </div>

                    <div className='h-[300px] w-[90%] flex justify-evenly bg-white rounded-lg shadow-md my-5 ml-10 mr-4'>

                        <div className='w-1/4 h-max rounded-lg flex justify-center items-start py-5 '>
                            <img src='/phone.png' alt='dp' />
                        </div>
                        <div className='w-2/4 py-5 px-6 flex flex-col justify-between items-start border-l-2'>
                            <div>
                                <h1 className='text-lg font-bold'>{DeviceData()[0].name}</h1>
                                <p className='font-medium text-sm text-slate-600'>(Space Blue, 8GB RAM, 128GB Storage)</p>
                            </div>
                            <p>Credits - {DeviceData()[0].credit}</p>

                            <div className='w-full h-1/4'>
                                <button className='py-2 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'>Earn Credits</button>
                                <button className='ml-8 py-2 px-4 rounded-lg font-medium border-[1px] border-black hover:border-white hover:bg-emerald-500 hover:text-white'>Donate</button>
                            </div>
                        </div>

                        <div className=' w-1/3 mx-6 my-3'>
                            <Doughnut data={data} />
                        </div>

                        {/* show the list of all available images*/}
                        <div>

                        </div>
                    </div>

                    <div className=' h-[400px] w-[90%] bg-white p-10 mx-10 shadow-md'>
                        {/* <BarChart/> */}
                        <img src='/dataChart.png'/>
                    </div>
                </div>
                :
                
                    <div className='ml-10 w-[900px] mr-44'>
                        <SearchDeviceBar shoDevice={showDevice}/>
                    </div>
                

                }

                <div className=' w-1/4 h-5/6 flex flex-col items-center mx-3 my-3'>
                    {/*<SearchBar />*/}
                    <div className='bg-slate-50 h-[900px] w-full mt-10 mr-10'>
                        <div className='h-full w-full flex flex-col p-5 bg-slate-50'>
                            <img src='/tabletF.png'></img><br/>
                            <img src='/tvF.png'></img><br/>
                            <img src='/computerF.png'></img><br/>
                            {/* <button className='h-12 w-28 m-4 bg-white hover:bg-slate-100 border-black border-2 rounded-md'>tablet</button>
                            <button className='h-12 w-28 m-4 bg-white hover:bg-slate-100 border-black border-2 rounded-md'>jdfh</button>
                            <button className='h-12 w-28 m-4 bg-white hover:bg-slate-100 border-black border-2 rounded-md'>jdfh</button>
                            <button className='h-12 w-28 m-4 bg-white hover:bg-slate-100 border-black border-2 rounded-md'>jdfh</button> */}
                        </div>

                    </div>
                </div>

            </main>

        </>
    )
}
export default Device