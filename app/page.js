"use client"
import * as React from 'react';
import MapView from '@/Components/MapView';
import HomeView from './HomeView/page';
import TopNav from '@/Components/TopNav';
import Location from './Location/page';
import Device from './Device/page';
import FireStore from './FireStore/page';
import FireStorage from './FireStorage/page';
import Parent from './Parent/page';
import UploadPhoto from './FireStorage/uploadPhoto';
import SearchBar from '@/Components/SearchDeviceBar';
import Search from '@/Components/SearchDeviceBar';
import Awareness from './Awareness/page';
import FacilityHome from './FaciliyHome/page';
import Experiment from './Experiment/page';



export default function Home() {
  
  return (
    <>
    <div>
      
      <Experiment/>
    </div>
    </>
  );
}