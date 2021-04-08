import React, { useState, useEffect } from "react";
import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
  
} from "react-google-maps";
import ReactMapGL, {  Marker,Popup } from "react-map-gl";
import ReactDOM from 'react-dom';
const token = process.env.API_KEY;;
const url = `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=100&latitude=48.8534&longitude=2.3488&rome_codes=M1805&headcount=big`;


  export default function Detail() {
    const { query } = useRouter();
    const router = useRouter();
      const lat = router.query.lat;
      const lon = router.query.lon;
      var c = parseFloat(lat);
      var d = parseFloat(lon);
    const [viewport, setViewport] = useState({
      latitude: c,
      longitude: d,
      width: "80vw",
      height: "50vh",
      zoom: 10
    });
    const [selectedPark, setSelectedPark] = useState(null);
   
    
    
    return (
      <Layout page = {'Chrypto Watch -Accuael'}>
     <br></br>
     <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50"onClick = {()=>router.back()}>Retour</button>
     <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 ml-8"onClick = {()=>router.push(`/`)}>Accueuil</button>
     
     <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 ml-8"onClick = {()=>router.push(`/About`)}>Pagination</button>
        <br></br>  
          
        <br></br>       
      <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia2Fwc2VyZ2UiLCJhIjoiY2ttdzEyNGN4MDh2ejJ1cDltZDZzZ2J4MyJ9.hMF6V8PkiH9Y3HvYPQQa9g"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => { setViewport(viewport
          ); }}
      >
       
        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => { setSelectedPark(null); }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
      <b></b>
      
      
        
     
      
      <button className=" p-3 w-full  flex-col rounded-md dark:bg-gray-800 shadow" 
      
     >
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
              <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
              {query.name}
            </div>
            <div className="align-baseline">
              <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">{query.siret}</div>
             
              <div >{query.headcount_text}</div>
              <div >{query.adress}</div>
              <div >{query.matched_rome_label}</div>
              
              
            </div>
          </button>
          
          
         
          
    </Layout>
    )
  }
  