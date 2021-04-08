import next from "next";
import Head from "next/head";
import Link from "next/link";

import { Container } from "postcss";
export default function Layout({children, page}){
    return (
       <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
  
    
  
  <div className="flex-grow overflow-hidden h-full flex flex-col">
    <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
      <div className="flex h-full text-gray-600 dark:text-gray-400">
        <a href="" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Module 1</a>
        <a href="" className="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center">Module 2</a>
        <a href="#" className="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8">Module 3</a>
        
      </div>
      <div className="ml-auto flex items-center space-x-7">
    

        
      </div>
    </div>
    <div className="flex-grow flex overflow-x-hidden">
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
       
        
        
      </div>
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
      {children}
      </div>
    </div>
  </div>
</div>
    )
}