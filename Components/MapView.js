"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Map, { Marker, GeolocateControl, ScaleControl, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationData from './LocationData';



const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF4MTAxMCIsImEiOiJjbG1odXJrN3Uwc3hmM2tyMnI1NTV3dWZtIn0.qsQY5FtkFPgaIB4KIJsseA'; // Set your mapbox token here


export default function MapView({pinBool}) {

  const popupContainerStyle = {
    width: '40px',
    backgroundColor: 'white',
    display: 'flex',
    padding: '5px',
  }

  return (
    <div>
      <Head>
        <title>react-map-gl example</title>
      </Head>

      <Map
        initialViewState={{
          latitude: 20.275502994202448,
          longitude: 85.77639251907557,
          zoom: 14
        }}
        style={{ width: '1000px', height: '500px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        touchZoomRotate={true}
      >


        <NavigationControl />
        <ScaleControl />
        <GeolocateControl style={popupContainerStyle} position='bottom-right' />
        <Marker longitude={85.77639251907557} latitude={20.275502994202448} color="red"/>
        { pinBool && LocationData().map((value, index) =>
          <Marker key={index} longitude={value.longitude} latitude={value.latitude} color={value.color} >
            <button className='h-12 w-12 hover:h-14 hover:w-14 duration-200'>
            <img src='/trashpin.png' />
            </button>
          </Marker>
          )}
      </Map>
    </div>
  );
}

