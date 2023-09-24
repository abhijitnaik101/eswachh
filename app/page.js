
import * as React from 'react';
import MapView from '@/Components/MapView';
import HomeView from './HomeView/page';
import TopNav from '@/Components/TopNav';
import Location from './Location/page';
import Device from './Device/page';
import FireStore from './FireStore/page';
import FireStorage from './FireStorage/page';



export default function Home() {
  
  return (
    <>
    <div>
      <HomeView/>
      <FireStorage/>
    </div>
    </>
  );
}