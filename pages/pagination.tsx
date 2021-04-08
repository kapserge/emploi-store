import Layout from "../component/Layout"
import { useEffect, useReducer, useState } from 'react';
import dynamic from "next/dynamic";
import axios from "axios";
import Cors from 'cors';
import ReactPaginate from 'react-paginate';
import { Flex, Box } from 'reflexbox';
import { useRouter } from 'next/router'

const Map = dynamic(() => import("../component/Map"), {
  loading: () => "Loading...",
  ssr: false
});
const token = '0l-m-uRqbNe1xsfVZQ41wa4ivoo';
const API_URL = `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=30&latitude=48.8534&longitude=2.3488&rome_codes=M1805`;

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL, {
      crossDomain:true,
      method: 'GET',
      mode:'cors',
      headers :{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
    }
    }}.json`);
    const json = await data.json();
    return {
      props: {
        jobs: json,
      },
    };
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};
export default function Home() {
  

  const [locations, setLocations] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [isLoaded, setisLoaded] = useState(false);
  const limit = 2;
  const pageCounts = 3;
  const total = 20 * limit;
  const url = `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?distance=30&latitude=48.8534&longitude=2.3488&rome_codes=M1805`;

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url, {
        crossDomain:true,
        method: 'GET',
        mode:'cors',
        headers :{
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization' : `Bearer ${token}`
      }
      })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setLocations(myJson.companies)
        setPageCount(body.nbPages); 
                        setisLoaded(true);
      })
      
      .catch((err) => console.log({ err }));
  }
    fetchLocations();
  }, []);
  const handlePageChange = (selectedObject) => {
		setcurrentPage(selectedObject.selected);
		fetchLocations();};
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
      <Box variant="container" pt={4}>
      {locations.map(post=> 
       
      
      <button className=" p-3 w-4/12  flex-col rounded-md dark:bg-gray-800 shadow">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
              <img src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab" className="w-7 h-7 mr-2 rounded-full" alt="profile" />
              {post.name}
            </div>
            <div className="align-baseline">
              <div className="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md">{post.city}</div>
             
              <div >{post.headcount_text}</div>
              <div >{post.siret}</div>
              <div >{post.stars}</div>
              
            </div>
          </button>
          )}
          <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
                <button >Previous</button>
                <button >Next</button>
            </Flex>
          </Box>
				
			
			
          <br></br>
     </div>
        </div>
      
     
     

      
   
    </Layout>
    )
}
