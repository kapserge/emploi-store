import Layout from "../component/Layout"
import { useEffect, useReducer, useState } from 'react';
import dynamic from "next/dynamic";
import axios from "axios";
import Cors from 'cors';
import ReactPaginate from 'react-paginate';
import { Flex, Box } from 'reflexbox';
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import Rating from '@material-ui/lab/Rating';
const Map = dynamic(() => import("../component/Map"), {
  loading: () => "Loading...",
  ssr: false
});
const token = process.env.API_KEY;;
const url = `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=100&latitude=48.8534&longitude=2.3488&rome_codes=M1805&headcount=big`;

export default function Home({res,pages,numberComp}) {
  const [showModal, setShowModal] = React.useState(false);
const  router= useRouter();
  const [locations, setLocations] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  const limit = 2;
  const pageCounts = 3;
  const total = 20 * limit;
  
  console.log(res);
  console.log(numberComp);
  const lastPage = Math.ceil(numberComp / 2);
  console.log(router.query);
    return (
      <Layout page = {'Chrypto Watch -Accuael'}>
        <br></br>
        <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50"onClick = {()=>router.back()}>Retour</button>
     <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 ml-8"onClick = {()=>router.push(`/`)}>Accueuil</button>
     
     <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50 ml-8"onClick = {()=>router.push(`/About`)}>Pagination</button>
        <br></br>  
      
         
         <Box variant="container" pt={4}>
         {res.companies.map((post,key) => 
       
      
      <button className=" p-3 w-4/12  flex-col rounded-md dark:bg-gray-800 shadow" onClick = {()=>router.push({
        pathname: `/companies/${post.siret}`,
        query: {name: post.name, siret: post.siret,
          headcount_text: post.headcount_text, adress: post.adress,
          matched_rome_label: post.matched_rome_label, 
          lat: post.lat,lon: post.lon,
      
      }
     })
}>
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
              <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
              {post.name}
            </div>
            <div className="align-baseline">
              <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">{post.city}</div>
             
              <div >{post.headcount_text}</div>
              <div >{post.siret}</div>
              
              <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating name="disabled" value={post.stars} disabled />
        <div >{post.stars}</div>
      </Box>
              
            </div>
          </button>
          )}
          <Flex mt={4} pl={20} justifyContent="space-between" maxWidth={300}>
                <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50" 
                onClick = {()=>router.push(`/About?page =${pages -1 }`)} >Previous</button>
                <button className="focus:outline-none text-blue-600 text-sm py-2.5 px-5 rounded-md border border-blue-600 hover:bg-blue-50"
                onClick = {()=>router.push(`/About?page =${pages +1 }`)} disabled={pages >= lastPage}>Next</button>
               
            </Flex>
          </Box>
          
      
        
        
            <br></br>
       
        
      </Layout>
      
    )}
export async function getServerSideProps({ query: {pages= 1} }){
  
  var numberComp = 20;
  const start = +pages === 1 ? 0 : (+pages - 1) * 3
    const res =
    await fetch(`${url}&page_size=10
    `, {
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
        numberComp: numberComp
      }
    }
 
  
}