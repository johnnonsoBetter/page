import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import Modal from './Modal'



const Search = ({showMobileSearch, setShowMobileSearch}) => {

  return (
    <div className=" w-full lg:w-[400px] sm:w-[300px] md:w-[250px] sm:mr-2   justify-center ">
    
      <label className="flex items-center bg-lowdark py-1  rounded-lg px-2">

        <svg xmlns="http://www.w3.org/2000/svg" className="mx-1" viewBox="0 0 24 24" width="17" height="17"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(162,162,162,1)"/></svg>
        <input type="email" name="email" 
        className="mt-1  px-2 pb-1 focus:outline-none border-0 font-semibold bg-lowdark text-lowpink w-full text-xs  sm:text-sm" placeholder="Lorem ipsum" />
        
        {
          showMobileSearch &&
      
        <button onClick={() => setShowMobileSearch(false)} className="rounded text-xs" >
        Cancel
        </button>
        }
      
      </label>
    </div>
  )
}


export default function Appbar({setModalOpen}) {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  
  
  return (
      <nav  className=" px-1  relative drop-shadow sticky top-0 h-[58px]  z-20 bg-deepblack ">
      
        
        
      {
        
        showMobileSearch ?
      
      <div className=" flex justify-start items-center w-full h-full text-white animate-in zoom-in fade-in zoom-out"
    >
      <Search showMobileSearch={true} setShowMobileSearch={setShowMobileSearch}/> 
      
      </div>
      :
      
      
          <div className=" h-full  w-full  flex flex-wrap items-center justify-between p-2 md:p-4">
            
            <div className="hidden md:block">
                 <Link href="/">
                <Image width={195}
                 height={23} src='/logo.png' alt='logo' />
                </Link>
            
            </div>
            
            <div className="xs:block md:hidden">
                 <Link href="/">
                <Image width={130}
                 height={15} src='/logo.png' alt='logo' />
                </Link>
            
            </div>
           
            
            
            <div className="flex items-center">

              <div className="hidden md:block " >  
                <Search />
              </div>
              
               <div className="mx-1 hidden sm:block md:hidden">
                <Search />
              </div>
              
              <button onClick={() => setShowMobileSearch(true) }  className="block sm:hidden mx-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-1" viewBox="0 0 24 24" width="19" height="19"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(162,162,162,1)"/></svg>
              
              
              </button>
              
              <button onClick={() => setModalOpen(true)} className="block md:hidden" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="23"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" fill="rgba(162,162,162,1)"/></svg>
              
              </button>
              
             
     
            
              
              <div className="hidden md:block" >
              <Link href="#" >
              
                <span  className='text-white font-extrabold mx-2  text-sm' >Lorem</span>
              
              </Link>
              
               <Link href="#" >
              
                <span  className='text-white font-extrabold mx-2  text-sm' >Lorem</span>
              
              </Link>
              
                 <Link href="#" >
              
                <span  className='text-white font-extrabold mx-2  text-sm' >Lorem</span>
              
              </Link>
              
              </div>
              
              
              
              
            
            </div>
          </div> 
      }
      </nav>  
  )
}