"use client"
import * as React from 'react';
import MapView from '@/Components/MapView';
import HomeView from './HomeView/page';
import TopNav from '@/Components/TopNav';
import Location from './Location/page';


export default function Home() {
  
  return (
    <>
    <div>
      <TopNav/>
      <Location/>
    </div>
    </>
  );
}