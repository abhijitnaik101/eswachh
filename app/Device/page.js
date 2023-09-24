"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SearchBar from '@/Components/SearchBar';

ChartJS.register(ArcElement, Tooltip, Legend);


const Device = () => {

    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{

            data: [300, 50, 100],
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

            <main className='bg-slate-100 flex h-screen w-full  fixed'>
                
                <div className='h-1/2 w-3/4 flex justify-evenly bg-white rounded-lg shadow-md my-5 ml-10 mr-4'>
                    <div className='w-1/4 h-max rounded-lg flex justify-center items-start py-5 '>
                        <img src='/phone.png' alt='dp' />
                    </div>
                    <div className='w-2/4 py-5 px-6 flex flex-col justify-between items-start border-l-2'>
                        <div>
                            <h1 className='text-lg font-bold'>OPPO A9 2020</h1>
                            <p className='font-medium text-sm text-slate-600'>(Space Blue, 8GB RAM, 128GB Storage)</p>
                        </div>
                        <p>Credits - 5</p>

                        <div className='w-full h-1/4'>
                            <button className='py-2 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'>Earn Credits</button>
                            <button className='ml-8 py-2 px-4 rounded-lg font-medium border-[1px] border-black hover:border-white hover:bg-emerald-500 hover:text-white'>Donate</button>
                        </div>
                    </div>
                    <div className=' w-1/3 mx-6 my-3'>
                        <Doughnut data={data} />
                    </div>
                </div>


                <div className=' w-1/4 h-5/6 flex flex-col items-center mx-3 my-3'>
                    <SearchBar />
                </div>

            </main>

        </>
    )
}
export default Device