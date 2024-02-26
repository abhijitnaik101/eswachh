"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Map, { Marker, GeolocateControl, ScaleControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationData from './LocationData';
import { motion } from 'framer-motion';



const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF4MTAxMCIsImEiOiJjbG1odXJrN3Uwc3hmM2tyMnI1NTV3dWZtIn0.qsQY5FtkFPgaIB4KIJsseA'; // Set your mapbox token here


export default function MapView({ showAllMarkers, showMyLocation, speLocation, speBool }) {

  const popupContainerStyle = {
    width: '40px',
    backgroundColor: 'white',
    display: 'flex',
    padding: '5px',
  }

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Map
        initialViewState={{
          latitude: 20.275502994202448,
          longitude: 85.77639251907557,
          zoom: 14
        }}
        style={{ width: '1020px', height: '600px' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        touchZoomRotate={true}
      >


        <NavigationControl />
        <ScaleControl />
        <GeolocateControl style={popupContainerStyle} position='bottom-right' />
        {
          showMyLocation && <Marker longitude={85.77639251907557} latitude={20.275502994202448} color="red" >
            
          </Marker>
        }
        {
          speBool && <Marker longitude={speLocation[0].longitude} latitude={speLocation[0].latitude}>
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1, y: [0, -10, 0] }} transition={{ duration: 0.25 }}>
              <button className='h-12 w-12 hover:h-14 hover:w-14 duration-200'>
                <img src='/trashpin.png' />
              </button>
            </motion.div>
          </Marker>
        }
        {showAllMarkers && LocationData().map((value, index) =>
          <Marker key={index} longitude={value.longitude} latitude={value.latitude} color={value.color} >
            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1, y: [0, -10, 0] }} transition={{ duration: 0.25 }}>
              <button className='h-12 w-12 hover:h-14 hover:w-14 duration-200'>
                <img src='/trashpin.png' />
              </button>
            </motion.div>
          </Marker>
        )}
      </Map>
    </motion.div>
  );
}

