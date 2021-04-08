import Layout from "../component/Layout"
import { useEffect, useReducer, useState } from 'react';
import dynamic from "next/dynamic";
import axios from "axios";
import Cors from 'cors';
import ReactPaginate from 'react-paginate';
import { Flex, Box } from 'reflexbox';
import { useRouter } from "next/router";
import { Map, GoogleApiWrapper } from 'google-maps-react';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";
const token = process.env.API_KEY;
const url = `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=100&latitude=48.8534&longitude=2.3488&rome_codes=M1805&headcount=big`;

export default function Home({res,pages }) {
    
const  router= useRouter();
  const [locations, setLocations] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  const limit = 2;
  const pageCounts = 3;
  const total = 20 * limit;
  console.log(res);
  const defaultCenter = { lat: 48.8717, lng: 2.32824 };

  const defaultOptions = { scrollwheel: false };
  
  const RegularMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={ defaultCenter }
        defaultOptions={ defaultOptions }
      >
        <Marker  />
      </GoogleMap>
    ))
  );
  
  const loadingElementStyle = { height: '100%' };
  const containerElementStyle = { height: '280px' };
  const mapElementStyle = { height: '100%' };
  
    return (
      <Layout page = {'Chrypto Watch -Accuael'}>
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
            <div className="flex w-full items-center">
              <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                 Module 1
              </div>
              
      
            
      
             
        
      
      
      
            </div>
            
          </div>
          <div className="sm:p-7 p-4">
          
          <div className="space-y-4 mt-3"> 
          
          <div className='repo-container'>
          
        </div>
        
        
         
         
       
      
      <button className=" p-3 w-4/12  flex-col rounded-md dark:bg-gray-800 shadow">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
              <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
             
            </div>
            <div className="align-baseline">
              <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md"></div>
             
              
              
            </div>
          </button>
         
                    <div>
                    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj7OX38aK6QuyAmi6K-Hm_SsYZYQplSdE"
      loadingElement={<div style={ loadingElementStyle } />}
      containerElement={<div style={ containerElementStyle } />}
      mapElement={<div style={ mapElementStyle } />}
    />
<Box variant="container" pt={4}>
         {res.companies.map((post,key) => 
       
      
      <button className=" p-3 w-4/12  flex-col rounded-md dark:bg-gray-800 shadow" onClick = {()=>router.push(`/companies/${post.siret }?name =${post.name }?address =${post.address }?city =${post.city }
                                                                                                                    ?lon =${post.lon }?lat =${post.lat }
                                                                                                                    ?headcount_text =${post.headcount_text }?siret =${post.siret }
                                                                                                                    ?naf_text =${post.naf_text }?matched_rome_label =${post.matched_rome_label }`)}>
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
              <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
              {post.name}
            </div>
            <div className="align-baseline">
              <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">{post.city}</div>
             
              <div >{post.headcount_text}</div>
              <div >{post.siret}</div>
              <div >{post.stars}</div>
              <div >{post.stars}</div>
              <div >{key+1}</div>
            </div>
          </button>
          )}
          <Flex mt={4} pl={20} justifyContent="space-between" maxWidth={300}>
                <button onClick = {()=>router.push(`/About?page =${pages -1 }`)}>Previous</button>
                <button onClick = {()=>router.push(`/About?page =${pages +1 }`)}>Next</button>
               
            </Flex>
          </Box>
				
           
        

                </div>
           
        
        
            <br></br>
       </div>
          </div>
        
       
       
  
        
     
      </Layout>
      
    )}
    export async function getServerSideProps({ query: {pages= 1} }){
  
  
      const start = +pages === 1 ? 0 : (+page - 1) * 3
      const res =
      await fetch(`${url}&page_size=10`, {
        crossDomain:true,
        method: 'GET',
        mode:'cors',
        headers :{
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token}`
      }
      })
      .then((res)=>res.json())
      
      return {
        props:{
          res: res,
          pages: +pages, 
          
        }
      }
   
    
  }